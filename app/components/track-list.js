import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['tracklist'],

  actions: {
    playTrack(track) {
      var audio = this.get('audiojs');
      audio.load(track);
      audio.play();
    }
  }
});
