<script lang="ts">
	import { page } from '$app/stores';
	import { LogIn, LogOut } from 'lucide-svelte';
	import { menuItems } from './menuItems';

	let urls: { title?: string; name?: string; href: string }[] = [];
	menuItems.forEach((item) => {
		item.subItems?.forEach((subItem) => {
			urls.push(subItem);
		});
	});
</script>

<svelte:head>
	<title>
		HKA | {urls.find((url) => url.href === $page?.route.id)?.name}
	</title>
</svelte:head>
<nav class="layout-topbar">
	<h1>
		{urls.find((url) => url.href === $page?.route.id)?.name}
	</h1>
	{#if !$page.data.user.adsName}
		<a class="login__link" href="/iwii/login" data-sveltekit-preload-data="hover">
			<LogIn size="16" />
			Login
		</a>
	{/if}
	{#if $page.data.user.adsName}
		<a href="/logout" data-sveltekit-reload class="login__link">
			<LogOut size="16" />
			Logout
		</a>
	{/if}
</nav>
<nav class="navbar">
	<img src="/hka-white.svg" height="60" width="72" alt="HKA Logo" />
	<ul>
		{#each menuItems as item}
			{#if item.icon && (!item.requiresAuth || $page.data.user.adsName)}
				<li class="navbar__list-item">
					<div class="navbar__item">
						<svelte:component this={item.icon} size="18" class="navbar__item-icon" />
						{item.title}
						{#if item.subItems}
							<ul class="navbar__menu-modal" role="menu">
								{#each item.subItems as subItem}
									<li>
										<a
											href={subItem.href}
											target={subItem.target}
											data-sveltekit-preload-data="hover">{subItem.title}</a
										>
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				</li>
			{/if}
		{/each}
	</ul>
</nav>

<main>
	<slot />
</main>

<div class="layout-footer">
	Fakultät für Informatik und Wirtschaftsinformatik, Fachgebiet Informatik
</div>

<style lang="scss">
	.layout-topbar,
	.layout-footer {
		height: 4rem;
		padding: 0 2.5rem;
		background: var(--color-gray);
		display: flex;
		flex-direction: row;
		align-items: center;
		box-sizing: border-box;
	}

	.layout-topbar {
		justify-content: space-between;
		position: fixed;
		width: calc(100% - 6rem);

		h1 {
			font-size: 1.25rem;
			font-weight: 600;
		}
	}

	.layout-footer {
		justify-content: end;
		font-size: 0.875rem;
	}
	.navbar {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		width: 6rem;
		position: fixed;
		left: 0;
		top: 0;
		background: var(--color-gray);
		border-right: 1px solid var(--color-gray-light);

		ul {
			list-style: none;
			margin: 0;
			padding: 0 0 1rem 0;
			width: 100%;
			text-overflow: ellipsis;
		}

		.navbar__list-item {
			position: relative;
			cursor: pointer;
			padding: 0 1rem;
			height: fit-content;
			display: flex;
			flex-direction: column;
			justify-content: center;
			font-size: 0.875rem;
			width: 100%;
			box-sizing: border-box;

			.navbar__item {
				position: relative;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				text-align: center;
				padding: 8px;
				margin: 16px 0 8px 0;
				border-radius: 4px;
				gap: 4px;

				transition: all 0.08s ease-out;
			}

			.navbar__menu-modal {
				list-style: none;
				display: none;
				position: absolute;
				left: 5rem;
				top: 0;
				background: var(--color-gray);
				border: 1px solid var(--color-gray-light);
				padding: 0.5rem;
				z-index: 1;
				flex-direction: column;
				align-items: start;
				text-align: left;
				white-space: nowrap;
				width: fit-content;
				padding: 4px 16px;

				> li {
					display: contents;
					transition: all 0.08s ease-out;
				}

				a {
					all: unset;
					width: calc(100% - 16px);
					padding: 8px;
					border-radius: 4px;

					&:hover {
						background: #2e2e2e;
					}
				}
			}

			&:hover {
				.navbar__item {
					background: #2e2e2e;
				}

				.navbar__menu-modal {
					display: flex;
				}
			}

			&:not(:last-child)::after {
				content: '';
				position: absolute;
				bottom: -0.25rem;
				left: 1rem;
				right: 0;
				height: 1px;
				border-bottom: 1px solid var(--color-gray-light);
				z-index: -1;
				width: 4rem;
			}
		}
	}

	.login__link {
		display: flex;
		align-items: center;
		padding: 0.5rem 1rem;
		gap: 0.5rem;
		border: none;
		border-radius: 4px;
		background: var(--color-primary);
		color: var(--color-font);
		font-size: 0.875rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.08s ease-out;
		text-decoration: none;

		&:hover {
			filter: brightness(0.9);
		}
	}

	main {
		padding: 6rem 2rem 2rem 2rem;
		min-height: calc(100vh - 4rem);
		box-sizing: border-box;
	}
</style>
