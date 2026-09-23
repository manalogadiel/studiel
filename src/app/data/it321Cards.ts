import type { Flashcard } from "./subjects";

export const it321Cards: Flashcard[] = [
  // ==========================================
  // I. KEY TERMINOLOGY & VOCABULARY
  // ==========================================
  {
    id: 701,
    term: "Human-Computer Interaction (HCI)",
    definition:
      "A field of study focused on interfaces between users and computers, examining how humans use technology to establish applicable, efficient, and user-centric systems.",
  },
  {
    id: 702,
    term: "Usability",
    definition:
      "A core design focus derived from the slogan \"easy to learn and easy to use\".",
  },
  {
    id: 703,
    term: "Ergonomics & Human Factors",
    definition:
      "The study of people's efficiency in their workplace, addressing physical and cognitive discomfort to maximize productivity.",
  },
  {
    id: 704,
    term: "Desktop Metaphor",
    definition:
      "A design concept popularized by the Apple Macintosh that uses visual desktop elements to help users interact intuitively with operating systems.",
  },
  {
    id: 705,
    term: "Sensation",
    definition:
      "The bottom-up process by which sensory organs receive and relay external stimuli.",
  },
  {
    id: 706,
    term: "Perception",
    definition:
      "The top-down process by which the brain organizes, interprets, and contextualizes sensory information.",
  },
  {
    id: 707,
    term: "Cognition",
    definition:
      "The mental processes involved in acquiring, processing, and understanding information during daily activities.",
  },
  {
    id: 708,
    term: "Attention",
    definition:
      "Focusing mental resources on specific environmental stimuli.",
  },
  {
    id: 709,
    term: "Divided Attention",
    definition:
      "Processing multiple sources of information simultaneously.",
  },
  {
    id: 710,
    term: "Selective Attention",
    definition:
      "Filtering out irrelevant environmental stimuli to focus on a specific input.",
  },
  {
    id: 711,
    term: "Change Blindness",
    definition:
      "The failure to notice a visual difference between a previous state and a current state in a stimulus environment.",
  },
  {
    id: 712,
    term: "Philosophy of Mind",
    definition:
      "A branch of philosophy exploring the mind's essence and its relationship to the physical body.",
  },
  {
    id: 713,
    term: "Dualism",
    definition:
      "The belief that the mind (cognition/consciousness) and body (physical brain) exist independently (René Descartes, Plato, Aristotle).",
  },
  {
    id: 714,
    term: "Monism",
    definition:
      "The belief that mind and body are part of a single, unified substance (Spinoza, Parmenides).",
  },
  {
    id: 715,
    term: "Computational Theory of Mind (CTM)",
    definition:
      "The hypothesis that the human mind functions as an information-processing device and consciousness consists of computational processes.",
  },

  // ==========================================
  // II. HISTORICAL MILESTONES & KEY TIMELINE
  // ==========================================
  {
    id: 716,
    term: "1970s (Emergence)",
    definition:
      "HCI began as a specialized niche within computer science before expanding into a multidisciplinary tech community.",
  },
  {
    id: 717,
    term: "1980s – 1990s (Desktops & Mental Models)",
    definition:
      "Focused on individual computing usability and mental models, giving rise to the desktop metaphor.",
  },
  {
    id: 718,
    term: "1990s – Early 2000s (Collaboration & Communication)",
    definition:
      "HCI shifted from purely cognitive models to interactive, organizational computing driven by the popularity of Electronic Mail (Email).",
  },
  {
    id: 719,
    term: "Mid-2000s – 2010s (Social Change & Self-Expression)",
    definition:
      "Emphasized value-driven design (social, emotional, business forms) and self-reflection, while confronting the paradox of living \"alone together\" in device-focused social settings.",
  },
  {
    id: 720,
    term: "Technology Adoption Lifecycle (Everett Rogers, 1962)",
    definition:
      "A framework categorizing adopters into 5 groups: Innovators, Early Adopters, Early Majority, Late Majority, and Laggards.",
  },
  {
    id: 721,
    term: "Innovators",
    definition:
      "The youngest category; first to adopt new technologies.",
  },
  {
    id: 722,
    term: "Early Adopters",
    definition:
      "High community influence and opinion leadership; adopt verified innovations.",
  },
  {
    id: 723,
    term: "Early Majority",
    definition:
      "Pragmatic adopters who accept innovations over a standard timeframe.",
  },
  {
    id: 724,
    term: "Late Majority",
    definition:
      "Skeptical adopters who only adopt innovations due to social pressure or necessity.",
  },
  {
    id: 725,
    term: "Laggards",
    definition:
      "The final group to change; reliant on tradition with no opinion leadership.",
  },

  // ==========================================
  // III. REASONING AND ARGUMENT
  // ==========================================
  {
    id: 726,
    term: "Deductive Reasoning",
    definition:
      "Top-down logic; derives specific conclusions from general premises. Evaluated as Valid, Invalid, or Sound.",
  },
  {
    id: 727,
    term: "Valid (Deductive)",
    definition:
      "Inference must be true if premises are true.",
  },
  {
    id: 728,
    term: "Invalid (Deductive)",
    definition:
      "Premises do not logically lead to the conclusion.",
  },
  {
    id: 729,
    term: "Sound (Deductive)",
    definition:
      "Premises are factually true AND the argument is valid.",
  },
  {
    id: 730,
    term: "Deductive Argument Example (Sound)",
    definition:
      "Premise 1: Sarah is 25. Premise 2: Marjorie is 20. Conclusion: Marjorie is younger than Sarah (Sound).",
  },
  {
    id: 731,
    term: "Inductive Reasoning",
    definition:
      "Bottom-up logic; generalizes conclusions based on specific observations. Evaluated as Strong, Weak, or Cogent.",
  },
  {
    id: 732,
    term: "Strong (Inductive)",
    definition:
      "High probability of truth given true premises.",
  },
  {
    id: 733,
    term: "Weak (Inductive)",
    definition:
      "Conclusion is uncertain even if premises are true.",
  },
  {
    id: 734,
    term: "Cogent (Inductive)",
    definition:
      "Strong argument with factually true premises.",
  },
  {
    id: 735,
    term: "Inductive Argument Example (Strong)",
    definition:
      "Premise 1: 95% of students passed. Premise 2: Hyrie is a student. Conclusion: Hyrie probably passed (Strong).",
  },
  {
    id: 736,
    term: "Abductive Reasoning",
    definition:
      "Inference to the best explanation; starts with observations to find the most likely cause. (Evaluated on plausible likelihood).",
  },
  {
    id: 737,
    term: "Abductive Reasoning Example",
    definition:
      "Premise 1: Ken shares a secret. Premise 2: Everyone knows it next week. Conclusion: His friend leaked it.",
  },

  // ==========================================
  // IV. PROBLEM SPACE & GESTALT THEORY
  // ==========================================
  {
    id: 738,
    term: "Problem Space Model",
    definition:
      "Comprises three functional states used to reach solutions: Initial State, State In-Between, and Goal State.",
  },
  {
    id: 739,
    term: "Initial State",
    definition:
      "The baseline problem statement in the Problem Space Model (e.g., Loraine has no dress for next week's ball).",
  },
  {
    id: 740,
    term: "State In-Between",
    definition:
      "The intermediate procedures and options leading toward a solution (e.g., Deciding where and when to shop).",
  },
  {
    id: 741,
    term: "Goal State",
    definition:
      "The successfully resolved outcome in the Problem Space Model (e.g., Loraine has a dress for her ball).",
  },
  {
    id: 742,
    term: "Problem Solving vs. Reasoning",
    definition:
      "Problem-solving focuses on finding solutions to complex queries, while reasoning is objectively evaluating information to formulate judgments.",
  },
  {
    id: 743,
    term: "HCI Research Problem Types",
    definition:
      "Three functional categories of research problems in HCI: Empirical, Conceptual, and Constructive.",
  },
  {
    id: 744,
    term: "Empirical Research Problem (HCI)",
    definition:
      "An HCI research problem focused on direct observation, user studies, and quantitative/qualitative data measurement.",
  },
  {
    id: 745,
    term: "Conceptual Research Problem (HCI)",
    definition:
      "An HCI research problem focused on developing theories, concepts, definitions, and mental models.",
  },
  {
    id: 746,
    term: "Constructive Research Problem (HCI)",
    definition:
      "An HCI research problem focused on producing, engineering, and building new computational tools, systems, or interactive artifacts.",
  },
  {
    id: 747,
    term: "HCI Solution Evaluation Criteria",
    definition:
      "Five core criteria for evaluating an HCI solution: Significance, Effectiveness, Efficiency, Transfer, and Confidence.",
  },

  // ==========================================
  // V. GESTALT PRINCIPLES OF VISUAL PERCEPTION
  // ==========================================
  {
    id: 748,
    term: "Gestalt Theory (Psychology & HCI)",
    definition:
      "A framework of visual perception based on the fundamental idea that the human mind perceives unified shapes, patterns, or overall structures rather than just a collection of separate individual parts.",
  },
  {
    id: 749,
    term: "Core Concept of Gestalt",
    definition:
      "The central premise is often summarized as \"the whole is different from the sum of its parts\"—meaning our brain naturally organizes, connects, and interprets complex visual information into structured visual patterns.",
  },
  {
    id: 750,
    term: "Gestalt Application in Design",
    definition:
      "In HCI and interface design, Gestalt principles (such as Continuation, Closure, Similarity, Proximity, Symmetry, and Figure/Ground) are applied to arrange visual elements so users can naturally interpret layouts, recognize functional groupings, and navigate interfaces with minimal cognitive effort.",
  },
  {
    id: 751,
    term: "Continuation",
    definition:
      "Visual perception is guided along a smooth line or path from one visual element to another (e.g., Amazon logo arrow leading from 'a' to 'z').",
  },
  {
    id: 752,
    term: "Closure",
    definition:
      "The brain automatically fills in missing gaps in an incomplete visual object to perceive a whole shape (e.g., WWF panda logo).",
  },
  {
    id: 753,
    term: "Similarity",
    definition:
      "Elements sharing visual characteristics (color, shape, size) are grouped together (e.g., NBC peacock feathers).",
  },
  {
    id: 754,
    term: "Proximity",
    definition:
      "Objects positioned near each other are perceived as a cohesive group (e.g., Individual icons forming Unilever's 'U' logo).",
  },
  {
    id: 755,
    term: "Symmetry",
    definition:
      "Balanced, mirror-image layouts create a unified visual object (e.g., Starbucks logo).",
  },
  {
    id: 756,
    term: "Figure and Ground",
    definition:
      "The eye isolates focal shapes (figure) from their surrounding background context (ground). (e.g., Rubin's vase vs. two facing profiles).",
  },
  {
    id: 757,
    term: "Amazon Logo (Gestalt Example)",
    definition:
      "Demonstrates Continuation: The visual arrow guides perception smoothly from 'a' to 'z'.",
  },
  {
    id: 758,
    term: "WWF Panda Logo (Gestalt Example)",
    definition:
      "Demonstrates Closure: The human brain automatically fills in gaps in the incomplete shapes to perceive a complete panda.",
  },
  {
    id: 759,
    term: "NBC Peacock Logo (Gestalt Example)",
    definition:
      "Demonstrates Similarity: Visual feathers sharing the same shape and visual characteristics are perceived as a unified group.",
  },
  {
    id: 760,
    term: "Unilever 'U' Logo (Gestalt Example)",
    definition:
      "Demonstrates Proximity: Individual distinct icons placed close together are perceived as one cohesive letter 'U'.",
  },
  {
    id: 761,
    term: "Starbucks Logo (Gestalt Example)",
    definition:
      "Demonstrates Symmetry: Balanced, mirror-image composition creating a stable, unified visual identity.",
  },
  {
    id: 762,
    term: "Rubin's Vase (Gestalt Example)",
    definition:
      "Demonstrates Figure and Ground: The visual system toggles between perceiving the central vase as the figure or the two facing profiles.",
  },

  // ==========================================
  // VI. HUMAN MEMORY (SENSORY, SHORT-TERM, LONG-TERM)
  // ==========================================
  {
    id: 763,
    term: "Multi-Store Memory Model",
    definition:
      "Proposed by Atkinson and Shiffrin (1968): Environmental Input -> Sensory Memory (< 500 ms) -> Attention -> Short-Term Memory (7 ± 2 items for 20–30s) -> Consolidation/Rehearsal <-> Retrieval -> Long-Term Memory. Information can be forgotten at each stage.",
  },
  {
    id: 764,
    term: "Sensory Memory",
    definition:
      "Holds raw sensory stimuli for < 500 ms. Subdivided into Iconic Memory (visual) and Echoic Memory (auditory).",
  },
  {
    id: 765,
    term: "Iconic Memory",
    definition:
      "Visual sensory store holding raw visual stimuli for < 500 ms.",
  },
  {
    id: 766,
    term: "Echoic Memory",
    definition:
      "Auditory sensory store holding raw auditory stimuli for < 500 ms.",
  },
  {
    id: 767,
    term: "Short-Term Memory (Working Memory)",
    definition:
      "Scratchpad storing 7 ± 2 items for roughly 20–30 seconds.",
  },
  {
    id: 768,
    term: "Short-Term Memory Enhancement Strategies",
    definition:
      "Cognitive strategies to improve working memory retention: Information Chunking (grouping into smaller units), Visualization, Simple Tunes/Rhymes, and Roman Rooms (loci method).",
  },
  {
    id: 769,
    term: "Information Chunking",
    definition:
      "Grouping individual pieces of information into smaller, meaningful units to enhance memory capacity and retention.",
  },
  {
    id: 770,
    term: "Roman Rooms (Loci Method)",
    definition:
      "A mnemonic enhancement strategy where items to remember are mentally placed and visualized within specific locations in an imagined room.",
  },
  {
    id: 771,
    term: "Long-Term Memory",
    definition:
      "Permanent storage split into explicit (declarative) and implicit (non-declarative) systems.",
  },
  {
    id: 772,
    term: "Explicit Memory (Declarative)",
    definition:
      "Consciously recalled knowledge, divided into Episodic Memory (personal experiences) and Semantic Memory (general facts and concepts).",
  },
  {
    id: 773,
    term: "Episodic Memory",
    definition:
      "Personal experiences tied to specific dates and times.",
  },
  {
    id: 774,
    term: "Semantic Memory",
    definition:
      "General facts, ideas, and concepts stored without autobiographical context.",
  },
  {
    id: 775,
    term: "Implicit Memory (Non-Declarative)",
    definition:
      "Unconscious memories that drive procedural skills, habits, and behaviors.",
  },

  // ==========================================
  // VII. HCI PRINCIPLES, INTERACTION STYLES, & USABILITY FACTORS
  // ==========================================
  {
    id: 776,
    term: "Command Line (CLI)",
    definition:
      "Key Strengths: High speed, exact execution for power users. Key Weaknesses: Steep learning curve, demands recall over recognition.",
  },
  {
    id: 777,
    term: "Command Line (CLI) Examples",
    definition:
      "Example Good Use: Linux Terminal, PowerShell. Example Bad Use: Beginner desktop apps, cryptic error messages.",
  },
  {
    id: 778,
    term: "Menu-Based Interaction",
    definition:
      "Key Strengths: Leverages recognition, low training required. Key Weaknesses: Screen clutter if overloaded or deeply nested.",
  },
  {
    id: 779,
    term: "Menu-Based Examples",
    definition:
      "Example Good Use: ATM screens, mobile navigation bars. Example Bad Use: Over-nested menus, ambiguous icons.",
  },
  {
    id: 780,
    term: "Form-Filling Interaction",
    definition:
      "Key Strengths: Directs multi-field data entry with step-by-step guidance. Key Weaknesses: User fatigue if forms are excessively long.",
  },
  {
    id: 781,
    term: "Form-Filling Examples",
    definition:
      "Example Good Use: E-commerce checkout forms. Example Bad Use: Unstructured, long forms with no progress bars.",
  },
  {
    id: 782,
    term: "Graphical User Interface (GUI)",
    definition:
      "Key Strengths: Visual manipulation via windows, icons, menus, and pointers (WIMP). Key Weaknesses: High visual clutter can trigger change blindness.",
  },
  {
    id: 783,
    term: "GUI Examples",
    definition:
      "Example Good Use: macOS, Windows desktops. Example Bad Use: Cluttered toolbars, unlabeled visual icons.",
  },
  {
    id: 784,
    term: "CLI Strengths & Weaknesses",
    definition:
      "Strengths: High speed and precision for experienced power users. Weaknesses: Demands recall instead of recognition, steep learning curve.",
  },
  {
    id: 785,
    term: "Menu-Based Strengths & Weaknesses",
    definition:
      "Strengths: Recognition over recall, requires minimal user training. Weaknesses: Clutter when deeply nested or overcrowded.",
  },
  {
    id: 786,
    term: "Form-Filling Strengths & Weaknesses",
    definition:
      "Strengths: Explicit step-by-step guidance for data entry. Weaknesses: Causes user fatigue if excessively long or unstructured.",
  },
  {
    id: 787,
    term: "GUI Strengths & Weaknesses",
    definition:
      "Strengths: Intuitive direct manipulation with visual feedback (WIMP). Weaknesses: Visual clutter can easily trigger change blindness.",
  },
];
