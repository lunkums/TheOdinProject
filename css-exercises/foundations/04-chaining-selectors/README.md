# Chaining Selectors

Credits for the images in this exercise go to [Katho Mutodo](https://www.pexels.com/@photobykatho?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) and [Andrea Piacquadio](https://www.pexels.com/@olly?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels).

With this exercise, we've provided you a completed HTML file, so you will only have to edit the CSS file. For this exercise, it's more important to understand how chaining different selectors works than how to actually add the attributes.

We have two images for you to style, each with two class names, where one of the class names is shared. The goal here is to chain the selectors for both elements, so that each have a unique style applied, despite using a shared class selector. For example, you want an element that has both X and Y to have one set of styles, while an element with X and Z has a completely different set of styles. We included the original images as well, so that you can see how the styles you will be adding look in comparison, so do not add any styles to them.

The properties you need to add to each element are:

* Make the element with both the `avatar` and `proportioned` classes 300 pixels wide, then give it a height so that it retains its original square proportions (don't hardcode in a pixel value for the height!).
* Make the element with both the `avatar` and `distorted` classes 200 pixels wide, then make its height twice as big as its width (here you should hardcode in a pixel value).

## Desired Outcome
![desired outcome](./desired-outcome.png)

### Self Check
- Did you properly chain class selectors for each rule?
- Does the `proportioned` image retain its original square proportions?
- Does the `distorted` image end up looking squished and, well, distorted?
