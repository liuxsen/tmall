import productDetail from '../components/productDetail.vue'
import orders from '../components/orders.vue'
const routes = [
  { path: '/', component: productDetail },
  { path: '/orders', component: orders }
]

export {routes}