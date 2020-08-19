
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { o as onDestroy } from './main-f883e670.js';

function onEvent(event, cb) {
  window.addEventListener(event, cb, false);
  onDestroy(function () {
    return window.removeEventListener(event, cb, false);
  });
}

function onResize(cb) {
  return onEvent('resize', cb);
}

export { onEvent as a, onResize as o };
//# sourceMappingURL=onResize-c5ea2ec7.js.map
