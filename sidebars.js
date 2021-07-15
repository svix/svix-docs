module.exports = {
  mainSidebar: [
    'introduction',
    {
      'Getting Started': ['overview', 'installation', 'quickstart', 'event-types', 'management-ui'],
      'Manage Your Account': ['account/overview', 'account/environments', 'account/retries'],
    },
    'consuming-webhooks',
    {
      'Tutorials': [ 'tutorials/cli' ],
    },
    'get-help',
    {
      type: 'link',
      href: 'https://api.svix.com/docs',
      label: 'API Documentation',
    },
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
