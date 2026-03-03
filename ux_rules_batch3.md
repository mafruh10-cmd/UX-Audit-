# UX Rules — Batch 3 (Parts 11-17)

---
<!-- PART 11 — Forms (chapters 38-40) -->

## RULE: Ensure that labels are visible
**Chapter:** Forms
**✅ Correct:** Labels are placed outside and above each input field so they remain visible at all times.
**❌ Wrong:** Labels are used as placeholders inside inputs, disappearing when the user starts typing.
**Key fix:** Move labels above the input field instead of using them as placeholder text.
---

## RULE: Limit signing up to one page
**Chapter:** Forms
**✅ Correct:** The sign-up form asks only for essential fields (mobile number or email and password) on a single screen.
**❌ Wrong:** The sign-up form contains too many fields (email, full name, phone number, password) making it overwhelming.
**Key fix:** Reduce sign-up fields to the bare minimum needed to create an account.
---

## RULE: Keep it simple
**Chapter:** Forms
**✅ Correct:** The newsletter form asks only for an email address with a clear Subscribe button.
**❌ Wrong:** The form asks for email, how the user heard about the service, and phone number — unnecessary fields that create friction.
**Key fix:** Remove all fields that are not strictly required to complete the action.
---

## RULE: Display a progress tracker
**Chapter:** Forms
**✅ Correct:** A step indicator at the top shows which step the user is on within a multi-step form.
**❌ Wrong:** The multi-step form shows only the current step with no indication of total steps or progress.
**Key fix:** Add a visible progress tracker to multi-step forms so users know where they are.
---

## RULE: Single-name vs separate name fields
**Chapter:** Forms
**✅ Correct:** A single "Full name" field is used instead of separate first and last name fields.
**❌ Wrong:** Separate "First name" and "Last name" fields add unnecessary complexity.
**Key fix:** Combine first and last name into one "Full name" field to reduce form length.
---

## RULE: Maintain natural input hierarchy
**Chapter:** Forms
**✅ Correct:** Form fields are ordered logically (From, To, then date fields) matching the user's natural thought process.
**❌ Wrong:** Date fields appear before the destination fields, breaking the natural flow of the booking task.
**Key fix:** Order form fields to match the sequence a user naturally thinks through the task.
---

## RULE: Request payment details
**Chapter:** Forms
**✅ Correct:** The payment form includes card number, name on card, expiration date, and security code — all necessary fields.
**❌ Wrong:** The form is missing the expiration date field, making it impossible to complete payment.
**Key fix:** Always include all required payment fields: card number, name, expiration date, and security code.
---

## RULE: Validate payment details
**Chapter:** Forms
**✅ Correct:** Inline validation highlights only the specific invalid field (card number) with a targeted error message.
**❌ Wrong:** A generic error banner says "Your data is incorrect" without pointing to the problematic field.
**Key fix:** Show field-level inline validation errors directly next to the field that has the issue.
---

## RULE: Determine your progress tracker type
**Chapter:** Forms
**✅ Correct:** A step-based progress tracker with labeled steps (Personal Info, Contact, Payment, Review) clearly shows the form journey.
**❌ Wrong:** A simple progress bar is used with no step labels or indication of how many steps remain.
**Key fix:** Use a labeled step indicator rather than an unlabeled progress bar for multi-step forms.
---

## RULE: Show the action to save changes
**Chapter:** Forms
**✅ Correct:** A "Save changes" button is clearly visible at the bottom of the form so users know how to commit edits.
**❌ Wrong:** No save button is present, leaving users unsure whether their changes are auto-saved or how to confirm them.
**Key fix:** Always provide an explicit "Save changes" button on settings or edit forms.
---

## RULE: Switch to active state once a change is made
**Chapter:** Forms
**✅ Correct:** The "Save changes" button becomes active and styled prominently only after the user modifies a field.
**❌ Wrong:** The save button is active and styled even before the user has made any changes.
**Key fix:** Keep the save button disabled or de-emphasized until the user actually makes a change.
---

## RULE: Notify that changes have been saved
**Chapter:** Forms
**✅ Correct:** A "Changes saved" confirmation toast appears after the user saves, confirming the action was successful.
**❌ Wrong:** A greyed-out "Changes saved" text appears near the button but is easy to miss and feels unclear.
**Key fix:** Show a prominent confirmation message or toast after saving so users get clear feedback.
---

## RULE: Add two-step verification when changing sensitive information
**Chapter:** Forms
**✅ Correct:** After updating card details, a modal prompts the user to confirm via a verification code sent to their device.
**❌ Wrong:** Card details are saved immediately with no additional confirmation step required.
**Key fix:** Require a verification step (e.g., OTP) whenever users change sensitive information like payment details.
---

## RULE: Eliminate unnecessary tasks
**Chapter:** Forms
**✅ Correct:** The sign-up form offers social login options (Facebook, Twitter, Google) to reduce manual data entry.
**❌ Wrong:** Users must fill in full name, email, password, and repeat password with no faster alternatives offered.
**Key fix:** Offer social sign-up options or SSO to eliminate repetitive data entry tasks.
---

## RULE: Leverage visuals
**Chapter:** Forms
**✅ Correct:** The form is divided into labeled sections ("Personal Info," "Billing info") with clear visual grouping.
**❌ Wrong:** All fields (name, phone, credit card, expiry, security code) are listed without any grouping or visual separation.
**Key fix:** Group related fields under section headers to give the form visual structure.
---

## RULE: Add enough space between inputs
**Chapter:** Forms
**✅ Correct:** Generous vertical spacing between the username and password fields makes each input easy to read and tap.
**❌ Wrong:** The fields are packed together with minimal spacing, making the form feel cramped and hard to scan.
**Key fix:** Increase vertical spacing between form fields to improve readability and tap target separation.
---

## RULE: Use logical input grouping
**Chapter:** Forms
**✅ Correct:** Fields are organized under distinct section headers — "Personal Info" and "Contact Info" — matching their purpose.
**❌ Wrong:** All fields are placed under a single generic "Your info" header with no logical grouping.
**Key fix:** Group related fields under meaningful section labels to aid comprehension.
---

## RULE: Add enough space between elements
**Chapter:** Forms
**✅ Correct:** Adequate spacing between the form fields creates a clear visual hierarchy and prevents a cluttered feel.
**❌ Wrong:** Fields are densely stacked with insufficient spacing, making the form hard to navigate.
**Key fix:** Apply consistent vertical spacing between all form elements to reduce cognitive load.
---

## RULE: Use progress trackers to encourage users
**Chapter:** Forms
**✅ Correct:** A step-progress indicator at the top shows the user's current position (e.g., step 2 of 3), motivating completion.
**❌ Wrong:** The form shows the current section title with no progress tracker, leaving users uncertain how much remains.
**Key fix:** Add a progress tracker to multi-step forms to encourage users to complete all steps.
---

## RULE: Use a contextual primary action label
**Chapter:** Forms
**✅ Correct:** The submit button reads "Send Message" — a specific label that matches the context of a contact form.
**❌ Wrong:** The submit button uses a generic "Submit" label that gives no indication of what action will occur.
**Key fix:** Replace generic button labels like "Submit" with action-specific labels that match the form's purpose.
---

## RULE: Make the primary action button stand out
**Chapter:** Forms
**✅ Correct:** The "Sign Up" button is filled with a bright blue color, making it clearly the primary action.
**❌ Wrong:** The "Sign Up" button uses the same outline style as other elements, failing to stand out visually.
**Key fix:** Use a filled, high-contrast color for the primary action button to distinguish it from secondary elements.
---

## RULE: Remove unnecessary fields
**Chapter:** Forms
**✅ Correct:** The contact form uses a single "Full name" field instead of separate first and last name fields.
**❌ Wrong:** The form has separate "First name" and "Last name" fields, adding unnecessary steps.
**Key fix:** Combine or remove fields that are not strictly necessary to reduce form friction.
---

## RULE: Use visual markers to indicate an active input
**Chapter:** Forms
**✅ Correct:** The active input field has a highlighted border, making it immediately clear which field is currently selected.
**❌ Wrong:** There is no visible focus indicator — the user cannot tell which field is active.
**Key fix:** Apply a distinct border or highlight style to the focused input field.
---

## RULE: Indicate required and optional fields
**Chapter:** Forms
**✅ Correct:** Optional fields are explicitly labeled "(optional)" so users know which fields they can skip.
**❌ Wrong:** All fields are marked with asterisks but no fields are labeled optional, creating uncertainty.
**Key fix:** Label optional fields as "(optional)" rather than relying solely on asterisks for required fields.
---

## RULE: Use a reasonable number of steps
**Chapter:** Forms
**✅ Correct:** The onboarding flow is condensed into 4 focused steps (Welcome, Create Team, Billing Info, Invite Members).
**❌ Wrong:** The flow has 5+ steps including redundant screens that could be consolidated.
**Key fix:** Audit multi-step flows and merge or remove steps to keep the total count minimal.
---

## RULE: Break down complex tasks into simpler ones
**Chapter:** Forms
**✅ Correct:** A complex order form is split across multiple steps with a progress tracker (Personal Info, Billing, Payment, Review).
**❌ Wrong:** All order fields (name, phone, credit card, expiry, security code) appear on a single overwhelming screen.
**Key fix:** Split long forms into logical steps to reduce cognitive load and prevent user drop-off.
---

## RULE: Microcopy patterns for placeholders
**Chapter:** Forms
**✅ Correct:** Input fields use format hints as placeholders (e.g., phone field shows "(___) ___-____" mask).
**❌ Wrong:** Fields use instructional placeholder text like "Type your full name" that disappears on input, leaving no guidance.
**Key fix:** Use input masks or format examples as placeholders instead of generic instructional text.
---

## RULE: Why gamify
**Chapter:** Gamification
**✅ Correct:** Gamification is tied to a meaningful reward (bonus points for eco-friendly behavior), motivating the user with purpose.
**❌ Wrong:** A generic promotional banner ("Read how to use our App here") is shown instead of a gamified, engaging prompt.
**Key fix:** Use gamification to reward meaningful user actions rather than as generic promotional messaging.
---

## RULE: Gamification pitfalls
**Chapter:** Gamification
**✅ Correct:** After completing a lesson, the next action suggested is another lesson — keeping the user on track with their goals.
**❌ Wrong:** After completing a lesson, the user is prompted to subscribe to a newsletter — an irrelevant distraction.
**Key fix:** Ensure post-achievement prompts lead to the next relevant goal, not unrelated marketing actions.
---

## RULE: The need for autonomy
**Chapter:** Gamification
**✅ Correct:** The app rewards a user's eco-friendly transport choice with bonus points, acknowledging their autonomous decision.
**❌ Wrong:** The app shows a locked chest with "Come back tomorrow" — forcing delay rather than rewarding present behavior.
**Key fix:** Reward users immediately for positive actions rather than creating artificial time-based barriers.
---

## RULE: Challenges and quests
**Chapter:** Gamification
**✅ Correct:** Challenges let users set their own goals (e.g., 1 lesson a day) giving them a sense of ownership and control.
**❌ Wrong:** Challenges are shown as static illustrated screens with no interactive goal-setting or user choice.
**Key fix:** Make gamification challenges interactive by letting users choose their own targets or pace.
---

## RULE: Leaderboards
**Chapter:** Gamification
**✅ Correct:** The leaderboard shows the user's relative position with an encouraging contextual message ("You're close to a promotion!").
**❌ Wrong:** The leaderboard shows an "Outsiders" label for lower-ranked users, which feels discouraging and demotivating.
**Key fix:** Replace negative leaderboard labels with motivational messages that encourage improvement.
---

## RULE: Avoid visual noise
**Chapter:** Hero Section
**✅ Correct:** The hero section has clean typography with no background decorative elements competing for attention.
**❌ Wrong:** Decorative circular graphic elements behind the text create visual noise that competes with the headline.
**Key fix:** Remove decorative background elements that distract from the primary headline and CTA.
---

## RULE: Make titles work out of context
**Chapter:** Hero Section
**✅ Correct:** The hero headline "Manage your team's work and organize your life with Acme" communicates the value proposition clearly on its own.
**❌ Wrong:** The headline uses vague phrases like "Stay Organized, Be Creative" that are meaningless without surrounding context.
**Key fix:** Write hero headlines that communicate the product's core value even when read in isolation.
---

## RULE: Use the 5-second rule
**Chapter:** Hero Section
**✅ Correct:** The hero clearly states "STEPS. CALORIES. HEART RATE." and includes a specific CTA ("Create free account") within 5 seconds of scanning.
**❌ Wrong:** "Your DAILY HELPER" is too vague — users cannot immediately understand what the product does.
**Key fix:** Ensure users can grasp the product's core purpose within 5 seconds of viewing the hero section.
---

## RULE: Reduce idioms and colloquial expressions
**Chapter:** Hero Section
**✅ Correct:** The subheading uses plain language: "Tips to overcome burnout and regain your balance."
**❌ Wrong:** The subheading says "Learn how to stop and smell the roses" — an idiom that may confuse non-native speakers.
**Key fix:** Replace idioms and colloquial expressions with clear, literal language accessible to all users.
---

## RULE: Size contrast
**Chapter:** Hero Section
**✅ Correct:** "Travel" is displayed in large, bold text against the background image, creating strong visual hierarchy.
**❌ Wrong:** The title text is small and hard to read against the full-bleed hero image with no size contrast.
**Key fix:** Use significant size contrast between the headline and body text to establish clear visual hierarchy.
---

## RULE: Compositional balance
**Chapter:** Hero Section
**✅ Correct:** The headline occupies more vertical space and is bolder, creating a balanced composition with the dog photo.
**❌ Wrong:** The text is small and cramped against the image, resulting in an unbalanced, hard-to-read composition.
**Key fix:** Balance text and image proportions so the headline commands appropriate visual weight.
---

## RULE: Use visual hierarchy to establish the order of importance
**Chapter:** Hero Section
**✅ Correct:** "Manage time. But easier." is displayed in large, bold type with a clear CTA button below.
**❌ Wrong:** Body text and the headline are similar in size and weight, making it unclear what to read first.
**Key fix:** Use size, weight, and spacing to create a clear reading order from headline to subtext to CTA.
---

## RULE: Movement design principle
**Chapter:** Hero Section
**✅ Correct:** A subtle downward arrow provides a directional cue that guides the user to scroll and explore more content.
**❌ Wrong:** No visual cue exists to guide the user's eye or suggest that scrollable content exists below the fold.
**Key fix:** Add a directional visual element (arrow, animation) to guide users toward the next section.
---

## RULE: Utilize button hierarchy
**Chapter:** Hierarchy
**✅ Correct:** "Log In" uses a filled button and "Sign Up" uses a text/ghost style, clearly differentiating primary from secondary actions.
**❌ Wrong:** Both "Log In" and "Sign Up" use the same filled blue button style, making them appear equally important.
**Key fix:** Apply different button styles (filled vs. ghost/text) to distinguish primary from secondary actions.
---

## RULE: Make the Subscribe button obvious
**Chapter:** Hierarchy
**✅ Correct:** The subscribe button is prominently styled and positioned separately from body content, drawing immediate attention.
**❌ Wrong:** The subscribe button blends into the newsletter section with no visual emphasis to make it stand out.
**Key fix:** Style the subscribe CTA with high contrast and clear separation from surrounding content.
---

## RULE: Establish solid visual hierarchy
**Chapter:** Hierarchy
**✅ Correct:** The commenter's name, timestamp, and message are styled with clear size and weight differences for easy scanning.
**❌ Wrong:** Name, timestamp, and message text are nearly identical in size and weight, making comments hard to scan.
**Key fix:** Apply distinct typographic styles (size, weight, color) to different levels of content in a comment.
---

## RULE: Make first-level comments the main focus
**Chapter:** Hierarchy
**✅ Correct:** Top-level comments are visually prominent; the comment input field is clearly differentiated from nested replies.
**❌ Wrong:** Replies and top-level comments share the same visual weight, making the comment thread hard to parse.
**Key fix:** Give primary (top-level) comments greater visual prominence than replies or secondary actions.
---

## RULE: Prioritize content to guide users' attention
**Chapter:** Hierarchy
**✅ Correct:** Content flows left-to-right, top-to-bottom in a logical Z-pattern, guiding the user's eye naturally.
**❌ Wrong:** Content items are arranged in a scattered, non-sequential pattern that lacks a clear reading path.
**Key fix:** Arrange content in a clear directional flow (Z-pattern or F-pattern) to guide attention naturally.
---

## RULE: Place the checkout button after the order details
**Chapter:** Hierarchy
**✅ Correct:** The checkout button appears after the item list and total, following the natural reading and decision flow.
**❌ Wrong:** The checkout button appears at the top of the cart, before the user has reviewed their items and total.
**Key fix:** Position the checkout button after all order details so users confirm what they're buying before acting.
---

## RULE: Maintain hierarchy within the shopping cart
**Chapter:** Hierarchy
**✅ Correct:** Product name is large and bold, price is prominent, and quantity controls are smaller — forming a clear hierarchy.
**❌ Wrong:** Product details, price, and controls are the same visual weight, making the cart card hard to scan.
**Key fix:** Use typographic scale to establish clear hierarchy: product name > price > secondary actions.
---

## RULE: Ensure address hierarchy
**Chapter:** Hierarchy
**✅ Correct:** Country dropdown appears before the address street field, following the logical address entry sequence.
**❌ Wrong:** The Address field is shown before Country, breaking the expected hierarchical order of address entry.
**Key fix:** Order address fields from broad to specific: Country, then Address, then city/postal code.
---

## RULE: Simplify timestamps for clarity
**Chapter:** Hierarchy
**✅ Correct:** Notification timestamps use simple relative time (e.g., "5m", "4h") that is quick to scan.
**❌ Wrong:** Full timestamps like "6 minutes ago" and "4 hours ago" are verbose and slow to parse in a list.
**Key fix:** Use abbreviated relative timestamps (5m, 4h) in notification lists for faster scanning.
---

## RULE: Place Help & Feedback options at the bottom
**Chapter:** Hierarchy
**✅ Correct:** "Help Center" and "Send Feedback" appear above "Sign Out," placing most-used support items higher.
**❌ Wrong:** "Sign Out" appears first before Help and Feedback options, prioritizing a destructive action over support.
**Key fix:** Place destructive or exit actions (Sign Out) at the bottom, below help and support options.
---

## RULE: Maintain visual hierarchy
**Chapter:** Hierarchy
**✅ Correct:** The hero headline is large and bold with a clear CTA, creating a strong visual hierarchy on the page.
**❌ Wrong:** The headline and body text compete visually with the same weight, weakening the hierarchy.
**Key fix:** Ensure the primary message (headline) is significantly larger and bolder than secondary text.
---

## RULE: Negative space around elements helps establish the order of importance
**Chapter:** Hierarchy
**✅ Correct:** Generous whitespace around the headline and CTA isolates them, making them the clear focal point.
**❌ Wrong:** Text, contact details, and other elements are densely packed with insufficient breathing room.
**Key fix:** Use whitespace strategically to isolate and draw attention to the most important elements.
---

## RULE: Change scale to convey importance and create hierarchy
**Chapter:** Hierarchy
**✅ Correct:** The featured portfolio image is displayed much larger than secondary images, signaling its primary importance.
**❌ Wrong:** All portfolio images are displayed at the same small size, giving equal visual weight to everything.
**Key fix:** Use scale variation — make the most important item significantly larger than supporting items.
---

## RULE: Highlight the elements you want to prioritize
**Chapter:** Hierarchy
**✅ Correct:** The recommended "Optimal" pricing tier is highlighted with a distinct filled blue style to draw the eye.
**❌ Wrong:** All three pricing tiers use the same outline card style with no visual distinction between them.
**Key fix:** Use color fill or a badge to visually highlight the recommended or most important option.
---

## RULE: Use visual hierarchy to establish the order of importance
**Chapter:** Hierarchy
**✅ Correct:** A large, bold headline dominates the hero section with supporting body copy significantly smaller.
**❌ Wrong:** The headline and body text are similar in size, creating a flat hierarchy with no clear focal point.
**Key fix:** Use a dramatic size difference between headline and body text to establish reading order.
---

## RULE: Hold onto users' attention
**Chapter:** Hierarchy
**✅ Correct:** A bold announcement banner at the top draws attention to new content, keeping users engaged on the page.
**❌ Wrong:** The announcement text is small and unstyled, blending into the page without drawing attention.
**Key fix:** Use a prominent, styled announcement banner to surface important updates and retain user attention.
---

## RULE: Keep accessibility at the forefront
**Chapter:** Hierarchy
**✅ Correct:** The card uses a descriptive button label "Read Article" with sufficient contrast on a clearly styled button.
**❌ Wrong:** The button is labeled "More" with low contrast against the blue card background, failing accessibility standards.
**Key fix:** Use descriptive button labels and ensure sufficient color contrast for all interactive elements.
---

## RULE: Scale
**Chapter:** Hierarchy
**✅ Correct:** Type scale uses significant size jumps (68px, 42px, 26px, 16px) creating a clear visual hierarchy.
**❌ Wrong:** Type sizes are too similar (68px, 64px, 60px, 56px) resulting in a flat, undifferentiated hierarchy.
**Key fix:** Use a scale with meaningful size jumps between levels rather than incrementally similar sizes.
---

## RULE: Prioritize buttons
**Chapter:** Hierarchy
**✅ Correct:** The "Rename" button is filled and styled as primary; "Cancel" is an outline/ghost button.
**❌ Wrong:** Both "Cancel" and "Rename" buttons use the same filled yellow style, making them equally prominent.
**Key fix:** Style the primary action with a filled button and destructive/cancel actions with a ghost or text style.
---

## RULE: Maintain button hierarchy
**Chapter:** Hierarchy
**✅ Correct:** "Next Step" is a filled primary button; "Cancel" is a ghost/text button — clearly differentiating importance.
**❌ Wrong:** Both "Next Step" and "Cancel" use filled blue buttons of the same weight and style.
**Key fix:** Always differentiate primary actions (filled) from secondary or cancel actions (outlined or text).
---

## RULE: Maintain information hierarchy for better scanning
**Chapter:** Hierarchy
**✅ Correct:** The article card leads with a large, bold title followed by smaller metadata, making the title easy to scan first.
**❌ Wrong:** Author name, read time, and title are the same weight, making the card hard to scan quickly.
**Key fix:** Make the most important piece of information (title) clearly larger and bolder than supporting metadata.
---

## RULE: Differentiate primary and secondary actions
**Chapter:** Hierarchy
**✅ Correct:** The "Read" CTA is a filled button while bookmark and like icons are unstyled, clearly distinguishing the primary action.
**❌ Wrong:** Read, bookmark, and like icons are styled similarly — all appear as interactive but equally prominent.
**Key fix:** Style the primary CTA as a filled button and secondary actions as icons or ghost buttons.
---

## RULE: Maintain color hierarchy
**Chapter:** Hierarchy
**✅ Correct:** The "Learn more" button uses an accent color (orange) that stands out from the card's blue background.
**❌ Wrong:** The button color blends with the card's blue background, making it visually indistinguishable.
**Key fix:** Ensure the primary CTA button color contrasts clearly with its container background.
---

## RULE: Icons should aid in user navigation
**Chapter:** Hierarchy
**✅ Correct:** One prominent "Add to Cart" button with an icon replaces a row of generic unlabeled icons.
**❌ Wrong:** A row of generic icons (shopping cart, heart, bookmark, star) provides no clear navigation guidance.
**Key fix:** Replace unlabeled icon rows with a primary labeled CTA button and fewer, purposeful secondary icons.
---

## RULE: Visual hierarchy
**Chapter:** Hierarchy
**✅ Correct:** The chart's title "Practices" is large and bold, clearly dominating the legend and axis labels.
**❌ Wrong:** The chart title and legend text are similar in size, making the chart hard to interpret at a glance.
**Key fix:** Apply clear typographic hierarchy to data visualizations: title > labels > legend.
---

## RULE: Don't neglect information hierarchy
**Chapter:** Hierarchy
**✅ Correct:** The footer navigation uses clear column headers (OVERVIEW, RESOURCES, SOLUTIONS) with smaller sublinks below.
**❌ Wrong:** All footer links are the same size and weight with no grouping or hierarchy, creating a wall of text.
**Key fix:** Use distinct headers above grouped navigation links to create scannable footer hierarchy.
---

## RULE: Contrast design principle
**Chapter:** Hierarchy
**✅ Correct:** The dashboard uses contrast to make Geography and Gender charts the focal point, with secondary stats subordinated.
**❌ Wrong:** All dashboard widgets share the same visual weight, making it impossible to identify the primary metrics.
**Key fix:** Use contrast (size, color, weight) to make the most important dashboard data stand out.
---

## RULE: Emphasis design principle
**Chapter:** Hierarchy
**✅ Correct:** The "Add to cart" button uses an orange fill to create strong emphasis against the dark card background.
**❌ Wrong:** The "Add to cart" button uses an outline style with low contrast, failing to draw attention.
**Key fix:** Use a filled, high-contrast color for the primary CTA to apply visual emphasis.
---

## RULE: Proportion design principle
**Chapter:** Hierarchy
**✅ Correct:** The product card gives appropriate space to the image, name, price, and CTA in balanced proportions.
**❌ Wrong:** The button is oversized relative to the product image and details, throwing off the card's proportional balance.
**Key fix:** Size each element in proportion to its importance — the CTA should complement, not dominate, the card.
---

## RULE: Prioritize button colors by importance
**Chapter:** Hierarchy
**✅ Correct:** The "Follow" button uses a prominent yellow fill to clearly distinguish it as the primary action over "Message."
**❌ Wrong:** Both "Follow" and "Message" use the same visual weight, making neither clearly primary.
**Key fix:** Color-code buttons by priority: use a filled accent color for the primary action, muted styles for secondary.
---

## RULE: Establish button hierarchy through visual cues
**Chapter:** Hierarchy
**✅ Correct:** "View recipe" is a filled blue button (primary) and "Start cooking" is a text link (secondary), with clear hierarchy.
**❌ Wrong:** Both "View recipe" and "Start cooking" use the same filled yellow button style with equal visual weight.
**Key fix:** Use filled vs. text/outline button styles to communicate which action is primary and which is secondary.
---

## RULE: Create a solid HTML structure
**Chapter:** HTML Annotation
**✅ Correct:** The page uses semantic elements — header, nav, section, article, aside, footer — in their correct structural hierarchy.
**❌ Wrong:** The page uses generic section tags for everything, including navigation and footer, without semantic distinction.
**Key fix:** Use appropriate semantic HTML elements (header, nav, article, aside, footer) in their correct structural roles.
---

## RULE: Structure content using HTML
**Chapter:** HTML Annotation
**✅ Correct:** Reading order flows left-to-right, top-to-bottom (1→2→3→4) matching the logical DOM and reading sequence.
**❌ Wrong:** Content is placed in a Z-zigzag order (1→3→2→4) that does not match a logical reading or DOM sequence.
**Key fix:** Ensure the visual content order matches the logical HTML DOM reading order.
---

## RULE: Use the alt attribute
**Chapter:** HTML Annotation
**✅ Correct:** The image has a descriptive alt attribute: "The New York Tower and skyline at night."
**❌ Wrong:** The image uses an empty or null alt attribute (`alt=""`), providing no description for screen readers.
**Key fix:** Add a descriptive alt attribute to all meaningful images that conveys their content and context.
---

## RULE: Use the null attribute for decorative images
**Chapter:** HTML Annotation
**✅ Correct:** Decorative background images use `alt=""` so screen readers skip them without reading unnecessary content.
**❌ Wrong:** Decorative images use `alt="Decorative image"` — screen readers announce this redundant text to users.
**Key fix:** Set `alt=""` on purely decorative images so assistive technologies ignore them.
---

## RULE: Use the image's text as an alt attribute
**Chapter:** HTML Annotation
**✅ Correct:** The Dropbox logo image uses `alt="Dropbox logotype"` — describing the image content as seen visually.
**❌ Wrong:** The logo image uses the filename as the alt text (e.g., `alt="dropbox_logo.png"`) which is meaningless.
**Key fix:** Write alt text that describes what the image visually represents, not the filename.
---

## RULE: Avoid autoplay
**Chapter:** HTML Annotation
**✅ Correct:** The video element uses `autoplay="false"` ensuring media does not start playing without user interaction.
**❌ Wrong:** The video element uses `autoplay="true"` causing the video to start unexpectedly, disrupting the user experience.
**Key fix:** Set `autoplay="false"` on all video and audio elements to respect user control over media playback.
---

## RULE: Use descriptive alt attributes
**Chapter:** HTML Annotation
**✅ Correct:** The bar chart image uses a detailed alt: "The bar chart shows the number of app visitors in 2021 for each month."
**❌ Wrong:** The chart image uses `alt=""` — screen reader users receive no information about the chart's content.
**Key fix:** Write alt text for charts and graphs that describes the data or key insight conveyed.
---

## RULE: Use the h1 tag for the page title
**Chapter:** HTML Annotation
**✅ Correct:** The main page title uses an `<h1>` tag and secondary sections use `<h2>`, establishing correct heading hierarchy.
**❌ Wrong:** Both the main title and a secondary section title use `<h1>`, breaking the document outline.
**Key fix:** Use exactly one `<h1>` per page for the main title; use `<h2>`–`<h6>` for all subsequent sections.
---

## RULE: Organize headings by their rank
**Chapter:** HTML Annotation
**✅ Correct:** Page structure flows h1 → h2 → h3, with each level subordinate to the one above.
**❌ Wrong:** The page uses h2 as the page title and h1 for a subsection, reversing the correct heading rank order.
**Key fix:** Headings must follow descending rank order (h1 → h2 → h3) without skipping or reversing levels.
---

## RULE: Don't skip heading levels
**Chapter:** HTML Annotation
**✅ Correct:** Headings descend sequentially: h1 → h2 → h3 with no levels skipped.
**❌ Wrong:** The page jumps from h1 directly to h4, skipping h2 and h3, which breaks document accessibility.
**Key fix:** Never skip heading levels — always use the next level down sequentially.
---

## RULE: Associate error state with the input it corresponds to
**Chapter:** HTML Annotation
**✅ Correct:** The error message is connected to its input via `aria-describedby`, ensuring screen readers announce the error with the field.
**❌ Wrong:** The error message is visually near the field but has no programmatic association (`input type="text"` only).
**Key fix:** Use `aria-describedby` to link error messages to their corresponding input fields for screen reader accessibility.
---

## RULE: Use the href attribute for links
**Chapter:** HTML Annotation
**✅ Correct:** Links use proper `<a href="...">` elements so they are navigable by keyboard and screen readers.
**❌ Wrong:** Links use `<a onclick="window.open(...)">` without an href, breaking keyboard navigation and screen reader access.
**Key fix:** Always use a valid `href` attribute on anchor elements; never rely solely on JavaScript click handlers for navigation.
---

## RULE: Use the table element for tabular data
**Chapter:** HTML Annotation
**✅ Correct:** Event schedule data is marked up with `<table>` elements, making rows and columns programmatically meaningful.
**❌ Wrong:** The table data is placed in generic `<div>` elements, losing all semantic meaning for screen readers.
**Key fix:** Use `<table>` (with thead, tbody, tr, th, td) for all data that has a tabular structure.
---

## RULE: Use the caption element for the table title
**Chapter:** HTML Annotation
**✅ Correct:** The table includes a `<caption>Nutrition</caption>` element that programmatically associates the title with the table.
**❌ Wrong:** The table title "Nutrition" is a heading element above the table with no programmatic link to the table itself.
**Key fix:** Use `<caption>` inside the `<table>` element to associate the table title with its data.
---

## RULE: Use the th element for table headers
**Chapter:** HTML Annotation
**✅ Correct:** Column headers use `<th scope="col">` and row headers use `<th scope="row">`, providing correct table semantics.
**❌ Wrong:** All table cells use `<td>` including headers, providing no semantic distinction between headers and data.
**Key fix:** Use `<th>` with appropriate `scope` attributes for all row and column headers in a table.
---

## RULE: Use proportional cell width
**Chapter:** HTML Annotation
**✅ Correct:** Column widths are set proportionally (50%, 30%, 20%) to reflect the relative importance and content length of each column.
**❌ Wrong:** All columns are set to 300px, giving equal width regardless of content, causing awkward spacing.
**Key fix:** Use percentage-based column widths proportional to content importance rather than fixed equal widths.
---

## RULE: Unordered lists
**Chapter:** HTML Annotation
**✅ Correct:** A shopping list of non-sequential items is marked up as `<ul>` with `<li>` elements.
**❌ Wrong:** The list items are placed in generic `<p>` or `<div>` tags, losing semantic list meaning.
**Key fix:** Use `<ul><li>` markup for lists of items that have no inherent order or sequence.
---

## RULE: Ordered lists
**Chapter:** HTML Annotation
**✅ Correct:** Recipe steps are marked up as `<ol><li>` elements, conveying that the sequence matters.
**❌ Wrong:** Numbered steps are created with plain `<p>` tags, losing the semantic meaning of sequential order.
**Key fix:** Use `<ol><li>` markup for content where the order of items is meaningful or sequential.
---

## RULE: Description lists
**Chapter:** HTML Annotation
**✅ Correct:** A term and its definition are marked up as `<dl><dt><dd>`, providing the correct semantic relationship.
**❌ Wrong:** Term-definition pairs are marked up as bullet list items (`<ul><li>`), losing the definition relationship.
**Key fix:** Use `<dl>` (with `<dt>` for terms and `<dd>` for definitions) for term-definition or key-value pairs.
---

## RULE: Use alternative text for images
**Chapter:** HTML Annotation
**✅ Correct:** The image uses a detailed, meaningful alt attribute describing the specific photo content.
**❌ Wrong:** The image uses a generic or auto-generated URL/filename as the alt text, which is meaningless.
**Key fix:** Write alt text that describes the specific subject and context of the image, not its filename or URL.
---

## RULE: Use icons to increase clarity
**Chapter:** Icon Use
**✅ Correct:** A trash icon labeled "Delete" is used within the note card, making the destructive action immediately recognizable.
**❌ Wrong:** The "Delete" action is shown as a plain text link with no icon, making it less noticeable and harder to distinguish.
**Key fix:** Pair icons with labels for important actions to increase recognizability and reduce cognitive load.
---

## RULE: Use recognizable shopping cart icons
**Chapter:** Icon Use
**✅ Correct:** A standard shopping cart icon is used in the navigation, immediately communicating its cart function.
**❌ Wrong:** A generic bag/tote icon is used instead of a shopping cart, which may not be immediately recognized as the cart.
**Key fix:** Use the most universally recognized icon convention for common functions — use a cart icon for shopping carts.
---

## RULE: Use recognizable icons
**Chapter:** Icon Use
**✅ Correct:** A question mark icon is used for "Help Center," which is a universally recognized symbol for help.
**❌ Wrong:** A chat bubble icon is used for "Help Center" — less standard and potentially confused with messaging.
**Key fix:** Choose the most universally recognized icon for each function to minimize learning curve.
---

## RULE: Choose icons properly
**Chapter:** Icon Use
**✅ Correct:** The wishlist/save icon uses a standard heart outline that matches the expected convention for saving items.
**❌ Wrong:** An ambiguous icon is used for a wishlist action that users may not associate with saving or favoriting.
**Key fix:** Choose icon conventions that match established platform or domain expectations for each action.
---

## RULE: Similarity
**Chapter:** Icon Use
**✅ Correct:** A toolbar contains only star rating icons, all sharing the same size, style, and visual family.
**❌ Wrong:** A toolbar mixes icons of different styles (toggle, lock, magnifier, wallet, star) that don't belong to the same family.
**Key fix:** Use icons from the same visual family and style within a single UI component or toolbar.
---

## RULE: Applying positive space to elements
**Chapter:** Icon Use
**✅ Correct:** The heart icon on a plain white background uses minimal container space, letting the icon breathe naturally.
**❌ Wrong:** The heart icon is placed inside a large, heavy red rounded-square container, adding unnecessary visual weight.
**Key fix:** Use minimal or no icon containers when the icon is already visually clear on its background.
---

## RULE: Applying negative space to elements
**Chapter:** Icon Use
**✅ Correct:** The heart icon is placed in a contained dark background, using negative space to create a polished icon badge.
**❌ Wrong:** The heart is displayed as a flat black icon with no container, blending into the page without definition.
**Key fix:** Use a contained background (icon badge) to give isolated icons visual definition and tap target clarity.
---

## RULE: Center labels and icons inside a button
**Chapter:** Icon Use
**✅ Correct:** The download icon and "Download" label are perfectly centered and vertically aligned within the button.
**❌ Wrong:** The icon and label are misaligned within the button — the icon sits too low or off-center relative to the text.
**Key fix:** Always vertically center and horizontally align icons and their labels within buttons.
---

## RULE: Use icons for visual guidance
**Chapter:** Icon Use
**✅ Correct:** A CVV diagram icon appears next to the security code field, visually guiding the user on where to find it.
**❌ Wrong:** The security code field has no visual guidance — users must know where to find their CVV without help.
**Key fix:** Add a diagram or hint icon next to complex or unfamiliar fields to provide visual guidance.
---

## RULE: Place icons before labels
**Chapter:** Icon Use
**✅ Correct:** Menu items show the icon to the left of the label (icon → text), matching natural left-to-right reading order.
**❌ Wrong:** Undo and Redo labels appear before their icons (text → icon), reversing the expected visual order.
**Key fix:** Always place icons to the left of their labels to match left-to-right reading direction.
---

## RULE: Use familiar icons to indicate menu selections
**Chapter:** Icon Use
**✅ Correct:** Active menu items (Show Sidebar, Show Inspector) are indicated with a standard checkmark icon.
**❌ Wrong:** Active menu items use a gear/settings icon instead of a checkmark, which does not conventionally indicate a selection state.
**Key fix:** Use a checkmark icon to indicate active/selected state in menus — it is the established convention.
---

## RULE: Use consistent icons for the same purpose
**Chapter:** Icon Use
**✅ Correct:** The same cart icon style is used consistently in both the "Add to Cart" button and the bottom navigation tab.
**❌ Wrong:** The "Add to Cart" button uses one cart icon style while the navigation tab uses a different cart icon design.
**Key fix:** Use the same icon style and design for the same function across all instances in an interface.
---

## RULE: Accompany icons with labels
**Chapter:** Icon Use
**✅ Correct:** Navigation bar icons are accompanied by text labels (Home, Games, League, Profile) below each icon.
**❌ Wrong:** Navigation icons appear without any text labels, forcing users to guess each icon's meaning.
**Key fix:** Always pair navigation icons with text labels to eliminate ambiguity and aid recognition.
---

## RULE: Maintain icon consistency
**Chapter:** Icon Use
**✅ Correct:** Bookmark, plus, and star icons all use the same stroke weight, size, and color family.
**❌ Wrong:** The icon set mixes a flat bookmark, a filled plus, and an outlined star — inconsistent styles within one set.
**Key fix:** Use icons from the same family with consistent stroke weight and size throughout the interface.
---

## RULE: Stick to simple icons
**Chapter:** Icon Use
**✅ Correct:** Navigation icons are simple, clean outlines that are immediately recognizable at small sizes.
**❌ Wrong:** Icons are overly detailed or complex, making them hard to read at typical navigation icon sizes.
**Key fix:** Use simple, clean icon designs that remain clear and legible at small display sizes.
---

## RULE: Place icons in consistent containers
**Chapter:** Icon Use
**✅ Correct:** All setting list icons (eye, lock, bell) use the same rounded square container shape and color.
**❌ Wrong:** Each icon uses a different container shape — some circles, some squares — creating visual inconsistency.
**Key fix:** Use a consistent container shape, size, and color for all icons within the same list or component.
---

## RULE: Ensure icons are easy to tap and click
**Chapter:** Icon Use
**✅ Correct:** The icon has a sufficiently large tap target area around it, meeting minimum touch target guidelines.
**❌ Wrong:** The icon's tappable area is the exact size of the icon itself (too small), making it difficult to tap accurately.
**Key fix:** Ensure icon tap targets are at least 44x44px, even if the visual icon is smaller.
---

## RULE: Ensure your icons scale correctly
**Chapter:** Icon Use
**✅ Correct:** Icons scale proportionally and maintain visual clarity and detail at both small and large sizes.
**❌ Wrong:** Icons become distorted or lose important details when scaled up, breaking visual consistency.
**Key fix:** Use scalable vector icons and test them at all expected sizes to ensure they remain legible.
---

## RULE: Balance out icons visually
**Chapter:** Icon Use
**✅ Correct:** Inbox, Starred, Sent, and Drafts icons all appear visually balanced in weight and optical size.
**❌ Wrong:** Icons in the same list have inconsistent visual weights — some appear bolder or heavier than others.
**Key fix:** Optically balance icons in the same set so no single icon appears heavier or larger than the others.
---

## RULE: Align icons by their horizontal centers
**Chapter:** Icon Use
**✅ Correct:** Phone, email, and location icons are aligned by their visual centers, creating a clean vertical alignment.
**❌ Wrong:** Icons are aligned to their bounding boxes rather than visual centers, resulting in uneven vertical alignment.
**Key fix:** Align icons by their optical/visual center rather than their bounding box edges.
---

## RULE: Microcopy patterns for tooltips
**Chapter:** Icon Use
**✅ Correct:** The tooltip for the audio clip icon is concise and appears close to the icon it describes.
**❌ Wrong:** The tooltip text is long and appears far from the icon, making it hard to associate label with element.
**Key fix:** Keep tooltip text concise and position it immediately adjacent to the icon it labels.
---

## RULE: Use relevant illustrations
**Chapter:** Using Illustrations
**✅ Correct:** An empty drafts state uses a relevant mailbox illustration that visually reinforces the "No saved drafts" message.
**❌ Wrong:** An empty state uses a generic decorative plant illustration that has no connection to the drafts concept.
**Key fix:** Use illustrations that directly relate to the feature or empty state context, not generic decorative visuals.
---

## RULE: Avoid too much clutter on the dashboard
**Chapter:** Using Illustrations
**✅ Correct:** Dashboard uses simple line/icon illustrations alongside metric cards — lightweight and uncluttered.
**❌ Wrong:** Large, colorful character illustrations are placed inside small metric cards, competing with the data.
**Key fix:** Use small, simple icons or inline illustrations on dashboards; reserve detailed illustrations for empty states or onboarding.
---

## RULE: Illustrate the difference
**Chapter:** Using Illustrations
**✅ Correct:** Each pricing tier uses a distinct character illustration that visually reinforces the tier's identity (solo vs. team).
**❌ Wrong:** All pricing tiers use the same generic icon, failing to visually distinguish between plan types.
**Key fix:** Use distinct, purposeful illustrations for each pricing tier to reinforce the differences between them.
---

## RULE: Add graphics and videos for the reference
**Chapter:** Using Illustrations
**✅ Correct:** "How The App Works" steps include a thumbnail graphic/video reference to make each step visually concrete.
**❌ Wrong:** The instructional steps list text only with no visuals, making abstract processes harder to understand.
**Key fix:** Add graphics or video thumbnails alongside instructional steps to make them easier to follow.
---

## RULE: Subtlety with texture
**Chapter:** Using Illustrations
**✅ Correct:** A subtle pattern texture is applied to the illustration background, adding depth without competing with the content.
**❌ Wrong:** A flat, plain white background is used behind the illustration, making it feel disconnected from the page.
**Key fix:** Use subtle texture or pattern in illustration backgrounds to add depth while keeping the illustration the focus.
---

## RULE: Add asymmetry to make your designs visually interesting
**Chapter:** Using Illustrations
**✅ Correct:** The 3D elements are arranged asymmetrically around the "CHAOS RULES" text, creating visual dynamism.
**❌ Wrong:** Elements are symmetrically balanced on both sides of the text, resulting in a static, predictable composition.
**Key fix:** Introduce asymmetry in illustration layouts to create visual tension and keep compositions engaging.
---

## RULE: Use images to support text
**Chapter:** Image Use
**✅ Correct:** A relevant image placed alongside the "What Is Dyslexia?" article illustrates the concept being discussed.
**❌ Wrong:** The article contains only text with no supporting visuals, making the content harder to engage with.
**Key fix:** Add contextually relevant images alongside text content to support comprehension and visual interest.
---

## RULE: Use images to support the meaning
**Chapter:** Image Use
**✅ Correct:** Image search results for "Design" include visual thumbnails that immediately reinforce each result's content.
**❌ Wrong:** Search results are shown as text-only links with no images, failing to visually support the meaning of each result.
**Key fix:** Use supporting images in content listings to help users quickly identify and evaluate results.
---

## RULE: Stick to the recommended color contrast ratio
**Chapter:** Image Use
**✅ Correct:** White text is displayed with a dark overlay on the image, meeting WCAG AA contrast requirements.
**❌ Wrong:** White text is placed directly on a medium-tone image with insufficient contrast, making it hard to read.
**Key fix:** Apply a dark overlay or text shadow to ensure text on images meets minimum contrast ratio requirements.
---

## RULE: Use contextual images
**Chapter:** Image Use
**✅ Correct:** The hero image shows the actual destination (Switzerland landscape) that directly matches the travel offer.
**❌ Wrong:** A generic scenic image is used that could apply to any destination, lacking specificity and context.
**Key fix:** Use images that directly represent the specific subject or offer, not generic stock visuals.
---

## RULE: Use accurate and visible thumbnail images
**Chapter:** Image Use
**✅ Correct:** The product thumbnail shows the sneaker in the selected color variant (orange), accurately representing the selection.
**❌ Wrong:** The thumbnail shows a generic default view of the sneaker that does not reflect the selected color variant.
**Key fix:** Update product thumbnails dynamically to reflect the currently selected variant or color option.
---

## RULE: Choosing caption typefaces
**Chapter:** Image Use
**✅ Correct:** Captions use a lighter weight or italic style that is clearly distinct from body text, signaling supplementary content.
**❌ Wrong:** Caption text uses the same font weight and size as body text, making it indistinguishable from the main content.
**Key fix:** Style captions with a lighter weight, smaller size, or italic variant to visually differentiate them from body text.
---

## RULE: Caption placement
**Chapter:** Image Use
**✅ Correct:** The caption is placed directly below the image it describes, clearly associated with its visual.
**❌ Wrong:** The caption is placed beside or overlapping the image content area, making the association unclear.
**Key fix:** Always place image captions immediately below (or directly adjacent to) the image they describe.
---

## RULE: Caption case
**Chapter:** Image Use
**✅ Correct:** The caption uses sentence case: "An orange motor scooter parked near Villa Helena Heritage Guest House."
**❌ Wrong:** The caption uses all-caps: "AN ORANGE MOTOR SCOOTER PARKED NEAR VILLA HELENA HERITAGE GUEST HOUSE" which is harder to read.
**Key fix:** Use sentence case for image captions — all-caps reduces readability and should be avoided for long text.
---

## RULE: Image captions
**Chapter:** Image Use
**✅ Correct:** The caption credits both the image description and the photographer ("by Adam Glos") in a styled caption below the image.
**❌ Wrong:** Only a plain italic caption is shown with no attribution, losing important credit and context information.
**Key fix:** Include both a descriptive caption and photographer/source credit for editorial and stock images.
---

## RULE: Use consistent image size
**Chapter:** Image Use
**✅ Correct:** Both food item cards use identically sized product images, creating a uniform, professional-looking grid.
**❌ Wrong:** Product card images vary in size — one is larger than the other — creating visual inconsistency.
**Key fix:** Enforce consistent image dimensions across all cards in a grid or list to maintain visual uniformity.
---

## RULE: Use left alignment for thumbnails
**Chapter:** Image Use
**✅ Correct:** Course thumbnails are left-aligned with text to the right, making the list scannable and consistent.
**❌ Wrong:** Thumbnails are right-aligned with text to the left, going against natural reading direction and common convention.
**Key fix:** Align thumbnails to the left of accompanying text for natural left-to-right scanning in list views.
---

## RULE: Imagery
**Chapter:** Image Use
**✅ Correct:** The product image shows the full shoe in proper context on a clean background, accurately representing the item.
**❌ Wrong:** The product image is cropped awkwardly, showing only part of the shoe, making it hard to evaluate the product.
**Key fix:** Use full, properly framed product images that show the item clearly without awkward cropping.
---

## RULE: Always keep labels outside of the input
**Chapter:** Input Fields
**✅ Correct:** Labels are positioned above each input field, remaining visible even after the user types into the field.
**❌ Wrong:** Labels are used as placeholder text inside the input, disappearing when the user starts typing.
**Key fix:** Always place form labels above (or beside) inputs — never use them solely as placeholder text.
---

## RULE: Use autocomplete for common information
**Chapter:** Input Fields
**✅ Correct:** The email field offers an autocomplete suggestion from saved credentials, speeding up the login process.
**❌ Wrong:** No autocomplete is offered — the user must manually type their email and password every time.
**Key fix:** Enable autocomplete on common fields (email, password, name) to reduce data entry friction.
---

## RULE: Use multiple cues for error states
**Chapter:** Input Fields
**✅ Correct:** The invalid card field uses a red border, an error icon, and a text error message — three distinct cues.
**❌ Wrong:** Only a red border is used to indicate the error with no icon or explanatory text.
**Key fix:** Use at least two error indicators (color + icon + message) so errors are not missed by any user.
---

## RULE: Allow users to reveal the password
**Chapter:** Input Fields
**✅ Correct:** A show/hide toggle eye icon is provided in the password field so users can verify what they typed.
**❌ Wrong:** No password reveal option is available — users cannot verify their password input before submitting.
**Key fix:** Always add a show/hide toggle to password fields to help users catch typos.
---

## RULE: Prevent user errors
**Chapter:** Input Fields
**✅ Correct:** Real-time password strength indicators (min characters, number, uppercase) appear as the user types, preventing errors.
**❌ Wrong:** No password requirements are shown until after the user submits, forcing them to fix errors retroactively.
**Key fix:** Show password requirements inline as the user types so they can meet criteria before submitting.
---

## RULE: Write clear error messages
**Chapter:** Input Fields
**✅ Correct:** The postal code error says "Please enter a valid postal code in the format: 12345" — specific and actionable.
**❌ Wrong:** The error message says "Invalid input. Try again." — generic and unhelpful.
**Key fix:** Write error messages that specify the exact format or value expected, not just that the input is wrong.
---

## RULE: Provide inline validation
**Chapter:** Input Fields
**✅ Correct:** The card number field shows validation inline as the user types: "Card number must begin with digit 3, 4, 5 or 6."
**❌ Wrong:** Validation only occurs after the user clicks Pay — errors are not surfaced until form submission.
**Key fix:** Validate fields inline as the user types or on blur rather than waiting for form submission.
---

## RULE: Enable autofill
**Chapter:** Input Fields
**✅ Correct:** The OTP field prompts the OS autofill from Messages, allowing the code to be filled with one tap.
**❌ Wrong:** The OTP field has no autofill support — users must manually switch to Messages, memorize the code, and type it.
**Key fix:** Use appropriate `autocomplete` attributes and input types to enable OS-level autofill for OTP and other fields.
---

## RULE: Simplify card number input
**Chapter:** Input Fields
**✅ Correct:** As the user types, the card number is auto-formatted with spaces (1234 XXXX XXXX XXXX) and the card brand icon appears.
**❌ Wrong:** The card number field accepts raw unformatted input with no grouping or brand detection.
**Key fix:** Auto-format card numbers into groups of 4 and detect the card brand as the user types.
---

## RULE: Reset the password
**Chapter:** Input Fields
**✅ Correct:** The reset password form shows only the new password field with requirements displayed, eliminating the old password field for simplicity.
**❌ Wrong:** The reset form shows both "Old password" and "New password" fields — asking for old password on a reset flow is redundant.
**Key fix:** On password reset flows, ask only for the new password (with requirements), not the old one.
---

## RULE: Provide input masks to avoid errors
**Chapter:** Input Fields
**✅ Correct:** The phone field shows a formatted mask `(___) ___-____` and the date field shows `DD/MM/YYYY` to guide entry.
**❌ Wrong:** Fields are blank with no format hints, leaving users uncertain what format to use.
**Key fix:** Use input masks to show the expected format structure within the field before the user types.
---

## RULE: Signal error after loss of focus
**Chapter:** Input Fields
**✅ Correct:** The email error ("Double-check the spelling and try again") appears after the user leaves the field.
**❌ Wrong:** No error is shown until form submission — the user cannot correct the typo until after attempting to submit.
**Key fix:** Validate and show field errors on blur (when the user leaves the field), not only on form submission.
---

## RULE: Meaningful error messages
**Chapter:** Input Fields
**✅ Correct:** The error message says "Sorry, we couldn't find the account registered with this email. Please try again." — specific and helpful.
**❌ Wrong:** The error message says "An error occurred" — completely generic and provides no actionable guidance.
**Key fix:** Write error messages that identify the specific problem and tell the user exactly what to do next.
---

## RULE: Adjust state color contrast to meet AA-level standards
**Chapter:** Input Fields
**✅ Correct:** The focused input field has a bright, high-contrast blue border that meets WCAG AA color contrast standards.
**❌ Wrong:** The focused state uses a muted grey border that does not provide sufficient contrast against the dark form background.
**Key fix:** Ensure input focus states use colors that meet WCAG AA contrast standards (4.5:1 for text, 3:1 for UI components).
---

## RULE: Set clear password requirements
**Chapter:** Input Fields
**✅ Correct:** Password requirements are concise (3 bullet points: uppercase, number, 6+ characters) and shown upfront.
**❌ Wrong:** Six lengthy, verbose requirements are listed making users feel overwhelmed before they even start typing.
**Key fix:** Keep password requirements to the essential minimum and present them in short, scannable bullet points.
---

## RULE: Apply proper input styling
**Chapter:** Input Fields
**✅ Correct:** Filled-in fields show a checkmark validation icon, clearly indicating valid input without requiring form submission.
**❌ Wrong:** All fields look identical regardless of whether they contain valid data — no visual feedback is given.
**Key fix:** Apply real-time visual validation indicators (checkmarks for valid, error icons for invalid) to input fields.
---

## RULE: Separate dropdowns for day, month, and year
**Chapter:** Input Fields
**✅ Correct:** Date of birth is split into three separate dropdowns (DD, MM, YYYY) for precise and accessible selection.
**❌ Wrong:** A single date picker input (`DD/MM/YYYY`) with a calendar icon is used, which can be awkward for birth dates.
**Key fix:** Use separate day, month, and year selectors for date of birth inputs rather than a combined date picker.
---

## RULE: Provide enough input padding for scannability
**Chapter:** Input Fields
**✅ Correct:** The input field has generous internal padding, making the text easy to read and the field easy to tap.
**❌ Wrong:** The input field has minimal padding — the placeholder text is cramped against the field border.
**Key fix:** Apply sufficient internal padding (at least 12–16px) to input fields for comfortable reading and tapping.
---

## RULE: Avoid clutter and add enough spacing between elements
**Chapter:** Input Fields
**✅ Correct:** Ample spacing below the date input and its helper text ("This will not be displayed to others") makes the form breathe.
**❌ Wrong:** The input, icon, and helper text are crammed together with no spacing, creating visual clutter.
**Key fix:** Add sufficient spacing between the input field, its icons, and helper text to reduce visual clutter.
---

## RULE: Use standard input styling for faster recognition
**Chapter:** Input Fields
**✅ Correct:** Input fields use standard white/light grey backgrounds with a simple border — immediately recognizable as text inputs.
**❌ Wrong:** Input fields use a bright yellow background that is visually unusual and may confuse users about the field's state.
**Key fix:** Use conventional input styling (neutral background, simple border) so fields are instantly recognizable.
---

## RULE: Provide helpful labels
**Chapter:** Input Fields
**✅ Correct:** The phone number field is labeled "Phone number" — a clear, standard label users immediately understand.
**❌ Wrong:** The field is labeled "Enter ya digits" — colloquial language that may confuse or alienate users.
**Key fix:** Use clear, standard field labels that are universally understood rather than informal or playful language.
---

## RULE: Ensure labels are easier to read
**Chapter:** Input Fields
**✅ Correct:** The field label "Username" uses a dark, high-contrast color against the white background, ensuring readability.
**❌ Wrong:** The label "Username" is in a light grey that has insufficient contrast against the white background.
**Key fix:** Ensure field labels use sufficient color contrast to be readable for all users.
---

## RULE: Select a label case that's easier to read
**Chapter:** Input Fields
**✅ Correct:** The label "Social Security Number" uses title case which is easier to read than all-caps.
**❌ Wrong:** The label "SOCIAL SECURITY NUMBER" is in all-caps, which significantly reduces readability.
**Key fix:** Use sentence case or title case for input labels — avoid all-caps for full label text.
---

## RULE: Keep the input text legible
**Chapter:** Input Fields
**✅ Correct:** Input text uses a dark, high-contrast color on a white background, maintaining clear legibility.
**❌ Wrong:** Input text is styled with low contrast (white text on blue background), making typed content hard to read.
**Key fix:** Ensure input text color provides sufficient contrast against the field's background color.
---

## RULE: Provide concise but meaningful helper text
**Chapter:** Input Fields
**✅ Correct:** The Order ID helper text reads "Enter the 6-digit number from your invoice" — concise and actionable.
**❌ Wrong:** The helper text is a long, multi-sentence paragraph that buries the key information.
**Key fix:** Keep helper text to one short sentence that directly tells the user what to enter or where to find it.
---

## RULE: Provide informative placeholders
**Chapter:** Input Fields
**✅ Correct:** The email field placeholder shows a real format example: "e.g. game@example.com."
**❌ Wrong:** The placeholder just repeats the field label: "Email" — providing no additional guidance.
**Key fix:** Use format examples (e.g., name@example.com) as placeholder text, not just repetitions of the field label.
---

## RULE: Don't truncate error messages
**Chapter:** Input Fields
**✅ Correct:** The error message is fully displayed: "Please enter your email address in the format: yourname@example.com."
**❌ Wrong:** The error message is truncated with "..." — the user cannot read the complete instructions.
**Key fix:** Never truncate error messages — ensure error text is fully visible without overflow or truncation.
---

## RULE: Place error messages below the input
**Chapter:** Input Fields
**✅ Correct:** The error text appears immediately below the input field it relates to, following natural reading order.
**❌ Wrong:** The error text appears above the input field, breaking the expected position relative to the field.
**Key fix:** Always place inline error messages directly below the field they relate to for intuitive reading flow.
---

## RULE: Prevent errors with phone input masks
**Chapter:** Input Fields
**✅ Correct:** The phone field shows a country code prefix and formatted mask `(+91) ___-___-____` to guide correct entry.
**❌ Wrong:** The phone field shows only a country flag with no format mask, leaving users unsure of the expected format.
**Key fix:** Add phone input masks that include country code and number formatting to prevent format errors.
---

## RULE: Prevent wrong formats with date masks
**Chapter:** Input Fields
**✅ Correct:** The date field shows the placeholder "DD/MM/YYYY" so users know the exact format required.
**❌ Wrong:** The date picker shows only a calendar icon with no format hint, leaving users uncertain about the expected input format.
**Key fix:** Always display the date format (DD/MM/YYYY) as a placeholder mask in date input fields.
---

## RULE: Add a currency label to remove confusion
**Chapter:** Input Fields
**✅ Correct:** A "$" currency symbol is placed inside the amount field as a prefix, making the currency immediately clear.
**❌ Wrong:** The amount field has no currency indicator — users cannot tell what currency they are entering.
**Key fix:** Always include a currency prefix ($ € £) inside or immediately adjacent to monetary input fields.
---

## RULE: Prevent typos with credit card input masks
**Chapter:** Input Fields
**✅ Correct:** The card number field auto-formats to "1234 |XXXX XXXX XXXX" with spaces, making the number easy to verify.
**❌ Wrong:** The card number field accepts plain unformatted input ("1234|") with no grouping, making typos hard to spot.
**Key fix:** Auto-format credit card input into groups of 4 digits separated by spaces to prevent entry errors.
---

## RULE: Provide helpful error messages
**Chapter:** Input Fields
**✅ Correct:** The password error message is specific: "Wrong password. You have 2 more attempts."
**❌ Wrong:** The error icon appears with no text message — users don't know what went wrong or what to do.
**Key fix:** Always display a text error message alongside error icons — never rely on icons alone to communicate errors.
---

## RULE: Put labels above inputs to enhance scannability
**Chapter:** Input Fields
**✅ Correct:** Labels are positioned above each input field, maintaining visibility and matching the standard label placement pattern.
**❌ Wrong:** Labels appear inside the field (as placeholder text) and some are placed below or away from their inputs.
**Key fix:** Place all labels consistently above their corresponding input fields for maximum scannability.
---

## RULE: Maintain a natural reading flow
**Chapter:** Input Fields
**✅ Correct:** Fields are arranged in a single-column vertical layout (Full name, Email, Date of birth, Phone number) for natural reading.
**❌ Wrong:** Fields are arranged in a multi-column grid (Full name + Email on same row, Date of birth + Phone on same row), disrupting reading flow.
**Key fix:** Use a single-column layout for forms to maintain a natural top-to-bottom reading and completion flow.
---

## RULE: Foresee users' questions and provide helper text
**Chapter:** Input Fields
**✅ Correct:** The phone number field includes helper text "We need it to contact you about the order delivery" explaining why it's needed.
**❌ Wrong:** The phone number field has only a help icon with no visible helper text — users must click to find the explanation.
**Key fix:** Display helper text inline beneath sensitive or unfamiliar fields rather than hiding it behind a tooltip.
---

## RULE: Inputs should be easy to hit
**Chapter:** Input Fields
**✅ Correct:** Input fields have sufficient height and width, providing a large, easy-to-tap target on mobile.
**❌ Wrong:** Input fields are narrow and short, providing a small tap target that is difficult to activate on touch screens.
**Key fix:** Ensure input fields meet minimum touch target size (44px height) for comfortable mobile interaction.
---

## RULE: Use placeholders cautiously
**Chapter:** Input Fields
**✅ Correct:** Fields use clear labels above and format-hint placeholders (DD/MM/YYYY) that add value beyond the label.
**❌ Wrong:** Labels inside the field as placeholder text disappear on typing, leaving users without context mid-entry.
**Key fix:** Only use placeholders to show format examples — never as a substitute for persistent field labels.
---

## RULE: Stick to traditional input styling
**Chapter:** Input Fields
**✅ Correct:** Input fields use standard white/light grey backgrounds with simple borders — conventionally recognizable as inputs.
**❌ Wrong:** Input fields use a bright yellow background that deviates from established conventions, potentially confusing users.
**Key fix:** Use conventional, understated input styling so form fields are instantly and universally recognizable.
---

## RULE: Choose the right date pickers for users' needs
**Chapter:** Input Fields
**✅ Correct:** Check-in and check-out dates use side-by-side calendar pickers for intuitive date range selection.
**❌ Wrong:** Six separate dropdowns (DD, MM, YYYY for each date) are used for check-in and check-out — overly complex for this use case.
**Key fix:** Match the date picker type to the task — use a calendar range picker for check-in/check-out, dropdowns for birth dates.
---

## RULE: Usability
**Chapter:** Input Fields
**✅ Correct:** The numeric keyboard appears automatically when the card number field is focused, matching the expected input type.
**❌ Wrong:** A standard alphanumeric keyboard appears for the card number field, making numeric entry slower and more error-prone.
**Key fix:** Set the correct `inputmode` or `type` attribute on numeric fields to trigger the numeric keypad on mobile.
---

## RULE: Help users recognize and recover from errors
**Chapter:** Input Fields
**✅ Correct:** The new password field shows inline indicators (green checkmarks for met criteria, red for unmet) so users can fix issues before submitting.
**❌ Wrong:** A generic "Your password is too weak. Try again." message provides no specific guidance on what to fix.
**Key fix:** Show specific, real-time feedback on which password requirements are met and which still need attention.
---

## RULE: Use numerals for numbers
**Chapter:** Input Fields
**✅ Correct:** The helper text reads "at least 8 characters long and include 1 number" — using numerals for quick scanning.
**❌ Wrong:** The helper text reads "at least eight characters long and include one number" — spelled-out numbers slow scanning.
**Key fix:** Use numerals (8, 1) rather than spelled-out words (eight, one) in helper text and requirements for faster reading.
---

## RULE: Focus on users
**Chapter:** Input Fields
**✅ Correct:** The CTA button reads "Subscribe" — action-oriented and user-focused, consistent with what the form does.
**❌ Wrong:** The CTA button uses a generic "Submit" label that provides no indication of what action is being taken.
**Key fix:** Use action-oriented, user-focused button labels (Subscribe, Send, Book) instead of generic "Submit."
---

## RULE: Make it scannable
**Chapter:** Input Fields
**✅ Correct:** Password requirements are presented as a clean bullet list with each item on its own line.
**❌ Wrong:** Requirements are written in a dense paragraph ("Must contain a capital letter, must contain a number...") that is hard to parse.
**Key fix:** Present password (and similar) requirements as a scannable bullet list, not a run-on paragraph.
---

## RULE: What is an error message?
**Chapter:** Input Fields
**✅ Correct:** The password field shows a red-bordered field with the message "Password must be 8 characters long" — clearly an error state.
**❌ Wrong:** The field shows helper text "Password should be at least 8 characters long" in neutral styling, not visually distinguishing it as an error.
**Key fix:** Visually distinguish error states from helper text using red borders, error icons, and error-colored text.
---

## RULE: Helpful error messages
**Chapter:** Input Fields
**✅ Correct:** The login failure banner reads "Your username and/or password do not match" — specific about what went wrong.
**❌ Wrong:** The banner reads "You cannot login to the application" — too vague to help users identify or fix the issue.
**Key fix:** Write authentication error messages that specify what failed (credentials don't match) without compromising security.
---

## RULE: Clear and concise error messages
**Chapter:** Input Fields
**✅ Correct:** The email error reads "Please enter your email address in format: yourname@example.com" — short and prescriptive.
**❌ Wrong:** The email error is a three-line paragraph explaining the format requirements in verbose detail.
**Key fix:** Keep error messages to one concise sentence that tells the user exactly what format or value is expected.
---

## RULE: Don't make users feel bad
**Chapter:** Input Fields
**✅ Correct:** The error message reads "Please enter your name" — neutral, polite, and non-blaming.
**❌ Wrong:** The error message reads "You didn't enter a name" — accusatory phrasing that blames the user.
**Key fix:** Write error messages in a neutral, helpful tone that guides users rather than blaming them for mistakes.
---

## RULE: Placement of microcopy
**Chapter:** Input Fields
**✅ Correct:** Helper text appears below the input field it relates to, placed immediately after the field for easy reference while typing.
**❌ Wrong:** Helper text appears above the input field, requiring users to scroll up to re-read it after they've started entering data.
**Key fix:** Place helper text below the input field so users can read it while actively typing without looking away.
---

## RULE: Make hints permanent
**Chapter:** Input Fields
**✅ Correct:** The username and password labels remain visible above their fields throughout the interaction.
**❌ Wrong:** The form only shows a "Sign Up" heading with no field labels — users must guess what each field requires.
**Key fix:** Always display persistent field labels; never remove labels after the user focuses or types in a field.
---

## RULE: Add visual cues to scroll down
**Chapter:** Interactions
**✅ Correct:** A subtle downward-pointing animated arrow at the bottom of the hero section signals that more content exists below.
**❌ Wrong:** The hero section has no scroll indicator — users may not realize additional content exists below the fold.
**Key fix:** Add a visual scroll cue (arrow or animated indicator) at the bottom of full-viewport hero sections.
---

## RULE: Reduce friction whenever possible
**Chapter:** Interactions
**✅ Correct:** The quick-start guide shows estimated time for each incomplete task, helping users prioritize and reducing decision fatigue.
**❌ Wrong:** Incomplete tasks are listed with no time estimates or context, making them feel like an undifferentiated burden.
**Key fix:** Add time estimates or progress context to task lists to reduce friction and encourage completion.
---

## RULE: Use modals to ask for permission
**Chapter:** Interactions
**✅ Correct:** A modal dialog explains why the app needs microphone access and provides clear Allow/Don't Allow options.
**❌ Wrong:** A small banner with no explanation simply says the translator wants microphone access, lacking sufficient context.
**Key fix:** Use a modal with a clear explanation and distinct permission options when requesting sensitive user permissions.
---

## RULE: Reduce the interaction cost
**Chapter:** Interactions
**✅ Correct:** Filters are applied instantly as the user selects them (live filtering), eliminating the need for an explicit "Apply" step.
**❌ Wrong:** Users must select filters and then press an "Apply" button separately, adding an unnecessary interaction step.
**Key fix:** Apply filters or selections in real time to eliminate the extra step of pressing a separate "Apply" button.
---

## RULE: Confirm account deletion
**Chapter:** Interactions
**✅ Correct:** The account deletion confirmation shows a warm closing message ("Thanks for using our product! We look forward to seeing you again.").
**❌ Wrong:** The confirmation simply states "We won't bother you anymore" — a cold, brand-damaging message.
**Key fix:** Write a respectful, warm farewell message for account deletion confirmations that leaves a positive final impression.
---

## RULE: Communicate interactivity with the hover state
**Chapter:** Interactions
**✅ Correct:** On hover, the FAQ item highlights with a hand cursor and visual state change, communicating that it is clickable.
**❌ Wrong:** The FAQ item only shows a color change on hover with no cursor change, making interactivity unclear.
**Key fix:** Use both a pointer cursor and a visual state change (background highlight or color shift) to communicate hover interactivity.
---

## RULE: Apply hover effect to indicate interactivity
**Chapter:** Interactions
**✅ Correct:** The hovered navigation tab shows a raised/highlighted state, making it clear the tab is interactive.
**❌ Wrong:** Tabs show no visible hover state — users cannot tell whether the tabs are clickable.
**Key fix:** Apply a distinct hover state (background change, underline, or lift effect) to all interactive elements.
---

## RULE: Commands vs questions in CTAs
**Chapter:** Interactions
**✅ Correct:** The profile selection screen asks "Who's watching?" — a conversational question that feels engaging and human.
**❌ Wrong:** The screen says "Select account" — a command that feels cold and transactional.
**Key fix:** Use conversational question-based CTAs ("Who's watching?") rather than terse commands ("Select account") for a friendlier experience.
---

## RULE: Consistency with the users' platform
**Chapter:** Interactions
**✅ Correct:** Mobile UI uses "Tap to continue" — matching the touch-based interaction vocabulary of mobile platforms.
**❌ Wrong:** Mobile UI says "Click to continue" — using desktop mouse vocabulary that is incorrect for touch screens.
**Key fix:** Use platform-appropriate interaction language: "Tap" on mobile, "Click" on desktop.
---

## RULE: Avoid dense text blocks
**Chapter:** Layout
**✅ Correct:** Body text is broken into shorter paragraphs with sufficient spacing and line height for comfortable reading.
**❌ Wrong:** A large block of text with no spacing or visual breaks is presented, making it overwhelming to read.
**Key fix:** Break long text into shorter paragraphs with adequate spacing and line height to improve readability.
---

## RULE: Let the layout breathe
**Chapter:** Layout
**✅ Correct:** The layout uses generous whitespace between sections, giving content room to breathe and improving focus.
**❌ Wrong:** Content is packed into the available space with minimal whitespace, creating a cluttered, overwhelming layout.
**Key fix:** Add significant whitespace between layout sections and content groups to reduce visual density.
---

## RULE: Inverted pyramid layout
**Chapter:** Layout
**✅ Correct:** The page leads with the most important content (headline + CTA) at the top, tapering to supporting details below.
**❌ Wrong:** The page leads with secondary details and buries the CTA at the bottom, requiring users to scroll to act.
**Key fix:** Apply an inverted pyramid structure — lead with the most important information and CTA, support it with details below.
---

## RULE: Use enough white space
**Chapter:** Layout
**✅ Correct:** The product section uses ample whitespace between the headline, description, images, and CTA, making each element distinct.
**❌ Wrong:** Content elements are crowded together with insufficient whitespace, making the section hard to parse.
**Key fix:** Apply generous whitespace around every distinct content element to improve readability and visual separation.
---

## RULE: Make the Help page easily scannable
**Chapter:** Layout
**✅ Correct:** The Help Center uses a two-column layout with topic categories on the left and questions on the right, enabling fast scanning.
**❌ Wrong:** The Help Center lists all questions in a single undifferentiated vertical list with no category organization.
**Key fix:** Organize Help pages with category navigation so users can scan topics rather than scrolling through all questions.
---

## RULE: Format harmony
**Chapter:** Layout
**✅ Correct:** The layout card uses a consistent rectangular card format with unified corner radii for all elements.
**❌ Wrong:** The card uses a heavy rounded rectangle on one side and a sharp rectangle on the other — inconsistent format.
**Key fix:** Use consistent shapes, corner radii, and container formats across all elements within a layout component.
---

## RULE: Active zones
**Chapter:** Layout
**✅ Correct:** The primary content and CTA are placed in the center-left active zone where users' eyes naturally land first.
**❌ Wrong:** Important content is placed in the corners or edges — passive zones that receive less natural attention.
**Key fix:** Place primary CTAs and key content in active visual zones (center, top-left) where users focus first.
---

## RULE: Passive zones
**Chapter:** Layout
**✅ Correct:** Supporting text and secondary elements are placed in the bottom corners — passive zones appropriate for supplementary content.
**❌ Wrong:** Critical navigation and primary content are placed in passive corner zones, reducing their visibility.
**Key fix:** Reserve passive zones (corners, edges) for supplementary content and place primary actions in active zones.
---

## RULE: Dynamic format
**Chapter:** Layout
**✅ Correct:** The vertical stacking of letters in "S P A C E" creates a dynamic format that draws the eye and creates visual interest.
**❌ Wrong:** "SPACE" is displayed in a standard horizontal layout with no compositional dynamism.
**Key fix:** Experiment with dynamic typographic arrangements (vertical, diagonal) to create visual energy in layout compositions.
---

## RULE: Static format
**Chapter:** Layout
**✅ Correct:** The layout reframes the static composition with a descriptive headline that makes the purpose immediately clear.
**❌ Wrong:** A single word "Inspiration?" in a static centered format gives no context about the page's purpose.
**Key fix:** Use a clear, descriptive headline alongside static compositional formats so users immediately understand the page purpose.
---

## RULE: Golden ratio
**Chapter:** Layout
**✅ Correct:** Content is distributed across the layout using golden ratio proportions, creating natural visual harmony.
**❌ Wrong:** Content is split into equal halves, creating a symmetrical but visually static and less engaging layout.
**Key fix:** Apply golden ratio proportions to layout divisions to create naturally pleasing, harmonious compositions.
---

## RULE: Dots in compositions
**Chapter:** Layout
**✅ Correct:** The status indicator dot is small, positioned correctly relative to the profile image, and does not compete with the name text.
**❌ Wrong:** The status dot is oversized and positioned in a way that visually conflicts with the profile photo and name.
**Key fix:** Keep status indicator dots small and correctly positioned so they supplement rather than compete with primary content.
---

## RULE: Lines in compositions
**Chapter:** Layout
**✅ Correct:** Subtle horizontal dividing lines between content sections create structure without adding visual noise.
**❌ Wrong:** No lines or dividers are used between sections, causing content to blur together without clear separation.
**Key fix:** Use thin, subtle dividing lines to create structure in layouts where sections need visual separation.
---

## RULE: Planes in compositions
**Chapter:** Layout
**✅ Correct:** Colorful geometric planes (yellow, blue, pink, green rectangles) create a strong, structured background composition.
**❌ Wrong:** Random, organic curved shapes are used as the background, creating visual noise that competes with the form.
**Key fix:** Use bold geometric planes rather than complex organic shapes for background compositions behind functional UI.
---

## RULE: How to use volume in compositions
**Chapter:** Layout
**✅ Correct:** 3D objects are scaled and positioned to create depth and volume that supports the hero message.
**❌ Wrong:** Flat 2D objects are used in the same positions, lacking depth and visual interest.
**Key fix:** Use 3D objects or depth-creating techniques (shadow, scaling, perspective) to add volume to hero compositions.
---

## RULE: Applying scale
**Chapter:** Layout
**✅ Correct:** The featured image is displayed significantly larger than surrounding images, using scale to signal its primary importance.
**❌ Wrong:** All images in the gallery are the same size, giving equal visual weight to featured and secondary content.
**Key fix:** Use scale variation — display primary content significantly larger than supporting content to signal hierarchy.
---

## RULE: Applying shape
**Chapter:** Layout
**✅ Correct:** A circular play button overlays the video thumbnail, using a recognizable shape that signals video playback.
**❌ Wrong:** A plain "Play" text label is used instead of a recognizable circular play button shape.
**Key fix:** Use familiar geometric shapes as UI affordances (circle for play, triangle for direction) rather than text labels.
---

## RULE: Applying color
**Chapter:** Layout
**✅ Correct:** Each category card uses a distinct accent color (pink, yellow, purple) to differentiate them while maintaining a cohesive palette.
**❌ Wrong:** All category cards use the same yellow color, making them visually indistinguishable from each other.
**Key fix:** Apply distinct accent colors to cards or categories to create visual differentiation while maintaining palette consistency.
---

## RULE: Applying texture
**Chapter:** Layout
**✅ Correct:** A subtle dotted texture is applied to the product card background, adding tactile depth without competing with the product.
**❌ Wrong:** The product card uses a plain white background with no texture, resulting in a flat, visually uninteresting layout.
**Key fix:** Use subtle textures (dots, grain, patterns) in card backgrounds to add visual depth and interest.
---

## RULE: Color contrast
**Chapter:** Layout
**✅ Correct:** The "Delete" button uses a bold pink/red fill contrasting sharply with the white "Cancel" ghost button.
**❌ Wrong:** Both "Delete" and "Cancel" use the same solid black button style with no contrast between them.
**Key fix:** Use color contrast to distinguish destructive actions (red/filled) from neutral ones (ghost/outlined).
---

## RULE: Shape contrast
**Chapter:** Layout
**✅ Correct:** The circular play button contrasts with the rectangular video thumbnail, making the interactive element immediately stand out.
**❌ Wrong:** A rectangular dashed-outline play indicator blends into the rectangular video frame with insufficient shape contrast.
**Key fix:** Use contrasting shapes for interactive elements placed on top of content to make them immediately recognizable.
---

## RULE: Size contrast
**Chapter:** Layout
**✅ Correct:** "Travel" is displayed in large, bold type that creates strong size contrast with the smaller navigation and body text.
**❌ Wrong:** The page title is similar in size to the navigation text, creating a flat hierarchy with no size contrast.
**Key fix:** Use significant size contrast between the page title and supporting text to establish clear visual hierarchy.
---

## RULE: Quantity contrast
**Chapter:** Layout
**✅ Correct:** Multiple thumbnail images are shown alongside the main product image, using quantity contrast to direct focus to the primary image.
**❌ Wrong:** All images in the product gallery are given equal size and prominence, diluting focus from the main product image.
**Key fix:** Use one large primary image alongside smaller secondary thumbnails to create quantity contrast and direct focus.
---

## RULE: Position contrast
**Chapter:** Layout
**✅ Correct:** Key product details are placed prominently on the right side against a clean background, using position to create contrast with the left-side image.
**❌ Wrong:** Product details are placed in the same horizontal band as the image with no positional separation to create contrast.
**Key fix:** Use position contrast to separate and emphasize key content — place important text in a visually distinct zone from the imagery.
---

## RULE: Orientation contrast
**Chapter:** Layout
**✅ Correct:** Large diagonal background text ("Dark") contrasts in orientation with the horizontal headline and product name below.
**❌ Wrong:** Both background text and headline are horizontal, creating no orientation contrast or visual dynamism.
**Key fix:** Use orientation contrast (diagonal vs. horizontal elements) to create visual interest and guide the eye.
---

## RULE: Context contrast
**Chapter:** Layout
**✅ Correct:** The text overlay uses sufficient contrast against the donut/sweets background image, ensuring readability.
**❌ Wrong:** Light text is placed on a bright, busy food image without sufficient contrast, making the headline hard to read.
**Key fix:** Apply text overlays or contrast adjustments to ensure text is always legible against busy background images.
---

## RULE: Visual weight contrast
**Chapter:** Layout
**✅ Correct:** The product name and price are given heavy visual weight while controls are lighter, creating a balanced but hierarchical card.
**❌ Wrong:** The product image, ratings, title, description, price, and CTA all share similar visual weight, creating an overwhelmingly balanced but indistinct card.
**Key fix:** Apply distinct visual weights to card elements to create a clear hierarchy from title > price > secondary details > CTA.
---

## RULE: Subtlety with shape
**Chapter:** Layout
**✅ Correct:** Book cover images are displayed with consistent rectangular shapes that create a clean, uniform grid.
**❌ Wrong:** Book covers are displayed with inconsistent shapes — some appear skewed or oddly cropped — breaking visual unity.
**Key fix:** Maintain consistent shape and orientation for all images in a grid to create visual harmony.
---

## RULE: Subtlety with size
**Chapter:** Layout
**✅ Correct:** The main portfolio image occupies a slightly larger size, using subtle size variation to signal primary importance.
**❌ Wrong:** The vertical rotated sidebar text competes with the primary image at equal visual size.
**Key fix:** Use subtle (not dramatic) size differences between related elements to create gentle hierarchy without disrupting composition.
---

## RULE: Subtlety with color
**Chapter:** Layout
**✅ Correct:** Decorative color blobs are muted and desaturated to complement rather than compete with the primary headline.
**❌ Wrong:** Bold, saturated color blobs dominate the page, drawing the eye away from the main headline and CTA.
**Key fix:** Use muted, desaturated colors for decorative layout elements so they don't compete with primary content.
---

## RULE: Similarity with shape
**Chapter:** Layout
**✅ Correct:** All three model photos are displayed in consistent rectangular portrait shapes, creating visual unity across the gallery.
**❌ Wrong:** Photos alternate between rectangular and oval shapes, breaking visual consistency.
**Key fix:** Use the same crop shape for all images in a gallery or grid to establish visual similarity and consistency.
---

## RULE: Positive space in layouts
**Chapter:** Layout
**✅ Correct:** The large filled rectangle and text create clear positive space that defines the focal point of the composition.
**❌ Wrong:** The single small red accent dot creates insufficient positive space, leaving the composition feeling empty and unanchored.
**Key fix:** Use bold, filled shapes as positive space anchors to establish clear focal points in layout compositions.
---

## RULE: Negative space in layouts
**Chapter:** Layout
**✅ Correct:** Generous whitespace around the headline and red rectangle creates breathing room that gives each element visual weight.
**❌ Wrong:** A cluttered number badge in the corner competes with the headline by filling space that should remain empty.
**Key fix:** Use negative space intentionally to give primary layout elements room to breathe and assert visual weight.
---

## RULE: Active negative space in web design
**Chapter:** Layout
**✅ Correct:** Intentional asymmetric whitespace around the photography gallery creates active negative space that draws the eye to the images.
**❌ Wrong:** Images fill the available space edge-to-edge with no whitespace, creating a flat, undifferentiated layout.
**Key fix:** Use asymmetric whitespace actively to frame and direct attention toward primary visual content.
---

## RULE: Passive negative space in web design
**Chapter:** Layout
**✅ Correct:** The expanded hero image fills the viewport, with passive whitespace above and below the text as a breathing zone.
**❌ Wrong:** The hero layout uses no passive negative space — text and image are equally prominent with no restful zones.
**Key fix:** Use passive whitespace (uniform margins, breathing zones) to create visual rest areas and reduce cognitive load.
---

## RULE: Negative space provides "breathing room" on the page
**Chapter:** Layout
**✅ Correct:** Ample whitespace between the header, photo grid, and text sections gives each area room to be read distinctly.
**❌ Wrong:** All page sections are packed together with minimal vertical whitespace, creating a dense, tiring layout.
**Key fix:** Add consistent vertical whitespace between all major page sections to create breathing room and improve readability.
---

## RULE: Active negative space makes for visually interesting designs
**Chapter:** Layout
**✅ Correct:** Intentionally asymmetric whitespace creates a dynamic, visually interesting layout that guides the eye across the page.
**❌ Wrong:** Content is evenly distributed across the page with symmetric whitespace, creating a static, predictable layout.
**Key fix:** Use active asymmetric whitespace to create visual dynamism and guide the user's eye through the content.
---

## RULE: Passive negative space improves legibility
**Chapter:** Layout
**✅ Correct:** Uniform passive whitespace around article cards gives each card visual separation, improving legibility and scanability.
**❌ Wrong:** Cards are crammed together with minimal passive whitespace, making individual cards hard to distinguish and read.
**Key fix:** Apply consistent passive whitespace around repeated elements (cards, list items) to improve legibility and scanability.
---

## RULE: External negative space ensures spatial balance
**Chapter:** Layout
**✅ Correct:** The hero section has balanced external margins on all sides, creating a spatially balanced and professional layout.
**❌ Wrong:** The hero content extends unevenly to different edges, creating an unbalanced spatial composition.
**Key fix:** Apply consistent external margins around page sections to ensure spatial balance and prevent edge crowding.
---

## RULE: Internal negative space ensures that elements don't clash
**Chapter:** Layout
**✅ Correct:** Internal padding and spacing within the portfolio grid prevents images from touching or clashing with each other.
**❌ Wrong:** Portfolio images are displayed without internal gutters, causing them to touch and visually clash.
**Key fix:** Apply consistent internal gutter spacing between grid items to prevent visual clashing.
---

## RULE: Negative space can highlight elements
**Chapter:** Layout
**✅ Correct:** A large amount of whitespace surrounds the CTA and headline, using negative space to draw attention to them.
**❌ Wrong:** The CTA and headline compete with surrounding contact details, illustration, and text in a crowded layout.
**Key fix:** Isolate key elements with generous surrounding whitespace to make them the undisputed focal point.
---

## RULE: Negative space ensures legibility
**Chapter:** Layout
**✅ Correct:** Ample whitespace between the large typographic headline letters ensures each word is clearly legible.
**❌ Wrong:** Tight tracking and minimal whitespace between large letters causes them to visually crowd and become hard to read.
**Key fix:** Ensure sufficient negative space between and around large typographic elements to maintain their legibility.
---

## RULE: Change scale to convey importance and create hierarchy
**Chapter:** Layout
**✅ Correct:** One large featured portfolio image is prominently scaled with a year label, clearly signaling its primary importance over smaller images.
**❌ Wrong:** All portfolio images are displayed at the same small thumbnail size, giving no visual indication of featured content.
**Key fix:** Scale up the primary or featured item significantly relative to supporting items to signal hierarchy.
---

## RULE: Avoid ruining user experience
**Chapter:** Layout
**✅ Correct:** A single contextual announcement banner is shown non-intrusively at the top of the page.
**❌ Wrong:** Multiple overlapping banners, pop-ups, and ads appear simultaneously, overwhelming and frustrating the user.
**Key fix:** Limit interruptive elements to one at a time and avoid stacking multiple banners, pop-ups, or ads.
---

## RULE: Modular grids
**Chapter:** Layout
**✅ Correct:** Content is organized using a clear modular grid with consistent column widths and consistent alignment.
**❌ Wrong:** Content is placed without a modular grid — elements vary in width, alignment, and spacing arbitrarily.
**Key fix:** Use a modular grid system to ensure consistent alignment, spacing, and proportions across the layout.
---

## RULE: The golden ratio
**Chapter:** Layout
**✅ Correct:** The featured image and supporting card stack are proportioned using a golden ratio split, creating natural visual harmony.
**❌ Wrong:** The image and content panels are split equally (50/50), creating a static layout that lacks visual tension.
**Key fix:** Use golden ratio proportions (approximately 61.8%/38.2%) for layout divisions to create natural visual harmony.
---

## RULE: Creating more dynamic pages
**Chapter:** Layout
**✅ Correct:** The page uses varied text sizes, a pull quote, and a supporting sidebar to create visual dynamism and scanning paths.
**❌ Wrong:** The page uses uniform text size and a single column with no visual variation, creating a static, monotonous layout.
**Key fix:** Introduce typographic variation, pull quotes, or sidebars to break up single-column layouts and create visual dynamism.
---

## RULE: Foreground and background
**Chapter:** Layout
**✅ Correct:** A distinct card layer (white background) sits clearly in the foreground against the light blue page background, creating depth.
**❌ Wrong:** Foreground and background elements share the same color value, eliminating depth and making the layout flat.
**Key fix:** Use color contrast between foreground cards/panels and the page background to create clear depth layering.
---

## RULE: Macro white space
**Chapter:** Layout
**✅ Correct:** Large macro whitespace between the image and content creates a spacious, premium feel for the product card.
**❌ Wrong:** The image and content are packed together with no macro whitespace, creating a cramped layout.
**Key fix:** Apply generous macro whitespace (the space between major layout elements) to create a premium, spacious feel.
---

## RULE: Align containers within grid borders
**Chapter:** Layout
**✅ Correct:** The content card aligns precisely to the grid column borders with consistent margin on all sides.
**❌ Wrong:** The content card bleeds outside the grid borders, breaking the layout's structural alignment.
**Key fix:** Keep all containers and cards within defined grid column borders — never let content break outside the grid.
---

## RULE: Use similar alignment for similar elements
**Chapter:** Layout
**✅ Correct:** Both the Typography and Icons list items use left-aligned icons and text, creating a consistent, scannable list.
**❌ Wrong:** Icons and text are aligned differently across similar list items, creating visual inconsistency.
**Key fix:** Apply identical alignment rules to all similar elements (list items, cards) within a component.
---

## RULE: Stay consistent with alignment between sections
**Chapter:** Layout
**✅ Correct:** Both "Composition" and "Color Theory" items use the same layout alignment — icon left, title bold, description below.
**❌ Wrong:** Items alternate between left-icon and top-icon layouts, creating inconsistent visual rhythm between sections.
**Key fix:** Maintain consistent alignment patterns across all similar items, even when they span multiple sections.
---

## RULE: Maintain vertical rhythm
**Chapter:** Layout
**✅ Correct:** The image grid uses consistent row heights and spacing, creating a steady vertical rhythm throughout.
**❌ Wrong:** Row heights vary inconsistently across the grid — some rows are tall, others short — breaking vertical rhythm.
**Key fix:** Apply consistent row heights and vertical spacing to grids and lists to maintain a steady visual rhythm.
---

## RULE: Keep the content span inside grid borders
**Chapter:** Layout
**✅ Correct:** The image content is cropped and contained within the defined grid column borders.
**❌ Wrong:** The image bleeds outside the grid borders, creating a layout that appears to ignore its own structural rules.
**Key fix:** Always crop or contain images and content within grid border boundaries to maintain structural integrity.
---

## RULE: Use consistent text alignment
**Chapter:** Layout
**✅ Correct:** All body text is left-aligned, creating a consistent, scannable reading experience across the layout.
**❌ Wrong:** Body text alternates between left-aligned and centered, disrupting reading flow and visual consistency.
**Key fix:** Choose a single text alignment (left for body text) and apply it consistently across all sections.
---

## RULE: Use consistent image alignment
**Chapter:** Layout
**✅ Correct:** All gallery images are aligned to a uniform grid with consistent top-left anchoring.
**❌ Wrong:** Images are placed with inconsistent alignment — some left-anchored, others centered — breaking the grid.
**Key fix:** Align all images to a consistent grid anchor point (top-left or center) to maintain visual order.
---

## RULE: Align similar elements on both axes
**Chapter:** Layout
**✅ Correct:** Both product cards align their images, names, descriptions, and CTAs on both horizontal and vertical axes.
**❌ Wrong:** Product card elements are misaligned — image sizes differ and text starts at different vertical positions.
**Key fix:** Ensure all corresponding elements across similar cards align on both horizontal and vertical axes.
---

## RULE: Place related elements in proximity
**Chapter:** Layout
**✅ Correct:** The icon is placed directly adjacent to the "Typography" title and description, creating a clear visual group.
**❌ Wrong:** The icon is positioned too far from its associated title and description, breaking the visual relationship.
**Key fix:** Place icons, labels, and descriptions in close proximity so their relationship is immediately clear.
---

## RULE: Keep dividers inside the grid
**Chapter:** Layout
**✅ Correct:** Horizontal dividers between accordion items extend only within the content column, respecting grid borders.
**❌ Wrong:** Dividers extend to the full page width, bleeding outside the content grid and creating an unstructured appearance.
**Key fix:** Constrain dividers to the content grid width — do not let them span the full viewport width unnecessarily.
---

## RULE: Maintain vertical keyline alignment
**Chapter:** Layout
**✅ Correct:** Contact list items use a consistent left keyline — avatars, names, and icons all align to the same vertical axis.
**❌ Wrong:** Avatars, names, and action icons are misaligned — each starts at a different horizontal position.
**Key fix:** Establish a vertical keyline and align all related list elements to it consistently.
---

## RULE: Align headings to the left
**Chapter:** Layout
**✅ Correct:** "Recent songs" and list item text are left-aligned, matching the natural reading direction and creating a clean layout.
**❌ Wrong:** "Recent songs" is centered above left-aligned list items, creating a mismatched alignment that feels inconsistent.
**Key fix:** Left-align headings above left-aligned list content — avoid mixing centered headings with left-aligned body content.
---

## RULE: Use a proper layout for the search results page
**Chapter:** Layout
**✅ Correct:** Search results use a grid/tile layout with product images, making it easy to browse visually.
**❌ Wrong:** Search results are displayed as a single-column text list, making it slow to browse a large product catalog.
**Key fix:** Use a grid or tile layout for visual product search results rather than a plain text list.
---

## RULE: Positive and negative space
**Chapter:** Layout
**✅ Correct:** The product card uses balanced positive space (product image and CTA) with ample negative space around them.
**❌ Wrong:** The card is overly filled — the background, product, and CTA compete for attention without enough breathing room.
**Key fix:** Balance positive (filled) and negative (empty) space within product cards to create a clean, focused layout.
---

## RULE: Use enough spacing
**Chapter:** Layout
**✅ Correct:** The Tripadvisor layout uses generous spacing between content sections, making each block clearly distinct.
**❌ Wrong:** The booking site layout has content blocks packed together with insufficient spacing, creating a cluttered appearance.
**Key fix:** Apply generous spacing between content sections to prevent a cluttered layout.
---

## RULE: Use contrasting labels
**Chapter:** Labels
**✅ Correct:** The "BLOG" label uses a dark badge with white text, creating strong contrast against the card image.
**❌ Wrong:** The label text is the same color as the card image area, making it difficult to read.
**Key fix:** Use high-contrast label badges (dark text on light or light text on dark) to ensure label legibility.
---

## RULE: Keep card labels concise
**Chapter:** Labels
**✅ Correct:** The label reads simply "BLOG" — concise and instantly readable at a glance.
**❌ Wrong:** The label reads "BLOG, about Design and Photography" — too long for a card label, causing truncation and clutter.
**Key fix:** Keep card labels to one or two words maximum; move longer descriptions to the card body text.
---

## RULE: Truncate longer labels
**Chapter:** Labels
**✅ Correct:** Long dropdown option text is truncated with "..." and a tooltip reveals the full text on hover.
**❌ Wrong:** Long dropdown option text wraps to multiple lines within the dropdown, breaking the layout.
**Key fix:** Truncate long dropdown labels with ellipsis and show full text via tooltip on hover.
---

## RULE: Use descriptive link labels
**Chapter:** Labels
**✅ Correct:** The link reads "Read article" — descriptive text that tells users exactly what they'll get when they click.
**❌ Wrong:** The link reads "More" — a vague label that provides no information about the destination or content.
**Key fix:** Replace generic link labels ("More," "Click here") with descriptive labels that identify the link's destination.
---

## RULE: Indicate links that open in a new window
**Chapter:** Links
**✅ Correct:** The link includes an `aria-label` describing that it opens in a new window, and is visually indicated as such.
**❌ Wrong:** The link opens in a new window without any visual or accessible indication that it will do so.
**Key fix:** Add an icon and accessible label to links that open in a new window to prevent disorienting users.
---

## RULE: Specify link destination
**Chapter:** Links
**✅ Correct:** The link's destination is described via an `aria-label` or tooltip, giving users context before they click.
**❌ Wrong:** The link provides no indication of where it leads — users must click to discover the destination.
**Key fix:** Use descriptive link text, tooltips, or aria-labels to communicate the destination before the user clicks.
---

## RULE: Make your links recognizable
**Chapter:** Links
**✅ Correct:** Links are underlined and use a distinct blue color, making them immediately identifiable as clickable.
**❌ Wrong:** Link text uses the same color and style as body text — users cannot identify which text is a link.
**Key fix:** Style links with underlines and/or a distinct color so they are immediately recognizable as interactive.
---

## RULE: Make links recognizable
**Chapter:** Links
**✅ Correct:** The contact email is shown as a blue, underlined link (`help@company.com`) that is clearly clickable.
**❌ Wrong:** The contact instruction says "don't hesitate to click here" — the word "here" is the link, not the meaningful text.
**Key fix:** Make link text descriptive and visually distinct — link the meaningful text, not vague words like "here" or "click."
---

## RULE: Show a link to delete the account
**Chapter:** Links
**✅ Correct:** "Delete account" is shown as a red text link at the bottom of account settings, making it visible but clearly dangerous.
**❌ Wrong:** "Delete account" is displayed in the same grey style as inactive options, making it easy to miss.
**Key fix:** Use a distinct color (red) for destructive links like "Delete account" to signal their destructive nature without a full button.
---

## RULE: Keep the link style familiar
**Chapter:** Links
**✅ Correct:** Table row links are styled in the conventional blue underline color, immediately recognizable as clickable.
**❌ Wrong:** Table row text uses default body styling with no link indication — users cannot tell the rows are clickable.
**Key fix:** Use familiar link styling (blue, underlined or highlighted on hover) within tables and data views.
---

## RULE: Secondary features
**Chapter:** Links
**✅ Correct:** The FAQ accordion adds a "Read more about Progressive Disclosure →" link as a secondary feature below the expanded answer.
**❌ Wrong:** The FAQ shows a generic "Show more" text with no contextual link to deeper resources.
**Key fix:** Add descriptive secondary action links (e.g., "Read more about X →") rather than generic "Show more" labels.
---

## RULE: Be more descriptive
**Chapter:** Links
**✅ Correct:** The article link reads "Read about UX Writing" — descriptive enough to communicate exactly what the user will get.
**❌ Wrong:** The article link reads "Read more" — a generic label that provides no content-specific information.
**Key fix:** Replace "Read more" links with descriptive labels that include the topic or content type.
---

## RULE: Consider lists for organizing related items
**Chapter:** Lists
**✅ Correct:** Turn-by-turn directions are formatted as a numbered list, making each step clearly sequential and easy to follow.
**❌ Wrong:** Directions are presented as a paragraph of prose, making individual steps harder to identify and follow.
**Key fix:** Use numbered lists for sequential instructions and bullet lists for unordered items rather than prose paragraphs.
---

## RULE: Minimize choices
**Chapter:** Lists
**✅ Correct:** The Electronics category shows 5 top items with a "Show all categories" link to progressively reveal more.
**❌ Wrong:** All 8+ subcategory checkboxes are shown at once, overwhelming users with too many choices.
**Key fix:** Limit visible list items to the most relevant few and use a "Show more" option for progressive disclosure.
---

## RULE: Tooltips & helper text
**Chapter:** Lists
**✅ Correct:** The "Mark as favorite" tooltip appears close to its star icon with clear, concise labeling.
**❌ Wrong:** The tooltip text is verbose and appears far from the element it labels, making association difficult.
**Key fix:** Keep tooltips concise and position them immediately adjacent to the element they describe.
---

## RULE: Use dropdowns for lengthy lists of choices
**Chapter:** Lists
**✅ Correct:** A searchable dropdown with a filter input is used for the Country field, enabling users to quickly find their country from 195+ options.
**❌ Wrong:** All 195+ country options are displayed as a scrollable radio button list, making selection tediously slow.
**Key fix:** Use a searchable dropdown for lists exceeding 7-10 options to prevent overwhelming radio button lists.
---

## RULE: Maintain vertical keyline alignment
**Chapter:** Lists
**✅ Correct:** Contact list avatars, names, and action icons all align to a consistent vertical keyline for clean visual structure.
**❌ Wrong:** Avatars and text start at different horizontal positions across list items, breaking alignment consistency.
**Key fix:** Apply a consistent vertical keyline to all elements in list views (avatar, text, action icon).
---

## RULE: Align text to the horizontal center of images
**Chapter:** Lists
**✅ Correct:** Contact names are vertically centered relative to the profile avatar, creating balanced visual alignment.
**❌ Wrong:** Contact names are top-aligned with the avatar, creating an unbalanced pairing where the name sits too high.
**Key fix:** Vertically center text labels relative to their accompanying images or avatars.
---

## RULE: Use dividers to increase scannability
**Chapter:** Lists
**✅ Correct:** Thin divider lines between inbox items create clear visual separation, making the list easy to scan.
**❌ Wrong:** No dividers are used between inbox items — messages run together without clear visual boundaries.
**Key fix:** Add subtle divider lines between list items to improve scannability and visual separation.
---

## RULE: Use indented dividers for lists with images
**Chapter:** Lists
**✅ Correct:** Dividers in the messages list are indented to start after the avatar, keeping the visual grouping of avatar + content intact.
**❌ Wrong:** Dividers span the full width including the avatar area, visually separating the avatar from its associated message.
**Key fix:** Indent list dividers to start after any leading avatar or icon, preserving the visual grouping of image and text.
---

## RULE: Use left alignment for thumbnails
**Chapter:** Lists
**✅ Correct:** Course thumbnails are left-aligned with text to the right, following natural reading direction.
**❌ Wrong:** Thumbnails are right-aligned with text on the left, going against standard list item conventions.
**Key fix:** Place thumbnails on the left side of list items with text to the right for standard left-to-right readability.
---

## RULE: Repetition design principle
**Chapter:** Lists
**✅ Correct:** Shopping cart items use a consistent layout with image, name, price, and remove icon in the same position for every item.
**❌ Wrong:** Cart items are presented with varying layouts — some with images, some without, inconsistent text positions.
**Key fix:** Apply a consistent layout pattern for every item in a list or cart to create predictable, scannable repetition.
---

## RULE: Provide an Other option
**Chapter:** Lists
**✅ Correct:** The survey includes an "Other" radio option with a text field that appears when selected, accommodating uncovered responses.
**❌ Wrong:** The survey lists only predefined options with no "Other" option — users whose experience isn't listed cannot respond.
**Key fix:** Always include an "Other" option with an open-text field in surveys or checkbox lists that may not cover all cases.
---

## RULE: Make content perceivable
**Chapter:** Media Use
**✅ Correct:** A video interview includes a full transcript panel alongside, making spoken content accessible to all users.
**❌ Wrong:** The video interview has no transcript or captions — spoken content is inaccessible to deaf or hard-of-hearing users.
**Key fix:** Always provide text transcripts or captions alongside video content for accessibility.
---

## RULE: Provide text transcripts
**Chapter:** Media Use
**✅ Correct:** A video includes a timed transcript panel showing speaker names and dialogue, making the content fully accessible.
**❌ Wrong:** The video shows only a view count and description with no transcript, leaving spoken content inaccessible.
**Key fix:** Provide a full text transcript alongside video content, ideally with speaker labels and timestamps.
---

## RULE: Use captions
**Chapter:** Media Use
**✅ Correct:** Subtitles appear directly on the video frame, making spoken content readable without audio.
**❌ Wrong:** The video plays without any captions or subtitles, making it inaccessible to deaf users or those watching without sound.
**Key fix:** Display captions on all video content to ensure it is accessible to users who cannot hear the audio.
---

## RULE: Allow users to pause and stop playback
**Chapter:** Media Use
**✅ Correct:** A pause button is clearly accessible within the media control bar, giving users full control over playback.
**❌ Wrong:** The video slider plays without pause controls visible on the hero, preventing users from stopping autoplay.
**Key fix:** Always provide clearly visible pause and stop controls for any media that plays automatically.
---

## RULE: Turn off Autoplay by default
**Chapter:** Media Use
**✅ Correct:** Videos in the social feed require user interaction to start playing — they do not autoplay.
**❌ Wrong:** Videos in the social feed autoplay automatically as they appear on screen, which is disruptive and consumes data.
**Key fix:** Set all media to off/paused by default — let users choose to start playback, never autoplay without consent.
---

## RULE: Don't forget video controls
**Chapter:** Media Use
**✅ Correct:** The video player displays a complete control bar with play/pause, timeline, volume, and fullscreen controls.
**❌ Wrong:** The video player shows no control bar — users can see the video is playing but have no way to control it.
**Key fix:** Always display a complete set of media controls (play, pause, seek, volume, fullscreen) for video players.
---

## RULE: Avoid autoplay
**Chapter:** Media Use
**✅ Correct:** The video element uses `autoplay="false"` ensuring the video waits for user interaction before starting.
**❌ Wrong:** The video uses `autoplay="true"` causing it to play immediately on page load without user consent.
**Key fix:** Set `autoplay="false"` on all video and audio elements to keep users in control of media playback.
---

## RULE: Use accessible media controls
**Chapter:** Media Use
**✅ Correct:** The media player includes a full control bar with labeled buttons (Mute, playback position, settings) accessible via keyboard.
**❌ Wrong:** The media player shows only a basic mute control — users have no access to playback position, volume, or other controls.
**Key fix:** Provide a complete, keyboard-accessible media control bar including play/pause, seek, volume, and mute.
---

## RULE: Allow users to pause video
**Chapter:** Media Use
**✅ Correct:** The embedded video in the sidebar has a visible pause button so users can stop the video while reading other content.
**❌ Wrong:** The embedded video autoplays with no pause control visible — users cannot stop it while consuming surrounding content.
**Key fix:** Ensure all embedded videos have a clearly accessible pause control, especially when embedded alongside other content.
---

## RULE: Include video captions when possible
**Chapter:** Media Use
**✅ Correct:** The video displays on-screen captions ("Other kinds of assistive technologies may be more familiar to you and...").
**❌ Wrong:** The video plays without any visible captions, making spoken content inaccessible.
**Key fix:** Include on-screen captions for all video content — they benefit users with hearing loss and those in noisy environments.
---

## RULE: Include audio transcripts
**Chapter:** Media Use
**✅ Correct:** The music player displays song lyrics in a scrollable panel alongside playback controls, providing a text alternative to the audio.
**❌ Wrong:** The music player shows only standard controls (play, seek, shuffle) with no lyrics or transcript panel.
**Key fix:** Include lyric or transcript panels in audio players to provide text alternatives for non-text audio content.
---

## RULE: Applying shape
**Chapter:** Media Use
**✅ Correct:** A circular play button overlays the video thumbnail in the standard position, using the universally recognized play shape.
**❌ Wrong:** A small rectangular "Play" text label is used instead of a circular play icon, which is less immediately recognizable.
**Key fix:** Use the standard circular play button shape for video thumbnails — it is universally recognized and expected.
---

BATCH3_TOTAL: 248 rules extracted
