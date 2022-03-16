import Vue from "vue/dist/vue.esm"
import axios from "axios";
let config = {};
if (process.env.NODE_ENV === "development") {
	config.baseURL = "http://localhost:3001/"
} else {
	config.baseURL = "./"
}
const obj = axios.create(config)
Vue.prototype.$axios = obj;
export default obj;