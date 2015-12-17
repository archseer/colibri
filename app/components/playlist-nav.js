import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',

  store: Ember.inject.service(),

  getPlaylists: function() {
    var playlists = this.get('store').findAll('playlist');
    this.set('playlists', playlists);
  }.on('init'),

  actions: {
    create: function() {
      var store = this.get('store');
      var playlist = store.createRecord('playlist', {
        title: 'Rails is Omakase'
      });
    }
  }
});
