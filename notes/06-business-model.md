---
title: Business Model
layout: layout.njk
tags: posts
date: 2021-11-19
---

# Business Model

The basic business model is simple: it's a web-based Software-as-a-Service! Line up the customers and count the money. Besides, the app is just in the prototyping stage, way too early to think about the business model, right? Right?

Unfortunately, it isn't quite that simple.

It's true that the goal is to create a SaaS but the devil is in the details as a lot depends on where I position the app. The exact business model _will_ affect the feature design of the service itself. You simply can't design the app and the business model separately by isolated teams.

## What others are doing

If you price primarily by storage and position yourself next to services like Dropbox, your per-GB price is always going to suffer by comparison.

The straightforward approach is to have a set price per user account, per month but even then the per user pricing in the industry is all over the place:

- Bear: $1.49/month (which is a goddamn steal)
- Ulysses: $50/year (~$4/month)
- Roam Pro: $15/month
- Notion: $5/month Pro, $10/month Team, enterprise
- Obsidian: $8/month for sync, $16/month for site publishing, $50/year for commercial use (open source so this last one is largely voluntary, I'd think).

Roam lets you have collaborators in your graphs, which goes a long way to justify its price. Bear and Ulysses are drastically underpriced, in my view, but that's a common problem for iOS-based businesses (app store customer reviews are _brutal_ about pricing). My sense is that Obsidian has the most interesting pricing because they have per-feature pricing. Though they could have simplified it by going for account levels instead.

Most of notetaking apps don't mention anything about storage quotas in their pricing but that's because they don't do much in terms of storage.

Notion bears special mention here as they are clearly the best funded of the lot. Their base tiers are underpriced for what they offer. It comes with unlimited storage, which absolutely isn't sustainable in the long term.

As a comparison, here's the pricing plan for FastMail, which you could position as a knowledge-management-adjacent service.

- Basic $3/month (2GB storage, FastMail-owned domain name or one provided by a Standard tier user)
- Standard $5/month (30GB storage, custom domain)
- Professional $9/month (100GB, email retention archive)

There's a good chance that, long term, Notion will end up with storage quotas that are in the same ballpark as FastMail's.

## What Colophon Cards could do

The ConvertKit service took an interesting approach to developing their business model: they targeted high end users first and only expanded their offering to include cheaper tiers once they had proven both the app and the business model.

This approach, when applied to Colophon Cards, would look something like this.

An initial 'Pro' tier:

- $10/month/user
- 100GB storage/user (then a per additional GB price that depends on available commodity storage options)
- Website archiving
- Ebook and document reading support (EPUB, DOCX, PDF)
- "Unlimited" collaborators via email.

Maybe even with an additional 'Team' tier:

- $30/month for five users, +$10/month for each additional user after that.
- Team management features.
- Combined storage quotas.
- Has the same features as the 'Pro' tier

Later on, if the app proves itself and gains traction and the margins support it, I could expand this to include a 'Standard' tier:

- $5/month/user
- 30GB (or thereabouts)
- Bookmarking for websites
- Reading features only for documents/card bodies written in Colophon Cards.
- "Unlimited" collaborators via email.

One issue that a lot of beginning SaaSes run into is that the lower tier users tend to draw all of your attention and incur higher support costs so it's often better to not enter that market unless you're sure you can handle it.

I don't need to decide on the specific approach at this stage. But it's useful when prototyping and designing to know what sort of margins you're aiming for.

{% include 'mailingform.njk' %}
