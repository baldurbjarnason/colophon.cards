# Design Notes

The initial loops

## The thread

1. The thread of cards.
2. Type text in search box
3. The thread only shows cards that begin with the search text until there is one (to update) or none.
4. At any point in the search, the user can hit the button to create a card with that name or edit the top card and autocomplete the term to that card's name.

Thoughts:

* I am tempted to have the thread be an activity stream. Instead of just the cards you would also have the activities on those cards listed in the thread. Like "You updated 'design notes'" or "You archived 'design notes'". I would like to see if having an explicit records on your activities in a thread is a helpful mnemonic or not. AFAIK there hasn't been research on whether this is helpful in a single user context so I'm tempted to test it out. 

## The edit

The created card has a name, replies (only displayed when you open the card as a thread), attachments, and a body. Possibly later a drag handle.


Thoughts:

* Should the body be rich text, plain text or markdown (irrespective of what it's stored as)? Markdown is the de facto note standard but is honestly a mess of partially compatible implementations. It also forces a modality to editing: notes have two completely different modes that look and work in very different ways. Plain text is universal but incredibly limited. Rich text has the most potential but is more complicated and harder to pull off.

## Tags

Add tag support by assigning all tags mentioned in the body or name to the card. You can show all cards with that tag by entering it (with the preceding #) in the search box.

## Replies

Every card is also a thread. The replies link on the card is a link to the card's thread. The card thread UI is identical to the top thread UI. Replies are created in the same way with the same loop as in the top thread.

Thoughts

* I would like to avoid having a specific reply UI and instead keep the conceptual model the same all the way down.

## Workspaces?

Should the user able to have multiple top level threads, each a separate workspace. Or do the child cards of a solo top thread serve the exact same function?

## Pinning

The UI should support pinned notes that are persistently floated to the top. One idea is that on displays that are wide enough the pinboard should be a sidebar space and that pinned card don't have to just be pinned up to but that they could be arranged freely in the sidebar space.

## Bookmarks

Much like Twitter or Facebook, the URLs mentioned in the name or in the body are automatically added as attachments.

## Attachments

File attachments are added via an attach button.

Thought:

* I could implement a website archiving system that archives a bookmark URL if you add the URL via the attachment UI instead of directly as text?

## Cross-linking

If I go with markdown or plaintext `[[Note Name]]` would be used to automatically link to the note.

If I go with rich text I would probably try to implement it using a `+Name` mentioning system similar to Slack's @ mentioning system that autocompletes including the spaces.

Or, I could go with the original WikiWiki design and convert all camel-cased words to links to other notes?

Links to nonexistent notes let you create that note by clicking on them.

## Backlinks

Automatic backlinks are not a good idea. They create clutter, complexity and confusion. See [Backlinking Is Not Very Useful -- Often Even Harmful](https://zettelkasten.de/posts/backlinks-are-bad-links/). Intentional backlinks, however, are amazing. The ability to explicitly add a backlink from another note to the current note you're editing, preferably with custom link text for that context, is an extremely useful organisational tool.

How to design it, though, is a question, and it depends on the text format and link format.

## Sharing

Designing the sharing and collaboration mode should be a separate document. But the threads and cards UI should be _single user_. Nothing should happen in your threads or two your cards that isn't done by you. Sharing should be about data, attachments and sharing your threads (or subsets of your threads) with others as documents.