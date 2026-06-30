---
name: SendGrid connection invalid key
description: The Replit SendGrid connection can serve an invalid/placeholder api_key; validate before trusting it.
---

# SendGrid connection can serve an invalid api_key

The Replit SendGrid connection (credential proxy / `listConnections('sendgrid')`) returns
`settings.api_key` and `settings.from_email`. A successfully "added" + bound connection does
**not** guarantee the key is valid — it can hold a short placeholder/garbage value (e.g. a
9-char string not starting with `SG.`). SendGrid then rejects sends with
`401 — "The provided authorization grant is invalid, expired, or revoked"` and the SDK warns
`API key does not start with "SG."`.

**Why:** the connection setup stored a bad key; re-running `proposeIntegration` only refreshes
the platform binding/proxy, it does not fix the underlying credential value.

**How to apply:**
- A real SendGrid API key is ~69 chars and starts with `SG.`. You can safely sanity-check the
  shape via `listConnections('sendgrid')` in code_execution (check length / `startsWith('SG.')`)
  WITHOUT printing the secret value.
- `from_email` must be a SendGrid-verified sender; send `to` the real destination and set
  `replyTo` to the visitor. Fail with a 500 (don't fall back to an unverified from) if
  `from_email` is missing.
- If the key shape is wrong, it's a user credential problem — the user must reconnect SendGrid
  with a valid account/key. Don't keep retrying the send or re-proposing the integration.
