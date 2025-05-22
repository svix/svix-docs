---
title: Webhooks API for your customers
---

import CLITabs from '@theme/CLITabs';
import TabItem from '@theme/TabItem';

While most Svix customers use the [pre-built application portal](../app-portal.mdx) to let their webhook consumers manage their webhook subscriptions. In some scenarios it may be desirable to give webhook consumers the ability to manage their subscriptions using an API.

The most effective way to support this use case is by incorporating webhook management endpoints into your existing API. This allows your webhook consumers to use the same API they're already familiar with and continue using their existing authentication tokens.

You can achieve this by implementing thin wrappers around the Svix API that verify the authentication tokens and then make calls to the respective Svix APIs. Here is a small Python example showing how to wrap the [create endpoint API](https://api.svix.com/docs#tag/Endpoint/operation/v1.endpoint.create):

```python
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from svix import Svix, EndpointIn
from .auth import get_authenticated_user, User

app = FastAPI()
svix = Svix("AUTH_TOKEN")

class EndpointRequest(BaseModel):
    url: str
    description: str
    # Add as many fields as you want here

@app.post("/endpoint")
def create_endpoint(data: EndpointRequest, user: User = Depends(get_authenticated_user)):
    try:
        return svix.endpoint.create(
            user.id,  # Using the user id as the app UID
            EndpointIn(url=data.url, description=data.description)
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
```
