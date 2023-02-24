import { dev } from '$app/environment';
import { getUserInfo, loginUser } from '$lib/api';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request, fetch, locals }: any) => {
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

			locals.user = userInfo;

			throw redirect(307, '/');
		}
	}
};
