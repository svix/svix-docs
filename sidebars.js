module.exports = {
  mainSidebar: [
    {
      Introduction: ["introduction", "setup", "quickstart"],
      Basics: ["api-keys", "event-types", "app-portal", "consuming-webhooks"],
      Advanced: ["incoming-webhooks", "rate-limit", "retries"],
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
