<template>
	<div class="order">
		<!-- 订单页 -->
		<!-- 返回 -->
		<div class="back">
			<p class="back-icon"></p>
			<p>确认订单</p>
		</div>
		<!-- 收货地址 -->
		<div class="order-bar">
			
		</div>
		<div class="address">
			<div>
				<p class="orderUser">收货人：<span>刘建辉</span> <span>18295718445</span></p>
				<p>收货地址： 北京市昌平区史各庄佳佳超市</p>
			</div>
			<!-- 地址修改 -->
			<div class="to">
			</div>
		</div>

		<!-- 商品信息 -->
		<div class="p-order-info">
			<h1>超导食品专营店</h1>
			<div class="p-order-content">
				<div class="p-picinfo">
					<img src="../assets/order_info.jpg" alt="">
				</div>
				<div>
					<h2>
						包邮好时巧克力kisses礼盒装创意感恩节圣诞生日礼物36粒diy
					</h2>
					<p>
						食品口味：<span>曲奇</span>
					</p>
				</div>
				<cut-add></cut-add>
			</div>
		</div>

	</div>
</template>

<script>
import cutAdd from './cutAdd.vue'
export default {

  name: 'orders',
  components:{
  	cutAdd
  },
  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
.order{
	font-size: 14px;
	background-color: #eee;
}
.back{
	box-shadow: 0 3px 8px 1px rgba(100,200,100,.2);
	display: flex;
	height: 50px;
	line-height: 50px;
	text-align: center;
	background-color: #fff;
}
.back-icon{
	width: 50px;
	height: 100%;
	background: url(../assets/back.png) center center no-repeat/24%;
}
.address{
	padding: 10px;
	/*background-color: red;*/
	display: flex;
	justify-content: space-between;
	align-items: center;
	line-height: 30px;
	background-color: #fff;
}
.orderUser{
	font-size: 16px;
	color: #333;
	font-weight: 500;
}
.to{
	background: url(../assets/to.png) no-repeat center center/7px 12px;
	width: 7px;
	height: 12px;
}
.order-bar{
	background: url(../assets/order_bar.png) repeat 0 0;
	height: 5px;
	margin-top: 5px;
}

/*商品的信息*/
.p-order-info{
	background-color: #fff;
	margin-top: 5px;
}
.p-order-info h1,
.p-order-info h2{
	margin: 0;
	font-size: 14px;
	font-weight: 600;
}
.p-picinfo{
	width: 60px;
	height: 60px;
	margin: 10px;
}
.p-picinfo img{
	width: 100%;
	height: 100%;
	border: 0;
}
.p-order-content{
	display: flex;
	align-items: center;
	padding: 5px;
}
</style>