import { L as Link } from './client.4464e5a6.js';
import { c as createElement } from './esm.50253d38.js';
export { _ as renderPage } from './esm.50253d38.js';

const layoutProps = {};
const MDXLayout = "wrapper";
function MDXContent({components, ...props}) {
  return createElement(MDXLayout, {
    ...layoutProps,
    ...props,
    components,
    mdxType: "MDXLayout"
  }, createElement("h1", null, `Page data`), createElement("h2", null, `Static page metadata`), createElement("p", null, `For `, createElement("inlineCode", {
    parentName: "p"
  }, `.tsx|.jsx`), ` pages, you can define static data with `, createElement("strong", {
    parentName: "p"
  }, `comment at the top of the file`), `.`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `/**
 * @title index page
 * @tags tag1,tag2
 */
`)), createElement("p", null, `This will be resolved into:`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-json"
    }
  }, `{ "title": "index page", "tags": "tag1,tag2" }
`)), createElement("p", null, `For `, createElement("inlineCode", {
    parentName: "p"
  }, `.md|.mdx`), ` pages, you can define static data with YAML front matter:`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-md"
    }
  }, `---
title: my page
tags:
  - tag1
  - tag2
---
`)), createElement("p", null, `This will be resolved into:`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-json"
    }
  }, `{ "title": "my page", "tags": ["tag1", "tag2"] }
`)), createElement("h2", null, `Runtime page data`), createElement("p", null, `Runtime page data is just anything you export from a page file.`), createElement("h2", null, `Difference`), createElement("p", null, `Both static data and runtime data will be passed to `, createElement("inlineCode", {
    parentName: "p"
  }, `_render.js`), `, so the theme can use them to render layout.`), createElement("p", null, `Difference:`), createElement("ul", null, createElement("li", {
    parentName: "ul"
  }, `Static data of `, createElement("strong", {
    parentName: "li"
  }, `all pages`), ` is loaded when the app bootstrap. So you should try to keep the static data small.`), createElement("li", {
    parentName: "ul"
  }, `Runtime data is only loaded when user navigate to that page.`), createElement("li", {
    parentName: "ul"
  }, `The value type of static data is limited (string or simple object/array); The value of runtime data can be javascript value (.e.g a React component).`)), createElement("h2", null, `Where to consume these data`), createElement("p", null, `As stated in the `, createElement(Link, {
    to: "/theme",
    mdxType: "Link"
  }, `theme doc`), `, `, createElement("inlineCode", {
    parentName: "p"
  }, `_render.tsx`), ` should export a `, createElement("strong", {
    parentName: "p"
  }, `render function`), ` with this type:`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-ts"
    }
  }, `type IRenderPage = (pageData: any, pages: IPages) => React.ReactElement
`)), createElement("p", null, `The `, createElement("inlineCode", {
    parentName: "p"
  }, `pageData`), ` will be:`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-ts"
    }
  }, `{
  ...pageStaticData, // static data of current page
  ...pageRuntimeData, // runtime data of current page
  path: '/page/path',
}
`)), createElement("p", null, `The `, createElement("inlineCode", {
    parentName: "p"
  }, `pages`), ` will be the `, createElement("strong", {
    parentName: "p"
  }, `static data of all pages`), `:`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-ts"
    }
  }, `interface IPages {
  [path: string]: {
    staticData: any
  }
}
`)), createElement("h2", null, `vite-pages core doesn't care about your page data`), createElement("p", null, `vite-pages itself doesn't care about your page data structure. How to interpret the page data, is totally decided by `, createElement(Link, {
    to: "/theme",
    mdxType: "Link"
  }, `your theme`), `. This design make the vite-pages core more "simple" and make themes more powerful.`), createElement("p", null, `Most themes ask users to `, createElement("inlineCode", {
    parentName: "p"
  }, `export default`), ` a React component from page files. But that is not a requirement from vite-pages core.`), createElement("p", null, `If you are a theme user, you should read the doc of your theme to learn what data should be exposed by your pages.`));
}
MDXContent.isMDXComponent = true;

var pageData$ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': MDXContent
});

export { pageData$ as pageData };
