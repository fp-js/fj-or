import test from 'prova';
import or from './';


test('fj-or', (t) => {
  t.plan(8);

  let T = () => true;
  let F = () => false;
  let isF = (x) => x === false;
  let isT = (x) => x === true;

  t.ok(or(isF,isT)(true));
  t.notOk(or(isF,isF)(true));
  t.ok(or(T, T)());
  t.ok(or(T)(T)());
  t.ok(or(T, F)());
  t.ok(or(F, T)());
  t.notOk(or(F, F)());
  t.notOk(or(F, F)());
});
