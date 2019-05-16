import Vue from 'vue'
import './plugins/vuetify'
//import './plugins/dnd'
// import Container and Box components
import { Container, Box } from '@dattn/dnd-grid'
// minimal css for the components to work properly
import '@dattn/dnd-grid/dist/dnd-grid.css'
import App from './App.vue'



Vue.component("DndGridContainer",Container)
Vue.component("DndGridBox",Box)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
