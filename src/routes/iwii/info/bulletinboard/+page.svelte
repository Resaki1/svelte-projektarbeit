<script>
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let courses = ['INFM'];

	const updateLocalStorage = () => {
		localStorage.setItem('courses', JSON.stringify(courses));
	};
</script>

<main data-sveltekit-prefetch>
	<div class="filters">
		<h2>Studiengänge</h2>
		<p>
			<label>
				<input
					type="checkbox"
					bind:group={courses}
					name="courses"
					value="INFB"
					on:change={updateLocalStorage}
				/>
				INFB
			</label>
			<label>
				<input
					type="checkbox"
					bind:group={courses}
					name="courses"
					value="MINB"
					on:change={updateLocalStorage}
				/>
				MINB
			</label>
			<label>
				<input
					type="checkbox"
					bind:group={courses}
					name="courses"
					value="MKIB"
					on:change={updateLocalStorage}
				/>
				MKIB
			</label>
			<label>
				<input
					type="checkbox"
					bind:group={courses}
					name="courses"
					value="INFM"
					on:change={updateLocalStorage}
				/>
				INFM
			</label>
		</p>
	</div>
	<ul>
		{#each data.news as newsItem}
			{#if newsItem.courseOfStudies.findIndex((course) => courses.includes(course)) !== -1}
				<li>
					<h2>{newsItem.title}</h2>
					<h3>{newsItem.subTitle}</h3>
					<p>{newsItem.content}</p>
					<p>von {newsItem.nameOwner}</p>
				</li>
			{/if}
		{/each}
	</ul>
</main>

<style lang="scss" scoped>
	label {
		display: inline-flex;
		margin: 0.5rem;
		gap: 0.25rem;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 2rem;
	}

	li,
	.filters {
		padding: 1rem;
		background: #1e1e1e;
		margin-bottom: 1rem;
	}

	.filters {
		margin: 2rem;
	}

	h2 {
		margin: 0;
	}

	h3 {
		margin: 1rem 0;
	}
</style>
