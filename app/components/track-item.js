import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['track'],

  classNameBindings: ['active'],

  active: function() {
    var current = this.get('player.current');
    if (!current) { return false; }
    return this.get('track.filename') === current.filename;
  }.property('track', 'player.current'),

  click() {
    var audio = this.get('player');
    audio.load(this.get('track'));
    audio.play();
  }
});
