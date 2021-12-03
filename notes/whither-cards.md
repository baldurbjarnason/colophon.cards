---
title: "HTML Sketches: Whither Cards?"
layout: layout.njk
tags: posts
date: 2021-12-01
scripts:
  - "aria-switch-control.js"
stylesheets:
  - "whither-rich-text.css"
  - "whither-rich-text-fieldcards.css"
  - "whither-rich-text-modecards.css"
  - "check-switch.css"
---

# HTML Sketches: Whither Cards?

The list in the previous post has a lot of [open questions](/notes/10-questions/) related to cards. Now, there are a lot of approaches to answering these sort of questions---research, surveys, testing---but in this specific context I think it would be a mistake to dive right into one of those.

- I've already done a lot of research on this, it's been a big part of my life for the past five years
- I've deliberately chosen a target audience of which I am somewhat representative (knowledge worker in tech or publishing)
- I may have the questions I need answered but I don't have the questions I need to ask

It's the last one that's tricky. If you ask questions that people don't know the answer to or is outside of their expertise, most of the time you're just going to get whatever they think you want to hear. The best thing to do is to observe their behaviour as they are doing the work you are aiming to help with. See what problems crop up. Things get difficult if you can't do that but you can somewhat make do if, say, you are a part of the audience you are aiming to serve. But you still need to figure out if the audience understands the conceptual model of the UIs you are planning to use, if it actually does the job it's supposed to, if the job it's supposed to do actually solves the problem they have.

To do that I need to be clearer about what I'm asking. I need to clarify, in my mind, what _I_ mean when I say 'card'.

This is where sketches come in. Some use special apps for doing these kind of sketch mockups. Some just sketch it, literally. I like to sketch in HTML and CSS as that's a lot quicker and simpler for me than most of these other tools.

So, the goal is to sketch out a few approaches and iteratively inch my way towards a cohesive card concept that will then become the basis of future testing, research, and work.

## Plain text with modes

First up is plain text, first line of the card body serves as a summary, the rest is the card detail. Separate modes _on card_ for editing and viewing.

<div class="Card">
<div class="CardHeader">
  <div class="CardDate"> <a href="#">1 December 2021 &middot; 13:25 &ndash; 0 cards</a></div>
  <div class="CardButtons"><button class="CardTextButton"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Star</button></div>
</div>
  <div class="CardEdit">
<button class="CardButton"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg> Edit</button></div>
<div class="CardBody">This is a card body. Or card text. What does this look like? What does this feel like? How does this work? Does it need rich text? Will plaintext do?
&nbsp;
Is markdown a useful compromise?
</div></div>

<div class="Card" data-editing>
<div class="CardHeader">
  <div class="CardDate"> <a href="#">1 December 2021 &middot; 13:25 &ndash; 0 cards</a></div>
  <div class="CardButtons"><button class="CardTextButton"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> Link</button><button class="CardTextButton"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg> Attach</button><button class="CardTextButton"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Star</button></div>
</div>
  <div class="CardEdit">
<button class="CardButton">Cancel</button>
<button class="CardButton Primary"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> Save</button></div>
<div class="CardBody">This is a card body. Or card text. What does this look like? What does this feel like? How does this work? Does it need rich text? Will plaintext do?
&nbsp;
Is markdown a useful compromise?</div>
<textarea class="CardTextarea">This is a card body. Or card text. What does this look like? What does this feel like? How does this work? Does it need rich text? Will plaintext do?
&nbsp;
Is markdown a useful compromise?</textarea></div>

Ugh.

How about we just assume I get autosaving working and skip the whole "Cancel" and "Save" thing?

<div class="Card" data-editing>
<div class="CardHeader">
  <div class="CardDate"> <a href="#">1 December 2021 &middot; 13:25 &ndash; 0 cards</a></div>
  <div class="CardButtons"><button class="CardTextButton"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> Link</button><button class="CardTextButton"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg> Attach</button><button class="CardTextButton"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Star</button></div>
</div>
<div class="CardBody">This is a card body. Or card text. What does this look like? What does this feel like? How does this work? Does it need rich text? Will plaintext do?
&nbsp;
Is markdown a useful compromise?</div>
<textarea class="CardTextarea">This is a card body. Or card text. What does this look like? What does this feel like? How does this work? Does it need rich text? Will plaintext do?
&nbsp;
Is markdown a useful compromise?</textarea></div>

Then the issue is _how do you exit the edit mode?_ Automatically exiting edit mode whenever the card loses focus might be one way, but that would get frustrating quickly.

## Plain text, always edit

What about just having the card always in edit mode? That's how most native apps work. You don't have to click 'edit' anywhere in Bear to edit a note.

So, plain text, first line of the card body serves as a summary, the rest is the card detail. Always editing but with autosave of some sort.

Always being in the edit mode has issues when it comes to interacting with links and references but, provided that it's the right overall direction, I think we might be able to get around that using link previews much like you see in Facebook's posting widget or by using tooltips like Google Docs. It would be _hassle_ and make accessibility a bit more complicated, but overall doable.

_If_ the single-mode direction is worth it, overall.

So...

<div class="PlainCard" data-editing>
  <div class="PlainCardSidebar"><button class="PlainCardTextButton" aria-label="Star this card"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></button>
<hr class="PlainCardGrabHandle"/>
  <button class="PlainCardTextButton" aria-label="Archive this card"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button></div>
<div class="PlainCardHeader">
  <div class="CardDate"> <a href="#">1 December 2021 &middot; 13:25 &ndash; 0 cards</a></div>
</div>
<textarea class="PlainCardTextarea">This is a card body. Or card text. What does this look like? What does this feel like? How does this work? Does it need rich text? Will plaintext do?
&nbsp;
Is markdown a useful compromise?</textarea>
<div class="PlainCardFooter">
  <div></div>
  <div class="PlainCardButtons"><button class="PlainCardTextButton"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> Link</button><button class="PlainCardTextButton"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg> Attach</button></div>
</div></div>

This feels a bit cluttered but most of the buttons are just guesses at the sort of functionality a card might have. But, one notion that I think might be a useful guide here is [Taskpaper's idea](https://www.taskpaper.com/) that the note's text is the API so links are just links in the text. Possibly extracted and presented with preview widgets as you see on Twitter or Facebook. But either way it doesn't need a button. And the star thing was just a whim. Let's drop both and clean things up a little bit.

I can tweak the implementation of the textarea a bit as well. Use a simple `contenteditable` to make it autogrowing.

<div class="PlainCard" data-editing>
  <div class="PlainCardSidebar">
<hr class="PlainCardGrabHandle"/>
  </div>
<div class="PlainCardHeader">
  <div class="CardDate"> <a href="#">1 December 2021 &middot; 13:25 &ndash; 0 cards</a></div><button class="PlainCardTextButton" aria-label="Archive this card"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>
</div>
<div class="PlainCardEditable" contenteditable>This is a card body. Or card text. What does this look like? What does this feel like? How does this work? Does it need rich text? Will plaintext do?
&nbsp;
Is markdown a useful compromise?</div>
<div class="PlainCardFooter">
  <div></div>
  <div class="PlainCardButtons"><button class="PlainCardTextButton"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg> Attach</button></div>
</div></div>

How to handle deletes, archiving, or trashing of a card is it's own set of problems. But I'm thinking that it might actually belong in the margin or outside the card in some way.

Something like this (if you'll excuse the poor snap):

<img src="/assets/trash-sketch.jpg" alt="Quick sketch of trash button in the sidebar next to a card. Shows that the idea is that the card would animate out into the margin when the button is pressed" style="width: 320px; height: auto;">

So:

<div class="PlainCard" data-editing>
  <div class="PlainCardSidebar">
<hr class="PlainCardGrabHandle"/>
  </div>
<div class="PlainCardHeader">
  <div class="CardDate"> <a href="#">1 December 2021 &middot; 13:25</a></div>
  <div class="CardDate"> <a href="#">0 cards</a></div>
</div>
<div class="PlainCardEditable" contenteditable>This is a card body. Or card text. What does this look like? What does this feel like? How does this work? Does it need rich text? Will plaintext do?
&nbsp;
Is markdown a useful compromise?</div>
<div class="PlainCardFooter">
  <div></div>
  <div class="PlainCardButtons"><button class="PlainCardTextButton"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg> Attach</button></div>
</div></div>

The idea with the grab handle is that you should be able to rearrange the order of the cards in a thread/stack and even drag it out into the sidebar and position as you wish. You need it as the card body itself is always editable so you can't make the _whole_ card draggable. This feels like a core affordance for the app so, until testing reveals otherwise, I'm going to keep it in the sketches.

But it doesn't have to be where it is here. It could be placed in the empty space in the header.

<div class="PlainCard" data-editing>
<div class="PlainCardHeader Handle">
  <div class="CardDate"> <a href="#">1 December 2021 &middot; 13:25</a></div>
<hr class="PlainCardGrabHandle Header"/>
  <div class="CardDate CardNumber"> <a href="#">0 cards</a></div>
</div>
<div class="PlainCardEditable" contenteditable>This is a card body. Or card text. What does this look like? What does this feel like? How does this work? Does it need rich text? Will plaintext do?
&nbsp;
Is markdown a useful compromise?</div>
<div class="PlainCardFooter">
  <div></div>
  <div class="PlainCardButtons"><button class="PlainCardTextButton"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg> Attach</button></div>
</div></div>

This could work but I honestly don't think it's objectively superior to the margin grab handle.

Either way, the grab handle isn't even close to being an intuitive affordance and will need a complete rethink and design but this will do while sketching to get a feel for the card problem and figure out what to test.

<!-- Before I move onto sketching the next idea, a different approach to read/edit modes as well as this version with a separate card summary and details, I need to get a sense of what this kind of card would look like with more clutter: links, cross-references, bookmarks, attachments. -->

## But, wait, this doesn't work

All of the above is useful for hashing out certain themes and directions

Now I know that I need to:

- Avoid the Edit &rarr; Save cycle. Maybe not avoid the edit mode, per se.
- Avoid `save` gestures and loops in general. Autosave needs to work.
- Use the card's text as an API surface for links, much like social media does. (Leverage familiarity.)
- Consider trash, archiving, and delete _in context_, which means we need to tackle it in the thread/stack view.
- The grab handle needs more work, probably in the thread context, like deletions.

The problem with the above sketches is that they wouldn't work with the app's concept as I've planned it.

Namely, the concept is that it's a 'find first' UI. Each card is supposed to have a unique name or summary. With a single body card, the first 500 or so characters\* would serve as the card's summary.

<aside>

_\* Still a guess but, based on the DB and indexes available, the responsiveness this kind of UI needs, and the fact that with emojis even bog standard English needs to support multi-byte characters, ~500 characters is the ballpark maximum. I could go over but that'd either limit my DB choices when it comes to implementation or throw internationalisation out of the window or limit the find feature to just the first 500 or so characters of the summary._

</aside>

The problem with single-body cards is that the app needs to validate the card's summary: it has to be unique. There's also the question as to whether you'd allow `null` or anonymous cards. These would have an internal DB identifier but no external name/summary. Basically, these would be cards that you could only find through a full-text search at some point down the line or by scrolling to its position in the thread. Anonymous cards _could_ be useful. But it could potentially make a clumsy 'select all' disastrous. I semi-regularly delete and entire file's contents by accident this way. Not much of an issue when you have undos and version control but a major issue if doing so made the file _unfindable_. It's much harder to revert changes to a file _if you can't find it_.

It's likely that we're going to need a separate field for the name or summary and it's certain that this field is going to need stricter validation than the details or body field.

I'm going to need to sketch out a slightly more realistic card.

<div class="FieldCard" data-editing>
<div class="FieldCardHeader Handle">
  <div class="CardDate"> <a href="#">1 December 2021 &middot; 13:25</a></div>
<hr class="FieldCardGrabHandle Header"/>
  <div class="CardDate CardNumber"> <a href="#">0 cards</a></div>
</div>
<label class="FieldCardSummary"><div class="FieldCardLabel">Summary</div>
<input type="text" value="You'll use this to find this card" class="FieldCardInput">
</label>
<div class="FieldCardEditable" contenteditable>This is a card body. Or card text. What does this look like? What does this feel like? How does this work? Does it need rich text? Will plaintext do?
&nbsp;
Is markdown a useful compromise?</div>
<div class="FieldCardFooter">
  <div></div>
  <div class="FieldCardButtons"><button class="FieldCardTextButton"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg> Attach</button></div>
</div></div>

Even without links, attachments, or cross-references, this feels more clunky. You could finesse the design, streamline it here and there, but if we're going to have the card always editable then this would mean a fairly high inherent 'clunkiness' baseline that you can't avoid.

I think it's clear that we'll need an edit mode. Can the edit mode be made nicer if we assume I can get autosaving to work nicely?

## Revisiting the "Edit Mode" and makig it nicer

Having separate "read/browse" and "edit" modes gives me a little bit more freedom when designing each version. I still think they need to be very similar, for usability's sake. This one's using [Scott O'Hara's switch component](https://scottaohara.github.io/a11y_styled_form_controls/src/checkbox--switch/) though since this is just an HTML mockup it doesn't do anything.

<script type="module">
  const selector = '[data-switch]';
  const els = document.querySelectorAll(selector);

console.log(els)
  for ( let i = 0; i < els.length; i++ ) {
    const dis = new ARIAswitch( els[i] );
  }
</script>
<div class="ModeCard" data-editing>
<div class="ModeCardHeader Handle">
  <div class="CardDate"> <a href="#">1 December 2021 &middot; 13:25</a></div>
<label class="check-switch">
  <span class="ModeCardToggleLabel">Edit</span> 
  <input type="checkbox" data-switch>
</label>
</div>
  <div class="ModeCardSidebar">
<hr class="ModeCardGrabHandle"/>
  </div>
<h3 class="ModeCardName">You'll use this to find this card</h3>
<div class="ModeCardBody">This is a card body. Or card text. What does this look like? What does this feel like? How does this work? Does it need rich text? Will <a href="#">plaintext</a> do?
&nbsp;
Is markdown a useful compromise?</div>
<div class="ModeCardFooter">
  <div class="CardDate CardNumber"> <a href="#">0 cards</a></div>
</div></div>

One issue that this card sketch doesn't highlight is that the card-and-thread model is supposed to offer similar affordances as many social media services, like Twitter or Facebook. Those services have both highly optimised posting flows (they want to make it really, really easy for you to post quickly) and are also familiar to many. But the creation of a full card with title _feels_ a bit off for a default in this context. You pretty much need to be able to create the simple kind of plain text cards that I sketched up above but without the anonymity issue that would prevent cards from being found or referred to.

This is why I prefer the summary label for the card's 'name', at least for the moment. It implies a potentially longer text than 'name'. ([Thanks for the suggestion, John!](https://twitter.com/John_Pettigrew/status/1466008916307894277)) So, I could support a slightly different style for cards that only have a summary and no text in the body.

<div class="ModeCard" data-editing>
<div class="ModeCardHeader Handle">
  <div class="CardDate"> <a href="#">1 December 2021 &middot; 13:25</a></div>
<label class="check-switch">
  <span class="ModeCardToggleLabel">Edit</span> 
  <input type="checkbox" data-switch>
</label>
</div>
  <div class="ModeCardSidebar">
<hr class="ModeCardGrabHandle"/>
  </div>
<div class="ModeCardBody">This is a card summary. As a summary it would work more like a tweet would and wouldn't support Markdown or rich text.</div>
<div class="ModeCardFooter">
  <div class="CardDate CardNumber"> <a href="#">0 cards</a></div>
</div></div>

With edit mode on:

<div class="ModeCard" data-editing>
<div class="ModeCardHeader Handle">
  <div class="CardDate"> <a href="#">1 December 2021 &middot; 13:25</a></div>
<label class="check-switch">
  <span class="ModeCardToggleLabel">Edit</span> 
  <input type="checkbox" data-switch checked>
</label>
</div>
  <div class="ModeCardSidebar">
<hr class="ModeCardGrabHandle"/>
  </div>
<label class="FieldCardSummary"><div class="FieldCardLabel">Summary</div>
<input type="text" value="You'll use this to find this card" class="FieldCardInput">
</label>
<label class="FieldCardSummary"><div class="FieldCardLabel">Details</div>
<textarea class="ModeCardEditable">This is a card body. Or card text. What does this look like? What does this feel like? How does this work? Does it need rich text? Will [plaintext](#) do?
&nbsp;
Is markdown a useful compromise?</textarea>
</label>
<div class="ModeCardFooter">
  <div class="CardDate CardNumber"> <a href="#">0 cards</a></div>
  <div class="FieldCardButtons"><button class="FieldCardTextButton"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg> Attach</button></div>
</div></div>

Edit mode would need to validate the summary on the fly, make sure it isn't empty and that it is unique. And it could lock the card in edit mode if you enter an invalid summary.

This is aesthetically a bit rough but it feels right as an initial conceptual model. But I need to see it with more 'stuff' to be sure. Some links and attachments.

<div class="ModeCard" data-editing>
<div class="ModeCardHeader Handle">
  <div class="CardDate"> <a href="#">1 December 2021 &middot; 13:25</a></div>
<label class="check-switch">
  <span class="ModeCardToggleLabel">Edit</span> 
  <input type="checkbox" data-switch>
</label>
</div>
  <div class="ModeCardSidebar" style="grid-row: 1 / 6">
<hr class="ModeCardGrabHandle"/>
  </div>
<h3 class="ModeCardName">You'll use this to find this card</h3>
<div class="ModeCardBody">This is a card body. Or card text. What does this look like? What does this feel like? How does this work? Does it need rich text? Will <a href="#">plaintext</a> do?
&nbsp;
Is markdown a useful compromise?</div>

<div class="ModeCardLinks">
<div class="ModeCardLink">
  <div class="LinkTitle"><a href="https://example.com/">This is an example link (example.org)</a></div>
  <div class="LinkDescription">With an example description of that link</div>
</div>
<div class="ModeCardLink Internal">
  <div class="LinkTitle"><a href="https://example.com/">This is an example cross-reference to another card</a></div>
  <div class="LinkDescription">With an example description of that card</div>
</div>
<div class="ModeCardLink">
  <div class="LinkTitle"><a href="https://example.com/">This is an example attachment (PDF)</a></div>
  <div class="LinkDescription">With an example description of that file</div>
</div>
</div>
<div class="ModeCardFooter">
  <div class="CardDate CardNumber"> <a href="#">0 cards</a></div>
</div></div>

Even though I haven't bothered to add the images to the link previews this feels like the right track. This doesn't work as the final design, of course. But it would work as an initial sketch that can inform initial testing. Specifically, I need to do some testing to see if the conceptual model of the app is something that prospective users can figure out, what terms and labels make sense for them, that sort of thing. There's nothing worse than testing a sketch or an idea for an UI and then figuring out afterwards that the basic design was never going to work for other reasons.

## This is not the final design

The final design would have to be a lot less rough around the edges but an actual design for implementation needs to answer quite a few questions that this sketch doesn't:

- Does it reuse the apps other, pre-existing affordances?
- How does drag and drop work, of the card and on the card? How do you indicate draggability? Does a grab handle work?
- Does it match the overall app's design and UI?
- How much does it lean on OS conventions? Web conventions?
- Does it use rich text, markdown, syntax highlighting?
- How do we animate behaviours and transitions?
- How does it work with keyboard controls?
- What does it sound like to a screen reader?
- How do you distinguish links, cross-references, and attachments? How are they alike? How do they behave differently?
- How are the summary-only cards different? Does having a different style for these cards work? Will it be confusing or break the user's mental model of what's happening?
- Does this all make sense and fit together for the intended audience?
- How should the card's summary reflect the current 'find' text?

And so many more. But this is a first step.

{% include 'mailingform.njk' %}
