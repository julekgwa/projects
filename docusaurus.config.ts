import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';

const config: Config = {
	title: 'React Native Libraries',
	tagline: 'Documentation for our React Native packages',
	favicon: 'img/favicon.ico',

	future: {
		v4: true,
	},

	url: 'https://juniusl.space',
	baseUrl: '/',

	organizationName: 'julekgwa',
	projectName: 'projects',

	// GitHub pages deployment config
	trailingSlash: false,

	onBrokenLinks: 'throw',
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'@docusaurus/preset-classic',
			{
				debug: undefined,
				theme: {
					customCss: ['./src/css/custom.css'],
				},
				docs: false,
				blog: false,
				pages: {
					path: 'pages',
				},
				gtag: {
					trackingID: 'G-DGRGT4ZTG7',
					anonymizeIP: true,
				},
			},
		],
	],

	plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'places-autocomplete',
				path: 'packages/react-native-places-autocomplete',
				routeBasePath: 'places-autocomplete',
				sidebarPath: require.resolve('./sidebars_places_autocomplete.ts'),
				editUrl: 'https://github.com/julekgwa/projects/edit/main',
				showLastUpdateAuthor: true,
				showLastUpdateTime: true,
			},
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'app-onboard',
				path: 'packages/react-native-app-onboard',
				routeBasePath: 'app-onboard',
				sidebarPath: require.resolve('./sidebars_app_onboard.ts'),
				editUrl: 'https://github.com/julekgwa/projects/edit/main',
				showLastUpdateAuthor: true,
				showLastUpdateTime: true,
			},
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'payment-card-icons',
				path: 'packages/react-native-payment-card-icons',
				routeBasePath: 'payment-card-icons',
				sidebarPath: require.resolve('./sidebars_payment_card_icons.ts'),
				editUrl: 'https://github.com/julekgwa/projects/edit/main',
				showLastUpdateAuthor: true,
				showLastUpdateTime: true,
			},
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'input-tag',
				path: 'packages/react-native-input-tag',
				routeBasePath: 'input-tag',
				sidebarPath: require.resolve('./sidebars_input_tag.ts'),
				editUrl: 'https://github.com/julekgwa/projects/edit/main',
				showLastUpdateAuthor: true,
				showLastUpdateTime: true,
			},
		],
	],

	themeConfig: {
		image: 'img/social-card.jpg',
		colorMode: {
			respectPrefersColorScheme: true,
		},
		docs: {
			sidebar: {
				hideable: true,
				autoCollapseCategories: true,
			},
		},
		// Enable GitHub edit links
		metadata: [{name: 'github:repository', content: 'julekgwa/projects'}],
		navbar: {
			title: 'React Native Libraries',
			logo: {
				alt: 'Logo',
				src: 'img/logo.svg',
			},
			items: [
				{
					type: 'dropdown',
					label: 'Packages',
					position: 'left',
					items: [
						{to: '/places-autocomplete', label: 'Places Autocomplete'},
						{to: '/app-onboard', label: 'App Onboarding'},
						{to: '/payment-card-icons', label: 'Payment Card Icons'},
						{to: '/input-tag', label: 'Input Tags'},
					],
				},
				{
					href: 'https://github.com/julekgwa/projects',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Packages',
					items: [
						{to: '/places-autocomplete', label: 'Places Autocomplete'},
						{to: '/app-onboard', label: 'App Onboarding'},
						{to: '/payment-card-icons', label: 'Payment Card Icons'},
						{to: '/input-tag', label: 'Input Tags'},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/julekgwa/projects',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Junius Lekgwara. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	},
};

export default config;
