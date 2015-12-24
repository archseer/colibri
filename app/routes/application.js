import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    toggleSlideOut() {
      console.log("test!");
      this.get('controller').toggleProperty('openSlideOut');
    }
  }

});
