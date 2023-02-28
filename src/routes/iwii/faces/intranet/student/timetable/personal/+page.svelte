<script lang="ts">
	import Calendar from '@event-calendar/core';
	import TimeGrid from '@event-calendar/time-grid';
	import '@event-calendar/core/index.css';
	import { page } from '$app/stores';

	let plugins = [TimeGrid];
	let options = {
		view: 'timeGridWeek',
		events: $page.data.events
	};
	console.log($page.data.events);
</script>

<Calendar {plugins} {options} />
