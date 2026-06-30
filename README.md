This project is about building a **Homepage** website based on the Oding Project.  
This project is the last homework of **Advanced HTML and CSS Course**.  
Features are:
## Transition:
- transition with 4 kinds of transform: translate, scale, rotate and skew
- transition with opacity, background-color and box-shadow
## Animation:
- make the page move to it's place when page loadeds(like big company website)
## A11y:
1. Sematic HTML
```
<header> <main> <footer> <nav> <aside> <section>
```
2. Accessible Color
- use devtool: 'element picker' to make sure contrast ratio is fullfil *level AA*(at least 4.5:1 for normal text and 3:1 for large text).
3. Keyboard Naviation
- try use `tabindex = `  
- try use *focus style*
4. Meaningful text
links, Forms and Alternative text
5. other WAI-ARIA stuff
`aria-label = `, `aria-hidden = `
## Responsive Design
1. Natual Responsiveness
- the viewport meta tag
`<meta name='viewport' content="width=device-width, initial-scale=1">`  
- try avoid fixed width and height, can use `max-width` and `min-height` instead. 
- only define the width of img, keep the original aspect ratio. 
- leave the *main* part's heigh undefined, only define the *header* and *footer*.
2. Flex box and Grid
- flex box
`flex-wrap`
- gird
`min-max`, `auto-fill`
3. responsive images
- use `background-size` and `object-fit` to adjust img.
- set img with `srcset` and `size`
- set img wiht `<picture>`
4. Media query
- set reposnsive page
- try use `@container`
- try use other @-rules: `@import`, `@font-face`

