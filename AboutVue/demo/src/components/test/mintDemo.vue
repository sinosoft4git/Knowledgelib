<template>
	  <div class="mintDemo">
	    <div>
	      <mt-button @click="toastClick">toast按钮</mt-button>
	    </div>
      <div>
        <h4>Tabbar底部选项卡，点击 tab 会切换显示的页面。依赖 tab-item 组件。</h4>
        <mt-tabbar v-model="selected">
          <mt-tab-item id="外卖">
            <img slot="icon" src="../../assets/logo.png">
            外卖
          </mt-tab-item>
          <mt-tab-item id="订单">
            <img slot="icon" src="../../assets/logo.png">
            订单
          </mt-tab-item>
          <mt-tab-item id="发现">
            <img slot="icon" src="../../assets/logo.png">
            发现
          </mt-tab-item>
          <mt-tab-item id="我的">
            <img slot="icon" src="../../assets/logo.png">
            我的
          </mt-tab-item>
        </mt-tabbar>
      </div>
      <div>
        <h4>选中的菜单是: {{selected}}</h4>
      </div>
      
      <div>
        <h4>tab-container 面板，可切换显示子页面。</h4>

        <p>常与navbar、tabbar结合使用</p>
        <div class="nav">  
          <mt-button size="small" @click.native.prevent="active = 'tab-container1'">tab 1</mt-button>  
          <mt-button size="small" @click.native.prevent="active = 'tab-container2'">tab 2</mt-button>  
          <mt-button size="small" @click.native.prevent="active = 'tab-container3'">tab 3</mt-button>  
        </div>  
          
        <div class="page-tab-container">  
          <mt-tab-container class="page-tabbar-tab-container" v-model="active" :swipeable='true'>  
            <mt-tab-container-item id="tab-container1">  
                <!-- cell组件 -->  
              <mt-cell v-for="n in arr1" :title="n"></mt-cell>  
            </mt-tab-container-item>  
            <mt-tab-container-item id="tab-container2">  
                <!-- cell组件 -->  
              <mt-cell v-for="n in arr2" :title="n"></mt-cell>  
            </mt-tab-container-item>  
            <mt-tab-container-item id="tab-container3">  
                <!-- cell组件 -->  
              <mt-cell v-for="n in arr3" :title="n"></mt-cell>  
            </mt-tab-container-item>  
          </mt-tab-container>  
        </div>  
      </div>
      <div>
        <h4>选中的菜单是: {{active}}</h4>
      </div>
    </div>
    
</template>
  
<script type="text/javascript">
import { Toast } from 'mint-ui'
export default {
  name: 'mintDemo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: '',
      active: 'tab-container1',
      arr1: ['258', 'George', 'John', 'Thomas', 'James'],
      arr2: ['123', 'Adrew', 'Martin', 'Adrew', 'George', 'James'],
      arr3: ['456', 'John', 'Martin', 'Thomas']
    }
  },
  mounted () {
  },
  methods: {
    toastClick: function () {
      Toast('Hello world!')
    }
  }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.mint-tabbar{
  position: relative;
}
</style>