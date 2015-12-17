import Ember from 'ember';
import Settings from 'colibri/models/settings';
import StorageArray from 'ember-local-storage/local/array';

let Queue = StorageArray.extend({
  storageKey: 'colibri-queue'
});

export default Ember.Service.extend(Ember.Evented, {
  pageload: true, // restore position
  playing: false,
  position: 0,
  duration: 0,
  currentIndex: 0,

  current: function() {
    return this.get('queue').objectAt(this.get('currentIndex'));
  }.property('currentIndex'),

  progress: function() {
    return (this.get('position') / this.get('duration')) * 100;
  }.property('position', 'duration'),

  store: Settings.create(),
  queue: Queue.create(),

  setup: function() {
    let audio = new Audio5js({
      swf_path: '/audio5js.swf',
      format_time: false,
      throw_errors: true,
      ready: () => { this.set('ready', true); }
    });
    audio.on('play',  () => { this.set('playing', true); });
    audio.on('pause', () => { this.set('playing', false); });
    audio.on('ended', () => {
      let current = this.get('currentIndex');
      if (current + 1 < this.get('queue.length')) {
        this.playSong(current + 1);
      } else {
        this.set('playing', false);
      }
    });
    audio.on('error', (e) => { console.log(e); });
    audio.on('timeupdate', (position, duration) => {
      this.set('position', position);
      this.set('duration', duration);
    });
    audio.on('progress', () => {
      this.set('duration', audio.duration);
    });
    $(window).on('unload', () => {
      this.set('store.position', this.get('position'));
    });
    this.set('audio', audio);
    // load any files on current pageload.
    // TODO: Ideally move this to the play button or something, defer until
    // necessary.
    this.load(this.get('current.filename'));
    window.player = audio;
  }.on('init'),

  autoplay: function() {
    let filename = this.get('current.filename');
    if (filename) {
      this.load(filename);
      this.play();
    }
  }.observes('current'),

  enqueue: function(track) {
    this.get('queue').pushObject(track);
  },

  enqueueMany: function(enumerable) {
    let queue = this.get('queue');
    queue.clear();
    queue.pushObjects(enumerable.toArray());
    this.playSong();
  },

  playSong: function(index = 0) {
    this.set('currentIndex', index);
    this.notifyPropertyChange('currentIndex');
  },

  prev: function() {
    let index = this.decrementProperty('currentIndex');
    if (!(index < 0)) {
      this.playSong(index);
    }
  },
  next: function() {
    let queue = this.get('queue'),
        index = this.incrementProperty('currentIndex');
    if (index < queue.get('length')) {
      this.playSong(index);
    }
  },

  load: function(filename) {
    if (filename === undefined) return;
    let audio = this.get('audio');
    audio.pause();
    audio.playing = false;
    this.set('playing', false);
    this.set('position', 0);
    this.set('duration', 0);
    audio.load(`http://localhost:4000/${filename}`);
    if (this.get('pageload')) { // restore last position
      let pos = this.get('store.position');
      if (pos > 0) this.seek(pos);
      this.set('pageload', false);
    }
  },

  play: function() {
    this.get('audio').play();
  },

  pause: function() {
    this.get('audio').pause();
  },

  playPause: function() {
    this.get('audio').playPause();
  },

  seek: function(t) {
    this.get('audio').seek(t);
    this.set('position', t);
  },

});
