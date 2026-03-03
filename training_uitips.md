# UI Design Tips
*Source: "UI Design Tips" by Michal Malewicz / hype4academy.com — 2022 Edition*
*Based on 500+ real-world design projects. Tips tested in actual products.*

---

## Carousels & Navigation

### Tip 1 — Use Text Tabs Instead of Carousel Dots
**Core idea:** Carousel dots provide no context about what each slide contains. Users have no reason to click them.
**How to apply:** Replace dots with text tabs that clearly label what's on each slide (e.g., "Meet my dogs", "Our trips"). Users instantly know what they'll see before clicking.
**Example:** A photo carousel with dot indicators vs. the same carousel with labeled tabs underneath.

---

## Buttons & CTAs

### Tip 2 — Avoid Vague Button Labels Like "OK" or "Next"
**Core idea:** Generic labels give users no information about what will happen when they click.
**How to apply:** Write buttons that describe the exact action that occurs. Instead of "Next", use "Create account". Instead of "OK", use the specific outcome.
**Example:** A form with a "Next" button replaced by "Create account".

### Tip 3 — Clearly Differentiate Primary from Secondary Actions
**Core idea:** When two action buttons look identical in weight, users can't tell which is the main action and which is the cancel/secondary option.
**How to apply:** Make the primary button visually dominant (filled, strong color). Make the secondary button clearly subordinate (outline or ghost style, or lower contrast).
**Example:** "Cancel" as plain text or outline, "Clear history" as a filled red destructive button.

### Tip 22 — Use Title Case for Multi-Word Buttons
**Core idea:** ALL CAPS labels on buttons take slightly longer to read because the eye loses the shape of words.
**How to apply:** For two-word or longer button labels, use Title Case (capitalize first letter of each word). Single short words are fine in any case.
**Example:** "CREATE ACCOUNT" is harder to scan than "Create account" or "Create Account".

### Tip 23 — Give Each Button Equal Safe-Area Padding
**Core idea:** When two buttons sit side by side, unequal internal padding makes the layout feel misaligned even if the content is correct.
**How to apply:** Ensure both buttons have the same horizontal padding on all sides. Avoid the safe-area overlap where buttons touch each other.
**Example:** "Cancel" and "Request" buttons with matching internal spacing look balanced.

### Tip 34 — Huge Buttons Can Cause "Banner Blindness"
**Core idea:** Extremely oversized CTAs can be mistaken for decorative banners and ignored by experienced users.
**How to apply:** Keep your primary button in the "sweet spot" size range — large enough to be obvious, not so large it looks like an ad or visual noise.
**Example:** A button that fills the full width of a card vs. a well-proportioned button below the content.

### Tip 35 — Use an Arrow on CTAs to Reinforce Desired Action
**Core idea:** Eyes naturally travel from information to action. A rightward arrow on a CTA button reinforces this direction and increases desire to click.
**How to apply:** Add a right-pointing arrow icon inside or beside your main call-to-action button to direct the eye from content toward the action.
**Example:** "Tell me more >" vs. "Tell me more" — the arrow reinforces the click.

### Tip 36 — Test Arrow CTAs — Color Variants May Not Work for All Audiences
**Core idea:** While arrows work most of the time, there are color variants and audiences for whom the arrow may be confusing rather than helpful.
**How to apply:** Always test your designs with real users. What works as a general best practice may be an outlier in your specific project.

### Tip 63 — Only the Most Important Button Gets a Strong Color and Shadow
**Core idea:** When multiple buttons appear together, giving them all strong visual treatment destroys hierarchy.
**How to apply:** Apply a full color fill and shadow only to the primary CTA. Secondary actions should be visually "less important" — outline, ghost, or plain text style.
**Example:** A "Sign in" button is bold and filled; "No account? Register!" below it is a plain text link.

---

## Typography & Fonts

### Tip 4 — Avoid Thin and Light Font Weights
**Core idea:** Thin/light fonts look stylish in mockups but are difficult to read at small sizes, especially for users with visual impairments.
**How to apply:** Use Regular, Semi-bold, or Bold weights for all body and label text. Reserve thin weights only for very large display text if at all.

### Tip 15 — Fewer Font Sizes = Faster Form Processing
**Core idea:** Using many different font sizes within a single form creates cognitive load — the eye has to process each size change.
**How to apply:** Limit your forms to as few font sizes as possible. Try to differentiate sections and actions through spacing, weight, and color rather than size changes.
**Example:** A sign-in form with 5 different font sizes feels chaotic; the same form with 2–3 sizes feels clean.

### Tip 16 — Keep Input Font Size at 16px or Above on Mobile
**Core idea:** On iOS and Android, input fields with font sizes below 16px trigger automatic zoom when tapped, distorting the layout.
**How to apply:** Set the font size of all text inputs to at least 16px. At 16px or above, the screen stays still and the view isn't distorted.
**Example:** A search field with 14px font zooms the viewport on tap; 16px does not.

### Tip 70 — Avoid Thin and Light Fonts (Dark Mode)
**Core idea:** Light font weights become ghostly and unreadable on dark backgrounds, even more so than on light ones.
**How to apply:** In dark mode, use Regular weight and above. Thin weights on dark backgrounds create too little contrast and cause eye strain.

---

## Icons

### Tip 5 — Never Mix Filled and Outlined Icons
**Core idea:** Mixing icon styles (some filled, some outlined) creates visual inconsistency and looks unpolished.
**How to apply:** Choose one icon style — either all filled or all outlined — and apply it consistently across the entire product. All icons should share the same style and form.
**Example:** A "Call" icon (filled phone) next to a "Message" icon (outlined bubble) feels inconsistent vs. both as outlined or both as filled.

### Tip 17 — Even Common Icons Can Be Misunderstood
**Core idea:** Icons that seem universally understood (like a heart for "favorite") may still be unfamiliar to less tech-savvy users.
**How to apply:** Add text labels alongside icons when designing for audiences that may not be digital-native. Don't assume icon literacy.
**Example:** A heart icon for "Favorite" on a product card — label it "Favorite" for clarity.

---

## Forms & Inputs

### Tip 6 — Give Button Labels Enough Horizontal Whitespace
**Core idea:** When a button's label is too close to the button edges, it feels cramped and is harder to read and click.
**How to apply:** The safe minimum is "x" of space on each side, where x equals the label height. 2x is better. Keep padding generous and equal on both sides.

### Tip 7 — Avoid Marking Most Fields as Required with Red Asterisks
**Core idea:** When nearly every field has a required asterisk, the asterisks lose meaning and create visual clutter.
**How to apply:** Only mark optional fields as "(optional)" or remove them entirely if they're not needed. This approach is cleaner and less intimidating.

### Tip 8 — Use Single-Column Forms Whenever Possible
**Core idea:** Multi-column forms force the eye to zigzag across the page, making them harder to scan and complete.
**How to apply:** Stack all fields in a single column. The eye moves naturally down a single column, making the form faster to complete and less error-prone.
**Example:** A two-column "First name / Last name" layout vs. a single "Name" field stacked below Email.

### Tip 9 — Increase Spacing Between Label and the Field It Belongs To
**Core idea:** When a label has the same distance to the field above it as to the field it belongs to, the visual grouping breaks. Users can't tell which label goes with which input.
**How to apply:** The distance from a label to its own field should be significantly smaller than the distance from the label to the field above it. Group tight, separate wide.

### Tip 10 — Use Rectangle Input Fields, Not Underline-Only Fields
**Core idea:** Input fields with only a bottom underline take longer to be recognized as interactive inputs compared to fields with fully visible rectangular borders.
**How to apply:** Always use inputs with visible rectangular borders (all four sides). Users instantly understand a rectangle as a fillable field.

### Tip 14 — Use Rounded Corners on Form Fields to Solve the Left-Edge Problem
**Core idea:** Sharp-cornered rectangle inputs can visually merge with surrounding content at their corners. Rounded corners create a cleaner boundary.
**How to apply:** Apply some border-radius to form fields so the corners are rounded. The label clearly sits outside the field, and the field boundary is obvious. Ensure the roundness doesn't interfere with the edge line.

### Tip 26 — Use Placeholder Text to Hint at Expected Entry Format
**Core idea:** Fields that don't show the expected input format (e.g., length, format of a zip code) leave users guessing.
**How to apply:** Use the placeholder text to show the format. For a US zip code field, show "12345" or "12345-6789" as placeholder. This sets correct expectations before the user types.
**Example:** An "Address / Zip Code" field with placeholder "XX-XXX" tells users exactly what format is expected.

### Tip 31 — Avoid Fields with Identical Visual Weight
**Core idea:** When all form fields look exactly the same in size and style, the eye struggles to distinguish sections or hierarchy within the form.
**How to apply:** Differentiate field groups through spacing, dividers, or subtle visual weight differences. Not all fields need to look identical.

### Tip 32 — Add a "Show Password" Toggle to Password Fields
**Core idea:** Users can't see what they've typed in a masked password field. This leads to typos, failed logins, and frustration.
**How to apply:** Add an eye icon or "Show" toggle inside the password field so users can reveal what they've typed before submitting.

### Tip 33 — Don't Show Password Requirements After the Button is Clicked
**Core idea:** Revealing password rules only after the user submits creates a frustrating correction loop.
**How to apply:** Show password strength/requirements inline as the user types (e.g., "Must be 8+ characters, include a special character"). Guide them through the requirements in real time.

### Tip 52 — Don't Hide Invalid Accordion Fields from View
**Core idea:** When a form uses accordions and a field inside a collapsed section is invalid, the user can't see the error.
**How to apply:** When validation runs, keep both valid and invalid fields visible simultaneously. Never hide an invalid field behind a collapsed state.

### Tip 54 — Highlight the Currently Focused (Active) Field
**Core idea:** When a form has many different kinds of fields with no visual focus indicator, users lose track of where they are.
**How to apply:** Apply a clear visual highlight to the currently focused field — a colored border, subtle background change, or glow. Make it obvious which field the cursor is in.

### Tip 55 — Don't State the Obvious with Tooltips
**Core idea:** Tooltips that explain self-evident information (e.g., "Username is your user name") waste the user's time and add noise.
**How to apply:** Skip tooltips for obvious fields. If a field truly needs explanation, place the guidance text directly below the label, always visible — not hidden in a tooltip.

### Tip 56 — Put Important Guidelines Directly Below the Field, Not in a Tooltip
**Core idea:** Hiding critical requirements (like password rules) behind a tooltip means many users will miss them.
**How to apply:** Show all important constraints and formatting rules as always-visible helper text directly below the input, not inside a hover-triggered tooltip.

---

## Error States & Messaging

### Tip 11 — Be Clear About What Went Wrong and What to Do Next
**Core idea:** Vague error messages like "Account creation failed. Unknown error 51234" leave users helpless.
**How to apply:** State exactly what went wrong in plain language, and provide a clear next step. Example: "Couldn't create account. Email is already used." followed by "Log in instead" and "or pick a different email" links.

### Tip 53 — Name All Steps in a Multi-Step Process and Make Them Clickable
**Core idea:** Vague step indicators (Step 1, Step 2, Step 3) with no labels give users no context about where they are in the process or what's coming.
**How to apply:** Name every step explicitly (e.g., "Dates", "Location / Password", "Save"). Make completed steps clickable so users can go back without losing progress.

---

## Modals & Popups

### Tip 47 — Avoid the Tiny "X" as the Only Way to Close a Popup
**Core idea:** A very small close button is nearly impossible to tap on mobile and creates frustration. If the tiny X is the only way to close, you're in trouble.
**How to apply:** Use a large, clearly tappable X with generous clickable space around it. Also consider adding other closing options: a "Thanks, go away!" button, clicking the overlay background, or a keyboard shortcut (Escape).

### Tip 48 — Provide Multiple Ways to Close a Popup
**Core idea:** Relying on a single small close button creates friction, especially on touch devices.
**How to apply:** Give users at least two obvious ways to dismiss: a large X button, an action button ("Close", "Dismiss", "Thanks, go away!"), and optionally clicking outside the modal.

---

## Layout & Visual Hierarchy

### Tip 18 — Place the Main Action on the Right in Left-to-Right Reading Cultures
**Core idea:** In LTR (left-to-right) reading cultures, the eye naturally travels left to right. Information is absorbed first, then the action comes at the end on the right.
**How to apply:** In dialog boxes and confirmation prompts, place the primary/confirm action button on the right. The cancel/secondary action goes on the left.
**Example:** "Cancel" on the left, "Retweet" (primary) on the right.

### Tip 19 — Place the Main CTA Lower on the Page for Easy Scanning
**Core idea:** When the main CTA is at the top, users must scroll back up to click it after reading content. Placing it at the bottom lets them act immediately after digesting information.
**How to apply:** Position your primary CTA at the bottom of its content block so users encounter it naturally after reading. It's slightly better for the action to be at the bottom.

### Tip 29 — Aesthetics Are Not Optional
**Core idea:** Aesthetics directly impact perceived usability. We naturally perceive well-structured visuals as more usable and trustworthy.
**How to apply:** Invest in visual quality — color, spacing, hierarchy, typography. A beautiful design sells the idea or product far more effectively than a purely functional but ugly one.

### Tip 30 — Align Checkboxes to the Top or Bottom of the First Line of Text
**Core idea:** Vertically centering a checkbox to an entire multi-line label block looks off and is harder to scan.
**How to apply:** Align the checkbox to the vertical center of the first line of text only — not the entire multi-line block. This creates a clean left edge that's easy to scan.

### Tip 39 — Use Single-Column Checkbox Lists
**Core idea:** Multi-column checkbox layouts cause the eye to jump around the grid, making it hard to track which items are selected.
**How to apply:** Always stack checkboxes in a single column. The eye moves predictably down the left edge, making scanning and selection far easier.

### Tip 43 — Emphasize the Data in Tables, Not the Labels
**Core idea:** When labels and data values have equal visual weight in a table cell, the eye doesn't know what to focus on.
**How to apply:** De-emphasize labels (smaller, lighter text) and emphasize the actual data values (larger, bolder text). The data is what the user came to see.

### Tip 67 — Use Proximity to Show Grouping (Gestalt)
**Core idea:** Elements closer together are perceived as belonging to the same group. Larger gaps signal separation between groups.
**How to apply:** Use tight spacing between items within a group and significantly larger spacing between groups. This creates hierarchy without the need for dividers or boxes.
**Example:** In a content card, a small gap separates the title from its subtitle; a large gap separates that block from the next section.

---

## Dark Mode

### Tip 68 — Lighter Elements Should Appear on Top in Dark Mode
**Core idea:** In dark mode, darker objects appear further away (deeper in depth). Lighter objects appear closer to the user.
**How to apply:** Elements that sit on top (modals, cards, top layers) should be lighter than the background, not darker. Avoid making top-layer elements darker than what they sit on.

### Tip 69 — Add a Hint of Your Primary Color to Dark Mode Greys
**Core idea:** Pure grey (#808080) backgrounds in dark mode look clinical, lifeless, and unpolished.
**How to apply:** Tint your dark mode background and surface greys with a subtle amount of your primary color. The result feels more intentional and harmonious.
**Example:** Instead of #808080 (pure grey), use a dark blue-grey like #4D4C50 that harmonizes with a blue primary color.

---

## Dropdowns & Selectors

### Tip 24 — Replace Dropdowns with Radio Buttons or Tabs When You Have 3–5 Options
**Core idea:** Dropdowns hide all options behind an extra click and a visual state change. For small option sets, this is unnecessary friction.
**How to apply:** When you have 3–5 options, replace the dropdown with visible radio buttons or segmented tabs. Users can see and select without an extra click.
**Example:** An "App theme" dropdown (Light Mode only visible) vs. radio buttons showing "Light Mode / Automatic / Dark Mode" all at once.

### Tip 25 — Avoid Dropdowns When You Have 3–5 Options (Redundant tip emphasis)
**Core idea:** Same principle reinforced — small option counts should never be hidden in a dropdown.
**How to apply:** Use visible, accessible tabs or radio buttons instead.

### Tip 37 — Add a Filter/Search Box at the Top of Long Dropdowns
**Core idea:** Alphabetically sorted lists of many items still require a lot of scrolling to find what you need.
**How to apply:** For long dropdown lists, add a type-to-filter input at the top so users can type the first few characters and narrow the list instantly. Also consider showing the most popular choices at the top.

### Tip 57 — Show the Most Popular Options at the Top of Long Lists
**Core idea:** Forcing users to scroll an alphabetical list to find common items creates unnecessary friction.
**How to apply:** Surface the most frequently chosen options at the top of the list (labeled "Most popular" or similar), then continue with the full alphabetical list below.

### Tip 58 — Use Simple Language for Sort Controls, Not Icons or Technical Words
**Core idea:** Sort icons (up/down triangles) and technical labels ("Ascending/Descending") are not intuitive for most users.
**How to apply:** Use plain language that describes the actual result: "Highest first", "Lowest first", "Newest first", "A to Z". Avoid jargon and ambiguous icons.

---

## Sliders

### Tip 59 — Show the Currently Selected Value on a Slider
**Core idea:** Sliders with no value indicator force users to guess what number they've selected.
**How to apply:** Display the current value in a tooltip or bubble directly above the slider thumb as the user drags. One option: show the value in a label that floats above the selection point.

### Tip 60 — Add a Text Input Next to the Slider for Precision
**Core idea:** Sliders are imprecise for exact values. A text field alongside allows users to type an exact number.
**How to apply:** Pair the slider with a small editable number input that updates in sync. Users who want precision can type; users who want approximate values can drag.

### Tip 61 — Range Sliders Need Two Colors and Visible Values
**Core idea:** A range slider that is all one color (like a single progress bar) doesn't clearly show the selected range.
**How to apply:** Color the selected range segment differently from the unselected track. Show both the minimum and maximum selected values as visible labels or bubbles.

---

## Tables & Data Display

### Tip 40 — Avoid Side-Scrolling Tables on Mobile
**Core idea:** Horizontal scrolling in a table on mobile is one of the worst user experiences — users miss columns, lose context, and struggle to correlate rows.
**How to apply:** For tables with 6 or more columns on mobile, switch to a "cell view" (card view) where each row becomes its own card with label-value pairs stacked vertically.

### Tip 41 — For Long Financial or Data Tables, Use Sticky Column Headers
**Core idea:** When a table is very long and users scroll down, they lose track of what each column represents.
**How to apply:** Allow users to scroll the rows but keep the column headers fixed (sticky) at the top so labels are always visible.
**Note:** Avoid cells/merged cells in very long data tables; prefer flat rows.

### Tip 42 — Right-Align Numbers in Tables, Left-Align Text
**Core idea:** Centered content in table cells creates a ragged, hard-to-scan layout. Left-aligned numbers also make comparison difficult.
**How to apply:** Left-align all text content. Right-align all numeric values. This creates natural alignment that allows users to compare numbers vertically at a glance.

### Tip 44 — Create an F-Pattern by Left-Aligning All Data in Tables
**Core idea:** When all data (labels and values) are left-aligned consistently, the eye follows a clean F-pattern that's natural and fast to scan.
**How to apply:** Left-align labels, left-align data values, and keep consistent column widths. Avoid centered cells. The resulting F-pattern is the easiest reading path.

---

## Charts & Graphs

### Tip 49 — Make Line Graph Lines Thick Enough to Read
**Core idea:** Super-thin lines in line graphs are hard to see, especially on small screens or when multiple lines overlap.
**How to apply:** Increase the stroke weight of your data lines. The data is the most important element — make it visually dominant.

### Tip 50 — Don't Show Empty Space on the Y-Axis
**Core idea:** When a line graph's Y-axis starts at 0 but all data values are clustered near the top, the chart is mostly empty space and trends are hard to see.
**How to apply:** Start the Y-axis at a value close to your minimum data point (with a little breathing room above the max). Shrink the scale to fit the data. The trend line will be much more readable.

### Tip 51 — Use Clear, Well-Spaced Tooltips on Chart Data Points
**Core idea:** Cramped, ugly tooltips on data points are hard to read and make the chart feel low-quality.
**How to apply:** Design tooltips with enough whitespace, a legible font size, and a clean container. The data value should be large and immediately readable.

---

## Empty States & Loading

### Tip 38 — Use Skeleton Screens for Loading Lists
**Core idea:** Showing a blank screen or spinner while content loads is disorienting — users don't know if anything is happening or what shape the content will take.
**How to apply:** For content types that are easy to predict (lists, cards), use a skeleton screen that mimics the layout structure with grey placeholder shapes. This communicates loading progress and reduces perceived wait time.

### Tip 45 — Never Show an Empty Screen When There's No Data
**Core idea:** An empty screen with no explanation or guidance leaves the user stranded.
**How to apply:** When there's no data to display, show a helpful empty state: explain why it's empty, and give the user a clear action they can take to populate it or fix the situation.
**Example:** "No reservations." with a "Reserve a spot" button.

### Tip 46 — Use Empty States to Spark Action and Suggest Popular Options
**Core idea:** An empty state is an opportunity to guide and convert, not just report absence.
**How to apply:** In the empty state, surface popular actions the user might want to take (e.g., "No Reservations — Quick-book one of these lessons") with actionable suggestions.

---

## Toggles & Checkboxes

### Tip 27 — Toggles on Web Should Only Control Immediate-Effect Settings
**Core idea:** Toggles communicate immediacy — flipping them should change something right now without requiring a "Save" button.
**How to apply:** On web, use toggles only for settings that take immediate effect (like "Dark Mode"). For actions that need confirmation or a form submit, use a button or checkbox instead.

### Tip 28 — Replace Clustered Toggles with Larger Checkboxes
**Core idea:** When multiple toggles are stacked close together, they're hard to distinguish and easy to mis-tap.
**How to apply:** In cases with many close-together binary choices (like a list of consent options), switch to checkboxes that are large enough to be clearly distinct and tappable.

### Tip 65 — Sorting Lists Incorrectly Can Be Catastrophic
**Core idea:** A list sorted in the wrong order (e.g., alphabetical when floors are what matter) can cause serious user errors.
**How to apply:** Always think about the best way to display and sort data for the user's task. Alphabetical is not always the right choice. A floor list should be in numeric order; a product list might be best by popularity.

### Tip 66 — Use Square Checkboxes, Not Round Ones
**Core idea:** Round checkboxes look almost identical to radio buttons, which are used for single-selection. This creates confusion about whether multiple selections are allowed.
**How to apply:** Always use square (or slightly rounded square) checkboxes for multi-select. Reserve perfectly round controls for radio buttons (single-select only).

---

## Spacing & Proximity

### Tip 12 — Keep Border Radius Values Consistent — Avoid Slightly Different Values Close Together
**Core idea:** Using roundness values that are close but not equal (e.g., 8px on one element, 10px on an adjacent one) looks like a mistake rather than intentional design.
**How to apply:** Our eye likes to travel a predictable path. Standardize your border-radius values across your design system. Elements near each other should share the same radius or differ significantly enough to be clearly intentional.

### Tip 13 — Make Click/Tap Targets Large Enough on Desktop Too
**Core idea:** Small click targets on desktop (like tiny radio buttons or checkboxes) still frustrate users even with a precise mouse.
**How to apply:** Make interactive controls generously sized on all platforms. Large controls are easier to use everywhere — desktop included.

---

## Color & Visual Style

### Tip 20 — Use Rectangular Buttons for Maximum Recognizability
**Core idea:** Non-rectangular button shapes (pills, hexagons, irregular shapes) take longer to be understood as clickable buttons.
**How to apply:** Default to rectangular (with or without modest rounded corners) button shapes. Rectangles and rounded rectangles are always the best choice for clear, universal button affordance.

### Tip 36 (color variant sub-note) — Test Colored Arrows on CTAs
**Core idea:** Arrow indicators on buttons work well in most color schemes but can be confusing in some color variants.
**How to apply:** Test your arrow CTAs across all color themes and with different audience segments.

---

## Links

### Tip 21 — Make Links Look Like Links
**Core idea:** Hyperlinks styled to look like regular inactive text (same color, no underline) are invisible to users.
**How to apply:** Always give links a visual differentiator — an underline is the most reliable, and a blue color helps further. Both together is the gold standard for link recognition.

---

## Modals & Confirmation Dialogs

### Tip 3 (revisited) — Differentiate Destructive Actions Clearly
**Core idea:** In a dialog with a "Cancel" and a destructive action (like "Clear history" or "Delete"), both buttons should not look the same.
**How to apply:** Color the destructive action red or in a high-contrast danger color. The cancel action should be visually subdued. Users must be able to tell at a glance which is safe and which is dangerous.

---

## Inner Shadows & Visual Effects

### Tip 62 — Inner Shadows Can Hurt Card Hierarchy and Readability
**Core idea:** Applying inner shadows to cards can make the card feel inset (pushed back), which reduces the sense of it being a foreground element and makes text harder to read.
**How to apply:** Avoid inner shadows on cards. However, inner shadows do work well in specific form components like text fields, where the inset look communicates "this is a fillable container."

---

## Passwords

### Tip 32 (expanded) — Priority of Information in Password Fields
**Core idea:** In a password field context, the user's most important concern (in order) is: the data they entered, then the field label, then the placeholder hint.
**How to apply:** Design the visual hierarchy accordingly: make the entered data the most prominent, the label clearly readable, and the placeholder subdued. Don't let placeholder text visually compete with entered data.

---

## Multi-Step Processes

### Tip 53 (expanded) — Make All Completed Steps Clickable in Multi-Step Flows
**Core idea:** Users who need to go back and change an earlier step should not have to start over.
**How to apply:** Completed steps in a wizard or stepper should be clickable/tappable so users can jump back to any prior step. Label each step clearly so users know what they're navigating back to.

---

## Accessibility & Readability

### Tip 4 (expanded) — Regular, Semi-Bold, and Bold Are Better for Accessibility
**Core idea:** Light and thin font weights reduce contrast and fail accessibility standards for many users.
**How to apply:** Default to Regular (400) weight for body text. Use Semi-bold (600) for labels and UI elements. Use Bold (700) for headings and emphasis. Avoid Thin (100) and Light (300) in functional UI text.

---

## Proximity & Gestalt

### Tip 67 (Gestalt Law of Proximity in Practice)
**Core idea:** Spacing communicates relationships. Elements with small gaps between them are perceived as a group. Elements with large gaps are perceived as separate.
**How to apply:** Intentionally set spacing values at two distinct scales: tight (for elements within a group) and loose (for separation between groups). This eliminates the need for heavy dividers or boxes.

---

## Summary of Meta-Principles

### Tip 64 — Design Tips Alone Are Not Enough
**Core idea:** Reading tips and knowing rules does not make you a good designer.
**How to apply:** Practice design every single day. Daily practice is what transforms knowledge into skill. Rules are a starting point, not a destination.

---

UITIPS_TOTAL: 70 tips extracted
