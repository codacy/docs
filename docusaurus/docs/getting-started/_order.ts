export const gettingStartedOrder = [
  'getting-started/codacy-quickstart',
  'getting-started/configuring-your-repository',
  'getting-started/integrating-codacy-with-your-git-workflow',
  {
    type: 'category' as const,
    label: 'Integrating Codacy with your IDE',
    items: [
      'getting-started/configure-ide/integrating-codacy-with-intellij-ides',
      'getting-started/configure-ide/integrating-codacy-with-visual-studio-code',
    ],
  },
  'getting-started/supported-languages-and-tools',
  'getting-started/which-permissions-does-codacy-need-from-my-account',
  'getting-started/adding-a-codacy-badge',
];

