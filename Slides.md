---
transition: "none"
highlightTheme: "darkula"
---

Generators

<!-- I occasionally run into generators and forget how they work and what they do -->

---

What is a generator?

<!-- What are they -->
<!-- Wikipedia says that -->

---

<!-- .slide: style="text-align: left;" -->

In computer science, a generator is a special routine that can be used to control the iteration behaviour of a loop.
<br />
<br />
[Wikipedia](http://tiny.cc/zv4azy)

<!-- A bit dense. I know what an iterator is but what does this mean? -->
<!-- So -->

---

Lets explore using JavaScript

---

What does it look like?

<!-- two empty functions -->
<!-- 1-complete.js -->

---

<!-- FYI -->

Formatting doesn't matter

<!-- Let's look at the default return values -->
<!-- 2-complete.js -->

---

<!-- .slide: style="text-align: left;" -->
<!-- TODO: get MDN link -->

Generator object's interface: [[MDN]]()

```js
{
    next: [Function], // Returns a value yielded by the yield expression.
    return: [Function], // Returns the given value and finishes the generator.
    throw: [Function] // Throws an error to a generator (also finishes the generator, unless caught from within that generator).
}
```

<!-- 3-complete.js -->

---

Calling next

---

<!-- .slide: style="text-align: left;" -->

```js
{
    value: undefined; // [?],
    done: [Boolean];
}
```

<!-- 4-complete.js -->

---

`yield` <!-- keyword -->

<!-- 5-complete.js -->

---

`return` <!-- keyword -->

<!-- marks as done-->
<!-- 6-complete.js -->

---

Keep state

<!-- 7-complete.js -->

<!-- this means you can do things like infinite generator-->
<!-- infinite loop but yield hands off execution -->

<!-- 8-complete.js -->

---

`yield` pt. 2

<!-- infinity w/ skip -->
<!-- 9-complete.js -->

---

What is this useful for?

<!-- I don't know. Or rather I'm not sure what you would want to use these for in everyday coding. -->
<!-- But they are -->

---

How &nbsp; `async` &nbsp; & &nbsp; `await` &nbsp; are implemented

<!-- TODO: get link -->

---

Before &nbsp; `async` &nbsp; / &nbsp;`await`

---

<!-- koa example-->
<!-- TODO: look at koa -->

```js
```

---

<!-- equivalent async await? -->
<!-- TODO: get example -->

```js
```

---
