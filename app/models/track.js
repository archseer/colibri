import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  duration: DS.attr('number'),
  disc: DS.attr('number'),
  filename: DS.attr('string'),

  album: DS.belongsTo('album'),
  artist: DS.belongsTo('artist'),
  playlists: DS.hasMany('playlist')
});
