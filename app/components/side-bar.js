import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'aside',

  slideout: null,
  classNames: ['slideout-menu'],
  isOpen: false,

  setupSlideOut: Ember.on('didInsertElement', function() {
    let so = new Slideout({
      panel: Ember.$('main')[0],
      menu: Ember.$('aside')[0],
      padding: 190
    });
    this.set('slideout', so);
  }),

  teardownSlideOut: Ember.on('willDestroyElement', function() {
    if (!Ember.isNone(this.get('slideout'))) {
      this.get('slideout').close();
      delete this.get('slideout');
      this.set('slideout', null);
    }
  }),


  handleToggle: Ember.observer('isOpen', function() {
    let so = this.get('slideout');
    if (Ember.isNone(so)) {
      return;
    }
    if (this.get('isOpen')) {
      so.open();
    } else {
      so.close();
    }
  }),

  actions: {
    toggleSlideOut() {
      this.toggleProperty('isOpen');
    },
  }
});
