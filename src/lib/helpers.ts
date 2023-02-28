import type { TimetableEntries } from './apiResponseTypes';

export const formatDateString = (dateString: string): string => {
	const date = new Date(dateString);
	return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

type CalenderEvent = {
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

function createDateObject(dateString: string, timeInMinutes: number, dayOffset: number): Date {
	const dateParts = dateString.split('-').map((part) => parseInt(part));
	const hour = Math.floor(timeInMinutes / 60 + 2);
	const minutes = timeInMinutes % 60;
	const year = dateParts[0];
	const month = dateParts[1] - 1; // Months are 0-11
	const date = dateParts[2] + dayOffset;
	return new Date(year, month, date, hour, minutes);
}

export const mapTimetableEntries = (timetableEntries: TimetableEntries): CalenderEvent[] => {
	return timetableEntries.map((value) => {
		/*  firstDate: '2022-09-26',
			startTime: 840,
      		endTime: 985,
			interval: 'WEEKLY', */
		const entry = value.entry;
		return {
			id: entry.id.toString(),
			start: createDateObject(entry.firstDate, entry.startTime, entry.day),
			end: createDateObject(entry.firstDate, entry.endTime, entry.day),
			title: entry.lectureName
		};
	});
};
