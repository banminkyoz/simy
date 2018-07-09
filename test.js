import test from 'ava';
import simy from '.';

test('get correct simy times', t => {
  t.deepEqual(simy.getFirstTimeMet(), '11/06/2017 08:23:00');
  t.truthy(simy.getSinceIMetYou());
  t.truthy(simy.getSinceIMetYouDetail());
});
