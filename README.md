# Welcome to [ChatChatABC Website!](https://jobs.davao.page)

## Tech Stack



## Project Structure

In this section you'll see the most important information that will help you understand most parts of the project.

```
/
├───.vscode
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
- **`styles:`** Utilize to store independent css styles for a specific use case or component.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Feel free to contact [BoJoNVi](https://github.com/BoJoNVi) (me) through DingTalk or visit me at the workplace to have a thorough discussion about this project.

https://github.com/bndp/beautiful-markdown/blob/master/src/beautiful-markdown.css
