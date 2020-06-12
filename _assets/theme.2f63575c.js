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
`)), createElement("p", null, `You will learn about the parameters of the render function in the `, createElement(Link, {
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
MDXContent.isMDXComponent = true;

var theme$ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': MDXContent
});

export { theme$ as pageData };
