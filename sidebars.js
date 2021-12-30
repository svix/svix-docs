module.exports = {
  mainSidebar: [
    {
      Introduction: ["introduction", "setup", "quickstart"],
      Basics: ["event-types", "app-portal", "api-keys", "consuming-webhooks"],
      Advanced: ["incoming-webhooks", "idempotency", "rate-limit", "retries", "retention"],
      "Manage Your Account": ["account/environments", "account/org-members"],
    },
    {
      Tutorials: ["tutorials/cli", "tutorials/event-type-schema"],
    },
    {
      "Additional links": [
        "play",
        "get-help",
        {
          type: "link",
          href: "https://api.svix.com/docs",
          label: "API Reference",
        },
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
        "receiving/using-app-portal/replaying-messages",
      ],
    },
    {
      "Verifying Webhooks": [
        "receiving/verifying-payloads/why",
        "receiving/verifying-payloads/how",
        "receiving/verifying-payloads/how-manual",
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
};
