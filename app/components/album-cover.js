import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cover'],

  actions: {
    queueAlbum: function() {
      let audio = this.get('player');
      let tracks = this.get('album.tracks').then(function(tracks) {
        audio.enqueueMany(tracks);
      });
    }
  }
});
