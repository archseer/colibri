export function initialize(application) {
  application.inject('component', 'player', 'service:audiojs');
  application.inject('controller', 'player', 'service:audiojs');
}

export default {
  name: 'audio',
  initialize
};
