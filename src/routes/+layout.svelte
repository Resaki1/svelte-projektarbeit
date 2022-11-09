<script lang="ts">
	import { page } from '$app/stores';
	import {
		Home,
		Megaphone,
		CalendarDays,
		Download,
		User,
		Milestone,
		Info,
		Utensils,
		ExternalLink,
		LogIn
	} from 'lucide-svelte';

	type MenuItems = {
		title: string;
		icon: any;
		subItems: {
			title: string;
			name?: string;
			href: string;
		}[];
	}[];

	const menuItems: MenuItems = [
		{
			title: 'Übersicht',
			icon: Home,
			subItems: [
				{
					title: 'Eigene Arbeiten',
					name: 'Anmeldung und Noten im Intranet',
					href: '/iwii/faces/intranet/student'
				}
			]
		},
		{
			title: 'News',
			icon: Megaphone,
			subItems: [
				{
					title: 'Schwarzes Brett',
					name: 'Schwarzes Brett',
					href: '/iwii/info/bulletinboard/INFM'
				},
				{
					title: 'Fachschaft IWI',
					name: 'Nachrichten der Fachschaft IWI',
					href: '/'
				}
			]
		},
		{
			title: `Stunden\u00ADpläne`,
			icon: CalendarDays,
			subItems: [
				{
					title: 'Editor',
					href: '/'
				},
				{
					title: 'Persönlicher Plan',
					href: '/'
				}
			]
		},
		{
			title: 'Down\u00ADloads',
			icon: Download,
			subItems: [
				{
					title: 'Prüfungspläne',
					href: '/'
				},
				{
					title: 'Andere Ausarbeitungen',
					href: '/'
				},
				{
					title: 'Anleitungen',
					href: '/'
				},
				{
					title: 'Anträge und Formulare',
					href: '/'
				}
			]
		},
		{
			title: 'Sprech\u00ADzeiten',
			icon: User,
			subItems: [
				{
					title: 'Professoren',
					href: '/'
				},
				{
					title: 'Sekretariat',
					href: '/'
				}
			]
		},
		{
			title: 'Erstis',
			icon: Milestone,
			subItems: [
				{
					title: 'Erstsemester-FAQ',
					href: '/'
				},
				{
					title: 'Corona-App',
					href: '/'
				}
			]
		},
		{
			title: 'Infos',
			icon: Info,
			subItems: [
				{
					title: 'Formulare',
					href: '/'
				},
				{
					title: 'Gebäudepläne',
					href: '/'
				}
			]
		},
		{
			title: 'Mensen',
			icon: Utensils,
			subItems: [
				{
					title: 'Mensa Moltke',
					href: '/'
				},
				{
					title: 'Cafeteria Moltkestraße 30',
					href: '/'
				}
			]
		},
		{
			title: 'Links',
			icon: ExternalLink,
			subItems: [
				{
					title: 'Intranet der Wirtschaftsinformatik',
					href: '/'
				},
				{
					title: 'Ilias-Server',
					href: '/'
				}
			]
		}
	];

	let urls: { title: string; name?: string; href: string }[] = [];
	menuItems.forEach((item) => {
		item.subItems.forEach((subItem) => {
			urls.push(subItem);
		});
	});
</script>

<svelte:head>
	<title>
		{urls.find((url) => url.href === '/' + $page?.routeId)?.name}
	</title>
</svelte:head>
<div class="layout-topbar">
	<h1>
		{urls.find((url) => url.href === '/' + $page?.routeId)?.name}
	</h1>
</div>
<nav class="navbar">
	<img src="/hka-white.svg" height="60" width="72" alt="HKA Logo" />
	<ul>
		{#each menuItems as item, index}
			<li class="navbar__list-item">
				<div class="navbar__item">
					<svelte:component this={item.icon} size="18" class="navbar__item-icon" />
					{item.title}
					<ul class="navbar__menu-modal" role="menu">
						{#each item.subItems as subItem}
							<li>
								<a href={subItem.href}>{subItem.title}</a>
							</li>
						{/each}
					</ul>
				</div>
			</li>
			<!-- {#if index < menuItems.length - 1}
				<hr />
			{/if} -->
		{/each}
	</ul>
</nav>

<slot />

<style lang="scss">
	.layout-topbar {
		width: 100%;
		height: 4rem;
		padding: 0 2.5rem;
		background: var(--color-gray);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		h1 {
			font-size: 1.25rem;
			font-weight: 600;
		}
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
				margin: 8px 0 4px 0;
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
					padding: 8px 8px;
					border-radius: 4px;

					transition: all 0.08s ease-out;

					&:hover {
						background: #2e2e2e;
					}
				}

				a {
					all: unset;
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

		hr {
			margin: 4px 1rem;
			width: 4rem;
			border: none;
			height: 1px;
			background: rgb(56, 56, 56);
		}
	}
</style>
