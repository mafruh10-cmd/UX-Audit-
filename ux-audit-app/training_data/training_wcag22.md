# WCAG 2.2 — Web Content Accessibility Guidelines
## Source: https://www.w3.org/TR/WCAG22/

---

## Four Principles (POUR)

**Perceivable** — Information and UI components must be presentable to users in ways they can perceive.
**Operable** — UI components and navigation must be operable.
**Understandable** — Content and operation must be understandable.
**Robust** — Content must be interpreted reliably by assistive technologies.

---

## Principle 1: Perceivable

### Guideline 1.1 — Text Alternatives
**Core idea:** Provide text alternatives for all non-text content.

- **1.1.1 Non-text Content (A)** — All images, icons, and non-text UI elements must have descriptive alt text. Controls need names describing purpose. Decorative images use empty alt="".

### Guideline 1.2 — Time-based Media
**Core idea:** Provide alternatives for audio/video.

- **1.2.1 Audio-only and Video-only Prerecorded (A)** — Provide transcript for audio-only; text or audio description for video-only.
- **1.2.2 Captions Prerecorded (A)** — Captions required for all prerecorded audio in video.
- **1.2.3 Audio Description or Media Alternative Prerecorded (A)** — Audio description or full text alternative for prerecorded video.
- **1.2.4 Captions Live (AA)** — Live video must include real-time captions.
- **1.2.5 Audio Description Prerecorded (AA)** — Audio description required for all prerecorded video.

### Guideline 1.3 — Adaptable
**Core idea:** Create content that can be presented in different ways without losing information.

- **1.3.1 Info and Relationships (A)** — Structure conveyed visually (headings, lists, tables) must be programmatically determinable via semantic HTML or ARIA.
- **1.3.2 Meaningful Sequence (A)** — Reading/tab order must be logical and match visual order.
- **1.3.3 Sensory Characteristics (A)** — Instructions must not rely solely on shape, color, size, or position (e.g. "click the round button" is a fail).
- **1.3.4 Orientation (AA)** — Content must not lock to portrait or landscape unless essential.
- **1.3.5 Identify Input Purpose (AA)** — Autocomplete attributes must be used on personal data fields (name, email, phone, address).

### Guideline 1.4 — Distinguishable
**Core idea:** Make content easier to see and hear.

- **1.4.1 Use of Color (A)** — Color must not be the only way to convey information (e.g. error fields need more than just a red border).
- **1.4.2 Audio Control (A)** — Auto-playing audio over 3 seconds must be pausable or stoppable.
- **1.4.3 Contrast Minimum (AA)** — Normal text: 4.5:1 ratio. Large text (18pt/14pt bold): 3:1 ratio. Inactive UI and logos exempt.
- **1.4.4 Resize Text (AA)** — Text must be resizable to 200% without loss of content or function.
- **1.4.5 Images of Text (AA)** — Use real text, not images of text, unless essential (logo).
- **1.4.10 Reflow (AA)** — Content must work at 320px width without horizontal scrolling.
- **1.4.11 Non-text Contrast (AA)** — UI components (buttons, inputs, icons) and graphical objects: 3:1 contrast against adjacent colors.
- **1.4.12 Text Spacing (AA)** — No loss of content if user adjusts: line-height ≥1.5, paragraph spacing ≥2x, letter-spacing ≥0.12em, word-spacing ≥0.16em.
- **1.4.13 Content on Hover or Focus (AA)** — Tooltips/popovers triggered by hover must be: dismissible (Esc), hoverable (pointer can move over it), persistent (stays until dismissed).

---

## Principle 2: Operable

### Guideline 2.1 — Keyboard Accessible
**Core idea:** All functionality must work with a keyboard alone.

- **2.1.1 Keyboard (A)** — Every interactive element (buttons, links, forms, modals) must be reachable and operable via keyboard. No mouse-only interactions.
- **2.1.2 No Keyboard Trap (A)** — Users must be able to navigate away from any component using keyboard alone (Tab/Shift+Tab/Esc).
- **2.1.4 Character Key Shortcuts (A)** — Single-key shortcuts must be remappable, disableable, or only active on focus.

### Guideline 2.2 — Enough Time
**Core idea:** Give users enough time to read and use content.

- **2.2.1 Timing Adjustable (A)** — Time limits must be adjustable (turn off, extend, or adjust to at least 10x default).
- **2.2.2 Pause Stop Hide (A)** — Auto-updating/moving content lasting 5+ seconds must have pause/stop/hide control.

### Guideline 2.3 — Seizures and Physical Reactions
**Core idea:** Prevent seizure-triggering content.

- **2.3.1 Three Flashes (A)** — Nothing on screen flashes more than 3 times per second.

### Guideline 2.4 — Navigable
**Core idea:** Help users navigate and find content.

- **2.4.1 Bypass Blocks (A)** — Skip navigation link required to bypass repeated blocks (nav, header).
- **2.4.2 Page Titled (A)** — Every page must have a meaningful `<title>`.
- **2.4.3 Focus Order (A)** — Tab order must follow logical reading sequence.
- **2.4.4 Link Purpose in Context (A)** — Link text must make sense alone or with its surrounding context. Avoid "click here", "read more".
- **2.4.5 Multiple Ways (AA)** — Multiple ways to find pages: search, sitemap, navigation.
- **2.4.6 Headings and Labels (AA)** — Headings and form labels must be descriptive.
- **2.4.7 Focus Visible (AA)** — Keyboard focus indicator must be visible (no outline:none without replacement).
- **2.4.11 Focus Not Obscured Minimum (AA)** — Focused components must not be completely hidden by sticky headers, overlays, or cookie banners.

### Guideline 2.5 — Input Modalities
**Core idea:** Support different input types beyond keyboard.

- **2.5.1 Pointer Gestures (A)** — Multi-point gestures (pinch, swipe) must have single-pointer alternatives.
- **2.5.2 Pointer Cancellation (A)** — Click actions trigger on release (up-event), not press, so users can cancel by dragging away.
- **2.5.3 Label in Name (A)** — The accessible name of a control must contain its visible label text.
- **2.5.4 Motion Actuation (A)** — Shake/tilt gestures must have UI alternatives and be disableable.
- **2.5.7 Dragging Movements (AA)** — Drag-and-drop must have a single-pointer alternative.
- **2.5.8 Target Size Minimum (AA)** — Touch targets must be at least 24×24 CSS pixels, or have sufficient spacing.

---

## Principle 3: Understandable

### Guideline 3.1 — Readable
**Core idea:** Make text readable and understandable.

- **3.1.1 Language of Page (A)** — `<html lang="en">` must be set correctly.
- **3.1.2 Language of Parts (AA)** — Language changes within page must be marked with `lang` attribute.

### Guideline 3.2 — Predictable
**Core idea:** Pages behave in expected ways.

- **3.2.1 On Focus (A)** — Focusing an element must not trigger unexpected context changes (no auto-submit on focus).
- **3.2.2 On Input (A)** — Changing a form field must not auto-submit or redirect without warning.
- **3.2.3 Consistent Navigation (AA)** — Navigation order must be consistent across pages.
- **3.2.4 Consistent Identification (AA)** — Same functionality must be identified consistently (same icon/label across pages).
- **3.2.5 Change on Request (AA)** — Context changes only happen when user requests them.
- **3.2.6 Consistent Help (A)** — Help links/mechanisms appear in consistent location across pages.

### Guideline 3.3 — Input Assistance
**Core idea:** Help users avoid and correct mistakes.

- **3.3.1 Error Identification (A)** — Errors must be identified in text, not just color. "Email is required" not just a red border.
- **3.3.2 Labels or Instructions (A)** — All form inputs must have visible labels and format instructions.
- **3.3.3 Error Suggestion (AA)** — If error is detected and fix is known, suggest correction.
- **3.3.4 Error Prevention Legal Financial Data (AA)** — Submissions must be reversible, reviewed, or confirmed.
- **3.3.7 Redundant Entry (A)** — Don't ask users to re-enter information already provided in the same session.
- **3.3.8 Accessible Authentication Minimum (AA)** — Login must not require solving puzzles or recognizing objects. Copy-paste must be allowed for passwords.

---

## Principle 4: Robust

### Guideline 4.1 — Compatible
**Core idea:** Maximize compatibility with assistive technologies.

- **4.1.2 Name Role Value (A)** — All UI components must have accessible name, role, and state. Use semantic HTML or ARIA. Buttons must be `<button>`, not `<div onclick>`.
- **4.1.3 Status Messages (AA)** — Status messages (success, error, loading) must be programmatically determinable without receiving focus (use `role="status"`, `aria-live`).

---

## Common Visual Accessibility Fails (Detectable from Screenshots)

**Contrast failures:**
- Text on colored backgrounds with insufficient contrast (< 4.5:1 for normal text)
- Placeholder text that is too light
- Disabled-looking but active UI elements
- Ghost buttons with thin borders on light backgrounds

**Color-only information:**
- Error states shown only with red color, no icon or text label
- Required fields marked only with color
- Charts/graphs without text labels or patterns

**Touch target failures:**
- Buttons or links smaller than 24×24px
- Tightly packed clickable elements with no spacing
- Icon-only buttons without labels

**Form accessibility failures:**
- Inputs without visible labels (placeholder-only is a fail)
- No error messages in text
- Password fields without show/hide toggle
- No autocomplete on personal data fields

**Focus and keyboard failures:**
- Missing visible focus indicator (outline removed)
- Focused elements obscured by sticky nav or floating elements
- Non-semantic interactive elements (div used as button)

**Structure failures:**
- Missing page title
- Heading hierarchy skipped (h1 → h3, no h2)
- Images without alt text
- Links with non-descriptive text ("click here", "more")

---

## Key Principle for UX Auditing

✅ WCAG 2.2 adds to 2.1: Focus Not Obscured (2.4.11), Dragging Movements (2.5.7), Target Size Minimum (2.5.8), Accessible Authentication (3.3.8, 3.3.9), Redundant Entry (3.3.7), Consistent Help (3.2.6).
✅ Level A = must have. Level AA = industry standard (legal compliance). Level AAA = best practice.
✅ Most real-world compliance targets WCAG 2.2 Level AA.
✅ Visual inspection can catch: contrast, touch targets, color-only info, missing labels, focus indicators, heading structure, images of text.
