import { redirect } from '@sveltejs/kit';

export const load = ({ cookies }: any) => {
	cookies.set('jwt', '', {
		path: '/',
		expires: new Date(0)
	});
	cookies.set('basic', '', {
		path: '/',
		expires: new Date(0)
	});

	throw redirect(307, '/');
};
