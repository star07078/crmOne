import App from './App'
import router from './router'
import store from './store'

import '../global/style/style.css';
import '../global/style/style.less';

Vue.config.productionTip = false

Vue.prototype.$axios = axios;
axios.defaults.baseURL = '/api' 


Vue.prototype.$echarts = echarts;

// elemnt
import { 
  Button, 
  Select, 
  Option, 
  DatePicker, 
  Message, 
  Pagination, 
  Cascader 
} from 'element-ui';

Vue.prototype.$message = Message;
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Pagination)
Vue.use(Cascader)


// 全局注册vTable
import vTable from '../global/components/v-table.vue'
import Alert from '../global/components/alert.vue'
Vue.use({
  install: function(){
    Vue.component('vTable',vTable)
    Vue.component('Alert',Alert)
  }
})

router.beforeEach((to, from, next)=>{
  if(to.meta.requiresAuth){
    var token = window.localStorage.getItem('token');
    if(!token){
        next({
          path: '/admin/login'
        })
    }else{
      next()
    }
  }else{
    next()
  }
})


axios.interceptors.request.use(function (config) {
  if(!config.headers.Authorization){
    config.headers.Authorization = "Bearer" + " " + window.localStorage.getItem('token')
  }
  return config;
});


// axios.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   return response;
// }, function (error) {
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });

new Vue({
  el: '#crm',
  router,
  store,
  render: h => h(App)
})

