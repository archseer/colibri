import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cover'],
  actions: {
    playTrack: function() {
      var audio = this.get('audiojs');
      audio.load(this.get('album'));
      audio.play();
    }
  }
});
