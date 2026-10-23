export type LearningItem = {
  slug: string;
  title: string;
  category: string;
  description: string;
  level: string;
  readTime: string;
  content: string[];
};

export const courses: LearningItem[] = [
  {
    slug: "artificial-intelligence",
    title: "Introduction to Artificial Intelligence",
    category: "AI & Machine Learning",
    description: "Understand AI fundamentals, machine learning, neural networks and large language models.",
    level: "Beginner",
    readTime: "12 modules",
    content: [
      "What is artificial intelligence?",
      "AI is a field of computer science focused on systems that perform tasks associated with human intelligence. Common examples include recognising patterns, processing language and making predictions.",
      "Module 1 — AI foundations: learn about intelligent systems, datasets, algorithms and the difference between AI, machine learning and deep learning.",
      "Module 2 — Machine learning: explore training data, features, labels, evaluation and overfitting.",
      "Module 3 — Neural networks: understand layers, weights, activation functions and model training at a conceptual level.",
      "Module 4 — Generative AI: discover tokens, language models, prompts, limitations and responsible use.",
      "Practice: describe three AI applications, identify their inputs and outputs, and consider one risk for each."
    ]
  },
  {
    slug: "financial-literacy",
    title: "Financial Literacy Essentials",
    category: "Finance",
    description: "Learn budgeting, saving, interest, inflation and responsible financial decision-making.",
    level: "Beginner",
    readTime: "10 modules",
    content: [
      "Build your financial foundations.",
      "A budget compares money coming in with money going out. Tracking spending helps people make informed choices and plan for future needs.",
      "Module 1 — Income and expenses: distinguish fixed costs, variable costs, needs and wants.",
      "Module 2 — Saving: understand emergency funds, financial goals and the effect of consistency.",
      "Module 3 — Interest: compare simple and compound interest with worked examples.",
      "Module 4 — Inflation and risk: learn why purchasing power changes and why returns are never guaranteed.",
      "Practice: create a sample monthly budget and explain how you would adjust it after an unexpected expense."
    ]
  },
  {
    slug: "mathematics-problem-solving",
    title: "Mathematics for Problem Solving",
    category: "Mathematics",
    description: "Strengthen logical reasoning, patterns, algebra and practical mathematical thinking.",
    level: "Beginner",
    readTime: "14 modules",
    content: [
      "Learn to approach problems systematically.",
      "Mathematical problem solving begins by identifying what is known, what must be found and which assumptions are valid.",
      "Module 1 — Logic: use statements, examples and counterexamples to evaluate claims.",
      "Module 2 — Algebra: translate word problems into expressions and equations.",
      "Module 3 — Patterns: investigate sequences, functions and relationships.",
      "Module 4 — Probability: distinguish possible outcomes from likely outcomes.",
      "Practice: solve a multi-step word problem and explain why each step is valid."
    ]
  },
  {
    slug: "web-development-foundations",
    title: "Web Development Foundations",
    category: "Programming & Technology",
    description: "Explore HTML, CSS, JavaScript, React and the fundamentals of building websites.",
    level: "Beginner",
    readTime: "12 modules",
    content: [
      "Understand how websites work.",
      "Web development combines document structure, visual styling and programming to create interactive experiences.",
      "Module 1 — HTML: organise content with meaningful semantic elements.",
      "Module 2 — CSS: learn layout, responsive design, spacing and typography.",
      "Module 3 — JavaScript: work with variables, functions, arrays, objects and events.",
      "Module 4 — React: explore components, properties, state and reusable interfaces.",
      "Practice: build a responsive personal profile page and test it on mobile and desktop."
    ]
  },
  {
    slug: "blockchain-web3-basics",
    title: "Blockchain and Web3 Fundamentals",
    category: "Blockchain & Web3",
    description: "Learn distributed ledgers, consensus, smart contracts and decentralised applications.",
    level: "Intermediate",
    readTime: "8 modules",
    content: [
      "Explore the foundations of blockchain technology.",
      "A blockchain is a type of distributed ledger in which records are linked and validated according to a protocol.",
      "Module 1 — Distributed systems: learn about nodes, replication and trust.",
      "Module 2 — Consensus: understand at a high level how networks agree on valid records.",
      "Module 3 — Smart contracts: explore programs that execute on supported blockchain networks.",
      "Module 4 — Security: learn about key management, irreversible transactions and common risks.",
      "Practice: diagram a simple transaction and identify the parties, data and security assumptions."
    ]
  }
];

export const articles: LearningItem[] = [
  {
    slug: "how-language-models-work",
    title: "How Large Language Models Actually Work",
    category: "Artificial Intelligence",
    description: "A beginner-friendly introduction to tokens, training, predictions and language models.",
    level: "Beginner",
    readTime: "8 min read",
    content: [
      "A language model learns statistical patterns from training data and uses those patterns to predict likely next tokens.",
      "Text is divided into tokens. A model processes token representations in context and produces a distribution over possible next tokens.",
      "During training, model parameters are adjusted to improve predictions on training examples. Training does not guarantee factual accuracy.",
      "Modern transformer architectures use attention mechanisms to represent relationships between tokens in context.",
      "Language models can assist with writing, coding and summarisation, but they may produce incorrect or fabricated statements. Verify important claims independently.",
      "Reflection: why can a fluent answer still be wrong? Consider the difference between generating plausible text and verifying a fact."
    ]
  },
  {
    slug: "understanding-compound-growth",
    title: "Understanding Compound Growth",
    category: "Finance",
    description: "Explore how repeated growth can change a value over time using simple examples.",
    level: "Beginner",
    readTime: "6 min read",
    content: [
      "Compound growth means that growth in one period can contribute to growth in later periods.",
      "For example, a value of 1,000 growing by 10% becomes 1,100 after one period. A further 10% increase makes it 1,210.",
      "The general model is final value = starting value × (1 + rate)^number of periods, assuming a constant rate and consistent compounding.",
      "Real-world returns vary. Fees, taxes, inflation and losses can significantly change outcomes, and no investment return is guaranteed.",
      "Practice: calculate the value after three periods for a starting amount of 500 and a hypothetical constant growth rate of 5%."
    ]
  },
  {
    slug: "building-your-first-web-project",
    title: "From Beginner to Building Real Projects",
    category: "Programming",
    description: "A practical method for turning programming knowledge into small, finished projects.",
    level: "Beginner",
    readTime: "10 min read",
    content: [
      "Projects help connect isolated programming concepts to real problems.",
      "Start by writing a one-sentence problem statement and listing the smallest features needed to solve it.",
      "Build one complete path before adding optional features. Keep components small and give each component a clear responsibility.",
      "Use Git to record changes, test important interactions and write a README explaining setup, features and limitations.",
      "Choose a manageable project such as a task tracker, quiz application or searchable resource library. Finish, test and improve it before expanding.",
      "Reflection: which single feature would make your next project genuinely useful to another person?"
    ]
  }
];

export const blogs: LearningItem[] = [
  {
    slug: "learning-in-the-age-of-ai",
    title: "Learning in the Age of AI",
    category: "Ideas & Technology",
    description: "How to use AI tools as learning partners without giving up independent thinking.",
    level: "Perspective",
    readTime: "7 min read",
    content: [
      "AI tools can make explanations and examples easier to access, but access to an answer is not the same as understanding.",
      "Start with your own attempt. Then ask a tool to explain a difficult concept in different ways and compare the explanations against trusted material.",
      "Practise retrieval: close your notes and explain the idea in your own words. Try a new problem without copying a worked solution.",
      "Check claims, especially when they involve health, money, law or current events. Models can make mistakes and may not have current information.",
      "The most useful learning workflow combines curiosity, deliberate practice, feedback and independent judgement."
    ]
  },
  {
    slug: "why-small-projects-matter",
    title: "Why Small Projects Matter",
    category: "Learning",
    description: "Small finished projects can teach planning, debugging and communication.",
    level: "Perspective",
    readTime: "5 min read",
    content: [
      "A small project creates a concrete goal and gives new concepts a reason to exist.",
      "Keeping scope small reduces the number of unknowns and makes it easier to finish a first version.",
      "After the first version works, improve accessibility, validation, error handling and documentation.",
      "A clear demonstration and honest description of limitations help other people understand what you built.",
      "Choose a problem you can explain clearly, make a simple version, and improve it using feedback."
    ]
  }
];

export const stories: LearningItem[] = [
  {
    slug: "the-power-of-curiosity",
    title: "The Power of Curiosity",
    category: "Learning Story",
    description: "A short reflection on asking better questions and exploring unfamiliar ideas.",
    level: "All levels",
    readTime: "4 min read",
    content: [
      "Every meaningful discovery begins with a question. Curiosity turns an unfamiliar subject from a barrier into an invitation.",
      "A learner who does not understand a concept can begin by asking what it means, why it matters and which simple example demonstrates it.",
      "Progress is rarely a straight line. Experiments fail, explanations need revisiting and early assumptions sometimes turn out to be wrong.",
      "The habit of asking questions, testing ideas and reflecting on results creates opportunities for lifelong learning."
    ]
  }
];

export const projects: LearningItem[] = [
  {
    slug: "interactive-quiz-lab",
    title: "Interactive Quiz Lab",
    category: "Education",
    description: "A learning project concept for practising multiple-choice questions and reviewing answers.",
    level: "Beginner",
    readTime: "Practice project",
    content: [
      "Goal: create an accessible quiz with questions, answer choices, feedback and a final score.",
      "Suggested stack: Next.js, TypeScript and a reusable question component.",
      "Milestones: define a question data format, build the quiz interface, calculate the score and add review mode.",
      "Extension: persist results in a database and add topic-based question sets."
    ]
  },
  {
    slug: "personal-knowledge-library",
    title: "Personal Knowledge Library",
    category: "Productivity",
    description: "A searchable collection of notes, articles and learning resources.",
    level: "Intermediate",
    readTime: "Practice project",
    content: [
      "Goal: organise learning resources by title, category, tags and reading status.",
      "Start with a searchable list and add filters for topic and resource type.",
      "Use a database when multiple sessions or users need persistent storage.",
      "Extension: add authentication, private bookmarks and export options."
    ]
  }
];

export const mockTests = [
  {
    slug: "ai-fundamentals",
    title: "AI Fundamentals Quiz",
    description: "Test your understanding of artificial intelligence and machine learning.",
    questions: [
      { question: "What is a machine learning model trained to do?", options: ["Learn patterns from data", "Replace all databases", "Guarantee every prediction", "Only store images"], answer: 0, explanation: "Models learn patterns from examples to perform a specified task." },
      { question: "What is a token in a language model?", options: ["A guaranteed fact", "A unit of text processing", "A database password", "A type of monitor"], answer: 1, explanation: "Tokens are units of text, such as word fragments, processed by a language model." },
      { question: "Why should AI-generated claims be checked?", options: ["AI never produces text", "All models are offline", "Models can generate inaccurate answers", "Checking is impossible"], answer: 2, explanation: "Language models can produce plausible but incorrect information." },
      { question: "What does training data help a model do?", options: ["Learn patterns", "Guarantee future truth", "Eliminate every bias", "Replace evaluation"], answer: 0, explanation: "Training data provides examples used to adjust a model's parameters." },
      { question: "What is a responsible use of AI?", options: ["Trust every output", "Share private data publicly", "Ignore all limitations", "Verify important results"], answer: 3, explanation: "Reviewing important outputs helps identify errors and limitations." }
    ]
  },
  {
    slug: "web-basics",
    title: "Web Development Basics",
    description: "Check your understanding of HTML, CSS, JavaScript and web development.",
    questions: [
      { question: "What is HTML mainly used for?", options: ["Structuring page content", "Managing a server's power", "Creating database backups", "Encrypting every network"], answer: 0, explanation: "HTML defines the structure and meaning of web content." },
      { question: "What does CSS control?", options: ["Database credentials", "Presentation and layout", "Git history", "Server hardware"], answer: 1, explanation: "CSS controls styling, layout and visual presentation." },
      { question: "Which language adds browser-side interactivity?", options: ["SQL only", "Markdown only", "JavaScript", "CSV"], answer: 2, explanation: "JavaScript can respond to events and update web interfaces." },
      { question: "What is a React component?", options: ["A reusable UI building block", "A domain registrar", "A database table only", "A CSS colour"], answer: 0, explanation: "Components let developers organise interfaces into reusable units." },
      { question: "Why test a website on mobile?", options: ["Mobile screens do not exist", "To remove all HTML", "To guarantee no bugs", "To check responsive behaviour"], answer: 3, explanation: "Responsive testing checks usability across different screen sizes." }
    ]
  }
];

export function allContent() {
  return [
    ...courses.map(x => ({...x, type: "Course"})),
    ...articles.map(x => ({...x, type: "Article"})),
    ...blogs.map(x => ({...x, type: "Blog"})),
    ...stories.map(x => ({...x, type: "Story"})),
    ...projects.map(x => ({...x, type: "Project"}))
  ];
}

export function getCollection(type: string): LearningItem[] {
  const map: Record<string, LearningItem[]> = {
    courses, blogs, articles, stories, projects
  };
  return map[type] ?? [];
}
