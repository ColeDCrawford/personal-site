import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import store from '@/common/store.js'
import router from '@/common/router.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
library.add(faGithubSquare, faLinkedin, faTwitterSquare, faEnvelopeSquare)
Vue.component('font-awesome-icon', FontAwesomeIcon);

// import { dom } from '@fortawesome/fontawesome-svg-core'
// dom.watch()

require('@/assets/css/main.scss');



Vue.config.productionTip = false

Vue.use(VueRouter);
// const router = new VueRouter({
//   mode: 'history',
//   routes: [
//     { path: '/', component: HomePage, props: true },
//     { path: '/project/:slug', component: ProjectPage, props: true},
//     { path: '/projects', component: ProjectsPage, props: true }
//   ],
//   linkActiveClass: 'active'
// })

new Vue({
  render: h => h(App),
  store: store,
  router: router,
  components: {App}
}).$mount('#app')
