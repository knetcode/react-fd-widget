## React / Electron Freshdesk Widget

---

Runs dev version on :3000 and desktop app

> yarn dev

Builds out static components

> yarn build

---

API TOKEN

> JDC6SqLNp33yxFf87jmv

URL

> https://itsd-computicket.freshservice.com/api/v2/ > https://itsd-computicket.freshservice.com/api/v2/tickets/19111?include=requesters > https://itsd-computicket.freshservice.com/api/v2/agents

Working CURL

> curl -v -u JDC6SqLNp33yxFf87jmv:X -H "Content-Type: application/json" -X GET 'https://itsd-computicket.freshservice.com/api/v2/tickets/19111?include=requesters'

Working Fetch

> `fetch('https://itsd-computicket.freshservice.com/api/v2/agents', {headers: {Authorization: 'Basic SkRDNlNxTE5wMzN5eEZmODdqbXY6WA==', 'Content-Type': 'application/json',}, method: 'GET',})`

---

Priorities

> 1 = Low
> 2 = Medium
> 3 = High
> 4 = Urgent

---

Status

> 2 = Open
> 3 = Pending
> 4 = Resolved
> 5 = Closed
