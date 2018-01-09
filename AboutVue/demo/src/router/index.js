import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import mintDemo from '@/components/test/mintDemo'
import picker from '@/components/test/picker'
import order from '@/components/test/order'
import loadMore from '@/components/test/loadMore'
import upLoadImg from '@/components/test/upLoadImg'
import timePicker from '@/components/test/timePicker'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    // mint-ui
    {
      path: '/test/mintDemo',
      name: 'mintDemo',
      component: mintDemo
    },
    // picker
    {
      path: '/test/picker',
      name: 'picker',
      component: picker
    },
    // teeth
    {
      path: '/test/order',
      name: 'order',
      component: order
    },
    // teeth
    {
      path: '/test/loadMore',
      name: 'loadMore',
      component: loadMore
    },
   //upLoadImg
   {
      path: '/test/upLoadImg',
      name: 'upLoadImg',
      component: upLoadImg
    },
    //timePicker
    {
      path: '/test/timePicker',
      name: 'timePicker',
      component: timePicker
    },
  ]
})
