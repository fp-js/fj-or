import test from 'prova';
import or from './';


test('fj-or', (t) => {
  t.plan(6);

  let T = () => true;
  let F = () => false;

  t.ok(or(T, T)());
  t.ok(or(T)(T)());
  t.ok(or(T, F)());
  t.ok(or(F, T)());
  t.notOk(or(F, F)());
  t.notOk(or(F, F)());
});
