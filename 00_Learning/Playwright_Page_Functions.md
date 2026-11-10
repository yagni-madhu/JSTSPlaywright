# Playwright `Page` Functions — ELI5

`page` is Playwright's handle for one browser tab. This guide covers the JavaScript/TypeScript `Page` API: what each method does, whether it returns a Promise, and whether you normally `await` it.

> **Version note:** This project does not pin a Playwright version in a `package.json`. The list follows the current [official Page API](https://playwright.dev/docs/api/class-page). A method can be missing in an older installed version. Check the docs matching your installed version if autocomplete disagrees.

## What does `await` mean?

Some work finishes right away; other work takes time (navigation, clicking, reading from the browser). A Promise is JavaScript's "I will give you the answer later" box.

- **Promise = Yes:** normally write `await page.someMethod()`. `await` pauses this async function until that browser work finishes.
- **Promise = No:** use the value immediately; `await` is not needed.
- `await` can only be used inside an `async` function (or at top level in supported modules).

```js
const heading = page.getByRole("heading", { name: "Welcome" }); // immediate Locator
await heading.click();                                          // browser action; wait for it
const currentUrl = page.url();                                  // immediate string
const title = await page.title();                                // browser read; wait for it
```

## Find something on the page

These methods create a `Locator` (a reusable way to say "find this element"). They do not click or read the element yet, so they return immediately.

| Method | ELI5: what it finds | Returns a Promise? | `await`? |
|:--|:--|:--:|:--:|
| `page.getByRole(role, options)` | An element by its accessible role, like a button or heading. Usually the best choice. | No | No |
| `page.getByText(text, options)` | An element by the words a person sees on the page. | No | No |
| `page.getByLabel(text, options)` | A form field by its label, like “Email address”. | No | No |
| `page.getByPlaceholder(text, options)` | A form field by its placeholder hint. | No | No |
| `page.getByAltText(text, options)` | An image by its alternative text. | No | No |
| `page.getByTitle(text, options)` | An element by its `title` attribute. | No | No |
| `page.getByTestId(id)` | An element by its test-id attribute. | No | No |
| `page.getByRef(ref)` | An element by its reference, where supported by the installed version. | No | No |
| `page.locator(selector)` | An element using CSS, XPath, or a Playwright locator selector. | No | No |
| `page.frameLocator(selector)` | A starting point for finding elements inside an iframe. | No | No |

**ELI5:** making a Locator is like writing an address on a note. The browser does the actual trip when you call an action or ask for a value.

## Open, inspect, and close the tab

| Method | ELI5: what it does | Returns a Promise? | `await`? |
|:--|:--|:--:|:--:|
| `page.goto(url, options)` | Opens a URL in this tab. | Yes | Yes |
| `page.goBack(options)` | Goes to the previous history entry. | Yes | Yes |
| `page.goForward(options)` | Goes to the next history entry. | Yes | Yes |
| `page.reload(options)` | Reloads the current page. | Yes | Yes |
| `page.setContent(html, options)` | Replaces the page with the supplied HTML. | Yes | Yes |
| `page.waitForURL(url, options)` | Waits until the address matches a URL or pattern. | Yes | Yes |
| `page.waitForLoadState(state, options)` | Waits for a browser load milestone. Often not needed because Playwright already waits for actions. | Yes | Yes |
| `page.waitForClose(options)` | Waits until this tab closes. | Yes | Yes |
| `page.close(options)` | Closes this tab. | Yes | Yes |
| `page.isClosed()` | Checks whether the tab is already closed. | No | No |
| `page.url()` | Gives the current URL as a string. | No | No |
| `page.title()` | Reads the page title. | Yes | Yes |
| `page.content()` | Reads the whole HTML document as a string. | Yes | Yes |
| `page.context()` | Gets the browser context that owns this tab. | No | No |
| `page.opener()` | Gets the tab that opened this tab, if any. | Yes | Yes |
| `page.mainFrame()` | Gets the main frame (the top-level document). | No | No |
| `page.frames()` | Gets all frames in the tab as an array. | No | No |
| `page.frame(nameOrOptions)` | Gets a frame by its name or matching options. | No | No |
| `page.frameByUrl(url)` | Gets a frame by matching its URL, where supported by the installed version. | No | No |
| `page.video()` | Gets the video object if recording is enabled for this page. | No | No |
| `page.workers()` | Gets the current dedicated web workers as an array. | No | No |

## Interact with elements

For new tests, prefer `Locator` actions such as `page.getByRole(...).click()`. The old `page.click(selector)`-style methods below still appear in some versions, but are **discouraged** because they combine finding and acting in one step. See the [Locator API](https://playwright.dev/docs/api/class-locator).

| Method | ELI5: what it does | Returns a Promise? | `await`? |
|:--|:--|:--:|:--:|
| `page.click(selector, options)` | Clicks the matching element. Prefer `locator.click()`. | Yes | Yes |
| `page.dblclick(selector, options)` | Double-clicks the matching element. Prefer `locator.dblclick()`. | Yes | Yes |
| `page.check(selector, options)` | Checks a checkbox or radio button. Prefer `locator.check()`. | Yes | Yes |
| `page.uncheck(selector, options)` | Unchecks a checkbox. Prefer `locator.uncheck()`. | Yes | Yes |
| `page.setChecked(selector, checked, options)` | Sets a checkbox to checked or unchecked. Prefer `locator.setChecked()`. | Yes | Yes |
| `page.fill(selector, value, options)` | Replaces a field's text. Prefer `locator.fill()`. | Yes | Yes |
| `page.focus(selector, options)` | Moves keyboard focus to an element. Prefer `locator.focus()`. | Yes | Yes |
| `page.hover(selector, options)` | Moves the mouse over an element. Prefer `locator.hover()`. | Yes | Yes |
| `page.press(selector, key, options)` | Focuses an element and presses a key. Prefer `locator.press()`. | Yes | Yes |
| `page.type(selector, text, options)` | Types text character by character. Prefer `locator.pressSequentially()`. | Yes | Yes |
| `page.tap(selector, options)` | Taps an element on a touch-enabled page. Prefer `locator.tap()`. | Yes | Yes |
| `page.selectOption(selector, values, options)` | Chooses option(s) in a `<select>`. Prefer `locator.selectOption()`. | Yes | Yes |
| `page.setInputFiles(selector, files, options)` | Chooses files in a file-upload input. Prefer `locator.setInputFiles()`. | Yes | Yes |
| `page.dragAndDrop(source, target, options)` | Drags one element and drops it on another. | Yes | Yes |
| `page.dispatchEvent(selector, type, eventInit)` | Sends a DOM event to an element. Prefer a Locator method when available. | Yes | Yes |
| `page.getAttribute(selector, name, options)` | Reads an HTML attribute. Prefer `locator.getAttribute()`. | Yes | Yes |
| `page.inputValue(selector, options)` | Reads a form control's current value. Prefer `locator.inputValue()`. | Yes | Yes |
| `page.innerText(selector, options)` | Reads the visible text of an element. Prefer `locator.innerText()`. | Yes | Yes |
| `page.textContent(selector, options)` | Reads text content, including text not necessarily visible. Prefer `locator.textContent()`. | Yes | Yes |
| `page.innerHTML(selector, options)` | Reads an element's inner HTML. Prefer `locator.innerHTML()`. | Yes | Yes |
| `page.isChecked(selector, options)` | Checks whether a checkbox/radio is checked. Prefer `locator.isChecked()`. | Yes | Yes |
| `page.isDisabled(selector, options)` | Checks whether an element is disabled. Prefer `locator.isDisabled()`. | Yes | Yes |
| `page.isEditable(selector, options)` | Checks whether a field can be edited. Prefer `locator.isEditable()`. | Yes | Yes |
| `page.isEnabled(selector, options)` | Checks whether an element is enabled. Prefer `locator.isEnabled()`. | Yes | Yes |
| `page.isHidden(selector, options)` | Checks whether an element is hidden. Prefer `locator.isHidden()`. | Yes | Yes |
| `page.isVisible(selector, options)` | Checks whether an element is visible. Prefer `locator.isVisible()`. | Yes | Yes |

## Wait for something to happen

| Method | ELI5: what it waits for | Returns a Promise? | `await`? |
|:--|:--|:--:|:--:|
| `page.waitForEvent(event, options)` | A page event, such as a popup or download. | Yes | Yes |
| `page.waitForDownload(options)` | A download to begin. | Yes | Yes |
| `page.waitForConsoleMessage(options)` | A matching browser-console message. | Yes | Yes |
| `page.waitForFileChooser(options)` | A file chooser to open. | Yes | Yes |
| `page.waitForFunction(fn, arg, options)` | A JavaScript condition in the page to become truthy. | Yes | Yes |
| `page.waitForRequest(urlOrPredicate, options)` | A matching network request. | Yes | Yes |
| `page.waitForResponse(urlOrPredicate, options)` | A matching network response. | Yes | Yes |
| `page.waitForTimeout(ms)` | A fixed number of milliseconds. Usually avoid; wait for a real condition instead. | Yes | Yes |

For events caused by an action, start waiting **before** the action so the event is not missed:

```js
const downloadPromise = page.waitForEvent("download");
await page.getByRole("button", { name: "Download" }).click();
const download = await downloadPromise;
```

## Read or run JavaScript in the browser

| Method | ELI5: what it does | Returns a Promise? | `await`? |
|:--|:--|:--:|:--:|
| `page.evaluate(fn, arg)` | Runs JavaScript in the page and gives back its result. | Yes | Yes |
| `page.evaluateHandle(fn, arg)` | Runs JavaScript and gives back a handle to a browser object. | Yes | Yes |
| `page.addInitScript(fn, arg)` | Arranges for a script to run when the page starts or navigates. | Yes | Yes |
| `page.addScriptTag(options)` | Adds a JavaScript file or code snippet to the page. | Yes | Yes |
| `page.addStyleTag(options)` | Adds CSS to the page. | Yes | Yes |
| `page.exposeFunction(name, fn)` | Lets page JavaScript call a Node.js function. | Yes | Yes |
| `page.exposeBinding(name, fn)` | Exposes a Node.js callback to the page, with extra call details. | Yes | Yes |
| `page.ariaSnapshot(options)` | Reads an accessibility-tree snapshot as text. | Yes | Yes |
| `page.ariaSnapshotJSON(options)` | Reads an accessibility-tree snapshot as JSON. | Yes | Yes |

## Network, appearance, and diagnostics

| Method | ELI5: what it does | Returns a Promise? | `await`? |
|:--|:--|:--:|:--:|
| `page.route(url, handler, options)` | Intercepts matching network requests so a test can change or mock them. | Yes | Yes |
| `page.routeFromHAR(har, options)` | Replays or records requests using a HAR archive. | Yes | Yes |
| `page.routeWebSocket(url, handler)` | Intercepts matching WebSocket connections. | Yes | Yes |
| `page.unroute(url, handler)` | Removes a previously registered route handler. | Yes | Yes |
| `page.unrouteAll(options)` | Removes all route handlers from this page. | Yes | Yes |
| `page.setExtraHTTPHeaders(headers)` | Adds headers to requests from this page. | Yes | Yes |
| `page.setDefaultTimeout(ms)` | Sets the default timeout for page actions and waits. | No | No |
| `page.setDefaultNavigationTimeout(ms)` | Sets the default timeout for navigation. | No | No |
| `page.setViewportSize(size)` | Changes the visible page area (like resizing the browser window). | Yes | Yes |
| `page.emulateMedia(options)` | Pretends the device has a media preference, such as dark mode or print. | Yes | Yes |
| `page.screenshot(options)` | Takes a screenshot. | Yes | Yes |
| `page.pdf(options)` | Makes a PDF of the page (Chromium). | Yes | Yes |
| `page.bringToFront()` | Brings this tab to the front. | Yes | Yes |
| `page.pause()` | Pauses execution for interactive debugging. | Yes | Yes |
| `page.requestGC()` | Asks the page to run garbage collection; mainly useful in specialized tests. | Yes | Yes |
| `page.consoleMessages()` | Gets the captured browser-console messages, where supported. | Yes | Yes |
| `page.clearConsoleMessages()` | Clears captured console messages, where supported. | Yes | Yes |
| `page.pageErrors()` | Gets captured uncaught page errors, where supported. | Yes | Yes |
| `page.clearPageErrors()` | Clears captured page errors, where supported. | Yes | Yes |
| `page.requests()` | Gets recently issued requests, where supported. | Yes | Yes |
| `page.addLocatorHandler(locator, handler, options)` | Sets up a handler for an unexpected overlay that blocks an action. | Yes | Yes |
| `page.removeLocatorHandler(locator)` | Removes a previously registered locator handler. | Yes | Yes |
| `page.hideHighlight()` | Hides Playwright's locator highlight, where supported. | Yes | Yes |
| `page.pickLocator(options)` | Opens the interactive locator picker, where supported. | Yes | Yes |
| `page.cancelPickLocator()` | Cancels the locator picker, where supported. | Yes | Yes |
| `page.removeAllListeners(event)` | Removes event listeners from this page. | Yes | Yes |

## Methods that still exist but are discouraged

These old selector/evaluation methods are included because they may appear in older tutorials or in your installed version. Prefer Locators for actions and reads.

| Method | ELI5 | Returns a Promise? | `await`? |
|:--|:--|:--:|:--:|
| `page.$(selector)` | Finds one element and returns an element handle, or `null`. Use `page.locator()`. | Yes | Yes |
| `page.$$(selector)` | Finds all matching element handles. Use `page.locator()` instead. | Yes | Yes |
| `page.$eval(selector, fn)` | Finds one element and runs a function on it. Use `locator.evaluate()`. | Yes | Yes |
| `page.$$eval(selector, fn)` | Finds all elements and runs a function on them. Use `locator.evaluateAll()`. | Yes | Yes |
| `page.querySelector(selector)` | Older single-element query API. Use `page.locator()`. | Yes | Yes |
| `page.querySelectorAll(selector)` | Older all-elements query API. Use `page.locator()`. | Yes | Yes |
| `page.evalOnSelector(selector, fn)` | Runs a function on a matching element without Locator action checks. Use `locator.evaluate()`. | Yes | Yes |
| `page.evalOnSelectorAll(selector, fn)` | Runs a function on all matching elements. Use `locator.evaluateAll()`. | Yes | Yes |
| `page.waitForSelector(selector)` | Waits for a selector to appear/disappear. Prefer Locator assertions or actions, which auto-wait. | Yes | Yes |
| `page.waitForNavigation(options)` | Waits for navigation. Often racy; prefer `waitForURL()` or wait for a specific event. | Yes | Yes |

## Events: listen now, or wait?

`page.on(...)` registers a listener and returns immediately. `page.waitForEvent(...)` returns a Promise for one future event.

| Example | Returns a Promise? | `await`? | ELI5 |
|:--|:--:|:--:|:--|
| `page.on("load", handler)` | No | No | “When load happens, run this callback.” |
| `page.once("dialog", handler)` | No | No | Run a callback the next time this event happens. |
| `page.off("load", handler)` | No | No | Stop listening to this callback. |
| `page.removeListener("load", handler)` | No | No | Another way to stop listening to this callback. |
| `page.waitForEvent("popup")` | Yes | Yes | “Pause here until a popup appears.” |
| `page.onceDialog()` | Yes, where available | Yes | Wait for the next dialog and get it back. |

## Useful properties (not functions)

Properties are values hanging off `page`; you do not call them with `()` and do not `await` the property itself. Availability depends on browser and Playwright version.

| Property | What it gives you |
|:--|:--|
| `page.keyboard` | Keyboard controls for this page. |
| `page.mouse` | Mouse controls for this page. |
| `page.touchscreen` | Touch controls for this page. |
| `page.clock` | Controls the page's clock for time-related tests. |
| `page.request` | An API request context associated with the page. Its methods may return Promises. |
| `page.coverage` | JavaScript/CSS coverage tools, where supported. |
| `page.screencast` | Screencast controls, where supported. |
| `page.localStorage` / `page.sessionStorage` | Storage helpers, where supported. |
| `page.webmcp` | WebMCP controls, where supported. |

## Quick rule to remember

```text
Find a Locator      -> usually no await
Act on the browser  -> usually await
Read browser state  -> check the API; often await
Read a simple value -> often no await (for example page.url())
```

When unsure, hover the method in VS Code or check the official method's **Returns** section. If its type is `Promise<...>`, await it when you need its result or need the operation to finish before the next step.
