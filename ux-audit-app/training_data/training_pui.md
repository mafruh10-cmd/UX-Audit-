# Practical UI
*by Adham Dannaway — Quick and practical UI design guidelines to design intuitive, accessible, and beautiful interfaces.*

---

## Introduction

### UI Design Doesn't Have to Be Hard
**Core idea:** There is a manageable set of principles that underlie most good UI decisions. Mastering them eliminates the need to guess or copy blindly.
**Why it matters:** Many designers struggle because they lack a logical framework, not because they lack talent.
**UX implication:** Learn the "why" behind every guideline. A principle you understand you can adapt; a rule you merely memorised will break when context changes.
---

### UI vs UX
**Core idea:** UI is the visual layer of a digital product. UX is the overall experience — how easy and pleasant it is to use. Both must be considered together.
**Why it matters:** A beautiful UI with poor UX is frustrating. Good UX with poor UI looks untrustworthy.
**UX implication:** Treat every visual decision as a functional one. Ask: does this layout help the user accomplish their goal faster?
---

### Only What You Need to Know
**Core idea:** You do not need to know everything about design to create good interfaces. A focused, practical set of guidelines delivers most of the value.
**Why it matters:** Decision fatigue is real. Fewer, stronger guidelines outperform hundreds of vague rules.
**UX implication:** Keep a short personal design checklist. Use it on every screen before shipping.
---

---

## Chapter 1 — Fundamentals

### Minimise Usability Risks
**Core idea:** Every design detail on an interface increases the risk that a person won't understand or use it correctly. Risk compounds across every element on screen.
**Why it matters:** Small usability failures accumulate into an experience that feels confusing or untrustworthy.
**UX implication:** Before adding anything to a screen, ask: does this reduce the chance a user gets confused or stuck? If not, reconsider it.
---

### Have a Logical Reason for Every Design Detail
**Core idea:** Every element — spacing, colour, size, border, shadow — must have a reason behind it.
**Why it matters:** Decoration without purpose creates visual noise and slows decisions.
**UX implication:** When reviewing a design, be able to verbally justify every choice. If you can't explain it, remove it or replace it with something intentional.
---

### Minimise Interaction Cost
**Core idea:** Interaction cost is the sum of effort — physical and mental — required to use an interface. The goal is always to reduce it.
**Why it matters:** High interaction cost leads to abandonment and frustration.
**UX implication:** Reduce clicks, scrolling, reading, and memory load. Move important elements closer, auto-fill where possible, reduce form fields to the minimum.
---

### Have a Paired Action for Every Action (Interaction Cost Example)
**Core idea:** When a user takes an action (e.g. opens a panel), always make it easy to reverse or exit it without needing to find a separate control.
**Why it matters:** Trapped states are a major source of user frustration.
**UX implication:** Every "open" needs a "close," every "add" needs a "remove," every destructive action needs an undo.
---

### Reduce Distractions
**Core idea:** Anything on screen that isn't contributing to the user's current task is a distraction.
**Why it matters:** Attention is finite. Every distraction reduces the quality of focus on the primary action.
**UX implication:** Remove decorative elements, reduce animation, keep secondary navigation out of primary task flows. Use whitespace to let the important thing breathe.
---

### Minimise Cognitive Load
**Core idea:** Cognitive load is the mental effort required to use an interface. When it's too high, people make mistakes, slow down, or leave.
**Why it matters:** Even smart, motivated users abandon high-cognitive-load interfaces.
**UX implication:** Break information into digestible chunks. Use progressive disclosure. Show only what the user needs right now. Eliminate jargon. Use familiar patterns. Group related information.
**Practical tactics to reduce cognitive load:**
- Use familiar patterns users already know
- Break large tasks into smaller steps
- Minimise the number of choices displayed simultaneously
- Remove unnecessary information from the current view
- Use clear labelling and plain language
- Make UI states (loading, error, success) obvious
---

### Create a Design System
**Core idea:** A design system is a library of reusable components, styles, and usage guidelines that enables consistent, fast design decisions.
**Why it matters:** Without a system, every new screen starts from scratch, creating inconsistency and wasted time.
**UX implication:** Start by establishing: (1) colour palette, (2) typography scale, (3) spacing system, (4) component library, and (5) usage guidelines.
---

### 1. Set Predefined Style Options
**Core idea:** Rather than choosing from infinite options, constrain yourself to a predefined set of colours, type sizes, and spacing values.
**Why it matters:** Constraints drive consistency and speed. A predefined palette means every new screen draws from the same vocabulary.
**UX implication:** Define your colour palette (primary, secondary, neutral, semantic) and lock in 4–6 type sizes and a spacing scale before designing screens.
---

### Spacing Options (Design System)
**Core idea:** Create a limited set of spacing values — e.g., multiples of 4px or 8px — and use only those.
**Why it matters:** Consistent spacing creates visual rhythm and makes layouts feel intentional.
**UX implication:** Use a scale like 4, 8, 12, 16, 24, 32, 48, 64px. Never use arbitrary pixel values like 11px or 23px.
---

### 2. Create Reusable Modules
**Core idea:** Build components not pages. A design system should consist of modular building blocks that can be combined and reused.
**Why it matters:** Modularity reduces design and development time and ensures consistency.
**UX implication:** Design cards, buttons, inputs, navbars, and modals as standalone components with clear states (default, hover, active, disabled, error).
---

### Define Usage Guidelines
**Core idea:** Beyond building components, document when and how to use them.
**Why it matters:** Without guidelines, components get used incorrectly, undermining consistency.
**UX implication:** For every component, specify: primary use case, when to use variants, and what to avoid.
---

### Ensure an Interface is Accessible
**Core idea:** Accessibility means designing so that people with disabilities — visual, motor, cognitive — can use the interface.
**Why it matters:** 15-20% of people have some form of disability. Inaccessible interfaces exclude them and expose you to legal risk.
**UX implication:** Test with screen readers, keyboard navigation, and colour-contrast checkers. Follow WCAG 2.1 AA as a baseline.
---

### Good Accessibility Benefits Everyone
**Core idea:** Accessible design typically improves usability for all users, not just those with disabilities.
**Why it matters:** High contrast aids users in bright sunlight. Large touch targets help anyone using a phone one-handed.
**UX implication:** Treat accessibility as a design quality metric, not an afterthought. Great accessibility = great usability.
---

### Good Accessibility is Good for Business
**Core idea:** Accessible products reach a larger market, carry legal protection, and often rank better in search results.
**Why it matters:** The business case for accessibility is straightforward and compelling.
**UX implication:** Build accessibility checks into your design review process alongside visual quality reviews.
---

### Screen Readers
**Core idea:** Screen readers convert on-screen content to audio or braille. Users navigate by headings, landmarks, and labels — not visually.
**Why it matters:** If your interface only makes sense visually (with spatial layout or colour), screen reader users will not be able to use it.
**UX implication:** Use semantic HTML, provide alt text for images, label all form fields, and ensure logical heading hierarchy. Test with VoiceOver or NVDA.
---

### Assistive Technology
**Core idea:** Beyond screen readers, users rely on keyboard navigation, switch access, voice control, and magnification.
**Why it matters:** A diverse set of access needs requires designing with a range of input methods in mind.
**UX implication:** Ensure all interactive elements are keyboard-focusable and have visible focus states. Never rely solely on hover interactions.
---

### Use Common Design Patterns
**Core idea:** Familiar UI patterns (e.g., hamburger menus, card grids, sticky nav) reduce the learning curve because users already know how they work.
**Why it matters:** Novel patterns require users to learn new interaction models, increasing cognitive load and the risk of errors.
**UX implication:** Prefer established patterns. Only deviate when you have a compelling, research-backed reason — and then make the new pattern extremely obvious.
---

### Use the 80/20 Rule to Prioritise
**Core idea:** 80% of users use 20% of features. Identify and optimise the features most people use most of the time.
**Why it matters:** Designing equally for all features dilutes focus and clutters the interface.
**UX implication:** Use analytics or research to find the top 20% of use cases. Give those paths the clearest hierarchy, shortest paths, and most prominent placement.
*Key stats: 80% of Office features are used by only 20% of users; 80% of consumer complaints involve 20% of problems; 80% of revenue comes from 20% of customers.*
---

### Be Consistent
**Core idea:** Consistency within a product — and across similar products — reduces learning time and errors.
**Why it matters:** Each inconsistency is a micro-decision users must make. Multiply that across a session and the cognitive load becomes significant.
**UX implication:** Follow platform conventions (iOS HIG, Material Design). Use the same labels for the same actions everywhere. Align button styles, heading sizes, and component spacing across all screens.
---

### Keep Costs in Mind
**Core idea:** Design decisions have real development costs. Simpler designs cost less to build and maintain.
**Why it matters:** A design that can't be built or takes 10x the time to build is a bad design decision regardless of how beautiful it looks.
**UX implication:** Develop a working knowledge of frontend complexity. Favour components your team already has. Discuss feasibility early in the design process.
---

### Remove Unnecessary Information
**Core idea:** Every piece of information on a screen competes for attention. Remove anything that doesn't directly help the user complete their current task.
**Why it matters:** Removing unnecessary content makes everything that remains more prominent and easier to process.
**UX implication:** Audit each screen and ask "what happens if we remove this?" If the answer is "nothing bad," remove it.
---

### Style Trends Fade
**Core idea:** Trendy design choices (glassmorphism, neumorphism, extreme gradients) become dated quickly.
**Why it matters:** Designs built on trends require costly refreshes and can feel unprofessional as the trend passes.
**UX implication:** Build on solid, functional principles. Use timeless patterns for structure. Trend-driven details can be added sparingly as accents but should never undermine clarity.
---

### Be Consistent with Other Products
**Core idea:** Consistency not just within your product but with the broader ecosystem (platform norms, competitor conventions) reduces onboarding friction.
**Why it matters:** Users carry mental models from other apps into yours.
**UX implication:** Study leading apps in your category. Adopt their naming conventions, navigation patterns, and interaction paradigms unless you have a strong reason not to.
---

### Less is More
**Core idea:** Simpler interfaces are almost always better than complex ones. Every addition increases the risk of confusion.
**Why it matters:** Complexity is cumulative. Each unnecessary element slightly degrades the whole.
**UX implication:** Before adding a feature or element, ask: "Is this essential?" Default to removing or hiding anything non-essential.
---

### Remove Unnecessary Styles
**Core idea:** Avoid adding visual styles (borders, backgrounds, dividers, shadows) that don't add meaning or structure.
**Why it matters:** Decorative styles create noise and make meaningful structure harder to perceive.
**UX implication:** Question every border, line, and background colour. Use whitespace to separate sections before reaching for dividers or boxes.
---

### Not All Links Need to Be Underlined
**Core idea:** Underlines on links are a convention for inline body text, but not all clickable elements need them. Context, affordance, and contrast can signal interactivity.
**Why it matters:** Unnecessary underlines add visual noise in navigation and button contexts.
**UX implication:** Use underlines for inline links in body text. Use other affordances (colour, hover states, button styles) for navigation and action links. Always ensure sufficient contrast so links are distinguishable.
---

### Use Progressive Disclosure
**Core idea:** Show only the information people need right now. Reveal additional information when needed.
**Why it matters:** Showing everything at once overwhelms users and buries the key message.
**UX implication:** Use accordions, modals, tooltips, tabs, and "Show more" patterns to surface secondary information only when requested. Keep default views minimal.
---

### Don't Confuse Minimalism with Simplicity
**Core idea:** Minimalism is a visual aesthetic. Simplicity is about reducing complexity. A visually minimal design can still be functionally complex.
**Why it matters:** Stripping out important information in the name of minimalism worsens usability.
**UX implication:** Simplify function first, then simplify visuals. Never remove information that users actually need in order to look minimal.
---

### Design for the Smallest Screen First
**Core idea:** Design mobile-first to ensure content and functionality are prioritised from the start.
**Why it matters:** Mobile constraints force ruthless prioritisation. Features that work on mobile tend to work better on desktop too.
**UX implication:** Start all layouts at 375px width. Add elements as screen size increases, never subtract from a desktop design for mobile.
---

### Break Up Choices to Speed Decision-Making
**Core idea:** Too many options in a single view slow decision-making and increase abandonment.
**Why it matters:** Hick's Law: the time to make a decision increases logarithmically with the number of options.
**UX implication:** Limit visible choices to 5-7 items maximum in any selection context. Use filtering, categorisation, or multi-step flows for larger option sets.
---

### 1. Remove Choices
**Core idea:** The best way to simplify a decision is to remove options that aren't necessary.
**Why it matters:** Every choice costs user attention and time.
**UX implication:** Audit dropdowns and selection screens. Remove options that are rarely chosen. Pre-select the most common option.
---

### 2. Group or Categorise Choices
**Core idea:** When many options exist, group them into labelled categories to make scanning faster.
**Why it matters:** Chunking reduces the perceived complexity of large option sets.
**UX implication:** Use category headers in long lists and menus. For e-commerce and app navigation, group by user mental model, not internal taxonomy.
---

### 3. Break Choices into Multiple Steps
**Core idea:** Spread a complex decision across multiple screens or steps to reduce per-step cognitive load.
**Why it matters:** A 3-step flow with 3 options each (9 total) feels easier than one screen with all 9 options.
**UX implication:** Use wizards and step-by-step flows for complex tasks like checkout, onboarding, and configuration.
---

### 4. Recommend Choices
**Core idea:** Highlight a recommended or "most popular" option to guide indecisive users.
**Why it matters:** A recommendation reduces decision paralysis and increases conversion.
**UX implication:** Label a pricing tier as "Most popular" or "Best value." Pre-select the recommended option in settings screens.
---

---

## Chapter 2 — Colour

### Ensure Sufficient Contrast
**Core idea:** Text and interactive elements must have sufficient contrast against their background to be readable by people with low vision.
**Why it matters:** Low contrast is one of the most common accessibility failures and affects a significant portion of users.
**UX implication:** Use the WCAG 2.1 guidelines: 4.5:1 for normal text, 3:1 for large text and UI components. Tools: Stark, Colour Contrast Analyser, browser DevTools.
---

### An Improved Way to Measure Contrast (APCA)
**Core idea:** APCA (Advanced Perceptual Contrast Algorithm) is a more perceptually accurate way to measure text contrast than the older WCAG formula.
**Why it matters:** WCAG 2.x contrast ratios can produce counterintuitive results — sometimes approving low-legibility combinations and rejecting high-legibility ones.
**UX implication:** Supplement WCAG checks with APCA for a more accurate assessment of real-world legibility. Both tools are available in Figma plugins and online checkers.
---

### The Nivara Ratio
**Core idea:** Nikita Prokopov (aka tonsky) recommends aiming for at least 60 on the APCA Lc scale for body text.
**Why it matters:** The APCA scale better models human perception of contrast, producing designs that are both accessible and visually pleasant.
**UX implication:** Use an APCA checker when evaluating text on coloured backgrounds, particularly for medium-weight text at small sizes.
*APCA guidelines:*
- 90 Lc — for fluent, body-level reading
- 75 Lc — for most content text
- 60 Lc — for non-content text like labels
- 45 Lc — minimum for large text headings
- 30 Lc — minimum for very large decorative text
---

### Don't Rely on Colour Alone to Convey Meaning
**Core idea:** Colour alone should never be the only way meaning is communicated (e.g., red = error, green = success). Use icons, labels, or patterns too.
**Why it matters:** 8% of men and 0.5% of women have colour blindness. Many environments reduce colour fidelity (sunlight, low-quality displays).
**UX implication:** Always pair colour with a second signal — an icon, a text label, or a shape change. Never use red/green as the only differentiator for status.
---

### Use System Colours to Indicate Status
**Core idea:** Use conventional colour semantics: red = error/danger, amber/yellow = warning, green = success, blue = information/neutral.
**Why it matters:** Violating colour conventions increases cognitive load and causes errors.
**UX implication:** Stick to semantic colour conventions for alerts, validation states, and status indicators. Define these in your design system.
---

### Use Colour to Define a Clear Visual Hierarchy
**Core idea:** Use colour strategically to draw the eye to the most important element first, then secondary, then tertiary.
**Why it matters:** Without colour hierarchy, all elements compete equally for attention.
**UX implication:** Give your primary CTA the highest-contrast colour. Use muted or grey tones for secondary actions and supporting text.
---

### Saturation
**Core idea:** Saturation is the intensity of a colour. Highly saturated colours are vivid; desaturated colours are muted and grey.
**Why it matters:** Using highly saturated colours for everything creates visual chaos. Desaturated tones provide rest and context for the saturated accents.
**UX implication:** Use high saturation sparingly — for primary CTAs, key highlights, and brand moments. Use low-saturation neutrals for backgrounds, body text, and secondary UI.
---

### Understand Light and Dark Interfaces
**Core idea:** Light interfaces use light backgrounds with dark text. Dark interfaces use dark backgrounds with light text. Both have appropriate use cases.
**Why it matters:** The choice affects readability, perceived tone, battery consumption (OLED), and accessibility.
**UX implication:** Choose your base mode intentionally based on the product's context (health/medical = light; developer tools = dark). Support both modes when possible.
---

### Use Black and White for a Timeless Aesthetic
**Core idea:** Black and white is a classic, high-contrast palette that works for nearly any product type.
**Why it matters:** It's always in style, always accessible, and focuses attention on content and functionality.
**UX implication:** Start with black and white before introducing brand colours. This ensures hierarchy and layout work independently of colour.
---

### Add a Tinge of Colour to Black and White
**Core idea:** Pure black (#000000) and pure white (#FFFFFF) can feel harsh. Tinting them with a subtle hue creates warmth or cohesion with your brand.
**Why it matters:** Pure black text on pure white is extremely high contrast and can cause visual fatigue in long reading sessions.
**UX implication:** Use near-black (e.g., #1a1a2e or #111827) for text and near-white (e.g., #f8f9fa) for backgrounds. Tint both in the direction of your primary brand colour.
---

### Avoid Pure Black
**Core idea:** Pure black (#000000) is rarely found in nature and can feel harsh on digital screens. Very dark greys are more natural-feeling.
**Why it matters:** Dark grey text on white reads better and feels less aggressive than pure black.
**UX implication:** Use #1a1a1a to #333333 for primary text. Reserve true black for logos or display typography where maximum contrast is intentional.
---

### Use 1 Brand Colour
**Core idea:** Select a single primary brand colour and use it consistently for the most important interactive elements.
**Why it matters:** Multiple brand colours dilute impact and create confusion about which colour means "primary action."
**UX implication:** One strong primary colour for CTAs, links, and key highlights. Derive secondary tones (light, dark, muted) from that one colour.
---

### Colour Psychology Isn't Universal
**Core idea:** Colour meaning varies across cultures. Red means luck in China, danger in Western countries.
**Why it matters:** If your product has a global or multicultural audience, relying on colour semantics can communicate unintended messages.
**UX implication:** When designing for diverse markets, test colour meanings. Don't assume universality. Always pair colour with text labels.
---

### Apply the Brand Colour to Interactive Elements
**Core idea:** The primary brand colour should be consistently applied to clickable elements — buttons, links, toggles — and nothing else.
**Why it matters:** Consistency trains users to associate that colour with interactivity. Using it for decorative purposes breaks the convention.
**UX implication:** Never use your primary brand colour on decorative illustrations, section dividers, or purely aesthetic elements. Reserve it for affordance.
---

### Ensure Sufficient Colour in Dark Interfaces
**Core idea:** In dark mode, finding a primary colour that remains accessible against dark backgrounds requires care. Many light-mode brand colours become too bright or low-contrast in dark mode.
**Why it matters:** A colour that passes contrast on white may fail on dark grey.
**UX implication:** Test your primary colour on your dark background using a contrast checker. You may need a slightly adjusted hue or lightness for dark mode.
---

### What About Low Contrast Colours?
**Core idea:** Some brand colours (e.g., yellow, light green) are inherently low contrast on white backgrounds.
**Why it matters:** Using them for text or button labels will fail accessibility requirements.
**UX implication:** For low-contrast brand colours, use them as fills on dark text buttons, or as background highlights with dark text on top. Never use yellow/lime text on white.
---

### Create a Monochromatic Colour Palette
**Core idea:** A monochromatic palette uses variations in lightness and saturation of a single hue.
**Why it matters:** Monochromatic palettes are cohesive, elegant, and easy to manage.
**UX implication:** Create 5–9 tints and shades of your primary hue. Assign lightest for backgrounds, mid-tones for UI elements, darkest for text and borders.
---

### Use the HSB Colour System
**Core idea:** HSB (Hue, Saturation, Brightness) is a more intuitive colour model for designers than RGB or hex.
**Why it matters:** Working in HSB makes it easier to create harmonious palettes by adjusting one dimension at a time.
**UX implication:** Build your palette in HSB. To create a lighter tint, increase brightness and decrease saturation. To create a darker shade, decrease brightness.
*Key HSB relationships:*
- Saturation: A value near 0% is desaturated (grey); 100% is most vivid
- Brightness: Near 0% is darkest (black); 100% is lightest
- For dark palettes: Keep saturation low and vary brightness only slightly
---

### Test Your Colour Palette
**Core idea:** Palettes must be tested in context — on actual UI components — not just shown as colour swatches.
**Why it matters:** A palette that looks balanced as swatches may look garish or low-contrast when applied to real screens.
**UX implication:** Apply your palette to a real screen (or a representative component) before finalising it. Check all text/background combinations for contrast.
---

### If the Brand Colour has Meaning, Consider Using the Darkest Variation for Button Text
**Core idea:** When using a coloured button with coloured text, the darkest variant of the brand colour for text maximises contrast while maintaining colour harmony.
**Why it matters:** White or black text on coloured buttons always works, but using a dark variant of the same hue is more visually refined when contrast is sufficient.
**UX implication:** For yellow, gold, or other light brand colours, use the darkest shade (e.g., deep amber) as the button label colour instead of pure black.
---

### Create a Light Colour Palette with Rules
**Core idea:** Light palettes need: sufficient contrast for text, enough differentiation between background levels, and a primary accent that stands out.
**Why it matters:** Without rules, light palettes end up looking washed out or inconsistent.
**UX implication:** Use 3-4 background levels (white, light grey, slightly darker grey), a mid-grey for borders, dark grey for secondary text, near-black for primary text. Test 4.5:1 contrast for body text.
*Light palette rules:*
- Primary text: contrast ratio at least 7:1 against background
- Secondary text: at least 4.5:1
- Border/dividers: at least 3:1
- Background levels: visibly differentiated without being garish
- Dark variants: build from your primary hue for buttons
---

### Create a Dark Colour Palette with Rules
**Core idea:** Dark palettes need careful attention to layering — dark surfaces need subtle differentiation without becoming grey mud.
**Why it matters:** Dark mode done badly looks flat and strains the eyes. Done well, it reduces eye strain in low-light environments.
**UX implication:** Use 3-4 dark surface levels (darkest for page background, slightly lighter for cards, lighter still for elevated surfaces). Keep primary text near-white. Use desaturated versions of brand colour for accents.
*Dark palette rules:*
- Background: 4.5:1 minimum for text contrast
- Surface hierarchy: subtle elevation through slight brightness increases
- Avoid pure white text on pure black — use off-white (#e2e8f0 equivalent)
- Accent colour: may need to be slightly lighter than light-mode version
---

### If the Brand Colour is Dark, Use White for Button Text Instead of the Darkest Variation
**Core idea:** Dark brand colours on dark buttons should use white text for maximum legibility.
**Why it matters:** Using dark text on a dark button creates insufficient contrast.
**UX implication:** Check your button colour against both white and dark text. Use whichever achieves 4.5:1 or better.
---

### Adjust Photo Colour Temperature to Match the Chosen Palette
**Core idea:** Photos have inherent colour temperatures (warm/cool). When photos clash with your UI palette, the design looks disjointed.
**Why it matters:** Colour temperature mismatch between images and UI creates visual dissonance.
**UX implication:** In design tools, adjust photo colour temperature to lean toward your palette's tone. Warm palette = warm photos. Cool palette = cool photos. In CSS, use backdrop filter or overlay tints to harmonise.
---

---

## Chapter 3 — Layout and Spacing

### Group Related Elements
**Core idea:** Elements that are related should be placed near each other. Unrelated elements should be separated.
**Why it matters:** Proximity is one of the Gestalt principles. We instinctively group things that are close together.
**UX implication:** Use spacing to communicate structure. Tighten space within a group; increase space between groups. Don't use borders when spacing can do the job.
---

### 1. Place Related Elements in the Same Container
**Core idea:** Beyond proximity, use containment (cards, panels, sections) to group related content.
**Why it matters:** Containers create hard visual boundaries when content groups are complex or need separation from their surroundings.
**UX implication:** Cards and panels are appropriate when groups need to be scannable independently or moved/sorted. Avoid over-boxing — not every group needs a container.
---

### 2. Space Related Elements Close Together
**Core idea:** Reduce the gap between elements that belong together. A label and its input, an icon and its label, a heading and its body text.
**Why it matters:** Large gaps between related elements break perceived grouping, making the UI harder to parse.
**UX implication:** Labels should be close to their fields. Caption text should be immediately below the image. Navigation items should be tighter than the gap between sections.
---

### Make Related Elements Look Similar
**Core idea:** Beyond proximity, visual similarity (same size, same colour, same shape) groups elements perceptually.
**Why it matters:** Gestalt similarity principle: elements that look alike are perceived as belonging together.
**UX implication:** Use consistent card sizes, icon weights, and text styles within a group. Vary styles only to communicate a hierarchy difference, not for decoration.
---

### Ensure Similar-Looking Elements Function Similarly
**Core idea:** Elements that look the same must behave the same. Inconsistent behaviour in visually similar elements causes errors and erodes trust.
**Why it matters:** Users build mental models from visual similarity. Breaking those models causes confusion and forces re-learning.
**UX implication:** If two cards look identical, they should respond to the same interactions. If one is clickable and one isn't, they need to look different.
---

### Align Related Elements in a Continuous Line
**Core idea:** Use alignment to reinforce grouping. Elements in a row or column should share a common axis.
**Why it matters:** Alignment creates order and guides the eye efficiently across a layout.
**UX implication:** Grid systems enforce alignment automatically. Outside the grid, manually align edges or centres. Never position elements "close enough."
---

### Grouping Methods Example
**Core idea:** The three main grouping methods — proximity, similarity, and containment — are often used in combination on the same screen.
**Why it matters:** Each method has situations where it works better than the others.
**UX implication:** Use proximity as the default. Add similarity when proximity alone is insufficient. Add containment when you need a hard visual boundary or the group needs to scroll independently.
---

### Create a Clear Visual Hierarchy
**Core idea:** Every screen should have a single most-important element, a secondary level, and supporting elements. The eye should naturally move through this order.
**Why it matters:** Without hierarchy, all elements compete and the screen becomes a wall of information.
**UX implication:** Use font size, weight, colour, and spacing to create at least 3 visual levels: dominant (hero/headline), important (sub-heading, primary CTA), supporting (body, secondary actions).
*Hierarchy tools: Colour (hue and saturation), Contrast (lightness difference), Spacing (larger = more important), Scale (bigger = more important), Depth (shadow and elevation).*
---

### Practical Steps to Improve Visual Hierarchy
1. Identify the single most important element on the screen. Make it unmistakably dominant.
2. Identify secondary elements. These should be clearly subordinate but still legible.
3. Use at least 3 distinct size levels for typography.
4. Adjust colours to reinforce hierarchy — muted for less important, vivid for most important.
5. Check: squint at the screen. What is the first thing you see? It should be the primary element.
---

### Use Depth to Build Visual Hierarchy
**Core idea:** Z-axis (shadows, overlaps, blur) creates depth, which can be used to communicate layering and importance.
**Why it matters:** Depth signals "this is on top / this is interactive / this floats above the content."
**UX implication:** Use subtle box shadows for cards to lift them above the background. Use stronger shadows for modals and dropdowns. Avoid gratuitous shadow use — every shadow should have a purpose.
---

### Use Colour to Add Depth
**Core idea:** Placing colour (e.g., a vivid blue card or panel) against a neutral background creates depth through contrast.
**Why it matters:** Colour contrast between a component and its background creates focus without requiring shadow.
**UX implication:** A saturated primary card stands forward; a light grey card recedes. Use this to guide attention.
---

### Understand the Box Model
**Core idea:** Every HTML element is a rectangular box with: content, padding (inside), border, and margin (outside).
**Why it matters:** Understanding the box model prevents unexpected spacing issues in implementation.
**UX implication:** When specifying spacing, distinguish between padding (inside the component) and margin (space between components). Be explicit in design handoff.
---

### Test Visual Hierarchy Using the Squint Test
**Core idea:** Squint your eyes at a design until it blurs. What stands out? That is your dominant element.
**Why it matters:** Squinting removes fine detail and reveals only the major contrast and size relationships — exactly what hierarchy is about.
**UX implication:** Run the squint test on every screen. If the primary action isn't the most visually dominant element after squinting, revise the hierarchy.
---

### Design @ 1x Using Points
**Core idea:** Design at 1x resolution using points (pt) rather than pixels, so the design scales correctly across screen densities.
**Why it matters:** Retina displays render at 2x or 3x pixel density. Designing at 1x in points ensures components stay the right size on all screens.
**UX implication:** In Figma/Sketch, design frames at device point dimensions (375pt for iPhone, not 750px). Export assets at @2x and @3x.
---

### Align the Main Layout to a 12-Column Grid
**Core idea:** A 12-column grid is the most flexible grid system because 12 is divisible by 2, 3, 4, and 6.
**Why it matters:** Column grids give consistent horizontal alignment while remaining flexible for varied content widths.
**UX implication:** Set up a 12-column grid with consistent gutters (16–24px) and margins. Use columns as guides for major layout decisions. Components should snap to whole-column widths.
*Column systems: 1-col (full width on mobile), 2-col (halves), 3-col (thirds), 4-col (quarters), 6-col (sixths).*
---

### Align Text to the Baseline
**Core idea:** Use baseline grids to align text vertically so line heights produce consistent vertical rhythm.
**Why it matters:** Baseline alignment creates a harmonious vertical rhythm that makes text feel ordered and readable.
**UX implication:** Set a base unit (e.g., 8px). Ensure all line heights and spacing values are multiples of this unit. In CSS, use unitless line-height values and consistent margin patterns.
---

### Align Horizontal Text to the Baseline, Not the Container
**Core idea:** When mixing different font sizes in a row, align them by their baseline (the line text sits on) not by their top or centre.
**Why it matters:** Baseline alignment looks intentional and natural. Centre or top alignment with mixed sizes looks misaligned.
**UX implication:** In flexbox, use `align-items: baseline` when mixing font sizes in a row (e.g., a large number beside a smaller unit label).
---

### Create a Set of Predefined Spacing Options
**Core idea:** Design with a limited set of spacing values so every space in the UI comes from the same vocabulary.
**Why it matters:** Ad hoc spacing creates visual inconsistency that is difficult to spot but easy to feel as an uncomfortable roughness.
**UX implication:** Define a spacing scale (4, 8, 12, 16, 24, 32, 48, 64, 96px). Never use values outside this scale. In CSS, use custom properties: `--space-xs: 4px`, `--space-sm: 8px`, etc.
---

### Space Elements Based on How Closely Related They Are
**Core idea:** The closer two elements are conceptually, the closer they should be visually.
**Why it matters:** This applies the Gestalt proximity principle systematically across a layout.
**UX implication:** Group labels with their fields (4-8px gap), group fields within a section (16px), separate sections (32-48px), separate major layout blocks (64-96px).
---

### Be Generous with White Space
**Core idea:** Give every element more space than you think it needs. White space is not wasted space — it's breathing room.
**Why it matters:** Generous white space improves readability, reduces cognitive load, and creates a sense of quality.
**UX implication:** Padding inside cards: start at 24px and work down, not up. Line spacing for body text: 1.5–1.75 line-height. Section spacing: 64-96px minimum. If a layout feels crowded, double the white space first.
---

### Use The Layout Test
**Core idea:** Temporarily hide all text content and view the layout as pure shapes, spacing, and colour blocks.
**Why it matters:** With text removed, structural problems in alignment, spacing, and hierarchy become obvious.
**UX implication:** In Figma, toggle layer visibility to hide text. Review the skeleton layout. Fix structure before polishing typography.
---

### Use Columns to Add Depth
**Core idea:** Multi-column layouts create depth and allow complementary content to sit side by side.
**Why it matters:** A single column is safe but monotonous. Columns create visual interest and efficient use of horizontal space.
**UX implication:** Use 2-3 columns for comparison content, dashboards, and settings panels. Ensure columns are clearly separate using sufficient gutter width (minimum 24px).
---

### Ensure Similar-Looking Buttons Function Similarly (Tables Variant)
**Core idea:** In a table or grid, varying the visual weight of column headers can help distinguish controls from data.
**Why it matters:** Inconsistent visual treatment within structured data confuses users about what is interactive vs. what is content.
**UX implication:** Use consistent header styling across all table columns. Make sortable columns visibly distinct (e.g., with an arrow icon or hover state change).
---

### Align Text Left for Readability
**Core idea:** Left-aligned text is the standard for most languages and is easiest to read at length.
**Why it matters:** Centred or right-aligned body text is harder to track because each line starts at a different x-position.
**UX implication:** Left-align all body text, form labels, and list items. Centre-align only for short headings, single-line labels, or deliberately stylistic moments.
---

### Don't Centre-Align Long Body Text
**Core idea:** Centred text should be limited to 1-3 lines. For 4+ lines, left-align.
**Why it matters:** Reading centred text requires the eye to refind the start of each new line, which is significantly harder than left-to-right scanning.
**UX implication:** Marketing heroes, empty states, and short callouts can use centre-aligned text. Any paragraph of 4+ sentences must be left-aligned.
---

### Try to Avoid Using Multiple Alignments
**Core idea:** Mixing left, centre, and right alignments on the same screen creates visual chaos.
**Why it matters:** Multiple alignment axes fight each other and make layouts feel unresolved.
**UX implication:** Commit to a single primary alignment axis per screen. In most cases, left-align everything. Use centre alignment only for isolated, intentionally decorative blocks.
---

### Make Main Content Visible
**Core idea:** The primary content of a screen should be immediately visible without scrolling, hovering, or interaction.
**Why it matters:** Users form judgments in the first few seconds. If the key information is below the fold, many will never see it.
**UX implication:** Place your headline, primary CTA, and key value proposition above the fold on the most common screen size. Test at 360px, 375px (mobile) and 1280px (desktop).
---

### Use the Rule of Thirds for Photos
**Core idea:** When placing subjects in photos, position them at the intersections of a 3x3 grid rather than dead-centre.
**Why it matters:** The rule of thirds creates more dynamic, visually engaging compositions than centred subjects.
**UX implication:** When selecting or cropping hero images, use the rule of thirds. Ensure the negative space in the image (empty areas) aligns with where you'll overlay text or CTAs.
---

### Make Sure Content is Visible (Photo)
**Core idea:** Ensure that subjects in photos remain visible after cropping, resizing, or overlaying UI elements.
**Why it matters:** Cropped faces, clipped subjects, and text obscuring the focal point all damage trust and perceived quality.
**UX implication:** Always test photo crops at multiple aspect ratios (mobile, tablet, desktop). Use CSS `object-position` to control focal point when images are fluid.
---

### Ensure an Interface is Unbreakable
**Core idea:** Design for edge cases: long names, empty states, error states, overflow text, and unexpected content lengths.
**Why it matters:** Designs that only work for the "happy path" break in production, undermining credibility.
**UX implication:** Test your design with the longest realistic text strings. Design empty states. Test with zero items, one item, and maximum items. Document all edge cases.
---

### Keep Related Actions Close
**Core idea:** Actions that relate to a specific piece of content should be positioned adjacent to that content.
**Why it matters:** Users form proximity-based relationships between controls and their targets. Distant actions require more cognitive mapping.
**UX implication:** Edit and delete buttons belong on the card they affect, not in a distant toolbar. Place form submit buttons immediately below the form, not at the page top.
---

---

## Chapter 4 — Typography

### Use a Single Sans-Serif Typeface
**Core idea:** For most interfaces, one well-chosen sans-serif typeface is sufficient. Using multiple typefaces creates complexity without benefit.
**Why it matters:** More than 2 typefaces creates dissonance and increases cognitive load.
**UX implication:** Choose one typeface for the entire UI. Add variety through weight, size, and colour — not through additional typefaces.
---

### Serif Typefaces
**Core idea:** Serif fonts have decorative strokes (serifs) at the ends of letterforms. They are associated with tradition, authority, and print.
**Why it matters:** Serifs can improve readability in long-form text at print resolutions but can look dated in digital UI.
**UX implication:** Use serifs for editorial, luxury, or heritage brands. Avoid them for utilitarian SaaS interfaces unless the brand demands it.
---

### Sans-Serif Typefaces
**Core idea:** Sans-serif fonts lack decorative strokes. They are associated with modernity, clarity, and digital-native design.
**Why it matters:** Sans-serifs are the default choice for UI because they render well at small sizes on screens.
**UX implication:** Default to a quality sans-serif (Inter, Geist, Söhne, DM Sans, etc.) for all UI text.
---

### Script Typefaces
**Core idea:** Script fonts mimic handwriting. They convey personality, warmth, and creativity.
**Why it matters:** Scripts are illegible at small sizes and inaccessible for many users.
**UX implication:** Use scripts only for display purposes (logos, hero text, decorative accents). Never use scripts for body text, labels, or buttons.
---

### Display Typefaces
**Core idea:** Display fonts are designed for large sizes — headlines, hero text, posters. They're often decorative or expressive.
**Why it matters:** Display fonts become illegible at small sizes.
**UX implication:** Use display typefaces only at 36px+ for decorative headlines. Never for body copy, labels, or navigation.
---

### Monospaced Typefaces
**Core idea:** Monospaced fonts give every character the same width. They are associated with code, data, and technical precision.
**Why it matters:** Monospaced fonts improve readability for code and numerical data.
**UX implication:** Use monospaced fonts for code snippets, terminal output, and numerical data that needs vertical alignment (e.g., financial tables).
---

### Reasons to Use a Single Sans-Serif Typeface
1. Legibility — quality sans-serifs are optimised for readability at all sizes.
2. Consistency — one typeface throughout creates cohesion.
3. Hierarchy — weight and size variation provides sufficient differentiation within one typeface family.
4. Simplicity — fewer typefaces = fewer decisions = faster production.
---

### Tips for Choosing a Sans-Serif Typeface
- Choose variable fonts that contain many weights so you can use whatever you need
- Look for typefaces with tall x-heights for improved legibility at small sizes
- Look for typefaces with open counters (open letterforms) — these improve legibility at small sizes
- If you want to use a custom typeface, consider using an open-source equivalent if the typeface is unavailable online or too expensive
- Use a variable font if possible so you can adjust weight and width continuously
- Do not use a font with a very complex language if it doesn't support multi-language content
---

### Evoke Emotion Using a Secondary Typeface for Headings
**Core idea:** A second typeface used only for display headings can add personality and emotional tone without creating complexity.
**Why it matters:** The right heading typeface signals brand voice — neutral, playful, authoritative, luxurious.
**UX implication:** If using 2 typefaces, one should be the neutral workhorse for body and UI. The second should be expressive and used exclusively for headings. Keep it to maximum 2 typefaces.
---

### Use Regular and Bold Font Weights Only
**Core idea:** Limit your weight usage to 2 weights: regular (400) and bold (700). Adding more weights creates confusion.
**Why it matters:** Using too many weights produces a muddy hierarchy where no weight clearly signals importance.
**UX implication:** Use regular for body text and less important elements; bold for headings, highlighted values, and primary labels. If you need a third level, use size or colour, not weight.
---

### Use a Type Scale to Set Font Sizes
**Core idea:** A type scale is a limited set of predefined font sizes based on a mathematical ratio (e.g., 1.25 or 1.5 major third/perfect fourth).
**Why it matters:** Consistent type scales create visual rhythm and predictable hierarchy.
**UX implication:** Common scale: 12, 14, 16, 20, 24, 32, 48, 64px. Choose a base size (16px for body) and scale up/down from it. Never use sizes outside the scale.
*Example scale:*
- 12px — captions, fine print
- 14px — secondary text, labels
- 16px — body text (base)
- 20px — lead paragraph
- 24px — heading 4
- 32px — heading 3
- 48px — heading 2
- 64px — hero heading 1
---

### Small Type Scales
**Core idea:** Smaller type scale ratios (e.g., 1.25) produce more similar sizes — good for dense, data-heavy UIs.
**Why it matters:** A large ratio on a data dashboard creates extreme size differences that feel wrong.
**UX implication:** Use a small scale ratio (1.2–1.25) for dashboards and admin interfaces. Use a larger ratio (1.5–1.618) for marketing pages and editorial content.
---

### Large Type Scales
**Core idea:** Large type scale ratios (e.g., 1.5 or 1.618 golden ratio) produce dramatic size differences — good for bold, expressive layouts.
**Why it matters:** Large ratios create strong hierarchy and visual impact in marketing contexts.
**UX implication:** Marketing pages, landing pages, and editorial content benefit from large type ratios. The contrast between small body and large headline creates energy.
---

### Responsive Type Scales
**Core idea:** Type scales should adapt to screen size. What works at desktop becomes too large or too small at mobile.
**Why it matters:** A 64px hero headline at desktop becomes 32px on mobile — the ratio still works, just at different breakpoints.
**UX implication:** Define separate scales for mobile and desktop. Use CSS `clamp()` or media queries to scale text fluidly.
---

### Rounding Decimals
**Core idea:** When a type scale calculation produces a decimal (e.g., 18.75px), round to the nearest whole number.
**Why it matters:** Sub-pixel font sizes render inconsistently across browsers.
**UX implication:** Always round font sizes to whole pixel values. Slight deviation from the mathematical scale is acceptable.
---

### Make Long Body Text Bigger
**Core idea:** Body text for long-form reading should be 18px–21px, not 14–16px.
**Why it matters:** Small text in long paragraphs requires more effort to track and produces eye fatigue.
**UX implication:** For articles, documentation, and long-form content, use 18–20px body text. For shorter UI text in labels and inputs, 14–16px is fine.
---

### Use at Least 1.5 Line Height for Long Body Text
**Core idea:** Line height (leading) for body text should be at least 1.5 — meaning the line gap is at least half the font size.
**Why it matters:** Text with tight line spacing is harder to read because the eye struggles to identify the next line while scanning.
**UX implication:** Set `line-height: 1.5` to `1.7` for paragraph text. For headings, use `1.1`–`1.3` (tighter is appropriate at large sizes).
*Body text requirements:*
- Lines should be 45–75 characters wide (optimal reading measure)
- Line height should be at least 1.5
- Paragraph spacing should be larger than line spacing
- Avoid full justification (it creates rivers of whitespace)
---

### Decrease Line Height as Font Size Increases
**Core idea:** As text gets larger, it needs proportionally less line height. A 64px headline at 1.5 line-height would have enormous gaps.
**Why it matters:** Large text with excessive line height looks disconnected and weakens the visual relationship between lines.
**UX implication:** Use 1.0–1.2 line-height for display headings; 1.3–1.5 for subheadings; 1.5–1.7 for body text.
---

### Ensure Ideal Line Length
**Core idea:** The optimal line length for readability is 45–75 characters (about 8–12 words per line).
**Why it matters:** Lines that are too short force the eye to change direction too often. Lines too long make it hard to find the start of the next line.
**UX implication:** Set `max-width` on text containers. For body text at 16px, this is roughly 600–700px. In CSS: `max-width: 65ch`.
---

### Left-Align Text
**Core idea:** Left-aligned text is the default and most readable alignment for left-to-right languages.
**Why it matters:** Left alignment provides a consistent starting edge for each line, making scanning effortless.
**UX implication:** Left-align everything by default. Use right-align only for numbers in tables. Use centre-align sparingly for short, isolated display content.
---

### Don't Justify Long Body Text
**Core idea:** Full justification forces uneven word spacing to fill lines, creating rivers of whitespace in the text.
**Why it matters:** Justified text is harder to read than left-aligned text in digital contexts.
**UX implication:** Never use `text-align: justify` for body text in UI. Left-align is always correct for screen reading.
---

### Decrease Letter Spacing as Font Size Increases
**Core idea:** Large display text often needs slightly negative letter spacing. Small text benefits from normal or slightly positive spacing.
**Why it matters:** Type at large sizes has too much space between letters at default tracking. Small text can become illegible if tracked too tightly.
**UX implication:** For headlines (36px+), use `-0.01em` to `-0.04em` letter-spacing. For body, use `0` or `0.01em`. Never use wide letter-spacing on body text.
---

### Ensure Text on Photos is Legible
**Core idea:** Text placed directly on photos is often low contrast and hard to read. Always ensure legibility.
**Why it matters:** Photos are unpredictable — bright areas, dark areas, and busy textures all affect text readability.
**UX implication:** Use one of these methods: (1) place text in a solid or translucent overlay, (2) add a gradient overlay from the text zone, (3) darken/lighten the image, (4) apply a scrim (semi-transparent fill). Always test contrast.
---

### Blur the Background
**Core idea:** Blurring the photo behind text reduces visual noise and improves text legibility.
**Why it matters:** A blurred background provides contrast without completely obscuring the image.
**UX implication:** Use `backdrop-filter: blur(8px)` in CSS for frosted-glass effects. Works best when combined with a semi-transparent overlay.
---

### Apply a Solid Text Background
**Core idea:** Place text on a solid colour bar or panel directly on the image for maximum legibility.
**Why it matters:** Solid backgrounds guarantee contrast regardless of image colour.
**UX implication:** Use white or near-white semi-transparent pills, bars, or cards for photo overlaid text. Ensure at least 4.5:1 contrast between text and background colour.
---

### Add a Linear Gradient Overlay
**Core idea:** A gradient that transitions from transparent to dark (or dark to transparent) creates a zone of high contrast for text overlay.
**Why it matters:** Gradients are subtle — they preserve the photo's visual integrity while ensuring text legibility.
**UX implication:** Add a bottom-anchored gradient (`linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)`) to hero images where text sits at the bottom.
---

### Add a Semi-Transparent Overlay
**Core idea:** A flat semi-transparent overlay (e.g., rgba(0,0,0,0.4)) darkens the whole image to improve text contrast.
**Why it matters:** Consistent darkening across the full image ensures text is legible at any position.
**UX implication:** Use overlays when text position may vary or the image composition is unpredictable. Test the contrast ratio of text against the darkened image.
---

### Avoid Light Grey and Pure Black Text
**Core idea:** Very light grey text on white (#aaa on #fff) fails accessibility. Pure black on white is too high contrast for body reading.
**Why it matters:** Both extremes create readability problems — one for legibility, one for eye strain.
**UX implication:** Use dark grey (#1a1a1a or #222) for primary text. Use medium grey (#555–#666) for secondary text. Avoid any grey lighter than #757575 on a white background (fails WCAG AA at 16px).
---

### Hue (Colour Temperature for Text)
**Core idea:** A subtle warm hue in dark backgrounds (e.g., dark brownish-black instead of cool grey-black) makes text feel more comfortable to read.
**Why it matters:** Pure warm/cool mismatches between text and background create subtle tension.
**UX implication:** Match the temperature of your text colour to the temperature of your background. Warm background = warm near-black text. Cool/blue background = cool near-black text.
---

### Contrast (Text on Coloured Backgrounds)
**Core idea:** When text sits on a coloured background, adjust the text colour to maintain the required contrast ratio for the specific hue.
**Why it matters:** Different hues at the same apparent lightness have very different actual luminance values.
**UX implication:** Always measure contrast after choosing a background colour. Never assume a dark background + white text is sufficient without checking. Use a contrast checker for every combination.
---

---

## Chapter 5 — Copywriting

### Be Concise
**Core idea:** Use as few words as possible to communicate what needs to be said. Remove every word that doesn't earn its place.
**Why it matters:** Users scan, not read. Long copy is skipped. Short, direct copy is read and understood.
**UX implication:** Review every text element and ask: "Can I say this in half the words?" Headlines should be 5-8 words. Error messages should be one sentence. Tooltips should be one phrase.
*Avoid filler phrases like: "Please note that…", "In order to…", "It's important to…", "You should be aware that…"*
---

### Use Sentence Case
**Core idea:** Write UI text in sentence case (first word capitalised, rest lowercase) rather than Title Case.
**Why it matters:** Sentence case is easier and faster to read. Title Case makes every word feel like a title.
**UX implication:** Use sentence case for button labels, navigation items, headings, and error messages. Only use Title Case for product names, proper nouns, and formal document headings.
---

### Use Plain and Simple Language
**Core idea:** Write for an 8th-grade reading level. Avoid jargon, technical terms, and industry-specific vocabulary.
**Why it matters:** Not all users have the same domain expertise. Complex language excludes users and increases errors.
**UX implication:** Replace: "Authenticate your credentials" with "Log in." Replace "Terminate the session" with "Sign out." Test copy with non-technical users.
---

### Front-Load Text
**Core idea:** Put the most important information at the beginning of sentences and paragraphs.
**Why it matters:** Users read in F-shaped patterns — heavily scanning the beginning of lines. If the key word or action is at the end, it gets missed.
**UX implication:** Start headings with the key concept: "Save time with automated reports" not "Automated reports will help you save time." Start sentences with the action: "Download your data — go to Settings > Export."
---

### Use the Inverted Pyramid
**Core idea:** Structure content with the most important information first, followed by supporting details, followed by background context.
**Why it matters:** Readers who stop partway through still get the essential message.
**UX implication:** On landing pages and onboarding screens: lead with the headline benefit, then supporting proof, then fine details. In error messages: state the problem first, then the solution, then the cause.
---

### Limit Use of Abbreviations and Acronyms
**Core idea:** Avoid abbreviations unless they are universally understood by your target audience.
**Why it matters:** Unfamiliar abbreviations force users to decode the UI, increasing cognitive load and the risk of errors.
**UX implication:** Spell out words in labels and messages. If an abbreviation is necessary due to space, tooltip it. Never abbreviate core action labels (buttons, nav items).
---

### Limit the Use of UPPERCASE
**Core idea:** All-caps text is harder to read than mixed case, especially at length. Use it sparingly and only at small sizes.
**Why it matters:** ALL-CAPS slows reading because letters lose their distinctive shapes — we recognise words partly by their outline, which all-caps destroys.
**UX implication:** Use all-caps only for very short labels (2-3 words) in navigation, category tags, or legal fine print. Never use all-caps for headings or sentences.
---

### Break Up Content Using Descriptive Headings and Bullets
**Core idea:** Long blocks of prose are hard to scan. Break them up with clear headings and bullet lists where appropriate.
**Why it matters:** Users scan before they read. Headings and bullets provide navigation hooks within a content block.
**UX implication:** For any content block over 3 sentences, add a heading. For any list of 3+ items, use bullet points. For any sequence, use numbered lists.
---

### Make Sure Headings are Descriptive
**Core idea:** Headings should tell users what the section contains, not just label it with a generic category.
**Why it matters:** "Settings" tells users nothing. "Manage your account and notifications" tells users exactly what they'll find.
**UX implication:** Write headings as summaries or promises, not labels. Test: can a user who reads only the headings understand the page structure and decide what to read?
---

### Avoid Using "my" on Form Labels
**Core idea:** Use "your" rather than "my" in form labels and UI copy.
**Why it matters:** "My account" is ambiguous — is it the user's account or the system's? "Your account" is unambiguous.
**UX implication:** Replace "My profile" with "Your profile." Replace "My saved items" with "Your saved items." The second-person "you" voice is conversational and clear.
---

### Use Vocabulary Consistently
**Core idea:** Use the same word for the same thing throughout the entire product. Never switch synonyms.
**Why it matters:** Using "delete" in one place and "remove" in another makes users uncertain if they mean the same thing.
**UX implication:** Maintain a product terminology glossary. Audit all UI text against it. When writing new copy, check the glossary first.
---

### Use Numerals for Numbers
**Core idea:** Write numbers as digits (3, 15, 100) not words (three, fifteen, one hundred) in UI contexts.
**Why it matters:** Numerals are faster to scan and process than number words, especially in data-heavy interfaces.
**UX implication:** Use numerals for: quantities, prices, measurements, counts, percentages. Use words only for ordinal positions in text ("your first notification").
---

### Avoid Full Stops if Possible
**Core idea:** Short UI strings (labels, headings, button text, field labels) should not end with periods.
**Why it matters:** Periods add visual noise and signal the end of a sentence, which suggests what follows is a new sentence — confusing in UI context.
**UX implication:** No periods on: headings, labels, button text, navigation items, error message titles. OK to use periods in: full sentences in body text, multi-sentence helper text, full-sentence error descriptions.
---

### Ensure Text Links Describe Their Destination
**Core idea:** Link text should clearly describe where the link goes or what it does. "Click here" and "read more" are useless.
**Why it matters:** Screen readers can pull a list of all links on a page. "Click here" out of context means nothing.
**UX implication:** Write links as descriptive phrases: "Download the full report," "Read our privacy policy," "View your invoices." Never use "here," "link," "this," or "more" as link text.
---

### Ensure Text Length is Consistent Across Similar Interface Elements
**Core idea:** When multiple items of the same type appear together (cards, list items, navigation labels), their text should be roughly the same length.
**Why it matters:** Wildly different text lengths create uneven layouts and make items look mismatched.
**UX implication:** For navigation items: aim for 1–2 words. For card headings: 3–6 words. For descriptions: 1–2 sentences. Truncate with ellipsis rather than allowing arbitrary overflow.
---

---

## Chapter 6 — Forms

### Stack Forms in a Single Column Layout
**Core idea:** Form fields should be stacked vertically in a single column, not arranged in multi-column grids.
**Why it matters:** Multi-column forms are harder to complete — users must decide what order to fill them in and are prone to skipping fields.
**UX implication:** Default to single-column forms. Only use 2 columns when fields are very closely paired (First name / Last name). Never use 3+ column forms.
---

### Stack Labels on Top of Inputs
**Core idea:** Labels should sit directly above their inputs, not beside them (inline).
**Why it matters:** Top-aligned labels are faster to scan and accommodate labels of any length without layout problems. They also work better on mobile.
**UX implication:** Use top-aligned labels for all form fields. Inline labels (placeholder text) are not a substitute for real labels. Floating labels have UX tradeoffs — proceed with caution.
---

### Stack Checkboxes and Radio Buttons
**Core idea:** List checkboxes and radio buttons vertically, not horizontally.
**Why it matters:** Vertical lists are easier to scan. Horizontal lists can get confusing about which label belongs to which control, especially if labels wrap.
**UX implication:** Always stack checkbox and radio groups vertically. Exception: 2-option radio buttons (e.g., Yes / No) can be inline if labels are very short.
---

### What About the Increase in Height?
**Core idea:** Stacking labels on top of inputs and checkboxes in a column increases form height, but this is not a meaningful drawback compared to the usability gain.
**Why it matters:** Form height is less important than form completion rate.
**UX implication:** Accept the extra vertical space. Vertical scrolling is natural and expected. Do not compress labels inline to save vertical space — it will reduce completion rates.
---

### Minimise the Number of Form Fields
**Core idea:** Every form field is a cost to the user. Remove all optional or non-essential fields.
**Why it matters:** Each additional field reduces form completion rate.
**UX implication:** Before including a field, ask: "What happens if we don't collect this?" If the answer is "not much," remove it. Collect optional data after signup, not during it.
---

### Mark Optional Fields
**Core idea:** Mark optional fields with "(optional)" rather than marking required fields with an asterisk.
**Why it matters:** When most fields are required, marking required ones is redundant noise. Marking the exceptions (optional) is cleaner and clearer.
**UX implication:** If most fields are required, mark only optional ones. If most are optional, mark required ones. Avoid using asterisk conventions — they require explanation and screen readers often don't communicate them well.
---

### Required Fields are Sometimes Not Needed
**Core idea:** If most form fields are required, the form itself should be simplified rather than peppered with asterisks.
**Why it matters:** A form where every field has an asterisk adds visual noise without useful information.
**UX implication:** Reassess whether each required field is truly required. Reduce the form. Mark optional, not required.
---

### Mark Required Fields with an Asterisk *
**Core idea:** When required fields must be marked (because optional fields exist), use an asterisk and define it at the top of the form.
**Why it matters:** The asterisk is a familiar convention. Users understand it when given a legend.
**UX implication:** Place "* Required fields" at the top of the form. Style the asterisk in red. Screen reader users also need the text "required" in the field label itself, not just the asterisk symbol.
---

### Mark Required Fields with the Word "Required"
**Core idea:** For maximum accessibility, label required fields with the word "required" in the label or ARIA attribute.
**Why it matters:** Screen readers may not announce asterisks meaningfully. "Required" in text is unambiguous.
**UX implication:** Use `aria-required="true"` and include "(required)" or asterisk in the visible label. Both visual and programmatic indication ensure all users understand the field requirement.
---

### Situations Where You Don't Need to Mark Required Fields
- If all fields in the form are required, no marking is needed — state at the top that all fields are required.
- If a form has only 1-2 fields, the requirement is implied.
- If the context makes the requirement obvious (e.g., a credit card form where every field is required).
---

### Try to Avoid Optional Fields by Using opt-ins
**Core idea:** Replace optional form fields with post-signup opt-ins or settings to collect the data progressively.
**Why it matters:** Collecting data during signup increases form length and friction. Collecting it progressively after signup improves completion rates.
**UX implication:** Move "preferences," "notifications," "job title," and similar optional fields to the profile settings page. Request them after the user is committed to your product.
---

### Match Field Width to the Intended Input
**Core idea:** Field widths should communicate the expected length of the input. A postcode field should be short; a bio field should be wide.
**Why it matters:** Mismatched field widths confuse users about what is expected. A tiny field for a long input feels wrong.
**UX implication:** Size inputs to match their expected content: phone numbers ~120px, postcodes ~80px, emails/full widths ~100%, bio text areas ~400px height.
---

### Stick with Conventional Form Field Styles
**Core idea:** Forms should use established visual conventions (input box with visible border, focus ring, etc.) rather than experimental styles.
**Why it matters:** Unfamiliar form styles increase cognitive load and may not be recognized as interactive.
**UX implication:** Use bordered input fields with clear focus states. Avoid flat, borderless inputs unless they're on a highly coloured background that provides sufficient context.
---

### Ensure Form Field Borders are High Contrast
**Core idea:** Input field borders must have at least 3:1 contrast against the background to be identifiable as interactive elements.
**Why it matters:** Low-contrast borders make inputs invisible to low-vision users.
**UX implication:** Use a border that meets 3:1 minimum. Test with #767676 borders on white (#fff) — that passes. Test darker borders for better visual clarity. Don't rely on subtle shadow alone.
---

### Display Hints Above Form Fields
**Core idea:** Hint text (format guidance, character limits, requirements) should appear above the input, not below it.
**Why it matters:** Hints placed below inputs are often hidden by mobile keyboards and can be mistaken for error messages.
**UX implication:** Place hint text between the label and the input. Style it as smaller, muted text so it's clearly supplementary. Repeat critical hints inline within the label if space is very tight.
---

### Don't Use Placeholder Text Instead of a Label
**Core idea:** Placeholder text inside an input field must never replace a visible label above the field.
**Why it matters:** Once the user starts typing, the placeholder disappears — they can no longer see what the field is for. This is disorienting, especially on forms with many fields.
**UX implication:** Always use a visible label above the field. Use placeholder text only for supplementary hints (e.g., "e.g., johndoe@email.com"). Never use placeholder as the sole label.
---

### Form Label Tips
- Make labels short and specific
- Avoid labels that are also questions ("What is your first name?") — use direct labels ("First name")
- Align labels consistently (all top-aligned or all left-aligned, never mixed)
- Use sentence case, not Title Case
- Do not use a colon after labels (outdated convention)
- Ensure labels are always visible, never hidden or replaced by placeholder text
---

### Try to Use an Autocomplete Instead of a Long Dropdown
**Core idea:** When a select has many options (12+), replace the dropdown with an autocomplete/typeahead input.
**Why it matters:** Scrolling through long dropdown lists is tedious. Typing to filter is faster.
**UX implication:** Use an autocomplete for: country selection, city search, any dropdown with more than 10-12 options. Ensure the autocomplete has keyboard support.
---

### Use Steppers for Numeric Fields Instead of Dropdowns
**Core idea:** For small numeric inputs (1-10 range), a stepper (increment/decrement buttons) is faster and more accurate than a dropdown or freeform text.
**Why it matters:** Steppers reduce input errors and are faster for incremental changes.
**UX implication:** Use steppers for: quantity selectors, age ranges, number of people, count inputs. Combine with a direct number input for keyboard users.
---

### Use a Checkbox or Toggle to Switch for 2 Options
**Core idea:** When asking a user to choose between 2 options, use a toggle or checkbox instead of a radio group or dropdown.
**Why it matters:** A toggle or checkbox requires one interaction (vs. opening a dropdown for 2 options). It's faster and clearer.
**UX implication:** Use toggles for binary settings (on/off). Use checkboxes for binary confirmations (agree/don't agree). Use radio buttons for 2+ mutually exclusive choices where both options need to be labelled.
---

### Checklist/Toggle Usage
**Core idea:** Use toggles when the action takes immediate effect. Use checkboxes when the change is confirmed on form submit.
**Why it matters:** The difference between immediate and deferred actions is important. A toggle implies instant feedback; a checkbox implies "I'll apply this when I click Save."
**UX implication:** Settings that change in real-time → toggle. Options inside a form that submits → checkbox.
---

### Use Positive Phrasing for Checkboxes
**Core idea:** Write checkbox labels so that checking the box is a positive action.
**Why it matters:** Double negatives in checkbox labels are deeply confusing — "Don't unsubscribe me" — the user has to decode what checking means.
**UX implication:** Write: "Send me updates" not "Don't opt out of updates." Write: "Show analytics dashboard" not "Don't hide analytics."
---

### Group Related Fields Under Headings
**Core idea:** Use section headings to group related form fields (e.g., "Personal details," "Payment information," "Preferences").
**Why it matters:** Long forms without section breaks feel overwhelming. Headings chunked the form into digestible parts.
**UX implication:** Add section headings for every 4-6 field group. Use slightly larger text, heavier weight, and additional whitespace before each heading.
---

### Break Up Long Forms into Multiple Steps
**Core idea:** For forms with many fields, split them into a wizard-style multi-step flow with a progress indicator.
**Why it matters:** Long single-page forms feel overwhelming and increase abandonment. Multi-step flows with progress indicators make completion feel achievable.
**UX implication:** Break forms at logical groupings. Show a progress bar or step indicator. Let users navigate backwards. Save state so users can complete in multiple sessions.
---

### Validate on Submit Rather Than Inline
**Core idea:** Validate form inputs after the user submits, not while they are still typing.
**Why it matters:** Real-time validation interrupts the user mid-thought and creates error messages for incomplete (not yet wrong) inputs.
**UX implication:** Trigger validation on form submit. After submission and correction, validate on field blur (when the user leaves a field). Never validate on every keystroke.
---

### Ensure Form Field Labels are Close to their Fields
**Core idea:** Labels should be immediately above the field, with minimal gap. A large gap between label and field breaks the visual association.
**Why it matters:** Users associate a label with the nearest field. Distant labels create ambiguity.
**UX implication:** Use 4–8px gap between label and input. Use 16–24px between field groups. The label-to-field gap should be clearly smaller than the between-group gap.
---

### Define 3 Button Weights
**Core idea:** Design your button system with 3 weight levels: primary, secondary, and tertiary.
**Why it matters:** A 3-tier system provides sufficient hierarchy for all use cases without the complexity of more levels.
**UX implication:**
- Primary button: solid fill, highest prominence — for the main action
- Secondary button: outlined or lighter fill — for alternative actions
- Tertiary button: text only or ghost — for least important or destructive actions
---

### Required Fields are Sometimes Obvious
**Core idea:** If a form has only 1-2 fields, marking them required is unnecessary — it's implied by context.
**Why it matters:** Asterisks on a login form (email and password) are redundant noise.
**UX implication:** Use judgment. Mark required fields only when optional alternatives exist on the same form.
---

### Write Clear Error Messages
**Core idea:** Error messages should clearly state what went wrong and what the user should do to fix it.
**Why it matters:** Vague errors ("An error occurred") leave users stuck with no path forward.
**UX implication:**
- State specifically what went wrong: "Email address is already registered."
- Tell the user what to do: "Log in or reset your password."
- Never blame the user: "You entered an invalid email" → "That email address doesn't look right."
- Place the error adjacent to the problem field.
- Use red text and an error icon, not just colour alone.
---

---

## Chapter 7 — Buttons

### Common Button Design Mistakes
**Core idea:** Many button systems fail due to lack of visual hierarchy, insufficient contrast, accessibility violations, and inconsistent styles.
**Why it matters:** Buttons are the primary affordance for user action. Broken button systems directly impair usability.
**UX implication:** Audit your button system against: visual hierarchy (can users tell which is primary?), contrast ratios (3:1 minimum for borders, 4.5:1 for text), and shape consistency (identical-function buttons must look the same).
---

### Button Design Guidelines Summary
- Buttons should have a clear visual hierarchy that doesn't depend on colour alone
- The contrast ratio of the button shape must be at least 3:1 to be identified as an interactive element
- Button text contrast ratio must be at least 4.5:1 to meet WCAG 2.1 level AA
- If buttons have identical styles, the contrast between them must be at least 3:1
- Use a large target area (at least 48pt by 48pt)
- Ensure at least 16pt space between buttons to prevent mistaken activation
---

### Use a Single Primary Button for the Most Important Action
**Core idea:** There should be only one primary button on a screen at a time, pointing to the single most important action.
**Why it matters:** Multiple primary buttons compete for attention and create confusion about what to do next.
**UX implication:** Identify the single most important action. Make it primary. Make all other actions secondary or tertiary. If multiple actions have equal importance, make them all secondary — not all primary.
---

### Use Secondary Buttons for Less Important Actions
**Core idea:** Secondary buttons indicate alternative or supporting actions of lower priority than the primary.
**Why it matters:** Visual hierarchy between primary and secondary communicates which action is recommended.
**UX implication:** Use secondary buttons for: "Cancel," "Back," "Preview," "Skip." Secondary buttons should have clearly less visual weight than the primary.
---

### Use Tertiary Buttons for the Least Important Actions
**Core idea:** Tertiary buttons (text-only or ghost) are for actions that should be available but not prominent — especially for potentially destructive actions.
**Why it matters:** Making destructive actions less prominent prevents accidental activation.
**UX implication:** Use tertiary for: "Delete," "Remove," "Sign out" in settings contexts. Also use for low-stakes supplementary actions like "Learn more."
---

### Try to Avoid Disabled Buttons
**Core idea:** Disabled buttons have low contrast, are not keyboard accessible, and provide no feedback about why they are unavailable.
**Why it matters:** Disabled buttons leave users stuck without explanation or path forward.
**UX implication:** Prefer enabling the button and showing validation on submit. If a button must be disabled, provide an adjacent message explaining what is needed to enable it. Add a tooltip on hover.
---

### Enable Buttons and Validate on Submit
**Core idea:** Rather than disabling a submit button until the form is valid, keep it enabled and show validation errors when submitted.
**Why it matters:** Disabled buttons on forms prevent users from discovering what is wrong.
**UX implication:** Enable all form submit buttons by default. On submit, validate and highlight errors. This gives users immediate, specific feedback about what to fix.
---

### Remove Unavailable Actions
**Core idea:** When an action is not available in context, remove it rather than disabling it. If it must appear, explain why it's unavailable.
**Why it matters:** Disabled buttons create confusion and dead ends. Removed buttons simplify the interface.
**UX implication:** Remove contextually unavailable actions. When you need to show a locked feature, use a lock icon on a regular-styled button + tooltip or adjacent text explaining the requirement.
---

### Put a Lock Icon on Unavailable Actions
**Core idea:** For premium or permission-locked features, use a lock icon on the button rather than disabling it.
**Why it matters:** A lock icon signals the action exists but requires an upgrade or permission — it's discoverable and explains the state.
**UX implication:** Premium features: use a padlock icon + tooltip "Upgrade to unlock this feature." Permission-based features: use a lock + tooltip "You need admin access."
---

### Make Disabled Buttons More Inclusive
**Core idea:** When a disabled button is unavoidable, provide explanatory text and a tooltip so users know how to enable it.
**Why it matters:** A disabled button with no explanation is a dead end.
**UX implication:** Place a message near the disabled button: "Fill in all required fields to continue." Add a tooltip on hover/focus. Ensure the button is still keyboard-focusable so the tooltip is accessible.
---

### Left Align Buttons
**Core idea:** In most cases, order buttons left to right, most important to least important. Left-aligned buttons are more accessible and readable.
**Why it matters:** Left-aligned buttons follow reading direction and are found by screen magnifier users at a predictable location.
**UX implication:** Left-align buttons in forms and pages. On mobile, use full-width buttons stacked top to bottom. Exception: small dialog boxes where right-alignment is a familiar OS convention.
---

### Left Align Buttons on Small Dialog Boxes
**Core idea:** For small modal dialogs, align buttons to the left (or use full-width buttons) rather than the right.
**Why it matters:** Right-aligned buttons in small dialogs place the primary action furthest from the user's focus, increasing interaction cost.
**UX implication:** In small dialogs: Left-align, or use a left-aligned primary button + text tertiary to the right of it. Avoid right-aligning primary actions in modals.
---

### Left Align Buttons on Multi-Step Forms
**Core idea:** On multi-step forms, left-align both the "Next" and "Back" buttons to reduce the chance of mistaken back-navigation.
**Why it matters:** Right-aligning "Next" moves it far from the form, increasing difficulty. Typical convention (Next right, Back left) risks users clicking Back accidentally, losing data.
**UX implication:** On multi-step forms, stack buttons: "Next" (primary, full-width) above "Back" (tertiary, smaller), both left-aligned. Or use left-aligned row with "Next" first.
---

### Exceptions to the Left-Aligned Button Rule
- For inline search fields and newsletter subscribe inputs, the button can sit to the right of the input field to emphasise the close relationship.
---

### Ensure Button Text Describes the Action
**Core idea:** Button labels should follow the pattern: verb + noun. "Save post," not "OK." "Delete account," not "Yes."
**Why it matters:** Descriptive button text works out of context (screen readers, quick scanning). Generic labels ("OK," "Yes") require reading surrounding text to understand.
**UX implication:** Write every button label as a verb + noun when possible: "Subscribe to newsletter," "Download report," "Create account." Modal confirmation buttons: "Delete message" not "Confirm."
---

### Ensure Buttons Have a Sufficient Target Size
**Core idea:** Interactive buttons must be at least 44×44pt (or 48×48pt per WCAG) to be usable with fingers and impaired motor control.
**Why it matters:** Small tap targets cause missed taps, frustration, and accessibility failures.
**UX implication:** Set minimum button height to 44px. For frequently tapped actions, use 48px or larger. Space buttons at least 8–16px apart. For icon-only buttons, use a 44×44 touch target even if the icon is smaller.
---

### Extend Target Area Beyond Visual Bounds
**Core idea:** For small interactive elements, extend the invisible tap/click target area beyond the visible element.
**Why it matters:** Small icons and links are visually correct at 16px but are too small to tap reliably.
**UX implication:** Use CSS padding to extend the touch target without changing the visual size. Or use an invisible pseudo-element to enlarge the clickable area.
---

### Balance Icon and Text Pairs
**Core idea:** When pairing icons with text, ensure they have similar visual weight so they look balanced and cohesive.
**Why it matters:** Mismatched weights (a thick bold icon next to light thin text) look unpolished.
**UX implication:** Use the same stroke weight for icons as the font weight of the adjacent text. Scale icons to approximately match the cap-height or x-height of the text.
---

### Vary the Contrast of Icon-Text Pairs
**Core idea:** When balancing a large icon with smaller text, decrease the icon's contrast to visually equalise the pair.
**Why it matters:** Larger elements are naturally dominant. Reducing their contrast can rebalance visual weight.
**UX implication:** For navigation items with icon + label, if the icon is substantially larger, reduce its colour to a mid-tone while keeping the label near-black. This prevents the icon overwhelming the label.
---

### Add Friction to Destructive Actions
**Core idea:** Make destructive actions (delete, remove, cancel subscription, deactivate) harder to complete accidentally by introducing confirmation steps.
**Why it matters:** Accidental destructive actions cause data loss, frustration, and support burden.
**UX implication:** Use friction proportional to the severity of the action:
- Initial friction: move the action away, make it tertiary/less prominent
- Light friction: confirmation dialog ("Are you sure?")
- Medium friction: red-highlighted confirmation dialog with warning icon
- Heavy friction: checkbox ("I understand this is permanent") + destructive button
---

### Allow People to Undo Destructive Actions
**Core idea:** Instead of (or in addition to) confirmation dialogs, let users undo destructive actions after they complete.
**Why it matters:** Undo is forgiving and more user-friendly than interrupting the flow with a confirmation dialog.
**UX implication:** For actions like delete, archive, or send: execute immediately, then show a toast notification: "Message deleted. [Undo]" with a 5-10 second window. This is both faster and safer.
---

---

## Cross-Cutting Principles and Summary

### Minimise Usability Risk at Every Step
**Core idea:** Always favour the decision with the lower usability risk, even if it sacrifices some visual interest.
**Why it matters:** Safety and functionality always outweigh aesthetic novelty in production interfaces.
**UX implication:** When in doubt between two design directions, choose the one that more closely follows established conventions.
---

### Design Systems Think in Tokens
**Core idea:** Design decisions (colour, spacing, type size, radius) should be expressed as named tokens that can be changed globally.
**Why it matters:** Token-based systems make redesigns, theme switching (light/dark), and brand updates dramatically faster.
**UX implication:** Name everything: `--color-primary`, `--space-md`, `--radius-sm`. Never hardcode raw values into components.
---

### Accessibility is Non-Negotiable
**Core idea:** Every design decision should be evaluated against accessibility standards from the outset, not retrofitted at the end.
**Why it matters:** Retrofitting accessibility is 10x more expensive than building it in. And excluding users is both unethical and legally risky.
**UX implication:** Run automated accessibility checks on every new component. Test with keyboard only. Test with a screen reader. Include accessibility in your definition of done.
---

### Good Design is Invisible
**Core idea:** The best interfaces are ones users don't think about. They just accomplish their goal.
**Why it matters:** When users notice the interface — because something confused them or looks wrong — the design has failed its primary purpose.
**UX implication:** If users compliment your interface, ask what they were trying to do and whether they succeeded easily. That's the real measure.
---

*Final summary from the book's conclusion:*
- Minimise usability risk by keeping interfaces simple and familiar
- Don't just make design decisions based on what looks pretty — ensure that every interface detail has a logical reason behind it
- Minimise interaction cost and cognitive load as much as possible
- Create a design system of predefined styles, modular components, and usage guidelines to help you make consistent design decisions faster
- Good accessibility means great usability — so design interfaces for everyone to use

---

PUI_TOTAL: 142 insights extracted
