import Vue from 'vue'
import App from './App'
import router from './router'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from "axios";
import VueAxios from "vue-axios";

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

import './assets/font/iconfont.css'

import echarts from 'echarts'

Vue.prototype.$echarts = echarts;

library.add(fas, far, fab)

Vue.component('font-awesomecicon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.use(VueAxios, axios)
Vue.component('icon',Icon)

Vue.use(router);
Vue.use(ElementUI);


new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
})
