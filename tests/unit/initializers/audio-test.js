import Ember from 'ember';
import AudiojsInitializer from '../../../initializers/audiojs';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | audiojs', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  AudiojsInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
