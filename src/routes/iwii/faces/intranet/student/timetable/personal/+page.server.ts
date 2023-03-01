import { getPersonalTimetable } from '$lib/api';
import { getDates } from '$lib/helpers';
import { redirect } from '@sveltejs/kit';

export const load = async ({ parent, fetch }: any) => {
	const { user } = await parent();

	if (!user.adsName) {
		throw redirect(307, '/');
	}

	const personalTimetable = await getPersonalTimetable(fetch, user.basic);
	const dates = getDates(personalTimetable);

	return {
		events: dates ?? []
	};
};
