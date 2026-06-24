export const organizationsOrder = [
  'organizations/what-are-organizations',
  'organizations/organization-overview',
  'organizations/managing-repositories',
  'organizations/segments',
  'organizations/issues-metrics',
  'organizations/ai-risk-hub',
  'organizations/using-gate-policies',
  'organizations/using-coding-standards',
  {
    type: 'category' as const,
    label: 'Managing integrations',
    items: [
      'organizations/integrations/default-git-provider-integration-settings',
      {
        type: 'doc' as const,
        id: 'organizations/integrations/slack-integration',
        label: 'Slack integration for Security issues',
      },
      {
        type: 'doc' as const,
        id: 'organizations/integrations/jira-integration',
        label: 'Jira integration for Security and risk management',
      },
    ],
  },
  'organizations/managing-security-and-risk',
  'organizations/managing-people',
  'organizations/audit-logs-for-organizations',
  'organizations/roles-and-permissions-for-organizations',
  'organizations/changing-your-plan-and-billing',
];

