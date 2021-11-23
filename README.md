---
title: The Making of Colophon Cards
layout: layout.njk
eleventyExcludeFromCollections: true
permalink: /
tags: front
---

# The Making of Colophon Cards

## Where is that goddamn PDF?

Ever had an important document or bookmark, which you _know_ you saved somewhere, and you _know_ was filed somewhere clever, but can't for the life of you find again?

Ever have a document that you know is somewhere in your company's shared drive, which is very sensibly organised and structured in a way that you all agreed was correct, but no matter how much you search, you just can't find it.

You try to search for it, but because you either haven't read it yet (you filed it away to read later) or because you only glossed over it (it's a contract or similar document that isn't pleasure reading), you can't come up with a search term that seems to surface it. You tagged the file, but even with tag filtering, your search terms are still too generic and still have hundreds, if not thousands, of results.

But, if you were lucky enough to have gotten it via email in the first place, you always seem to be able to find it with the first search term you came up with or in the first mail folder you looked in.

Why do search, folders, and labels/tags work for email but not for your drives (shared or not)?

Why are shared drives always where files disappear, never to be found again except by the person who first saved it?

Unless somebody else moved it. Then that person becomes the only person who can ever find the file again.

- It's easier to find files in your own local drive than in a shared one.
- Finding a specific email is much faster and easier than finding a specific Google Doc. You're more likely to find an email containing a link to the Google Doc than to find the doc itself in the drive.
- A shared Dropbox is like a black hole for PDFs.

Local and personal works better for most kinds of information management because you are the one doing the organising for yourself.

By doing your own organisation you automatically create mnemonic shortcuts for yourself. There isn't any confusion about terms---you know what you meant when you named the folder 'Project Stuff' and another just 'Stuff'. You remember what you meant in large part because you typed the names out yourself.

The act of saving and filing can also help you remember even if you don't remember the reasoning---'I think I saved it in my GitHub folder'. If you delegate the act of filing to an automated script or to another person (as you do with a shared folder) you lose these mnemonic devices. And you know your folder structure in detail because you made them.

This is why it's easier to find stuff in your local drive than on a shared one.

Email, _especially emailing something to yourself_, adds another powerful mnemonic device to your toolset:

Writing.

## Short writing helps you find your things

Constructing search terms that get results is a skill. It's the flip side to information architecture. Searching shared spaces requires a lot of the same expertise as creating the information architecture for those spaces:

- Understanding common terms.
- Knowing or discovering shared vocabularies.
- Discovering a common or learnable cognitive model for the structure.
- How these are reflected in the organisation of the company.
- Discovering the ontologies used by the company or the field or both.

Web developers who know what they are doing will construct the navigation and structure of the site to minimise the need for such expertise, but your intranet, wiki, or Dropbox will generally not have seen such careful design.

In the absence of designed information architecture, you have to resort to constructing the search term based on what you remember about the document.

Which is tough if you haven't read it yet or only skimmed it. This is why filing it away into a shared drive is as good as losing it.

File names aren't much help as they are, by convention, very short, regularly generic, and frequently auto-generated in some way.

But an email, especially one that you wrote yourself, is much simpler to find. You may not remember the exact text but you probably have a rough idea and, because you know yourself, you can guess at the words and terms you were likely to use.

This is why sending an email to yourself with a file as an attachment is often a better filing system than throwing it into your shared Dropbox.

## User-Subjective Information Management Works

This approach is called User-Subjective Information Management ([_The Science of Managing Our Digital Stuff_](https://mitpress.mit.edu/books/science-managing-our-digital-stuff) is a good starter on the theory) and you don't need anything new or expensive to use it. If you're an Apple user, a combination of the Notes and Mail apps will do you just fine, most of the time.

It does tend to clutter up your email inboxes, though, which can pose problems for both light and heavy email users.

(Though, works quite well for moderate email users so if you fall in that category then I highly recommend this approach.)

That nice Notes app, also, is only available on Apple devices and most of the cross-platform alternatives are either:

1. Stupendously complex behemoths that look like they either need a PhD or a hit of acid for them to make sense.
2. Or, they take the shared data problem that plagues Google Drive to the next level. Everything is shared. Live. Constant. Your boss is eternally hovering over your virtual shoulder and sees every single keystroke in your collaborative documents.

That micromanagement espionage mode of collaboration, or some variation thereof, is the _default_ for almost every collaborative note-taking or knowledge management app out there.

Do you really think you're going to get honest feedback from everybody you work with when the entire management chain from your line manager up to the CEO can see their every keystroke?

Do you really think you're going to get very far in managing your own data and information when everybody is using a shared Notion space?

The point of being able to find your documents and notes again is to _be able to use them_. That means turning them into documents or shared notes and getting some form of feedback on them.

Striking a balance there, between managing your own information library and sharing the _product_ of that management work with others, is surprisingly hard to find with modern tools.

Solving this problem is the goal of Colophon Cards (Kólófón in Icelandic) which is a prototyping project made possible by a grant from [The Icelandic Centre for Research's Technology Development Fund](https://en.rannis.is/funding/research/technology-development-fund/nr/545).

I'm [Baldur Bjarnason](https://www.baldurbjarnason.com/), the project leader and this website is a chronicle of my journey to bring Colophon Cards to life, so that it can help solve your problems.

Even though the project itself isn't open-source, I aim to work as much in the spirit of OSS as I can. This is why I plan on doing the prototyping, design, and planning work for the project out in the open in this repository.

## Colophon Cards

In recent years we've seen a micro-revolution in Personal Knowledge and Information Management systems. On the low end, built-in apps such as Apple's Notes have added more sophisticated capabilities. On the high end, apps like Roam and Notion have been mining the years of research done by academia in hypertext, reading and writing. They have been leveraging academic concepts to add features that now challenge the mainstays in this category.

But, from this end user's perspective, there are a few problems that these systems haven't solved:

- The high-end systems have a very steep learning curve and a substantial cognitive overhead. As in: you spend too much time and energy thinking about your notes instead of using your notes.
- The low-end systems lack features for writing _about_ things: bookmarking, annotating, quoting, summarising, navigating, etc. They don't even have the most basic awareness of the structure of the objects (files, websites, or documents) that the notes are on.
- They all implement the same, highly specialised, mode of collaboration: real-time (or near-realtime) shared ownership and shared organisation.
- With very few exceptions (Ulysses app, for example), they pay very little attention to the purpose of note-taking, which isn't just to capture and organise ideas but to improve your work. Your notes should inform your projects, designs, and writing. To do so, you need to be able to easily turn your notes into documents that feed into your work.

My goal with Colophon Cards is to create a web-based note-taking app for bookmarking and reading websites, ebooks, and documents. It needs to find a balance between ease-of-use and advanced features. It should have a user-subjective sharing model built in from the start where data is shared while the organisation is specific to each. Finally, it needs to provide straightforward tools for turning notes into documents for sharing with others.

{% include 'mailingform.njk' %}

## Notes on the making of Colophon Cards

1. [Design Notes](notes/01-design-notes/)
2. [The Data Model](notes/02-data-model/)
3. [The Sharing Model](notes/03-sharing-model/)
4. [Attachments and Bookmarks](notes/04-attachments-bookmarks/)
5. [Reading and Viewing](notes/05-reading-viewing/)
6. [The Business Model](notes/06-business-model/)
7. [Questions that will need to be answered](notes/10-questions/)
