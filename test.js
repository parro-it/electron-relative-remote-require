import test from 'ava';
import execa from 'execa';

test('it work!', async (t) => {
	const result = await execa('electron', ['fixtures/index.js']);
	t.is(result.stdout, '{"required":"b is required","remoterequired":"b is remote required"}');
});
