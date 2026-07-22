import type { Question } from '../types/quiz';

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Which hook is used to handle side effects in functional React components?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "What is the primary purpose of TypeScript?",
    options: [
      "To run JavaScript on the server side",
      "To add static typing to JavaScript",
      "To replace HTML in React apps",
      "To automate CSS styling"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "In React, what property is used to uniquely identify elements in a list?",
    options: ["id", "key", "ref", "index"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Which HTTP method is idempotent and used to retrieve data from a server?",
    options: ["POST", "GET", "PATCH", "DELETE"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Which tool is commonly used for module bundling in modern web applications?",
    options: ["Vite", "Docker", "Redux", "PostgreSQL"],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "What does the Virtual DOM in React help optimize?",
    options: [
      "Database query speed",
      "DOM manipulation and rendering performance",
      "Network request payload sizes",
      "Server-side execution time"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "In JavaScript, which operator compares both value and type equality?",
    options: ["==", "=", "===", "=="],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "What keyword is used in TypeScript to define structural types for objects?",
    options: ["interface", "implement", "define", "struct"],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "Which React hook returns a mutable ref object whose .current property persists across renders?",
    options: ["useMemo", "useRef", "useCallback", "useState"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "What is the default CSS display value for a <div> element?",
    options: ["inline", "inline-block", "block", "flex"],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "Which CSS Flexbox property changes the direction of flex items to vertical?",
    options: ["flex-wrap", "align-items", "justify-content", "flex-direction: column"],
    correctAnswer: 3
  },
  {
    id: 12,
    question: "What are the three possible states of a JavaScript Promise?",
    options: [
      "Pending, Fulfilled, Rejected",
      "Start, Running, End",
      "Init, Processing, Done",
      "Active, Paused, Terminated"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "Which built-in JavaScript method parses a JSON string into an object?",
    options: ["JSON.stringify()", "JSON.toObject()", "JSON.parse()", "JSON.decode()"],
    correctAnswer: 2
  },
  {
    id: 14,
    question: "Which HTML5 element is used to encapsulate content that is self-contained?",
    options: ["<section>", "<article>", "<aside>", "<div>"],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "In Redux, what function is responsible for calculating the next state given current state and action?",
    options: ["Middleware", "Reducer", "Dispatch", "Selector"],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "What key feature distinguishes GraphQL from traditional REST APIs?",
    options: ["Clients can request exact data fields needed", "GraphQL requires no server", "REST uses JSON exclusively", "GraphQL only supports GET"],
    correctAnswer: 0
  },
  {
    id: 17,
    question: "What does the 'async' keyword before a function definition signify?",
    options: [
      "The function runs synchronously",
      "The function automatically returns a Promise",
      "The function cannot throw errors",
      "The function operates on a web worker"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "What is the primary difference between Array.prototype.map() and Array.prototype.forEach()?",
    options: [
      "map returns a new array, forEach returns undefined",
      "forEach returns a new array, map returns undefined",
      "map cannot iterate over objects",
      "forEach is asynchronous"
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: "Which CSS Grid property specifies the size of grid columns?",
    options: ["grid-template-columns", "grid-column-gap", "grid-auto-flow", "flex-basis"],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "Which command in Git creates and switches to a new branch simultaneously?",
    options: ["git branch -new", "git checkout -b", "git merge -b", "git commit -b"],
    correctAnswer: 1
  },
  {
    id: 21,
    question: "In Node.js package.json, which field defines production dependencies?",
    options: ["devDependencies", "dependencies", "peerDependencies", "scripts"],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "Which React Higher-Order Component prevents unnecessary re-renders of a functional component when props haven't changed?",
    options: ["React.useMemo", "React.memo", "React.PureComponent", "React.Fragment"],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "What concept describes attaching a single event listener to a parent element to manage child element events?",
    options: ["Event Bubbling", "Event Delegation", "Event Capturing", "Event Throttling"],
    correctAnswer: 1
  },
  {
    id: 24,
    question: "What persists data in the browser across browser sessions and tab closes?",
    options: ["sessionStorage", "Cookies with no expiry", "localStorage", "Memory Cache"],
    correctAnswer: 2
  },
  {
    id: 25,
    question: "In TypeScript, what symbol denotes a generic type parameter by convention?",
    options: ["<T>", "($)", "{G}", "[Type]"],
    correctAnswer: 0
  },
  {
    id: 26,
    question: "Which CSS framework utilizes utility classes to style components directly in HTML/JSX?",
    options: ["Bootstrap", "Tailwind CSS", "Bulma", "Foundation"],
    correctAnswer: 1
  },
  {
    id: 27,
    question: "Which DOM method returns the first element matching a specified CSS selector?",
    options: ["document.getElementById", "document.querySelectorAll", "document.querySelector", "document.getElementsByClassName"],
    correctAnswer: 2
  },
  {
    id: 28,
    question: "What is a closure in JavaScript?",
    options: [
      "A function combined with references to its surrounding lexical environment",
      "A method to terminate infinite loops",
      "An object property that cannot be mutated",
      "A technique for minifying JavaScript bundle size"
    ],
    correctAnswer: 0
  },
  {
    id: 29,
    question: "Which HTTP status code signifies '404 Not Found'?",
    options: ["200", "401", "404", "500"],
    correctAnswer: 2
  },
  {
    id: 30,
    question: "What property controls vertical stacking order of positioned CSS elements?",
    options: ["order", "z-index", "elevation", "flex-order"],
    correctAnswer: 1
  },
  {
    id: 31,
    question: "What operator is used in ES6 for spreading elements of an array or properties of an object?",
    options: ["...", "::", "=>", "??."],
    correctAnswer: 0
  },
  {
    id: 32,
    question: "In React, what hook allows functional components to consume values from a React Context?",
    options: ["useReducer", "useContext", "useProvider", "useConsumer"],
    correctAnswer: 1
  },
  {
    id: 33,
    question: "What TypeScript construct allows defining a set of named constants?",
    options: ["interface", "enum", "tuple", "typealias"],
    correctAnswer: 1
  },
  {
    id: 34,
    question: "Which HTTP header is involved in Cross-Origin Resource Sharing (CORS)?",
    options: ["Access-Control-Allow-Origin", "Content-Type", "Authorization", "X-Forwarded-For"],
    correctAnswer: 0
  },
  {
    id: 35,
    question: "What set of attributes makes web content accessible to individuals with disabilities?",
    options: ["DOM", "ARIA", "REST", "JSON-LD"],
    correctAnswer: 1
  },
  {
    id: 36,
    question: "Which JavaScript array method executes a reducer function to result in a single output value?",
    options: ["filter()", "reduce()", "map()", "some()"],
    correctAnswer: 1
  },
  {
    id: 37,
    question: "What containerization platform isolates applications into lightweight containers?",
    options: ["Kubernetes", "Docker", "Vagrant", "Jenkins"],
    correctAnswer: 1
  },
  {
    id: 38,
    question: "In React, how are events wrapped to provide cross-browser consistency?",
    options: ["NativeEvents", "SyntheticEvents", "CustomEvents", "VirtualEvents"],
    correctAnswer: 1
  },
  {
    id: 39,
    question: "What CSS box-sizing value includes padding and border in an element's total width and height?",
    options: ["content-box", "border-box", "padding-box", "margin-box"],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "What is the evaluated output of 'typeof null' in JavaScript?",
    options: ["'null'", "'undefined'", "'object'", "'boolean'"],
    correctAnswer: 2
  },
  {
    id: 41,
    question: "Which type of database organizes data into tables with pre-defined schemas?",
    options: ["NoSQL", "Relational (SQL)", "Graph DB", "Key-Value store"],
    correctAnswer: 1
  },
  {
    id: 42,
    question: "What problem occurs when passing props down through multiple layers of nested components?",
    options: ["Prop Drilling", "Callback Hell", "Memory Leak", "Infinite Render"],
    correctAnswer: 0
  },
  {
    id: 43,
    question: "What is the output of 'NaN === NaN' in JavaScript?",
    options: ["true", "false", "undefined", "TypeError"],
    correctAnswer: 1
  },
  {
    id: 44,
    question: "In Semantic Versioning (MAJOR.MINOR.PATCH), when is MINOR incremented?",
    options: ["Incompatible API changes", "Backwards-compatible functionality added", "Backwards-compatible bug fixes", "Initial beta releases"],
    correctAnswer: 1
  },
  {
    id: 45,
    question: "Which HTML tag attribute provides short hint text inside an input before user entry?",
    options: ["value", "placeholder", "label", "tooltip"],
    correctAnswer: 1
  },
  {
    id: 46,
    question: "Which TypeScript utility type constructs a type by picking set of properties K from Type?",
    options: ["Omit<Type, Keys>", "Pick<Type, Keys>", "Partial<Type>", "Record<Keys, Type>"],
    correctAnswer: 1
  },
  {
    id: 47,
    question: "In CSS units, what is 'rem' relative to?",
    options: ["Parent element font-size", "Root element font-size", "Viewport width", "Line height"],
    correctAnswer: 1
  },
  {
    id: 48,
    question: "What technology enables progressive web apps (PWAs) to work offline?",
    options: ["Service Workers", "WebSockets", "Server-Sent Events", "Canvas API"],
    correctAnswer: 0
  },
  {
    id: 49,
    question: "What feature does React StrictMode enable in development mode?",
    options: ["Double-invoking component renders to catch side effects", "Automatic CSS optimization", "Production speed boosting", "Auto-correcting syntax errors"],
    correctAnswer: 0
  },
  {
    id: 50,
    question: "Which Primitive JS type represents unique and immutable identifiers?",
    options: ["BigInt", "Symbol", "String", "Undefined"],
    correctAnswer: 1
  }
];