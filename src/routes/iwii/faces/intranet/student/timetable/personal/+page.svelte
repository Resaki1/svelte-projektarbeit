<script lang="ts">
	import Calendar from '@event-calendar/core';
	import TimeGrid from '@event-calendar/time-grid';
	import DayGrid from '@event-calendar/day-grid';
	import ListWeek from '@event-calendar/list';
	import '@event-calendar/core/index.css';
	import { page } from '$app/stores';
	import '../calendar.scss';
	import { getDates } from '$lib/helpers';

	const plugins = [TimeGrid, DayGrid, ListWeek];
	const options = {
		view: 'timeGridWeek',
		events: getDates($page.data.events),
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

<Calendar {plugins} {options} />
