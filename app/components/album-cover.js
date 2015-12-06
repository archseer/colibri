import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cover'],

  cover: function() {
    return `http://localhost:4000/${this.get('album.cover')}`
  }.property('album.cover'),

  actions: {
    playTrack: function() {
      var audio = this.get('audiojs');
      audio.load(this.get('album'));
      audio.play();
    }
  }
});
