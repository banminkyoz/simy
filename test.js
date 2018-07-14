import test from 'ava';
import execa from 'execa';
import simy from '.';

test('api should return valid value', t => {
  t.deepEqual(simy.getFirstTimeMet(), '11/06/2017 08:23:00');
  t.truthy(simy.getSinceIMetYou());
  t.truthy(simy.getSinceIMetYouDetail());
});

test('cli should return valid value', async t => {
  const {stdout} = await execa('./cli.js');
  t.true(stdout.length > 0);
});
