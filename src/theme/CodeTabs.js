import React from 'react';

import Tabs from '@theme/Tabs';

export default function CodeTabs({ children, additionalTabs=[] }) {
    return (
        <Tabs
          defaultValue="js"
          groupId="programming-language"
          values={[
            { label: 'JavaScript', value: 'js', },
            { label: 'Python', value: 'py', },
            { label: 'Rust', value: 'rust', },
            { label: 'Go', value: 'go', },
            { label: 'Java', value: 'java', },
            { label: 'Kotlin', value: 'kotlin', },
            { label: 'Ruby', value: 'ruby', },
            { label: 'C#', value: 'csharp', },
            ...additionalTabs,
            { label: 'CLI', value: 'cli', },
            { label: 'cURL', value: 'curl', },
          ]
        }>

          {children}

        </Tabs>
    );
}
