module.exports = {
  mainSidebar: [
    'introduction',
    {
      'Getting Started': ['overview', 'installation', 'quickstart', 'event-types', 'management-ui'],
    },
    'consuming-webhooks',
    {
      'Tutorials': [ 'cli' ],
    },
    'get-help',
  ],
  consumersSidebar: [
    'receiving/introduction',
    {
      'Verifying Webhooks': ['receiving/verifying-payloads/why', 'receiving/verifying-payloads/how',  'receiving/verifying-payloads/how-manual'],
    },
    {
      type: 'ref',
      id: 'introduction',
      label: 'Sending Webhooks',
    },
    {
      type: 'ref',
      id: 'get-help',
    },
  ],
};
