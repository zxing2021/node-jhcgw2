import Vuex, {Store} from "vuex";
import Vue from "vue/dist/vue.esm";
import axios from "./axios";
Vue.use(Vuex);
export default new Store({
	state: {
		a1: [], a2: []
	}, mutations: {
		setA1(state, list) {
			state.a1 = list;
		}, setA2(state, list) {
			state.a2 = list;
		}
	}, actions: {
		setA1(context) {
			axios.get("/a1").then(res => {
				context.commit("setA1", res.data);
			}).catch(console.log);
		}, setA2(context) {
			axios.get("/a2").then(res => {
				context.commit("setA2", res.data);
			}).catch(console.log);
		}, delA1(context, id) {
			axios.delete("/a1/" + id).then(res => {
				context.dispatch("setA1");
			}).catch(console.log);
		}, updA1(context, obj) {
			axios.put("/a1/" + obj.id, obj).then(res => {
				context.dispatch("setA1");
			}).catch(console.log);
		}, addA1(context, obj) {
			axios.post("/a1/", obj).then(res => {
				context.dispatch("setA1");
			}).catch(console.log);
		}, delA2(context, id) {
			axios.delete("/a2/" + id).then(res => {
				context.dispatch("setA2");
			}).catch(console.log);
		}, updA2(context, obj) {
			axios.put("/a2/" + obj.id, obj).then(res => {
				context.dispatch("setA2");
			}).catch(console.log);
		}, addA2(context, obj) {
			axios.post("/a2/", obj).then(res => {
				context.dispatch("setA2");
			}).catch(console.log);
		}
	}
})