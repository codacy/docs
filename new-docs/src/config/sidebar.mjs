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
        autogenerate: { directory: 'getting-started' }
      },
      {
        label: 'Codacy Guardrails (IDE Extension)',
        collapsed: true,
        autogenerate: { directory: 'codacy-guardrails'}
      },
      {
        label: 'Codacy AI',
        collapsed: true,
        autogenerate: { directory: 'codacy-ai'},
      },
      {
        label: 'Coverage reporter',
        collapsed: true,
        autogenerate: { directory: 'coverage-reporter'},
      },
      {
        label: 'Repositories on Codacy',
        collapsed: true,
        autogenerate: { directory: 'repositories'},
      },
      {
        label: 'Configuring your repositories',
        collapsed: true,
        autogenerate: { directory: 'repositories-configure'}
      },
      {
        label: 'Organizations',
        collapsed: true,
        autogenerate: { directory: 'organizations'}
      },
      {
        label: 'Enterprise Cloud',
        collapsed: true,
        autogenerate: { directory: 'enterprise-cloud'},
      },
      {
        label: 'Your account',
        collapsed: true,
        autogenerate: { directory: 'account'},
      },
      {
        label: 'Codacy API',
        collapsed: true,
        autogenerate: { directory: 'codacy-api'}
      },
      {
        label: 'Troubleshooting and FAQs',
        collapsed: true,
        autogenerate: {directory: 'faq'}
      },
      {
        label: 'Special thanks',
        collapsed: true,
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
