import { dev } from '$app/environment';
import { getUserInfo, loginUser } from '$lib/api';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request, fetch }: any) => {
		const data = await request.formData();
		const login = data.get('login');
		const password = data.get('password');

		const response = await loginUser(fetch, login, password);
		const userInfo = await getUserInfo(fetch, response.accessToken);

		if (userInfo.status === 401) return response;

		if (userInfo) {
			cookies.set('jwt', response.accessToken, {
				path: '/',
				secure: !dev,
				expires: new Date(response.tokenExpiration)
			});

			cookies.set('user', JSON.stringify(userInfo), {
				path: '/',
				secure: !dev,
				expires: new Date(response.tokenExpiration)
			});

			throw redirect(307, '/');
		}
	}
};
