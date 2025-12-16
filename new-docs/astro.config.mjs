// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import remarkCustomHeaderId from 'remark-custom-header-id';
import { sidebarTopics } from './src/config/sidebar.mjs';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkCustomHeaderId],
	},
	integrations: [
		starlight({
			title: 'Codacy Documentation',
			customCss: ['./src/styles/theme.css'],
			logo: {
				light: './src/assets/images/codacy-logo.svg',
				dark: './src/assets/images/codacy-logo-white.svg',
				replacesTitle: true
			},
			components: {
				Header: './src/components/layout/Header.astro',
				Footer: './src/components/layout/Footer.astro',
			},
			plugins: [
				starlightSidebarTopics(sidebarTopics),
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/codacy/docs' },
				{ icon: 'x.com', label: 'x.com', href: 'https://x.com/codacy' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/codacy/' },
				{ icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@codacydev' },
			],
		}),
	],
});
