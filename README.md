![CF](https://i.imgur.com/7v5ASc8.png)  Lab 10: Functional Programming
=======
[Code of Conduct](https://github.com/codefellows/code-of-conduct)

The concepts of functional programming have significantly shaped Computer Science from the early days.Today we'll a pply some "FP" concepts to the MVC Blog!

Today there are many TODO items, but they are (mostly) smaller bites.

## Submission Instructions

When you are finished with lab, follow these steps to submit your work. Create one Pull Request (aka: "PR") from your Forked repo to the CF repo with your changes, and you'll each submit that same PR link in Canvas.

1. Ensure that all your local changes are committed, and pushed to your origin repo.
1. Visit the origin repo on github.com, and ensure that all of your completed work has been merged to master via Pull Requests within your repo.
1. Create a new PR from your Fork to the CF repo and ensure the branches look correct.
1. Fill in the template based on the text box prompts:
  1. Write a good descriptive summary of your changes:
    1. Be sure to include how much time you spent on it, and who you worked with.
    1. Briefly reflect on and summarize your process.
1. When you create the PR, it will have a unique URL. Copy this link, share with your partner, and paste it into the assignment submission form in Canvas. Both the driver and the navigator will submit the same PR link.


## Learning Objectives

* Understand advantages of functional programming and reasons for its recent rise in popularity
* Correctly use** forEach, map, filter, reduce** functions to explore and modify a data set
* Construct modularity with IIFE patterns

---

## Resources  

- [MDN: forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN: map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN: filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN: reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

---

## Feature Tasks  

1. Let's make sure each one of our scripts are properly enclosed. Wrap the contents of article.js in an IIFE, just like articleView.js has been. Set up your IIFE so it receives a parameter to which it can attach behavior.  

1. For both `index.html` and `admin.html`, we'll want access to the `Article.all` data...but we'll have different view functions to set up each of those pages. Help complete the `fetchAll` function so that it calls a `next` parameter: a function to invoke when it's work is done.  

1. Ensure both the index page and the admin page call `fetchAll` in a way that properly triggers the appropriate page setup methods.

1. Use chained map/reduce calls to transform the data into what you need it to be.

#### Stretch Goals  

- What additional statistical analysis would be of interest to you with this data set? Code it up!

---

## Rubric  

Criteria | Pts
---|---
Meets all Assignment Reqs | 6
Uses idiomatic code style | 3
Follows proper Git workflow | 1
**Total** | **10**
