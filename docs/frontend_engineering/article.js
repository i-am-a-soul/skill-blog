module.exports = {
    getFrontendEngineering: () => [{
        title: '文章',
        children: [
            '',
			'/frontend_engineering/微前端.md',
        ],
    }, {
        title: 'Webpack',
        children: [
			'/frontend_engineering/webpack/知识点.md',
			'/frontend_engineering/webpack/module、chunk与bundle.md',
			'/frontend_engineering/webpack/publicPath.md',
			'/frontend_engineering/webpack/webpack模块化.md',
			'/frontend_engineering/webpack/拆包推荐配置.md',
        ],
    }, {
        title: 'Git',
        children: [
			'/frontend_engineering/git/知识点.md',
			'/frontend_engineering/git/分支管理流程.md',
        ],
    }, {
        title: '性能优化',
        children: [
			'/frontend_engineering/performance/知识点.md',
			'/frontend_engineering/performance/性能监控指标.md',
			'/frontend_engineering/performance/window.performance API.md',
			'/frontend_engineering/performance/性能优化方法.md',
        ],
	}, {
		title: '包管理工具',
		children: [
			'/frontend_engineering/npm/知识点.md',
		],
    }],
};