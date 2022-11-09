<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section>
	<ul>
		{#each data.news as newsItem}
			<li>
				<h2>{newsItem.title}</h2>
				<h3>{newsItem.subTitle}</h3>
				<p>{newsItem.content}</p>
				<p>von {newsItem.nameOwner}</p>
			</li>
		{/each}
	</ul>
</section>

<style lang="scss" scoped>
	ul {
		list-style: none;
		padding: 0;
		margin: 2rem;
	}

	li {
		padding: 1rem;
		background: #1e1e1e;
		margin-bottom: 1rem;
	}

	h2 {
		margin: 0;
	}

	h3 {
		margin: 1rem 0;
	}
</style>
