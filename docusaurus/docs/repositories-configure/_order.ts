export const repositoriesConfigureOrder = [
  'repositories-configure/configuring-code-patterns',
  'repositories-configure/managing-branches',
  {
    type: 'category' as const,
    label: 'Managing integrations',
    items: [
      'repositories-configure/integrations/github-integration',
      'repositories-configure/integrations/gitlab-integration',
      'repositories-configure/integrations/bitbucket-integration',
      'repositories-configure/integrations/post-commit-hooks',
    ],
  },
  'repositories-configure/ignoring-files',
  'repositories-configure/languages',
  'repositories-configure/adjusting-quality-gates',
  'repositories-configure/adjusting-quality-goals',
  {
    type: 'category' as const,
    label: 'Setting up code coverage',
    items: [
      'coverage-reporter/index',
      'coverage-reporter/alternative-ways-of-running-coverage-reporter',
      'coverage-reporter/uploading-coverage-in-advanced-scenarios',
      'coverage-reporter/troubleshooting-coverage-cli-issues',
    ],
  },
  {
    type: 'category' as const,
    label: 'Local analysis',
    items: [
      'repositories-configure/local-analysis/client-side-tools',
      'repositories-configure/local-analysis/running-aligncheck',
      'repositories-configure/local-analysis/running-dartanalyzer',
      'repositories-configure/local-analysis/running-deadcode',
      'repositories-configure/local-analysis/running-spotbugs',
      'repositories-configure/local-analysis/running-eslint',
    ],
  },
  'repositories-configure/using-submodules',
  'repositories-configure/codacy-configuration-file',
  'repositories-configure/removing-your-repository',
];

