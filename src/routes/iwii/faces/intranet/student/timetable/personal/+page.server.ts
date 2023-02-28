import { getPersonalTimetable } from '$lib/api';
import { mapTimetableEntries } from '$lib/helpers';
import { redirect } from '@sveltejs/kit';

export const load = async ({ parent, fetch }: any) => {
	const { user } = await parent();

	if (!user.adsName) {
		throw redirect(307, '/');
	}

	const personalTimetable = await getPersonalTimetable(fetch, user.basic);
	//console.log(personalTimetable);
	//console.log(mapTimetableEntries(personalTimetable));

	return {
		events: mapTimetableEntries(personalTimetable)
	};
};
