import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'footer',
  title: 'Random title',

  progressPercentage: Ember.computed('player.progress', function(){
    var width = this.get('player.progress');
    return new Ember.Handlebars.SafeString(`width: ${width}%`);
  }),

  actions: {
    playPause: function() {
      this.get('player').playPause();
    },

    next: function() {
      this.get('player').next();
    },

    prev: function() {
      this.get('player').prev();
    },

    seek: function(e) {
      var audio = this.get('player');
      var pos = ((e.pageX - e.currentTarget.offsetLeft)/e.currentTarget.offsetWidth) * audio.duration;
      audio.seek(pos);
    }
  },
});
