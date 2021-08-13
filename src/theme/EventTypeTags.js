import React from 'react';

import Tabs from '@theme/Tabs';

export default function EventTypeTabs({ children, additionalTabs=[] }) {
    return (
        <Tabs
          defaultValue="json"
          groupId="event-type"
          values={[
            { label: 'JSON', value: 'json', },
            { label: 'JSON Schema', value: 'json-schema', },
            ...additionalTabs,
          ]
        }>

          {children}

        </Tabs>
    );
}
