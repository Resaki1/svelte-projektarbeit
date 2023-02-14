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
					href: '/iwii/info/bulletinboard'
				},
				{
					title: 'Fachschaft IWI',
					name: 'Nachrichten der Fachschaft IWI',
					href: '/iwii/info/studentcouncil'
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
					name: 'Sprechzeiten der Dozierenden',
					href: '/iwii/info/consultationhours'
				},
				{
					title: 'Sekretariat',
					name: 'Öffnungszeiten Sekretariat',
					href: '/iwii/info/officehours'
				}
			]
		},
		{
			title: 'Erstis',
			icon: Milestone,
			subItems: [
				{
					title: 'Erstsemester-FAQ',
					name: 'Erstsemester-FAQ',
					href: '/iwii/info/faqfirstsemester'
				},
				{
					title: 'Corona-App',
					name: 'Corona-Anwesenheitserfassung',
					href: '/iwii/info/corona'
				}
			]
		},
		{
			title: 'Infos',
			icon: Info,
			subItems: [
				{
					title: 'Formulare',
					name: 'Anträge und Formulare',
					href: '/iwii/info/downloads'
				},
				{
					title: 'Gebäudepläne',
					name: 'Räume',
					href: '/iwii/info/buildings'
				}
			]
		},
		{
			title: 'Mensen',
			icon: Utensils,
			subItems: [
				{
					title: 'Mensa Moltkestraße',
					name: 'Mensa Moltkestraße',
					href: '/iwii/info/canteen/2'
				},
				{
					title: 'Caféteria Moltkestraße 30',
					name: 'Caféteria Moltkestraße 30',
					href: '/iwii/info/canteen/7'
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

	let urls: { title?: string; name?: string; href: string }[] = [];
	menuItems.forEach((item) => {
		item.subItems.forEach((subItem) => {
			urls.push(subItem);
		});
	});

	const otherUrls: { name?: string; href: string }[] = [
		{
			name: 'Anmeldung zum Intranet sowie zur Praxisbörse für Firmen',
			href: '/iwii/login'
		}
	];
	// add otherUrls to urls array using concat
	urls = urls.concat(otherUrls);
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
	<a class="login__link" href="/iwii/login">
		<LogIn size="16" />
		Login
	</a>
</nav>
<nav class="navbar">
	<img src="/hka-white.svg" height="60" width="72" alt="HKA Logo" />
	<ul>
		{#each menuItems as item}
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
