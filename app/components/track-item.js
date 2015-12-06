import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['track'],

  classNameBindings: ['active'],

  active: function() {
    var current = this.get('audiojs.current');
    if (!current) { return false }
    return this.get('track').id == current.id;
  }.property('track', 'audiojs.current'),

  click() {
    var audio = this.get('audiojs');
    audio.load(this.get('track'));
    audio.play();
  }
});
