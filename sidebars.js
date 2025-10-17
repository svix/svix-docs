module.exports = {
  mainSidebar: [
    {
      Introduction: ["introduction", "quickstart", "overview", "common-usage-examples", "consuming-webhooks"],
      Basics: ["event-types", "app-portal", "api-keys", "documenting-webhooks"],
      "Delivery Information": [
        "incoming-webhooks",
        "email-notifications",
        "retries",
        "opentelemetry-streaming",
      ],
      "Advanced Functionality": [
        "idempotency",
        "rate-limit",
        "transformations",
        "connectors",
        "channels",
        {
          type: 'category',
          label: 'Advanced Endpoint Types',
          link: {
            type: 'doc',
            id: 'advanced-endpoints/intro',
          },
          items: [
            'advanced-endpoints/polling-endpoints',
            'advanced-endpoints/fifo-endpoints',
            'advanced-endpoints/object-storage',
            'advanced-endpoints/queue',
          ]
        },
      ],
      "Security & Compliance": [
        "security",
        "retention",
        "endpoint-authentication",
        "receiving/source-ips",
      ],
      "Manage Your Account": ["account/environments", "account/org-members"],
    },
    {
      Tutorials: [
        "tutorials/cli",
        "tutorials/api-webhook-management",
        "tutorials/event-type-schema",
        "tutorials/connectors",
        "sending-messages-with-bridge",
      ],
    },
    {
      Integrations: [
        "integrations/zapier",
        "integrations/advanced-zapier",
        "integrations/ngrok",
      ],
    },
    {
      "Using Ingest": ["receiving/receiving-with-ingest"]
    },
    {
      "Svix Play": ["play"]
    },
    {
      "Additional links": [
        "get-help",
        {
          type: "link",
          href: "https://api.svix.com/docs",
          label: "API Reference",
        },
        "faq",
      ],
    },
  ],
  consumersSidebar: [
    "receiving/introduction",
    {
      "Using the App Portal": [
        "receiving/using-app-portal/event-catalog",
        "receiving/using-app-portal/adding-endpoints",
        "receiving/using-app-portal/testing-events",
        "receiving/using-app-portal/filtering-logs",
        "receiving/using-app-portal/replaying-messages"
      ],
    },
    {
      "Using Polling Endpoints": [
        "receiving/using-app-portal/polling-endpoints",
      ],
    },
    {
      "Verifying Webhooks": [
        "receiving/verifying-payloads/why",
        "receiving/verifying-payloads/how",
        "receiving/verifying-payloads/receiving-with-bridge",
        "receiving/verifying-payloads/how-manual",
        "receiving/additional-authentication",
        "receiving/source-ips",
      ],
      "Additional links": [
        {
          type: "ref",
          id: "introduction",
          label: "Sending Webhooks",
        },
        {
          type: "ref",
          id: "get-help",
        },
      ],
    },
  ],
  streamSidebar: [
    "stream/introduction",
    {
      "Event Types": [
        "stream/event-types/introduction",
      ],
    },
    {
      "Sinks": [
        'stream/sinks/introduction',
        'stream/sinks/http',
        'stream/sinks/otel_trace',
        'stream/sinks/s3',
        'stream/sinks/gcs',
        'stream/sinks/azure_blob',
        'stream/sinks/poller',
      ],
    },
    {
      "Stream Portal": [
        'stream/portal/intro'
      ],
    },
    {
      "Additional links": [
        "get-help",
        {
          type: "link",
          href: "https://api.svix.com/docs#tag/Stream",
          label: "API Reference",
        }
      ],
    },
  ],
};
