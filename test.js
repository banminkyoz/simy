import test from 'ava';
import sincewemet from '.';

test('get correct simy times', t => {
  t.deepEqual(sincewemet.getFirstTimeMet(), '11/06/2017 08:23:00');
  t.truthy(sincewemet.getSinceIMetYou());
  t.truthy(sincewemet.getSinceIMetYouDetail());
});
