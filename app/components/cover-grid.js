import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    playTrack: function(url) {
      var audio = this.get('audiojs');
      audio.load(url);
      audio.play();
    }
  }
});
