export const faqOrder = [
  {
    type: 'category' as const,
    label: 'General',
    items: [
      'faq/general/which-platforms-and-technologies-does-codacy-support',
      'faq/general/how-does-codacy-support-github-enterprise',
      'faq/general/how-does-codacy-support-gitlab-cloud',
      'faq/general/how-does-codacy-support-gitlab-enterprise',
      'faq/general/how-does-codacy-support-bitbucket-cloud',
      'faq/general/how-does-codacy-support-bitbucket-server',
      'faq/general/how-does-codacy-keep-my-data-secure',
      'faq/general/how-does-codacy-protect-my-privacy',
      'faq/general/does-codacy-keep-audit-logs',
      'faq/general/how-do-i-allowlist-codacy-cloud-on-my-git-provider',
      'faq/general/how-can-i-change-or-cancel-my-plan',
    ],
  },
  {
    type: 'category' as const,
    label: 'Repositories',
    items: [
      'faq/repositories/how-do-i-reanalyze-my-repository',
      'faq/repositories/i-renamed-my-repository-on-the-git-provider',
      'faq/repositories/i-moved-my-repository-on-the-git-provider',
    ],
  },
  {
    type: 'category' as const,
    label: 'Code analysis',
    items: [
      'faq/code-analysis/which-metrics-does-codacy-calculate',
      'faq/code-analysis/why-does-codacy-show-unexpected-coverage-changes',
      'faq/code-analysis/does-codacy-place-limits-on-the-code-analysis',
      'faq/code-analysis/does-codacy-check-for-dependencies',
      'faq/code-analysis/how-long-does-it-take-for-my-repository-to-be-analyzed',
      'faq/code-analysis/how-to-skip-an-analysis',
      'faq/code-analysis/can-i-bypass-codacy-status-check',
      'faq/code-analysis/how-to-configure-php-codesniffer-coding-standards',
    ],
  },
  {
    type: 'category' as const,
    label: 'Troubleshooting',
    items: [
      'faq/troubleshooting/why-cant-i-see-my-organization',
      'faq/troubleshooting/why-did-codacy-stop-commenting-on-pull-requests',
      'faq/troubleshooting/why-arent-duplication-metrics-being-calculated',
      'faq/troubleshooting/why-isnt-my-public-repository-being-analyzed',
      'faq/troubleshooting/not-a-member-of-the-organization',
      'faq/troubleshooting/we-no-longer-have-access-to-this-repository',
      'faq/troubleshooting/why-is-my-file-over-150-kb-missing',
      'faq/troubleshooting/error-line-endings',
    ],
  },
];

