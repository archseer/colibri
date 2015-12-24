import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    toggleSlideOut() {
      this.get('controller').toggleProperty('openSlideOut');
    }
  }

});
