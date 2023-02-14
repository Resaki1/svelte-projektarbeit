<script>
	import { formatDateString } from '$lib/helpers';

	/** @type {import('./$types').PageData} */
	export let data;

	console.log(data);
</script>

<div class="block">
	<h2>{data.title}</h2>
	<p>
		Nachrichten als
		<a
			href="https://www.iwi.hs-karlsruhe.de/iwii/REST/atomfeed/studentcouncil/INFB"
			target="_blank"
			rel="noreferrer">Atom-</a
		>
		und
		<a
			href="https://www.iwi.hs-karlsruhe.de/iwii/REST/rssfeed/studentcouncil/INFB"
			target="_blank"
			rel="noreferrer">RSS-</a
		>Feed.
	</p>
</div>
<ul>
	{#each data.messages as newsItem}
		<li>
			<div class="newsHeader">
				<h3>{newsItem.title}</h3>
				<div class="newsDate">{formatDateString(newsItem.date)}</div>
			</div>
			<h4>{newsItem.subTitle}</h4>
			<p>{newsItem.description}</p>
		</li>
	{/each}
</ul>

<style lang="scss" scoped>
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
