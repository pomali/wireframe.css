import { document, console } from "global";
import { storiesOf } from "@storybook/html";
import "../dist/main.css";

const loremIpsum = `
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
officia deserunt mollit anim id est laborum."
`;

storiesOf("Texts", module)
  .add("h1", () => "<h1>Hello World</h1>")
  .add("h2", () => "<h2>This is some text</h2>")
  .add("h3", () => "<h3>This is some text</h3>")
  .add("span", () => "<span>This is some text</span>")
  .add("paragraph", () => "<p>This is some text</p>")
  .add("text", () => "This is some text");

storiesOf("Input", module)
  .add("button", () => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerText = "Hello Button";
    button.addEventListener("click", e => console.log(e));
    return button;
  })
  .add("text", () => /*html*/ `<input value="interesting data"/>`)
  .add(
    "password",
    () => /*html*/ `<input value="secretpassword" type="password"/>`
  )
  .add("time", () => /*html*/ `<input value="18:00" type="time"/>`)
  .add("date", () => /*html*/ `<input value="2018-12-20" type="date"/>`)
  .add("submit", () => /*html*/ `<input type="submit" value="Input submit"/>`)
  .add(
    "input-button",
    () => /*html*/ `<input type="button" value="Input Button"/>`
  )
  .add("progress", () => /*html*/ `<progress value="22" max="100"></progress>`)
  .add(
    "input+datalist",
    () => /*html*/ `<input list="browsers">

  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>`
  );

storiesOf("Images", module)
  .add("img", () => "<img/>")
  .add("img with src", () => "<img src='https://picsum.photos/200/300'/>")
  .add("img with large src", () => "<img src='https://picsum.photos/800/600'/>")
  .add("figure", () => /*html*/ `<figure><img/></figure>`)
  .add(
    "figure with caption",
    () => /*html*/ `<figure><img/><figcaption>Caption</figcaption></figure>`
  );

storiesOf("Example Page", module)
  .add(
    "Text1",
    () => /*html*/ `
      <main>
      <h1>Header1</h1>
      <div>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
       consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
       cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est 
        laborum."<img />
      </div>
      </main>
    `
  )
  .add(
    "Text2",
    () => /*html*/ `
      <div>
      <h1>Header1</h1>
      <main>
      <p>
      ${loremIpsum}
      </p>

      <p>
      ${loremIpsum}
      </p>
      </main>
      </div>
    `
  )
  .add(
    "Form",
    () => /*html*/ `
      <div>
      <h1>Form Header</h1>
      <main>
      <p>
      ${loremIpsum}
      </p>

<form>
<label> TextInput<input value="interesting data"/></label>
<label> PasswordInput<input value="secretpassword"/></label>
<button>Button</button>
<input type="button" value="Input Button"/>
<input type="submit" value="Input submit"/>
</form>

      <p>
      ${loremIpsum}
      </p>
      </main>
      </div>
    `
  );

storiesOf("Lists", module)
  .add("ul", () => /*html*/ `<ul><li>one</li><li>two</li></ul>`)
  .add("ol", () => /*html*/ `<ol><li>one</li><li>two</li></ol>`)
  .add(
    "ol-ol",
    () => /*html*/ `<ol>
      <li>one</li>
      <li>two</li>
      <li>
        <ol><li>one</li><li>two</li></ol>
      </li>
      </ol>`
  );

storiesOf("Containers", module)
  .add("article", () => /*html*/ `<article>${loremIpsum}</article>`)
  .add(
    "article+h1",
    () => /*html*/ `<article><h1>Lorem Ipsum</h1>${loremIpsum}</article>`
  )
  .add("aside", () => /*html*/ `<aside>${loremIpsum}</aside>`)
  .add("details", () => /*html*/ `<details>${loremIpsum}</details>`)
  .add(
    "details+summary",
    () =>
      /*html*/ `<details> <summary>Lorem Ipsum</summary>${loremIpsum}</details>`
  )
  .add("footer", () => /*html*/ `<footer>${loremIpsum}</footer>`)
  .add("header", () => /*html*/ `<header>${loremIpsum}</header>`)
  .add("mark", () => /*html*/ `text <mark>marked text</mark> text`)
  .add("main", () => /*html*/ `<main>${loremIpsum}</main>`)
  .add("nav", () => /*html*/ `<nav>${loremIpsum}</nav>`)
  .add("section", () => /*html*/ `<section>${loremIpsum}</section>`)
  .add("summary", () => /*html*/ `<summary>${loremIpsum}</summary>`)
  .add("time", () => /*html*/ `<time>12:20</time>`)
  .add("dialog", () => /*html*/ `<dialog open>${loremIpsum}</dialog>`);
