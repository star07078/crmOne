
const login = ()=> import('../login/login.vue')
const index = ()=> import('../views/index.vue')

const home = ()=> import('../views/home/home.vue');

// 客户管理
// public private 都是保留字，因此尾部加了个d
const client = ()=> import('../views/client/client.vue')
const publicd = ()=> import('../views/client/publicd/publicd.vue')
const privated = ()=> import('../views/client/privated/privated.vue')
const garbage = ()=> import('../views/client/garbage/garbage.vue')
const aduit = ()=> import('../views/client/aduit/aduit.vue')
const publicd_details = ()=> import('../views/client/publicd/publicd_details.vue')
const privated_details = ()=> import('../views/client/privated/privated_details.vue')
const garbage_details = ()=> import('../views/client/garbage/garbage_details.vue')
const write = ()=> import('../views/client/details/write.vue')

// 服务商
const service = ()=> import('../views/service/service.vue')

// 数据报表
const echarts = ()=> import('../views/echarts/echarts.vue')
const chart1 = ()=> import('../views/echarts/chart1.vue')
const chart2 = ()=> import('../views/echarts/chart2.vue')
const chart3 = ()=> import('../views/echarts/chart3.vue')
const chart4 = ()=> import('../views/echarts/chart4.vue')
const chart5 = ()=> import('../views/echarts/chart5.vue')
const chart6 = ()=> import('../views/echarts/chart6.vue')
const chart7 = ()=> import('../views/echarts/chart7.vue')
const chart8 = ()=> import('../views/echarts/chart8.vue')
const chart9 = ()=> import('../views/echarts/chart9.vue')
const chart10 = ()=> import('../views/echarts/chart10.vue')
const chart11 = ()=> import('../views/echarts/chart11.vue')
const chart12 = ()=> import('../views/echarts/chart12.vue')

// 设置
const news = ()=> import('../views/news/news.vue')
const xtnews = ()=> import('../views/news/xtnews.vue')
const ywnews = ()=> import('../views/news/ywnews.vue')

// 消息
const setup = ()=> import('../views/setup/setup.vue')
const pwd = ()=> import('../views/setup/pwd.vue')
const gly = ()=> import('../views/setup/gly.vue')
const gr = ()=> import('../views/setup/gr.vue')
const gz = ()=> import('../views/setup/gz.vue')

Vue.use(VueRouter)

export default new VueRouter({
    linkExactActiveClass: 'active',
    base: '/',
    mode: 'history',
    routes: [
        {
            path: '/admin/login',
            name: '/admin/login',
            component: login
        },
        {
            path: '/',
            name: 'index',
            component: index,
            redirect: '/admin/index',
            children: [
                {
                    path: '/admin/index',
                    name: 'home',
                    component: home,
                    // meta: { requiresAuth: true },
                },
                {
                    path: '/admin/client',
                    name: 'client',
                    component: client,
                    meta: { requiresAuth: true },
                    redirect: '/admin/client/publicd',
                    children: [
                        {
                            path: '/admin/client/publicd',
                            name: 'publicd',
                            component: publicd,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/client/publicd/details',
                            name: 'publicd_details',
                            component: publicd_details,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/client/garbage',
                            name: 'garbage',
                            component: garbage,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/client/garbage/details',
                            name: 'garbage_details',
                            component: garbage_details,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/client/privated',
                            name: 'privated',
                            component: privated,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/client/privated/details',
                            name: 'privated_details',
                            component: privated_details,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/client/aduit',
                            name: 'aduit',
                            component: aduit,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/client/write',
                            name: 'write',
                            component: write,
                            meta: {requiresAuth: true},
                        }
                    ]
                },
                {
                    path: '/admin/service',
                    name: 'service',
                    component: service,
                    meta: {requiresAuth: true},
                },
                {
                    path: '/admin/echarts',
                    name: 'echarts',
                    component: echarts,
                    meta: {requiresAuth: true},
                    redirect: '/admin/echarts/chart1', 
                    children: [
                        {
                            path: '/admin/echarts/chart1',
                            name: 'chart1',
                            component: chart1,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart2',
                            name: 'chart2',
                            component: chart2,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart3',
                            name: 'chart3',
                            component: chart3,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart4',
                            name: 'chart4',
                            component: chart4,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart5',
                            name: 'chart5',
                            component: chart5,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart6',
                            name: 'chart6',
                            component: chart6,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart7',
                            name: 'chart7',
                            component: chart7,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart8',
                            name: 'chart8',
                            component: chart8,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart9',
                            name: 'chart9',
                            component: chart9,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart10',
                            name: 'chart10',
                            component: chart10,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart11',
                            name: 'chart11',
                            component: chart11,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/echarts/chart12',
                            name: 'chart12',
                            component: chart12,
                            meta: {requiresAuth: true},
                        },
                    ]
                },
                {
                    path: '/admin/setup',
                    name: 'setup',
                    component: setup,
                    meta: {requiresAuth: true},
                    redirect: '/admin/setup/gz',
                    children: [
                        {
                            path: '/admin/setup/pwd',
                            name: 'pwd',
                            component: pwd,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/setup/gr',
                            name: 'gr',
                            component: gr,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/setup/gz',
                            name: 'gz',
                            component: gz,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/setup/gly',
                            name: 'gly',
                            component: gly,
                            meta: {requiresAuth: true},
                        }
                    ]
                },
                {
                    path: '/admin/news',
                    name: 'news',
                    component: news,
                    meta: {requiresAuth: true},
                    redirect: '/admin/news/xtnews',
                    children: [
                        {
                            path: '/admin/news/xtnews',
                            name: 'xtnews',
                            component: xtnews,
                            meta: {requiresAuth: true},
                        },
                        {
                            path: '/admin/news/ywnews',
                            name: 'ywnews',
                            component: ywnews,
                            meta: {requiresAuth: true},
                        },
                    ]
                },
                // {
                //     path: '/admin/table',
                //     name: 'table',
                //     component: table
                // }
            ]
        }
    ]
})