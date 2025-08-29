# WP Text Case Transformations
A barebones WordPress plugin that allows a user to manipulate the case (or capitalization) of the selected text.

Screenshot:

<img width="660" height="212" src="https://github.com/user-attachments/assets/af588ba2-9239-425b-b142-8f8e125f9ac1" />

Gif:

![20250829_164453919](https://github.com/user-attachments/assets/76da41cb-b195-4dfb-a71c-f214d849b49f)


---

⚠ Note: this is an experimental proof-of-concept
Therefore should not be used in production, or really anyone besides me.

---

# But why though?
Let's say you copy and paste a lot of text. Need I say more than that? Well, you might get tired of manually adjusting the case of words. I wanted to do some investigating as to how far I could get to a simple toolbar item that would format the case of selected text against some predetermined rules.

"Wait," you may say, "WordPress does this in the _Letter Case_ component in the _Typography panel_ of a block's _settings sidebar_." Why yes, it does, but:
- That applies a CSS `text-transform` directly to the **entire** block.
- Gif:
![20250829_162222553](https://github.com/user-attachments/assets/957dfb69-c3e3-460e-b746-c6f71f57f338)
- This applies to any child blocks (unless you go through the same sidebar to "undo" it for the child block(s)).
  - Ex: Imagine wanting to highlight the text in a table heading to make it all uppercase, but your _entire table_ gets uppercase'd.
- The fact that the underlying text can remain _nOnSenSicaL_ while it has a different _presentation_ seems problematic for accessibility reasons as well as other mundane things like copying/pasting surprises later, etc. 
- The three options included are uppercase, lowercase, and capitalize. Capitalize applies to the first letter of each word, regardless of whether it "should" be as many common words don't get capitalized in titles, like articles, prepositions, and conjunctions.

## So what I wanted to accomplish:
- Actually _modify_ the text so what you see in the editor is what gets outputted in the markup.
- Modify selected text only[^1]
- Provide more options than the thee described above
  - Uppercase
  - Lowercase
  - Capitalize (as above, every word gets capitalized)
  - Title Caps (All words get capitalized except for articles, prepositions, and conjunctions-- unless it happens to be the first word)

[^1]: _Yes, there be dragons._


# So what's the status?
- This repo serves as a working installable WordPress plugin to demo the functionality. Upload & activate it as per any other downloadable plugin.
  - At the time of this writing, I was working with WordPress v6.8.2 & Gutenberg v21.5.0
  - The plugin uses [@wordpress/scripts](https://github.com/WordPress/gutenberg/blob/8ea3b396c28a2100c7446665f60cb47424cf9352/packages/scripts/README.md) for compiling.
    - To build, run `npm install` and then `npm run build` to build once or `npm run start` to watch for changes.

Gif:

![20250829_163818218](https://github.com/user-attachments/assets/cc6411f6-1e3c-4dee-b0be-e904a08f01d5)

# What else?
## Some fun things to point out:
  - A small bit of attention to consistency, I created [`toTitleCaps`](https://github.com/sr4136/wp-text-case-transformations/blob/main/src/index.js#L7) as a string prototype so it could be used in the same way as `toUpperCase()` and `toLowerCase()`

## Plans to update:
- [ ] Modify [`titleCapsExceptions`](https://github.com/sr4136/wp-text-case-transformations/blob/main/src/string-prototypes.js#L1-L24) with a more complete list of articles, prepositions, and conjunctions.
- [ ] I would like to take some time to learn [WordPress Playground](https://wordpress.org/playground/) so I can launch a demo of this easily.

## Things to look into:
- [ ] As with the dragons above, WP/Gutenberg's methods of highlighting text to modify it can be tricky
  - [ ] This plugin in its current state removes other formatting from the block because the method of replacement does not take into account the markup, only the text.
  - [ ] Necessitates a deep dive into WP/Gutenberg's method of selecting text/markup and modifying it
- [ ] Modifying the text inside of a table block doens't work yet. Must inspect the different context and what methods are available when editing the content of a table cell.
- [ ] If I were to ever release this as a full plugin...
  - [ ] I'd define some WP hooks to control the available capitalization options
  - [ ] Possibly a WP-Admin settings page for controlling available capitalization options
    - [ ] I think all uppercase should be off by default and therefore enabled by 
- [ ] Expanded, more complete rulesets. Sure this small barebones utility does a lot of the quick work, but you still have to pay attention to details like proper nouns, jargon, etc.
  - [ ] How difficult/costly would it be to integrate solid ruleset for the standard writing style guides (just for **titles**) like APA, Chicago, MLA, etc. (Do those exist out there already in some repo or API?)
