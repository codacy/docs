/**
 * sidebarTopics defines both the items in the sidebar as well as the top navigation.
 * Tabs are defined by the primary array within the sidebar topics [{tab}, {tab}]
 * Any new section you want to add to the sidebar should be added here.
 * 
 * You can use autogenerate: {directory : ''} not to worry about this in the future
 */

export const sidebarTopics = [
  {
    label: 'Docs',
    link: '/',
    icon: 'book',
    items: [
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
        label: 'Coverage reporter',
        autogenerate: { directory: 'coverage-reporter' },
      },
      {
        label: 'Repositories on Codacy',
        autogenerate: { directory: 'repositories' },
      },
      {
        label: 'Configuring your repositories',
        autogenerate: { directory: 'repositories-configure' }
      },
      {
        label: 'Organizations',
        autogenerate: { directory: 'organizations' }
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
        autogenerate: {directory: 'faq'}
      },
      {
        label: 'Special thanks',
        slug: 'special-thanks',
      },
    ],
  },
  {
    label: 'Release notes',
    link: '/release-notes/',
    icon: 'file-text',
    items: [
      { label: 'Overview', link: '/release-notes/' },
      { label: 'Cloud', autogenerate: { directory: 'release-notes/cloud', } },
      { label: 'Self-hosted', autogenerate: { directory: 'release-notes/self-hosted' } },
    ],
  },
];

export const topicsNav = sidebarTopics.map(({ label, link }) => ({ label, href: link }));
