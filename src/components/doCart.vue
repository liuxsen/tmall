<template>
	<div>
		<transition name='fade'>
			<div v-show="show" @click="hide" class="cover">
				{{show}}
			</div>
		</transition>
		<transition name="slideup">
			<div class="mian" v-show="show">
			<!-- 商品图片库存等 -->
				<div class="p-picArea">
					<div class='p-pic'>
						<img src="../assets/product.jpg" alt="">
					</div>
					<div class='p-picTitle'>
						<p><span>¥</span><span>{{checked.price}}</span></p>
						<p><span>库存</span><span>{{checked.last}}</span><span>件</span></p>
						<p><span>已选: </span><span>"{{checked.name}}"</span></p>
					</div>
				</div>
				<!-- 商品种类 -->
				<div class="p-fenlei">
					<h3 class="title">食品口味</h3>
					<!-- 商品分类名字 -->
					<div class="p-fName" >
					<span  v-for="(product,index) in products">
						<label @click="selectP(index)" :class="{disable: product.disable,checked:index === checkedIndex}">
							{{product.name}}
						</lable >
					</span>
					</div>
					<div></div>
				</div>
				<!-- 数量 -->
				<div class="p-num">
					<h1 class="p-numtitle">数量</h1>
					<div class="p-numBox">
						<span class="cut" @click="cut">-</span>
						<span class="currNum">{{buyNum}}</span>
						<span class="add" @click="add">+</span>
					</div>
				</div>
				<!-- 确定按钮 -->
				<router-link to="/orders">
					<button @click="hide" class="sure">确定</button>
				</router-link>	
			</div>
		</transition>
	</div>
</template>

<script>
export default {

  name: 'doCart',

  data () {
    return {
    	checked:'',
    	checkedIndex: 0,
    	buyNum: 1,
    	products:[
    		{
    			name: '德芙全粉牛奶巧克力',
    			disable: false,
    			last: 123,
    			price: 44
    		},
    		{
    			name: '曲奇',
    			disable: false,
    			last: 100,
    			price: 55
    		},
    		{
    			name: '榛仁',
    			disable: false,
    			last: 100,
    			price: 66
    		},
    		{
    			name: '黑巧',
    			disable: false,
    			last: 10,
    			price: 23
    		},
    		{
    			name: '扁桃仁',
    			disable: false,
    			last: 11,
    			price: 88
    		},
    		{
    			name: '黑巧',
    			disable: false,
    			last: 14,
    			price: 251
    		},
    		{
    			name: '牛奶',
    			disable: false,
    			last: 300,
    			price: 233
    		},
    		{
    			name: '德芙全红苹果夹心巧克力',
    			disable: true,
    			last: 5,
    			price: 444
    		},
    	]
    };
  },
  computed:{
  	show(){
  		console.log(this.$store.state.showAddCart)
  		return this.$store.state.showAddCart;
  	}
  },
  methods:{
  	selectP(index){
  		console.log(index);
  		if(this.products[index].disable === true){
  			return;
  		}
  		this.checked = this.products[index];
  		this.checkedIndex = index;
  	},
  	hide(){
  		this.$store.commit('toggleAddCart')
  	},
  	cut(){
  		if(this.buyNum === 1){
  			return;
  		}
  		this.buyNum--;
  	},
  	add(){
  		this.buyNum++;
  	}
  },

  props:{
  	
  }
  
};
</script>

<style lang="css" scoped>
.cover{
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
	background: #333;
	opacity: .5;
}
.fade-enter-active,
.fade-leave-active{
	transition: opacity .5s;
}
.fade-enter,
.fade-leave-active{
	opacity: 0;
}


.slideup-enter-active {
  transition: all .3s ease;
}
.slideup-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slideup-enter, .slideup-leave-active {
  transform: translateX(100%);
}

.mian{
	position: fixed;
	left: 0;
	bottom: 0;
	height: 70%;
	width: 100%;
	/*overflow: hidden;*/
	background-color: #fff;
	z-index: 4;
	transition: all ease-in .6s;
}
.p-picArea{
	display: flex;
	padding: 0 10px;
}
.p-picArea .p-pic{
	width: 124px;
	margin-top: -20px;
	border-radius: 5px;
	overflow: hidden;
	background-color: #fff;
	padding: 5px;
	margin-right: 5px;
}
.p-picArea .p-pic img{
	width: 100%;
}
.p-picTitle{
	line-height: 22px;
	color: #051b28;
	font-size: 14px;
	margin-left: 10px;
	padding-top: 10px;
}
/*商品分类*/
.p-fenlei{
	padding: 20px 10px;
	border-bottom: 1px solid #eee;
}
.p-fenlei h3.title{
	font-size: 16px;
	font-weight: 600;
	color: #666;
}
.p-fenlei .p-fName{
	font-size: 14px;
}
.p-fenlei .p-fName label{
	padding: 5px 15px;
	border-radius: 5px;
	display: inline-block;
	border: 1px solid #eee;
	margin: 5px;
}
.p-fenlei .p-fName label.disable{
	color: #cfcfcf;
}
.p-fenlei .p-fName label.checked{
	border-color: #b10000;
}
.p-num{
	padding: 10px;
}
.p-numBox{
	border: 1px solid #eee;
	display: inline-block;
}
.p-numBox span{
	padding: 5px 8px;
	display: inline-block;
}
.p-numBox span.currNum{
	border-left: 1px solid #eee;
	border-right: 1px solid #eee;
	padding-left: 10px;
	padding-right: 10px;
}
.p-numtitle{
	font-size: 14px;
	margin: 0;
}
.sure{
	position: absolute;
	display: block;
	width: 100%;
	left: 0;
	bottom: 0;
	border: 0;
	background-color: #DD2727;
	color: #fff;
	padding: 10px 0;
}
</style>