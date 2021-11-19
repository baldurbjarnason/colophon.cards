---
title: The Sharing Model
layout: layout.njk
---

# The Sharing Model

## Why the tech industry's standard sharing model doesn't work for this app

I'm on the record as having the opinion that collaboration and sharing features in modern productivity [software took a wrong turn with Google Docs](https://www.baldurbjarnason.com/2021/the-group-think-hoot/) and has since done more harm than good.

There are two major issues with how _all_ of these apps implement collaboration:

1. They are recipes for groupthink.
2. They build on shared data repositories.

### Groupthink

Real-time (or near-realtime) collaboration where every user can see the activities and contributions of every other user is as good as purpose-designed to undermine the productivity benefits of collaboration.

Generally speaking it means that in any given context, the consensus will converge on that of the highest authority in the room and those on the lower rungs of power will be excluded.

From my earlier post:

> As soon as an authority of any kind makes their opinion known, the group will shift in that direction. Even the most rational will tweak their responses after that. After all, who wants to risk going up against an authority? Interns will hesitate to comment. All objections will be a little bit more qualified or toned down.
>
> Generally speaking, if you are writing a document and want to get the most out of a group’s feedback, each contributor should be able to form their opinions independently and give their responses without fear of social or community repercussions.

Another issue is that this model also downplays shared concerns, ones that members of the group broadly agree on. Instead of getting multiple explanations from multiple perspectives on why something is of concern (only one of which might actually be the explanation that clicks for others) you get the first one, usually the one that's the most hastily written and least thought out, and a number of ad hoc 'upvotes'.

If the goal with a collaboration is to make the most out of each person's expertise, perspective, and experience, you need to silo their contributions from each other. This is usually done by having an editor or moderator that manages responses, additions, and comments. Only what the moderators approve becomes visible to all in the group.

### Shared data repositories

The standard way to share data and files in organisations today is some sort of unified repository.

Sometimes it's literally a shared drive, Dropbox, or Google Drive.

Sometimes it's an internal Wiki or document system like Notion.

Conceptually, they serve the same function: they are an ad hoc, poorly thought out, reimplementation of old office filing systems.

They are structured like a combined company filing cabinets and bookcases, with rows and rows of shelves, each containing books and folders of company data.

To make sure that others can find a document, you make a copy, put it in a folder, put that folder in one of the shelves, and let others know where you put it.

Then one of your coworkers moves the folder and the document is effectively lost unless somebody figures out who moved it and asks them were.

Shared data repositories _require_ information architecture and information architecture is highly complex. This is why the position that they used to call 'secretaries' was in actual fact a highly skilled profession. This is why many large organisations in the day (and some still do) employed librarians.

This is also why nobody can ever find anything in your company's shared Google Drive. That shit needs an information architect and Over-Enthusiastic Joe from Support, who is the only one with the extra energy and time to try to organise the drive, is not an information architect.

None of this is necessary in a digital context because the keyword in the above description is _copy_. We can share the data and let each user organise their own collection. Instead of one copy going into a shared bookshelf, every recipient has their own bookshelf that they organise according to their needs and they each get their own private copy of the document.

Turns out personal information management is a much simpler problem than group information management.

If you're the only one touching your files, you are more likely to be able to find what you're looking for, you will be able to use the filing system that suits your personality and work, and you will be able come up with more effective search terms.

This is born out in research where it's sometimes called the _User-Subjective Approach to Personal Information Management_.

More popularly known outside of academia as _how email works_.

## The goals of the Colophon Cards sharing model

We want to:

- Enable the sharing of documents, files, and notes with a group of collaborators.
- Let the original sharer act as a moderator to filter which collaborator reactions get added to the shared context.
- Make sure that nobody can affect _your_ stuff in any way. Nothing gets moved around by somebody else when you're not looking.
- Let you work with people who _aren't_ using Colophon Cards because otherwise the network effect will work against adoption.
- Let a single user ignore all of the sharing and collaboration aspects completely if they want to.

We _don't_ want to:

- Do anything truly realtime.
- Let any two or more people act simultaneously on a single object.
- Do any form of messaging.
- Become a collaborative document authoring platform. This should be all about finding things, reading them, writing notes about them, and then sharing those notes (and with the note, the thing itself as an attachment).
- Force people to pick a globally unique username of some sort.

The sharing model comes in two slightly different flavours:

1. The collaborator is another Colophon Cards user.
2. The collaborator is an external user.

## The Sharing Process

The simplest addressing model I can think of would be to combine mentions with email addresses.

That is, if the name or body of a note contains a token that begins with an `@` followed by an email address (e.g. `@sarah@example.com`) then that note will be shared with the person owning that email address. You can mention multiple people in one note and the app will ask you to confirm sharing so that it doesn't happen accidentally.

Then the system sends an email containing that note with links to its attachments to those mentioned. In that email there is an expiring signed link to the note/thread that is being shared so that you don't have to be signed in to view the thread. If the link has expired then one click sends a fresh one to your email.

If you reply to the email then the original sharer gets that reply added as a reply Card in the shared thread that only they can see. They then have the option to add that reply to the shared thread context so everybody can see.

The difference between internal and external collaborators happens when the collaborator follows that link. External collaborators get a nice web page with the note, attachments, and an activity thread with the approved replies.

Internal collaborators who are signed in can file the note to a thread of their own as a quoted Card. They can reply to the shared card _or any of its replies_ in the web UI. They can read and annotate the attachments through the web GUI. Those annotations can then optionally be shared back to the original sharer who, again, can choose whether to approve them or not.

- Both internal and external collaborators get the email although internal collaborators can turn off email notification in their account settings.
- Both internal and external collaborators can reply directly via email, only internal collaborators can reply via the web UI.

This way Colophon Cards can provide an alternative mode of collaboration to what you get in most other productivity software without compromising the advantages of single user information and knowledge management.

## Sharing Data Model

Collaboration both undercuts and reinforces the business model of Colophon Cards.

It undercuts it in that you should be able to use it, even for collaboration, even though you are the only one of your collaborators with an account.

It reinforces it in that there are fewer barriers to entry: you should be able to start using it even though none of your coworkers are using it.

But, ideally, the goal is to sell this as a service to companies with per-user pricing. Priced something like $5-10/user/month depending on storage. To that end, companies will want to be able to manage the user accounts that they are paying for.

That means:

- They need to be able to assign 'Admin' roles to some of their user Accounts.
- There needs to be a separate 'Organisation' type that Admins manage and owns the org payment credentials.
- Admins are able to add user Accounts to the Organisation and remove them.
- When an account that belongs to an organisation shares a Card they should get warned if they are sharing it to a non-organisation account.
- Organisations need to be able to revoke access to shared cards.
- Organisations need to be able to share cards with org-defined groups. Probably through an alias of some sort.

### The simplest way this can happen

- Users can have several Accounts, each with their own Authentication settings.
- Each Account is associated with one or more confirmed email address.
- An account is its own bucket of cards and threads.
- An account can _belong_ to an Organisation and to Organisation groups. The most important of wich is the _Organisation Admin_ group.
- An account can be deactivated by the organisation that paid for it.

<table>
  <tr>
    <th>Model</th>
    <th>Owns/Can act on</th>
    <th>Groups of...</th>
    <th>References</th>
  </tr>
  <tr>
    <td>Authentication</td>
    <td>Account</td>
    <td></td>
    <td>Confirmed Email, external user id (like Google SSO id)</td>
  </tr>
  <tr>
    <td>Account</td>
    <td>Activity</td>
    <td>Group</td>
    <td>Organisation, Authentication</td>
  </tr>
  <tr>
    <td>Organisation</td>
    <td>Group</td>
    <td>Money $</td>
    <td>Account</td>
  </tr>
</table>
