import { getPersonalTimetable } from '$lib/api';
/* import { getDates } from '$lib/helpers'; */

export const load = async ({ parent }: any) => {
	const { user } = await parent();

	const events = await getPersonalTimetable(fetch, user.basic);
	/* const events = getDates(personalTimetable); */

	return {
		events
	};
};
