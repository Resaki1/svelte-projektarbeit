import { getPersonalTimetable } from '$lib/api';
import { redirect } from '@sveltejs/kit';

export const load = async ({ parent, fetch }: any) => {
	const { user } = await parent();

	if (!user.adsName) {
		throw redirect(307, '/');
	}

	console.log(user.basic);
	const personalTimetable = await getPersonalTimetable(fetch, user.basic);
	console.log(personalTimetable);
};
