# 100 MORE Things Every Designer Needs to Know About People
**Author:** Susan Weinschenk, Ph.D.
**Source:** EPUB extracted from `/Users/mafruhurfaruqi/Desktop/training materials/100 MORE Things Every Designer Needs to Know About People.epub/OEBPS/`

---

## Chapter 1: How People See

### Thing 1: People Prefer Curved Shapes

**What it is:** Humans have an innate preference for curved, rounded shapes and contours over sharp-edged or angular ones. This bias operates subconsciously and affects both visual preference and emotional response.

**Research basis:** Moshe Bar and Maital Neta (2006) conducted studies showing that people rated curved objects and patterns as more pleasing and preferred them over sharp-cornered versions of the same objects. Follow-up research by Leder, Tinio, and Bar (2011) found that this preference is modulated by emotional valence — objects associated with positive emotions showed even stronger preferences for curvature.

**Design implication:** When given a choice, use curved, rounded shapes and soft contours in UI elements. People associate sharp angles with threat and danger at a subconscious level, while curves feel safe and approachable.

**UI application:** Design rounded-corner buttons, cards, and modal dialogs rather than sharp rectangular ones. Apply `border-radius` generously in CSS. For icon sets and illustrations, prefer rounded line terminations and soft forms over pointed corners.

---

### Thing 2: People Prefer Symmetry

**What it is:** The human visual system and aesthetic sense are strongly biased toward symmetrical patterns. Symmetry is perceived as beautiful, healthy, and trustworthy. The brain processes symmetric forms more easily, which itself generates a positive feeling.

**Research basis:** Evolutionary psychology research links symmetry preference to mate selection — symmetrical faces indicate genetic health. Steven Gangestad, Leslie Merriman, and Melissa Thompson (2010) demonstrated that fluctuating asymmetry (minor deviations from perfect symmetry) negatively affects perceived attractiveness. This preference extends beyond faces to all designed objects.

**Design implication:** Use symmetrical layouts in your designs wherever possible. Balanced, mirrored compositions feel more trustworthy and aesthetically pleasing. Asymmetry should be used intentionally and sparingly to create emphasis, not as a default.

**UI application:** Center-align hero sections, keep navigation items balanced, use symmetrical icon designs. When building a dashboard, use a grid that creates visual balance left-to-right. Logos and brand marks should lean symmetric unless asymmetry is part of the brand identity.

---

### Thing 3: Some People Have an Extra Color Cone

**What it is:** Most people have three types of color receptor cones (trichromats). A small subset of people — mostly women — have four types of cones (tetrachromats) and can perceive far more color distinctions than the average person. Meanwhile, approximately 8% of men and 0.5% of women have some form of color deficiency (dichromacy or anomalous trichromacy).

**Research basis:** H. L. de Vries (1948) first identified the existence of four-cone color vision. More recent genetic research has confirmed that tetrachromacy exists in a small portion of the female population due to a variant gene on the X chromosome. The wide variation in color perception across the population is well-established.

**Design implication:** Never rely on color alone as the only way to convey information, because a significant portion of your audience cannot distinguish certain colors (most commonly red/green). Design for the full range of color perception.

**UI application:** Always pair color coding with a secondary indicator — icon, pattern, label, or position. For error states, don't just turn a form field red; also add an error icon and error message text. Run your designs through a color-blindness simulator (e.g., Coblis or Stark plugin) before shipping.

---

### Thing 4: Peripheral Vision Determines Where Central Vision Should Look

**What it is:** The human visual system works in two parallel modes: peripheral vision (the wide-angle, low-resolution field around the edges of your visual field) and central/foveal vision (the high-resolution, narrow focal area). Peripheral vision constantly scans the environment and directs where the fovea should point next. People are not consciously aware of this process.

**Research basis:** Casimir Ludwig, J. Rhys Davies, and Miguel Eckstein (2014) published research showing that peripheral vision performs active selection — it continuously evaluates the visual scene and guides eye movement to the most informationally relevant locations. The fovea doesn't move randomly; it is directed by peripheral analysis.

**Design implication:** What appears in a user's peripheral field matters enormously. Elements at the edges of the screen influence what users notice and where their eyes move, even if users are focused centrally. Peripheral placement of navigation, alerts, or calls to action is not neutral.

**UI application:** Place your highest-priority secondary actions in areas that will appear in peripheral vision when the user is looking at the primary focal point. Use motion or bright color in peripheral zones sparingly — each instance will pull foveal attention. Notifications, badges, and hover states in sidebars all compete for peripheral attention redirection.

---

### Thing 5: Peripheral Vision Sees Danger and Processes Emotions Faster

**What it is:** The peripheral visual system (specifically the magnocellular pathway) is specialized for detecting movement, sudden changes, and emotional stimuli faster than central vision. Emotional facial expressions — particularly fearful ones — are detected and processed by the amygdala via peripheral vision before the person is consciously aware of them.

**Research basis:** Dimitri Bayle, Benjamin Schoendorff, et al. (2011) demonstrated that emotional facial expressions presented in the peripheral visual field are detected and generate neural responses faster than emotionally neutral stimuli. The unconscious threat-detection system routes through peripheral vision specifically.

**Design implication:** Animation, motion, sudden bright flashes, or emotionally charged imagery appearing in the periphery will hijack attention and trigger stress responses. Use peripheral motion conservatively and never to deceive. Conversely, subtle peripheral cues can guide attention without being pushy.

**UI application:** Avoid autoplay video and animated banner ads that appear in the peripheral field when the user is focused on content — they cause stress and frustration. When designing loading states or progress indicators, place them centrally rather than in the periphery to avoid anxiety-inducing peripheral movement.

---

### Thing 6: Peripheral Vision is Like a Low-Resolution Image

**What it is:** The periphery of the visual field has very low acuity — it cannot resolve fine detail, small text, or subtle color distinctions. It is optimized for detecting motion, contrast, and broad shapes, not for reading or fine discrimination. What users can "see" peripherally is much less detailed than they consciously realize.

**Research basis:** The density of cone photoreceptors drops sharply outside the foveal region. The peripheral retina is dominated by rod cells, which provide low-resolution, low-color, motion-sensitive vision. This is basic visual neuroscience supported by decades of psychophysics research.

**Design implication:** Don't rely on peripheral placement to convey important detailed information. Small text, subtle icons, or fine-grained visual distinctions placed outside the central viewing area will likely be missed entirely.

**UI application:** Keep critical alerts, error messages, and required-action indicators near the current focal point of the user (e.g., near the form field that has an error, not in a corner notification bar). If you must use a peripheral notification area, make it high-contrast and large enough to be detected peripherally, understanding that detail will not be read until the user's focus shifts.

---

### Thing 7: Emotion vs. Gaze Direction: Emotion Wins

**What it is:** People instinctively follow the gaze direction of faces in images — a phenomenon called joint attention. However, when a face displays a strong emotional expression, that emotion overrides the gaze-following behavior. People attend to the emotion rather than follow the gaze.

**Research basis:** Giovanni Galfano, Mario Dalmaso, et al. (2012) showed that gaze direction in images cues attention toward where the face appears to be looking. However, multiple studies demonstrate that emotional valence in a face modulates this effect — a fearful or angry face draws attention to itself rather than cueing the viewer to follow the gaze direction.

**Design implication:** A common design technique is to place a face looking toward a CTA (call-to-action) button, expecting users to follow the gaze. This works — but only if the face is neutral or mildly positive. If the face has a strong emotional expression, users look at the face, not the CTA.

**UI application:** On landing pages featuring human photography, test whether the face is pulling gaze toward or away from the conversion element. Use a neutral or subtly smiling face looking toward the CTA. Avoid using highly emotional or dramatic expressions in photos that are meant to guide attention elsewhere.

---

### Thing 8: Direct Gaze Can Backfire

**What it is:** Direct eye contact from a face in an image or on screen creates a sense of being watched and triggers a psychological defense response. Rather than increasing persuasion or connection, direct gaze can actually increase resistance to the message being communicated, particularly for persuasive content.

**Research basis:** Frances Chen, Julia Minson, et al. (2013) conducted studies showing that when a persuasive speaker makes direct eye contact, listeners become more resistant to the argument, not more convinced. The instinct is to hold one's ground when being "stared at." This is counter-intuitive but robust.

**Design implication:** Avoid using images of people staring directly at the camera on pages where you're trying to persuade or convert. Direct gaze on a sales page, a donation ask, or a sign-up prompt may actually reduce conversion rates by triggering resistance.

**UI application:** On conversion-focused landing pages, opt for images of people in 3/4 profile or looking slightly away rather than directly at the viewer. Reserve direct gaze for contexts where authority, attention, or presence is the goal (e.g., a spokesperson video, a profile photo). Test variants.

---

### Thing 9: People Decide About a Design in a Split Second

**What it is:** First impressions of a design are formed extremely rapidly — in as little as one-third of a second (approximately 333 milliseconds). This snap judgment is primarily aesthetic and emotional, and it strongly influences all subsequent evaluation of the design, even after extended use.

**Research basis:** Milica Milosavljevic, Christof Koch, and Antonio Rangel (2011) demonstrated that consumers can make comparative visual judgments in as little as 313ms. Lane Harrison, Katharina Reinecke, and Remco Chang (2015) showed that first-impression aesthetic ratings of data visualizations form immediately and correlate with long-term preference.

**Design implication:** The first 0.3–0.5 seconds of a user's exposure to your design are the most impactful. Visual hierarchy, whitespace, color, and overall composition must signal quality and relevance in the very first glance. No amount of good interaction design recovers from a poor first visual impression.

**UI application:** Invest heavily in the above-the-fold design of key pages. The hero image, headline typography, and primary button must communicate brand quality and user value at a glance. Avoid clutter, competing focal points, or low-quality imagery in the initial viewport. Performance matters too — a slow-loading page breaks the first impression before it can form.

---

## Chapter 2: How People Think and Remember

### Thing 10: People Use Two Kinds of Thinking

**What it is:** Human cognition operates on two distinct systems. System 1 is fast, automatic, unconscious, emotional, and effortless — it handles most moment-to-moment decisions and judgments. System 2 is slow, deliberate, conscious, logical, and effortful — it is engaged for complex analysis and careful reasoning. System 1 runs constantly; System 2 is activated only when necessary and is easily fatigued.

**Research basis:** Daniel Kahneman's foundational work, consolidated in "Thinking, Fast and Slow" (2013), describes the dual-process model of cognition based on decades of research. This framework builds on earlier work by Tversky, Stanovich, and others.

**Design implication:** Most user behavior is governed by System 1 — instinctive, pattern-matching, and emotionally driven. Design for System 1 by making the right action obvious, reducing cognitive load, and leveraging familiar patterns. Don't require users to consciously work through your interface logic. Reserve System 2 demands for the rare moments that truly require deliberate thought.

**UI application:** Design navigation labels, CTA copy, and icon meanings so they are instantly recognizable without conscious decoding. Use established UI conventions (hamburger menus, cart icons, search magnifier) rather than novel alternatives that force System 2 engagement. Keep forms minimal to avoid exhausting System 2 resources before the user completes the task.

---

### Thing 11: Some Memories Change Easily

**What it is:** Not all memories are stable records of events. Autobiographical memories (personal life events) and flashbulb memories (vivid memories of emotionally charged events) are reconstructive — they are rebuilt each time they are retrieved, and can be subtly altered in the process. Even highly confident memories can be false or distorted.

**Research basis:** William Hirst, Elizabeth Phelps, et al. (2015) conducted a 10-year longitudinal study of memories of the September 11, 2001 attacks. People's memories of where they were and what they experienced changed significantly over time, even though they remained highly confident in their (now inaccurate) recollections. Steven Frenda, Eric Knowles, et al. (2013) showed that false memories of political events could be implanted by showing people doctored photographs.

**Design implication:** Users' memories of their own past behavior, preferences, and interactions with your product will be reconstructed and unreliable. Self-reported data (surveys, interviews) about past behavior should be treated with skepticism. Design to capture behavioral data in context, not retroactively through memory.

**UI application:** Don't rely on users accurately remembering their previous settings, purchases, or actions — show them their history. "Recently viewed," "Your last order," and "Previously saved" features compensate for reconstructive memory. In user research, use diary studies and contextual observation rather than relying on retrospective recall interviews alone.

---

### Thing 12: Repetition Strengthens Some Memories

**What it is:** Repetition is the primary mechanism for transferring information from short-term to long-term memory. Spaced repetition — exposing people to information multiple times at increasing intervals — is particularly effective. Repetition also creates the "illusory truth effect": people judge information as more true simply because they have encountered it more times.

**Research basis:** Lynn Hasher, David Goldstein, and Thomas Toppino (1977) first documented the illusory truth effect — repeated exposure to statements increases their perceived truthfulness, regardless of actual accuracy. Research on semantic memory, muscle/procedural memory, and sensory memory all support distinct mechanisms that are each strengthened by repetition. Alan Brown, Lori Brown, and Sally Zoccoli (2002) confirmed repetition-based credibility enhancement.

**Design implication:** Repeated exposure to your brand, value proposition, and key messages across touchpoints builds both memory and perceived credibility. For learning-oriented products (onboarding, tutorials), spaced repetition of key concepts improves retention. Be aware that users will remember and believe frequently repeated UI labels and messages.

**UI application:** Use consistent terminology and iconography throughout an application — repetition builds muscle memory and reduces cognitive load over time. In onboarding flows, revisit key concepts across multiple sessions rather than cramming everything into first use. For marketing, consistent message repetition across ads, emails, and landing pages builds familiarity that translates to trust.

---

### Thing 13: Music Evokes Memories and Moods

**What it is:** Music has a uniquely powerful connection to autobiographical memory and emotional state. Hearing a piece of music can instantly evoke vivid memories from the period of life when it was first heard, and can reliably shift mood states. The brain synchronizes neural activity across listeners when hearing the same music (inter-subject synchronization).

**Research basis:** Daniel Abrams, Srikanth Ryali, et al. (2013) demonstrated inter-subject neural synchronization during shared music listening using fMRI. Mona Lisa Chanda and Daniel Levitin (2013) reviewed neurochemical evidence for music's effects, identifying dopamine, serotonin, cortisol, and opioid systems as involved. Elizabeth Margulis (2013) documented the relationship between musical repetition and emotional engagement.

**Design implication:** Sound design in digital products is not cosmetic — it directly affects users' emotional state and memory encoding. Background music in apps, websites, or presentations shapes the emotional experience and what users remember about it. Music choice carries enormous cultural and personal weight.

**UI application:** For apps where ambient audio is appropriate (meditation, productivity, games), curate music thoughtfully to match the target emotional state. In video content, use music to create emotional anchoring at key moments. Avoid autoplay music on web pages — it overwhelms and irritates most users. If using notification sounds, keep them brief, pleasant, and on-brand. Always provide audio off/on controls.

---

## Chapter 3: How People Decide

### Thing 14: People Make Decisions with System 1 (Truthiness) Thinking

**What it is:** Most decisions — including those about what information to believe — are made using System 1's fast, associative, pattern-matching processing. Something "feels" true or false based on familiarity, fluency, and emotional resonance, not on logical analysis. This is the cognitive basis for "truthiness" — the quality of seeming true regardless of evidence.

**Research basis:** Erin Newman, Maryanne Garry, et al. (2015) showed that judgments of truthfulness of trivia statements were affected by contextual factors unrelated to factual accuracy. Rolf Reber and Norbert Schwarz (1999) demonstrated that perceptual fluency — how easily information is processed — increases its perceived truthfulness. Kahneman's (2013) dual-process framework is the theoretical foundation.

**Design implication:** Users judge the credibility of your content based largely on visual presentation and familiarity, not on the actual quality of the information. Clean, professional, easy-to-read design increases perceived credibility. Cluttered, difficult-to-process design reduces it.

**UI application:** Use familiar design conventions, clean typography, and ample whitespace to create processing fluency — content will be perceived as more credible. Trust signals (logos, testimonials, review counts) work via System 1 association, not System 2 analysis. Make key messages visually prominent and easy to read, reducing cognitive friction that would signal "this seems off."

---

### Thing 15: People Choose What's Brightest

**What it is:** Visual salience — brightness, high contrast, and distinctiveness from surroundings — strongly biases choice. When given options, people are more likely to select or attend to the most visually salient item, even if that salience is arbitrary and unrelated to the quality or relevance of the option.

**Research basis:** Milica Milosavljevic, Vidhya Navalpakkam, Christof Koch, and Antonio Rangel (2012) showed that relative visual saliency differences introduced sizable biases in consumer choice. More salient product images on a page received disproportionately more attention and selection. The brain's visual salience maps influence behavior below conscious awareness.

**Design implication:** The most visually prominent element on a page will receive disproportionate attention and interaction. This is a powerful tool for guiding user behavior — or a source of unintended manipulation if not managed deliberately.

**UI application:** Use visual salience deliberately: make your primary CTA button the most visually prominent element on the page through size, color contrast, and whitespace isolation. If you have a "recommended" plan in a pricing table, make it visually distinct with a highlighted border, different background color, or slightly larger size. Never make the most dangerous action (e.g., "Delete account") visually prominent.

---

### Thing 16: When Faced with a Complex Decision, People Follow Their Feelings

**What it is:** For complex multi-attribute decisions (many variables, difficult trade-offs), people are more likely to make better-satisfying decisions by using their feelings (System 1 affect) than by trying to analyze all options consciously (System 2). Deliberation can actually worsen decision quality for complex choices.

**Research basis:** Joseph Mikels, Sam Maglio, Andrew Reed, and Lee Kaplowitz (2011) demonstrated that decisions guided by feelings produced better outcomes for complex scenarios. Mara Mather and Nichole Lighthall (2012) showed that emotional decision-making patterns differ by gender and stress level. The affect heuristic is well-documented across the decision-making literature.

**Design implication:** For high-complexity decisions in your product (choosing a plan, configuring a complex product, selecting a medical treatment), emotional framing and intuitive summaries serve users better than presenting raw data dumps. Help users get to their gut feeling rather than forcing exhaustive analytical comparison.

**UI application:** For complex product configuration or service selection, provide a "recommendation" that gives users permission to trust a simplified conclusion. Use emotional language and imagery in summaries. Offer comparison tables for those who want to analyze, but make the recommended/popular option emotionally easy to choose with clear framing.

---

### Thing 17: The Pupils Dilate During a Difficult Decision

**What it is:** Pupil dilation is a reliable physiological indicator of cognitive effort and arousal. When facing a difficult or consequential decision, pupils dilate measurably. This is an involuntary response that occurs outside conscious control, making it a trustworthy behavioral signal in research contexts.

**Research basis:** Jan Willem de Gee, Tomas Knapen, and Tobias Donner (2014) documented decision-related pupil dilation patterns and showed they reflect both the difficulty of an upcoming decision and individual bias. Romain Grandchamp, Claire Braboszcz, et al. (2011) linked pupil dilation to mind-wandering and increased cognitive load states.

**Design implication:** Pupillometry can be used in UX research to identify decision points in an interface where users experience cognitive difficulty, even when users themselves cannot articulate the friction. This objective measurement reveals hidden pain points.

**UI application:** In formal usability testing with eye-tracking equipment, add pupillometry monitoring to identify which decision points in your checkout flow, form completion sequence, or configuration wizard create the most cognitive strain. Use this data to prioritize UX improvements. If resource-constrained, use think-aloud protocols and hesitation timing as proxies for identifying difficult decision moments.

---

### Thing 18: Confidence Triggers Decisions

**What it is:** The feeling of confidence — not necessarily having more information — is what actually triggers a person to commit to a decision. Once a person reaches a threshold of confidence, they will decide. Providing more information beyond that threshold does not help; it may even cause decision fatigue and paralysis.

**Research basis:** Roozbeh Kiani, Leah Corthell, and Michael Shadlen (2014) showed using neural recording and behavioral modeling that confidence signals are computed continuously during deliberation and that the decision is triggered when confidence crosses a threshold. The time spent deliberating correlates with confidence building, not information accumulation per se.

**Design implication:** The goal of good UX at decision points is to build user confidence efficiently, not to present maximum information. Overloading users with information can actually delay or prevent decisions by preventing confidence from crystallizing.

**UI application:** On checkout pages, show trust signals (SSL badge, return policy, customer ratings) that build confidence rather than more product specifications. At plan-selection screens, a "Most popular" badge or "What we recommend for you" message builds confidence. Testimonials and social proof build confidence. Remove information that creates doubt or triggers new questions rather than resolving them.

---

### Thing 19: The Surprising Effects of Stress on Decision Making

**What it is:** Stress has asymmetric effects on risk-taking in decisions: stressed men become more risk-seeking and focus on potential gains, while stressed women become more risk-averse and focus on potential losses. Stress also narrows attentional focus, causing people to over-weight highly salient information and under-weight less salient details.

**Research basis:** Mara Mather and Nichole Lighthall (2012) demonstrated gender-differentiated effects of stress on risky decision-making using a gambling task combined with a cold-pressor stress induction. Stress shifted men toward greater risk-taking and women toward greater caution in ways that were statistically reliable.

**Design implication:** If your users are making decisions under stress (medical, financial, time-pressured contexts), their decision behavior will be systematically different from calm baseline conditions — and that difference varies by gender. Don't design assuming all users are in a calm, deliberate state.

**UI application:** In high-stakes decision contexts (health insurance enrollment, emergency product purchase, urgent account management), reduce visual clutter and information complexity — stressed users narrow their focus. Use calm, reassuring color palettes. Pre-select safe defaults so that a stressed user who simply accepts defaults lands in a reasonable place. Avoid presenting risk-laden options prominently to users in visibly stressed states.

---

### Thing 20: People Make Decisions at Certain Calendar Events

**What it is:** People are more likely to initiate goal-directed behavior and make aspirational decisions at temporal landmarks — the start of a new week, month, year, season, birthday, or other culturally significant calendar marker. This "Fresh Start Effect" creates psychological separation from past failures and motivates new beginnings.

**Research basis:** Hengchen Dai, Katherine Milkman, and Jason Riis (2014) analyzed Google search data, gym visits, and other behavioral datasets and found systematic increases in goal-initiation at temporal landmarks. The data clearly showed spikes in aspirational behavior at the start of years, months, weeks, and after birthdays.

**Design implication:** Subscription services, fitness apps, education platforms, and any product that supports goal-directed behavior should design campaigns and onboarding experiences around temporal landmarks. The Fresh Start Effect is a powerful, free motivational boost.

**UI application:** Send re-engagement emails timed to the start of January, the first of the month, Monday morning, or near users' birthdays. Frame new feature launches as "fresh starts." Design onboarding flows that explicitly acknowledge temporal landmarks: "It's a new month — great time to start tracking your goals." For habit-forming apps, use the new year, new month, and new week as natural renewal points for commitment mechanisms.

---

### Thing 21: People Make Decisions Based on Specific Memories

**What it is:** When making category-level decisions (e.g., "should I use a taxi service?"), people rely on specific exemplar memories — concrete instances they can recall — rather than on abstract generalizations or statistics. The accessibility and vividness of a specific memory drives the decision more than its representativeness.

**Research basis:** Michael Mack, Alison Preston, and Bradley Love (2013) used neural decoding (fMRI combined with machine learning) to show that the brain's categorization algorithm works through matching to stored exemplars rather than constructing abstract prototypes. This is exemplar theory of categorization, with strong empirical support.

**Design implication:** Testimonials, case studies, and specific user stories are more persuasive than statistics and aggregate data because they provide vivid exemplar memories that users can draw on when making decisions about your product.

**UI application:** Replace or supplement "Over 10,000 satisfied customers" with a specific story: "How Sarah reduced her invoicing time by 6 hours a week." Make testimonials specific, named, and detailed. For B2B products, case studies with concrete outcomes outperform feature lists. For onboarding, show users a vivid "day in the life" scenario rather than an abstract feature tour.

---

### Thing 22: Brain Activity Predicts Decisions Before They're Consciously Made

**What it is:** Neural activity patterns that predict a person's eventual decision can be detected 7–10 seconds before the person becomes consciously aware of their choice. This means that decisions are effectively "made" by unconscious brain processes before the conscious mind ratifies them.

**Research basis:** Research using fMRI by Soon et al. (2008) — building on Benjamin Libet's earlier work — showed that brain activity in prefrontal and parietal areas could predict a button-press decision up to 10 seconds before the subject reported deciding. This has been replicated and extended in multiple studies across decision types.

**Design implication:** Users cannot fully report or explain their decision processes through verbal self-report. Qualitative research methods that rely on users articulating why they made choices will systematically miss the actual drivers of behavior. Behavioral observation and biometric research are more reliable.

**UI application:** A/B test actual behavior rather than asking users which version they prefer in surveys — what users say and what they do diverge because decisions are made unconsciously. Use click maps, scroll maps, and session recordings to observe real decision-making behavior. In usability testing, observe behavior and measure task completion rather than relying solely on verbal think-aloud protocols.

---

## Chapter 4: How People Read and Interpret Information

### Thing 23: If Text is Hard to Read, the Material is Easier to Learn

**What it is:** Making text slightly harder to read — through disfluent fonts, lower contrast, or unconventional typography — paradoxically improves retention and learning. The added processing difficulty signals to the brain that the content requires more cognitive engagement, leading to deeper processing and better memory encoding. This is called the "desirable difficulty" effect.

**Research basis:** Connor Diemand-Yauman, Daniel Oppenheimer, and Erikka Vaughan (2010) ran experiments in school settings where some students received materials in difficult-to-read fonts. These students scored higher on subsequent tests. The fluency/disfluency literature shows that processing difficulty is interpreted as a signal of importance.

**Design implication:** The principle of maximizing reading fluency (clean fonts, high contrast, optimal sizing) serves immediate comprehension and user satisfaction — but may reduce retention. For educational, training, or high-stakes informational content, strategic use of disfluency can improve learning outcomes. Context determines the right trade-off.

**UI application:** For onboarding tutorials and help documentation where retention matters, consider using a slightly less common typeface or slightly reduced font weight — not to the point of illegibility, but enough to create mild processing friction. For critical warnings or safety information, mild disfluency may improve the likelihood that users actually read and remember the content. Do NOT apply this to general UI — only to content specifically designed for learning.

---

### Thing 24: Nouns Spur Action More Than Verbs Spur Action

**What it is:** Framing behavior as an identity (noun) rather than an action (verb) produces stronger behavioral compliance. Saying "Be a voter" produces more actual voting than "Vote." Identity-based framing activates the self-concept and taps into the human need for consistency between identity and behavior.

**Research basis:** Christopher Bryan, Gregory Walton, Todd Rogers, and Carol Dweck (2011) ran field experiments during elections and found that noun identity framing ("voter") produced measurably higher turnout than verb action framing ("vote") — a statistically significant effect with real electoral impact.

**Design implication:** When writing microcopy and CTAs that aim to change behavior, use noun-based identity framing in addition to or instead of imperative verbs. Invite users to "become" something, not just "do" something.

**UI application:** Instead of "Subscribe to our newsletter," try "Join our community of 50,000 subscribers." Instead of "Start exercising," try "Become someone who exercises daily." Instead of "Donate," try "Be a donor" or "Join our supporters." For habit-forming apps, frame users as identity holders: "You're a daily learner" rather than "Learn something every day."

---

### Thing 25: Homophones Can Prime Behavior

**What it is:** Words that sound like other words (homophones and near-homophones) can prime related concepts and behaviors unconsciously. Hearing or reading a word activates associated concepts in memory, including concepts triggered by words that merely sound similar, even if the sound-alike meaning is irrelevant to the current context.

**Research basis:** Derick Davis and Paul Herr (2014) demonstrated that exposure to the word "bye" primed purchasing behavior via the phonological route to "buy" — even though participants were unaware of any connection. The effect was mediated through unconscious phonological processing.

**Design implication:** Language choices in UX copy have unconscious activation effects beyond their literal meaning. Words that sound like action-oriented concepts may prime those actions. This is a subtle but real lever in microcopy and content strategy.

**UI application:** In product naming, domain selection, and key UI copy, consider the phonological associations of your words. Words that sound like action verbs related to your core use case may subtly prime that behavior. Conversely, avoid naming features or products with homophones that have negative or undesired associations. This is a supplementary consideration in copy optimization, not a primary one.

---

### Thing 26: People Read Only 60 Percent of an Online Article

**What it is:** Eye-tracking and scroll-depth research shows that most readers never reach the end of an online article. The average read rate for online articles is approximately 60% of the content. A significant proportion of people who share articles on social media have not finished reading them.

**Research basis:** Tony Haile (2014, Time.com) published widely-cited data from Chartbeat analytics showing that 55% of visitors spend fewer than 15 seconds on a page. Adrienne Jeffries (2014, The Verge) documented that social shares do not correlate with reading completion. Chartbeat's analysis of 2 billion pageviews showed the 60% read-through figure.

**Design implication:** Front-load your most critical content. Never bury the most important information or CTA at the bottom of a long page on the assumption that users will read down to it. Summaries, headers, and progressive disclosure are more important than ever.

**UI application:** Use an inverted-pyramid structure for long-form content: lead with the most essential information, then provide supporting detail. Use a TL;DR summary or key-takeaway callout box at the top. For product pages, put the CTA, price, and key value proposition above the fold, not after a long description. Use progressive disclosure to let interested users go deeper without penalizing those who don't.

---

### Thing 27: Reading Online May Not Be Reading

**What it is:** The way people process text online is fundamentally different from deep, linear reading of print. Online "reading" is predominantly skimming, scanning, and jumping between focal points — not sequential comprehension of continuous prose. Research suggests that extensive online reading may reshape the brain through neuroplasticity, reducing the capacity for deep sustained reading.

**Research basis:** Stanislas Dehaene's "Reading in the Brain" (2010) describes the neural basis of reading. Ferris Jabr (2013, Scientific American) synthesized research on paper vs. screen reading differences. Anne Mangen, Bente Walgermo, and Kolbjørn Brønnick (2013) showed that reading comprehension of linear text was better on paper than on screen, attributed to the lack of spatial/tactile anchoring in digital reading.

**Design implication:** Don't write online content assuming users will engage in deep, linear reading. Structure content for skimming: use headers, bullet points, bold key phrases, short paragraphs, and visual breaks. Prose walls of text are largely invisible online.

**UI application:** Format all long-form content with clear H2/H3 headers that work as standalone summaries for scanners. Use bold text to highlight the single most important concept per paragraph. Keep paragraphs to 3–4 lines maximum. Use numbered lists for sequential content and bullet lists for parallel content. Include pull quotes and callout boxes for key insights.

---

### Thing 28: The Multisensory Experience of Physical Books is Important to Reading

**What it is:** Physical books provide a multisensory experience — tactile sensation of pages, proprioceptive awareness of position within the book, spatial memory of where information was on a page — that supports comprehension and memory in ways that digital reading cannot replicate. Readers using physical books have better spatial orientation within a text and better retention of sequential information.

**Research basis:** Anne Mangen et al. (2013) demonstrated superior reading comprehension for physical texts in controlled studies. The key mechanisms involve haptic feedback (feel of paper), the physicality of page turning as a reinforcing action, and the ability to spatially locate information ("it was on the left page, about 2/3 down") which serves as a memory retrieval cue.

**Design implication:** Digital reading interfaces lose the natural spatial and tactile cues that support comprehension. Design digital reading experiences that compensate by providing clear progress indication, easy in-text navigation, and spatial anchoring features.

**UI application:** In e-readers and long-form reading apps, provide clear progress indicators (page X of Y, percentage read). Enable user annotations and highlights that create spatial markers in the text. Allow bookmarking. Provide a visual "map" of the document. For critical documentation that users must understand deeply, consider whether a printable PDF version should be offered alongside the digital version.

---

### Thing 29: People Are Ready to Move On From "Old" Media

**What it is:** Users increasingly expect multimedia alternatives to pure text — video, audio, and interactive formats. For many content types, video and audio are processed more easily, remembered better, and preferred over text. The mental model of "online" as a text medium is shifting, and users expect rich media as a baseline.

**Research basis:** Pew Research Center surveys (2000–2015) documented the dramatic rise in video consumption and the decline in traditional print media consumption. Research on multimedia learning (Mayer's cognitive theory) supports that well-designed video and audio can improve comprehension and retention compared to text alone.

**Design implication:** Providing only text-based content is increasingly a design limitation, not a neutral choice. For instructional, explanatory, and narrative content, offering video and audio alternatives serves users better and meets evolving expectations.

**UI application:** For product explainers, tutorials, and FAQs, offer video walkthroughs alongside text. For long-form editorial content, provide a "Listen" audio version. For onboarding, embed short explainer videos for complex features. Always provide transcripts and captions for accessibility and for users who prefer text or cannot use audio in their environment.

---

## Chapter 5: How People Are Influenced by Stories

### Thing 30: The Brain Is More Active with Stories

**What it is:** When a person reads or hears a story (versus a list of facts or instructions), multiple areas of the brain activate simultaneously — including sensory cortices, motor cortices, language areas, and emotional processing centers. Stories engage the whole brain, not just language processing centers, making information encoded through narrative far more memorable and impactful.

**Research basis:** Ho Ming Chow, Raymond Mar, et al. (2015) used fMRI to demonstrate that story comprehension activates visual and motor systems in the brain, including areas that would be activated if the story events were actually being experienced. Neural coupling between storyteller and listener (brain synchronization) occurs during narrative comprehension.

**Design implication:** Presenting product benefits, onboarding instructions, or persuasive content as narrative activates more of the user's brain, creating stronger encoding. Story-framed content outperforms feature-list content for both memory and persuasion.

**UI application:** Frame product onboarding as a user's story arc: "Here's where you are now → here's the problem that brings you here → here's what your life looks like with our product." Use case studies structured as stories with protagonist, conflict, and resolution. In marketing copy, lead with a customer scenario rather than a product feature list. Testimonials written as mini-stories outperform star ratings alone.

---

### Thing 31: Dramatic Arc Stories Change Brain Chemicals

**What it is:** Stories with a properly structured dramatic arc — rising tension, climax, resolution — trigger specific neurochemical changes in the brain. Tension increases cortisol (which focuses attention), and a satisfying resolution releases oxytocin (which drives empathy, connection, and prosocial behavior). This chemical sequence makes dramatic stories powerful tools of persuasion and behavioral change.

**Research basis:** Paul Zak and colleagues at Claremont Graduate University conducted multiple studies measuring blood oxytocin levels during and after narrative exposure. Stories with dramatic tension reliably increased oxytocin, which in turn predicted charitable giving and other prosocial behaviors following exposure. The cortisol-to-oxytocin chemical sequence is well-documented.

**Design implication:** Stories in your product or marketing that follow a proper dramatic arc — not just a list of events — will generate empathy and prosocial response in users. The arc (tension → resolution) must be present for the neurochemical sequence to trigger.

**UI application:** For donation appeals, nonprofit causes, and community-building, use video stories with a clear problem (tension-building) followed by resolution (relief/satisfaction). Avoid flat testimonials like "Great product, five stars." Instead, structure them: "I was struggling with X (tension). I found this product and Y happened (resolution)." The reader's brain will follow the same chemical arc as the story protagonist.

---

### Thing 32: Stories Focus Attention

**What it is:** Narrative naturally focuses and sustains attention because the brain is oriented toward tracking story agents, goals, and obstacles. When information is embedded in a story, the reader's attention is drawn forward by the unanswered question of what happens next. This attentional pull is involuntary.

**Research basis:** Oxytocin-mediated attention capture during narrative is documented in Zak's research. The "transportation" model of narrative persuasion (Green and Brock) shows that when readers are "transported" into a story's world, counterarguing (resistance to persuasion) is reduced. Cortisol during rising tension physically focuses attention by narrowing cognitive focus.

**Design implication:** When you need sustained user attention — for onboarding, tutorials, or educational content — narrative framing holds attention better than instructional framing. The question "what happens next?" is more powerful than "here is step 3."

**UI application:** Structure multi-step onboarding as a story progression, not a checklist. Use a character/persona who faces a problem, then guide users through the resolution. In email marketing sequences, use a narrative arc across a series rather than stand-alone informational emails. In explainer videos, open with a relatable problem scenario before presenting the product as solution.

---

### Thing 33: People's Self-Stories Affect Their Behavior

**What it is:** The narrative a person tells themselves about who they are — their "self-story" — is a powerful regulator of behavior. People act in ways consistent with their self-story and resist behaviors that contradict it. Identity-level framing that aligns with or gently challenges an existing self-story can produce significant behavioral change.

**Research basis:** Timothy Wilson's "story-editing" research and Christopher Bryan et al.'s (2011) work on noun-based identity framing (see Thing 24) are key references. Social psychologists have extensively documented that self-concept consistency is a primary motivator, and that self-stories are malleable under the right conditions.

**Design implication:** Products that help users become a better version of themselves — fitness, learning, productivity, health apps — must engage with users' self-stories. Features that acknowledge and reinforce a positive identity ("You're someone who exercises consistently") outperform features that merely track behavior.

**UI application:** Surface achievement data in identity terms: "You've been a daily learner for 14 days." Use streak mechanics and milestone celebrations that reinforce a developing identity. Onboard users with an identity question: "What kind of person do you want to become?" and then reference that answer throughout the experience. Position your product as the tool of the person the user aspires to be.

---

### Thing 34: Small Steps Can Change Self-Stories

**What it is:** Large behavioral change is typically preceded by and built upon small, incremental steps that gradually shift the person's self-story. A person cannot leap to a new identity overnight, but can accumulate a series of small "I did this" experiences that cumulatively rewrite their self-narrative toward the new identity.

**Research basis:** Wilson's story-editing work demonstrated that small, directed experiences — not grand interventions — most effectively shift self-stories. The gradual accumulation of consistent behaviors creates a self-perception shift (Bem's self-perception theory) where people infer their identity from their observed behavior.

**Design implication:** Design behavior-change products with extremely low-friction initial steps that generate early "wins" and build momentum. The first step should be so easy it cannot be refused. Subsequent steps can progressively build challenge.

**UI application:** Set the initial habit target absurdly small: "Read 1 page a day," not "Read 30 minutes daily." Make the first action in onboarding immediately rewarding. Use "tiny habits" framing — celebrate micro-completions. As users build streaks and accumulate completions, the self-story shifts and progressively larger challenges become sustainable. Design progress indicators that clearly show cumulative small steps adding up to a significant achievement.

---

### Thing 35: A Public Commitment Leads to Stronger Self-Stories

**What it is:** When people make a goal or behavior commitment publicly — to friends, community, or even to a product's social feature — the commitment becomes integrated into their public identity and is therefore harder to abandon. Social accountability reinforces the self-story and increases follow-through.

**Research basis:** Robert Cialdini's work on commitment and consistency is foundational. The specific research on public commitment and behavior change is extensive in social psychology. Bryan et al. (2011) also relates, as public identity framing strengthens commitment. Community-based commitment devices are well-documented in behavior change research (e.g., Stickk.com research).

**Design implication:** Social sharing features, accountability partner features, and public commitment mechanisms are not just engagement tools — they are behavior-change tools grounded in self-story psychology. Allowing users to publicly declare goals significantly increases completion rates.

**UI application:** Build "share your goal" features at the moment of goal-setting in habit apps. Allow users to post workout completions, reading milestones, or learning achievements to social networks. Create in-app accountability circles or buddy systems. Send "Your friend X has been watching your progress" messages. Even just writing down and submitting a goal within the app (versus just thinking about it) creates a quasi-public commitment.

---

### Thing 36: Change the Story and You Will Change the Behavior

**What it is:** Behavior can be changed by helping people rewrite their self-story. Rather than directly trying to change behavior through information, motivation, or incentives, story-editing interventions help people shift the narrative they have about themselves — and the behavioral change follows naturally from the new story.

**Research basis:** Timothy Wilson's story-editing research is the primary source. Wilson demonstrated that brief story-editing interventions (e.g., having at-risk college freshmen read stories of older students who overcame early struggles) produced lasting academic performance improvements through identity-narrative shift, not through skill-building or motivation alone.

**Design implication:** For products targeting behavior change — health, education, finance, fitness — the most powerful intervention is not more information or better reminders, but helping users construct a new self-narrative. Design for the identity shift, not just the behavior.

**UI application:** In onboarding for behavior-change products, have users write a brief narrative statement about who they're becoming ("I am someone who..."). Show users stories of people like them who have changed, structured as story-editing narratives. At milestone moments, reflect back the user's journey as a story: "You started as someone who never exercised. Three months later, you've run 47 miles." This narrative feedback reinforces the new self-story and sustains behavior.

---

## Chapter 6: How People Relate to Other People and to Technology

### Thing 37: Emotions Are Contagious

**What it is:** Emotions spread between people through unconscious mimicry — people automatically and subtly mirror the facial expressions, body postures, and vocal tones of those around them, which then generates the corresponding emotion in themselves. This process is automatic, involuntary, and occurs without face-to-face contact, including through text and social media.

**Research basis:** Mary Howes, Jack Hokanson, and David Loewenstein (1985) documented emotional contagion in face-to-face contexts. James Fowler and Nicholas Christakis (2008) showed happiness spreading through social networks over 20 years in the Framingham Heart Study. Adam Kramer, Jamie Guillory, and Jeffrey Hancock (2014) controversially demonstrated emotional contagion in Facebook's News Feed — reducing positive posts increased users' positive post output and vice versa, with no face-to-face contact required.

**Design implication:** The emotional tone of your product's communication — copy, imagery, onboarding flow, error messages — is contagious. Anxious, frustrating, or negative design experiences spread those emotions. Calm, positive, welcoming tones spread those. Every piece of microcopy has an emotional register.

**UI application:** Audit your product's emotional tone across all states: empty states, error messages, loading screens, confirmation dialogs, and notification copy. Rewrite anxiety-inducing language ("Warning: This will delete your data permanently") with calm, respectful framing ("Are you sure? You can recover this from Trash for 30 days"). Use imagery that depicts users in positive, empowered states. Celebrate user achievements with genuinely positive language and micro-animations.

---

### Thing 38: People Don't Like Video Ads

**What it is:** Users have a strong negative reaction to video advertisements, particularly those that autoplay, interrupt content, or cannot be skipped. The presence of brand logos at the start of a pre-roll ad causes immediate negative affect that reduces engagement with the subsequent content and harms brand perception.

**Research basis:** Research on ad avoidance shows consistent patterns of negative physiological and behavioral response to video advertising interruptions. Eye-tracking studies show that users actively avert their gaze from brand logos in video ads, and the activation of the neural "ad-detection" mode reduces engagement with everything that follows.

**Design implication:** If you must use video advertising, minimize interruption and maximize user control. Forcing users to watch ads they cannot skip generates brand resentment, not brand recall. This applies not just to ad product design but also to any marketing video you embed on your own properties.

**UI application:** Make pre-roll ads skippable after 5 seconds (YouTube's model is now the industry standard expectation). Never autoplay video ads with sound. If video ads are your business model, acknowledge the user's time and thank them for watching. For your own marketing video content, lead with value for the viewer immediately — front-load the most compelling hook in the first 3 seconds.

---

### Thing 39: Joy and Surprise Grab and Hold Attention in Video Ads

**What it is:** Despite the general dislike for video ads (Thing 38), emotional content — specifically joy and surprise — can override the ad-avoidance response and create genuine attention and engagement. The key is that the emotional hook must appear within the first few seconds, before the viewer's attention has departed.

**Research basis:** Research on emotional responses to video advertising has consistently shown that positive emotions (joy, surprise, delight) create attentional capture and prolong viewing. Surprise in particular activates the orienting response — the brain's automatic "what is this?" system — which pauses avoidance behavior and drives engagement.

**Design implication:** The first 3 seconds of a video ad must deliver an emotional hook — specifically joy or surprise. Cold opens that immediately present something unexpected or delightful override the ad-avoidance response. Delayed emotional payoffs (after a slow brand build) fail because viewers have already diverted attention.

**UI application:** For any video marketing content, lead with the moment of surprise or delight — don't build up to it. The emotional hook should appear in the first 2–3 seconds. Avoid starting with brand logos, product shots, or lengthy setups. If A/B testing video content, test cuts that front-load the emotional moment against the "standard" version. Track view-through rates as the primary metric.

---

### Thing 40: Surprise But Not Shock Encourages Sharing

**What it is:** Surprise — the mild, pleasant experience of encountering something unexpected — strongly motivates social sharing of content. Shock — the intense, aversive experience of something disturbing, offensive, or extreme — does not motivate sharing and may reduce it. The sharing motivation arises from the desire to share the positive emotional experience, not from any emotional content.

**Research basis:** Jonah Berger's research in "Contagious: Why Things Catch On" (2013) identifies surprise as one of the key emotional drivers of content virality. High-arousal positive emotions (awe, surprise, amusement) correlate with sharing; high-arousal negative emotions (anxiety, disgust) also correlate with sharing in some contexts, but shock and disturbing content does not.

**Design implication:** If content virality is a goal, engineer moments of genuine (but not shocking) surprise — unexpected juxtapositions, counterintuitive data, delightful micro-interactions. Shock-value content may generate attention but typically does not generate the kind of engaged sharing that builds brand trust.

**UI application:** In social-shareable content design, create "did you know?" moments with genuinely surprising data points. Design UI micro-interactions that create pleasant moments of delight and surprise (unexpected animations, Easter eggs, clever empty states). For product features, create a moment of "I didn't expect it to be this easy" surprise in the core workflow — users will talk about it.

---

### Thing 41: Oxytocin Is the Bonding Chemical

**What it is:** Oxytocin is a neuropeptide produced in the hypothalamus that drives trust, empathy, generosity, bonding, and prosocial behavior. It is released during positive social interactions, physical touch, eye contact, and exposure to emotionally resonant stories. High oxytocin states increase cooperative behavior and reduce defensiveness.

**Research basis:** Paul Zak's laboratory research at Claremont Graduate University has extensively documented oxytocin's role in trust and generosity. David Cwir, Priyanka Carr, Gregory Walton, and Steven Spencer (2011) showed that even minimal cues of social connectedness caused shared physiological states between strangers, including heart rate synchronization, mediated by oxytocin-related pathways.

**Design implication:** Design experiences that trigger oxytocin release will increase trust, generosity, and prosocial engagement with your product. Community features, storytelling, and authentic human connection are oxytocin-releasing design patterns. Purely transactional, cold, or impersonal design suppresses oxytocin and inhibits trust.

**UI application:** Build community features — user forums, shared challenges, peer recognition — that create genuine social connection. Use real human photography (not stock photos) to create emotional resonance. Include founder or team stories that create "I know these people" connection. Add moments of warmth in microcopy ("Welcome back, Sarah") to simulate social acknowledgment. For customer service, design for human-feeling interactions even when automated.

---

### Thing 42: When People Feel Connected, They Work Harder

**What it is:** People exert greater effort on tasks when they believe they are working alongside or as part of a group, even if that group is physically absent and even if the presence of the group is only implicitly suggested. This is social facilitation through felt connection, not just social pressure.

**Research basis:** Priyanka Carr and Gregory Walton (2014) demonstrated that even subtle cues of working together (using the phrase "together" in instructions, receiving a note purportedly from another participant) caused people to persist longer and perform better on challenging tasks — without any actual collaboration. Floyd Allport (1920) established the foundational co-action effects.

**Design implication:** Solo-use products can leverage social facilitation by making users feel they are part of a larger community of people working toward similar goals, even without direct interaction. The felt sense of "we're in this together" is motivationally powerful.

**UI application:** Show live user counts, social proof of concurrent users ("427 people are working on their goals right now"), and community challenges where all participants work toward a shared aggregate goal. Use "together" language in product copy. Build in community leaderboards or collective progress indicators even in primarily solo-use apps. Send messages that frame the user as part of a cohort: "You and 12,000 other learners are taking this course."

---

### Thing 43: Devices with Alerts Lower Cognitive Performance

**What it is:** The mere awareness that a notification might arrive — even without actually receiving one — significantly degrades cognitive performance on tasks requiring sustained attention. This is because the brain devotes background cognitive resources to monitoring for potential interruptions, a form of "Pavlovian alert conditioning." Actual notifications further reduce performance by breaking cognitive flow states.

**Research basis:** Nathaniel Barr, Gordon Pennycook, Jennifer Stolz, and Jonathan Fugelsang (2015) demonstrated that smartphone availability near a user reduced cognitive performance even when the phone was not used. The classic Pavlovian conditioning model explains why trained notification checking creates a semi-permanent attentional division.

**Design implication:** Designing a product that relies heavily on push notifications to drive engagement is trading short-term re-engagement for long-term cognitive harm to users. This is both an ethical design concern and a long-term product risk — habituated notification dismissal is the inevitable endpoint.

**UI application:** Design notification strategies with restraint. Default to minimal notifications and require users to actively opt into more. Batch non-urgent notifications rather than sending them immediately. Respect "Do Not Disturb" and focus modes. For productivity apps, actively support users in creating notification-free work sessions — this generates trust and positions your product as a tool that respects users' cognitive resources rather than exploiting them.

---

### Thing 44: Cell Phones Nearby Negatively Affect Person-to-Person Communication

**What it is:** Even the visible presence of a smartphone on a table during a conversation — without it being used — degrades the quality of interpersonal communication. It signals divided attention and reduces both parties' willingness to discuss complex, personal, or emotionally meaningful topics.

**Research basis:** Andrew Przybylski and Netta Weinstein (2013) conducted experimental studies showing that the mere presence of a phone (not its use) during conversation reduced the quality of the conversation, sense of closeness, and feelings of empathy. The effect was strongest for personally meaningful conversations.

**Design implication:** This research underscores the ethical responsibility of notification and engagement design. Products that condition users to keep phones constantly visible and accessible contribute to degraded human relationships. This is a systems-level design impact.

**UI application:** Consider building "Phone Down" or focus modes into social and communication apps that reward sustained engagement rather than frequent check-ins. Design features that respect the value of presence (e.g., "Offline for dinner" modes with auto-responses). For enterprise products used in meetings, design meeting modes that minimize interruption pressure. Position phone-down design as a brand value.

---

### Thing 45: People Trust Machines That Have Some Human-Like Characteristics

**What it is:** Adding human-like characteristics to technology — a voice with warmth, a name, a face, or natural language responses — increases user trust and willingness to engage. This effect follows the "uncanny valley" curve: mild anthropomorphism increases trust, but extreme realism that falls short of actual human appearance triggers revulsion (the uncanny valley effect).

**Research basis:** Christine Looser and Thalia Wheatley (2010) studied the tipping point of animacy — the point at which faces are perceived as alive. Masahiro Mori's "The Uncanny Valley" (2012, translation) established the theoretical framework. Attila Andics et al. (2014) showed that dogs and humans share voice-sensitive brain regions, suggesting deep evolutionary roots for voice-based social response.

**Design implication:** Chatbots, voice assistants, and AI-powered features benefit from appropriate degrees of anthropomorphism — enough to feel warm and accessible, not so much as to seem deceptively human. Naming bots, giving them a voice personality, and enabling natural language conversation increases trust. Overclaiming human-ness backfires.

**UI application:** Give your chatbot or AI assistant a name and a consistent, warm personality in its writing style. Use natural language in interactions ("Sure! Let me find that for you") rather than robotic phrasing. Add a simple, friendly avatar that is clearly not photorealistic. Be transparent that it's a bot while still giving it warmth. Avoid the uncanny valley by not using photorealistic AI-generated human faces for product avatars.

---

### Thing 46: People Can Feel Empathy for Machines

**What it is:** People readily attribute feelings, intentions, and personality to machines — especially when those machines exhibit agency, responsiveness, or apparent suffering. Users feel genuine empathy for robots that appear to be in pain or distress, and for digital agents that seem to be struggling. This extends to simple mechanical objects and software.

**Research basis:** Masahiro Mori's uncanny valley research established the anthropomorphism framework. Multiple studies in human-robot interaction have shown that people show elevated heart rate and stress responses when watching robots "suffer." People name and apologize to Roombas. The attribution of mental states to non-human agents is automatic and pervasive.

**Design implication:** Users' empathic responses to your product's apparent "experience" are real and affect their relationship with it. Error states, slow loading, and product failures can be designed to feel like the product is "trying its best" — which generates empathy rather than frustration.

**UI application:** Design error states and loading delays with copy that attributes effort to the system: "Still working on it — this is a complex search" rather than just a spinner. Give your empty states personality that implies the system is ready and waiting rather than broken. Personalize the product experience so it "knows" the user. When things go wrong, design the system response to feel like a trusted assistant who made an honest mistake and is working to fix it.

---

## Chapter 7: How Creativity Influences Design

### Thing 47: Everyone Can Be Creative

**What it is:** Creativity is not a fixed trait possessed by a select few — it is a process accessible to all people. The difference between "creative" and "uncreative" people is largely a difference in beliefs about their own creativity, habits of thought, and practice. Creative output can be systematically induced by engaging the right brain networks in the right sequence.

**Research basis:** Neuroscience research on the default mode network, executive attention network, and salience network has revealed that creativity is a network-level process, not a property of specific "right-brained" individuals. This reframes creativity as a learnable process rather than a talent.

**Design implication:** Design processes and team structures should be built on the assumption that everyone is capable of creative contribution. Creativity-blocking conditions (judgment, time pressure, fixed roles) suppress the universal creative potential of teams. Create the conditions for creativity rather than relying on "the creative people."

**UI application:** Design collaborative ideation tools with low-judgment structures (anonymous contribution, deferral of evaluation). For design thinking workshops, build in phases that explicitly separate ideation from evaluation. Apply this to product design processes: create structured creative sessions that allow all team members to contribute regardless of formal design role.

---

### Thing 48: Creativity Starts with the Executive Attention Network

**What it is:** Creative problem-solving begins with the Executive Attention Network (EAN) — the brain's goal-directed, focus control system. The EAN defines the problem, sets parameters, and focuses initial attention. This phase is conscious, deliberate, and effortful. It is a prerequisite for the unconscious generative phase that follows.

**Research basis:** Vinod Menon and S.L. Bressler (2010) mapped the large-scale brain networks involved in cognition. Randy Buckner, Jessica Andrews-Hanna, and Daniel Schacter (2008) documented the interplay between the default mode network and control networks. The EAN's role in task-setting and goal specification before creative generation is established in cognitive neuroscience.

**Design implication:** Creative sessions must begin with clear problem definition and constraint setting — this activates the EAN appropriately. Jumping immediately into free ideation without adequate problem framing produces less creative, more scattered output.

**UI application:** Structure design sprints and ideation sessions to begin with a focused, bounded problem statement. Give the team adequate time to fully understand the problem before diverging into solutions. In design tools and creative software, provide features that help users capture and organize problem framing before the generative work begins.

---

### Thing 49: To Be Creative, Engage the Brain's Default Network

**What it is:** The Default Mode Network (DMN) is the brain's "resting state" network, active during daydreaming, mind-wandering, and unconstrained associative thought. Paradoxically, the DMN is a key source of creative insight — it makes novel associations between distant concepts that the focused EAN cannot produce. Creative insight requires alternating between EAN (focused) and DMN (diffuse) states.

**Research basis:** Randy Buckner et al. (2008) established the DMN's anatomy and function. Research by Roger Beaty and colleagues has documented the DMN's role in creative cognition. The creative process requires dynamic switching between the EAN (problem focus) and DMN (generative wandering) — neither alone is sufficient.

**Design implication:** Providing structured, uninterrupted "think time" — time for mind-wandering with the problem loosely held in mind — is not inefficiency. It is a required phase of the creative process. Teams and individuals who are always "on" and constantly context-switching cannot access DMN-generated insights.

**UI application:** For productivity and creative tools, design "focus mode" and "think mode" as distinct, explicitly supported states. Build in session structures that alternate between focused work and unstructured thinking. In physical office and collaborative workspace design (relevant to UX of work environments), protect space and time for non-focused thinking as a legitimate work activity.

---

### Thing 50: Induce an "Aha" Moment

**What it is:** The "aha" moment — the sudden feeling that a solution has arrived — corresponds to a specific pattern of neural activity, including a gamma-wave burst in the right temporal cortex, and is mediated by the Salience Network, which bridges the EAN and DMN. "Aha" moments can be induced by creating the right conditions: relaxing focused effort, allowing mind-wandering, and returning to the problem with fresh attention.

**Research basis:** Research by Mark Jung-Beeman and John Kounios used EEG and fMRI to document the neural signature of insight moments — including a characteristic gamma burst preceding the conscious "aha." The role of the Salience Network in switching between EAN and DMN at the moment of insight is established by Menon and Bressler (2010).

**Design implication:** Conditions that block "aha" moments: constant pressure, no daydreaming time, noisy environments, and fixed mental sets. Conditions that enable them: relaxed focus, transitions between focused and diffuse thinking, humor, positive mood, and sleep. Design creative processes accordingly.

**UI application:** For design team processes, build in "incubation" periods between briefing and ideation — let the problem sit overnight rather than forcing immediate output. Humor and play in creative sessions increase "aha" likelihood. Structure creative sessions with a break between problem-loading and ideation output, allowing DMN processing to occur. This is why "shower thoughts" and post-walk insights are real and reliable phenomena.

---

### Thing 51: Daydreaming Encourages Creativity

**What it is:** Mind-wandering and daydreaming — typically viewed as failures of attention — are in fact active states of productive brain processing during which the Default Mode Network makes novel connections, solves problems, and generates creative ideas. Daydreaming with a loosely held problem in mind is one of the most reliable conditions for creative insight.

**Research basis:** Rebecca McMillan, Scott Kaufman, and Jerome Singer (2013) reviewed the literature on daydreaming and found that positive constructive daydreaming is associated with creative thinking, future planning, and self-reflection. The DMN is highly active during daydreaming and is the network most associated with creative output.

**Design implication:** Scheduling, tools, and processes that prevent any form of mind-wandering — constant notifications, back-to-back meetings, open-plan offices with continuous interruptions — systematically reduce creative output. Protecting daydreaming time is a legitimate productivity and creativity investment.

**UI application:** Design creative apps to support "diverge-then-converge" workflows. Add a "capture idea" feature that is always one tap away, allowing users to jot down daydream-generated insights before they evaporate. For productivity suites, build in "thinking sessions" as a distinct calendar block type alongside meetings and tasks.

---

### Thing 52: Sleeping Encourages Creativity

**What it is:** Sleep — particularly REM (rapid eye movement) sleep — is a biologically essential phase of creative processing. During sleep, the brain replays the day's experiences, strengthens memory consolidation, and makes novel associations between previously unrelated concepts. Sleeping on a problem reliably increases creative solution quality.

**Research basis:** Daoyun Ji and Matthew Wilson (2007) documented coordinated memory replay in the visual cortex and hippocampus during sleep. Research by Ullrich Wagner et al. demonstrated that a night of sleep tripled the probability of deriving a creative mathematical insight (the number re-encoding task). Sleep deprivation impairs creative cognition more than analytical cognition.

**Design implication:** Work processes that deprive teams of sleep — unrealistic deadlines, perpetual crunch, "always on" cultures — cause disproportionate creative impairment. For design output that requires genuine novelty and insight, sleep-respecting timelines produce better work, not just happier workers.

**UI application:** For creative applications, add session summaries that invite users to "sleep on it" before finalizing. In project management tools, flag deadlines that require overnight creative work as "Insight needed — review in the morning." For creative sprint methodologies, build in a mandatory sleep cycle between problem-framing and solution-generation phases.

---

### Thing 53: Noise and Music Increase Creativity

**What it is:** Moderate ambient noise — approximately 70 dB, similar to a busy coffee shop — is the optimal auditory environment for creative thinking. This level of noise provides enough stimulation to induce mild distraction from focused thought, which allows creative associations to form, while not being so loud as to be cognitively disruptive. Liked music (music the individual prefers) also boosts creative output.

**Research basis:** Ravi Mehta, Juliet Zhu, and Amar Cheema (2012) showed that 70 dB of ambient noise improved creative performance compared to silence (50 dB) and loud noise (85 dB). Kristin Nantais and E. Glenn Schellenberg (1999) showed that the "Mozart Effect" is actually a preference effect — any liked music enhances subsequent task performance through mood elevation.

**Design implication:** The optimal creative environment is not silence — it is moderate ambient sound. Completely silent offices, sound-canceling headphones during ideation, and library-quiet workspaces are suboptimal for creative work. Moderate ambient sound with occasional human noise is better.

**UI application:** For creative applications, offer ambient sound options (coffee shop ambience, rain, lo-fi music) as a built-in feature. Many creative tools now include this. For physical studio design, design for ~70 dB ambient levels during creative sessions. For personal productivity, the consistent recommendation is "listen to liked music while brainstorming, work in quiet during focused execution."

---

### Thing 54: People Are More Creative Within Some Constraints

**What it is:** Total creative freedom — a blank canvas with no constraints — tends to produce less creative output than constrained creative challenges. Moderate constraints focus creative attention, reduce the anxiety of infinite possibility, and force novel approaches to circumventing the limitation. This is sometimes called "the paradox of constraint."

**Research basis:** Patricia Stokes' research on constraint and creativity in art (analyzing Picasso's periods of constraint-driven innovation) is a key reference. Multiple experimental studies have shown that constraints improve creative output quality. The cognitive mechanism involves constraints reducing the search space to a manageable scope, enabling deeper exploration.

**Design implication:** When briefing designers or running ideation sessions, provide meaningful constraints — time, materials, technology, budget, audience restrictions. "Design anything" briefs produce weaker output than "Design this for these specific users given these specific limitations."

**UI application:** In brainstorming and ideation tools, build in constraint-setting features: "Generate 10 ideas that don't require a screen," "Ideas for users aged 65+," "Solutions that cost less than $5 per user." Design competitions with creative constraints produce higher-quality entries than open-ended submissions. Use design constraints as creative provocations rather than avoiding them.

---

### Thing 55: The Right Kind of Collaboration Increases Creativity

**What it is:** The traditional brainstorm — people gathering in a room to shout out ideas simultaneously — is a poor method for generating creative ideas. "Brainwriting" (each person silently generates ideas independently, then shares) produces more ideas and higher quality ideas than brainstorming, because it avoids production blocking, conformity pressure, and social anxiety.

**Research basis:** Scott Isaksen and John Gaulin (2005) reviewed the brainstorming literature and documented the consistent superiority of brainwriting methods over traditional brainstorming for idea quantity and quality. The key failure modes of brainstorming — production blocking (only one person talks at a time), evaluation apprehension (fear of judgment), and social loafing — are all eliminated by brainwriting.

**Design implication:** Design sprint methodologies, ideation workshops, and creative team structures should use brainwriting as the default divergent ideation method. Simultaneous silent generation followed by structured sharing outperforms real-time group ideation.

**UI application:** Design collaborative ideation tools with a "silent generation" phase where all participants write ideas simultaneously without seeing each other's ideas. Only after a time-boxed generation period do ideas get shared and built upon. Anonymous first-round contribution further reduces evaluation apprehension. Tools like MURAL, Miro, and FigJam support this workflow — design these phases explicitly into workshop templates.

---

### Thing 56: Being a Perfectionist Can Ruin Creative Work

**What it is:** Perfectionism — the tendency to evaluate and refine output as it is being generated — is antithetical to creative production. The editorial/evaluative brain mode and the generative/creative brain mode are in tension. Activating the critical evaluative voice during ideation suppresses the divergent thinking needed for novel output.

**Research basis:** The neuroscience basis is the competition between the EAN (evaluation) and DMN (generation) networks — activating one tends to suppress the other. Research on expert jazz improvisation has shown that during improvisation, the dorsolateral prefrontal cortex (associated with self-monitoring) is deactivated. Removing self-criticism enables greater creative output.

**Design implication:** Creative processes should explicitly separate generative and evaluative phases and protect the generative phase from premature evaluation. Any critique, refinement, or quality assessment during ideation harms the quality of the ultimate creative output.

**UI application:** In design tools, create distinct "draft" and "review" modes that visually signal permission to be imperfect. In team processes, enforce "yes, and" rules during ideation to prevent evaluation. Run separate "diverge" and "converge" sessions with a clear break between them. For individual creative practice, use time-boxed sketching (Crazy 8s style) where perfectionism is physically impossible within the time constraint.

---

## Chapter 8: How People's Bodies Affect Design

### Thing 57: People Think and Feel with Their Bodies

**What it is:** Cognition is not confined to the brain — it is embodied. The body's posture, movement, muscle tension, and physical sensations directly influence thinking, emotional states, and decision-making. This is embodied cognition: the body doesn't just execute decisions, it participates in making them.

**Research basis:** Dana Carney, Amy Cuddy, and Andy Yap (2015) reviewed research on expansive vs. contractive nonverbal displays and their effects on psychological states including confidence, risk-taking, and hormonal levels. Embodied cognition research by George Lakoff, Mark Johnson, and others has established the theoretical and empirical foundation.

**Design implication:** The physical act of interacting with a product — the gestures, postures, and physical feelings involved — affects the user's cognitive and emotional experience of that product. Heavy, solid physical products feel more trustworthy. Interfaces that require expansive, confident gestures may induce more confident states.

**UI application:** Design mobile interactions that feel responsive and tactile — haptic feedback that feels right for the action (a light tap for selection, a heavier vibration for errors). Ensure that swipe and gesture interactions feel physically satisfying. For wearables, the physical weight, texture, and fit of the device affects users' cognitive relationship with it. Heavy, substantial physical controls signal importance and reliability.

---

### Thing 58: People Naturally Gesture

**What it is:** Gesture is a fundamental and automatic component of human communication and thought. People gesture when speaking even when they cannot be seen (e.g., on the phone or in the dark), indicating that gesture is part of the cognitive process of meaning-making, not just communication. Gesture interfaces feel natural when they map to natural gesture semantics.

**Research basis:** Neuroscientist Kimihiro Nakamura and colleagues (2012) showed that handwriting recognition activates the same motor systems as actual handwriting — the brain maps gesture to meaning at a deep level. Research by Susan Goldin-Meadow has extensively documented the cognitive role of gesture in thought and communication.

**Design implication:** Gesture-based interfaces (touch, voice+gesture, AR/VR) should map gestures to semantically congruent actions — swipe right to confirm, swipe left to reject, pinch to shrink. Counter-semantic gestures (pinching to enlarge, for example) will always feel wrong.

**UI application:** Design touch gestures that match the metaphor of the action: push/slide to move, pinch to shrink, expand hands to zoom. Avoid inventing proprietary gestures with no semantic basis. For AR/VR interfaces, test gesture mappings with users who have no training — if the gesture doesn't intuitively suggest the action, redesign the mapping, not the user's expectations. Use gesture tutorials that are kinesthetic (show and do) not just visual.

---

### Thing 59: People Have Physical Limitations of Movement

**What it is:** Human movement is governed by Fitts' Law — the time to reach a target is a function of the target's size and distance from the starting point. Larger and closer targets are faster and easier to hit. Small, distant, or densely packed interaction targets create physical difficulty that increases errors and user frustration.

**Research basis:** Fitts' Law is one of the most replicated findings in HCI, established by Paul Fitts (1954) and confirmed in thousands of studies. Priscila Caçola, Jerroed Roberson, and Carl Gabbard (2013) documented age-related declines in movement precision relevant to touch target design.

**Design implication:** Touch targets must be large enough to hit comfortably, especially for primary actions. The minimum recommended touch target size is 44x44 points (Apple HIG) or 48x48dp (Material Design). More important targets should be larger. Actions with high error cost should be separated and sized for easy differentiation.

**UI application:** Make primary action buttons large (minimum 44pt/48dp, ideally larger). Separate destructive actions from constructive ones with significant spacing. Never place "Delete" next to "Save." Increase target sizes for elderly user populations (see Things 78–81). In complex forms, ensure adequate spacing between selectable options. Run tap-accuracy testing in usability sessions to identify targets that generate errors.

---

### Thing 60: Thumbs Can Reach Only So Far

**What it is:** When holding a smartphone, the thumb's natural range of motion creates distinct zones of interface reachability. The bottom portion of the screen (near the thumb's pivot point) is the "easy reach" zone, the middle is "stretch," and the top of the screen is "hard to reach" — requiring a grip shift or use of the other hand. Most users hold their phones one-handed much of the time.

**Research basis:** Steven Hoober's (2014) observational research on smartphone use in public documented grip patterns and thumb reach limitations. The thumb's range of motion from a natural grip creates a predictable reachability heat map on standard phone screen sizes.

**Design implication:** Critical interactive elements — primary navigation, most-used actions, and especially emergency or safety controls — should be placed in the thumb's comfortable reach zone (bottom third of the screen). Placing primary navigation in the top toolbar (the traditional desktop pattern applied to mobile) creates physical strain for one-handed use.

**UI application:** Use bottom navigation bars rather than top navigation for primary mobile navigation (as seen in Instagram, Twitter, Spotify). Place FABs (floating action buttons) in the bottom-right for right-handed reach. Avoid placing critical controls at the very top of the screen. Test your app with one hand while walking — if it requires constant grip adjustment, the interaction architecture needs revision.

---

### Thing 61: Distance from the Screen Is Critical

**What it is:** The optimal size of text, touch targets, and visual elements varies with viewing distance. Smartphones are held closest (~12 inches), tablets at medium distance (~18 inches), desktop monitors at further distance (~24 inches), and TVs at far distance (6–12 feet). UI elements designed for one viewing distance will fail at another.

**Research basis:** Visual acuity research and angular size calculations establish that readable text size scales with viewing distance. Apple's TV Human Interface Guidelines and separate mobile and desktop guidelines reflect these physical realities. Cross-device design must account for the physical context of use.

**Design implication:** A design system must specify different type sizes, icon sizes, and touch target sizes for each platform based on their typical viewing distance. "Responsive" design that merely adjusts layout is insufficient — element sizes must also scale appropriately.

**UI application:** Use platform-appropriate minimum type sizes: mobile ~16px base, desktop can drop to ~14px, TV needs much larger (typically 24px+). Icons need to scale similarly — an icon legible at 24px on mobile may need to be 48px+ for TV interfaces. When designing a cross-platform experience, define viewing-distance-appropriate specifications for each context, not a single size standard across all platforms.

---

## Chapter 9: How People Shop and Buy

### Thing 62: People Don't Separate Shopping Online from Shopping in a Store

**What it is:** The distinction between "online shopping" and "in-store shopping" is a designer's abstraction, not a user's experience. Modern consumers move fluidly between digital and physical channels within a single shopping journey — researching online, trying in-store, purchasing via mobile, returning in-person. This is omnichannel reality.

**Research basis:** A.T. Kearney's Omnichannel Consumer Preferences Study documented that consumers move between channels continuously and expect a seamless experience across them. The study showed that physical stores remain important — even digitally native brands benefit from physical presence — but the experience must be integrated.

**Design implication:** Designing the "website experience" or the "app experience" in isolation from the physical retail experience (if one exists) produces a fractured user journey that frustrates customers and reduces conversion across all channels.

**UI application:** Design cross-channel flows explicitly: "check availability online, pick up in store," "scan in-store QR code to get mobile coupon," "return online purchase to store." Ensure account state, cart contents, loyalty points, and order history are consistent across all touchpoints. Design the mobile app as a companion to the in-store experience, not a separate product.

---

### Thing 63: People Spend Less When They Use Cash

**What it is:** The more abstract and distant the payment mechanism, the less "pain" is associated with spending, and the more people spend. Cash is the most "painful" (most real and immediate) form of payment. Credit cards are less painful. Stored-value cards and digital wallets are even less so. Subscription billing with no per-transaction moment is the least painful of all.

**Research basis:** The payment transparency literature documents that different payment forms produce different levels of "payment pain." Prelec and Simester's research on credit card spending versus cash established the foundational findings. Behavioral economics research consistently shows that decoupling payment from consumption increases consumption.

**Design implication:** The payment mechanism you offer fundamentally affects how much users spend and how much regret they feel. Designs that reduce payment salience (subscription, virtual currency, one-click purchase) increase spending but may also increase buyer's regret. Designs that increase payment salience help users control spending.

**UI application:** For subscription products, minimize the moment of payment — abstract the billing into the background to reduce payment pain and increase retention. For budgeting and savings apps, increase payment salience by showing real-time spending totals and using literal dollar amounts rather than points. If you want to help users spend less, show cash equivalents; if you want to increase conversion, reduce payment friction and abstraction.

---

### Thing 64: People Commit to Purchases Because of Cognitive Dissonance

**What it is:** After making a purchase, people experience cognitive dissonance — the discomfort of having spent money on something whose full value has not yet been experienced. To resolve this dissonance, they psychologically commit to the purchase, seek confirming information, and recommend the product to others. This is post-purchase rationalization.

**Research basis:** Leon Festinger's foundational "A Theory of Cognitive Dissonance" (1957) established the theoretical framework. Yangjie Gu, Simona Botti, and David Faro (2013) showed that "choice closure" — finalizing a decision — reduces ongoing deliberation and increases satisfaction through post-choice rationalization.

**Design implication:** The post-purchase moment is a powerful opportunity to reinforce the buying decision and convert customers into advocates. A thoughtful, celebratory post-purchase experience reduces buyer's remorse and increases referral behavior.

**UI application:** Design a celebratory, reassuring post-purchase confirmation experience — not just an order number. Reinforce the quality of the decision: "Great choice — over 4,000 people love this product." Send a confirmation email that leads with excitement about what they're going to experience, not just order logistics. Follow up with content that confirms their decision quality (e.g., a use guide, "Your order will arrive in 2 days — here's how to get the most out of it").

---

### Thing 65: Cognitive Dissonance Makes People Buy

**What it is:** Pre-purchase cognitive dissonance can also drive purchase. When someone has invested significant time and effort in a buying process — configurating a product, filling out forms, researching options — the prospect of losing that investment creates dissonance that motivates completion of the purchase, even when the person wasn't initially committed to buying.

**Research basis:** Festinger's cognitive dissonance theory (1957) predicts that people will change their behavior to reduce dissonance. The IKEA effect (Norton, Mochon, Ariely) shows that effort invested in a product increases its perceived value. The sunk cost fallacy is a related behavioral pattern — people continue invested paths partly due to prior effort.

**Design implication:** Multi-step checkout processes that collect increasing investment (configuration, personalization, account creation) before the final payment step use pre-purchase cognitive dissonance to increase conversion. Abandonment prevention strategies should acknowledge the investment already made.

**UI application:** In multi-step product configuration flows, allow users to save their progress and name their configuration before checkout — this investment increases commitment. Cart abandonment emails can reference the effort already invested: "You've already built your perfect setup — just one step left." For complex B2B sales, the qualification and demo process itself creates investment that increases the likelihood of closing.

---

### Thing 66: People Are Affected by Arbitrary Numbers

**What it is:** Anchoring is a cognitive bias in which the first number encountered in a decision context disproportionately influences subsequent judgments and choices. This anchor can be arbitrary and unrelated to the actual value — yet it systematically pulls the decision toward the anchor. High anchors lead to higher willingness to pay; low anchors lead to lower willingness.

**Research basis:** Amos Tversky and Daniel Kahneman's foundational anchoring research established the effect. Ariely, Loewenstein, and Prelec (2003) showed that even random numbers (like the last two digits of a social security number) anchored willingness-to-pay for products. The anchoring effect is robust across contexts and largely resistant to awareness of the bias.

**Design implication:** Pricing presentation, discount framing, and comparison structures all involve anchoring effects. The first number a user sees anchors their price perception. Showing a crossed-out higher price before the sale price, or showing a premium tier first in a pricing table, anchors expectations.

**UI application:** In pricing pages, list the highest tier first (left-to-right) to anchor the perceptual range high before the user sees your target price. Use crossed-out "original prices" to create a high anchor before the discount. For donation asks, show higher suggested amounts first — users will donate more even if they don't choose the highest option. Conversely, if your goal is user satisfaction rather than revenue maximization, anchor realistically to avoid post-purchase price regret.

---

### Thing 67: Online Shopping Increases Anticipation

**What it is:** The period between placing an online order and receiving it creates a positive psychological state of anticipation, driven by dopamine. Dopamine is released not at the moment of reward but in anticipation of reward — making the waiting period itself pleasurable. Online shopping is, by design, optimally structured for dopamine-driven anticipation.

**Research basis:** Neuroscience research on dopaminergic reward prediction distinguishes between the "wanting" system (dopamine-driven anticipation) and the "liking" system (opioid-driven pleasure of consumption). Berns' research on anticipation and reward shows that dopamine peaks in anticipation. Online shopping's delayed delivery aligns perfectly with this neurochemistry.

**Design implication:** The post-purchase waiting period is not a gap to minimize — it is a dopamine-fueled engagement opportunity. Shipping confirmation, tracking updates, "arriving tomorrow" notifications, and unboxing experience design can all leverage and extend the anticipation reward state.

**UI application:** Send "your order is on its way" communications that rebuild and extend anticipation ("This time tomorrow, you'll have..."). Provide detailed, engaging order tracking rather than a raw tracking number. Design unboxing experiences (packaging, reveal, insert) as a peak moment of the dopamine arc. Consider adding countdown timers in order confirmation flows for high-anticipation product categories.

---

## Chapter 10: How Generations, Geography, and Gender Influence Design

### Thing 68: Everyone Uses Smartphones for News and Important Life Events

**What it is:** Across all generations and demographics, smartphones have become the primary device for consuming news and for navigating major life events (job searches, healthcare decisions, major purchases, life transitions). This is not a millennial behavior — it is universal among smartphone owners.

**Research basis:** Pew Research Center American Trends Survey (October 2014) documented that the majority of Americans across age groups were using smartphones for news consumption and major life decisions, with adoption rates far exceeding prior assumptions about older users' digital engagement.

**Design implication:** "Mobile first" is no longer a strategy for young-user-targeting — it is the appropriate default for any information product or service that people need during important moments of their lives. Non-mobile-optimized experiences for high-stakes information are now design failures.

**UI application:** Ensure that healthcare portals, financial services, job boards, government services, and emergency information are fully functional and optimized on mobile. Prioritize mobile performance for high-stakes tasks — slow loading or poor mobile UX during a crisis is a critical failure. Do not design these as "desktop first" products.

---

### Thing 69: Generational Differences in Smartphone Use Depend on the Activity

**What it is:** While all generations use smartphones extensively, what they use them for varies significantly. Younger generations (Millennials, Gen Z) are disproportionate users of social media, video streaming, and messaging. Older generations (Baby Boomers) use smartphones more for news, email, and practical tasks. These are patterns, not absolutes.

**Research basis:** Pew Research Center surveys (2000–2015) tracked smartphone activity patterns across age cohorts with high-quality survey methodology. Consistent generational patterns emerged across social media use (age-skewing younger), email (age-skewing older), and messaging apps (mixed patterns depending on the platform).

**Design implication:** Targeting a product broadly does not mean designing for an average user. Understanding generational activity patterns shapes which features to prioritize and how to surface them in navigation.

**UI application:** For a product with a generationally mixed user base, allow users to customize what appears in their primary navigation. Feature prioritization in roadmapping should be informed by the activity preferences of the target generation. Generational activity data should inform push notification strategies — younger users may engage with social notifications; older users may respond to news or utility notifications.

---

### Thing 70: If the Task Takes Less Than 5 Minutes, People Will Use Their Smartphones

**What it is:** There is an informal threshold of approximately 5 minutes — tasks that users expect to take less than 5 minutes are performed on smartphones; tasks expected to take longer are shifted to desktop or tablet. This threshold governs the "context of use" decision users make about which device to use.

**Research basis:** Observational research and Pew Research Center data document this 5-minute heuristic in practice. Users self-sort devices by expected task duration and complexity, not just by physical proximity.

**Design implication:** Any primary workflow in your product that users consider a "quick task" must be fully optimized for mobile. If your product's onboarding, checkout, or core action is expected to take less than 5 minutes, a mobile-hostile design will cause drop-off.

**UI application:** Audit your product's key flows by expected task duration. Flows under 5 minutes (checking status, quick actions, brief searches) should be mobile-first. Flows over 5 minutes (complex form completion, detailed configuration) may still need mobile support but can also expect desktop engagement. Mobile optimized does not always mean mobile identical to desktop — it means the right interactions for the device and task duration.

---

### Thing 71: Not Everyone with a Cell Phone Has a Smartphone

**What it is:** Global mobile penetration is much higher than smartphone penetration. In many African and developing countries, basic feature phones (SMS-capable, no internet) are the dominant mobile device. Designing for "mobile" in a global context cannot default to smartphone assumptions.

**Research basis:** Pew Research Center global surveys documented that in multiple African countries surveyed, basic mobile phone ownership vastly exceeded smartphone ownership. Mobile internet access rates in these markets were substantially lower than in developed markets.

**Design implication:** If your product serves a global audience that includes users in developing markets, designing exclusively for smartphones is a design decision that excludes a significant portion of your potential users. SMS-based and low-bandwidth alternatives may be necessary.

**UI application:** For global products, design a progressive enhancement strategy: base functionality via SMS or USSD for feature phone users, enhanced functionality via mobile web for low-end smartphones, full app experience for capable smartphones. NGOs, global health organizations, financial inclusion products, and agricultural tools targeting African or South Asian users must prioritize SMS or basic mobile web as primary channels.

---

### Thing 72: In Many Countries, Women Lack Online Access

**What it is:** The global gender digital divide is significant. In many countries, women have substantially lower internet access rates than men — in some regions the gap exceeds 50%. This gap is driven by cultural restrictions, economic inequality, and infrastructure limitations. Assuming equal access across genders is a design assumption that systematically excludes women in many markets.

**Research basis:** Intel's "Women and the Web" report (2012) documented the global gender digital divide. In some regions, women's internet access was less than half that of men's. This gap persists and varies by geography, with Sub-Saharan Africa and parts of South Asia showing the largest disparities.

**Design implication:** Products designed for global markets that rely entirely on digital access will systematically underserve women in markets with significant digital gender gaps. Inclusive design for global reach must include offline and low-connectivity considerations.

**UI application:** For NGO, health, agricultural, financial, and educational products targeting developing markets, explicitly research and design for female users' access constraints. Offer offline functionality, SMS-based interaction options, and community-intermediary models (where one smartphone serves a group). Design for shared device use scenarios where privacy and individual account access may be complicated.

---

### Thing 73: Gamers Are All Ages and All Genders

**What it is:** The cultural stereotype of the video gamer as a teenage boy is factually inaccurate. The gaming population is nearly evenly split by gender, and the largest single age segment of gamers is adults 36 and older. Designing game interfaces and mechanics based on a teenage-male assumption misrepresents the actual user base.

**Research basis:** The Entertainment Software Association's 2014 "Essential Facts" report documented that the average gamer is 31 years old, 44% of gamers are female, and 26% are over 50. These patterns have only become more balanced in the years since.

**Design implication:** Game UX design should not default to mechanics, aesthetics, or difficulty curves that assume a young male user. Inclusive game design — accessible controls, diverse difficulty options, varied story types — serves the actual broad gaming demographic.

**UI application:** When designing gamification elements in non-game products (leaderboards, badges, challenges), don't default to competitive mechanics that disproportionately appeal to a stereotype user. Include cooperative challenges, mastery-based recognition, and social acknowledgment — which research shows are more universally motivating than pure competition.

---

### Thing 74: What People Find Visually Appealing Depends on Age, Gender, and Geography

**What it is:** Aesthetic preferences in design are not universal. What a 25-year-old woman in South Korea finds beautiful may differ significantly from what a 55-year-old man in Germany finds beautiful. Color preferences, complexity tolerance, imagery style preferences, and typography aesthetics all vary by demographic and cultural context.

**Research basis:** Lane Harrison, Katharina Reinecke, and Remco Chang (2015) published research showing that demographic factors (age, gender, location) predicted first-impression aesthetic ratings of data visualizations. The researchers identified consistent preference patterns by demographic cluster.

**Design implication:** Design research that validates aesthetic decisions must sample from the actual target demographic and geography. Designing "beautiful" by the designer's own aesthetic standards, without demographic validation, risks systematic misalignment with the target audience.

**UI application:** Conduct preference testing with samples from the actual target demographic — not with colleagues in the design studio. For global products, run A/B tests on visual variables (color schemes, imagery style, layout density) separately in key geographic markets rather than assuming one design fits all. Partner with local design teams when entering markets with significantly different aesthetic contexts.

---

### Thing 75: People Want Fewer Choices as They Get Older

**What it is:** Choice preference decreases with age. Older adults consistently prefer fewer options in decision contexts and are more satisfied with simpler choice sets. This is partly driven by cognitive resource conservation and partly by increased confidence in their own preferences — older adults know what they want and don't need to explore extensively.

**Research basis:** Andrew Reed, Joseph Mikels, and Corinna Lockenhoff (2013) studied preference for choice across adulthood and found a clear age trajectory toward reduced choice preference. Joseph Mikels et al. (2013) also showed that older adults rely more on affective (feeling-based) decision-making, which requires less information to reach a confident decision.

**Design implication:** Products designed for older user segments should offer simpler, more curated choice sets. The "show everything" approach appropriate for young audiences seeking discovery is inappropriate for older audiences seeking efficient completion.

**UI application:** For products with significant 50+ user segments (healthcare platforms, financial services, government services, retirement planning tools), reduce option sets on key decision pages. Use smart defaults and "recommended" choices prominently. Design for confidence-building through simplicity: fewer options, clearer hierarchy, and explicit recommendations outperform comprehensive catalogs for older users.

---

### Thing 76: The Mental Model of "Online" and "Offline" Is Different for Different Generations

**What it is:** Generations that grew up before the internet have a cognitive model that treats "online" as a distinct mode you enter and exit — you "go online," you "are on the internet." Generations that grew up with ubiquitous connectivity experience no such distinction — being connected is the default, not a mode. This creates different expectations about continuity, persistence, and context.

**Research basis:** Pew Research Center generational surveys and qualitative research on digital media use patterns document the experiential differences in how different generations conceptualize internet access and "online" as a concept.

**Design implication:** Older users may not expect background synchronization, persistent sessions, or cloud-based continuity. They may manually "log off" and expect a fresh state. Younger users expect persistent sessions, seamless cross-device continuity, and background updates. Both expectations must be handled gracefully.

**UI application:** Design for both mental models: provide explicit session management and "log off" functionality for users who expect it (don't just have it auto-expire), while also providing seamless persistent sessions for users who expect them. Make cloud sync behavior explicit and visible for users who do not assume it. For older-user-targeted products, explain where data is stored and reassure about privacy in ways that younger users find unnecessary.

---

### Thing 77: Over Half of the People Over Age 65 in the US Use the Internet

**What it is:** Older adults are a large and growing internet-using population. As of 2014–2015 Pew data, 58% of Americans aged 65+ used the internet, a figure that has grown substantially since. Dismissing older adults as "non-digital" users is empirically wrong and excludes a demographically massive and economically significant user group.

**Research basis:** Pew Research Center surveys (2014–2015) documented internet use among Americans 65+. The figure has grown every year since measurement began.

**Design implication:** Accessibility design for older users is not a niche consideration — it is mainstream UX design for a large active segment. The combined population of users who benefit from older-adult-friendly design (larger text, better contrast, simpler navigation, larger touch targets) is enormous.

**UI application:** Don't treat older-user design as a separate accessibility track — build it into your baseline design standards. Larger default text sizes, higher contrast ratios, clearly labeled navigation, and error forgiveness all benefit older users while not disadvantaging younger users. Follow WCAG AA contrast standards as a floor, not a ceiling.

---

### Thing 78: People Over 40 Have Presbyopia

**What it is:** Presbyopia is the loss of near-focus flexibility that begins for most people in their early to mid-40s and progresses through their 60s. The eye's lens stiffens, reducing the ability to focus on close text — particularly small text on screens held at arm's length. By age 50, the majority of the population needs reading glasses or bifocals for close work.

**Research basis:** Presbyopia is a well-documented physiological phenomenon of aging optics. The condition affects virtually everyone — it is not a pathology but a universal aging process beginning around age 40–45.

**Design implication:** Any product with a significant user base of 40+ (which is nearly every product of general-market relevance) will have users with reduced near-focus visual acuity. Small text is not merely a preference issue — it is a physical accessibility barrier.

**UI application:** Set minimum body text size at 16px for web and follow platform-appropriate minimums for mobile (avoid going below 14pt). Test your app with users who use reading glasses — the primary test is whether the content is legible without requiring glasses removal to zoom in. Provide easy in-app text size adjustment. Never use sub-12pt text for any user-facing content.

---

### Thing 79: The Color Blue Fades with Age

**What it is:** The lens of the human eye yellows with age, which filters blue light and causes blue wavelengths to appear less saturated and less visible. This process begins gradually in the 40s and becomes significant by the 60s and 70s. Older users see blue-dominated designs differently — blues appear more muted, and blue-on-blue or blue-on-dark contrast is particularly problematic.

**Research basis:** The yellowing of the ocular lens with age is well-documented optics and anatomy. The practical consequences for color perception have been studied in the context of age-related vision changes and aging driving research.

**Design implication:** Color-critical UI decisions should account for age-related blue fade. Blue text on dark backgrounds, blue interactive states on gray backgrounds, and subtle blue visual distinctions will fail for significant portions of your older user base.

**UI application:** Test your color scheme with simulated aging vision filters (there are browser extensions and design tools that simulate this). Avoid relying on blue for critical distinctions in products with 50+ user segments. Ensure links, active states, and selected states have high-contrast distinctions beyond color hue — use underlines, bold weight, or icon additions.

---

### Thing 80: Nearly 100 Million People Over Age 65 Have Hearing Problems

**What it is:** Presbycusis (age-related hearing loss) affects approximately one-third of people aged 65–74 and nearly half of those over 85 globally. Given the size of this population, age-related hearing loss represents one of the largest accessibility design considerations for any product that uses audio.

**Research basis:** Global demographic data and audiological research document the prevalence of age-related hearing loss. The WHO estimated that approximately 360 million people worldwide have disabling hearing loss, with the majority being older adults. (The 100 million figure is the US-specific older adult with hearing problems estimate.)

**Design implication:** Any product that relies on audio for critical functionality — voice interfaces, video content, audio alerts — must include non-audio equivalents and volume/captioning options as baseline design requirements, not optional accessibility add-ons.

**UI application:** Always provide captions/subtitles for video content. Provide transcripts for audio content. Ensure UI sounds (alerts, notifications, confirmations) are never the only indicator — always pair with visual feedback. For voice interface products, include an alternative text-based interaction path. Design your app to be fully functional with the device on silent.

---

### Thing 81: Motor Skills Don't Decline Until the Mid-60s

**What it is:** Fine motor precision — the ability to accurately target small objects and execute precise movements — remains relatively stable until the mid-60s, after which it declines progressively. This has direct implications for touch target sizing, especially for users over 65.

**Research basis:** Priscila Caçola, Jerroed Roberson, and Carl Gabbard (2013) compared movement representations across young, middle-aged, and older adults and documented the onset of motor skill decline in older adults, particularly for fine sequential movements.

**Design implication:** For users under 65, standard touch target minimums (44x44pt) are generally adequate. For users 65+, larger targets and increased spacing are necessary. The key practical implication is that fine motor decline is not a concern for middle-aged users but becomes significant in the 65+ segment.

**UI application:** For products specifically targeting 65+ users, increase touch target sizes beyond the standard minimum — aim for 56x56pt or larger. Increase spacing between adjacent touchable elements. Reduce the precision required for gesture interactions (wider activation zones for swipes, longer tap detection windows). Avoid requiring accurate long-press interactions for important functions.

---

### Thing 82: Older People May Not Have Answers to Those Security Questions

**What it is:** Standard security questions ("What was the name of your first pet?", "What street did you grow up on?") are built on assumptions about life history that do not hold for all older users. Some older users cannot recall these specifics, have had experiences different from the assumed norm, or live in contexts where the "standard" questions don't apply.

**Research basis:** This is a UX research observation supported by usability testing with older populations. The problem is well-documented in accessibility and age-inclusive design literature.

**Design implication:** Security question-based authentication creates access barriers for older users that younger users don't experience. This is both an accessibility issue and a security risk (users may choose incorrect/incorrect answers out of frustration).

**UI application:** Offer multiple authentication options rather than requiring security questions — email-based verification, SMS codes, or authenticator apps. If security questions are required, offer a large and varied set of options, including some with short-term memory requirements ("What was the last thing you purchased?"). Design the password reset flow to be simple and not reliant on memory-based fallbacks.

---

### Thing 83: As People Age, They Become Less Confident About Their Own Memories

**What it is:** Older adults experience metacognitive uncertainty — reduced confidence in the accuracy of their own memories. This memory confidence decline often precedes or is disproportionate to actual memory accuracy decline. The lack of confidence in one's own memory has design implications for how older users interact with confirmation flows, multi-step processes, and authentication.

**Research basis:** Research on metamemory across adulthood shows that older adults rate their memory confidence lower even on tasks where performance differences are small. This metacognitive shift affects how older users interact with products that ask them to recall or confirm information.

**Design implication:** Older users are more likely to second-guess themselves in confirmation dialogs, may return to verify information they have already correctly entered, and may need more reassurance that they have completed actions correctly.

**UI application:** Provide clear, persistent confirmation of completed actions for older-user products. Show order summaries before final submission. Use progress indicators that clearly show where the user is and what is already complete. In multi-step flows, allow easy review of previous steps. Offer "Did we get this right?" summaries before commitment. Reduce the number of decisions required per session.

---

### Thing 84: Generation Z Will Account for 40 Percent of All Consumers in 2020

**What it is:** Generation Z (born approximately 1995–2010) is the first generation to have grown up entirely within the smartphone era. They have fundamentally different digital expectations, attention patterns, shorter video engagement thresholds (under 10 seconds), and a preference for visual-first, snackable content. By 2020, they would constitute 40% of all consumers.

**Research basis:** Pew Research Center generational research and market research projections from multiple sources (cited in the book's publication context around 2015). The demographic projection of 40% Gen Z consumers by 2020 was a significant market sizing data point.

**Design implication:** Gen Z interaction patterns — infinite scroll, snackable video, visual-first content, disposable/ephemeral formats — are increasingly mainstream. Designing content and interaction patterns for this generation means designing for the dominant future-facing consumer behavior.

**UI application:** Design for extremely short attention spans at the top of the engagement funnel — 5-10 second video hooks, immediately visible value in the first screen, fast-loading assets, vertical video formats. Use short-form content as the primary engagement format (TikTok-style, Stories-style) rather than long-form as the primary. Provide quick, visual-first onboarding with minimal text.

---

### Thing 85: More Than One-Third of 1-Year-Olds Can Use a Touch Screen

**What it is:** Young children are now growing up as fluent touch-screen users from infancy. By age 1, approximately one-third of children are able to use a touchscreen device. By age 2–3, touchscreen use is near-universal in households that have devices. This is creating a generation of users with touchscreen as their primary (and possibly only) interaction paradigm.

**Research basis:** Hilda Kabali et al. (2015) conducted a pediatric study at Einstein Medical Center Philadelphia documenting touchscreen use patterns in very young children, finding that 36% of children under 1 year had touched or scrolled on a screen.

**Design implication:** Touch interaction is rapidly becoming the baseline interaction expectation for the youngest generation of users. Mouse-and-keyboard interaction will increasingly be a secondary or professional-context skill, not a universal baseline.

**UI application:** For any product with a children's user base, design exclusively for touch-first interaction. For general-market products, ensure touch-first design is the baseline rather than an adaptation of desktop interaction. Gesture-based navigation patterns that feel natural to touch-native users should be the primary model, with pointer/keyboard interactions as secondary alternatives.

---

### Thing 86: When Toddlers Laugh, They Learn More

**What it is:** Humor and laughter during learning experiences significantly enhance observational learning and retention in young children. When a model (adult or on-screen character) demonstrates humor during a task, children learn the task more effectively than from a serious demonstration. Positive affect during learning improves encoding.

**Research basis:** Rana Esseily, Lauriane Rat-Fischer, et al. (2015) demonstrated that humorous tool-use demonstrations by an adult model led to significantly higher rates of successful imitation by 18-month-old infants compared to non-humorous demonstrations.

**Design implication:** Educational content for children that incorporates humor and joyful, playful framing produces better learning outcomes than purely serious instructional content. Delight, surprise, and humor are pedagogically functional, not merely cosmetic.

**UI application:** In children's educational app design, build humor and playful surprise into the learning mechanics — not just the rewards, but the content presentation itself. Characters that make mistakes and laugh about it, silly sound effects for task completion, and unexpected humorous responses to user actions all serve pedagogical goals. This principle extends to adult learning contexts as well — appropriately playful UX in onboarding and tutorials improves retention.

---

## Chapter 11: How People Interact with Interfaces and Devices

### Thing 87: People Want to Skim and Scan Videos

**What it is:** Just as users skim and scan text, they want the ability to quickly navigate, preview, and jump between segments of long video content. The conventions of text skimming (headers, summaries, scannable structure) have no natural equivalent in traditional video interfaces — but users need and want that capability for videos longer than 5 minutes.

**Research basis:** Amy Pavel, Colorado Reed, Bjoern Hartmann, and Maneesh Agrawala (2014) at UC Berkeley developed the "Video Digest" concept and accompanying research. Their work documented user behavior and preference for structured video navigation. The Video Digest interface allows browsing, skimming, and chapter-based navigation of long video content.

**Design implication:** Embedding a 30-minute video without structure, navigation, or preview capability treats video as an "all or nothing" format — which users resist. Long video content needs the same information architecture care as long-form text content.

**UI application:** For video content over 5 minutes, provide: chapter markers with labeled timestamps, thumbnail previews on scrubbing, text summaries of video sections, and the ability to jump directly to specific sections. Implement keyboard shortcuts for jumping forward/back by defined increments (10s, 30s). For educational platforms, provide transcripts that are clickable to jump to the corresponding video moment.

---

### Thing 88: People Interact with Carousels

**What it is:** Despite widespread designer skepticism about carousels, evidence shows that users do interact with them — when the content is relevant and the interaction includes forms other than clicking (swiping, advancing, tapping thumbnails). The key variables are content relevance and measurement methodology — measuring "any interaction" vs. "clicks only" dramatically changes the conclusion.

**Research basis:** Erik Runyon's (2013) analysis of carousel interaction at ND.edu showed low click-through on non-primary carousel positions. Kyle Peatt's (2015) re-analysis in Smashing Magazine showed that when interaction is defined broadly (any advance, swipe, or thumbnail tap) interaction rates jump from 23% to 72%. Accessibility remains the primary genuine objection.

**Design implication:** The appropriate design conclusion is not "never use carousels" but "design carousels for the content type and measure interaction broadly." E-commerce carousels with compelling, useful images perform well. Auto-rotating promotional carousels with irrelevant content perform poorly. All carousels need accessibility implementation.

**UI application:** When using carousels: make each slide independently useful and relevant to the user's purpose; design for swipe/advance interaction (not click-only); ensure the carousel is accessible (screen reader-compatible, keyboard navigable); put the most important content in position 1; don't auto-rotate if the content requires reading time. Avoid carousels for purely promotional content with no user utility.

---

### Thing 89: People Scroll

**What it is:** The conventional wisdom that content below the fold is not seen is false. Empirical data from large-scale website analytics shows that users scroll extensively and spend the majority of their time on content below the initial viewport. 76% of page visits include scrolling; 22% of users scroll all the way to the bottom.

**Research basis:** Chartbeat analysis of 2 billion website visits found that 66% of time on a page is spent below the fold. ClickTale analysis of 100,000 visits showed 76% of pages were scrolled. Both studies contradict the "no one scrolls" assumption.

**Design implication:** Scroll willingness is conditional on engagement — users scroll when the content rewards it. The role of above-the-fold design is to create enough engagement that users want to scroll, not to contain all important information.

**UI application:** Design for scroll by: putting the most compelling hook above the fold to establish engagement; ensuring scroll cues (visual continuation of content, subtle arrow indicators, or content peeking) signal that more is below; avoiding "dead zones" of low-value content that cause users to stop scrolling. Long landing pages with compelling storytelling structure outperform short pages for many conversion goals. Always avoid horizontal scrolling — vertical is natural, horizontal is not.

---

### Thing 90: People Can't Even Talk to the Car While Driving

**What it is:** Even voice-only interfaces — which are widely assumed to be safe for use while driving — significantly impair driving performance by diverting cognitive attention. The cognitive load of understanding speech, formulating responses, and error recovery for voice interfaces is sufficient to cause measurable driving degradation. Hands-free does not mean brain-free.

**Research basis:** Bryan Reimer (2015) tested 80 experienced drivers using both smartphone voice interfaces (Samsung Galaxy S4) and embedded vehicle voice systems (Chevrolet MyLink, Volvo Sensus) and measured heart rate, skin conductance, visual engagement, and driving performance. All voice interface conditions produced measurable degradation in driving performance.

**Design implication:** Voice interface design for driving contexts must minimize cognitive load to the absolute minimum — optimizing for zero-confirmation, minimal dialogue turns, and high error tolerance. Ambient noise, speech recognition error handling, and dialogue complexity must all be designed for conditions of divided attention.

**UI application:** For automotive or driving-adjacent voice interfaces: minimize the number of utterances required to complete a task (target 1–2 turns maximum); design for ambient noise tolerance; use natural language processing to handle varied phrasing; design graceful error recovery that doesn't require complex correction dialogue; allow tasks to be initiated before driving starts (e.g., "navigate home" rather than typing an address); and never design a voice interface for driving that requires reading visual feedback.

---

### Thing 91: People Don't Always Engage More When You've Used "Gamification"

**What it is:** Adding game elements to non-game products — typically badges, points, and leaderboards — often fails to produce meaningful engagement because most "gamification" implementations use only extrinsic reward mechanisms while ignoring the intrinsic motivators (story, mastery, belonging) that actually drive sustained engagement in great games.

**Research basis:** Multiple analyses from 2012 onward documented widespread gamification failures, leading to significant reassessment of the approach. The theoretical basis for why rewards undermine intrinsic motivation comes from self-determination theory (Deci and Ryan) and cognitive evaluation theory.

**Design implication:** Gamification is not a surface-level mechanic (add badges = more engagement). It is a motivational design approach that requires understanding what actually drives human motivation. Intrinsic motivators — mastery, autonomy, story, belonging — are more powerful and more durable than points and badges. Extrinsic rewards can actually reduce intrinsic motivation (the overjustification effect).

**UI application:** Before adding a leaderboard or badge system: identify which intrinsic motivators (mastery, autonomy, purpose, belonging) your product can address. Design for mastery by providing clear skill progression and feedback without praise. Design for autonomy by giving users meaningful choices in how they engage. Design for belonging through community features and shared challenges. Use extrinsic rewards (badges, points) only to celebrate intrinsic achievement, not to substitute for it.

---

### Thing 92: Games Can Improve Perceptual Learning

**What it is:** Playing action video games measurably increases the speed of visual information processing, the ability to filter irrelevant sensory input, and cognitive flexibility — the ability to coordinate attention, thinking, decision rules, and choices simultaneously. These improvements in perceptual learning transfer outside the gaming context.

**Research basis:** Brian Glass, W. Todd Maddox, and Bradley Love (2013) ran a controlled study where non-gaming women played Sims 2, StarCraft (one base), or StarCraft (two bases) for an hour a day over 40 days. Cognitive flexibility improved most in the StarCraft groups, with the two-base condition producing the largest improvement. The adult brain's neuroplasticity enables these gains.

**Design implication:** Game-based learning and gamified training products have genuine neuroscientific support when properly designed. Action games improve perceptual speed; strategy games improve cognitive flexibility. This has implications for training product design.

**UI application:** For training and learning products, design game mechanics that target specific cognitive outcomes: action-game mechanics (speed, pattern recognition, rapid response) for perceptual skill training; strategy mechanics (resource allocation, planning, multi-variable management) for cognitive flexibility training. The key is purposeful game design aligned with the target learning outcome, not generic game elements applied to unrelated content.

---

### Thing 93: People Need Fewer Choices

**What it is:** "Anticipatory design" is an emerging design philosophy that goes beyond personalization to actually eliminate choices on behalf of users — automatically delivering what users are most likely to want, based on behavior and preferences, without requiring users to actively make decisions. The premise is that many choices users currently navigate are unnecessary and the designer's role is to remove them.

**Research basis:** Gu, Botti, and Faro (2013) on choice closure; Reed, Mikels, and Lockenhoff (2013) on aging and choice preference; and Milkman et al. on decision fatigue all support the principle that fewer choices produce better decision outcomes. Aaron Shapiro's (2015) Fast Company article on anticipatory design frames the design application.

**Design implication:** The designer's role is not to present all possible options elegantly — it is to understand users deeply enough to eliminate the options they don't need, and deliver the experience they actually want before they have to ask for it.

**UI application:** Implement smart defaults based on user behavior patterns — auto-fill shipping address, auto-select the payment method used last time, pre-select the option chosen most frequently. Build predictive search and recommendation systems that surface the most likely choice prominently. Design for "one tap to confirm" rather than "many taps to configure." For subscription services, auto-renew and pre-curate rather than requiring active re-engagement. Respect opt-out carefully when automating decisions on users' behalf.

---

### Thing 94: People Want Devices to Monitor Their Health

**What it is:** Wearable health monitoring technology has strong user demand driven by the fundamental human desire for control — including control over one's own body and health. As wearable devices proliferate, the design challenges shift from hardware industrial design to the interface design of very small screens and the smartphone apps that receive data from wearables.

**Research basis:** Market research and user adoption data on wearable devices (Fitbit, Apple Watch predecessor devices, specialized medical wearables) at time of publication (2015) demonstrated rapid adoption growth. The psychological basis is autonomy and control — people want information about their own bodies.

**Design implication:** Wearable interface design requires a specialized skill set: designing for very small screens, designing for glance-time (sub-3-second interactions), understanding physical context of use (exercising, sleeping), and designing data visualization for minimal display constraints.

**UI application:** For wearable companion apps on smartphones: prioritize the single most important metric in the design (don't try to show everything); design for the context of use (checking a watch while running requires instant legibility); use large, high-contrast numerals and simple icons; minimize interaction steps required for common actions (check heart rate should require 0 taps, not 3); and test in actual physical context (while moving, with sweaty hands, in bright sunlight).

---

### Thing 95: People Will Increasingly Have Devices Implanted to Monitor and Intervene in Their Health

**What it is:** Implanted medical devices that monitor, communicate, and intervene in bodily function are rapidly proliferating. As of the book's publication, 2.5 million Americans already had implanted medical devices. These devices require UX design that accounts for extremely high-stakes contexts, regulatory constraints, and unusual use environments (surgery theaters, emergency situations).

**Research basis:** Medical device industry statistics and FDA regulatory framework documentation are the primary references. The stakes in medical device UX design are uniquely high: design failures can cause patient harm.

**Design implication:** Medical device UX design requires specialized domain knowledge, regulatory familiarity (FDA, CE marking, etc.), and formal human factors documentation. The principles of user-centered design are essential and are actually mandated by regulators in many jurisdictions.

**UI application:** For medical device design teams: mandate user research in the actual context of use (operating theaters, ICUs, homes); document all design decisions with human factors rationale; conduct formal formative and summative usability testing to regulatory standards; apply IEC 62366 (usability engineering for medical devices) as a design framework; and prioritize error prevention above all other design considerations given the life-critical stakes.

---

### Thing 96: People Can Control Technology with Their Brains

**What it is:** Brain-computer interfaces (BCIs) — both implanted neural implants and external EEG headsets — now allow people to control technology with thought. Neural implants can detect electrical activity corresponding to intended movements or thoughts, which is translated into device commands. Non-invasive options (EEG headsets like NeuroSky) allow thought-control of consumer devices without surgery.

**Research basis:** DARPA's SUBNETS program (documented in the chapter), NeuroSky commercial EEG products, and BrainGate neural interface research are primary references. The technology has demonstrated reliable letter-of-alphabet detection and face-recognition decoding from neural signals.

**Design implication:** Brain-machine interfaces are an emerging design domain. As they become more capable and accessible, designers will need to understand how to design interactions that respond to neural input — which has different latency, error rates, and feedback requirements than touch or voice.

**UI application:** For designers interested in early BCI design: acquire a consumer EEG headset (NeuroSky, Muse) and build familiarity with the interaction modality; design BCI interactions for robustness to false-positive commands (accidental triggers); design for much higher error tolerance than touch or keyboard interfaces; and prioritize "undo" functionality for all BCI-triggered actions.

---

### Thing 97: People Will Adapt to Multi-Modal Interfaces

**What it is:** The input modes for computing are diversifying beyond touch and keyboard: voice, gesture, biometric (heart rate, skin conductance), environmental sensors, eye tracking, and potentially conductive fabric (Project Jacquard). Users will increasingly interact with the same device or service through multiple input modes, switching fluidly between them. People can adapt to multiple modalities when each is intuitive, seamless, and appropriate to the context.

**Research basis:** Google/Levi's Project Jacquard is the primary example cited. Microsoft HoloLens, voice assistants, and gesture interfaces from that era provide the broader context for multi-modal interaction design as an emerging field.

**Design implication:** Designing for a single interaction modality is increasingly a limiting constraint. Multi-modal design — where voice, touch, gesture, and potentially other modalities all accomplish the same core tasks through different means — will become the baseline expectation.

**UI application:** For voice-capable products, ensure that the same tasks achievable by touch are fully achievable by voice, and vice versa — don't create "voice-only" features or "touch-only" features for core workflows. Design consistent mental models and terminology across modalities so users can switch without re-learning. Plan for graceful degradation — when one modality fails (voice recognition in a noisy environment), the user should be able to seamlessly switch to another (touch).

---

### Thing 98: People Will Embrace Mixed Reality

**What it is:** Mixed reality — head-mounted displays that overlay digital information on the physical world — represents a fundamental shift in interface design from 2D screens to 3D spatial computing. Interaction in mixed reality primarily occurs through gesture and voice. When well-implemented, mixed reality liberates users from screen-bound experiences and enables information access in physical contexts.

**Research basis:** Microsoft HoloLens research and development (cited in chapter), Mark Schall's (2013) research showing that augmented reality windshield information improved driving performance even for older drivers, and virtual retinal display technology research.

**Design implication:** Mixed reality requires rethinking UI design from 2D layout principles to 3D spatial principles. UI elements become objects in space that can be placed, scaled, and positioned relative to physical reality. Traditional screen metaphors (fixed-width columns, grid layouts) do not translate directly.

**UI application:** For designers preparing for mixed reality: study spatial UX principles from gaming and VR design; prototype with tools like Microsoft HoloLens or Meta Quest; design for glance-based interaction (information that can be processed in under 2 seconds while the user is doing something else); and prioritize extreme legibility and navigation clarity, since a disorienting mixed reality interface has no escape button in the conventional sense.

---

### Thing 99: Over 645 Million People Have Visual or Auditory Impairments

**What it is:** The scale of sensory impairment globally is massive: over 645 million people worldwide have significant visual or auditory impairments. The BrainPort device (which converts camera images to tongue sensations for the visually impaired) and similar sensory substitution technologies are emerging to augment impaired senses through entirely new neural pathways, exploiting the brain's neuroplasticity.

**Research basis:** WHO global disability statistics and the BrainPort device research (Wicab Inc.) are primary references. The BrainPort converts visual data from a camera to electrode patterns on a tongue pad, which the brain learns to interpret as visual shapes — a demonstration of radical sensory neuroplasticity.

**Design implication:** Designing for accessibility is not a niche requirement — it is designing for 645+ million users, plus the even larger population with temporary or situational impairments. Accessibility tools (screen readers, voice control, switch access) are the primary digital assistive interface for this population, making WCAG compliance a baseline ethical design requirement.

**UI application:** Implement WCAG 2.1 AA as a minimum accessibility standard. Test with screen readers (VoiceOver on iOS, TalkBack on Android, NVDA/JAWS on desktop). Ensure all images have meaningful alt text. Provide captions for all video content. Design keyboard navigability for all interactive elements. Conduct accessibility testing with actual users who have disabilities — not just automated checkers. Treat accessibility as a continuous design priority, not a pre-launch checkbox.

---

### Thing 100: People Process Sensory Data Unconsciously

**What it is:** The vast majority of sensory data received by the body and brain is processed entirely below conscious awareness. The conscious mind handles only a small fraction of incoming information, while the unconscious handles the rest — including pattern recognition, prediction, and decision-support. Sensory substitution (routing visual or auditory data through alternative senses) works because the brain unconsciously learns to interpret novel data streams without conscious effort.

**Research basis:** David Eagleman's research at Baylor College of Medicine demonstrated sensory substitution (deaf users learning to interpret language patterns from a haptic vest) and sensory addition (users unconsciously learning to make stock-buying decisions based on stock market data fed to their body through haptic patterns — achieving correct decisions without consciously knowing what the patterns meant). Jonathan Freeman and Paul Verschure's eXperience Induction Machine (XIM) demonstrated that big data presented as multisensory environmental experience could be processed unconsciously by humans in the room.

**Design implication:** The most powerful user interface may not be a screen at all — it may be a multisensory environment that feeds data directly to the unconscious. For large-scale data analysis and pattern recognition, engaging multiple senses simultaneously and allowing unconscious processing may outperform any visual dashboard or chart. This is a speculative but neurologically grounded design direction.

**UI application:** For data-intensive products where pattern recognition is the core task: consider multisensory data representations — sound mapped to data dimensions (data sonification), haptic feedback mapped to data states, or spatial positioning of data elements. For accessibility in sensory impairment contexts, design for sensory substitution pathways. For all product design: design for the unconscious user, not just the conscious one — layout, rhythm, motion, and spatial logic affect users before they consciously process content.

---

## Summary

### Key Themes Across All 100 Things

**Unconscious processing dominates:** The majority of human perception, emotion, decision-making, and behavior occurs below conscious awareness. System 1 thinking, peripheral vision, anchoring, emotional contagion, and sensory processing are all largely unconscious. Design for the unconscious user first.

**Embodied cognition:** Thinking and feeling are not brain-only processes. Body posture, gestures, physical interaction, haptic feedback, and physical environment all shape cognitive and emotional states. Design considers the whole body, not just the eyes and fingers.

**Stories beat facts:** Narrative activates more of the brain, creates stronger memories, drives neurochemical change, and influences behavior more effectively than information alone. Lead with story in all persuasive and educational design.

**Identity over action:** Framing behavior as identity (noun) is more effective than framing it as action (verb). Design for who users are becoming, not just what they are doing.

**Universal accessibility is mainstream design:** The populations covered by accessibility considerations — older adults, people with hearing/vision impairment, color-blind users, users with motor limitations — collectively represent the majority of users over a full lifetime. Accessibility is not a niche add-on.

**Constraint enables creativity:** Unlimited creative freedom is less productive than constrained creative challenges. Limitations focus attention and drive novel solutions.

**Multi-modal and emerging interfaces:** Voice, gesture, BCI, wearable, mixed reality, and sensory interfaces are no longer speculative — they require UX design principles that extend beyond the screen.

---

THINGS_TOTAL: 100 concepts extracted
