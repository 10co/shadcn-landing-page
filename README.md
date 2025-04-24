# shadcn-landing-page

A simple landing page starter template built with React 19, Vite 6, Tailwind CSS v4, and shadcn/ui.
Designed for easy deployment on any platform, without dependency on Next.js.

![](./public/og.jpg)

## Features

- **React 19:** Leverage the latest features of React.
- **Vite 6:** Fast development server and optimized builds.
- **Tailwind CSS v4:** Modern utility-first CSS framework (v4).
- **Shadcn/UI:** Beautifully designed and accessible UI components.
- **i18n:** Internationalization support via [i18next](https://www.i18next.com/).
- **Configuratable with AI:** Easy configure with AI
- **Customizable Theme:** Easily tweak the look and feel using [TweakCN](https://tweakcn.com/editor/theme).
- **Platform Agnostic:** Deploy anywhere (Cloudflare Pages, Vercel, Netlify, Docker, etc.).
- **Logo:** [favicon.io](https://favicon.io/logo-generator/)

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/10co/shadcn-landing2.git
    cd shadcn-landing2
    ```

2.  **Install dependencies:**
    (Ensure you have Node.js and pnpm installed)

    ```bash
    pnpm install
    ```

3.  **Customize configuration:**
    Modify the content and settings in the following files to match your project:

    ```
    src/config/config.en-US.tsx
    src/config/config.zh-CN.tsx
    // Adjust other configuration files as needed
    ```

4.  **Run the development server:**

    ```bash
    pnpm run dev
    ```

    Open your browser and navigate to `http://localhost:5173` (or the port specified in the output).

5.  **Build for production:**

    ```bash
    pnpm run build
    ```

    This will create an optimized production build in the `dist` directory.

## Inspiration

- [KaraBharat/shadcn-crm-dashboard](https://github.com/KaraBharat/shadcn-crm-dashboard)

## License

[MIT](https://opensource.org/licenses/MIT)
