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

Update CURL

> curl -u JDC6SqLNp33yxFf87jmv:X -H "Content-Type: application/json" -X PUT -d '{ "helpdesk_ticket": { "priority":1}}' https://itsd-computicket.freshservice.com/helpdesk/tickets/1.json

POST CURL

> curl -u JDC6SqLNp33yxFf87jmv:X -H "Content-Type: application/json" -d '{ "helpdesk_ticket": { "description": "kyles test", "subject": "test", "email": "kylee@computicket.com", "responder_id": 5000165441, "priority": 1, "status": 2 }}' -X POST https://itsd-computicket.freshservice.com/helpdesk/tickets.json

Ticket Fields

> curl -u JDC6SqLNp33yxFf87jmv:X -H "Content-Type: application/json" -X GET https://itsd-computicket.freshservice.com/ticket_fields.json

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

---

React Materialize components

> https://github.com/react-materialize/react-materialize

> http://react-materialize.github.io/react-materialize/?path=/story/react-materialize--welcome

---

Run Chrome without CORS interference

> WIN+R

> chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
