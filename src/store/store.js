import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	showAddCart : false,
}

const mutations = {
	toggleAddCart(state){
		state.showAddCart = !state.showAddCart
	}
}

export {state,mutations}