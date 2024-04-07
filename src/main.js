import { createApp } from "vue";
import App from "./App.vue";

import VueAxios from "vue-axios";
import service from "./api/response";
createApp(App).use(VueAxios, service);

import HighchartsVue from "highcharts-vue";
createApp(App).use(HighchartsVue);

createApp(App).mount("#app");
