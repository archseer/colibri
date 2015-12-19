import PopOver from "ember-pop-over/components/pop-over";

var DropDown = PopOver.extend({
  classNames: ['drop-down'],
  layoutName: 'components/pop-over',
  on: ['click'],
  flow: 'dropdown'
});

export default DropDown;
