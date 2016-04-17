import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
    invalidateSession() {
      this.get('session').invalidate().then(() => {
        this.transitionTo('/login');
      });
    },
    toggleSlideOut() {
      this.get('controller').toggleProperty('openSlideOut');
    }
  }

});
