import VueRouter from "vue-router";
import Vue from "vue/dist/vue.esm";
import main from "../vue/MainView.vue"
import admin from "../vue/AdminView.vue"
Vue.use(VueRouter)
const routes = [
	{path: '/', component: main},
	{path: '/admin', component: admin}
]
export default new VueRouter({
	routes
})
