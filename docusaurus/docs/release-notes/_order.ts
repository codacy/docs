import {cloudYearOrder} from './cloud/_order';
import {selfHostedOrder} from './self-hosted/_order';

export const releaseNotesSidebarOrder = [
  'release-notes/index',
  {
    type: 'category' as const,
    label: 'Cloud',
    items: cloudYearOrder,
  },
  {
    type: 'category' as const,
    label: 'Self-hosted',
    items: selfHostedOrder,
  },
];

