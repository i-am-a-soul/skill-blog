module.exports = {
    getFrontendFrameworkSidebar: () => [{
		title: '公共',
		children: [
			'',
			'/frontend_framework/前端路由.md',
		],
	}, {
		title: 'Vue',
		children: [
			'/frontend_framework/vue/知识点.md',
			'/frontend_framework/vue/组件间通信.md',
			'/frontend_framework/vue/render.md',
			'/frontend_framework/vue/生命周期.md',
		],
	}, {
		title: 'React',
		children: [
			'/frontend_framework/react/知识点.md',
			'/frontend_framework/react/hook.md',
			'/frontend_framework/react/异步操作回收.md',
			'/frontend_framework/react/build your own React.md',
		],
	}],
};