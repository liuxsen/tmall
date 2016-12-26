<template>
	<div>
		<ul class="bottom-view">
			<li @click="showCart" class="addCart">加入购物车</li>
			<li @click="showCart" class="doBuy">立即购买</li>
		</ul>
		<do-cart></do-cart>
	</div>
</template>

<script>
import doCart from './doCart.vue'
export default {

  name: 'bottomView',
  components:{
  	doCart
  },
  data () {
    return {
    };
  },
  computed:{
  	show(){
		console.log(this.$store.state.showAddCart);
		return this.$store.state.showAddCart
  	}
  },
  methods:{
  	showCart(){
  		this.$store.commit('toggleAddCart');
  		console.log(this.$store.state.showAddCart)
  	}
  }
};
</script>

<style lang="css" scoped>
.bottom-view{
	position: fixed;
	left: 0;
	bottom: 0;
	display: flex;
	color: #fff;
	font-size: 12px;
	line-height: 30px;
	width: 100%;
	justify-content: flex-end;
}
.addCart{
	padding: 0 10px;
	background-color: #FF9402;
}
.doBuy{
	padding: 0 10px;
	background-color: #DD2727;
}
</style>