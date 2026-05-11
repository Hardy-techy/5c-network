# Executive Summary  
5C Network’s homepage has three key UX/design issues: (1) **Cramped spacing/overlap** – adjacent sections (like the persona “hospital” and “radiologist” cards and the stat row) butt up against each other, making the layout look cluttered and unpolished【33†L62-L66】【33†L68-L74】. (2) **Flat visual hierarchy** – most sections use the same white background and typography, so there’s no clear emphasis on priority content; important data (like turnaround stats or AI features) blends together. (3) **Diffuse calls-to-action** – multiple CTAs are spread across the page (two persona panels plus duplicate “Request Demo” buttons), which dilutes the main conversion path. These flaws hurt both clarity and trust for hospital admins and radiologists.  Addressing them (e.g. adding padding between sections, introducing visual contrast/graphics, and streamlining CTAs) should boost engagement metrics – for example, reducing bounce rate by ~5–10% and increasing scroll depth and demo sign-ups by 10–15% (estimates, assuming current bounce ~50%).  

## Problem 1: Cramped Spacing & Overlap  
The homepage stacks content blocks with minimal separation. For example, the two top CTA cards (“I run a hospital…” and “I’m a radiologist…”) end almost immediately above the “1,500+ Healthcare Facilities / 10,000+ Scans” stats block【33†L62-L66】【33†L68-L74】. In practice, the stat numbers and headings visually touch the bottom of the cards (see Fig.1), giving a “torn” or overlapping appearance. This **spacing issue** makes the design feel unfinished. 

A tight layout like this **hurts readability and credibility**. Key metrics (e.g. “1,500+ facilities trust 5C”) can be hard to scan when they’re jammed against the section above. Hospital administrators or enterprise users may perceive the site as unprofessional, undermining trust. Radiologists might gloss over the stats entirely. By contrast, the dedicated Hospitals page uses well-separated sections – e.g. the “Radiology Capacity. On Demand.” header sits clearly above the content below【10†L52-L58】 – which looks cleaner and more authoritative.

**Expected improvement:** Fixing the overlap (adding vertical padding/margin between sections) should make the page feel more breathable. We estimate such changes could cut bounce rate by ~5–10% and increase average scroll depth by ~10%, as visitors engage longer when the page reads comfortably.

**Recommended fixes:**  
- **Increase vertical spacing**: Add a bottom margin or padding (e.g. `margin-bottom: 3rem`) to the CTA card container so it doesn’t butt up against the stats. Ensure each major section has enough top/bottom padding to stand alone.  
- **Adjust z-index or block stacking**: If using overlapping backgrounds, ensure the stat block sits *above* or is offset from the cards (so text never overlaps).  
- **Use separator elements**: Consider a full-width divider or background band (light gray) between these sections to visually anchor them apart. For example, a thin horizontal line or contrasting strip under the cards could prevent bleed (similar to the Hospitals page’s distinct headers【10†L52-L58】).  
- **Review responsive spacing**: Ensure mobile layouts also have clear gaps (e.g. larger vertical padding) since limited width can exacerbate crowding.  

## Problem 2: Flat Visual Hierarchy and Uniform Layout  
Most homepage sections use an almost identical design (white background, centered headings, small icons) with little variation. The “Meet your AI radiologist”, “How your AI radiologist works”, “Our Thinking”, and “Clinical Flywheel” sections all look very similar. There are no visual anchors (images, color bands or accented headings) to differentiate them. This creates a **monotonous scroll**: users see block after block of text with few “wow” elements. For example, the “How your AI radiologist works” steps look nearly identical to the surrounding text sections【33†L113-L122】【33†L128-L132】, lacking standout imagery or styling. 

【27†embed_image】【28†embed_image】 *Figure: 5C’s homepage mixes graphic styles. The login-panel icons shown (hospital left, radiologist right) have a 3D/cartoon look that clashes with the page’s otherwise flat layout. Such style inconsistency highlights the lack of a unified visual theme.* 

This flat hierarchy **hurts engagement**. Without clear headings or images, readers skim rather than absorb details. Important points (like AI capabilities or quality stats) may be skipped. For reference, the Radiologists page *clearly segments* each benefit with bold subheadings (e.g. “### Work From Anywhere”, “### Competitive Earnings”)【32†L113-L118】. Similarly, the Hospitals page highlights data in an alternating-row table【20†L143-L150】. In contrast, the homepage’s stat row (e.g. “1,500+ Healthcare Facilities”) is just plain text on white【33†L68-L74】, making it easy to overlook. 

**Expected improvement:** Introducing stronger hierarchy should make key information “pop.” We estimate scroll depth could rise by ~10–15% as users find sections more distinct and stay to read them. (Time on page may also increase due to improved readability.)

**Recommended fixes:**  
- **Alternate backgrounds or color accents:** Use a light background tint or color strip on every other section to break up the white monotony. For example, give the “How it works” or “Flywheel” section a pale blue or gray background.  
- **Add imagery or iconography:** Introduce meaningful visuals. This could be a hero dashboard screenshot (see example Fig.2 below) or custom icons for each step. A relevant image in the hero or feature section would anchor the content.  
- **Enhance typography:** Increase heading size/weight on key sections (e.g. make “How your AI radiologist works” a larger H2 or add an icon next to it). Use color for headings to differentiate them.  
- **Unify style:** Ensure all graphics share a consistent look (flat vs 3D). Currently, the 3D icon style (Fig.1) clashes; choosing one style (e.g. flat SVG icons) will make the design feel coherent.  
- **Structure data visually:** Consider turning critical stats into a mini-table or highlight box (as done in the Hospitals page’s “5C Network Difference” table【20†L143-L150】) rather than inline text, to draw the eye.

## Problem 3: Confused Calls-to-Action (CTAs)  
The homepage dilutes its CTAs by scattering and repeating them. At the top, there are two equally-prominent persona options (“I run a hospital…” vs “I’m a radiologist…”【33†L62-L66】) instead of one clear hero CTA. Later, a “Try 10 cases free” message is followed by a **“Request a Demo”** button, which is repeated twice (once with “Calculate ROI”【33†L198-L202】 and again near the footer【33†L198-L202】). Multiple identical “Request a Demo” buttons and general prompts force users to decide which action is primary. This **CTA overload** can confuse users. 

For comparison, the Radiologists page leads with a single clear action (“Apply to Report”)【11†L62-L64】. The Hospitals landing page similarly uses focused CTAs (“Calculate Your Savings”, “Get a Custom Proposal”)【10†L58-L61】. On the homepage, a hospital admin might click “I run a hospital” (good) but then see the generic demo offers below, wondering which path to follow. A radiologist sees “Report from home…See what you’ll earn”【33†L62-L66】, but the actual “Apply” button is on a different page. In short, the main conversion (e.g. “Request Demo” or “Apply”) isn’t emphasized, hurting clarity. 

**Expected improvement:** Streamlining CTAs should raise conversion. We expect demo requests or applications could increase by ~10–15% once there’s a single, highlighted CTA per persona. For example, making “Request a Demo” one prominent button (rather than two copies) and ensuring it contrasts in color should boost click-through. 

**Recommended fixes:**  
- **Highlight one primary CTA:** Choose a single action (e.g. “Request a Demo” in the header) and give it a standout color (e.g. the site’s accent color). Remove duplicate buttons. For example, only one “Request a Demo” at a fixed spot (sticky header or hero) and move others.  
- **Persona-specific labels:** If keeping the two panels, make them clearly target each audience. Add icons/images to the “hospital” vs “radiologist” cards so users instantly recognize their path. Ensure the “I’m a radiologist” panel links directly to the Radiologists apply page.  
- **Consolidate footer CTAs:** The footer currently repeats “Request a Demo” and adds “Download Whitepaper”【20†L280-L284】. Consider keeping just one or merging (“Get Started” leading to a single form).  
- **CTA styling:** Increase button contrast (use a brighter background and larger padding). A CSS hint: use `.btn-primary { background-color: #6C63FF; }` (the 5C purple) for the demo button to make it pop.  

| Problem                             | User Impact                                       | Expected Metric Uplift (est.)              |
|-------------------------------------|---------------------------------------------------|--------------------------------------------|
| **Overlap/Spacing Issues**          | Key stats and sections are hard to read; page feels unpolished (reduces trust) | Bounce ↓ ~5–10%; scroll depth ↑ ~10%       |
| **Flat Visual Hierarchy**           | Content blends together; users may skim/skip important info (low engagement) | Scroll depth ↑ ~10–15%; time on page ↑      |
| **Diffuse CTAs**                    | Users unsure which action to take; conversion path unclear (lost leads)       | Demo/app requests ↑ ~10–15%; bounce ↓ ~5%   |