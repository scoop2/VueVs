Vue.config.devtools = true;
import Vue from "vue";
import Vuex from "vuex";
//import $http from "vue-resource";
import axios from "axios";
import VueAxios from 'vue-axios';

import $http from "vue-resource";

//import VueAsyncProperties from "vue-async-properties";
//Vue.use(VueAsyncProperties);

//import Vuetify from "vuetify";

//import "vuetify/dist/vuetify.min.css";
//import Vuecidity from "vuecidity";

import formshow from "./components/testing/form.vue";
import navigation from "./components/global/navigation.vue";
import mockup from "./components/mockup/mockup.vue";

require("./sass/main.scss");
require("../node_modules/materialize-css/dist/js/materialize.min.js");
//var Scripts = require("./libs/scripts.js");

//import fetchData from "./libs/scripts.js";
//Vue.use(Vuetify);
//Vue.use(Scripts);




Vue.use(Vuex);
Vue.use(VueAxios, axios);

var vm = new Vue({
  el: "#app",
  components: {
    navigation,
    formshow,
    mockup
  },
  methods: {
    fetchData(url) {
      this.$http.get(url).then(response => {
        this.jsonData = response.body;
      });
    }
  }
});