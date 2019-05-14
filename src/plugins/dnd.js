import Vue from 'vue'
// import Container and Box components
import DndContainer from '../components/dnd.vue'
import DndBox from '../components/dnd.vue'

// install方法必须有
export default{
    install:function(Vue) {
        Vue.component('DndContainer',DndContainer);
        Vue.component('DndBox',DndBox);
    }
}

Vue.use(Container, Box, {
  iconfont: 'md',
})