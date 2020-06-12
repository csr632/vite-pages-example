import { createRender } from 'vite-pages-theme-basic'

export default createRender({
  topNavs: [
    {
      text: '🎮 Example',
      href: 'https://github.com/csr632/vite-pages-example',
    },
    {
      text: '⭐ Github',
      href: 'https://github.com/vitejs/vite-plugin-react-pages',
    },
  ],
  logo: 'Vite Pages React',
})
