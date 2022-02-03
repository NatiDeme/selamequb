import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import "./chart.js";
import VueAxios from "vue-axios";
import axios from "axios";
import store from "./store";

require("@/store/subscribe");

store.dispatch("attempt", localStorage.getItem("token"));

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

createApp(App).use(router, axios, VueAxios).use(store).mount("#app");
