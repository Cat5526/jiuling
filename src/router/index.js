import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',       //路径 和APP.vue里的路径一样
    redirect: '/login'  //路由重定向 一进来就是Home页
  },
  {
    path: '/login',       //路径 和APP.vue里的路径一样
    name: 'login',
    meta:{title:'登录'},//面包屑
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    meta:{title:'首页'},
    redirect: '/index',
    component: () => import('../views/layout/Home.vue'),
    // 全都得在home页面下展示
    children:[
      {
        path: '/index',       //路径 和APP.vue里的路径一样
        name: 'index',
        meta:{title:'首页'},
        component: () => import('../views/layout/index/index.vue')
      },
      {
        path: '/stats',       //路径 和APP.vue里的路径一样
        name: 'stats',
        meta:{title:'数据统计'},
        component: () => import('../views/layout/stats/stats.vue')
      },
      {
        path: '/message',       //路径 和APP.vue里的路径一样
        name: 'message',
        meta:{title:'信息管理'},
        component: () => import('@/views/layout/message/list.vue'),
        children:[
          {
            path: '/message/list',       //路径 和APP.vue里的路径一样
            name: 'list',
            meta:{title:'列表展示'},
            component: () => import('@/views/layout/message/list.vue'),
          }
        ]
      },
      {
        path: '/user',       //路径 和APP.vue里的路径一样
        name: 'user',
        meta:{title:'用户管理'},
        component: () => import('@/views/layout/user/list.vue'),
        children:[
          {
            path: '/user/list',       //路径 和APP.vue里的路径一样
            name: 'list',
            meta:{title:'用户统计'},
            component: () => import('@/views/layout/user/list.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})


//路由拦截
//刷新页面如果没有获取到username token值，返回登录页
router.beforeEach(function(to,from,next){
  if(!sessionStorage.getItem('username')){//判断有没有token值
    if(to.path !== '/login'){//判断当前页面不在登录页
      next('/login')//返回登录页
    }
  };
  next();
})
export default router
