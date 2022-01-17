import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import "./chart.js";
createApp(App).use(router).mount("#app");
