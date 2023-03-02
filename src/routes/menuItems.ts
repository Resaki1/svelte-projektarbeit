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
	title?: string;
	name?: string;
	requiresAuth?: boolean;
	icon?: any;
	href?: string;
	subItems?: {
		title: string;
		name?: string;
		href: string;
		target?: string;
		requiresAuth?: boolean;
	}[];
}[];

export const menuItems: MenuItems = [
	// URLs that are part of the sidebar
	{
		title: 'Übersicht',
		icon: Home,
		requiresAuth: true,
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
				title: 'Stundenpläne',
				name: 'Alle Stundenpläne',
				href: '/iwii/faces/intranet/student/timetable/all'
			},
			{
				title: 'Editor',
				name: 'Stundenplan-Editor',
				href: '/iwii/faces/intranet/student/timetable/editor',
				requiresAuth: true
			},
			{
				title: 'Persönlicher Plan',
				name: 'Persönlicher Plan',
				href: '/iwii/faces/intranet/student/timetable/personal',
				requiresAuth: true
			}
		]
	},
	{
		title: 'Down\u00ADloads',
		icon: Download,
		requiresAuth: true,
		subItems: [
			{
				title: 'Prüfungspläne',
				href: '/iwii/intranet/student/viewexamschedule',
				name: 'Prüfungspläne'
			},
			{
				title: 'Andere Ausarbeitungen',
				href: '/iwii/intranet/all/download_results',
				name: 'Download anderer Ausarbeitungen'
			},
			{
				title: 'Anleitungen',
				href: '/iwii/intranet/student/instructions',
				name: 'Download von Anleitungen'
			},
			{
				title: 'Anträge und Formulare',
				href: '/iwii/intranet/student/hintfiles',
				name: 'Anträge und Formulare'
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
				href: 'https://www.iwi.hs-karlsruhe.de/intranet',
				target: '_blank'
			},
			{
				title: 'Ilias-Server',
				href: 'https://ilias.h-ka.de/login.php',
				target: '_blank'
			},
			{
				title: 'LSF-Server',
				href: 'https://lsf.hs-karlsruhe.de',
				target: '_blank'
			},
			{
				title: 'Lehre',
				href: 'https://www.h-ka.de/lehre',
				target: '_blank'
			},
			{
				title: 'Bibliothek',
				href: 'https://www.bibliothek.kit.edu/fbh.php',
				target: '_blank'
			},
			{
				title: 'Impressum und Datenschutzhinweise',
				name: 'Impressum und Datenschutzhinweise',
				href: '/iwii/info/dataprotection'
			},
			{
				title: 'Dokumentation REST-API',
				href: 'https://www.iwi.hs-karlsruhe.de/iwii/api/swagger-ui/index.html',
				target: '_blank'
			}
		]
	},
	// URLs that are not part of the sidebar, but need a header name
	{
		name: 'Anmeldung zum Intranet sowie zur Praxisbörse für Firmen',
		href: '/iwii/login'
	}
];
