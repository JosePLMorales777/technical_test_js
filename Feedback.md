# Feedback - Nidiro
By Enrique Díaz - [@iamenrique](https://github.com/iamenrique)

# Good ⭐️
1. User-friendly UI to demonstrate the requested challenge.
2. Usage of JSDocs.
3. 

# Things that can be improved 👈
1. A project-level stylesheet is used (`my-style.css`) but inline styles are used as well (at `index.html @ LOC 14`).
   1. **Change:** It'd be a better idea to place the inline width in the stylesheet.
   1. **Benefit:** Easier to keep maintain styles if centralized. Prevent CSS specificity troubles.
1. Similar suggestion for the JavaScript. You use an inline JS block and a JS file.
   1. **Change:** Either move all to a JS file or keep all blocks inline (not recommended though).
   1. **Benefits:** Easier to identify the execution order (which function/logic runs first).
1. Rely on [IIFEs](https://developer.mozilla.org/en-US/docs/Glossary/IIFE).
2. Create your projects as npm projects/packages. Can be achieved by simply running `npm init` in your source root folder. I did that for you in this branch.
   3. **Benefits:** Add scripts to run your project. Define the dependencies of your project (if any). Let npm integrate other dependencies (e.g. Bootstrap) and keep track of versions.
3. Include a .gitignore file. Some IDEs and operating systems create temporal/hidden files, and should not alter your actual codebase repository. Also created one very basic for you.
1. Be explicit in your naming convention. `verifArrNums()` -> `verifyArrayNumbers()`. No need to abbreviate, makes code hard to read. This applies also to variable names.
2. Leverage `const` and `let`. In fact, `var` could be NEVER used. If you are not careful when using `var` you might declare unexpected stuffs, so I always recommend using `let` instead. 
3. Function `numEnArreglo` returns `0` in 2 cases: number is found in first position OR not found at all. This looks like a logic error.
