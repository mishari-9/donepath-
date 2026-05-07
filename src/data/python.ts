import { Edge } from 'reactflow';
import { SkillNode } from '@/store/useStore';

export const pythonNodes: SkillNode[] = [
  // 1. Basics
  { id: 'py-intro', type: 'skillNode', position: { x: 650, y: 50 }, data: { label: 'Learn the Basics', status: 'unlocked', timeEstimate: '5 hr', description: 'Python is a high-level, interpreted programming language.', importance: 'The starting point for all Python development.', prerequisites: [], resources: [{ title: 'Python for Beginners (Programming with Mosh)', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', type: 'video' }] } },
  { id: 'py-syntax', type: 'skillNode', position: { x: 100, y: 0 }, data: { label: 'Basic Syntax', status: 'locked', timeEstimate: '1 hr', description: 'Indentation, comments, printing.', importance: 'Python relies on indentation rather than brackets.', prerequisites: ['py-intro'], isSubNode: true, resources: [{ title: 'Python Syntax', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', type: 'video' }] } },
  { id: 'py-vars', type: 'skillNode', position: { x: -200, y: 50 }, data: { label: 'Variables and Data Types', status: 'locked', timeEstimate: '1 hr', description: 'Int, float, string, boolean.', importance: 'Storing data in memory.', prerequisites: ['py-intro'], isSubNode: true, resources: [{ title: 'Python Variables', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', type: 'video' }] } },
  { id: 'py-ops', type: 'skillNode', position: { x: -200, y: 100 }, data: { label: 'Operators', status: 'locked', timeEstimate: '1 hr', description: '+, -, *, /, //, %', importance: 'Manipulating data.', prerequisites: ['py-intro'], isSubNode: true, resources: [{ title: 'Python Operators', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', type: 'video' }] } },
  { id: 'py-cond', type: 'skillNode', position: { x: -200, y: 150 }, data: { label: 'Conditionals', status: 'locked', timeEstimate: '1 hr', description: 'if, elif, else', importance: 'Logic branching.', prerequisites: ['py-intro'], isSubNode: true, resources: [{ title: 'Python Conditionals', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', type: 'video' }] } },
  { id: 'py-loops', type: 'skillNode', position: { x: -200, y: 200 }, data: { label: 'Loops', status: 'locked', timeEstimate: '1 hr', description: 'for loops, while loops.', importance: 'Iterating over collections.', prerequisites: ['py-intro'], isSubNode: true, resources: [{ title: 'Python Loops', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', type: 'video' }] } },

  // Right side of basics
  { id: 'py-cast', type: 'skillNode', position: { x: 950, y: 0 }, data: { label: 'Type Casting', status: 'locked', timeEstimate: '1 hr', description: 'Converting int to string, string to float.', importance: 'Data sanitization.', prerequisites: ['py-intro'], isSubNode: true, resources: [{ title: 'Type Casting', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', type: 'video' }] } },
  { id: 'py-except', type: 'skillNode', position: { x: 950, y: 50 }, data: { label: 'Exceptions', status: 'locked', timeEstimate: '1 hr', description: 'try, except, finally.', importance: 'Graceful error handling.', prerequisites: ['py-intro'], isSubNode: true, resources: [{ title: 'Python Exceptions', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', type: 'video' }] } },
  { id: 'py-funcs', type: 'skillNode', position: { x: 950, y: 100 }, data: { label: 'Functions, Builtin Functions', status: 'locked', timeEstimate: '2 hr', description: 'def my_func(), print(), len().', importance: 'Code reusability.', prerequisites: ['py-intro'], isSubNode: true, resources: [{ title: 'Python Functions', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', type: 'video' }] } },
  { id: 'py-lists', type: 'skillNode', position: { x: 950, y: 150 }, data: { label: 'Lists', status: 'locked', timeEstimate: '1 hr', description: 'Mutable sequences.', importance: 'Most common data structure.', prerequisites: ['py-intro'], isSubNode: true, resources: [{ title: 'Python Lists', url: 'https://www.youtube.com/watch?v=W8KRlNvIjl0', type: 'video' }] } },
  { id: 'py-dicts', type: 'skillNode', position: { x: 950, y: 200 }, data: { label: 'Dictionaries', status: 'locked', timeEstimate: '1 hr', description: 'Key-value pairs.', importance: 'Fast lookups.', prerequisites: ['py-intro'], isSubNode: true, resources: [{ title: 'Python Dictionaries', url: 'https://www.youtube.com/watch?v=daefaLgNkw0', type: 'video' }] } },

  // 2. Data Structures & Algorithms
  { id: 'py-dsa', type: 'skillNode', position: { x: 650, y: 350 }, data: { label: 'Data Structures & Algorithms', status: 'locked', timeEstimate: '15 hr', description: 'Arrays, Linked Lists, Trees, Sorting.', importance: 'Core computer science concepts.', prerequisites: ['py-intro'], resources: [{ title: 'Data Structures in Python', url: 'https://www.youtube.com/watch?v=pkYVOmU3MgA', type: 'video' }] } },
  { id: 'py-arr', type: 'skillNode', position: { x: 400, y: 430 }, data: { label: 'Arrays and Linked Lists', status: 'locked', timeEstimate: '2 hr', description: 'Contiguous vs non-contiguous memory.', importance: 'Memory management fundamentals.', prerequisites: ['py-dsa'], isSubNode: true, resources: [{ title: 'Linked Lists', url: 'https://www.youtube.com/watch?v=JlMyYuY1aXU', type: 'video' }] } },
  { id: 'py-hash', type: 'skillNode', position: { x: 650, y: 480 }, data: { label: 'HashMaps', status: 'locked', timeEstimate: '2 hr', description: 'Dictionaries under the hood.', importance: 'O(1) lookups.', prerequisites: ['py-dsa'], isSubNode: true, resources: [{ title: 'HashMaps in Python', url: 'https://www.youtube.com/watch?v=ea8BRGxGmlA', type: 'video' }] } },
  { id: 'py-trees', type: 'skillNode', position: { x: 650, y: 530 }, data: { label: 'Binary Search Tree', status: 'locked', timeEstimate: '3 hr', description: 'Hierarchical data.', importance: 'Fast searching and sorting.', prerequisites: ['py-dsa'], isSubNode: true, resources: [{ title: 'BST in Python', url: 'https://www.youtube.com/watch?v=f5dU3Rte8A', type: 'video' }] } },

  // 3. Object Oriented Programming
  { id: 'py-oop', type: 'skillNode', position: { x: 650, y: 700 }, data: { label: 'Object Oriented Programming', status: 'locked', timeEstimate: '8 hr', description: 'Classes, Inheritance, Polymorphism.', importance: 'Writing scalable, modular code.', prerequisites: ['py-dsa'], resources: [{ title: 'Python OOP', url: 'https://www.youtube.com/watch?v=ZDa-Z5JzLYM', type: 'video' }] } },
  { id: 'py-classes', type: 'skillNode', position: { x: 400, y: 780 }, data: { label: 'Classes', status: 'locked', timeEstimate: '2 hr', description: 'Blueprints for objects.', importance: 'State and behavior encapsulation.', prerequisites: ['py-oop'], isSubNode: true, resources: [{ title: 'Classes and Instances', url: 'https://www.youtube.com/watch?v=ZDa-Z5JzLYM', type: 'video' }] } },
  { id: 'py-inherit', type: 'skillNode', position: { x: 650, y: 830 }, data: { label: 'Inheritance', status: 'locked', timeEstimate: '2 hr', description: 'Reusing code from parent classes.', importance: 'DRY principle.', prerequisites: ['py-oop'], isSubNode: true, resources: [{ title: 'Inheritance', url: 'https://www.youtube.com/watch?v=RSl87lqOXRo', type: 'video' }] } },
  { id: 'py-encap', type: 'skillNode', position: { x: 650, y: 880 }, data: { label: 'Encapsulation', status: 'locked', timeEstimate: '2 hr', description: 'Hiding internal state (_private).', importance: 'Preventing external interference.', prerequisites: ['py-oop'], isSubNode: true, resources: [{ title: 'Encapsulation', url: 'https://www.youtube.com/watch?v=RSl87lqOXRo', type: 'video' }] } },

  // 4. Package Managers
  { id: 'py-pkg', type: 'skillNode', position: { x: -200, y: 450 }, data: { label: 'Package Managers', status: 'locked', timeEstimate: '2 hr', description: 'pip, poetry, conda.', importance: 'Managing external dependencies.', prerequisites: ['py-intro'], resources: [{ title: 'Pip Tutorial', url: 'https://www.youtube.com/watch?v=U2ZN104hIcc', type: 'video' }] } },
  { id: 'py-pip', type: 'skillNode', position: { x: 100, y: 350 }, data: { label: 'Pip / PyPI', status: 'locked', timeEstimate: '1 hr', description: 'Python Package Index.', importance: 'Downloading 3rd party code.', prerequisites: ['py-pkg'], isSubNode: true, resources: [{ title: 'Using Pip', url: 'https://www.youtube.com/watch?v=U2ZN104hIcc', type: 'video' }] } },
  { id: 'py-venv', type: 'skillNode', position: { x: -200, y: 400 }, data: { label: 'Virtual Environments', status: 'locked', timeEstimate: '1 hr', description: 'venv, virtualenv.', importance: 'Isolating project dependencies.', prerequisites: ['py-pkg'], isSubNode: true, resources: [{ title: 'Python VENV', url: 'https://www.youtube.com/watch?v=N5vscPTWKOk', type: 'video' }] } },
];

export const pythonEdges: Edge[] = [
  // Intro
  { id: 'e-intro-syntax', source: 'py-intro', target: 'py-syntax', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-intro-vars', source: 'py-intro', target: 'py-vars', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-intro-ops', source: 'py-intro', target: 'py-ops', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-intro-cond', source: 'py-intro', target: 'py-cond', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-intro-loops', source: 'py-intro', target: 'py-loops', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },

  { id: 'e-intro-cast', source: 'py-intro', target: 'py-cast', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-intro-except', source: 'py-intro', target: 'py-except', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-intro-funcs', source: 'py-intro', target: 'py-funcs', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-intro-lists', source: 'py-intro', target: 'py-lists', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-intro-dicts', source: 'py-intro', target: 'py-dicts', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },

  // DSA
  { id: 'e-intro-dsa', source: 'py-intro', target: 'py-dsa', type: 'smoothstep', style: { stroke: '#f59e0b', strokeWidth: 2 } },
  { id: 'e-dsa-arr', source: 'py-dsa', target: 'py-arr', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-dsa-hash', source: 'py-dsa', target: 'py-hash', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-dsa-trees', source: 'py-dsa', target: 'py-trees', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },

  // OOP
  { id: 'e-dsa-oop', source: 'py-dsa', target: 'py-oop', type: 'smoothstep', style: { stroke: '#f59e0b', strokeWidth: 2 } },
  { id: 'e-oop-classes', source: 'py-oop', target: 'py-classes', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-oop-inherit', source: 'py-oop', target: 'py-inherit', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-oop-encap', source: 'py-oop', target: 'py-encap', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },

  // Packages
  { id: 'e-intro-pkg', source: 'py-intro', target: 'py-pkg', type: 'smoothstep', style: { stroke: '#f59e0b', strokeWidth: 2 } },
  { id: 'e-pkg-pip', source: 'py-pkg', target: 'py-pip', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-pkg-venv', source: 'py-pkg', target: 'py-venv', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },
];
