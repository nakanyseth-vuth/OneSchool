import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/store";
import router from "../src/router/router";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
