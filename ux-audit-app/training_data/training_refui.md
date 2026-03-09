# Refactoring UI — Adam Wathan & Steve Schoger

---

## Chapter 1: Starting from Scratch

### Start with a Feature, Not a Layout
**Core idea:** When designing a new app, don't start by designing the navigation bar, sidebar, or shell. Start with a piece of actual functionality — a specific feature.
**Why it matters:** You don't have enough information to make good navigation decisions until you've designed a few features. The shell is meaningless without content inside it. Designing the shell first means designing in the abstract.
**How to apply:** Pick a concrete feature (e.g., "search for a flight"). List the required fields and inputs. Design just that feature first. Navigation and shell decisions will become obvious once you have real content to work with.

---

### Detail Comes Later
**Core idea:** In the earliest stages of design, don't get hung up on typefaces, shadows, colors, or icons. Those are finishing-touch decisions.
**Why it matters:** High-fidelity decisions in low-fidelity stages wastes time and anchors you to surface choices before structure is solved.
**How to apply:** Design in greyscale first. Use a thick Sharpie on paper for initial concepts — it physically prevents you from obsessing over fine details. By designing without color, you're forced to use spacing, contrast, and size to create hierarchy, which produces a stronger foundation.

---

### Hold the Color (Design in Greyscale First)
**Core idea:** Resist introducing color until you have a solid greyscale layout working.
**Why it matters:** Designing in greyscale forces reliance on spacing, contrast, and size for hierarchy — making color an enhancement rather than a crutch.
**How to apply:** Get the layout, hierarchy, and spacing right in greyscale. When you add color, it will enhance an already-strong structure rather than compensate for a weak one.

---

### Don't Over-Invest in Low-Fidelity Mockups
**Core idea:** Sketches and wireframes are disposable — they're tools for exploration, not deliverables.
**Why it matters:** Users can't do anything with static mockups. The goal is to start building the real thing as soon as possible.
**How to apply:** Use sketches to quickly explore layout ideas, then move to code. Don't polish wireframes. Build the real thing early so your imagination doesn't have to do all the heavy lifting.

---

### Don't Design Too Much
**Core idea:** Don't design every single feature before moving to implementation. Build in short cycles.
**Why it matters:** Edge cases and interaction complexity are nearly impossible to figure out in the abstract. You'll discover problems you never anticipated once you build.
**How to apply:** Design a simple version of the next feature you want to build. Make it real. Iterate on the working design until problems are solved. Then jump back to design for the next feature.

---

### Work in Cycles
**Core idea:** Alternate between design mode and code mode in short sprints rather than doing all design upfront.
**Why it matters:** Building reveals design problems that wireframes hide. The feedback loop of real implementation improves both the design and the code.
**How to apply:** Design one feature simply, build it, fix the problems you find, then design the next feature. Repeat.

---

### Be a Pessimist
**Core idea:** Don't imply functionality in your designs that you aren't ready to build. Design the simplest version that can ship.
**Why it matters:** Features that look like "nice-to-haves" in a design often turn out to be a lot more work than anticipated. A comment system without attachment support is better than no comment system at all.
**How to apply:** When you want to include a feature, expect it to be hard to build. Design the minimum viable version. If something is a "nice-to-have", design it later as a separate iteration.

---

### Choose a Personality
**Core idea:** Every design has a personality. Decide deliberately what personality your design should communicate before making aesthetic decisions.
**Why it matters:** Personality shapes font choice, color, border radius, language — a banking site should feel secure and professional, a startup might want playful and energetic.
**How to apply:** Identify the personality you want (elegant, playful, serious, friendly, etc.), then pick design elements that match.

---

### Font Choice Conveys Personality
**Core idea:** Typography is one of the primary drivers of design personality.
**Why it matters:** A serif typeface communicates elegance and professionalism. A rounded sans-serif feels playful. A neutral sans-serif feels clean and modern.
**How to apply:** For elegant/classic: use a serif (e.g., Freight Text, Playfair Display). For playful: use a rounded sans-serif (e.g., Varela Round, Nunito). For neutral/professional: use a clean sans-serif (e.g., Freight Sans, Inter).

---

### Color Conveys Personality
**Core idea:** Colors carry emotional weight and communicate brand personality.
**Why it matters:** Blue is safe and familiar. Gold/amber signals sophistication and expense. Pink feels fun. Green feels natural or positive.
**How to apply:** Don't just pick a color you think looks nice in isolation — think about what feeling it communicates. Reference other sites in your space. Avoid borrowing directly from direct competitors.

---

### Border Radius Conveys Personality
**Core idea:** How much you round corners dramatically affects how a design feels.
**Why it matters:** Small/no border radius = neutral to serious/formal. Large border radius = friendly and playful. Zero border radius = most formal.
**How to apply:** Stay consistent — mixing square and rounded corners in the same interface almost always looks worse than committing to one or the other.

---

### Language Conveys Personality
**Core idea:** The words used in an interface are just as important as any visual design decision.
**Why it matters:** Formal language (e.g., "Please provide your phone number") feels stiff. Casual language (e.g., "What's your phone number?") feels friendly.
**How to apply:** Audit the copy in your interface. Match language formality to your intended personality. Friendly and casual copy can make even a visually plain design feel warm.

---

### Limit Your Choices (Design Systems Thinking)
**Core idea:** Having too many options for any design decision is paralyzing. Pre-define constrained systems.
**Why it matters:** Without systems, you waste time agonizing over imperceptibly small differences. Decision fatigue slows you down and produces inconsistent results.
**How to apply:** Define systems in advance for: font size, font weight, line height, color, margin, padding, width, height, box shadows, border radius, border width, opacity. Choose from your system instead of reaching for arbitrary values.

---

### Define Systems in Advance
**Core idea:** Instead of picking values from a limitless pool, start with a small set of options.
**Why it matters:** Hand-picking values from scratch every time leads to decisions that waste time and produce inconsistent results.
**How to apply:** For colors, choose a set of 8-10 shades ahead of time. For font sizes, define a type scale. Use these pre-defined values for all decisions. When you find yourself tweaking something by 1 pixel, that's a sign you need a system.

---

### Design by Process of Elimination
**Core idea:** When using a constrained value system, pick the option you think looks best, then compare it to the values on either side.
**Why it matters:** With a well-defined system where values are noticeably different from each other, the "best" choice usually becomes obvious because the alternatives look clearly worse.
**How to apply:** Define a sizing scale. When you need a size, guess which value looks best, then try the one above and below it. Two of the three will seem obviously wrong. The middle option is your answer.

---

### Systematize Everything
**Core idea:** Apply systems thinking to font size, font weight, line height, color, margin, padding, width, height, box shadows, border radius, and opacity.
**Why it matters:** The more systems you have in place, the faster you work and the less you second-guess your own decisions.
**How to apply:** Whenever you're making a low-level design decision for the first time, introduce a system for it. Avoid making the same minor decision twice.

---

## Chapter 2: Hierarchy is Everything

### Not All Elements Are Equal (Visual Hierarchy)
**Core idea:** Visual hierarchy is how important elements in an interface appear in relation to one another. It's the most effective tool for making something feel designed.
**Why it matters:** When everything competes for attention equally, interfaces feel noisy and chaotic. Deliberately emphasizing important elements and de-emphasizing secondary ones creates clarity.
**How to apply:** Identify the most important element on each screen. Make it the most visually prominent. De-emphasize secondary and tertiary information proportionally.

---

### Size Isn't Everything
**Core idea:** Don't rely on font size alone to create hierarchy — use font weight and color together.
**Why it matters:** Relying only on font size leads to primary content that is too large and secondary content that is too small, which hurts readability.
**How to apply:** Use two or three text colors: a dark color for primary content, a medium grey for secondary, and a light grey for tertiary (e.g., footnotes). Use two font weights: normal (400-500) for most text, heavier (600-700) for emphasis. Stay away from weights under 400 for UI work.

---

### Two-Color Text Hierarchy (Specific Values)
**Core idea:** A three-color text system covers almost all hierarchy needs.
**Why it matters:** More colors create confusion; fewer limit expressiveness.
**How to apply:**
- Primary text: dark color (near-black, e.g., hsl(220, 57%, 18%))
- Secondary text: medium grey (e.g., hsl(220, 19%, 47%))
- Tertiary text: light grey (e.g., hsl(220, 10%, 75%))

---

### Two-Weight Typography System
**Core idea:** Two font weights are usually enough for UI work.
**Why it matters:** More weights rarely add hierarchy; they add noise.
**How to apply:** Normal weight (400 or 500 depending on the font) for most text. Heavier weight (600 or 700) for text you want to emphasize. Avoid weights under 400 for UI body text — they can work for large headings but are too hard to read at smaller sizes.

---

### Don't Use Grey Text on Colored Backgrounds
**Core idea:** Making text lighter grey works on white backgrounds but fails on colored ones.
**Why it matters:** What creates hierarchy on a white background is reduced contrast. On a colored background, grey text looks faded and dull because the grey doesn't actually reduce contrast — it just looks washed out.
**How to apply:** On a colored background, don't use a grey or semi-transparent white. Instead, hand-pick a new color with the same hue as the background, then adjust saturation and lightness until contrast is reduced but the text still looks intentional and crisp (e.g., on a blue background, use a lighter blue rather than grey).

---

### Emphasize by De-Emphasizing
**Core idea:** When you can't make the primary element stand out more, make competing elements stand out less.
**Why it matters:** Sometimes there's nothing left to add to an element to give it emphasis. The solution is to reduce the visual weight of everything around it.
**How to apply:** Instead of giving an active nav item a bold color, give the inactive items a softer, less prominent color so the active item stands out by contrast. Apply this thinking to sidebars: if a sidebar feels like it's competing with the main content area, remove its background color and let it sit directly on the page background.

---

### Labels Are a Last Resort
**Core idea:** Avoid the naive "label: value" format for displaying data. Labels are often unnecessary and add visual noise.
**Why it matters:** When everything uses label-value pairs, all data has equal visual weight, making it hard to establish hierarchy.
**How to apply:** First ask if you even need a label. Email addresses, phone numbers, and prices are self-explanatory by format. When context makes the data obvious, drop the label. When you need a label, add it as clarifying text (e.g., "12 left in stock" instead of "In stock: 12").

---

### Combine Labels and Values
**Core idea:** Bake the label into the value as natural language to make it self-describing.
**Why it matters:** Separate label/value pairs give equal weight to both. Natural language phrasing allows you to style the important part prominently.
**How to apply:** Instead of "Bedrooms: 3", write "3 bedrooms". Instead of "In stock: 12", write "12 left in stock". This lets you style "12" larger and darker while "left in stock" stays small and secondary.

---

### When Labels Are Secondary
**Core idea:** When you do need a label, treat it as supporting content, not primary content.
**Why it matters:** In most UIs, the data is what matters; the label is just for clarity.
**How to apply:** De-emphasize the label: make it smaller, reduce contrast, use a lighter font weight. Style the data prominently. Exception: on technical specs pages where users scan for label names, you may want to emphasize the label instead.

---

### When to Emphasize a Label
**Core idea:** If users are scanning for the label name rather than the data, emphasize the label instead.
**Why it matters:** On pages like product technical specifications, users scan for words like "Dimensions" or "Battery Life" — the labels are what they're looking for.
**How to apply:** On info-dense technical pages, use bold or darker labels and lighter values. On data display pages (dashboards, profiles), bold the values and soften the labels.

---

### Separate Visual Hierarchy from Document Hierarchy
**Core idea:** Semantic HTML heading levels (h1-h6) and visual importance are independent concerns. Don't let semantic elements dictate visual styling.
**Why it matters:** Using an h1 for accessibility reasons doesn't mean it needs to be styled as the biggest, most prominent thing on the page. An h1 for "Manage Account" in an app sidebar is semantically correct but should probably be visually small.
**How to apply:** Style elements for visual hierarchy, not semantic rank. Section titles often act like labels — they're supporting content, not the main attraction. Make them small. Don't let the element you're using influence how you choose to style it.

---

### Balance Weight and Contrast
**Core idea:** Bold text feels emphasized because it covers more pixel surface area. This relationship means you can use contrast to compensate for weight, and weight to compensate for contrast.
**Why it matters:** Icons next to text feel heavy because they are solid and cover a lot of surface area. Thin 1px borders can feel too subtle in a soft color but too harsh when darkened. Understanding this trade-off lets you balance elements.
**How to apply:**
- Icons feel too heavy next to text: lower the icon's color contrast (use a softer color) rather than shrinking it.
- A border feels too subtle: instead of darkening it (which looks harsh), increase its width to add emphasis without changing the color.
- To de-emphasize a heavy element: reduce contrast. To emphasize a low-contrast element: increase weight.

---

### Semantics Are Secondary (Button Hierarchy)
**Core idea:** Design button styles based on their position in the hierarchy of actions, not based on their semantic meaning (e.g., "destructive" doesn't automatically mean big and red).
**Why it matters:** Treating every destructive action as a big red button creates visual noise and dilutes hierarchy. What matters most is whether the action is the primary, secondary, or tertiary action on the page.
**How to apply:**
- Primary actions: solid, high-contrast background (e.g., filled blue button)
- Secondary actions: clear but not prominent (e.g., outline or lower-contrast button)
- Tertiary actions: discoverable but unobtrusive (e.g., styled as a text link)
- Destructive actions: if not the primary action, style as secondary or tertiary. Only use the big red bold style when "Deactivate" is the primary action of a confirmation modal.

---

## Chapter 3: Layout and Spacing

### Start with Too Much White Space
**Core idea:** Start every design by giving elements way more space than you think they need, then remove space until the result feels right.
**Why it matters:** When designing for the web, white space is almost always added to a design after-the-fact, which means elements only get the minimum breathing room to not look actively bad. You need more white space than that to actually look great.
**How to apply:** Start generous. Give elements too much padding and margin. Then remove white space incrementally until the design feels appropriately dense. A design with a bit too much white space is always better than one that's too cramped.

---

### White Space Should Be Removed, Not Added
**Core idea:** Reframe your mental model: white space is not something you add; it's something you remove.
**Why it matters:** If you start with cramped elements and add white space until it "doesn't look bad", you stop too early. If you start with excessive white space and remove it, you stop at the right place — just enough.
**How to apply:** Default to adding more padding than you think is necessary. Then remove it if it feels too spacious.

---

### Dense UIs Have Their Place
**Core idea:** While generous white space almost always looks cleaner, there are situations where dense UIs make sense (e.g., dashboards where a lot of information must be visible at once).
**Why it matters:** Making something more compact to fit more information on screen is a valid, deliberate design decision — not a failure.
**How to apply:** Make the decision about density deliberately rather than by default. Dense UIs should be intentionally compact, not accidentally cramped.

---

### Establish a Spacing and Sizing System
**Core idea:** Define a constrained spacing/sizing scale before designing. Use only values from that scale.
**Why it matters:** Trialing arbitrary values one pixel at a time drastically slows design work and creates inconsistency. A well-defined scale means every size decision is fast and consistent.
**How to apply:** Use a base value (e.g., 16px) and build a scale using factors and multiples of that value. A practical scale starting from 16px: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px, 192px, 256px, 384px, 512px, 640px, 768px. Adjacent values should differ by at least 25% so choices are visually distinct.

---

### A Linear Scale Won't Work
**Core idea:** A spacing scale built on equal increments (e.g., every 4px) doesn't account for the relative significance of differences at different scale points.
**Why it matters:** Jumping from 12px to 16px is a 33% increase — very noticeable. Jumping from 500px to 504px is less than 1% — imperceptible. A useful scale needs to grow proportionally, not linearly.
**How to apply:** Build a scale where each step is noticeably larger than the previous. Use a ratio that makes adjacent values clearly distinguishable at every level of the scale (at least 25% difference between adjacent values).

---

### You Don't Have to Fill the Whole Screen
**Core idea:** Just because you have 1400px of screen real estate doesn't mean you need to use all of it.
**Why it matters:** Spreading things out unnecessarily makes interfaces harder to interpret. A focused layout at the right width almost always feels better than a stretched-out one.
**How to apply:** If a form works best at 600px, use 600px. Add whitespace around it rather than stretching it to fill the available space. Give each element just the space it needs.

---

### Shrink the Canvas
**Core idea:** If you're having trouble designing for a large canvas, design small first (e.g., start with a ~400px mobile canvas).
**Why it matters:** Constraints make design easier. When the canvas is small, every pixel matters and good design decisions become more obvious.
**How to apply:** For responsive web apps, start with the mobile layout. Once you're happy with it, scale it up. You'll often find you need to change less than you expected.

---

### Thinking in Columns
**Core idea:** If something feels unbalanced at a narrow width in a wide UI, see if you can split it into columns instead of making it wider.
**Why it matters:** Making a single-column layout wider often makes it feel stretched and harder to scan. Breaking into columns maintains the ideal content width while filling available space.
**How to apply:** For a narrow form on a wide screen, break supporting text out into a separate column alongside the form rather than stretching the form.

---

### Grids Are Overrated
**Core idea:** A strict 12-column percentage-based grid is often the wrong tool for layout.
**Why it matters:** Grids make everything fluid by default. But many elements (sidebars, cards) have natural fixed widths that make more sense. A fluid sidebar is a bad idea — it should have a fixed width.
**How to apply:** Use fixed widths for elements that have a natural size. Let the main content flex to fill remaining space. Don't use percentages unless you actually want something to scale fluidly.

---

### Not All Elements Should Be Fluid
**Core idea:** Fixed widths are often more appropriate than percentage-based widths.
**Why it matters:** A sidebar that is always 25% wide might be fine at 1000px but too narrow at 800px and way too wide at 1400px. A fixed 240px sidebar is almost always the right call.
**How to apply:** Ask whether each element actually benefits from scaling with screen size. If not, give it a fixed width. If it does need to scale, use percentages or flexbox with min/max constraints.

---

### Don't Shrink an Element Until You Need To
**Core idea:** Size elements based on their ideal size, not based on grid column math. Use max-width to cap growth, and only shrink when necessary.
**Why it matters:** A login card that should be 500px shouldn't be forced to 8 columns (66%) on medium screens — that makes it 660px when you have room. But 8 columns on large screens might only be 580px. The card ends up fluctuating when you have a perfect size in mind.
**How to apply:** Give elements a max-width at their ideal size. Let them fill available space up to that max. Only force shrinking below the ideal when screen width genuinely requires it.

---

### Relative Sizing Doesn't Scale
**Core idea:** Defining font sizes, padding, and other properties relatively (e.g., em units relative to font-size) doesn't produce consistent results across screen sizes.
**Why it matters:** The relationship between headline size and body copy that makes sense on desktop (e.g., 2.5em = 45px) produces a 35px headline on mobile when body text is reduced to 14px — which is too large for a small screen.
**How to apply:** Size elements independently for each screen size rather than defining relationships. Large elements on large screens need to shrink faster than small elements. Fine-tune sizes directly rather than relying on relative scaling.

---

### Scaling Within Components
**Core idea:** Even within a single component (like a button), don't assume internal properties like padding should scale proportionally with font size.
**Why it matters:** A button with font-size 16px and padding 12px 16px scales correctly if you simply change the font-size and padding independently. Using em-based padding that auto-adjusts causes unexpected results and removes creative control.
**How to apply:** Define button sizes with independent font-size and padding values per size variant. Large buttons get more padding proportionally than small buttons — but on purpose, not by math.

---

### Avoid Ambiguous Spacing
**Core idea:** Spacing between elements must unambiguously communicate which elements belong together.
**Why it matters:** When the space above a label equals the space below it, the label appears to float between two groups rather than belong to the one below it. Users have to work harder to interpret the layout.
**How to apply:** Always put more space between groups of elements than within a group. In form design: increase the gap between form groups and reduce the gap between a label and its input. In article design: add more space above section headings than below them. In bulleted lists: make the space between items larger than the line-height of individual items.

---

## Chapter 4: Designing Text

### Establish a Type Scale
**Core idea:** Define a restricted set of font sizes in advance, rather than picking arbitrary values for each element.
**Why it matters:** Without a system, interfaces end up with 10+ different font sizes from 10px to 24px, all slightly different from each other, creating visual inconsistency.
**How to apply:** Pick a practical hand-crafted scale (not a mathematical modular scale, which produces fractional values). A good starting scale: 12px, 14px, 16px, 18px, 20px, 24px, 30px, 36px, 48px, 60px, 72px. Use only these sizes. Don't use em units in your type scale (nested elements produce unexpected computed values).

---

### Avoid em Units in Type Scales
**Core idea:** Build your type scale using px or rem units, not em.
**Why it matters:** em is relative to the current font-size. Inside a nested element, 1em is no longer the base font size — it's the parent's font size. This makes a "type scale" meaningless because the computed value depends on nesting context.
**How to apply:** Use px or rem for all type scale values. rem is relative to the root font size (not the parent), making it safe for type scales. px values are the most explicit and predictable.

---

### Use Good Fonts
**Core idea:** Not all typefaces are equal. Learn to distinguish quality typefaces quickly.
**Why it matters:** Bad typefaces make professional designs look amateur. There are simple tricks for identifying quality without years of training.
**How to apply:**
1. Play it safe: use a neutral sans-serif (system font stack or Inter, Helvetica) when in doubt.
2. Ignore typefaces with fewer than 5 weights — they're usually lower quality.
3. Filter by popularity on Google Fonts — popularity signals quality.
4. Avoid condensed typefaces with short x-heights for body text.
5. Study well-designed sites and inspect their font-family.

---

### System Font Stack as a Safe Fallback
**Core idea:** When in doubt about font choice, use the system font stack.
**Why it matters:** System fonts (SF Pro on macOS/iOS, Segoe UI on Windows, Roboto on Android) are exceptionally well-designed and instantly familiar to users.
**How to apply:** Use: `-apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue` as your font-family fallback. It won't be the most ambitious choice, but users will always be used to seeing it.

---

### Optimize for Legibility
**Core idea:** Fonts designed for headlines have tighter letter-spacing and shorter x-heights. Fonts designed for small sizes have wider letter-spacing and taller x-heights. Mixing them causes problems.
**Why it matters:** Using a headline font at body sizes, or a body font at headline sizes, produces text that looks wrong even if you can't explain why.
**How to apply:** Choose fonts appropriate for their intended use case. If you want a narrow, tight headline feel for body text, compensate with looser letter-spacing.

---

### Keep Your Line Length in Check
**Core idea:** For the best reading experience, keep paragraph line lengths between 45 and 75 characters per line.
**Why it matters:** Lines that are too long make it hard for the reader's eye to find the next line when jumping back to the left edge. Lines that are too short cause jarring line breaks and a choppy reading rhythm.
**How to apply:** Set a max-width of 20-35em (em units relative to current font size) on paragraph containers. This automatically adjusts for font size. Don't let a paragraph expand to fill a full-width layout container just because it can.

---

### Dealing with Wider Content
**Core idea:** When mixing paragraph text with wider elements (images, charts), limit the paragraph width while letting other content be wider.
**Why it matters:** Paragraph readability and layout width are independent concerns.
**How to apply:** Set `max-width` on paragraph elements independently of the containing element's width. You might set `max-width: 34em` on paragraphs while the overall content area is 800px wide.

---

### Baseline, Not Center (Mixed Font Size Alignment)
**Core idea:** When mixing different font sizes on the same line, align them by their baseline, not by vertical center.
**Why it matters:** Center-aligning two different font sizes creates an awkward offset where the smaller text appears too high or too low. Baseline alignment feels natural because your eyes already perceive text baselines.
**How to apply:** Use `align-items: baseline` (not `center`) in flexbox when mixing font sizes on a single line. This produces a simpler, cleaner look.

---

### Line-Height Is Proportional
**Core idea:** Line-height is not a fixed value — it should vary based on both line length and font size.
**Why it matters:** The purpose of line-height is to help readers find the next line when text wraps. Short content needs less line-height. Long content needs more. Large text (already easy to follow) needs less. Small text needs more.
**How to apply:**
- Narrow content (short lines): line-height 1.5 is often sufficient.
- Wide content (long lines): line-height up to 2 may be needed.
- Large headline text: line-height of 1 is often perfect.
- Body text (16-18px): line-height 1.5-1.75 is usually right.
- Font-size and line-height are inversely proportional: smaller text needs taller line-height, larger text needs shorter line-height.

---

### Not Every Link Needs a Color
**Core idea:** In interfaces where most text is links (navigation, media feeds), coloring links the standard blue can look overwhelming and over-emphasized.
**Why it matters:** Link color is a device for making links stand out in blocks of non-link text. When almost everything is a link, that treatment is counterproductive.
**How to apply:** For links embedded in blocks of non-link text: color them and/or use a heavier font weight. For links in interface elements where users expect everything to be clickable: use a slightly heavier weight or darker color on hover only. Some links can even be underline-only on hover.

---

### Align with Readability in Mind
**Core idea:** Text alignment should match natural reading direction and content type.
**Why it matters:** Center-aligned text looks great for short, independent blocks. It becomes hard to read when applied to multi-line paragraphs because the ragged start edge makes it hard to find the beginning of each line.
**How to apply:**
- Left-align most text (especially paragraphs and form labels).
- Center-align short, independent blocks (headlines, CTAs, short feature descriptions of 1-2 lines).
- Right-align numbers in tables so decimal points align vertically.
- Never center-align long blocks of text (more than 2-3 lines).

---

### Right-Align Numbers in Tables
**Core idea:** Numeric columns in tables should be right-aligned.
**Why it matters:** Right-aligning ensures decimal points and digit positions align vertically, making columns much easier to compare at a glance.
**How to apply:** Apply `text-align: right` to all numeric table columns. Left-align text columns.

---

### Hyphenate Justified Text
**Core idea:** Justified text requires hyphenation to avoid awkward gaps between words.
**Why it matters:** Justification forces the browser to space words unevenly. Without hyphenation, some lines develop large, ugly gaps.
**How to apply:** If you use `text-align: justify`, also use `hyphens: auto`. Justified text without hyphenation is almost always worse than left-aligned text.

---

### Use Letter-Spacing Effectively
**Core idea:** Letter-spacing is a subtle but powerful typographic tool with specific appropriate use cases.
**Why it matters:** Most of the time, type designers have already optimized letter-spacing for their font. But specific use cases benefit from adjustment.
**How to apply:**
- Tighten letter-spacing on headlines (especially large ones displayed with a UI font designed for body text): reduces `letter-spacing` by -0.05em or so.
- Widen letter-spacing on all-caps text: all-caps has fewer distinguishing characteristics between letters, so wider spacing (0.05-0.1em) improves readability.
- Never widen body text letter-spacing in an attempt to make a headline font work at body size — headline fonts rarely work well at small sizes even with wider spacing.

---

## Chapter 5: Working with Color

### Ditch Hex for HSL
**Core idea:** Use HSL color notation instead of hex or RGB for defining and manipulating colors.
**Why it matters:** Hex and RGB encode color in a way that has no relationship to how humans perceive color. Two hex values that look similar visually might be numerically very different. HSL (Hue, Saturation, Lightness) maps directly to perceptual attributes.
**How to apply:** Write colors as `hsl(220, 90%, 56%)`. Hue (0-360 degrees on the color wheel), Saturation (0% = grey, 100% = vivid), Lightness (0% = black, 100% = white). When you want a lighter version of a color, increase lightness. When you want a less saturated version, decrease saturation. HSL makes these relationships explicit.

---

### HSL vs HSB
**Core idea:** HSL and HSB (brightness) are different. In HSL, 100% lightness is always white. In HSB, 100% brightness is only white when saturation is 0%.
**Why it matters:** Confusing the two leads to unexpected color results. Design tools often use HSB; browsers use HSL.
**How to apply:** If you're designing for the web, use HSL in your code. Be aware that your design tool may display HSB. For web work, HSL should be your primary color model.

---

### You Need More Colors Than You Think
**Core idea:** A website's color palette needs far more shades than the five colors most palette generators produce.
**Why it matters:** A real UI requires greys for text, backgrounds, panels, borders; primary colors for actions, links, active states; accent colors for semantic states (warnings, errors, success). You'll need 5-10 shades each of your primary color, greys, and each accent color.
**How to apply:** Plan for three categories of colors:
1. Greys: 8-10 shades from near-black to near-white.
2. Primary color: 5-10 shades from very dark to very light.
3. Accent colors: 5-10 shades each for red (errors/destructive), yellow (warnings), green (success/positive), plus any other accent colors needed to distinguish elements like graph lines or category tags.

---

### Define Your Shades Up Front
**Core idea:** Pre-define a fixed set of color shades for each color before you start designing, rather than generating shades on-the-fly with CSS functions.
**Why it matters:** Using `lighten()` or `darken()` functions creates 35 slightly different blues that all look the same. Defining shades up front gives you a controlled palette with meaningful, distinguishable steps.
**How to apply:**
1. Pick your base color (the one that would make a good button background).
2. Pick your darkest shade (for text on light backgrounds).
3. Pick your lightest shade (for tinted backgrounds/alerts).
4. Use a naming convention: shade 100 (lightest) through 900 (darkest), with 500 as the base.
5. Fill in gaps: pick 700 and 300 first, then fill 800, 600, 400, 200, making sure each step is noticeably different.

---

### Choose the Base Color First
**Core idea:** When building a color scale, start with the middle shade (the one that works well as a button background), then establish the extremes.
**Why it matters:** The middle shade is the one most used for interactive elements. Designing from the middle outward ensures the most important shade is calibrated first.
**How to apply:** Pick a base color that works as a button background. Pick the darkest shade (for text). Pick the lightest shade (for tinted alert/badge backgrounds). Fill in 7-8 steps between.

---

### Don't Let Lightness Kill Your Saturation
**Core idea:** In HSL, as colors approach 0% or 100% lightness, the same saturation value looks less saturated than it does at 50% lightness.
**Why it matters:** Lighter and darker shades of a color built by only adjusting lightness look washed out because the saturation's perceived impact diminishes at the extremes.
**How to apply:** Increase saturation as lightness moves away from 50%. Very light shades need higher saturation to maintain vibrancy. Very dark shades also need higher saturation to avoid looking muddy.

---

### Use Perceived Brightness to Your Advantage
**Core idea:** Every hue has a different perceived brightness. Yellow is perceived as much brighter than blue at the same HSL lightness value.
**Why it matters:** The perceived brightness formula (using RGB components: √(0.299r² + 0.587g² + 0.114b²) / 255) reveals that yellow, cyan, and green are inherently bright; blue, purple, and magenta are inherently dark.
**How to apply:** When creating lighter or darker shades, adjust hue as well as lightness. To lighten: rotate hue toward the nearest bright hue (60°, 180°, 300°). To darken: rotate hue toward the nearest dark hue (0°, 120°, 240°). This creates richer, more vivid palettes especially for inherently-dark colors like purple or blue.

---

### Changing Brightness by Rotating Hue
**Core idea:** Instead of only adjusting HSL lightness, also rotate the hue toward inherently brighter or darker hues to create more vivid shade ranges.
**Why it matters:** Simply adjusting lightness on a color like yellow (inherently bright) produces dull, brownish dark shades. Rotating toward orange/brown when darkening produces richer, more intentional dark shades.
**How to apply:** For a yellow color: lighter shades stay yellow or rotate toward green. Darker shades rotate toward orange/amber. This produces a far richer palette than pure lightness adjustments.

---

### Greys Don't Have to Be Grey
**Core idea:** Saturating greys with a small amount of color gives them warmth or coolness that makes interfaces feel more intentional.
**Why it matters:** True neutral greys (0% saturation) can look sterile and lifeless in an interface. Slightly saturated greys feel considered.
**How to apply:** For cool greys: add a small amount of blue hue (e.g., hsl(209, 18%, X%)). For warm greys: add a small amount of yellow/orange hue (e.g., hsl(41, 12%, X%)). Match the grey temperature to your primary color for cohesion.

---

### Color Temperature in Greys
**Core idea:** Grey saturation creates emotional temperature — cool greys feel tech/modern; warm greys feel natural/cozy.
**Why it matters:** The temperature of greys interacts with the rest of the color palette. Mismatched temperatures (cool primary with warm greys) feel disjointed.
**How to apply:** If your primary color is blue, cool your greys with a blue hue. If your primary is orange or amber, warm your greys. Maintain temperature consistency across your entire grey scale.

---

### Accessible Doesn't Have to Mean Ugly
**Core idea:** Meeting WCAG contrast requirements doesn't require sacrificing aesthetic design.
**Why it matters:** Many designers treat accessibility as a constraint that forces ugly, high-contrast choices. In reality, compliant designs can be beautiful.
**How to apply:**
- Normal text (under 18px): minimum 4.5:1 contrast ratio.
- Large text (18px+ regular or 14px+ bold): minimum 3:1 contrast ratio.
- When using colored text on colored backgrounds, "flip the contrast": instead of light text on dark background, use dark text on a very light tinted background of the same color.

---

### Flipping the Contrast
**Core idea:** Instead of light text on a dark colored background, use dark text on a light colored background of the same hue.
**Why it matters:** Light text on a dark background requires very specific and precise color choices to meet 4.5:1 contrast while still looking intentional. Dark text on a light background is much easier to keep accessible while still feeling colorful.
**How to apply:** For a status badge on a colored background: instead of white text on dark green, use dark green text on a very light green background. The color communicates the semantic meaning; the contrast is easy to maintain.

---

### Rotating the Hue for Accessible Colored Text
**Core idea:** When you need colored text on a colored background and simply adjusting lightness/saturation doesn't get you to 4.5:1 contrast, try rotating the hue toward a brighter color.
**Why it matters:** Increasing contrast by moving toward white loses color. Moving toward a brighter hue (e.g., cyan or magenta) can increase perceived brightness and therefore contrast while keeping the text colorful.
**How to apply:** If blue text on a dark blue background can't hit contrast ratio, rotate the text color hue toward cyan. The text stays colorful while gaining contrast against the dark background.

---

### Don't Rely on Color Alone
**Core idea:** Color should enhance communication, not be the only means of communication.
**Why it matters:** Approximately 8% of men have red-green color blindness. Interfaces that use only color to distinguish states (e.g., red line = down, green line = up on a graph) will be unintelligible to those users.
**How to apply:** Always pair color with at least one other signal:
- Graphs: use different line styles (solid vs dashed) in addition to color.
- Status indicators: use icons (up arrow, down arrow) in addition to color.
- Alert messages: use bold text or icons in addition to a colored background.
- Form validation: use a text message and/or icon in addition to a red border.

---

## Chapter 6: Creating Depth

### Emulate a Light Source
**Core idea:** Depth in UI design is created by mimicking how light behaves in the real world — light comes from above, so the tops of raised elements are lighter and the bottoms are darker.
**Why it matters:** UI elements that simulate real-world lighting feel tangible and intuitive. Flat elements without lighting cues feel arbitrary.
**How to apply:** To make an element feel raised: lighten the top edge (or add a top highlight border/inset shadow), darken or add a small shadow below it. To make an element feel inset/recessed: darken the top edge, lighten the bottom edge.

---

### Raised Elements
**Core idea:** A raised element (like a button) gets a slightly lighter top edge to simulate reflected light from above, and a small dark shadow below to simulate the shadow cast onto the surface beneath it.
**Why it matters:** Without these cues, elements look flat and feel less interactive.
**How to apply:** For a raised button:
1. Add a subtle top border or inset box shadow in a slightly lighter version of the button color: `box-shadow: inset 0 1px 0 hsl(224, 84%, 74%)`
2. Add a small drop shadow below: `box-shadow: 0 1px 3px hsl(0, 0%, 0%, 0.2)`
3. Don't use semi-transparent white for the highlight — it sucks saturation from the underlying color. Hand-pick a lighter shade of the button color.

---

### Inset Elements
**Core idea:** Inset elements (wells, text inputs, drop zones) get a dark shadow at the top and are lighter at the bottom.
**Why it matters:** Inset elements feel recessed into the page. The shadow at the top simulates the lip of the container blocking light from above.
**How to apply:** For an inset element: `box-shadow: inset 0 2px 4px hsl(0, 0%, 0%, 0.06)` plus a slight positive vertical offset ensures the shadow appears at the top and doesn't poke through the bottom.

---

### Use Shadows to Convey Elevation
**Core idea:** Shadows are more than decoration — they communicate an element's position on the virtual z-axis and attract focus.
**Why it matters:** The closer an element appears to the user, the more attention it draws. Small shadows = slightly elevated. Large shadows = much closer to the user (like a modal).
**How to apply:** Define a shadow system with 5 levels:
- Level 1 (smallest): `0 1px 3px hsla(0, 0%, 0%, 0.12)` — slightly raised (e.g., card)
- Level 2: `0 4px 6px hsla(0, 0%, 0%, 0.12)` — more raised (e.g., dropdown)
- Level 3: `0 10px 15px hsla(0, 0%, 0%, 0.1)` — floating (e.g., sticky header)
- Level 4: `0 20px 25px hsla(0, 0%, 0%, 0.1)` — high elevation (e.g., toast)
- Level 5 (largest): `0 25px 50px hsla(0, 0%, 0%, 0.25)` — modal dialog

---

### Establish an Elevation System
**Core idea:** Just like color and typography, define a fixed set of shadows in advance rather than picking shadow values arbitrarily.
**Why it matters:** Consistent shadows reinforce hierarchy. Random shadow values create visual noise.
**How to apply:** Define 5 shadow levels from smallest to largest. Assign each level to a class of UI elements. Use this system consistently throughout the application.

---

### Combining Shadows with Interaction
**Core idea:** Use shadow changes to communicate element state during interaction.
**Why it matters:** When a user clicks a draggable item, a larger shadow makes it feel like it's lifted. When they click a button, removing the shadow makes it feel pressed.
**How to apply:** On click/press: reduce the element's shadow level or remove it entirely. On drag: increase the shadow level. This gives users a satisfying physical metaphor for their interactions.

---

### Shadows Can Have Two Parts
**Core idea:** The most natural-looking shadows are actually composed of two shadows layered together.
**Why it matters:** Real objects cast two shadows: a large diffuse shadow from ambient light and a tight darker shadow directly underneath from the direct light source.
**How to apply:** Layer two shadows:
1. The direct light shadow: `0 4px 6px hsla(0, 0%, 0%, 0.07)` — larger, softer, more vertical offset.
2. The ambient light shadow: `0 2px 4px hsla(0, 0%, 0%, 0.06)` — smaller, sharper, tighter.
At lower elevations the ambient shadow is visible; at higher elevations it disappears (at high elevation, ambient light reaches underneath the object).

---

### Even Flat Designs Can Have Depth
**Core idea:** "Flat design" doesn't mean depth-free design. Depth can be created with color differences and solid shadows.
**Why it matters:** Flat designs without any depth cues feel two-dimensional and less polished. The best flat designs still convey a sense of layering.
**How to apply:**
1. Creating depth with color: lighter elements feel closer; darker elements feel further away (opposite of shadow-based depth). Make interactive elements lighter than the page background to make them feel raised.
2. Solid shadows: use a shadow with 0 blur radius — `box-shadow: 0 3px 0 hsla(0, 0%, 0%, 0.8)` — creates a 3D effect without gradients.

---

### Overlap Elements to Create Layers
**Core idea:** Having elements cross the boundaries of their containers creates a sense of depth and layering.
**Why it matters:** When every element is neatly contained within its parent, the layout feels flat. Overlapping elements suggest physical layers.
**How to apply:** Let a card extend slightly beyond a section's top edge (negative margin-top). Have a hero image element overflow its container. Position avatars to overlap each other. Use negative margins or position: absolute with offsets to create intentional overlaps.

---

### Invisible Borders for Overlapping Images
**Core idea:** When images overlap each other, add an invisible border (matching the background color) to prevent colors from clashing at the boundary.
**Why it matters:** Without a gap between overlapping images, the edges merge and look messy.
**How to apply:** `border: 2px solid white` (or the background color) on avatars or images that overlap creates a visible gap without looking like an actual border.

---

## Chapter 7: Working with Images

### Use Good Photos
**Core idea:** Bad photography ruins a design, even if everything else about it is excellent.
**Why it matters:** The quality of photography communicates the quality of the product. Amateur or low-quality stock photos undermine trust and professionalism.
**How to apply:** Use a professional photographer for specific shots. For generic needs, use high-quality stock photography (Unsplash for free options). Never design with placeholder images expecting to swap them — the final images will not look like the placeholders.

---

### Text Needs Consistent Contrast
**Core idea:** When placing text over an image, you cannot control image contrast at specific areas, so you need additional techniques to guarantee legibility.
**Why it matters:** Photos have light and dark areas. White text disappears in light areas; dark text disappears in dark areas. There's no single text color that works on a dynamic photo.
**How to apply:** Use one of these techniques:
1. Add a semi-transparent overlay over the image (dark overlay for white text, light overlay for dark text). `background-color: hsla(0, 0%, 0%, 0.5)`
2. Lower the image contrast AND adjust brightness: `filter: brightness(40%) contrast(-70%)`
3. Colorize the image: lower contrast, desaturate, apply a solid color fill using multiply blend mode.
4. Add a text shadow: `text-shadow: 0 0 50px hsla(0, 0%, 0%, 0.4)` — use large blur radius, no offset, for a subtle glow rather than a harsh shadow.

---

### Everything Has an Intended Size
**Core idea:** Icons and images have a size they were designed for. Using them outside that range degrades quality or appearance.
**Why it matters:** An icon drawn at 16-24px looks chunky and amateurish when blown up to 48px. Scaling down a full-app screenshot to 30% of its size creates an unreadable image.
**How to apply:**
- Icons: use them at or near their intended size. For larger spaces, enclose a small icon inside a colored shape to fill the space, rather than scaling up the icon.
- Screenshots: use a smaller-screen screenshot (tablet/phone) rather than scaling down a desktop screenshot. Or take a partial screenshot of a focused area. Or create a simplified illustrated version of the UI.
- Don't scale icons down either — icons designed for 48px look fuzzy and choppy at 16px.

---

### Beware User-Uploaded Content
**Core idea:** When users upload their own images, you lose control over dimensions, colors, and quality — take steps to protect your layout.
**Why it matters:** User avatars and photos come in any aspect ratio, color scheme, or quality. Without constraints, they break your layout.
**How to apply:**
1. Control shape: display all user images inside fixed containers with `background-size: cover` to crop to a consistent shape regardless of original dimensions.
2. Prevent background bleed: when a user uploads an image with a color similar to your background, the image loses definition. Add an inner box shadow: `box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 0.1)` — creates a subtle inset border that prevents blending without looking like an actual border.
3. Use a semi-transparent inner border instead of a solid one — it adapts to any image color.

---

## Chapter 8: Finishing Touches

### Supercharge the Defaults
**Core idea:** Elevate standard UI elements by replacing default browser/framework styles with something more designed.
**Why it matters:** Default HTML elements (bullets, checkboxes, links) all look generic and browser-default. Small enhancements make the whole UI feel more polished.
**How to apply:**
- Replace bullet points with icons (checkmarks, shields, arrows) that are more visually meaningful.
- Testimonial quotes: use large decorative quotation marks as visual elements (enlarged, colored differently).
- Links: use custom underlines — thick, colorful, partially overlapping the text baseline.
- Checkboxes and radio buttons: replace with custom styled versions using your brand color for selected state.

---

### Add Color with Accent Borders
**Core idea:** Use a colorful accent border/stripe on an otherwise plain element to add visual interest without designing illustrations.
**Why it matters:** It's an easy way to add a branded visual touch to cards, alerts, nav items, or section headers without requiring graphic design skills.
**How to apply:**
- Across the top of a card: `border-top: 4px solid hsl(220, 90%, 56%)`
- Left side of an alert/callout: `border-left: 4px solid hsl(220, 90%, 56%)`
- Under an active nav item: a short underline accent in a brand color.
- Across the top of the entire page layout: a thin brand-color stripe at the very top of the viewport.

---

### Decorate Your Backgrounds
**Core idea:** Add visual interest to backgrounds using color, gradients, patterns, or geometric shapes rather than leaving them plain white.
**Why it matters:** Plain white backgrounds can make an interface feel flat and incomplete. Background decoration adds depth and visual richness.
**How to apply:**
- Change background color: use a dark or colored background for a card or section to make it stand out.
- Gradients: a subtle two-hue gradient (no more than 30° apart on the color wheel) adds depth.
- Repeating patterns: very subtle tile patterns (from Hero Patterns, etc.) with low-contrast patterns add texture.
- Simple shapes/illustrations: geometric shapes or simple illustrations placed in the background at low opacity.
- Keep contrast low between background and pattern — you don't want to interfere with content readability.

---

### Don't Overlook Empty States
**Core idea:** Design empty states intentionally — they are the first thing new users see when they encounter a feature.
**Why it matters:** A plain "No contacts found" message with no visual treatment is a missed opportunity. The empty state is the feature's first impression.
**How to apply:** Add an illustration or icon to grab attention. Emphasize the call-to-action — the "Add your first contact" button should be prominent, not an afterthought. Consider hiding complex UI chrome (tabs, filters, bulk actions) in the empty state since those elements are meaningless without content.

---

### Use Fewer Borders
**Core idea:** When you need to separate elements, reach for alternatives to borders before adding another line.
**Why it matters:** Too many borders make a design feel cluttered and visually noisy.
**How to apply:** Use one of these border alternatives:
1. Box shadow: `box-shadow: 0 5px 15px hsla(0, 0%, 0%, 0.15)` — outlines an element subtly without a hard edge.
2. Two different background colors: adjacent elements with slightly different backgrounds create distinction without any visible line.
3. Extra spacing: increasing the margin between groups of elements creates clear separation without visual noise.

---

### Add Extra Spacing Instead of Borders
**Core idea:** White space is often a better separator than a border.
**Why it matters:** Adding a margin between groups creates clear, quiet separation. Borders add a visual element that competes for attention.
**How to apply:** Instead of adding a `border-bottom` to list items, simply increase the `margin-bottom` between them. The space creates the grouping without adding lines.

---

### Think Outside the Box
**Core idea:** Don't let preconceived notions of how UI components "should" look limit your design decisions. Break conventions intentionally.
**Why it matters:** The most interesting and effective UIs often challenge default component expectations.
**How to apply:**
- Dropdowns don't have to be plain lists — add icons, descriptions, supporting text, multiple columns.
- Tables don't have to have one data point per column — combine related columns (e.g., name + role) to introduce hierarchy within the row.
- Radio buttons don't have to be boring circles — replace with selectable cards that show more information.
- Always ask: "Does this component need to look like the default browser element, or can I design something more appropriate?"

---

## Chapter 9: Leveling Up

### Look for Decisions You Wouldn't Have Made
**Core idea:** Train your design eye by asking, of every design you admire: "What did the designer do here that I never would have thought to do?"
**Why it matters:** Most design improvement comes from expanding your vocabulary of techniques — learning solutions to problems you didn't know existed.
**How to apply:** When you see a design you like, study it carefully. Try to articulate the specific decisions:
- The background color on an unexpected element.
- The letter-spacing on uppercase labels.
- The way a button is positioned inside an input.
- The two different font colors in a single headline.
Write down what you notice. These observations become tools in your toolkit.

---

### Rebuild Your Favorite Interfaces
**Core idea:** The best way to internalize the decisions in a polished design is to recreate it from scratch — without looking at the developer tools.
**Why it matters:** Actually building a design forces you to make the same decisions the original designer made. When your version doesn't match, you discover specific gaps in your technique.
**How to apply:** Find a well-designed interface. Try to recreate it as faithfully as possible without inspecting the code. When your version differs, identify specifically what's different: the line-height, the letter-spacing, the number of box shadows, the exact font sizes. These are the techniques you're adding to your repertoire.

---

## Cross-Cutting Principles (Applied Throughout)

### Visual Hierarchy is the Foundation of Good Design
**Core idea:** The #1 most effective thing you can do to make any design better is to establish clear visual hierarchy.
**Why it matters:** Without hierarchy, everything feels equally important. Nothing stands out. The design looks "noisy" even if individual elements look fine.
**How to apply:** For every screen, identify: what is the most important thing? Make it the most visually prominent. What is secondary? Make it clearly less prominent. What is tertiary? Make it barely noticeable. Then check: does anything that shouldn't be prominent accidentally steal focus?

---

### Design Is Not Styling
**Core idea:** "Making things look good" is not the same as design. Good design is about making the right decisions — about hierarchy, spacing, and color — that serve communication.
**Why it matters:** Designers who focus only on aesthetics produce designs that look fancy but are hard to use. The best-looking designs are also the ones that communicate most clearly.
**How to apply:** Every visual decision should serve a purpose: this is emphasized because it's important; this is de-emphasized because it's secondary; this spacing creates grouping; this color communicates a semantic state.

---

### Trust Your Eyes, Not the Numbers
**Core idea:** Visual design requires calibration by eye. Numbers (percentages, exact pixel values) are starting points, not final answers.
**Why it matters:** Colors with identical HSL values can look dramatically different in different contexts. A mathematically "equal" spacing can look wrong in a specific layout.
**How to apply:** Use systems and numbers to get close, then calibrate by looking. If a shade looks too washed out even though its saturation is mathematically correct, trust your eye and adjust.

---

REFUI_TOTAL: 97 insights extracted
