export function addEvent(event, cb) {
  window.addEventListener(event, cb, false);
  return () => window.removeEventListener(event, cb, false);
}
