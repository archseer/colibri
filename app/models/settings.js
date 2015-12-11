// app/models/settings.js
import StorageObject from 'ember-local-storage/local/object';
// or use sessionStorage
// `import StorageObject from 'ember-local-storage/session/object';`

export default StorageObject.extend({
  storageKey: 'colibri-settings',
  initialContent: {
    position: 0,
    duration: 0
  }
});
