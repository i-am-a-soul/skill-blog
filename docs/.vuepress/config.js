const { getHtmlSidebar } = require('../html/articles.js')
const { getCssSidebar } = require('../css/articles.js')
const { getJsSidebar } = require('../js/articles.js')
const { getTsSidebar } = require('../ts/articles.js')
const { getFrontendFrameworkSidebar } = require('../frontend_framework/articles.js')
const { getFrontendEngineering } = require('../frontend_engineering/article.js')
const { getBackendSidebar } = require('../backend/articles.js')
const { getAlgoSidebar } = require('../algo/articles.js')
const { getOthersSidebar } = require('../others/articles.js')
const moment = require('moment')

moment.locale('zh-cn')
module.exports = {
    title: 'Skill Blog',
    description: 'Skill Blog',
	base: '/skill-blog/',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.png' }],
    ],
    plugins: [[
        '@vuepress/last-updated',
        {
            transformer: (timestamp) => {
                return moment(timestamp).format('YYYY年MM月DD日 HH时mm分')
            },
        },
    ], [
        '@vuepress/medium-zoom',
    ], [
		'@vuepress/back-to-top',
	], [
		'@vuepress/search',
		{
			searchMaxSuggestions: 10,
		},
	]],
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        logo: '/img/logo.png',
        nav: [{
            text: 'HTML',
            link: '/html/',
        }, {
            text: 'CSS',
            link: '/css/',
        }, {
            text: 'JS',
            link: '/js/',
        }, {
            text: 'TS',
            link: '/ts/',
        }, {
            text: '框架',
            link: '/frontend_framework/',
        }, {
            text: '前端工程化',
            link: '/frontend_engineering/',
        }, {
            text: '后端',
            link: '/backend/',
        }, {
            text: '算法（面试）',
            link: '/algo/',
        }, {
            text: '其他',
            link: '/others/'
        }, {
            text: '算法（竞赛）',
            link: 'https://i-am-a-soul.github.io/algorithm-blog/',
        }, {
            text: 'Github',
            link: 'https://github.com/i-am-a-soul',
        }],
        sidebar: {
            '/html/': getHtmlSidebar(),
            '/css/': getCssSidebar(),
            '/js/': getJsSidebar(),
            '/ts/': getTsSidebar(),
            '/frontend_framework/': getFrontendFrameworkSidebar(),
            '/frontend_engineering/': getFrontendEngineering(),
            '/backend/': getBackendSidebar(),
            '/algo/': getAlgoSidebar(),
            '/others/': getOthersSidebar(),
        },
        sidebarDepth: 2,
        lastUpdated: '最后修改于',
    },
}