import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Starter Kit",
  tagline: "The best starter kit for your Next.js App",
  favicon: "img/favicon.ico",
  organizationName: "eliasnau", // GitHub username
  projectName: "phantomjs", // repo name
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  url: "https://phantom.js.org",
  baseUrl: "/",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

          // editUrl: "https://github.com/NizarAbiZaher/nextradocs/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Starter Kit",
      logo: {
        alt: "Logo",
        src: "img/squircle.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/eliasnau/starter-kit",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Socials",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/eliasnau",
            },
            {
              label: "Portfolio",
              href: "https://eliasnau.dev", 
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Elias Nau. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
