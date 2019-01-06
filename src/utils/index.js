export function addEvent(event, cb) {
  window.addEventListener(event, cb, false);
  return () => window.removeEventListener(event, cb, false);
}

export function extractNodes(contentTypeConnection) {
  return contentTypeConnection.edges.map(edge => edge.node);
}
