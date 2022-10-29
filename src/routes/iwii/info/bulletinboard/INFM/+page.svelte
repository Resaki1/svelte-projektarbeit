<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Schwarzes Brett Informatik (Master)</h1>
<section>
	<ul>
		{#each data.news as newsItem}
			<li>
				<h2>{newsItem.title}</h2>
				<h3>{newsItem.subTitle}</h3>
				<p>{newsItem.content}</p>
			</li>
		{/each}
	</ul>
</section>
