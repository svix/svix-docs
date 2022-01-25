module.exports = {
  mainSidebar: [
    {
      Introduction: ["introduction", "setup", "quickstart"],
      Basics: ["event-types", "app-portal", "consuming-webhooks"],
      Advanced: ["incoming-webhooks", "rate-limit"],
      "Manage Your Account": [
        "account/overview",
        "account/environments",
        "account/org-members",
        "account/retries",
      ],
    },
    {
      Tutorials: ["tutorials/cli", "tutorials/event-type-schema"],
    },
    {
      Integrations: [
        "integrations/zapier",
        "integrations/advanced-zapier",
      ],
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