const initialPosts = [
  {
    id: 1,
    slug: "getting-started-with-ai-coding-assistants",
    title: "Getting Started with AI Coding Assistants",
    author: "Creative Tech Studio",
    date: "2026-09-02",
    tags: ["ai", "beginners", "tools"],
    excerpt:
      "A practical introduction to AI coding assistants and how to use them without losing your own understanding of the code.",
    content: `AI coding assistants can explain code, suggest fixes, and write first drafts of functions in seconds. For a new developer, the speed is exciting, but the real value comes from treating the assistant like a patient tutor instead of a vending machine for answers.
 
Start small. Ask the assistant to explain a function you already wrote, line by line. Compare its explanation to your own understanding and note where the two differ. Those gaps are exactly what you should study next.
 
When you do ask for new code, ask for one piece at a time. A single function or component is easy to read, test, and question. A whole app generated in one shot is hard to review, and bugs hide in the parts you skimmed.
 
Finally, keep a habit of typing code yourself after the assistant shows you an approach. Retyping forces you to read every line, and reading every line is how the pattern ends up in your memory instead of only in the chat history.`,
  },
  {
    id: 2,
    slug: "writing-better-prompts-for-code",
    title: "Writing Better Prompts for Code",
    author: "Creative Tech Studio",
    date: "2026-09-10",
    tags: ["ai", "prompting", "productivity"],
    excerpt:
      "Clear context, constraints, and examples turn vague AI answers into code you can actually use.",
    content: `A vague prompt like "make a login form" leaves the assistant guessing about your framework, styling, validation rules, and file structure. The result is usually generic code that needs heavy rework.
 
Better prompts include four things. First, the context: the language, framework, and version you are using, such as React 19 with Vite. Second, the goal: what the code should do from the user's point of view. Third, the constraints: libraries to avoid, naming conventions, or a rule like "no external state management." Fourth, an example: a small sample of existing code so the assistant can match your style.
 
Asking for an explanation alongside the code also helps. A request such as "write the component and explain why you chose useState over useReducer" gives you both the solution and the reasoning, so you can judge whether the choice fits your project.
 
If the first answer misses, refine the prompt instead of starting over. Point to the exact line that is wrong and describe what you expected. Specific feedback gets specific fixes.`,
  },
  {
    id: 3,
    slug: "reviewing-ai-generated-code",
    title: "How to Review AI-Generated Code",
    author: "Creative Tech Studio",
    date: "2026-09-18",
    tags: ["ai", "code-review", "best-practices"],
    excerpt:
      "AI-written code still needs a human review. A simple checklist keeps bugs and security issues out of your project.",
    content: `AI assistants write code that looks confident, and confident code is easy to trust too quickly. Every suggestion deserves the same review you would give a pull request from a teammate.
 
Begin by reading the code before running it. Make sure you can explain what each line does. If a line uses an API or method you have never seen, look it up in the official documentation, because assistants sometimes invent functions that do not exist or use options from an older version.
 
Next, check the edge cases. Empty arrays, missing props, network errors, and unexpected user input are common places where generated code falls short. Write a quick test or try the inputs by hand.
 
Security deserves its own pass. Watch for API keys placed directly in frontend code, user input inserted into HTML without sanitizing, and overly permissive settings copied from examples.
 
Last, check consistency with the rest of your project. Generated code may use a different naming style, a different folder layout, or a library you do not already depend on. Small adjustments now save confusion later.`,
  },
  {
    id: 4,
    slug: "debugging-with-an-ai-assistant",
    title: "Debugging with an AI Assistant",
    author: "Creative Tech Studio",
    date: "2026-09-27",
    tags: ["ai", "debugging", "javascript"],
    excerpt:
      "Give the assistant the error, the code, and what you already tried, and debugging sessions get much shorter.",
    content: `Pasting an error message alone into a chat rarely solves a bug. The assistant needs the same information a human helper would need.
 
Share the full error text, including the stack trace. Share the smallest piece of code that reproduces the problem, not the entire file. Describe what you expected to happen and what actually happened. List anything you already tried, so the assistant does not suggest the same fix twice.
 
Ask for a diagnosis before a fix. A question like "what are the likely causes of this error?" produces a list of possibilities you can check one at a time. Working through that list teaches you how to debug, which matters more than fixing any single bug.
 
Keep the browser developer tools open while you work. Console logs, the network tab, and React DevTools give you facts to report back. An assistant reasoning from real data is far more accurate than one guessing from a description.
 
When the bug is fixed, ask the assistant to explain why the fix works. Write that explanation in your own words in your notes, and the next similar bug will take minutes instead of hours.`,
  },
  {
    id: 5,
    slug: "learning-to-code-while-using-ai",
    title: "Learning to Code While Using AI",
    author: "Creative Tech Studio",
    date: "2026-10-08",
    tags: ["ai", "learning", "beginners"],
    excerpt:
      "AI tools can speed up learning or quietly replace it. A few habits keep you on the learning side.",
    content: `AI assistants make it possible to build working projects before you fully understand the code behind them. Shipping is satisfying, but understanding is what carries you into the next project and the next job interview.
 
Try the problem yourself first. Spend a set amount of time, such as twenty minutes, working on a task before asking for help. Even a failed attempt gives you better questions to ask.
 
Ask for hints instead of answers. A prompt like "give me a hint about how to filter this array, but do not write the code" keeps you doing the thinking.
 
Keep your own reference notes. When a concept finally clicks, write it down in your own words with a small example. Searching your own notes later is faster than asking again, and the act of writing locks the idea in.
 
Rebuild without help. After finishing a feature with AI assistance, try building a similar feature from scratch with the assistant closed. Whatever you get stuck on is your next study topic.`,
  },
  {
    id: 6,
    slug: "ai-tools-in-a-react-workflow",
    title: "Using AI Tools in a React Workflow",
    author: "Creative Tech Studio",
    date: "2026-10-21",
    tags: ["ai", "react", "workflow"],
    excerpt:
      "Where AI assistants help most in a React project, from planning components to writing tests.",
    content: `AI assistants fit into almost every stage of a React project, but some stages benefit more than others.
 
Planning is a strong fit. Describe the app and ask for a component tree, a list of routes, and the state each component needs. Reviewing a plan is much cheaper than rewriting components later.
 
Boilerplate is another good use. Form components, data arrays like this blog post list, and basic routing setup are repetitive, and an assistant can draft them quickly while you focus on the parts unique to your app.
 
Styling help is useful when you know what you want but not the exact CSS. Describing a layout in plain language and asking for Flexbox or Grid rules can save a lot of trial and error.
 
Testing is often overlooked. Ask the assistant to write tests for a component you already finished, then read the tests to see which behaviors it thought were important. Missing cases become obvious quickly.
 
Through every stage, keep the final decisions yours. The assistant can suggest structure, but you know the goals of the project and the people who will use it.`,
  },
];
 
export default initialPosts;