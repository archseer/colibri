import Ember from 'ember';
import Settings from 'colibri/models/settings';
import StorageArray from 'ember-local-storage/local/array';

var Queue = StorageArray.extend({
  storageKey: 'colibri-queue',
});

export default Ember.Service.extend(Ember.Evented, {
  playing: false,
  progress: 0,
  position: 0,
  duration: 0,
  currentIndex: 0,

  current: function() {
    return this.get('queue').objectAt(this.get('currentIndex'));
  }.property('currentIndex'),

  store: Settings.create(),
  queue: Queue.create(),

  setup: function() {
    var audio = new Audio5js({
      swf_path: '/audio5js.swf',
      format_time: false,
      throw_errors: true,
      ready: () => { this.set('ready', true); }
    });
    audio.on('play',  () => { this.set('playing', true); });
    audio.on('pause', () => { this.set('playing', false); });
    audio.on('ended', () => {
      var current = this.get('currentIndex');
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
      this.set('progress', (position / duration) * 100);
    });
    this.set('audio', audio);
    // load any files on current pageload.
    // TODO: Ideally move this to the play button or something, defer until
    // necessary.
    this.load(this.get('current.filename'));
    window.player = audio;
  }.on('init'),

  autoplay: function() {
    var filename = this.get('current.filename');
    if (filename) {
      this.load(filename);
      this.play();
    }
  }.observes('current'),

  enqueue: function(track) {
    this.get('queue').pushObject(track);
  },

  enqueueMany: function(enumerable) {
    var queue = this.get('queue');
    queue.clear();
    queue.pushObjects(enumerable.toArray());
    this.playSong();
  },

  playSong: function(index = 0) {
    this.set('currentIndex', index);
    this.notifyPropertyChange('currentIndex');
  },

  prev: function() {
    var index = this.decrementProperty('currentIndex');
    if (!(index < 0)) {
      this.playSong(index);
    }
  },
  next: function() {
    var queue = this.get('queue'),
        index = this.incrementProperty('currentIndex');
    if (index < queue.get('length')) {
      this.playSong(index);
    }
  },

  load: function(filename) {
    if (filename === undefined) return
    var audio = this.get('audio');
    audio.pause();
    audio.playing = false;
    this.set('playing', false);
    this.set('position', 0);
    this.set('duration', 0);
    audio.load(`http://localhost:4000/${filename}`);
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
  },

});
