import type { TimetableEntries, TimetableEntry } from './apiResponseTypes';

export const formatDateString = (dateString: string): string => {
	const date = new Date(dateString);
	return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

type CalendarEvent = {
	id: string;
	resourceIds?: string[];
	allDay?: boolean;
	start: Date | string;
	end: Date | string;
	title: string;
	titleHTML?: string;
	editable?: boolean;
	startEditable?: boolean;
	durationEditable?: boolean;
	display?: 'auto' | 'background';
	backgroundColor?: string;
	extendedProps?: object;
};

export const getDates = (entries: TimetableEntries): CalendarEvent[] => {
	const dates: CalendarEvent[] = [];
	entries.forEach((entry) => {
		const { startTime, endTime, day, interval, firstDate, lastDate, id, title } =
			entry.entry ?? entry;

		const first = new Date(firstDate);
		first.setDate(first.getDate() + day + 2);
		const last = new Date(lastDate);
		last.setDate(last.getDate() + day + 3);

		const currentDate = new Date(first);
		let daysBetween;
		switch (interval) {
			case 'DAILY':
				daysBetween = 1;
				break;
			case 'WEEKLY':
				daysBetween = 7;
				break;
			case 'FORTNIGHTLY':
				daysBetween = 14;
				break;
			default:
				daysBetween = 7;
		}

		while (currentDate <= last) {
			const start = new Date(currentDate);
			const end = new Date(currentDate);
			start.setHours(Math.floor(startTime / 60), startTime % 60, 0);
			end.setHours(Math.floor(endTime / 60), endTime % 60, 0);
			dates.push({ id: id.toString(), title, start, end });

			currentDate.setDate(currentDate.getDate() + daysBetween);
		}
	});

	return dates;
};

export const mapSemesterTimetablestoEntries = (timetables: TimetableEntries): TimetableEntries => {
	const entries: TimetableEntries = [];
	console.log(timetables);
	timetables.forEach((timetable) => {
		entries.push(timetable);
	});
	return entries;
};
