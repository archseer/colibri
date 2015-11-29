import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [{
      img: 'http://2dopeboyz.com/wp-content/uploads/2015/04/taku-love-again.jpg',
      title: 'Love again',
      artist: 'Taku',
      track_url: '/final.mp3'
    }];
  }
});
