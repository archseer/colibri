import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  duration: DS.attr('integer'),
  disc: DS.attr('integer'),
  filename: DS.attr('string'),

  album: DS.belongsTo('album'),
  artist: DS.belongsTo('artist')
});
