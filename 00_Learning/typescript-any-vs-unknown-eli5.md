# TypeScript `any` vs `unknown` — ELI5

Both types can hold a value of any kind. The difference is what TypeScript lets you do with that value afterward.

## The short version

| Question | `any` | `unknown` |
|:--|:--|:--|
| Can it hold a string, number, object, or anything else? | Yes | Yes |
| Can you use it right away as if it were any type? | Yes | No |
| Does TypeScript make you check its type first? | No | Yes |
| Does it help catch mistakes? | Not much; it turns off checks for that value | Yes; it makes you prove what the value is |
| Good default for data you have not checked yet? | No | Yes |
| ELI5 | An open box with no safety check | A sealed box: check what is inside before using it |

## `any`: “Let me do whatever”

With `any`, TypeScript allows operations without checking that they make sense. The code may still fail when JavaScript runs.

```ts
let anything: any = "hello";

console.log(anything.toUpperCase()); // Works: "HELLO"
console.log(anything.toFixed(2));    // TypeScript allows it, but crashes at runtime:
                                     // toFixed is not a function
```

`any` can also let a mistake spread into other variables:

```ts
let value: any = "hello";
let count: number = value; // Allowed, even though value is a string
```

Think of `any` as telling TypeScript: **“Trust me; stop checking this value.”**

## `unknown`: “Check before you use it”

You can put any value into an `unknown` variable. But TypeScript will not let you use it as a string, number, or object until you check its type.

```ts
let value: unknown = "hello";

// value.toUpperCase(); // Error: TypeScript does not know that value is a string

if (typeof value === "string") {
  console.log(value.toUpperCase()); // Safe: inside this block, value is a string
}
```

The check (`typeof value === "string"`) is called **narrowing**: it narrows the possible types to the one you verified.

## Side-by-side example

| Code | With `any` | With `unknown` |
|:--|:--|:--|
| `const value: any = "hello";` | Accepted | Not applicable |
| `value.toUpperCase()` | Accepted, with no safety check | Rejected until you check that `value` is a string |
| `const text: string = value;` | Accepted, even if the value is not a string | Rejected until you check or validate the value |
| `if (typeof value === "string") { ... }` | Allowed, but not required | Required before using string-only operations |

## A safe pattern for unknown data

When data comes from outside your code (for example, user input, an API, or parsed JSON), start with `unknown`, check it, then use it.

```ts
function printName(input: unknown): void {
  if (
    typeof input === "object" &&
    input !== null &&
    "name" in input &&
    typeof input.name === "string"
  ) {
    console.log(input.name);
  } else {
    console.log("The input does not contain a string name.");
  }
}

printName({ name: "Ada" }); // Ada
printName({ name: 42 });    // The input does not contain a string name.
```

The checks happen at runtime too: they inspect the real value before the program uses it.

## When should I use each one?

| Situation | Use | Why |
|:--|:--|:--|
| You receive a value, but have not checked its type yet | `unknown` | Makes you check before using it |
| You catch an error and do not know what was thrown | `unknown` | Errors can be thrown as values of different types |
| You want to accept all values but keep type safety | `unknown` | Any value can enter; unsafe use is blocked |
| You are temporarily working with an untyped library or migrating old code | `any`, sparingly | Can be a short-term escape hatch, but weakens checking |
| You want to silence a TypeScript error without checking the value | Avoid `any` | It may hide a real bug |

## Important: a type assertion is not a runtime check

This tells TypeScript to trust you; it does not inspect or convert the value:

```ts
const value: unknown = 42;
const text = value as string; // TypeScript accepts the claim; value is still a number
// text.toUpperCase();        // Can fail at runtime
```

Prefer a real check such as `typeof value === "string"` before using a value.

## Remember

```text
any      = anything goes; TypeScript stops protecting this value
unknown  = anything can come in; check it before it goes out
```

**Rule of thumb:** choose `unknown` when the type is not known yet. Use `any` only when you intentionally accept losing type checks.

More from the official TypeScript docs: [The `any` type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any) and [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html).
