Vue.config.devtools = true;
import Vue from "vue";
//import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";



import navigation from "./components/global/navigation.vue";
import mockup from "./components/mockup/mockup.vue";

//Vue.use(Vuex);
Vue.use(VueAxios, axios);

//require("./store.js");
require("./sass/main.scss");
require("../node_modules/materialize-css/dist/js/materialize.min.js");
//var Scripts = require("./libs/scripts.js");

//import fetchData from "./libs/scripts.js";
//Vue.use(Vuetify);
//Vue.use(Scripts);

/*
export const store = new Vuex.Store({
  state: {
    safelyStoredNumber: 0
  }
});
*/



new Vue({
  //store,
  el: "#app",
  components: {
    navigation,
    mockup,

  },
  methods: {
    fetchData(url) {
      this.$http.get(url).then(response => {
        this.jsonData = response.body;
      });
    }
  }
});