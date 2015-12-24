import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['track'],

  classNameBindings: ['active'],

  active: function() {
    let current = this.get('player.current.filename');
    if (!current) { return false; }
    return this.get('track.filename') === current;
  }.property('track', 'player.current'),


  actions: {
    play: function() {
      this.get('player').enqueueMany([this.get('track')]);
    },
    toggle: function() {
      this.toggleProperty('managePlaylists');
    }
  }
});
