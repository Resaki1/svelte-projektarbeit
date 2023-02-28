import { getUserInfo } from '$lib/api';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch, cookies }: any) {
	const jwt = cookies.get('jwt');
	const basic = cookies.get('basic');

	const user = jwt ? await getUserInfo(fetch, jwt) : undefined;
	return {
		user: {
			...user,
			jwt,
			basic
		}
	};
}
