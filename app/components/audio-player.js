import Ember from 'ember';
import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/component';

export default Ember.Component.extend(KeyboardShortcuts, {
  tagName: 'footer',
  title: 'Random title',

  progressPercentage: Ember.computed('player.progress', function(){
    let width = this.get('player.progress');
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
      let audio = this.get('player');
      let pos = ((e.pageX - e.currentTarget.offsetLeft)/e.currentTarget.offsetWidth) * audio.duration;
      audio.seek(pos);
    }
  },

  keyboardShortcuts: {
    'space': 'playPause'
  }
});
