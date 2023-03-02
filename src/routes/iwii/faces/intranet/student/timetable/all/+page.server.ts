import { getAllTimetables } from '$lib/api';

export const load = async () => {
	const allTimetables = await getAllTimetables(fetch);

	return {
		allTimetables
	};
};
