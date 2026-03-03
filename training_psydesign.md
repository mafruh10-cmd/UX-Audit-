# Psychology of Design — 106 Cognitive Biases & Principles
## Source: growth.design/psychology — Dan Benoni & Louis-Xavier Lavallée
## Categories: Information · Meaning · Time · Memory

---

## INFORMATION BIASES (1–29)

### 1. Hick's Law
**One-liner:** More options leads to harder decisions
**UX implication:** Reduce choices at every decision point. Don't show 12 filter options when 4 key ones cover 90% of use cases. Use progressive disclosure to reveal options only when needed.

### 2. Confirmation Bias
**One-liner:** People look for evidence that confirms what they think
**UX implication:** Users scan for signals that confirm their pre-existing intent. Structure copy, labels, and visuals to match the mental model of the task they believe they're doing.

### 3. Priming
**One-liner:** Previous stimuli influence users' decisions
**UX implication:** The tone, imagery, and copy users see before a CTA primes how they respond. A fear-inducing error message before a form submission will depress completion. Prime positively.

### 4. Cognitive Load
**One-liner:** Total amount of mental effort required to complete a task
**UX implication:** Every extra field, every unexplained label, every inconsistent pattern increases cognitive load. Remove anything that forces the user to think beyond the task itself.

### 5. Anchoring Bias
**One-liner:** Users rely heavily on the first piece of information they see
**UX implication:** The first number, label, or status a user sees anchors their interpretation of everything else. Put the most important value (status, price, severity) first and make it prominent.

### 6. Nudge
**One-liner:** Subtle hints can affect users' decisions
**UX implication:** Default selections, progress indicators, helper text, and inline suggestions are nudges. They guide users toward the right action without forcing it. Use them ethically.

### 7. Progressive Disclosure
**One-liner:** Users are less overwhelmed if exposed to complex features later
**UX implication:** Show only what's needed for the current step. Reveal advanced options behind "Advanced settings", expand-on-click, or tabs. Never front-load complexity.

### 8. Fitts's Law
**One-liner:** Large and close elements are easier to interact with
**UX implication:** Primary actions (CTAs, submit buttons) must be large and centrally/conveniently placed. Destructive actions (delete, logout) should be small and away from common click paths.

### 9. Attentional Bias
**One-liner:** Users' thoughts filter what they pay attention to
**UX implication:** A user on a deadline filters out anything that doesn't look like "the answer." Elements not in the path of their attention tunnel will be missed entirely.

### 10. Empathy Gap
**One-liner:** People underestimate how much emotions influence user behaviors
**UX implication:** A user hitting an error during an incident is emotionally stressed. Error messages designed for calm users will feel cold and unhelpful to stressed ones. Design for the emotional state.

### 11. Visual Anchors
**One-liner:** Elements used to guide users' eyes
**UX implication:** Headings, bold text, icons, and images act as eye anchors. Place them deliberately to guide the user through the page in the intended reading order.

### 12. Von Restorff Effect
**One-liner:** People notice items that stand out more
**UX implication:** Use visual differentiation (colour, size, shape) to make the most important element on a page stand out. Everything that is "equally important" disappears equally.

### 13. Visual Hierarchy
**One-liner:** The order in which people perceive what they see
**UX implication:** The visual weight of elements must match their information hierarchy. The most critical info (status, title, primary CTA) must have the highest visual weight.

### 14. Selective Attention
**One-liner:** People filter out things from their environment when in focus
**UX implication:** Users in flow mode ignore sidebars, banners, and secondary elements. Don't rely on ambient elements to communicate critical information — put it in the active task flow.

### 15. Survivorship Bias
**One-liner:** People neglect things that don't make it past a selection process
**UX implication:** Analytics only show users who completed a flow. The users who bounced, gave up, or failed are invisible. Survivorship bias in data leads to false confidence in broken UX.

### 16. Banner Blindness
**One-liner:** Users tune out the stuff they get repeatedly exposed to
**UX implication:** Any element that looks like an ad, a tooltip, or a recurring notification will be ignored over time. Important alerts that use a repeated pattern become invisible.

### 17. Juxtaposition
**One-liner:** Elements that are close and similar are perceived as a single unit
**UX implication:** Group related elements together and separate unrelated ones with whitespace or dividers. Proximity signals relationship; separation signals independence.

### 18. Signifiers
**One-liner:** Elements that communicate what they will do
**UX implication:** Buttons must look like buttons. Links must look like links. Drag handles need drag affordance. Users cannot interact with something they don't recognise as interactive.

### 19. Contrast
**One-liner:** Users' attention is drawn to higher visual weights
**UX implication:** The highest-contrast element on the page receives the most attention. Use contrast intentionally for CTAs and critical status info; suppress contrast for secondary content.

### 20. External Trigger
**One-liner:** When the information on what to do next is within the prompt itself
**UX implication:** Buttons, links, and CTAs should contain the action instruction — not just a label. "Generate fix" is an external trigger. "Click here" is not.

### 21. Decoy Effect
**One-liner:** Create a new option that's easy to discard
**UX implication:** Adding a clearly inferior option (decoy) makes the target option look better by comparison. Used in pricing and option selection to guide users toward a preferred choice.

### 22. Centre-Stage Effect
**One-liner:** People tend to choose the middle option in a set of items
**UX implication:** In a row of 3 options (pricing tiers, plan levels), the middle option gets disproportionately chosen. Place the recommended or most profitable option in the centre.

### 23. Framing
**One-liner:** The way information is presented affects how users make decisions
**UX implication:** "Only 3 left" vs "3 in stock" frames the same data differently. "Save 20%" vs "Pay 80% of full price" produce different responses. Frame around gain, not loss.

### 24. Law of Proximity
**One-liner:** Elements close to each other are usually considered related
**UX implication:** A label that is closer to the wrong input field will be associated with it. Error messages must be immediately adjacent to the field they describe.

### 25. Tesler's Law
**One-liner:** If you simplify too much, you'll transfer some complexity to the users
**UX implication:** Complexity cannot be eliminated, only moved. Removing a configuration step from the UI doesn't remove the decision — it moves it to user behaviour or downstream errors.

### 26. Spark Effect
**One-liner:** Users are more likely to take action when the effort is small
**UX implication:** Lower the first-step effort to near-zero. A "quick start" with pre-filled defaults gets more engagement than a blank setup wizard. Show partial completion to reduce perceived effort.

### 27. Feedback Loop
**One-liner:** When users take action, feedback communicates what happened
**UX implication:** Every user action must produce visible, immediate feedback: button state change, loading spinner, success message. No feedback = the system appears broken.

### 28. Expectations Bias
**One-liner:** People tend to be influenced by their own expectations
**UX implication:** Users bring expectations from their past experience (other apps, prior sessions). Violating those expectations creates friction. Match conventions users already know.

### 29. Aesthetic-Usability Effect
**One-liner:** People perceive designs with great aesthetics as easier to use
**UX implication:** A visually polished UI is perceived as more usable, even before a user interacts with it. Good aesthetics also make users more forgiving of minor usability issues.

---

## MEANING BIASES (30–61)

### 30. Social Proof
**One-liner:** Users adapt their behaviors based on what others do
**UX implication:** Show what peers have done ("3,200 teams use this"), what others chose ("most popular"), and what others think (ratings, reviews). Social proof reduces decision anxiety.

### 31. Scarcity
**One-liner:** People value things more when they're in limited supply
**UX implication:** "Only 2 seats left" or "This offer expires in 4h" creates urgency. Use ethically — manufactured scarcity destroys trust when discovered.

### 32. Curiosity Gap
**One-liner:** Users have a desire to seek out missing information
**UX implication:** Partial information (a preview, an unexpanded section, a blurred result) creates a pull to complete the knowledge. Use to encourage exploration of secondary content.

### 33. Mental Model
**One-liner:** Users have a preconceived opinion of how things work
**UX implication:** Match the UI to users' existing mental models of how similar tools work. Deviating from established patterns forces users to build new models — which takes effort and creates errors.

### 34. Familiarity Bias
**One-liner:** People prefer familiar experiences
**UX implication:** Users prefer interfaces that feel like things they've used before. Use established patterns (left nav, top search, breadcrumbs) unless you have compelling reason to deviate.

### 35. Halo Effect
**One-liner:** People judge things based on their feelings towards one trait
**UX implication:** A polished logo, professional typography, and clean layout create a halo of trustworthiness for the entire product, even before any features are evaluated.

### 36. Miller's Law
**One-liner:** Users can only keep 7±2 items in their working memory
**UX implication:** Navigation menus, option groups, and form sections should not exceed 7 items. Group and chunk information to avoid overflowing working memory.

### 37. Unit Bias
**One-liner:** One unit of something feels like the optimal amount
**UX implication:** Default quantities, serving sizes, and input defaults should be set at "1". Users will accept the default unit as correct unless given strong reason to change.

### 38. Flow State
**One-liner:** Being fully immersed and focused on a task
**UX implication:** Design flows that minimise interruptions. Modals, notifications, and context switches break flow. When a user is in the task zone, every interruption has a recovery cost.

### 39. Skeuomorphism
**One-liner:** Users adapt more easily to things that look like real-world objects
**UX implication:** Familiar visual metaphors (a trash can for delete, a folder for collections, a toggle like a physical switch) reduce learning time by leveraging real-world knowledge.

### 40. Reciprocity
**One-liner:** People feel the need to reciprocate when they receive something
**UX implication:** Free tools, free content, and proactive help create a reciprocal obligation. Users who receive value from a product feel more inclined to give something back (subscription, referral).

### 41. Singularity Effect
**One-liner:** Users care disproportionately about an individual as compared to a group
**UX implication:** "Help Ahmed fix his pipeline" resonates more than "Help your team." Personalisation converts a generic message to one that triggers individual empathy and action.

### 42. Authority Bias
**One-liner:** Users attribute more importance to the opinion of an authority figure
**UX implication:** Security badges, expert quotes, certification logos, and "as seen in" placements leverage authority bias to increase trust and conversion.

### 43. Pseudo-Set Framing
**One-liner:** Tasks that are part of a group are more tempting to complete
**UX implication:** Progress bars, completion checklists ("3 of 5 steps done"), and achievement systems all use pseudo-set framing to motivate task completion.

### 44. Variable Reward
**One-liner:** People especially enjoy unexpected rewards
**UX implication:** Predictable rewards become boring. Unexpected rewards (surprise features, random achievements, unannounced delight moments) trigger dopamine and build engagement.

### 45. Group Attractiveness Effect
**One-liner:** Individual items seem more attractive when presented in a group
**UX implication:** Showing a curated set of examples, testimonials, or features together makes each individual item seem more credible than showing it in isolation.

### 46. Curse of Knowledge
**One-liner:** Not realizing that people don't have the same level of knowledge
**UX implication:** Teams who build products become blind to their own complexity. What seems "obvious" to the builder is opaque to new users. Always test with actual first-time users.

### 47. Aha! Moment
**One-liner:** When new users first realize the value of your product
**UX implication:** Identify the one moment where users "get it" and design the entire onboarding to reach that moment as fast as possible. Everything before it is friction.

### 48. Self-Initiated Triggers
**One-liner:** Users are more likely to interact with prompts they set up for themselves
**UX implication:** User-configured notifications, reminders, and alerts have dramatically higher engagement than system-initiated ones. Let users opt in to and configure their own triggers.

### 49. Survey Bias
**One-liner:** Users tend to skew survey answers towards what's socially acceptable
**UX implication:** Survey data reflects what users think they should say, not necessarily what they do. Behavioural data (analytics, session recordings) is more reliable than self-reported surveys.

### 50. Cognitive Dissonance
**One-liner:** It's painful to hold two opposing ideas in our mind
**UX implication:** When a UI shows conflicting information (a success state and an error simultaneously, or an enabled feature with a disabled CTA) it creates cognitive dissonance that blocks action.

### 51. Goal Gradient Effect
**One-liner:** Motivation increases as users get closer to their goal
**UX implication:** Show progress early and often. Users work harder and abandon less when they can see they're close to completion. A 70%-full progress bar is more motivating than 10%.

### 52. Feedforward
**One-liner:** When users know what to expect before they take action
**UX implication:** Labels, placeholders, helper text, and preview states that communicate what will happen when the user acts. "This will delete all data permanently" is feedforward.

### 53. Occam's Razor
**One-liner:** Simple solutions are often better than the more complex ones
**UX implication:** When choosing between a complex and simple approach to a UI problem, default to simpler. Complexity has compounding maintenance and usability costs.

### 54. Noble Edge Effect
**One-liner:** Users tend to prefer socially responsible companies
**UX implication:** Communicating values (sustainability, fairness, inclusion) in product copy and design builds preference and loyalty beyond purely functional reasons.

### 55. Hawthorne Effect
**One-liner:** Users change their behavior when they know they are being observed
**UX implication:** Usability testing results are biased by awareness of being observed. Users perform better when watched. Real-world analytics and session recordings provide more accurate data.

### 56. Hindsight Bias
**One-liner:** People overestimate their ability to predict outcomes after the fact
**UX implication:** After a usability issue is discovered, teams say "we should have known." This normalises not testing early. The bias makes post-hoc problem identification easy but prediction hard.

### 57. Law of Similarity
**One-liner:** Users perceive a relationship between elements that look similar
**UX implication:** Elements that share colour, shape, or size are perceived as belonging to the same group or having the same function. Use visual similarity to communicate functional similarity.

### 58. Law of Prägnanz
**One-liner:** Users interpret ambiguous images in a simpler and more complete form
**UX implication:** Users will simplify and fill in gaps in ambiguous UI. If an icon or layout is slightly ambiguous, users will interpret it in the way that requires least effort — which may not be what you intended.

### 59. Streisand Effect
**One-liner:** Trying to censor information increases awareness of it
**UX implication:** Hiding or heavily restricting information often draws more attention to it. If something needs to be de-emphasised, use visual de-emphasis (muted colour, small font) not removal.

### 60. Spotlight Effect
**One-liner:** People tend to believe they are being noticed more than they really are
**UX implication:** Users feel exposed and judged during onboarding and public-facing actions. Design to reduce anxiety: reassure users their actions are normal and unobserved.

### 61. Fresh Start Effect
**One-liner:** Users are more likely to take action if there's a feeling of new beginnings
**UX implication:** New year prompts, "Start fresh" CTAs, onboarding re-entry flows, and seasonal moments leverage fresh-start psychology to re-engage dormant users.

---

## TIME BIASES (62–89)

### 62. Labor Illusion
**One-liner:** People value things more when they see the work behind them
**UX implication:** Showing processing steps, animated progress, or "what Arga is doing" during wait times makes users value the output more and tolerate waits better than an instant blank result.

### 63. Default Bias
**One-liner:** Users tend not to change an established behavior
**UX implication:** Defaults are extremely sticky. Set defaults to the optimal choice for the majority of users. Changing a default requires active effort — most users will never change it.

### 64. Investment Loops
**One-liner:** When users invest themselves, they're more likely to come back
**UX implication:** The more users configure, customise, and add data to a product, the harder it is to leave. Encourage early investment (profile setup, data import, onboarding completion).

### 65. Loss Aversion
**One-liner:** People prefer to avoid losses more than earning equivalent gains
**UX implication:** "Don't lose your progress" is more motivating than "Save your progress." Framing actions as preventing loss is more powerful than framing them as gaining something.

### 66. Commitment & Consistency
**One-liner:** Users tend to be consistent with their previous actions
**UX implication:** Once a user takes a small action (signing up, completing step 1), they feel psychologically committed to complete the journey. Micro-commitments drive macro-conversions.

### 67. Sunk Cost Effect
**One-liner:** Users are reluctant to pull out of something they're invested in
**UX implication:** Users who have filled in 5 of 7 form fields are very reluctant to abandon the form. Showing progress through partially-completed flows exploits sunk cost to drive completion.

### 68. Decision Fatigue
**One-liner:** Making a lot of decisions lowers users' ability to make rational ones
**UX implication:** Long forms, multi-step wizards, and repeated micro-decisions exhaust decision-making capacity. Place the highest-stakes decision early, before the user is fatigued.

### 69. Reactance
**One-liner:** Users are less likely to adopt a behavior when they feel forced
**UX implication:** Mandatory fields, forced onboarding, blocked navigation, and interstitial ads trigger reactance — users resist and resent the pressure. Offer choices, not mandates.

### 70. Observer-Expectancy Effect
**One-liner:** Researchers' biases influence participants in an experiment
**UX implication:** User researchers must use neutral, unbiased language. Leading questions ("did you find the checkout easy?") produce false-positive results and invalid insights.

### 71. Weber's Law
**One-liner:** Users adapt better to small incremental changes
**UX implication:** Large, sudden UI changes cause resistance. Gradual rollouts, A/B testing with small populations, and phased redesigns allow users to adapt incrementally.

### 72. Law of the Instrument
**One-liner:** If all you have is a hammer, everything looks like a nail
**UX implication:** Design teams over-apply familiar patterns (modals, sidebars, dropdowns) to every problem. Evaluate each UX challenge on its own merits rather than defaulting to a familiar pattern.

### 73. Temptation Bundling
**One-liner:** Hard tasks are less scary when coupled with something users desire
**UX implication:** Pairing a friction-heavy required step with a desirable reward ("complete your profile to unlock analytics") makes the hard task more appealing.

### 74. Parkinson's Law
**One-liner:** The time required to complete a task will take as much time as allowed
**UX implication:** Deadlines and time limits drive task completion. Setting expectations ("this takes 2 minutes") creates a self-fulfilling time-box that users try to meet.

### 75. Dunning-Kruger Effect
**One-liner:** People tend to overestimate their skills when they don't know much
**UX implication:** Novice users often think they understand an interface better than they do, leading them to skip tutorials. Design for the gap between perceived and actual knowledge.

### 76. Affect Heuristic
**One-liner:** People's current emotions cloud and influence their judgment
**UX implication:** A user who just hit a frustrating bug will rate the entire product more negatively. Emotional state at the point of evaluation disproportionately influences perceived quality.

### 77. Hyperbolic Discounting
**One-liner:** People tend to prioritize immediate benefits over bigger future gains
**UX implication:** Users prefer "get results now" over "get better results in 2 weeks." Immediate value demonstration beats promised future value. Show wins fast.

### 78. Chronoception
**One-liner:** People's perception of time is subjective
**UX implication:** A 3-second wait feels longer when there's no feedback. A progress bar or activity animation reduces perceived wait time. The same wait feels different with and without feedback.

### 79. Cashless Effect
**One-liner:** People spend more when they can't actually see the money
**UX implication:** Abstract units (credits, tokens, points) feel less like "real money." Users make different decisions when spending credits than when spending dollars displayed prominently.

### 80. Self-Serving Bias
**One-liner:** People take credit for positive events and blame others if negative
**UX implication:** When users make errors, they blame the interface, not themselves. Error messages must never imply user fault. Always frame errors as system issues with a clear path forward.

### 81. Pareto Principle
**One-liner:** Roughly 80% of the effects come from 20% of the causes
**UX implication:** 20% of features drive 80% of usage. Identify and optimise those features first. 80% of errors come from 20% of UI patterns — fix those patterns to fix most of the problems.

### 82. Discoverability
**One-liner:** The ease with which users can discover your features
**UX implication:** Features that users can't find don't exist to them. Use progressive disclosure, tooltips, empty states, and onboarding flows to surface features users don't know about.

### 83. Backfire Effect
**One-liner:** When people's convictions are challenged, their beliefs get stronger
**UX implication:** Confrontational error messages or warnings that challenge a user's decision will cause them to double down rather than reconsider. Use neutral, non-judgmental framing.

### 84. False Consensus Effect
**One-liner:** People overestimate how much other people agree with them
**UX implication:** Designers and PMs assume all users think like they do. Test with real users. Your preferences, workflows, and mental models are not the default.

### 85. Bandwagon Effect
**One-liner:** Users tend to adopt beliefs in proportion to how many others have already done so
**UX implication:** "Join 50,000 teams already using Arga" works because of bandwagon dynamics. Showing adoption metrics drives further adoption, especially for new or unknown products.

### 86. Second-Order Effect
**One-liner:** The consequences of the consequences of actions
**UX implication:** Optimising for a metric (clicks) may produce a second-order effect (users click but don't convert). Always model downstream effects of UI changes, not just the first-order metric.

### 87. Barnum-Forer Effect
**One-liner:** When you believe generic personality descriptions apply specifically to you
**UX implication:** Personalised-seeming copy ("Based on your usage, we recommend…") generates higher engagement even when the recommendation is not truly personalised.

### 88. IKEA Effect
**One-liner:** When users partially create something, they value it way more
**UX implication:** Letting users customise, configure, or contribute to a product (themes, dashboards, templates) dramatically increases their attachment to and retention in it.

### 89. Planning Fallacy
**One-liner:** People tend to underestimate how much time a task will take
**UX implication:** Users will underestimate how long onboarding, setup, or migration takes. Set accurate time expectations upfront to prevent abandonment when reality doesn't match hope.

---

## MEMORY BIASES (90–106)

### 90. Provide Exit Points
**One-liner:** Invite users to leave your app at the right moment
**UX implication:** Building in graceful exit points (share result, save and close, "you're done") leaves users with a positive last impression and high likelihood of return.

### 91. Peak-End Rule
**One-liner:** People judge an experience by its peak and how it ends
**UX implication:** The most memorable moment and the last moment define how users remember a session. Design delightful peaks (aha moments, successful completions) and clean, satisfying endings.

### 92. Sensory Appeal
**One-liner:** Users engage with things appealing to multiple senses
**UX implication:** Motion, sound, haptics, and visual polish make interactions more memorable. Even subtle microinteractions (button press feedback, success animation) improve memory of a product.

### 93. Zeigarnik Effect
**One-liner:** People remember incomplete tasks better than completed ones
**UX implication:** Unfinished progress (incomplete profiles, half-filled forms, open incidents) stays top of mind. Use this to re-engage users: "You have 2 unresolved incidents" is more compelling than completed task counts.

### 94. Endowment Effect
**One-liner:** Users value something more if they feel it's theirs
**UX implication:** Pre-populate data, show "your dashboard", "your team", "your incidents." Ownership language and personalisation make users value the product more and resist churning.

### 95. Chunking
**One-liner:** People remember grouped information better
**UX implication:** Group related information into chunks (sections, cards, visual groups). A phone number displayed as 0441-234-567 is easier to remember and verify than 0441234567.

### 96. Picture Superiority Effect
**One-liner:** People remember pictures better than words
**UX implication:** Icons, illustrations, and screenshots are remembered better than text labels. Use visuals to anchor key concepts and status states, especially in onboarding and empty states.

### 97. Method of Loci
**One-liner:** People remember things more when they're associated with a location
**UX implication:** Consistent layout placement (status always top-left, CTA always bottom-right) builds spatial memory. Users remember where things are and can navigate faster with each session.

### 98. Shaping
**One-liner:** Incrementally reinforcing actions to get closer to a target behavior
**UX implication:** Don't expect users to jump to complex behaviours immediately. Reward small steps toward the target action, gradually increasing complexity as behaviour is reinforced.

### 99. Delighters
**One-liner:** People remember more unexpected and playful pleasures
**UX implication:** Small, unexpected moments of delight (a funny empty state, a celebratory animation, a thoughtful success message) are disproportionately memorable and shareable.

### 100. Internal Trigger
**One-liner:** When users are prompted to take action based on a memory
**UX implication:** The strongest retention is when users remember to use a product on their own, without external prompts. Design habits by making the product the obvious solution to a recurring need.

### 101. Recognition Over Recall
**One-liner:** It's easier to recognize things than recall them from memory
**UX implication:** Show options, don't ask users to type them from memory. Autocomplete, recent items, suggestions, and previews all leverage recognition. Never force pure recall.

### 102. Storytelling Effect
**One-liner:** People remember stories better than facts alone
**UX implication:** Frame onboarding, error states, and success states as narrative moments. "Ahmed's deployment is fixed" is more memorable than "Incident #9 resolved."

### 103. Negativity Bias
**One-liner:** Users recall negative events more than positive ones
**UX implication:** One bad experience (a crash, a data loss, a confusing error) is remembered far longer than ten positive interactions. Design the recovery from failure states with extreme care.

### 104. Availability Heuristic
**One-liner:** Users favor recent and available information over past information
**UX implication:** Whatever the user last saw or experienced shapes their current evaluation. The most recent session quality disproportionately determines their perception of the overall product.

### 105. Spacing Effect
**One-liner:** People learn more effectively when study sessions are spaced out
**UX implication:** Onboarding shouldn't front-load everything. Spread feature discovery across sessions. Contextual tips and progressive feature reveals are more effective than one-time tutorials.

### 106. Serial Position Effect
**One-liner:** It's easier for users to recall the first and last items of a list
**UX implication:** In navigation menus, feature lists, and option groups, place the most important items first and last. Middle items have the lowest recall and should contain the least critical options.

---

PSYDESIGN_TOTAL: 106 principles extracted
