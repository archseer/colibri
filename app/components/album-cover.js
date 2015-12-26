import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cover'],

  actions: {
    queueAlbum: function() {
      let audio = this.get('player');
      audio.enqueue(this.get('album'));
    }
  }
});
