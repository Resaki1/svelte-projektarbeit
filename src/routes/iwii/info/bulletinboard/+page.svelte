<script>
	import { formatDateString } from '$lib/helpers';

	/* import { onMount } from 'svelte'; */

	/** @type {import('./$types').PageData} */
	export let data;

	let courses = ['INFM'];

	const updateLocalStorage = () => {
		localStorage.setItem('courses', JSON.stringify(courses));
	};
</script>

<div class="block">
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
				<div class="newsHeader">
					<h3>{newsItem.title}</h3>
					<div class="newsDate">{formatDateString(newsItem.publicationDate)}</div>
				</div>
				<h4>{newsItem.subTitle}</h4>
				<p>{newsItem.content}</p>
				<p>von {newsItem.nameOwner}</p>
			</li>
		{/if}
	{/each}
</ul>

<style lang="scss" scoped>
	label {
		display: inline-flex;
		margin: 0.5rem;
		gap: 0.25rem;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li,
	.block {
		padding: 1rem;
		background: #1e1e1e;
		margin-bottom: 1rem;
		box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
			0 1px 3px 0 rgb(0 0 0 / 12%);
		border-radius: 4px;
	}

	.block {
		margin-bottom: 2rem;
	}

	h3 {
		margin: 0;
	}

	h4 {
		margin: 1rem 0;
	}

	.newsHeader {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.newsDate {
		font-weight: 100;
	}
</style>
