<template>
	<div>
		<!-- 数量 -->
		<div class="p-num">
			<div class="p-numBox">
				<span class="cut" @click="cut">-</span>
				<span class="currNum">{{buyNum}}</span>
				<span class="add" @click="add">+</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'cutAdd',

  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
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
</style>