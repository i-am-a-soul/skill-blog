module.exports = {
    getBackendSidebar: () => [{
        title: '公共',
        children: [
            '',
            '/backend/服务端知识地图.md',
            '/backend/错误处理逻辑.md',
            '/backend/基于cookie的认证与基于token的认证.md',
            '/backend/中间件.md',
            '/backend/SSO.md',
            '/backend/日志.md',
            '/backend/微服务.md',
        ],
    }, {
        title: 'Golang',
        children: [
            '/backend/golang/知识点.md',
        ],
    }, {
        title: 'Node.js',
        children: [
            '/backend/nodejs/知识点.md',
        ],
    }, {
        title: '数据库',
        children: [
            '/backend/database/知识点.md',
            '/backend/database/mysql.md',
        ],
    }],
};