import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | scroll-to-top', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:scroll-to-top');
    assert.ok(service);
  });
});
