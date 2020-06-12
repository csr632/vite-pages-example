'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var ReactDOM = _interopDefault(require('react-dom/server'));
var reactRouterDom = require('react-router-dom');

var s = {"topBar":"topBar_67634860","logo":"logo_67634860","navs":"navs_67634860","navsList":"navsList_67634860","navsListItem":"navsListItem_67634860"};

const TopBar = ({ topNavs, logo }) => {
    return (React__default.createElement("div", { className: s.topBar },
        React__default.createElement("div", { className: s.logo }, logo),
        React__default.createElement("div", { className: s.navs },
            React__default.createElement("ul", { className: s.navsList }, topNavs === null || topNavs === void 0 ? void 0 : topNavs.map((item, index) => {
                let content;
                if ('href' in item) {
                    content = (React__default.createElement("a", { href: item.href, target: "_blank", className: s.navsListItem }, item.text));
                }
                else {
                    content = (React__default.createElement(reactRouterDom.Link, { to: item.path, className: s.navsListItem }, item.text));
                }
                return React__default.createElement("li", { key: index }, content);
            })))));
};

var s$1 = {"sideMenu":"sideMenu_1d7dff16"};

const SideMenu = ({ data }) => {
    return (React__default.createElement("ul", { className: s$1.sideMenu }, data.map((item, index) => {
        return (React__default.createElement("li", { key: index },
            React__default.createElement(reactRouterDom.Link, { to: item.path }, item.text)));
    })));
};

var s$2 = {"layout":"layout_70a6a448","body":"body_70a6a448","content":"content_70a6a448"};

const Layout = ({ Content, sideMenuData, topNavs, logo, applyMdStyle, path, }) => {
    return (React__default.createElement("div", { className: s$2.layout },
        React__default.createElement(TopBar, { topNavs: topNavs, logo: logo }),
        React__default.createElement("div", { className: s$2.body },
            React__default.createElement(SideMenu, { data: sideMenuData }),
            React__default.createElement("div", { className: s$2.content + (applyMdStyle ? ` markdown-body` : ''), key: path },
                React__default.createElement(Content, null)))));
};

const createRender = ({ topNavs, logo, sideMenuData, } = {}) => {
    return (pageData, pages) => {
        return (React__default.createElement(Layout, { Content: pageData.default, sideMenuData: sideMenuData !== null && sideMenuData !== void 0 ? sideMenuData : defaultMenu(pages), topNavs: topNavs !== null && topNavs !== void 0 ? topNavs : [], logo: logo, applyMdStyle: pageData.sourceType === 'md', path: pageData.path }));
    };
};
function defaultMenu(pages) {
    return Object.entries(pages)
        .sort((a, b) => {
        const [pathA, { staticData: staticDataA }] = a;
        const [pathB, { staticData: staticDataB }] = b;
        let ASort;
        let BSort;
        if (staticDataA.sort)
            ASort = Number(staticDataA.sort);
        else
            ASort = 1;
        if (staticDataB.sort)
            BSort = Number(staticDataB.sort);
        else
            BSort = 1;
        if (ASort !== BSort)
            return ASort - BSort;
        return pathA.localeCompare(pathB);
    })
        .map(([path, { staticData }]) => {
        return {
            path,
            text: path,
        };
    });
}

var _render = createRender({
  topNavs: [
    {
      text: "🎮 Example",
      href: "https://github.com/csr632/vite-pages-example"
    },
    {
      text: "⭐ Github",
      href: "https://github.com/vitejs/vite-plugin-react-pages"
    }
  ],
  logo: "Vite Pages React"
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = React__default.createContext({});
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = React__default.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return React__default.createElement(React__default.Fragment, {}, children);
  }
};
var MDXCreateElement = React__default.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return React__default.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return React__default.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return React__default.createElement.apply(null, createElementArgArray);
  }

  return React__default.createElement.apply(null, args);
}

const layoutProps = {};
const MDXLayout = "wrapper";
function MDXContent({components, ...props}) {
  return createElement(MDXLayout, {
    ...layoutProps,
    ...props,
    components,
    mdxType: "MDXLayout"
  }, createElement("h1", null, `📘 vite-plugin-react-page`), createElement("p", null, createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/csr632/vite-plugin-react-pages"
    }
  }, `vite-plugin-react-page`), ` is a `, createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite"
    }
  }, `vite`), ` plugin for React. `, createElement("strong", {
    parentName: "p"
  }, `It is very suitable for document site. It is also a great React UI development environment`), ` (like `, createElement("a", {
    parentName: "p",
    ...{
      href: "https://storybook.js.org/"
    }
  }, `storybook`), `).`), createElement("ul", null, createElement("li", {
    parentName: "ul"
  }, createElement("strong", {
    parentName: "li"
  }, `Fantastic development experience`), `. Start the local development server in a blink, even when you have many pages. Hot module replacement works with React and Mdx, so you can get instant feedback when you edit the files. Big thanks to vite.`), createElement("li", {
    parentName: "ul"
  }, createElement("strong", {
    parentName: "li"
  }, `Filesystem based routing`), `. It is easy to create, locate and develop pages. You don't need to worry about routing configuration.`), createElement("li", {
    parentName: "ul"
  }, createElement("strong", {
    parentName: "li"
  }, `Support `, createElement("a", {
    parentName: "strong",
    ...{
      href: "https://mdxjs.com/"
    }
  }, `Mdx`)), `. You can write content with both "normal React" or `, createElement("a", {
    parentName: "li",
    ...{
      href: "https://mdxjs.com/"
    }
  }, `Mdx`), `. Normal Reactjs is flexible and composable. While Mdx is readable and easy to edit. You can choose the proper format for your task. These formats can import each other like normal esModules.`), createElement("li", {
    parentName: "ul"
  }, createElement("strong", {
    parentName: "li"
  }, `Simple but powerful theme customization`), `. With `, createElement("strong", {
    parentName: "li"
  }, `only one theme API`), `, you can customize anything on the page. It is easy to write a theme that is sharable and configurable. If you use typescript, your theme configuration code will get type-check and intelliSense.`), createElement("li", {
    parentName: "ul"
  }, createElement("strong", {
    parentName: "li"
  }, `Automatic code splitting based on pages`), `. Readers don't need to download the whole app, they only load page data as needed.`), createElement("li", {
    parentName: "ul"
  }, createElement("strong", {
    parentName: "li"
  }, `Support SSR out of the box`), `. Get even better user experience.`)), createElement("h2", null, `Getting stated`), createElement("ol", null, createElement("li", {
    parentName: "ol"
  }, `clone `, createElement("a", {
    parentName: "li",
    ...{
      href: "https://github.com/csr632/vite-pages-example"
    }
  }, `this repo`)), createElement("li", {
    parentName: "ol"
  }, createElement("inlineCode", {
    parentName: "li"
  }, `npm install`)), createElement("li", {
    parentName: "ol"
  }, createElement("inlineCode", {
    parentName: "li"
  }, `npm run dev`), ` and play with the local dev envirenment.`), createElement("li", {
    parentName: "ol"
  }, createElement("inlineCode", {
    parentName: "li"
  }, `npm run build`), ` and serve the `, createElement("inlineCode", {
    parentName: "li"
  }, `dist`), `.`), createElement("li", {
    parentName: "ol"
  }, createElement("inlineCode", {
    parentName: "li"
  }, `npm run ssr`), ` and serve the `, createElement("inlineCode", {
    parentName: "li"
  }, `dist`), `. You can disable javascript in your browser, to verify if it can still render.`)));
}
MDXContent.isMDXComponent = true;

var $ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': MDXContent
});

var page0 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  pageData: $,
  renderPage: _render
});

const layoutProps$1 = {};
const MDXLayout$1 = "wrapper";
function MDXContent$1({components, ...props}) {
  return createElement(MDXLayout$1, {
    ...layoutProps$1,
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
  }, `The value type of static data is limited (string or simple object/array); The value of runtime data can be javascript value (.e.g a React component).`)), createElement("h2", null, `Where to consume these data`), createElement("p", null, `As stated in the `, createElement(reactRouterDom.Link, {
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
`)), createElement("h2", null, `vite-pages core doesn't care about your page data`), createElement("p", null, `vite-pages itself doesn't care about your page data structure. How to interpret the page data, is totally decided by `, createElement(reactRouterDom.Link, {
    to: "/theme",
    mdxType: "Link"
  }, `your theme`), `. This design make the vite-pages core more "simple" and make themes more powerful.`), createElement("p", null, `Most themes ask users to `, createElement("inlineCode", {
    parentName: "p"
  }, `export default`), ` a React component from page files. But that is not a requirement from vite-pages core.`), createElement("p", null, `If you are a theme user, you should read the doc of your theme to learn what data should be exposed by your pages.`));
}
MDXContent$1.isMDXComponent = true;

var pageData$ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': MDXContent$1
});

var page1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  pageData: pageData$,
  renderPage: _render
});

const layoutProps$2 = {};
const MDXLayout$2 = "wrapper";
function MDXContent$2({components, ...props}) {
  return createElement(MDXLayout$2, {
    ...layoutProps$2,
    ...props,
    components,
    mdxType: "MDXLayout"
  }, createElement("h1", null, `Pages`), createElement("p", null, `vite-pages use filesystem based routing. You can create a page by simply creating a file: `, createElement("inlineCode", {
    parentName: "p"
  }, `page-name$.tsx`), `. Notice the `, createElement("inlineCode", {
    parentName: "p"
  }, `$`), ` `, createElement("strong", {
    parentName: "p"
  }, `at the end of the filename`), `. vite-pages recognizes it and know it is a page file.`), createElement("p", null, `If the filename is `, createElement("inlineCode", {
    parentName: "p"
  }, `index$.tsx`), `, the page url path will be the path of the directory.`), createElement("blockquote", null, createElement("p", {
    parentName: "blockquote"
  }, `All file extensions `, createElement("inlineCode", {
    parentName: "p"
  }, `.ts|.tsx|.js|.jsx|.md|.mdx`), ` works, as long as `, createElement("inlineCode", {
    parentName: "p"
  }, `$`), ` is the last character before the extension.`)), createElement("h2", null, `Examples`), createElement("table", null, createElement("thead", {
    parentName: "table"
  }, createElement("tr", {
    parentName: "thead"
  }, createElement("th", {
    parentName: "tr",
    ...{
      align: null
    }
  }, `file path`), createElement("th", {
    parentName: "tr",
    ...{
      align: null
    }
  }, `page url path`))), createElement("tbody", {
    parentName: "table"
  }, createElement("tr", {
    parentName: "tbody"
  }, createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `index$.tsx`)), createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `/`))), createElement("tr", {
    parentName: "tbody"
  }, createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `$.tsx`), ` (has same effect as `, createElement("inlineCode", {
    parentName: "td"
  }, `index$.tsx`), `)`), createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `/`))), createElement("tr", {
    parentName: "tbody"
  }, createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `page-one$.tsx`)), createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `/page-one`))), createElement("tr", {
    parentName: "tbody"
  }, createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `page-two$.md`)), createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `/page-two`))), createElement("tr", {
    parentName: "tbody"
  }, createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `dir-name/index$.jsx`)), createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `/dir-name`))), createElement("tr", {
    parentName: "tbody"
  }, createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `dir-name/page-three$.mdx`)), createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `/dir-name/page-three`))))));
}
MDXContent$2.isMDXComponent = true;

var pages$ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': MDXContent$2
});

var page2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  pageData: pages$,
  renderPage: _render
});

const layoutProps$3 = {};
const MDXLayout$3 = "wrapper";
function MDXContent$3({components, ...props}) {
  return createElement(MDXLayout$3, {
    ...layoutProps$3,
    ...props,
    components,
    mdxType: "MDXLayout"
  }, createElement("h1", null, `Theme customization`), createElement("p", null, `vite-pages provides only one theme API: `, createElement("inlineCode", {
    parentName: "p"
  }, `_render.tsx`), `. It should export a `, createElement("strong", {
    parentName: "p"
  }, `render function`), `: `, createElement("inlineCode", {
    parentName: "p"
  }, `(pageData: any, pages: IPages) => React.ReactElement`), `. This API is so simple, but powerful.`), createElement("blockquote", null, createElement("p", {
    parentName: "blockquote"
  }, `The render function should be pure.`)), createElement("p", null, `For example:`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `import React from 'react'
import Layout from '../Layout'
import type { IRenderPage } from 'vite-plugin-react-pages/client'

const render: IRenderPage = (pageData, pages) => {
  const { default: PageComponent } = pageData
  return <Layout Content={PageComponent} pages={pages} />
}
export default render
`)), createElement("p", null, `You will learn about the parameters of the render function in the `, createElement(reactRouterDom.Link, {
    to: "/page-data",
    mdxType: "Link"
  }, `page-data doc`), `.`), createElement("p", null, `You can customize your theme in the Layout component. You can also use a Layout component (or render function) from a npm package.`), createElement("h2", null, `Nearest theme config wins`), createElement("p", null, `You can have multiple `, createElement("inlineCode", {
    parentName: "p"
  }, `_render.tsx`), ` in the pages directory. For each page file, vite-pages will find-up the nearest `, createElement("inlineCode", {
    parentName: "p"
  }, `_render.tsx`), `. And use it to render the page layout.`), createElement("h2", null, `Suggestions`), createElement("h3", null, `To theme providers: make your theme easier to use`), createElement("p", null, `We encourage theme providers to export your theme as `, createElement("strong", {
    parentName: "p"
  }, `a higher order function`), ` that return `, createElement("inlineCode", {
    parentName: "p"
  }, `(pageData: any, pages: IPages) => React.ReactElement`), `, to make it more easier to use.`), createElement("p", null, `For example, the theme provider can export theme as this function:`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `import React from 'react'
import Layout from '../Layout'
import type { IRenderPage } from 'vite-plugin-react-pages/client'

export const createTheme = (sideMenuData): IRenderPage => {
  // return a render funtion
  return (pageData, pages) => {
    return (
      <Layout
        Content={pageData.default}
        sideMenuData={sideMenuData ?? getDefaultMenuData(pages)}
      />
    )
  }
}
`)), createElement("p", null, `Theme consumer can use it multiple times to make different sideMenu in different pages:`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `// Configure sideMenu for \`/guides/*\` in \`/guides/_render.tsx\`:
import createTheme from 'theme-pkg'
export default createTheme([
  { path: '/guides/guide1', label: 'guide1' },
  { path: '/guides/guide2', label: 'guide1' },
])

// Configure sideMenu for \`/references/*\` in \`/references/_render.tsx\`:
import createTheme from 'theme-pkg'
export default createTheme([
  { path: '/references/ref1', label: 'ref1' },
  { path: '/references/ref2', label: 'ref2' },
])
`)), createElement("p", null, `As you can see, the theme is easier to use because `, createElement("strong", {
    parentName: "p"
  }, `consumers don't need to know about the `, createElement("inlineCode", {
    parentName: "strong"
  }, `_render.tsx`), ` API`), `. For this reason, we encourage theme providers to export config function like the `, createElement("inlineCode", {
    parentName: "p"
  }, `createTheme`), ` above.`), createElement("h3", null, `To theme consumers: config composition is just function composition`), createElement("p", null, `If your are a theme consumer, you can also create higher order functions to reuse config. For example, given the `, createElement("inlineCode", {
    parentName: "p"
  }, `createTheme`), ` above, theme consumers can create this function:`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `// provide some config that applied to whole site
// \`/with-site-config.tsx\`:
import createTheme from 'theme-pkg'
export default (pageMenu) =>
  createTheme([{ path: '/site-index', label: 'index' }, ...pageMenu])
// the "index menu item" is a site-wise config

// add some config only applied to \`/guides/*\`
// \`/guides/_render.tsx\`:
import withSiteConfig from '../with-site-config'
export default withSiteConfig([
  { path: '/guides/guide1', label: 'guide1' },
  { path: '/guides/guide2', label: 'guide1' },
])

// add some config only applied to \`/references/*\`
// \`/references/_render.tsx\`:
import withSiteConfig from '../with-site-config'
export default withSiteConfig([
  { path: '/references/ref1', label: 'ref1' },
  { path: '/references/ref2', label: 'ref2' },
])
`)), createElement("p", null, createElement("strong", {
    parentName: "p"
  }, `Config composition is just function composition`), `. There is no magic here. They are just simple import/export and function composition. vite-pages doesn't care how you get the render function, as long as you export a render function in `, createElement("inlineCode", {
    parentName: "p"
  }, `_render.tsx`), `.`), createElement("h3", null, `Why design this config API?`), createElement("h4", null, `Releases the power of Typescript`), createElement("p", null, `Users can get Typescript type-check and intelliSense when they are writing these kind of config code. In comparison, `, createElement("strong", {
    parentName: "p"
  }, `most frameworks out there can't utilize the power of Typescript, because their config is too "dynamic" to be type-checked`), `.`), createElement("h4", null, `Benefit from code splitting`), createElement("p", null, `What's better, this way of config can greatly benefit from code splitting. For example, with the following site structure:`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `// \`/guides/_render.tsx\`:
import createTheme1 from 'big-theme-1'
export default createTheme1()

// \`/references/_render.tsx\`:
import createTheme2 from 'big-theme-2'
export default createTheme2()
`)), createElement("p", null, `When a reader visits `, createElement("inlineCode", {
    parentName: "p"
  }, `/guides/guide1`), `, he/she will only download the code of `, createElement("inlineCode", {
    parentName: "p"
  }, `big-theme-1`), `, while `, createElement("inlineCode", {
    parentName: "p"
  }, `big-theme-2`), ` will not be downloaded.`), createElement("h2", null, `Caveat`), createElement("p", null, `React will re-mount the component if the vdom tree hierarchy changes (.e.g `, createElement("inlineCode", {
    parentName: "p"
  }, `<Layout />`), ` -> `, createElement("inlineCode", {
    parentName: "p"
  }, `<div><Layout /></div>`), `). If you want to retain the Layout component (.e.g so that the SideMenu scroll state won't get reset), theme should render the Layout component in the "same position".`), createElement("p", null, `The props of the component can change as you like and React will not re-mount it. Theme should take advantage of this property to make Layout behave differently across different pages.`));
}
MDXContent$3.isMDXComponent = true;

var theme$ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': MDXContent$3
});

var page3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  pageData: theme$,
  renderPage: _render
});

const ssrData = {};
const pages = ssrData.pages = {};
pages["/"] = page0;
pages["/page-data"] = page1;
pages["/pages"] = page2;
pages["/theme"] = page3;

/**
 * dynamic import don't work in ssr
 * to work around that, in ssr, we pass all the data needed by App
 * with this ctx
 * so the App can render the page data directly
 * instead of render the loading state
 */
const ssrDataCtx = React.createContext(undefined);

const PageLoader = ({ pages, path }) => {
    var _a, _b;
    const { staticData: pageStaticData, _importFn } = pages[path];
    const ssrData = React.useContext(ssrDataCtx);
    const [loadState, setLoadState] = React.useState(() => {
        if (ssrData) {
            // we already have the data in ssr
            // don't need to dynamic load it
            return {
                type: 'loaded',
                pageLoaded: ssrData.pages[path],
            };
        }
        return {
            type: 'loading',
        };
    });
    React.useEffect(() => {
        _importFn()
            .then((pageLoaded) => {
            setLoadState({
                type: 'loaded',
                pageLoaded,
            });
        })
            .catch((error) => {
            setLoadState({
                type: 'error',
                error,
            });
            throw error;
        });
    }, [_importFn]);
    // TODO: let user or theme config renderLoading and renderError
    if (loadState.type === 'loading') {
        return React__default.createElement("p", null, "Loading...");
    }
    if (loadState.type === 'error') {
        return React__default.createElement("p", null,
            "Error: ", (_b = (_a = loadState === null || loadState === void 0 ? void 0 : loadState.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : 'no error message');
    }
    const { renderPage, pageData } = loadState.pageLoaded;
    const view = renderPage({
        ...pageStaticData,
        ...pageData,
        path,
    }, pages);
    return view;
};

const pages$1 = {};
pages$1["/"] = {
             _importFn: () => Promise.resolve().then(function () { return page0; }),
             staticData: {"sort":0,"sourceType":"md"},
         };
pages$1["/page-data"] = {
             _importFn: () => Promise.resolve().then(function () { return page1; }),
             staticData: {"sort":3,"sourceType":"md"},
         };
pages$1["/pages"] = {
             _importFn: () => Promise.resolve().then(function () { return page2; }),
             staticData: {"sort":1,"sourceType":"md"},
         };
pages$1["/theme"] = {
             _importFn: () => Promise.resolve().then(function () { return page3; }),
             staticData: {"sort":2,"sourceType":"md"},
         };

/// <reference types="vite/hmr" />
let routes = getRouteFromPagesData(pages$1);
const App = () => {
    return React__default.createElement(reactRouterDom.Switch, null, routes);
};
function getRouteFromPagesData(pages) {
    return Object.keys(pages).map((path) => {
        return (React__default.createElement(reactRouterDom.Route
        // avoid re-mount layout component
        // https://github.com/ReactTraining/react-router/issues/3928#issuecomment-284152397
        , { 
            // avoid re-mount layout component
            // https://github.com/ReactTraining/react-router/issues/3928#issuecomment-284152397
            key: "same", exact: true, path: path },
            React__default.createElement(PageLoader, { pages: pages, path: path })));
    });
}

function renderToString(url) {
    var _a;
    return ReactDOM.renderToString(React__default.createElement(React__default.StrictMode, null,
        React__default.createElement(reactRouterDom.StaticRouter, { basename: (_a = "/vite-pages-example/") === null || _a === void 0 ? void 0 : _a.replace(/\/$/, ''), location: url },
            React__default.createElement(ssrDataCtx.Provider, { value: ssrData },
                React__default.createElement(App, null)))));
}

exports.renderToString = renderToString;
exports.ssrData = ssrData;
