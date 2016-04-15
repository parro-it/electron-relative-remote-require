import test from 'ava';
import remoteRequire from './';

test('it work!', t => {
	const result = remoteRequire();
	t.is(result, 42);
});
