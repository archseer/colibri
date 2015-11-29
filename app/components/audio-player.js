import Ember from 'ember';

export default Ember.Component.extend({
  title: 'Random title',
  player: Ember.inject.service('audiojs'),

  didInsertElement: function() {
    var audio = this.get('player');
  },

  progressPercentage: Ember.computed('player.progress', function(){
    var width = this.get('audiojs.progress');
    return new Ember.Handlebars.SafeString(`width: ${width}%`);
  }),

  actions: {
    playPause: function() {
      this.get('player').playPause();
    },
  },
});
