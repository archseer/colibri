import Ember from 'ember';

export function addOne(value/*, hash*/) {
  return value[0] + 1;
}

export default Ember.Helper.helper(addOne);
