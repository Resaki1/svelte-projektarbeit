<script lang="ts">
	import {
		Home,
		Megaphone,
		CalendarDays,
		Download,
		User,
		Milestone,
		Info,
		Utensils,
		ExternalLink
	} from 'lucide-svelte';

	type MenuItems = {
		title: string;
		icon: any;
		subItems: {
			title: string;
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
					href: '/iwii/info/bulletinboard/INFM'
				},
				{
					title: 'Fachschaft IWI',
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
</script>

<nav>
	<ul class="navbar">
		{#each menuItems as item, index}
			<li>
				<div class="navbar__item">
					<svelte:component this={item.icon} />{item.title}
					<ul class="navbar__menu-modal" role="menu">
						{#each item.subItems as subItem}
							<li>
								<a href={subItem.href}>{subItem.title}</a>
							</li>
						{/each}
					</ul>
				</div>
			</li>
			{#if index < menuItems.length - 1}
				<hr />
			{/if}
		{/each}
	</ul>
</nav>

<slot />

<style lang="scss">
	.navbar {
		height: 100vh;
		width: 6rem;
		position: fixed;
		left: 0;
		top: 0;
		list-style: none;
		margin: 0;
		padding: 1rem 0;
		display: flex;
		flex-direction: column;
		justify-content: start;
		box-sizing: border-box;
		text-overflow: ellipsis;
		background: var(--color-gray);
		border-right: 1px solid var(--color-gray-light);

		> li {
			position: relative;
			cursor: pointer;
			padding: 0 1rem;
			height: 72px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			font-size: 0.875rem;

			.navbar__item {
				position: relative;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				text-align: center;
				padding: 2px;
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
		}

		hr {
			margin: 4px 1rem;
			border: none;
			height: 1px;
			background: rgb(56, 56, 56);
		}
	}
</style>
