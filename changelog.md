# Change Log

---

---

## v0.0.38

-  Changes to colorpicker
-  Removed the Requester Email field from the Add Ticket form. Now defaults to the requester to the user that creates the ticket.

---

---

## v0.0.37

-  Changed login test login to check against global filter as opposed to a specific ticket. This fixes an issue where certain users couldn't login due to the test call being made against a ticket they do not have access to.

---

---

## v0.0.36

-  Added a feature to handle if an API Key gets changed while the user is logged in. On 403, the API Key will reset to null and bring the user back to the login screen.

---

---

## v0.0.35

-  Changed ticket description to be completely hidden when collapsed.
-  Changed sorting order. Now sort by closest due date, then by priority

---

---

## v0.0.34

-  Fixed height of navbar

---

---

## v0.0.33

-  Changed position of version indicator

---

---

## v0.0.32

-  Added version identifier to UI

---

---

## v0.0.31

-  Updates to view changes on Preleen's Machine

---

---

## v0.0.30

-  Tested and confirmed workflow process with new variable structure
-  version pushed to live

---

## v0.0.29

-  Moved variables process.env variable to hide from public
   -  Admin API Key
   -  API URL
-  Added change log
-  Re-done Readme

---
