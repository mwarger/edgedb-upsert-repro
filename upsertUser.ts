import e, { $infer } from './codegen';
import * as edgedb from 'edgedb';

const client = edgedb.createClient();

export async function upsertUser({
	uid,
	email,
}: {
	uid: string;
	email?: string;
}) {
	const upsertQuery = e
		.insert(e.User, {
			uid,
			email,
		})
		.unlessConflict(user => ({
			on: user.uid,
			else: e.update(user, () => ({
				set: {
					email,
				},
			})),
		}));

	const results = await upsertQuery.run(client);

	return results;
}

upsertUser({
	uid: 'user1',
	email: 'test2222@test.com',
}).then(result => {
	console.log(result);
});
