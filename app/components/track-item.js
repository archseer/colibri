import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['track'],

  classNameBindings: ['active'],

  active: function() {
    var current = this.get('player.current.filename');
    if (!current) { return false; }
    return this.get('track.filename') === current;
  }.property('track', 'player.current'),

  click() {
    this.get('player').enqueueMany([this.get('track')]);
  }
});
