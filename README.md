# wireframe.css

It's easy to create simple prototype with HTML but when you show it to client
they often get sidetracked by design instead of checking if all input fields are there.

## Usage

Link or import `dist/main.css` and that's it.

## Storybook

If you want to browse "components" aka HTML5 elements start

```
npm run storybook
```

## Development

We are using css-modules and webpack + postcss to compile them.
When you change css you have to run `npm run build` or while developing

```
npm run build -- --watch
```
