import React from 'react';
import DocItemLayout from '@theme-original/DocItem/Layout';
import type {Props} from '@theme/DocItem/Layout';

export default function DocItemLayoutWrapper(
  props: Props,
): React.JSX.Element {
  return (
    <>
      <DocItemLayout {...props} />
    </>
  );
}
