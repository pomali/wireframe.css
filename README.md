# wireframe.css

It's easy to create simple prototype with HTML but when you show it to client
they often get sidetracked by design instead of checking if all input fields are there.

## Installation

Just download `dist/main.css` or using npm
```sh
npm install wireframe.css
```

## Usage

Link or import `dist/main.css` and that's it.

For example in your `*.html`

```html
...
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="node_modules/wireframe.css/dist/main.css" />
</head>
...
```

or in `*.js`

```js
import "wireframe.css";
```


From this:
```html
<body>
  <main>
    <h1>Wireframe.css</h1>
    <article>
      <img />
      <img />
      <img />
      <img />
      <img />
      <p>
        text text some text
      </p>
    </article>
  </main>
</body>
```

You get this:
![screenshot](https://github.com/pomali/wireframe.css/raw/master/docs/screenshot.png)


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
