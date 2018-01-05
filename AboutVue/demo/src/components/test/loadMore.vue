<template>
	<div class="loadMore">
		<div class='addMore'>
			<h1>上拉加载</h1>
			<mt-loadmore :autoFill=false :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" @top-status-change="handleTopChange"  bottomPullText='上拉加载'>
				<ul class='loadList'>
					<li class='moreLi' v-for='val in list'>
						{{val}}
					</li>
				</ul>
				<div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }" class='s_margin'><mt-spinner :size='20' color="#26a2ff" style='margin: auto;'type="fading-circle"></mt-spinner></span><!--↓-->
            <span v-show="topStatus === 'loading'">Loading...</span>
        </div>
        <div slot = 'bottom'class="mint-loadmore-bottom"><span class="mint-loadmore-text">上拉加载</span></div>
			</mt-loadmore>
			
		</div>
	</div>
</template>

<script>
	import {spinner,loadmore} from 'mint-ui'
	export default{
		name:'loadMore',
		data(){
			return {
				allLoaded:false,
				topStatus: '',
				list:[0,1,2,3,5,6,7,8,9,10,11,12,13,14,15]
			}
		},
		methods:{
			handleTopChange(status) {
        this.topStatus = status;
      },
			loadTop() {
			  // 加载更多数据
			  this.$refs.loadmore.onTopLoaded();
			},
			loadBottom() {
				
//			  setTimeout(() => {
			    let  last = this.list[this.list.length - 1];
			    
			    for (let i = 1; i <= 10; i++) {
			      this.list.push(last + i);
			    }
//			  }, 2500);
//			  var last = this.list[this.list.length - 1];
			  if(last>49){
			    	this.allLoaded = true;// 若数据已全部获取完毕
			  }
			  this.$refs.loadmore.onBottomLoaded();
			  
			},
		}
	}
</script>

<style scoped>
	h1, h2,h4 {
	padding-left: .89rem;
  font-weight: normal;
  height:2.22rem;
  line-height: 2.22rem;
  background-color: #fafafa;
}
.loadMore{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
}
.mint-loadmore-bottom,.mint-loadmore-top {
    color: #9a9a9a;
}
.loadList{
	height: auto;
}
.moreLi{
	width: 100%;
	height: 2.77rem;
	text-align: center;
	line-height: 2.77rem;
	border-bottom: 0.01rem solid #fafafa;
}
</style>