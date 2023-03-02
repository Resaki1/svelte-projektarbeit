import { getAllTimetables } from '$lib/api';
import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }: any) => {
	const { user } = await parent();

	if (!user.adsName) {
		throw redirect(307, '/');
	}

	const allTimetables = await getAllTimetables(fetch);

	return {
		allTimetables
	};
};
