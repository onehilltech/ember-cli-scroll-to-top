import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ScrollToTopService extends Service {
  @service
  router;

  @tracked
  behavior = 'auto';

  constructor() {
    super(...arguments);

    this.router.on ('routeDidChange', () => {
      window.scrollTo ({ left: 0, top: 0, behavior: this.behavior });
    });
  }
}
