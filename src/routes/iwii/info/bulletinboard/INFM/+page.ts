import { getBulletinBoard } from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }: { fetch: (url: string) => any }) {
	return {
		news: await getBulletinBoard(fetch)
	};
}
