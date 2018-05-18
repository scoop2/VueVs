Vue.config.devtools = true;
import Vue from "vue";
//import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";



import navigation from "./components/global/navigation.vue";
import mockup from "./components/mockup/mockup.vue";

//Vue.use(Vuex);
Vue.use(VueAxios, axios);

require("./store.js");
require("./axios.config.js");
require("./sass/main.scss");
require("../node_modules/materialize-css/dist/js/materialize.min.js");

var Scripts = require("./libs/scripts.js");

//console.log(axioscfg)

var app = new Vue({
  //store: store,
  el: "#app",
  components: {
    navigation,
    mockup
  }
});