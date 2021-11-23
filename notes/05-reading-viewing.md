---
title: Reading and Viewing
layout: layout.njk
tags: posts
date: 2021-11-17
---

# Reading and Viewing

Every note-taking app will eventually have to answer one simple question: how can you help my reading?

Reading is, for most people, the mirror activity to writing. It is creative, thoughtful, engages all of your mind, and requires both planning and skill. Any notes app that is being used to feed into writing will eventually have to support reading in some way.

Some answer this with a simple 'no' and delegate the actual reading features to other apps. iOS's Notes app can do this because it is so well integrated into the OS by now. All of iOS's reading apps are, effectively, reading features for the Notes app.

Others answer this with complex natural language processing, reference management, or social annotations.

The rest just add standard PDF reading with highlighting. Maybe.

All these options are valid and useful.

But, much like how Colophon Cards is designed to favour a specific approach to knowledge management or collaboration, it should also be designed to favour---and make easier---a certain approach to reading. So, before we even think about designing a reading UI (which we probably won't include in the absolute first versions anyway) we need to set out out the basic principles of the reading strategy Colophon Cards is favouring.

## Kinds of reading

There are many different studies, research, and books on reading. Some have rigorous note-taking strategies. Some are monomaniacally based on a single, unreplicated study. Some are based on years of research and practice. And even in the last group, they don't all agree.

Because there are many different kinds of reading, even beyond the usual "skim, speed read, active reading" categories. For many reading apps, the strategy they favour is borne out in their design. "One word at a time" apps are based on a very narrow idea of speed reading that downplays analysis and engagement with the text's structure. LiquidText favours reading that's a creative process of assembling your impressions of a text into a document summary.

The strategy that I favour for Colophon Cards is the one outlined by Adler and van Doren's _How to Read a Book_. There they describe an approach to reading that comprises of four complementary tactics that build on each other to become a holistic strategy for understanding and arguing with texts:

1. Elementary reading. The regular kind of reading we do most of the time. Read the text; get its meaning.
2. Inspectional reading. A kind of reading that's only really possible with print at the moment. You browse the text. Inspect its shape, ToC,and back cover. Skip to the end. The aim is to inspect the surface of the book "to learn everything that the surface alone can teach you".
3. Analytical reading. The kind of reading that is driven by structured questioning of the text as you read it.
4. Syntopical reading. Where you do comparative reading and are studying the relationships of texts.

These four categories are not exhaustive and are not meant to imply that other approaches to reading don't have their uses. But this approach is more _generally_ useful than most of the specialised, intervention-oriented reading apps like LiquidText or speed-reading apps.

(Everybody should read _How to Read a Book_. It's great.)

The benefit of this strategy is that, when reading print, it doesn't require any specialised tools or skills. It all builds on elementary reading with questions and curiosity.

The problem comes in digital, which doesn't offer the tactile or three-dimensional properties of a printed object, and where most general-purpose reading apps only show a single view of the text and only offer a variation on a single annotation tool at best: highlights with note text hidden in a virtual drawer somewhere.

Everything we do to the surface of a text needs to serve a purpose if it is to aid our reading:

1. Mnemonic. Helps us _remember_ a marked passage for some other context.
2. Contextual. Helps us _place_ a text in a context.

Highlights can serve these two needs, although I would argue that are generally too strong an intervention into the text and risk, well, _colouring_ your impressions of the text's argument. But they serve their purpose for the most part.

It's the attachment of notes to highlights that's problematic. Taking linked text and shoving it into an abominable hidey hole (to steal a phrase from Ted Nelson) is neither a mnemonic nor does it place the text as it itself is positioned firmly _outside_ the text. Not even on the border. It is to the text what a novelty coffee mug from the gift shop is to the frame of a painting in a gallery.

But in most reading apps, these notes are not easily editable or used outside of their hidey hole. This is the reason why many readers just use their familiar note-taking apps for the notes themselves, resorting to copying and pasting quotations from the reading app. I think that it's inevitable for most mature notes apps to add _some_ form of reading functionality; the only question is which reading strategies they are going to favour and how badly the outside context (notes, social groups, collaboration) interferes with the reading context.

The strategy of Colophon Cards is to keep the notes view entirely separate from the reading view and that the job of the reading UI is to provide the reader with tools to map the text with marks that provide the notes with the hooks it needs to contextualise and engage with the text. These mapping tools should lend themselves to a variety of reading strategies although the primary goal is to enable the strategy outlined by Adler and van Doren.

## Principles of reading for Colophone Cards

These are the concept that should guide the design of the reading view.

### 1. Annotations are for reading, not for writing, or collaboration

Annotations are _not_ a note-taking tool. They are a mapping tool to mark the surface of the text with landmarks or signposts.

### 2. Annotation writing should be placed on the surface of the text, not hidden away

Written annotations are a useful mnemonic tool but those need to be _on_ the text. Visible while reading, not hidden away. And they need to primarily exist as an etching on the surface of the text, not as a note that's brought in via hypertext.

### 3. Marks should be simple and unobtrusive

Any form of annotation is an intervention in the text. We should try to ensure that these interventions affect the reading as little as is possible. Favour underlines and margin lines over highlights. Simple marks, symbols or short words over widgets and notes.

### 4. The surface of the text should be malleable

For the reader to be able to etch text onto the surface of the text, that surface needs to be malleable in some way and expose that malleability as an affordance somehow.

### 5. Annotations are not notes but can be quoted by notes

They are landmarks that notes can use, like refering to a point in a map of a territory.

### 6. The reader should have multiple paths to seeing the text as a whole object

Print is multidimensional. It has tactility, depth, weight, and visual affordances and getting scale is easy, esp. with loose leaf printed documents. Tape the essay's pages to a wall and step back. Cost: 35 cents for the roll of tape. Digital has no such affordance but we can mitigate this flaw by offering a variety of views of the text at varying degrees of scale and granularity. PDF readers offer thumbnail views of its pages. We should figure out ways to offer the same for scrolling documents.

We should also figure out ways to offer constructive views of the text with metadata that enables quick skimming. of the text.

### 7. All views should be synced

What makes a map useful is a sense of location. "You are here." If we don't know where we are, our understanding of the territory is compromised. That's why your current location in the reading view should be synced and exposed in all other views, _live_. You should be able to have a thumbnail view open on a large screen, read on your tablet, and have your current position constantly marked on the large screen's thumbnail view.

### 8. Aid analysis by helping the reader postpone opinion

One of the harms that notes-oriented annotation can do to your reading is that it prompts you to prematurely contextualise what you're reading, before you've engaged with its argument, or fully 'heard' it out.

Affordances for contextualisation should primarily be placed at the beginnings or ends of chapters. In-text annotations should mostly be lines, circles, and symbols/short words.

## Why 'mark with attachment' might be more useful than a mark with text

The primary problem with notes-oriented annotation is that there is usually no space for free-form, any length notes to be comfortably placed on the surface of most digital texts. LiquidText solves this by simply splitting the screen in two, which only really works for large screens. Others fix this through an intervention in the text, forcing it to have greater margins. Most just shove the note into an abominable hidey hole.

A reasonable compromise alternative here might be to add image attachments to a mark. Most of the time, a thumbnail is a better representation of an image than an abridgement or thumbnail is of text. The thumbnail might still be too intrusive but it's worth testing out.

## All reading tools are also writing tools and should be prototyped as such first

The question here, as always, is what is the simplest way to implement and test design ideas for the app. PDF reading is a big project and I know from experience that it can derail a project from its primary purpose. EPUB reading is surprisingly nuanced and complicated. Website archiving and annotation is doable but involved. None of these reading use cases lend themselves to being the first test case for design and implementation.

But then I'm reminded of an observation many have made throughout the years: writing involves a lot of reading. Given that the 'first cut' of Colophon Cards need to support card bodies in addition to the card's text which is used for search and filter, the reading features could be prototyped as tools for reading over text that was _written in Colophon Cards_. Some of it could be your own writing. Some of it would be shared with you using the sharing approaches outlined in a separate document.

This approach also supports adding some form of modality to writing. One of my main hesitations around markdown (or any form of markup, to be honest) is that they necessarily add read and write modes to your UI. But if the reading mode has its own tools and affordances, that usefulness could make up for the usability drag that added modes would introduce.

The relationship between card bodies and the cards themselves still need to be clarified and hashed out. But the reading mode of your own markdown text looks like the primary candidate for prototyping the reading view.

{% include 'mailingform.njk' %}
