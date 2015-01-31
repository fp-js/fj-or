import test from 'prova';
import or from './';


test('fj-or', (t) => {
  t.plan(5);

  let T = () => true;
  let F = () => false;

  t.ok(or(T, T)());
  t.ok(or(T)(T)());
  t.ok(or(T, F)());
  t.notOk(or(F, F)());
  t.notOk(or(F, F)());
});
