// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkAttrs from 'remark-attrs';
import remarkKramdownAttrs from './src/remark/kramdown-attrs.mjs';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkKramdownAttrs, remarkAttrs],
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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/codacy/docs' }],
			sidebar: [
				{
					label: 'Getting started',
					items: [
						{ label: 'Codacy quickstart', slug: 'getting-started/codacy-quickstart' },
						{ label: 'Configuring your repository', slug: 'getting-started/configuring-your-repository' },
						{
							label: 'Integrating Codacy with your Git workflow',
							slug: 'getting-started/integrating-codacy-with-your-git-workflow',
						},
						{
							label: 'Integrating Codacy with your IDE',
							items: [
								{
									label: 'Integrating Codacy with IntelliJ IDEs',
									slug: 'getting-started/integrating-codacy-with-intellij-ides',
								},
								{
									label: 'Integrating Codacy with Visual Studio Code',
									slug: 'getting-started/integrating-codacy-with-visual-studio-code',
								},
							],
						},
						{ label: 'Supported languages and tools', slug: 'getting-started/supported-languages-and-tools' },
						{
							label: 'Which permissions does Codacy need from my account?',
							slug: 'getting-started/which-permissions-does-codacy-need-from-my-account',
						},
						{ label: 'Adding a Codacy badge', slug: 'getting-started/adding-a-codacy-badge' },
					],
				},
				{
					label: 'Codacy Guardrails (IDE Extension)',
					autogenerate: { directory: 'codacy-guardrails' },
				},
				{
					label: 'Codacy AI',
					autogenerate: { directory: 'codacy-ai' },
				},
				{
					label: 'Repositories on Codacy',
					autogenerate: { directory: 'repositories' },
				},
				{
					label: 'Configuring your repositories',
					items: [
						{ label: 'Configuring code patterns', slug: 'repositories-configure/configuring-code-patterns' },
						{ label: 'Managing branches', slug: 'repositories-configure/managing-branches' },
						{
							label: 'Managing integrations',
							autogenerate: { directory: 'repositories-configure/integrations' },
						},
						{ label: 'Ignoring files', slug: 'repositories-configure/ignoring-files' },
						{ label: 'Languages', slug: 'repositories-configure/languages' },
						{ label: 'Adjusting quality gates', slug: 'repositories-configure/adjusting-quality-gates' },
						{ label: 'Adjusting quality goals', slug: 'repositories-configure/adjusting-quality-goals' },
						{
							label: 'Setting up code coverage',
							autogenerate: { directory: 'coverage-reporter' },
						},
						{
							label: 'Local analysis',
							autogenerate: { directory: 'repositories-configure/local-analysis' },
						},
						{ label: 'Using submodules', slug: 'repositories-configure/using-submodules' },
						{
							label: 'Codacy configuration file',
							slug: 'repositories-configure/codacy-configuration-file',
						},
						{ label: 'Removing your repository', slug: 'repositories-configure/removing-your-repository' },
					],
				},
				{
					label: 'Organizations',
					items: [
						{ label: 'What are organizations?', slug: 'organizations/what-are-organizations' },
						{ label: 'Organization overview', slug: 'organizations/organization-overview' },
						{ label: 'Managing repositories', slug: 'organizations/managing-repositories' },
						{ label: 'Segments', slug: 'organizations/segments' },
						{ label: 'Issues metrics', slug: 'organizations/issues-metrics' },
						{ label: 'AI Risk Hub', slug: 'organizations/ai-risk-hub' },
						{ label: 'Using gate policies', slug: 'organizations/using-gate-policies' },
						{ label: 'Using coding standards', slug: 'organizations/using-coding-standards' },
						{
							label: 'Managing integrations',
							items: [
								{
									label: 'Default Git provider integration settings',
									slug: 'organizations/integrations/default-git-provider-integration-settings',
								},
								{
									label: 'Slack integration for Security issues',
									slug: 'organizations/integrations/slack-integration',
								},
								{
									label: 'Jira integration for Security and risk management',
									slug: 'organizations/integrations/jira-integration',
								},
							],
						},
						{ label: 'Managing security and risk', slug: 'organizations/managing-security-and-risk' },
						{ label: 'Managing people', slug: 'organizations/managing-people' },
						{ label: 'Audit logs for organizations', slug: 'organizations/audit-logs-for-organizations' },
						{
							label: 'Roles and permissions for organizations',
							slug: 'organizations/roles-and-permissions-for-organizations',
						},
						{ label: 'Changing your plan and billing', slug: 'organizations/changing-your-plan-and-billing' },
					],
				},
				{
					label: 'Enterprise Cloud',
					autogenerate: { directory: 'enterprise-cloud' },
				},
				{
					label: 'Your account',
					autogenerate: { directory: 'account' },
				},
				{
					label: 'Codacy API',
					items: [
						{ label: 'Using the Codacy API', slug: 'codacy-api/using-the-codacy-api' },
						{ label: 'API tokens', slug: 'codacy-api/api-tokens' },
						{ label: 'API v3 reference (recommended)', link: 'https://api.codacy.com/api/api-docs' },
						{ label: 'API v2 reference', link: 'https://api.codacy.com/api-docs' },
						{
							label: 'Examples',
							autogenerate: { directory: 'codacy-api/examples' },
						},
					],
				},
				{
					label: 'Troubleshooting and FAQs',
					items: [
						{ label: 'General', autogenerate: { directory: 'faq/general' } },
						{ label: 'Repositories', autogenerate: { directory: 'faq/repositories' } },
						{ label: 'Code analysis', autogenerate: { directory: 'faq/code-analysis' } },
						{ label: 'Troubleshooting', autogenerate: { directory: 'faq/troubleshooting' } },
					],
				},
				{
					label: 'Release notes',
					items: [
						{ label: 'Overview', slug: 'release-notes' },
						{ label: 'Cloud', autogenerate: { directory: 'release-notes/cloud' } },
						{ label: 'Self-hosted', autogenerate: { directory: 'release-notes/self-hosted' } },
					],
				},
				{
					label: 'Special thanks',
					slug: 'special-thanks',
				},
			],
		}),
	],
});
