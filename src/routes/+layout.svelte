<script>
	import {
		Home,
		Megaphone,
		CalendarDays,
		Pencil,
		ClipboardList,
		Book,
		Download,
		Building,
		User,
		Milestone,
		Info,
		List,
		Utensils,
		ExternalLink
	} from 'lucide-svelte';
</script>

<nav>
	<ul class="navbar">
		<li>
			<div class="navbar__item">
				<Home />Übersicht
				<ul class="navbar__menu-modal" role="menu">
					<li role="menuitem"><a href="/">Eigene Arbeiten</a></li>
				</ul>
			</div>
		</li>
		<hr />
		<li>
			<div class="navbar__item">
				<Megaphone />News
				<ul class="navbar__menu-modal" role="menu">
					<li role="menuitem"><a href="/">Schwarzes Brett</a></li>
					<li role="menuitem"><a href="/">Fachschaft IWI</a></li>
				</ul>
			</div>
		</li>
		<hr />
		<li>
			<div class="navbar__item">
				<CalendarDays />Stunden&shy;pläne
				<ul class="navbar__menu-modal" role="menu">
					<li role="menuitem"><a href="/">Editor</a></li>
					<li role="menuitem"><a href="/">Persönlicher Plan</a></li>
				</ul>
			</div>
		</li>
		<hr />
		<li>
			<div class="navbar__item">
				<Download />Down&shy;loads
				<ul class="navbar__menu-modal" role="menu">
					<li role="menuitem"><a href="/">Prüfungspläne</a></li>
					<li role="menuitem"><a href="/">Andere Ausarbeitungen</a></li>
					<li role="menuitem"><a href="/">Anleitungen</a></li>
					<li role="menuitem"><a href="/">Anträge und Formulare</a></li>
				</ul>
			</div>
		</li>
		<hr />
		<li>
			<div class="navbar__item">
				<User />Sprech&shy;zeiten
				<ul class="navbar__menu-modal" role="menu">
					<li role="menuitem"><a href="/">Professoren</a></li>
					<li role="menuitem"><a href="/">Sekretariat</a></li>
				</ul>
			</div>
		</li>
		<hr />
		<li>
			<div class="navbar__item">
				<Milestone /> Erstis
				<ul class="navbar__menu-modal" role="menu">
					<li role="menuitem"><a href="/">Erstsemester-FAQ</a></li>
					<li role="menuitem"><a href="/">Corona-App</a></li>
				</ul>
			</div>
		</li>
		<hr />
		<li>
			<div class="navbar__item">
				<Info />Infos
				<ul class="navbar__menu-modal" role="menu">
					<li role="menuitem"><a href="/">Formulare</a></li>
					<li role="menuitem"><a href="/">Gebäudepläne</a></li>
				</ul>
			</div>
		</li>
		<hr />
		<li>
			<div class="navbar__item">
				<Utensils />Mensen
				<ul class="navbar__menu-modal" role="menu">
					<li role="menuitem"><a href="/">Mensa Moltke</a></li>
					<li role="menuitem"><a href="/">Cafeteria Moltkestraße 30</a></li>
				</ul>
			</div>
		</li>
		<hr />
		<li>
			<div class="navbar__item">
				<ExternalLink />Links
				<ul class="navbar__menu-modal" role="menu">
					<li role="menuitem"><a href="/">Intranet der Wirtschaftsinformatik</a></li>
					<li role="menuitem"><a href="/">Ilias-Server</a></li>
				</ul>
			</div>
		</li>
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
		background: #1e1e1e;

		> li {
			position: relative;
			cursor: pointer;
			padding: 0 1rem;
			height: 72px;
			display: flex;
			flex-direction: column;
			justify-content: center;

			.navbar__item {
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
				left: 6rem;
				top: 0;
				background: #1e1e1e;
				border: 1px solid rgb(56, 56, 56);
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

	:global(body) {
		font-weight: 400;
		color: rgba(255, 255, 255, 0.87);
		margin-left: 6rem;
		background: #121212;
	}
</style>
