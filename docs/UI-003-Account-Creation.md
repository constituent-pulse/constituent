# UI-003 Account Creation

## Status

Superseded by `docs/UI-006-Integrated-Onboarding.md`.

The separate account-creation route is no longer part of the approved user flow. Email, ZIP Code, and topic selection now live inside the integrated `/onboarding` flow.

`/account` is retained only as a stale-link redirect to `/onboarding`. It must not contain duplicate signup logic, notification preference collection, persistence, backend calls, party affiliation, ideology fields, political profiling, or account setup branching.
