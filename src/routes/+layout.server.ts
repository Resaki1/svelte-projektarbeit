import { getUserInfo } from '$lib/api';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch, cookies }: any) {
	const jwt = cookies.get('jwt');
	const user = await getUserInfo(fetch, jwt);
	return {
		user: {
			...user,
			jwt
		}
	};
}
