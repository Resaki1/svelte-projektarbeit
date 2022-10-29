import { getBulletinBoard } from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		news: await getBulletinBoard()
	};
}
