import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'footer',
  title: 'Random title',
  player: Ember.inject.service('audiojs'),

  progressPercentage: Ember.computed('player.progress', function(){
    var width = this.get('audiojs.progress');
    return new Ember.Handlebars.SafeString(`width: ${width}%`);
  }),

  actions: {
    playPause: function() {
      this.get('player').playPause();
    },

    seek: function(e) {
      var audio = this.get('player');
      var pos = ((e.pageX - e.currentTarget.offsetLeft)/e.currentTarget.offsetWidth) * audio.duration;
      audio.seek(pos);
    }
  },
});
