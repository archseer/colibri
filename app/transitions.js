import Ember from "ember";

export default function() {
  this.transition(
    //this.hasClass('toLeft-demo'),
    this.toValue(true),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
