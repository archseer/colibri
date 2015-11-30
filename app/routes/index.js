import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [{
      img: 'http://2dopeboyz.com/wp-content/uploads/2015/04/taku-love-again.jpg',
      title: 'Love again',
      artist: 'Taku',
      url: '/final.mp3'
    },{
      img: 'http://www.soundcrashmusic.com/wp-content/uploads/2015/02/Flako_Natureboy_pakshot_lo.jpg',
      title: 'Natureboy',
      artist: 'Flako',
      url: '/track2.mp3'
    }];
  }
});
