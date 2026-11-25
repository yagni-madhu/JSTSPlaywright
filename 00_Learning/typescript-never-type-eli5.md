# TypeScript `never` — Notes from Exercise 204

## The simple idea

`never` means **this function cannot finish normally and give a value back**.

Think of a function as a trip:

- `string` means it comes back carrying a string.
- `void` means it comes back without a useful value.
- `never` means it never comes back.

## The two examples in Exercise 204

| Function | What happens? | Why `never`? |
|:--|:--|:--|
| `infiniteLoop()` | Keeps looping forever | It never reaches the end or returns |
| `throwError(message)` | Throws an error | It exits by throwing instead of returning |

```ts
function infiniteLoop(): never {
  while (true) {
    // This function has no way to finish.
  }
}

function throwError(message: string): never {
  throw new Error(message);
}
```

Calling `infiniteLoop()` will keep the program busy, so do not call it unless an endless loop is really intended.

## `void` vs `never`

| Return type | Does the function finish? | Does the caller get a value? | Example |
|:--|:--|:--|:--|
| `string` | Yes | Yes, a string | `return "Done";` |
| `void` | Yes | No useful value | `console.log("Done");` |
| `never` | No | No; it throws or never stops | `throw new Error("Failed");` |

```ts
function logDone(): void {
  console.log("Done");
}

function fail(message: string): never {
  throw new Error(message);
}
```

Remember: `void` means **“finished, but nothing useful came back.”** `never` means **“did not finish normally.”**

## Another useful job: check every case

`never` helps TypeScript catch a missing case in a list of possibilities.

```ts
type TestResult = "passed" | "failed";

function assertNever(value: never): never {
  throw new Error(`Unexpected result: ${value}`);
}

function describeResult(result: TestResult): string {
  switch (result) {
    case "passed":
      return "The test passed";
    case "failed":
      return "The test failed";
    default:
      return assertNever(result);
  }
}
```

After both possible results are handled, TypeScript knows there is no other value left, so `result` in `default` has type `never`.

If you later add `"skipped"` to `TestResult` but forget to handle it in the `switch`, TypeScript reports an error at `assertNever(result)`. That reminder helps keep the switch complete.

## Keep this in your head

| Situation | Type to remember |
|:--|:--|
| A function returns text | `string` |
| A function does something but has no useful return value | `void` |
| A function throws or cannot stop | `never` |
| A branch should be impossible after checking every case | `never` |

**Memory phrase:** `void` comes back empty; `never` never comes back.
