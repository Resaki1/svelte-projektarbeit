import { getPersonalTimetable } from '$lib/api';
import { getDates } from '$lib/helpers';

export const load = async ({ parent, fetch }: any) => {
	const { user } = await parent();

	const personalTimetable = await getPersonalTimetable(fetch, user.basic);
	const dates = getDates(personalTimetable);

	return {
		events: dates ?? []
	};
};
