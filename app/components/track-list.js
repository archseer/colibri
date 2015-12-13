import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['tracklist'],

  totalDuration: function() {
    return this.get('tracks').mapBy('duration').reduce(function(a, b) {return a + b}, 0);
  }.property('tracks.@each.duration')
});
