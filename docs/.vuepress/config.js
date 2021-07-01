const { getHtmlSidebar } = require('../html/articles.js')
const { getCssSidebar } = require('../css/articles.js')
const { getJsSidebar } = require('../js/articles.js')
const { getVueSidebar } = require('../vue/articles.js')
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
            text: 'Vue',
            link: '/vue/',
        }, {
            text: '算法（面试）',
            link: '/algo/',
        }, {
            text: '其他',
            link: '/others/'
        }, {
            text: 'Github',
            link: 'https://github.com/i-am-a-soul',
        }],
        sidebar: {
            '/html/': getHtmlSidebar(),
            '/css/': getCssSidebar(),
            '/js/': getJsSidebar(),
            '/vue/': getVueSidebar(),
            '/algo/': getAlgoSidebar(),
            '/others/': getOthersSidebar(),
        },
        sidebarDepth: 2,
        lastUpdated: '最后修改于',
    },
}