<script lang="ts">
	import Calendar from '@event-calendar/core';
	import TimeGrid from '@event-calendar/time-grid';
	import DayGrid from '@event-calendar/day-grid';
	import ListWeek from '@event-calendar/list';
	import '@event-calendar/core/index.css';
	import { page } from '$app/stores';
	import '../calendar.scss';
	import { getDates } from '$lib/helpers';

	const getAllEntries = (timetables: any) => {
		let entries: any[] = [];
		timetables?.forEach((timetable: any) => {
			entries = entries.concat(timetable.entries);
		});
		return entries;
	};

	let selectedCourseOfStudies = 'INFM';
	let selectedSemester = 1;

	const updateEvents = () => {
		const timetables = $page.data.allTimetables.find(
			(t: any) => t.courseOfStudies === selectedCourseOfStudies && t.semester == selectedSemester
		)?.timetables;
		options.events = getDates(getAllEntries(timetables));
	};

	const timetables = $page.data.allTimetables.find(
		(t: any) => t.courseOfStudies === selectedCourseOfStudies && t.semester === selectedSemester
	).timetables;

	const plugins = [TimeGrid, DayGrid, ListWeek];
	const options = {
		view: 'timeGridWeek',
		events: getDates(getAllEntries(timetables)),
		firstDay: 1,
		headerToolbar: {
			start: 'prev,next today',
			center: 'title',
			end: 'timeGridDay,timeGridWeek,dayGridMonth listWeek'
		},
		buttonText: {
			today: 'Heute',
			dayGridMonth: 'Monat',
			timeGridWeek: 'Woche',
			timeGridDay: 'Tag',
			listWeek: 'Liste'
		},
		locale: 'de',
		allDaySlot: false,
		eventBackgroundColor: '#64378c',
		hiddenDays: [0, 6],
		nowIndicator: true,
		noEventsContent: 'Keine Termine'
	};
</script>

<div class="block">
	<p>
		Fügen Sie Veranstaltungen zu Ihrem persönlichen Stundenplan hinzu oder entfernen Sie diese von
		Ihrem Plan, indem Sie die Veranstaltungen anklicken.
	</p>
	<div class="selects">
		<div class="select_wrapper">
			<label for="courseOfStudies">Studiengang</label>
			<select
				name="courseOfStudies"
				value={selectedCourseOfStudies}
				on:change={(event) => {
					selectedCourseOfStudies = event.currentTarget.value;
					updateEvents();
				}}
			>
				{#each ['INFB', 'INFM', 'MINB', 'MKIB'] as courseOfStudies}
					<option value={courseOfStudies}>{courseOfStudies}</option>
				{/each}
			</select>
		</div>
		<div class="select_wrapper">
			<label for="semester">Semester</label>
			<select
				name="semester"
				on:change={(event) => {
					selectedSemester = parseInt(event.currentTarget.value);
					updateEvents();
				}}
			>
				{#each [1, 2, 3, 4, 5, 6, 7] as semester}
					<option value={semester}>{semester}</option>
				{/each}
			</select>
		</div>
	</div>
</div>
<Calendar {plugins} {options} />

<style lang="scss">
	.block {
		padding: 1rem;
		background-color: var(--color-gray);
		margin-bottom: 1rem;
		box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
			0 1px 3px 0 rgb(0 0 0 / 12%);
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.selects {
		display: flex;
		gap: 1rem;
		flex-direction: row;
	}

	.select_wrapper {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
		width: 248px;

		label {
			margin-bottom: 0.5rem;
		}
		select {
			padding: 0.5rem;
			border-radius: 4px;
			border: 1px solid var(--color-gray);
			background-color: var(--color-gray-light);
			color: var(--color-font);
		}
	}
</style>
