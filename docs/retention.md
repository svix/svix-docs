---
title: Payload Retention
---

import CodeTabs from "@theme/CodeTabs";
import TabItem from "@theme/TabItem";

Svix retains all message payloads (content) for a period of 90 days, after which they are deleted. This ensures that potentially sensitive and private information is not held indefinitely.

## Modifying the retention period

While 90 days is a good default for most use-cases, in some cases, a shorter retention period is preferred. Since different messages may require different retention periods, Svix lets you control the wanted retention on a message by message basis.

To change the retention period just pass the wanted retention period when creating the message by setting the `payload_retention_period` parameter to the wanted number of days.

Here are a few examples for setting the retention to `14` days:

<CodeTabs>
<TabItem value="js">

```js
const svix = new Svix("AUTH_TOKEN");
await svix.message.create("app_Xzx8bQeOB1D1XEYmAJaRGoj0", {
  eventType: "invoice.paid",
  eventId: "evt_Wqb1k73rXprtTm7Qdlr38G",
  payloadRetentionPeriod: 14,
  payload: {
    id: "invoice_WF7WtCLFFtd8ubcTgboSFNql",
    status: "paid",
    attempt: 2,
  },
});
```

</TabItem>
<TabItem value="py">

```python
svix = Svix("AUTH_TOKEN")
svix.message.create(
    "app_Xzx8bQeOB1D1XEYmAJaRGoj0",
    MessageIn(
        event_type="invoice.paid",
        event_id="evt_Wqb1k73rXprtTm7Qdlr38G",
        payload_retention_period=14,
        payload={
            "id": "invoice_WF7WtCLFFtd8ubcTgboSFNql",
            "status": "paid",
            "attempt": 2
        }
    )
)
```

</TabItem>
<TabItem value="go">

```go
svixClient := svix.New("AUTH_TOKEN", nil)
svixClient.Message.Create("app_Xzx8bQeOB1D1XEYmAJaRGoj0", &svix.MessageIn{
    EventType:              "invoice.paid",
    EventId:                svix.String("evt_Wqb1k73rXprtTm7Qdlr38G"),
    PayloadRetentionPeriod: 14,
    Payload:                map[string]interface{}{
        "id":      "invoice_WF7WtCLFFtd8ubcTgboSFNql",
        "status":  "paid",
        "attempt": 2,
    },
})
```

</TabItem>
<TabItem value="java">

```java
Svix svix = new Svix("AUTH_TOKEN");
svix.getMessage().create("app_Xzx8bQeOB1D1XEYmAJaRGoj0",
  new MessageIn()
    .eventType("invoice.paid")
    .eventId("evt_Wqb1k73rXprtTm7Qdlr38G")
    .payloadRetentionPeriod(14)
    .payload("{" +
       "\"id\": \"invoice_WF7WtCLFFtd8ubcTgboSFNql\"," +
       "\"status\":  \"paid\"," +
       "\"attempt\": 2" +
      "}"));
```

</TabItem>
<TabItem value="kotlin">

```kotlin
val svix = Svix("AUTH_TOKEN")
svix.message.create("app_Xzx8bQeOB1D1XEYmAJaRGoj0",
        MessageIn(
            eventType = "invoice.paid",
            eventId = "evt_Wqb1k73rXprtTm7Qdlr38G")),
            payloadRetentionPeriod = 14,
            payload = mapOf<String, Any>(
                "id" to "invoice_WF7WtCLFFtd8ubcTgboSFNql",
                "status" to "paid",
                "attempt" to 2
            )
```

</TabItem>
<TabItem value="ruby">

```ruby
svix = Svix::Client.new("AUTH_TOKEN")
svix.message.create("app_Xzx8bQeOB1D1XEYmAJaRGoj0",
    Svix::MessageIn.new({
        "event_type" => "invoice.paid",
        "event_id" => "evt_Wqb1k73rXprtTm7Qdlr38G"})),
        "payload" => {
            "id" => "invoice_WF7WtCLFFtd8ubcTgboSFNql",
            "status" => "paid",
            "attempt" => 2
        },
        "payload_retention_period" => 14
    })
)
```

</TabItem>
<TabItem value="csharp">

```csharp
var svix = new SvixClient("AUTH_TOKEN", new SvixOptions("https://api.svix.com"));
await svix.Message.CreateAsync("app_Xzx8bQeOB1D1XEYmAJaRGoj0", new MessageIn(
    eventType: "invoice.paid",
    eventId: "evt_Wqb1k73rXprtTm7Qdlr38G",
    payloadRetentionPeriod: 14,
    payload: new {
        id: "invoice_WF7WtCLFFtd8ubcTgboSFNql",
        status: "paid",
        attempt: 2,
    },
));
```

</TabItem>
<TabItem value="cli">

```shell
export SVIX_AUTH_TOKEN="AUTH_TOKEN"
svix message create app_Xzx8bQeOB1D1XEYmAJaRGoj0 '{ "eventType": "invoice.paid", "eventId": "evt_Wqb1k73rXprtTm7Qdlr38G", "payloadRetentionPeriod": 14, "payload": { "id": "invoice_WF7WtCLFFtd8ubcTgboSFNql", "status": "paid", "attempt": 2 } }'
```

</TabItem>
<TabItem value="curl">

```shell
curl -X POST "https://api.svix.com/api/v1/app/app_Xzx8bQeOB1D1XEYmAJaRGoj0/msg/" \
    -H  "Accept: application/json" \
    -H  "Content-Type: application/json" \
    -H  "Authorization: Bearer AUTH_TOKEN" \
    -d '{"eventType": "invoice.paid", "eventId": "evt_Wqb1k73rXprtTm7Qdlr38G", "payloadRetentionPeriod": 14, "payload": {"id": "invoice_WF7WtCLFFtd8ubcTgboSFNql", "status": "paid", "attempt": 2}}'
```

</TabItem>
</CodeTabs>
