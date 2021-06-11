module.exports = {
  mainSidebar: [
    'introduction',
    {
      'Getting Started': ['overview', 'installation', 'quickstart', 'event-types', 'management-ui'],
    },
    'consuming-webhooks',
    'get-help',
  ],
  consumersSidebar: [
    'receiving/introduction',
    {
      'Verifying Webhooks': ['receiving/verifying-payloads/why', 'receiving/verifying-payloads/how'],
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
