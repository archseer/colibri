import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  router: Ember.inject.service('-routing'),

  classNames: ['login'],

  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
          authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials).then(() => {
        this.get('router').transitionTo('index');
      });
    }
  }
});
