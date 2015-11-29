export function initialize(application) {
  application.inject('component', 'audiojs', 'service:audiojs');
}

export default {
  name: 'audio',
  initialize
};
