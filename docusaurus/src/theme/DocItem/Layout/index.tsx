import React from 'react';
import DocItemLayout from '@theme-original/DocItem/Layout';
import type {Props} from '@theme/DocItem/Layout';

import ContentFooter from '@site/src/components/ContentFooter';

export default function DocItemLayoutWrapper(
  props: Props,
): React.JSX.Element {
  return (
    <>
      <DocItemLayout {...props} />
      <ContentFooter />
    </>
  );
}
