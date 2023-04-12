export function initialize (application) {
  application.inject ('route:application', 'scrollToTop', 'service:scroll-to-top');
}

export default {
  initialize,
};
