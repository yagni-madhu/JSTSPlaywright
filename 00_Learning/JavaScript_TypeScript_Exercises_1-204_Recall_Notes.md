# JavaScript + TypeScript Recall Notes (Exercises 1–204)

Beginner-friendly notes from the numbered lessons in this repository. Use the chapter map to find a topic, then the tables and rules to refresh it quickly.

> **Coverage note:** this summarizes the lessons available in the repository through exercise 204. Some numbers are missing, have a nonstandard filename, or contain an empty/placeholder file. The last section calls out examples where the code may not match the intended lesson.

## Chapter map

| Exercises | Topic | What to remember |
|:--|:--|:--|
| 1–7 | JavaScript basics | Run a first program, use the console, understand the engine at a high level, and choose valid names for variables. |
| 8–13 | Values and literals | Numbers, strings, booleans, `null`, `undefined`, `NaN`, `Infinity`, and numeric separators. |
| 14–23 | Operators | Assignment, arithmetic, comparisons, logic, strings, and conditional expressions. |
| 24–30 | Increment, decrement, nullish values | Prefix vs. postfix and nullish coalescing vs. logical OR. |
| 31–43 | Conditions and `switch` | Make decisions with `if`/`else`, ternaries, and grouped or individual `switch` cases. |
| 44–60 | Input and loops | Read input, work with files, repeat code, and control loops with `break` and `continue`. |
| 61–85 | Arrays | Create, update, search, transform, sort, slice, copy, and destructure lists. |
| 86–101 | Functions | Declarations, expressions, arrows, IIFEs, rest/spread, callbacks, and returned values/functions. |
| 102–112 | Variables and hoisting | Compare `var`, `let`, and `const`; understand scope, hoisting, and the temporal dead zone. |
| 113 | Closures | A function can remember variables from where it was created. |
| 114–116 | Strings | Strings are immutable; use methods to search, extract, and transform text. |
| 117–124 | Objects | Properties, references, configuration objects, and shallow vs. deep copying. |
| 125–131 | Multidimensional arrays | Model grids/tables and traverse them with nested loops. |
| 132–139 | Callbacks | Pass a function to run later; nested asynchronous callbacks can become hard to follow. |
| 140–146 | Promises | Represent future results; handle success/failure and coordinate multiple tasks. |
| 147–156 | Async/await | Write Promise-based work in a readable sequence or run independent work in parallel. |
| 157–159 | Modules | Share code with named and default exports/imports. |
| 160–171 | Classes and constructors | Create objects from classes; distinguish instance data from shared static data. |
| 172–178 | Encapsulation | Protect internal state and provide controlled methods to read or change it. |
| 179–191 | Inheritance | Reuse behavior with `extends`, call parent behavior with `super`, and compose mixins. |
| 192–193 | Polymorphism | Different subclasses can provide their own implementation of the same method. |
| 194–197 | Interview exercises | Practice reasoning about JavaScript behavior and short code examples. |
| 198–204 | TypeScript basics | Add static types for values, arrays, functions, objects, and return behavior. |

## 1. Values, variables, and operators

### Values to recognize

| Value/type | Simple meaning | Remember |
|:--|:--|:--|
| `string` | Text | Use quotes or template literals. |
| `number` | Integers and decimals | JavaScript uses one general number type; `NaN` is still a number. |
| `boolean` | `true` or `false` | Useful for conditions and flags. |
| `undefined` | A value is missing/not assigned | Often the default value of an uninitialized variable or missing property. |
| `null` | Intentionally no value | `typeof null` is the historical oddity `"object"`. |
| `NaN` | “Not a Number” result | Check with `Number.isNaN(value)`, not `value === NaN`. |

### Operator reminders

| Expression | Meaning | Example |
|:--|:--|:--|
| `=` | Assign a value | `count = 3` |
| `==` | Compare after possible type conversion | `5 == "5"` is `true` |
| `===` | Compare value and type, without conversion | `5 === "5"` is `false` |
| `&&` | Return the first falsy operand, otherwise the last operand | `user && user.name` |
| Logical OR | Use the right side when the left side is falsy | Use `"Guest"` when `name` is missing or falsy. |
| `??` | Use the right side only when the left side is `null` or `undefined` | `count ?? 0` preserves `0` |
| `condition ? a : b` | Choose one of two values | `isReady ? "Go" : "Wait"` |

**Rule:** prefer `===` and `!==`. Use `??` when `0`, `false`, or `""` are valid values and should not be replaced.

### Prefix and postfix

| Form | What happens | Example |
|:--|:--|:--|
| `++value` | Increase first, then produce the new value | `let x = 1; console.log(++x); // 2` |
| `value++` | Produce the old value, then increase | `let x = 1; console.log(x++); // 1; x is now 2` |

Avoid putting several increments into one complicated expression; split the steps so the order is clear.

## 2. Decisions, input, and loops

| Tool | Use it when… | Remember |
|:--|:--|:--|
| `if` / `else if` / `else` | Conditions are ranges or unrelated checks | The first matching branch runs. |
| `switch` | One value is compared against several exact choices | Matching is strict; use `break` unless fall-through is intentional. |
| `for` | You know the loop counter or need its index | Initialization; condition; update. |
| `while` | Repeat while a condition is true | The condition is checked before each iteration; it may run zero times. |
| `do...while` | The body must run at least once | The condition is checked after the body. |
| `break` | Leave the current loop or switch | Stops the nearest enclosing loop/switch. |
| `continue` | Skip to the next loop iteration | Does not end the whole loop. |

Input APIs depend on where JavaScript runs. Browser prompts, Node packages, and file-system APIs are not interchangeable; use the API supported by the current environment.

## 3. Arrays

An array is an ordered, zero-indexed list. The first element is at index `0`; the last index is `array.length - 1`.

| Method/group | Typical use | Changes the original array? |
|:--|:--|:--:|
| `push` / `pop` | Add/remove at the end | Yes |
| `unshift` / `shift` | Add/remove at the beginning | Yes |
| `splice` | Remove, insert, or replace items at an index | Yes |
| `slice` | Copy out a range | No |
| `concat` | Make a combined array | No |
| `indexOf` / `includes` | Find a primitive value | No |
| `find` / `findIndex` | Find the first item/index matching a test | No |
| `forEach` | Do something for every item | No new transformed array |
| `map` | Turn each item into a new item | No |
| `filter` | Keep items that pass a test | No |
| `reduce` | Combine items into one result | No |
| `some` / `every` | Ask whether any/all items pass a test | No |
| `sort` | Sort items in place | **Yes** |

**Important:** default `sort()` compares values as strings. For numeric ascending order, use `numbers.sort((a, b) => a - b)`.

| Copy operation | What is copied? | Nested object data shared? |
|:--|:--|:--:|
| `const b = a` | The reference to the same array/object | Yes; both names point to the same object |
| `[...a]` / `a.slice()` | A new outer array | Yes |
| `structuredClone(a)` | A deep copy of supported data | No, nested supported data is cloned |

`slice` does not mutate; `splice` does. A spread or shallow copy only copies the outer container.

## 4. Functions and scope

| Concept | Remember |
|:--|:--|
| Function declaration | `function add(a, b) { return a + b; }` |
| Function expression | A function stored in a variable. |
| Arrow function | Short function syntax; does not create its own `this`. |
| `return` | Sends a result back and ends that function call. |
| IIFE | A function expression called immediately, often used to create a scope. |
| Rest parameter | Collects remaining arguments: `function f(...items) {}` |
| Spread syntax | Expands items: `f(...items)` or `[...items]` |
| Callback | A function passed to another function to be called later. |
| Closure | A function keeps access to variables in its outer lexical scope. |

The `...` syntax has two opposite jobs: **rest gathers**; **spread expands**.

### `var`, `let`, and `const`

| Declaration | Scope | Reassignment | Main caution |
|:--|:--|:--|:--|
| `var` | Function-scoped | Yes | Can be redeclared; hoisting can surprise you. |
| `let` | Block-scoped | Yes | Cannot be read before initialization (temporal dead zone). |
| `const` | Block-scoped | No rebinding | An object/array declared `const` can still have its contents changed. |

**Hoisting memory cue:** declarations are processed before normal execution, but `let`/`const` are unusable until their declaration is reached. Accessing a `let`/`const` in its temporal dead zone throws a `ReferenceError`; even `typeof` does not rescue that access.

## 5. Strings, objects, and grids

| Topic | Remember |
|:--|:--|
| String immutability | String methods return new strings; they do not edit the original string. |
| String searching | Methods such as `includes`, `indexOf`, and `startsWith` answer different search questions. |
| `charAt(i)` vs. `at(i)` | `at(-1)` reads from the end; `charAt(-1)` returns an empty string. |
| Object property | A key/value pair, such as `{ name: "Ada" }`. |
| Primitive copy | A primitive value is copied independently when assigned. |
| Object/array copy | Assignment copies the reference, not the underlying object. |
| Configuration object | A named group of options is easier to understand than many positional values. |
| 2D array | An array of rows; use `grid[row][column]`. |
| Nested loops | The outer loop often selects a row; the inner loop visits its columns. |

For a grid, check the row and column limits carefully: rows use `grid.length`; columns use `grid[row].length`.

## 6. Callbacks, Promises, and async/await

### From callbacks to Promises

| Style | How to think about it | Common problem/benefit |
|:--|:--|:--|
| Synchronous callback | The callback runs before the current call finishes. | Order is immediate. |
| Asynchronous callback | The callback runs later, after an event/timer/task. | Later work must be coordinated. |
| Nested callbacks | Each result starts another callback inside the previous one. | Deep nesting (“callback hell”) is difficult to read and handle. |
| Promise | A placeholder for a result that may arrive later. | Chain with `.then()`, handle failures with `.catch()`. |
| `async` / `await` | Syntax for working with Promises in a readable way. | Use `try`/`catch` for rejected awaited work. |

### Promise helpers

| Helper | Resolves when… | What you get |
|:--|:--|:--|
| `Promise.all([...])` | Every Promise fulfills | Results in input order; rejects as soon as one rejects, though the other tasks keep running. |
| `Promise.allSettled([...])` | Every Promise settles | A status/result for each Promise, including failures. |
| `Promise.race([...])` | The first Promise settles | That first fulfillment or rejection. |

### Sequential vs. parallel

```ts
// Sequential: the second call waits for the first.
const first = await apiCall("first");
const second = await apiCall("second");

// Parallel: start both, then wait for both results.
const [a, b] = await Promise.all([
  apiCall("first"),
  apiCall("second")
]);
```

Use sequential awaits when the next operation depends on the previous result. Use `Promise.all` when tasks are independent and both results are needed. A `Promise` represents work; `await` waits for it inside an `async` function.

## 7. Modules and object-oriented JavaScript

### Modules

| Export/import | Example | Rule |
|:--|:--|:--|
| Named export | `export function add() {}` | Import with braces and the matching name: `import { add } from "./utils.js";` |
| Renamed named import | `import { add as sum } from "./utils.js";` | `as` changes the local name. |
| Default export | `export default function log() {}` | Import without braces; the importer chooses the local name. |

A module's path, filename, and letter case must match. One file can have one default export and multiple named exports.

### Classes, encapsulation, inheritance, and polymorphism

| Concept | ELI5 | Example |
|:--|:--|:--|
| Class | A recipe for making objects | `class Car {}` |
| Instance | One object made from the recipe | `const car = new Car();` |
| Constructor | Setup that runs when `new` creates an instance | `constructor(name) { this.name = name; }` |
| Instance member | Belongs to one object | `this.name`, `car.drive()` |
| Static member | Belongs to the class itself, shared rather than stored per instance | `TestRunner.totalTests`, `TestRunner.summary()` |
| Private field | Class-only state, marked with `#` | `#balance` |
| Encapsulation | Keep internal state private; expose controlled methods | `getBalance()` / `deposit()` |
| Inheritance | A child class reuses a parent class | `class Dog extends Animal {}` |
| `super` | Call the parent constructor or implementation | `super(name)` / `super.method()` |
| Override | A child supplies its own version of a parent method | Child `setup()` replaces inherited `setup()`. |
| Polymorphism | Same method call, behavior depends on the object's class | `item.run()` can run different implementations. |
| Mixin | Compose extra behavior into a class | Apply logging/screenshot behavior without multiple `extends`. |

JavaScript classes support one direct `extends` parent. Mixins are one way to combine behaviors from several sources.

## 8. TypeScript (198–204)

TypeScript adds compile-time type checking to JavaScript. Types help your editor/compiler catch mistakes; they do not validate outside data at runtime.

| Type | Use it for | Example |
|:--|:--|:--|
| `string` | Text | `let name: string = "Ada";` |
| `number` | Numbers | `let score: number = 95;` |
| `boolean` | True/false | `let passed: boolean = true;` |
| `null` / `undefined` | Explicitly empty or absent values | `let missing: undefined = undefined;` |
| `string[]` / `Array<string>` | Arrays whose items have a known type | `let names: string[] = ["Ada"];` |
| Object shape | Objects with known properties | `let user: { name: string; age: number } = ...;` |
| `any` | Escape hatch that disables checking for a value | Avoid unless there is a specific reason. |
| `unknown` | A value whose type has not been checked yet | Check/narrow it before using it. |
| `void` | A function that finishes without a useful returned value | `function log(msg: string): void { ... }` |
| `never` | A function/branch that cannot finish normally | A function that always throws or loops forever. |

### Function annotations

```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const multiply = (a: number, b: number): number => a * b;
```

Annotate the inputs and, when useful, the output. TypeScript can infer many types, but clear annotations help at function boundaries.

### `any` vs. `unknown`

| | `any` | `unknown` |
|:--|:--|:--|
| Can hold any value? | Yes | Yes |
| Can use it without checking? | Yes; TypeScript largely stops protecting it. | No; check/narrow it first. |
| Safer for unvalidated input? | No | Yes |

**Memory cue:** `any` says “trust me”; `unknown` says “check first.”

### `void` vs. `never`

| Type | Meaning |
|:--|:--|
| `void` | The function finishes, but returns no useful value. |
| `never` | The function never completes normally: it throws or cannot stop. |

Example from exercise 204:

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

## 9. Common traps and corrections

| Lesson/file topic | Remember/check this |
|:--|:--|
| `==` / `===` | Prefer strict comparison (`===`) to avoid implicit type conversion. |
| `typeof null` | It returns `"object"` for historical reasons. |
| Default array sorting | It is lexicographic; pass a comparator for numeric sorting. |
| `slice` / `splice` | `slice` copies; `splice` mutates. |
| Shallow copy | Copying an outer array/object does not clone nested objects. Exercise 82's demonstrated shared object is shallow-copy behavior. |
| Promise constructors | Use `Promise.resolve(value)`, not `new Promise.resolve(value)`. |
| Timers | `setTimeout(callback, delay)` receives the delay as its second argument. |
| Empty/callback placeholders | An empty file does not demonstrate a concept; treat it as a placeholder. |
| Imports | Check both the path and exact filename case; the exercise 158 import path does not match the listed utility filename. |
| `never` / infinite loop | An infinite loop really does not stop; do not call it casually. |

## 10. Repository exercise-file caveats

The notes cover the intended material through 204, but not every number is a normal, complete `.js` file. A few examples also contain mistakes, so treat them as learning prompts rather than blindly copying every line.

| Exercise/file | Caveat |
|:--|:--|
| 57 | The break example is named `57_Break;js`; the semicolon makes it a nonstandard JavaScript filename. |
| 60 and 192 | These files are empty placeholders. |
| 75 and 78 | These are Markdown explanations rather than JavaScript exercises. |
| 82 | The shown object copy shares the nested object; it demonstrates a shallow copy, not a deep copy. |
| 145 | Check the `setTimeout` argument placement; the example may not use the intended delay. |
| 148 | Use `Promise.resolve(value)`, not `new Promise.resolve(value)`. |
| 158 | The import path says `testutil.js`, while the listed utility files are `testutils.js` and `utils.js`. |
| 191 | The hybrid-inheritance file is only a short placeholder. |
| 194 | The file is named `194;js`, with a semicolon instead of a dot before `js`. |

## 11. Fast self-check

Try to answer these without looking:

1. What is the difference between `==` and `===`?
2. When should you choose `??` instead of `||`?
3. Which changes the array: `slice` or `splice`?
4. What is the difference between a shallow copy and a reference assignment?
5. What does a closure remember?
6. Why can nested callbacks become hard to maintain?
7. When is `Promise.all` appropriate, and what happens if one input rejects?
8. What is the difference between `await` and `Promise.all`?
9. How do a named export and a default export differ?
10. What do `#privateField`, `static`, `extends`, and `super` mean?
11. Why is `unknown` safer than `any`?
12. What is the difference between `void` and `never`?

### One-line recap

```text
Be strict with comparisons, know which array methods mutate,
keep async flow explicit, protect object state, and check unknown data.
```
