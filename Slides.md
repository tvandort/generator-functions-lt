---
transition: "none"
highlightTheme: "darkula"
---

Generators

<!-- I keep running into generators -->

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

<!-- do basic generator empty -->
<!-- add foo bar yield -->
<!-- next slide -->
<!--
    0:  empty with object with done result
    1:  basic with string return
    2:  show done
    3:  add console log between each
        to show function not completing by looking at console
    4:  show return completing done
-->
<!-- 1-complete.js if stuck -->

<!-- basic with infinite return -->
<!-- 2-complete.js if stuck -->

---

<!-- FYI -->
<span class="fragment">
    Formatting doesn't matter
</span>

<pre class="fragment">
    <code class="javascript">
        const fn = function* () {}
        const fn = function *() {}
        function fn     *        () {}
    </code>
</pre>
