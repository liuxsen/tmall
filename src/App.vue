<template>
  <div id="app">
    <!-- <product-detail></product-detail>  -->
    <router-view></router-view>
  </div>
</template>

<script>

import productDetail from './components/productDetail.vue'
export default {
  name: 'app',
  components:{
  productDetail
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
html,body{
  min-height: 100%;
}
ul,li,body,dl,dt,dd,p{
  padding: 0;
  margin: 0;
}
#app {
  min-height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
