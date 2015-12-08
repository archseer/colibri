import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cover'],

  cover: function() {
    return `http://localhost:4000/${this.get('album.cover')}`
  }.property('album.cover'),

  actions: {
    queueAlbum: function() {
      var audio = this.get('player');
      var tracks = this.get('album.tracks').then(function(tracks) {
        audio.enqueueMany(tracks);
      });
    }
  }
});
