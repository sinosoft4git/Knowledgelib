<template>
	<div class='pickerMode'>
		<mt-button @click.native="datePicker" size='large'>{{dateVal}}</mt-button>
		
		<mt-button @click.native="addrClick" type='primary' size='large'>{{addrVal}}</mt-button>
		
		
		<div>
			<!--日期选择器-->
      <mt-datetime-picker
        ref="picker"
        type="date" 
        v-model="pickerValue"
        :startDate.sync = 'startPicker' 
        :endDate.sync = 'endPicker'
        @confirm="handleConfirm">
      </mt-datetime-picker>
      <!--日期选择器-->
		</div>
		<div  class='addrDiv'>
			<mt-popup v-model='showAddr'  popup-transition="popup-fade"  position="middle">
				<mt-picker ref="addrPic" :slots="areaSlots" @change="onValuesChange"></mt-picker>
			</mt-popup>
		</div>
			
		
	</div>
</template>

<script>
	import { Picker,popup } from 'mint-ui'
	import {address,add} from '../../assets/js/city_abc.js'
	export default{
		name:'pickerMode',
		data(){
			return {
				pickerValue:'1990-1-1',// 时间picker默认显示值
        startPicker:new Date(new Date().getFullYear() - 120, 0, 1),//picker开始时间
        endPicker:new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate()),// picker结束时间
        dateVal:'请选择日期',
        // 地址
        addrVal:'请选择地址',
        showAddr:false, // 是否显示地址
        addrId:'A',// 地址索引
        provinceIndex:1,
        cityLetter:'A',
        areaSlots:[
        {
            flex: 1,
            values:  Object.keys(address),
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: address['A'],//返回address的所有属性
            className: 'slot3',
            textAlign: 'center'
          }],
			}
		},
		beforeCreate(){document.title='pickerDemo';},
		created(){
			this.areaSlots[2].values = address[this.addrId]
		},
		mounted(){
			console.log(this.$refs.addrPic)
			this.$nextTick(() => {
		    setTimeout(() => {
		      // 利用索引初始化默认选中的省份和城市
//		      this.areaSlots[0].defaultIndex = provinceIndex // Number类型
//		      this.areaSlots[2].defaultIndex = areaSlotsIndex
		    }, 20)
		  })
		},
		methods:{
			// 日期选择器
			datePicker(){
				this.$refs.picker.open();
			},
			handleConfirm(curdate){
				var year = curdate.getFullYear();
        var mon = curdate.getMonth()+1;
        var day = curdate.getDate();
        mon = mon<10?'0'+mon:mon
        day = day<10?'0'+day:day
        this.dateVal = year+ '-' +mon+ '-' +day;
			},
			
			// 地址联动选择
			addrClick(){
				this.showAddr = true
			},
			onValuesChange(picker, values){
				console.log(picker)
				console.log('------onValuesChange-----')
				console.log(values)
				this.addrId = values[0]
				console.log(this.addrId=='A')
				if(this.addrId =='A'){
					
				}else{
					this.cityLetter = values[0]
					this.areaSlots[2].values = address[this.addrId]
//					picker.setSlotValue( cityLetter,values[1]);
				}
					this.addrVal = this.cityLetter+'-'+ values[1]
					return false;
			},
		},
		
	}
</script>

<style scoped>
  .pickerMode{
  	background-color: #fff;
  }
.addrDiv  .mint-popup{width: 90%;border-radius: 0.13rem;}
  .addrDiv{width: 90%;}
</style>