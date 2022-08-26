// main.js   整个文件入口
import Vue from 'vue'
import App from './App.vue'
import router from './router'   //路由
import store from './store'   //vuex
import ElementUI from 'element-ui';//引用element-ui
import 'element-ui/lib/theme-chalk/index.css';
import  * as  echarts from 'echarts'

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')  //最终会挂载到public的index.html里的#app
