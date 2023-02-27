import { dev } from '$app/environment';
import { redirect } from '@sveltejs/kit';

export const load = ({ cookies }: any) => {
	cookies.set('jwt', '', {
		path: '/',
		expires: new Date(0),
		secure: !dev
	});

	throw redirect(307, '/');
};
