import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { getHTMLSidebar } from "../html/articles.js";
import { getCSSSidebar } from "../css/articles.js";
import { getJSSidebar } from "../js/articles.js";
import { getTSSidebar } from "../ts/articles.js";
import { getFrontendFrameworkSidebar } from "../frontend_framework/articles.js";
import { getFrontendEngineeringSidebar } from "../frontend_engineering/article.js";
import { getBackendSidebar } from "../backend/articles.js";
import { getAlgoSidebar } from "../algo/articles.js";
import { getOthersSidebar } from "../others/articles.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Skill Blog",
  description: "Skill Blog",
  base: "/skill-blog/",
  head: [["link", { rel: "icon", href: "/skill-blog/img/favicon.png" }]],
  theme: defaultTheme({
    logo: "/img/logo.png",
    navbar: [
      {
        text: "HTML",
        link: "/html/",
      },
      {
        text: "CSS",
        link: "/css/",
      },
      {
        text: "JS",
        link: "/js/",
      },
      {
        text: "TS",
        link: "/ts/",
      },
      {
        text: "前端框架",
        link: "/frontend_framework/",
      },
      {
        text: "前端工程化",
        link: "/frontend_engineering/",
      },
      {
        text: "后端",
        link: "/backend/",
      },
      {
        text: "算法（面试）",
        link: "/algo/",
      },
      {
        text: "其他",
        link: "/others/",
      },
      {
        text: "算法（竞赛）",
        link: "https://i-am-a-soul.github.io/algorithm-blog/",
      },
      {
        text: "Github",
        link: "https://github.com/i-am-a-soul",
      },
    ],
    sidebar: {
      "/html/": getHTMLSidebar(),
      "/css/": getCSSSidebar(),
      "/js/": getJSSidebar(),
      "/ts/": getTSSidebar(),
      "/frontend_framework/": getFrontendFrameworkSidebar(),
      "/frontend_engineering/": getFrontendEngineeringSidebar(),
      "/backend/": getBackendSidebar(),
      "/algo/": getAlgoSidebar(),
      "/others/": getOthersSidebar(),
    },
    sidebarDepth: 2,
    contributors: false,
    lastUpdatedText: "最后修改于",
  }),
  plugins: [searchPlugin(), googleAnalyticsPlugin({ id: "G-9Y31V523F5" })],
});
