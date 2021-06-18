import React from 'react';

import Tabs from '@theme/Tabs';

export default function CLITabs({ children }) {
    return (
        <Tabs
          defaultValue="homebrew"
          groupId="cli-platform"
          values={[
            { label: 'Homebrew', value: 'homebrew'},
            { label: 'Scoop', value: 'scoop'},
            { label: 'macOS', value: 'macos'},
            { label: 'Linux', value: 'linux'},
            { label: 'Windows', value: 'windows'}
          ]
        }>
  
          {children}
  
        </Tabs>
    );
  }
