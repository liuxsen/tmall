<template>
	<div class="p-deatail">
		<div class="p-banner">
			<div class="banner">
				<a class='item' href="">
					<img src="../assets/product.jpg" alt="">
				</a>
			</div>
		</div>
		
		<div class="main">
			<h1>
				顺丰费列罗巧克力礼盒装 创意diy费雷罗圣诞费力罗礼盒生日礼物
			</h1>
			<!-- 商品附属信息 -->
			<p class="p-sub">
				<span>¥</span><span>128.00-139.00</span>
				<span class="tag">爱的礼物</span>
			</p>
				
			<p class="no-light">
				<span>价格</span><del class="old-price">¥299</del>
			</p>
			<!-- 商品销量 -->
			<div class="p-xl no-light">
				<div>
					<span>快递: </span><span>0.00</span>
				</div>
				<div>
					<span>月销量: </span><span>14373</span>件
				</div>
				<div>
					上海
				</div>
			</div>
		</div>
		<bottom-view></bottom-view>
	</div>
</template>

<script>
	import bottomView from './bottomView.vue'
export default {
  components:{
  		bottomView
	},
  name: 'productDeatail',

  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>

.p-deatail{
	font-size: 12px;
}
.p-deatail .main{
	padding: 0 10px;
}
.p-deatail .main h1{
	font-size: 14px;
	font-weight: 400;
	word-break: break-all;
}
.p-banner{
	height: 370px;
	position: relative;
	overflow: hidden;
}
.p-banner .banner{
	position: absolute;
	left: 50%;
	top: 0;
	transform: translateX(-50%);
	width: 100%;
}
.p-banner .item{
	max-height: 100%;
	width: 100%;
	display: inline-block;
}
.p-banner .item img{
	width: 100%;
}
/*商品信息*/
.p-sub{
	font-size: 24px;
	color: #dd2727;
	margin-bottom: 5px;
}
/*商品标签*/
.p-sub .tag{
	background: #fb6878;
    color: #fff;
    font-size: 12px;
}
.no-light{
	color: #999;
}

/*销量*/
.p-xl{
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-top: 5px;
}
</style>