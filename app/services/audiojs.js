import Ember from 'ember';

export default Ember.Service.extend(Ember.Evented, {
  playing: false,
  progress: 0,
  current: null,

  setup: function() {
    var audio = new Audio5js({
      swf_path: '/audio5js.swf',
      format_time: false,
      throw_errors: true,
      ready: () => { this.set('ready', true); }
    });
    audio.on('play',  () => { this.set('playing', true); });
    audio.on('pause', () => { this.set('playing', false); });
    audio.on('ended', () => { this.set('playing', false); });
    audio.on('error', (e) => { console.log(e) });
    audio.on('timeupdate', (position, duration) => {
      this.set('progress', (position / duration) * 100);
    });
    this.set('audio', audio);
    window.player = audio;
  }.on('init'),

  load: function(track) {
    var audio = this.get('audio');
    audio.pause();
    audio.playing = false;
    this.set('current', track);
    this.set('playing', false);
    audio.load(track.url);
  },

  play: function() {
    this.get('audio').play();
  },

  pause: function() {
    this.get('audio').pause();
  },

  playPause: function() {
    this.get('audio').playPause();
    this.set('title', 'yoyoyoy');
  }

});
