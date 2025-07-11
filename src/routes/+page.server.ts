import { initClient } from 'trailbase';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const client = initClient('http://localhost:4000');
	console.log(client);
	const posts = await client.records('posts').list();
	console.log(posts);
	return {
		posts: []
	};
};
