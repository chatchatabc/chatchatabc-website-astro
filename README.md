# Welcome to [ChatChatABC Website!](https://jobs.davao.page)

This is project is built with Astro jamstack as its foundation. Purpose of this project is develop a website for ChatChatABC, providing fast and great experience for the users around the globe!

# 🤓 Tech Stack

In this section you'll see the list of tools and technologies that was used to develop this project.

- [**`Astro`**](https://docs.astro.build/en/getting-started/): Main jamstack that is used to develop the website
- MDX ([**`@astro/mdx`**](https://docs.astro.build/en/guides/integrations-guide/mdx/)): This tool is used to utilize .mdx files within this project.
- Svelte ([**`@astro/svelte`**](https://docs.astro.build/en/guides/integrations-guide/svelte/)): This framework is used to develop some reactive components instead of using ReactJS. The resources of this framework is much more lighter and is able to run on older browsers.
- TailwindCSS ([**`@astro/tailwind`**](https://docs.astro.build/en/guides/integrations-guide/tailwind/)): asd
- [**`astro-icon`**](https://github.com/natemoo-re/astro-icon#readme): This CSS framework is used to assist with the styling of the website on the frontend.
- [**`astro-imagetools`**](https://github.com/RafidMuhymin/astro-imagetools#readme): This tool is used to optimize the loading performance of images within the project.

# 👾 Project Structure

In this section you'll see the most important information that will help you understand most parts of the project.

```
/
├───public
│   ├───images
│   │   └───...
│   ├───logo
│   │   └───...
│   └───_headers
└───src
    ├───components
    │   ├───home
    │   │   └───...
    │   ├───navbar
    │   │   └───...
    │   ├───widgets
    │   │   └───...
    │   └───...
    ├───helpers
    │   └───commonUtils.ts
    ├───layouts
    │   ├───Layout.astro
    │   └───NewsLayout.astro
    ├───pages
    │   ├───blogs
    │   │   └───...
    │   └───index.astro
    └───styles
        └───markdown.css
```

## Definitions

Within this part, you'll be able to see more details of the project structure that is shown above.

**public**

- **`images:`** Used to store all the images that will be used for the development of Davao Page.
- **`logo:`** Used to store the logo of the Davao Page, so that it will be separated from the main image folder.
- **`_headers:`** Used to configure custom headers for the responses of Cloudflare Pages to the user's browser.

**src**

- **components**
  - **`home:`** Used to store small components that are used in homepage.
  - **`navbar:`** Used to store small components that are used in navbar.
  - **`widgets:`** Used to store small reusable components such as cards, modal, etc.
- **helpers**
  - **`commonUtils.ts:`** Used to store reusable functions / utilities to help with the development.
- **layouts**
  - **`Layout.astro:`** Used as the main foundation template for generating the pages in ChatChatABC Website.
  - **`NewsLayout.astro:`** Used as the layout template for the blogs page in ChatChatABC Website.
- **pages**
  - **`blogs:`** Contains all pages for the blogs, such as blogs page and blogs list.
  - **`index.astro:`** Homepage of ChatChatABC Website.
- **styles:** Utilize to store independent css styles for a specific use case or component.
  - **`markdown.css:`** this is used to style the rendered contents that comes from the markdown files. The css style is based from the [beautiful-markdown.css](https://github.com/bndp/beautiful-markdown/blob/master/src/beautiful-markdown.css).

# 😎 Deployment

In this section you'll know the important information that is used for the deployment of this project.

We used the services of Cloudflare, such as Cloudflare Pages and Wrangler, to deploy our production build on the internet. To know more about their functionalities, you can visit their respective documentation on the link provided below.

- **Cloudflare**: https://developers.cloudflare.com
- **Cloudflare Pages**: https://developers.cloudflare.com/pages/
- **Wrangler**:https://developers.cloudflare.com/workers/wrangler/

# 🤖 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

# 👀 Want to learn more?

Feel free to contact [BoJoNVi](https://github.com/BoJoNVi) (me) through DingTalk or visit me at the workplace to have a thorough discussion about this project.
