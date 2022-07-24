# TheOdinProject

For the visual repository with access to live web pages, use [GitHub pages](https://lunkums.github.io/TheOdinProject/).

The following repository contains my submissions for assignments in [The Odin Project](https://www.theodinproject.com/). Each section below includes a list of points that I've learned while studying it's corresponding section in the curriculum. If there is a project associated with a section, a link to my submission will be included in the heading. There is also a list of links to all my project submissions under the "Projects" section.

## Projects

- [Project: Recipes](./odin-recipes)
- [Project: Landing Page](./landing-page)
- [Project: Rock Paper Scissors](./rock-paper-scissors)

## HTML Foundations ([Project: Recipes](./odin-recipes))

- Google evaluates search terms in headers based on which rank of header is used (i.e. h1 more important than h2)
- Image tags should always include an "alt" attribute to improve accessibility
- Git commits should use an active voice (i.e. "Fix player collision bug" instead of "Fixed player collision bug") to match Git conventions

## CSS Foundations

- There are 5 types of selectors in CSS:
  - Universal (\*)
  - Class (.class-name)
  - ID (#idname)
  - Grouping (.class-name, #idname, div...)
  - Element/Type (div, ul, body, etc.)
- The CSS cascade is the most important concept of the language (hence, why it's part of the name) but also the hardest
  - Determines which styles are applied to any given element
- The Box Model:
  - Everything you see on a webpage is either part of a box or a box itself
- A box's size and its relationship to the content inside is determined by:
  - Padding (space between content and border)
  - Border (edge between padding and margin)
  - Margin (space between elements; margins have the ability to collapse or overlap between elements)

## Flexbox ([Project: Landing Page](./landing-page))

- How to use Flexbox:
  - Slap on a "display: flex;" and "flex-direction: column;" style
  - Call it a day
- Jokes aside, Flexbox is powerful but deceptively simple
- "display: flex;" is for flex containers, "flex: ...;" is for flex children
- Flexbox can be easily applied to lists for a simple navbar
- Making things stretch on the page is easy with "max-width: x%;" and "width: 100%"
  - This will force it to cover the specified percentage of the page horizontally
- Many predefined HTML tags have default margins which can screw with Flexbox
- Stretching images is hard but possible by specifying a max, min width and using "flex: auto;"
