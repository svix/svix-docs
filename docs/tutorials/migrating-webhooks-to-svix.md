---
title: Migrating webhooks to Svix
---

Switching to Svix from your own home-grown webhooks system is usually straightforward. The intention of this tutorial is to help guide you through the process.

This tutorial assumes you already have a working Svix environment, and have successfully followed [the quickstart guide](../quickstart.mdx).

## Migration strategy

The recommended approach is to run both the existing legacy system and Svix in parallel, and gradually cut-over traffic on a customer by customer basis. That is, you would want to migrate full customers over rather than a percentage of traffic or some other mechanism.

To achieve this cut-over, you would want to locate the centralized location where all of your events are dispatched from (if you have one), or alternatively map all the places where webhooks are dispatched from.

Once located, you would want to change these to conditionally send webhooks to either your existing legacy system or Svix. The condition can use feature flags, a property on the target customer, a hardcoded list of customers, or whatever other mechanism you want to use to toggle which customers should use which system.

The next step is to copy over the data from your existing legacy system to Svix. You can do it using the Svix API as demonstrated [in the quickstart document](../quickstart.mdx). Namely, you'd want to [create a a Svix application](https://api.svix.com/docs#tag/Application/operation/v1.application.create) for each of your customers, and [creating the relevant endpoints](https://api.svix.com/docs#tag/Endpoint/operation/v1.endpoint.create) for each application.

It easiest to start by cutting over traffic only for test accounts, or accounts of will beta testers to make sure everything works as expected.

Once you see everything works, you can gradually toggle the rest of your customers to use Svix instead of the old system. Once done, you can bring down the old system and remove the code that calls it and the associated conditionals.

That's it! You can now safely delete all the thousands of lines of code and all of the infrastructure of your old systems. The transition is now complete!

Most of our customers gradually move over their customers over the span of a day or two. Though you can go as slow or fast as you're comfortable is.

We help a lot of customers switch from their legacy home-grown systems to Svix, so please reach out it you have any questions. The team will be happy to help!

## Additional considerations

If you already use [Standard Webhooks](https://www.standardwebhooks.com/) as your signature scheme there's no additional work needed. Alternatively, if you use a different scheme, please reach out to the Svix team and we can provide instructions on how to make the transition seamless for your customers.
