import { Edge } from 'reactflow';
import { SkillNode } from '@/store/useStore';

export const cppNodes: SkillNode[] = [
  // 1. Introduction
  { id: 'cpp-intro', type: 'skillNode', position: { x: 650, y: 50 }, data: { label: 'Introduction to Language', status: 'unlocked', timeEstimate: '1 hr', description: 'C++ is a high-level, general-purpose language. It is an extension of C.', importance: 'Sets the foundation.', prerequisites: [], resources: [{ title: 'Intro to C++ (The Cherno)', url: 'https://www.youtube.com/watch?v=18c3MTX0PK0', type: 'video' }] } },
  { id: 'cpp-what', type: 'skillNode', position: { x: 750, y: 0 }, data: { label: 'What is C++?', status: 'locked', timeEstimate: '30m', description: 'A compiled, strongly typed language.', importance: 'Basic knowledge.', prerequisites: ['cpp-intro'], isSubNode: true, resources: [{ title: 'What is C++', url: 'https://www.youtube.com/watch?v=18c3MTX0PK0', type: 'video' }] } },
  { id: 'cpp-why', type: 'skillNode', position: { x: 1000, y: 50 }, data: { label: 'Why use C++', status: 'locked', timeEstimate: '30m', description: 'Performance and memory control.', importance: 'Contextual understanding.', prerequisites: ['cpp-intro'], isSubNode: true, resources: [{ title: 'Why use C++', url: 'https://www.youtube.com/watch?v=18c3MTX0PK0', type: 'video' }] } },
  { id: 'cpp-vs', type: 'skillNode', position: { x: 1000, y: 100 }, data: { label: 'C vs C++', status: 'locked', timeEstimate: '30m', description: 'C++ has classes, C does not.', importance: 'Historical context.', prerequisites: ['cpp-intro'], isSubNode: true, resources: [{ title: 'C vs C++', url: 'https://www.youtube.com/watch?v=18c3MTX0PK0', type: 'video' }] } },

  // 2. Setting up Environment
  { id: 'cpp-setup', type: 'skillNode', position: { x: -200, y: 200 }, data: { label: 'Setting up your Environment', status: 'locked', timeEstimate: '2 hr', description: 'Getting a compiler and IDE ready.', importance: 'Required to write code.', prerequisites: ['cpp-intro'], resources: [{ title: 'Setup C++', url: 'https://www.youtube.com/watch?v=18c3MTX0PK0', type: 'video' }] } },
  { id: 'cpp-install', type: 'skillNode', position: { x: 100, y: 280 }, data: { label: 'Installing C++', status: 'locked', timeEstimate: '30m', description: 'Installing GCC or MSVC.', importance: 'Core setup.', prerequisites: ['cpp-setup'], isSubNode: true, resources: [{ title: 'Install C++', url: 'https://www.youtube.com/watch?v=18c3MTX0PK0', type: 'video' }] } },
  { id: 'cpp-ide', type: 'skillNode', position: { x: -200, y: 330 }, data: { label: 'Code Editors / IDEs', status: 'locked', timeEstimate: '30m', description: 'VS Code, Visual Studio, CLion.', importance: 'Productivity.', prerequisites: ['cpp-setup'], isSubNode: true, resources: [{ title: 'C++ IDEs', url: 'https://www.youtube.com/watch?v=18c3MTX0PK0', type: 'video' }] } },
  { id: 'cpp-run', type: 'skillNode', position: { x: -200, y: 380 }, data: { label: 'Running your First Program', status: 'locked', timeEstimate: '30m', description: 'Writing Hello World and compiling.', importance: 'First milestone.', prerequisites: ['cpp-setup'], isSubNode: true, resources: [{ title: 'Hello World C++', url: 'https://www.youtube.com/watch?v=18c3MTX0PK0', type: 'video' }] } },

  // 3. Basic Operations
  { id: 'cpp-basic', type: 'skillNode', position: { x: 650, y: 200 }, data: { label: 'Basic Operations', status: 'locked', timeEstimate: '1 hr', description: 'Math, logic, bitwise.', importance: 'Core logic.', prerequisites: ['cpp-intro'], resources: [{ title: 'Variables and Math', url: 'https://www.youtube.com/watch?v=1v_4d6AfsK8', type: 'video' }] } },
  { id: 'cpp-arithmetic', type: 'skillNode', position: { x: 400, y: 280 }, data: { label: 'Arithmetic Operators', status: 'locked', timeEstimate: '30m', description: '+, -, *, /, %', importance: 'Math basics.', prerequisites: ['cpp-basic'], isSubNode: true, resources: [{ title: 'Math in C++', url: 'https://www.youtube.com/watch?v=1v_4d6AfsK8', type: 'video' }] } },
  { id: 'cpp-logical', type: 'skillNode', position: { x: 650, y: 330 }, data: { label: 'Logical Operators', status: 'locked', timeEstimate: '30m', description: '&&, ||, !', importance: 'Logic basics.', prerequisites: ['cpp-basic'], isSubNode: true, resources: [{ title: 'Logic in C++', url: 'https://www.youtube.com/watch?v=1v_4d6AfsK8', type: 'video' }] } },
  { id: 'cpp-bitwise', type: 'skillNode', position: { x: 650, y: 380 }, data: { label: 'Bitwise Operators', status: 'locked', timeEstimate: '1 hr', description: '&, |, ^, ~, <<, >>', importance: 'Low level data manipulation.', prerequisites: ['cpp-basic'], isSubNode: true, resources: [{ title: 'Bitwise in C++', url: 'https://www.youtube.com/watch?v=1v_4d6AfsK8', type: 'video' }] } },

  // 4. Control Flow
  { id: 'cpp-control', type: 'skillNode', position: { x: 1000, y: 350 }, data: { label: 'Control Flow & Statements', status: 'locked', timeEstimate: '2 hr', description: 'If statements, loops.', importance: 'Directing code execution path.', prerequisites: ['cpp-basic'], resources: [{ title: 'Control Flow', url: 'https://www.youtube.com/watch?v=1v_4d6AfsK8', type: 'video' }] } },
  { id: 'cpp-if', type: 'skillNode', position: { x: 750, y: 240 }, data: { label: 'if else / switch / goto', status: 'locked', timeEstimate: '1 hr', description: 'Branching logic.', importance: 'Decision making.', prerequisites: ['cpp-control'], isSubNode: true, resources: [{ title: 'If statements', url: 'https://www.youtube.com/watch?v=1v_4d6AfsK8', type: 'video' }] } },
  { id: 'cpp-loops', type: 'skillNode', position: { x: 1000, y: 290 }, data: { label: 'for / while / do while loops', status: 'locked', timeEstimate: '1 hr', description: 'Iteration logic.', importance: 'Repeating code.', prerequisites: ['cpp-control'], isSubNode: true, resources: [{ title: 'Loops in C++', url: 'https://www.youtube.com/watch?v=1v_4d6AfsK8', type: 'video' }] } },

  // 5. Pointers and References
  { id: 'cpp-pointers', type: 'skillNode', position: { x: -200, y: 500 }, data: { label: 'Pointers and References', status: 'locked', timeEstimate: '5 hr', description: 'Direct memory addresses.', importance: 'Most crucial C++ topic.', prerequisites: ['cpp-setup'], resources: [{ title: 'Pointers (Cherno)', url: 'https://www.youtube.com/watch?v=DTxHyVnPNX4', type: 'video' }] } },
  { id: 'cpp-ref', type: 'skillNode', position: { x: 100, y: 580 }, data: { label: 'References', status: 'locked', timeEstimate: '1 hr', description: 'Aliases for variables.', importance: 'Safer pointers.', prerequisites: ['cpp-pointers'], isSubNode: true, resources: [{ title: 'References', url: 'https://www.youtube.com/watch?v=IzoFn3dfsPA', type: 'video' }] } },
  { id: 'cpp-mem', type: 'skillNode', position: { x: -200, y: 630 }, data: { label: 'Memory Model', status: 'locked', timeEstimate: '1 hr', description: 'Heap vs Stack.', importance: 'Understanding allocations.', prerequisites: ['cpp-pointers'], isSubNode: true, resources: [{ title: 'Stack vs Heap', url: 'https://www.youtube.com/watch?v=wJ1L2nSIV1s', type: 'video' }] } },
  { id: 'cpp-life', type: 'skillNode', position: { x: -200, y: 680 }, data: { label: 'Lifetime of Objects', status: 'locked', timeEstimate: '1 hr', description: 'When variables die.', importance: 'Preventing use-after-free.', prerequisites: ['cpp-pointers'], isSubNode: true, resources: [{ title: 'Object Lifetimes', url: 'https://www.youtube.com/watch?v=wJ1L2nSIV1s', type: 'video' }] } },
  
  // Smart Pointers Group
  { id: 'cpp-smart', type: 'skillNode', position: { x: -200, y: 730 }, data: { label: 'Smart Pointers', status: 'locked', timeEstimate: '2 hr', description: 'Auto-deleting pointers.', importance: 'Modern C++ memory management.', prerequisites: ['cpp-life'], resources: [{ title: 'Smart Pointers', url: 'https://www.youtube.com/watch?v=UOB7-B2MfwA', type: 'video' }] } },
  { id: 'cpp-weak', type: 'skillNode', position: { x: 100, y: 780 }, data: { label: 'weak_ptr', status: 'locked', timeEstimate: '30m', description: 'Non-owning observer.', importance: 'Breaking circular references.', prerequisites: ['cpp-smart'], isSubNode: true, resources: [{ title: 'weak_ptr', url: 'https://www.youtube.com/watch?v=UOB7-B2MfwA', type: 'video' }] } },
  { id: 'cpp-shared', type: 'skillNode', position: { x: -200, y: 830 }, data: { label: 'shared_ptr', status: 'locked', timeEstimate: '30m', description: 'Reference counted pointer.', importance: 'Shared ownership.', prerequisites: ['cpp-smart'], isSubNode: true, resources: [{ title: 'shared_ptr', url: 'https://www.youtube.com/watch?v=UOB7-B2MfwA', type: 'video' }] } },
  { id: 'cpp-unique', type: 'skillNode', position: { x: -200, y: 880 }, data: { label: 'unique_ptr', status: 'locked', timeEstimate: '30m', description: 'Exclusive ownership.', importance: 'Primary modern pointer.', prerequisites: ['cpp-smart'], isSubNode: true, resources: [{ title: 'unique_ptr', url: 'https://www.youtube.com/watch?v=UOB7-B2MfwA', type: 'video' }] } },

  // Raw Pointers Group
  { id: 'cpp-raw', type: 'skillNode', position: { x: -200, y: 930 }, data: { label: 'Raw Pointers', status: 'locked', timeEstimate: '1 hr', description: 'Manual memory.', importance: 'Legacy code and ultra-performance.', prerequisites: ['cpp-unique'], resources: [{ title: 'Raw Pointers', url: 'https://www.youtube.com/watch?v=DTxHyVnPNX4', type: 'video' }] } },
  { id: 'cpp-new', type: 'skillNode', position: { x: 100, y: 980 }, data: { label: 'New/Delete Operators', status: 'locked', timeEstimate: '1 hr', description: 'Manual allocation.', importance: 'Heap management.', prerequisites: ['cpp-raw'], isSubNode: true, resources: [{ title: 'New Delete', url: 'https://www.youtube.com/watch?v=wJ1L2nSIV1s', type: 'video' }] } },
  { id: 'cpp-leak', type: 'skillNode', position: { x: -200, y: 1030 }, data: { label: 'Memory Leakage', status: 'locked', timeEstimate: '1 hr', description: 'Forgetting to delete.', importance: 'Crash prevention.', prerequisites: ['cpp-raw'], isSubNode: true, resources: [{ title: 'Memory Leaks', url: 'https://www.youtube.com/watch?v=wJ1L2nSIV1s', type: 'video' }] } },

  // 6. Data Types
  { id: 'cpp-data', type: 'skillNode', position: { x: 650, y: 500 }, data: { label: 'Data Types', status: 'locked', timeEstimate: '2 hr', description: 'Types of data variables.', importance: 'Memory sizing.', prerequisites: ['cpp-basic'], resources: [{ title: 'Data Types', url: 'https://www.youtube.com/watch?v=1v_4d6AfsK8', type: 'video' }] } },
  { id: 'cpp-static', type: 'skillNode', position: { x: 400, y: 580 }, data: { label: 'Static Typing', status: 'locked', timeEstimate: '30m', description: 'Types checked at compile time.', importance: 'C++ core design.', prerequisites: ['cpp-data'], isSubNode: true, resources: [{ title: 'Static Typing', url: 'https://www.youtube.com/watch?v=1v_4d6AfsK8', type: 'video' }] } },
  { id: 'cpp-dynamic', type: 'skillNode', position: { x: 650, y: 630 }, data: { label: 'Dynamic Typing', status: 'locked', timeEstimate: '30m', description: 'Types at runtime (polymorphism).', importance: 'Advanced usage.', prerequisites: ['cpp-data'], isSubNode: true, resources: [{ title: 'Dynamic Typing', url: 'https://www.youtube.com/watch?v=1v_4d6AfsK8', type: 'video' }] } },
  { id: 'cpp-rtti', type: 'skillNode', position: { x: 650, y: 680 }, data: { label: 'RTTI', status: 'locked', timeEstimate: '1 hr', description: 'Run-Time Type Information.', importance: 'typeid and dynamic_cast.', prerequisites: ['cpp-data'], isSubNode: true, resources: [{ title: 'RTTI', url: 'https://www.youtube.com/watch?v=1v_4d6AfsK8', type: 'video' }] } },

  // 7. Functions
  { id: 'cpp-funcs', type: 'skillNode', position: { x: 1000, y: 500 }, data: { label: 'Functions', status: 'locked', timeEstimate: '3 hr', description: 'Reusable code blocks.', importance: 'Organization.', prerequisites: ['cpp-control'], resources: [{ title: 'Functions', url: 'https://www.youtube.com/watch?v=1v_4d6AfsK8', type: 'video' }] } },
  { id: 'cpp-overload', type: 'skillNode', position: { x: 750, y: 580 }, data: { label: 'Operator Overloading', status: 'locked', timeEstimate: '1 hr', description: 'Customizing +, -, etc.', importance: 'Intuitive object usage.', prerequisites: ['cpp-funcs'], isSubNode: true, resources: [{ title: 'Operator Overloading', url: 'https://www.youtube.com/watch?v=mS9755mA66M', type: 'video' }] } },
  { id: 'cpp-lambdas', type: 'skillNode', position: { x: 1000, y: 630 }, data: { label: 'Lambdas', status: 'locked', timeEstimate: '1 hr', description: 'Anonymous functions.', importance: 'Modern C++ callbacks.', prerequisites: ['cpp-funcs'], isSubNode: true, resources: [{ title: 'Lambdas', url: 'https://www.youtube.com/watch?v=mWgmBBz0y8c', type: 'video' }] } },
  { id: 'cpp-static-poly', type: 'skillNode', position: { x: 1000, y: 680 }, data: { label: 'Static Polymorphism', status: 'locked', timeEstimate: '1 hr', description: 'Templates and overloading.', importance: 'Fast polymorphism.', prerequisites: ['cpp-funcs'], isSubNode: true, resources: [{ title: 'Static Polymorphism', url: 'https://www.youtube.com/watch?v=mWgmBBz0y8c', type: 'video' }] } },
  { id: 'cpp-func-overload', type: 'skillNode', position: { x: 1000, y: 730 }, data: { label: 'Function Overloading', status: 'locked', timeEstimate: '30m', description: 'Same name, different params.', importance: 'Code clarity.', prerequisites: ['cpp-funcs'], isSubNode: true, resources: [{ title: 'Function Overloading', url: 'https://www.youtube.com/watch?v=1v_4d6AfsK8', type: 'video' }] } },

  // 8. Structuring Codebase
  { id: 'cpp-structuring', type: 'skillNode', position: { x: 650, y: 930 }, data: { label: 'Structuring Codebase', status: 'locked', timeEstimate: '2 hr', description: 'Organizing files.', importance: 'Scaling projects.', prerequisites: ['cpp-data'], resources: [{ title: 'Header Files', url: 'https://www.youtube.com/watch?v=9RJTQmK0YPI', type: 'video' }] } },
  { id: 'cpp-forward', type: 'skillNode', position: { x: 400, y: 780 }, data: { label: 'Forward Declaration', status: 'locked', timeEstimate: '30m', description: 'Declaring a type before defining it.', importance: 'Speeds up compilation.', prerequisites: ['cpp-structuring'], isSubNode: true, resources: [{ title: 'Forward Declarations', url: 'https://www.youtube.com/watch?v=9RJTQmK0YPI', type: 'video' }] } },
  { id: 'cpp-headers', type: 'skillNode', position: { x: 650, y: 830 }, data: { label: 'Headers / CPP Files', status: 'locked', timeEstimate: '1 hr', description: '.h and .cpp separation.', importance: 'Compilation model.', prerequisites: ['cpp-structuring'], isSubNode: true, resources: [{ title: 'Header Files', url: 'https://www.youtube.com/watch?v=9RJTQmK0YPI', type: 'video' }] } },
  { id: 'cpp-namespaces', type: 'skillNode', position: { x: 650, y: 880 }, data: { label: 'Namespaces', status: 'locked', timeEstimate: '30m', description: 'Grouping identifiers.', importance: 'Avoiding name collisions.', prerequisites: ['cpp-structuring'], isSubNode: true, resources: [{ title: 'Namespaces', url: 'https://www.youtube.com/watch?v=1v_4d6AfsK8', type: 'video' }] } },

  // 9. Structures and Classes (OOP)
  { id: 'cpp-classes', type: 'skillNode', position: { x: 1000, y: 930 }, data: { label: 'Structures and Classes', status: 'locked', timeEstimate: '5 hr', description: 'Custom objects.', importance: 'OOP Foundation.', prerequisites: ['cpp-funcs'], resources: [{ title: 'Classes', url: 'https://www.youtube.com/watch?v=2BP8Poqckpc', type: 'video' }] } },
  { id: 'cpp-oop2', type: 'skillNode', position: { x: 750, y: 880 }, data: { label: 'Object Oriented Programming', status: 'locked', timeEstimate: '3 hr', description: 'Inheritance, Encapsulation.', importance: 'Design paradigm.', prerequisites: ['cpp-classes'], isSubNode: true, resources: [{ title: 'OOP', url: 'https://www.youtube.com/watch?v=2BP8Poqckpc', type: 'video' }] } },
  { id: 'cpp-virtual', type: 'skillNode', position: { x: 1000, y: 780 }, data: { label: 'Virtual Methods / Virtual Tables', status: 'locked', timeEstimate: '2 hr', description: 'v-tables and v-ptrs.', importance: 'How dynamic poly works under the hood.', prerequisites: ['cpp-classes'], isSubNode: true, resources: [{ title: 'Virtual Functions', url: 'https://www.youtube.com/watch?v=oIV2KchSyGQ', type: 'video' }] } },
  { id: 'cpp-dyn-poly', type: 'skillNode', position: { x: 1000, y: 830 }, data: { label: 'Dynamic Polymorphism', status: 'locked', timeEstimate: '1 hr', description: 'Overriding at runtime.', importance: 'Flexible interfaces.', prerequisites: ['cpp-classes'], isSubNode: true, resources: [{ title: 'Interfaces', url: 'https://www.youtube.com/watch?v=UWAdd13EhUM', type: 'video' }] } },
];

export const cppEdges: Edge[] = [
  // Intro connections
  { id: 'e-intro-what', source: 'cpp-intro', target: 'cpp-what', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-intro-why', source: 'cpp-intro', target: 'cpp-why', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-intro-vs', source: 'cpp-intro', target: 'cpp-vs', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-intro-setup', source: 'cpp-intro', target: 'cpp-setup', type: 'smoothstep', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'e-intro-basic', source: 'cpp-intro', target: 'cpp-basic', type: 'smoothstep', style: { stroke: '#3b82f6', strokeWidth: 2 } },

  // Setup connections
  { id: 'e-setup-install', source: 'cpp-setup', target: 'cpp-install', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-setup-ide', source: 'cpp-setup', target: 'cpp-ide', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-setup-run', source: 'cpp-setup', target: 'cpp-run', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-setup-pointers', source: 'cpp-setup', target: 'cpp-pointers', type: 'smoothstep', style: { stroke: '#3b82f6', strokeWidth: 2 } },

  // Basic connections
  { id: 'e-basic-arithmetic', source: 'cpp-basic', target: 'cpp-arithmetic', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-basic-logical', source: 'cpp-basic', target: 'cpp-logical', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-basic-bitwise', source: 'cpp-basic', target: 'cpp-bitwise', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-basic-control', source: 'cpp-basic', target: 'cpp-control', type: 'smoothstep', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'e-basic-data', source: 'cpp-basic', target: 'cpp-data', type: 'smoothstep', style: { stroke: '#3b82f6', strokeWidth: 2 } },

  // Control connections
  { id: 'e-control-if', source: 'cpp-control', target: 'cpp-if', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-control-loops', source: 'cpp-control', target: 'cpp-loops', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-control-funcs', source: 'cpp-control', target: 'cpp-funcs', type: 'smoothstep', style: { stroke: '#3b82f6', strokeWidth: 2 } },

  // Pointers connections
  { id: 'e-pointers-ref', source: 'cpp-pointers', target: 'cpp-ref', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-pointers-mem', source: 'cpp-pointers', target: 'cpp-mem', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-pointers-life', source: 'cpp-pointers', target: 'cpp-life', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-life-smart', source: 'cpp-life', target: 'cpp-smart', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-smart-weak', source: 'cpp-smart', target: 'cpp-weak', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-smart-shared', source: 'cpp-smart', target: 'cpp-shared', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-smart-unique', source: 'cpp-smart', target: 'cpp-unique', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-unique-raw', source: 'cpp-unique', target: 'cpp-raw', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-raw-new', source: 'cpp-raw', target: 'cpp-new', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-raw-leak', source: 'cpp-raw', target: 'cpp-leak', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },

  // Data Types connections
  { id: 'e-data-static', source: 'cpp-data', target: 'cpp-static', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-data-dynamic', source: 'cpp-data', target: 'cpp-dynamic', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-data-rtti', source: 'cpp-data', target: 'cpp-rtti', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-data-structuring', source: 'cpp-data', target: 'cpp-structuring', type: 'smoothstep', style: { stroke: '#3b82f6', strokeWidth: 2 } },

  // Functions connections
  { id: 'e-funcs-overload', source: 'cpp-funcs', target: 'cpp-overload', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-funcs-lambdas', source: 'cpp-funcs', target: 'cpp-lambdas', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-funcs-spoly', source: 'cpp-funcs', target: 'cpp-static-poly', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-funcs-foverload', source: 'cpp-funcs', target: 'cpp-func-overload', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-funcs-classes', source: 'cpp-funcs', target: 'cpp-classes', type: 'smoothstep', style: { stroke: '#3b82f6', strokeWidth: 2 } },

  // Structuring connections
  { id: 'e-structuring-forward', source: 'cpp-structuring', target: 'cpp-forward', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-structuring-headers', source: 'cpp-structuring', target: 'cpp-headers', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-structuring-namespaces', source: 'cpp-structuring', target: 'cpp-namespaces', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-structuring-classes', source: 'cpp-structuring', target: 'cpp-classes', type: 'smoothstep', style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'e-pointers-structuring', source: 'cpp-pointers', target: 'cpp-structuring', type: 'smoothstep', style: { stroke: '#3b82f6', strokeWidth: 2 } }, // Linking left to middle

  // Classes connections
  { id: 'e-classes-oop2', source: 'cpp-classes', target: 'cpp-oop2', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-classes-virtual', source: 'cpp-classes', target: 'cpp-virtual', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e-classes-dynpoly', source: 'cpp-classes', target: 'cpp-dyn-poly', type: 'straight', style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5,5' } },
];
