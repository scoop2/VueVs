Vue.config.devtools = true;
import Vue from "vue";
import Vuex from "vuex";
//import $http from "vue-resource";
import axios from "axios";

import VueAsyncProperties from "vue-async-properties";
Vue.use(VueAsyncProperties);

//import Vuetify from "vuetify";

//import "vuetify/dist/vuetify.min.css";
//import Vuecidity from "vuecidity";

import formshow from "./components/testing/form.vue";
import navigation from "./components/global/navigation.vue";
//import ajaxLoader from "./plugins/ajaxLoader.js";

require("./sass/main.scss");
require("../node_modules/materialize-css/dist/js/materialize.min.js");
//var Scripts = require("./libs/scripts.js");







//import fetchData from "./libs/scripts.js";
//Vue.use(Vuetify);
//Vue.use(Scripts);
/*
Vue.component("navigation", {
  template: "<h1>Welcome to coligo!</h1>"
});
*/

Vue.use(Vuex);

new Vue({
  el: "#app",
  components: {
    navigation,
    formshow
  },
  methods: {
    fetchData(url) {
      this.$http.get(url).then(response => {
        this.jsonData = response.body;
      });
    }
  }
});

/*
new Vue({
  el: "#app",
  template: "<Nav/>",
  components: {
    nav: Nav
  },
  data: {
    items: [
      { title: "Home", link: "/home" },
      { title: "Component Show", link: "/compshow" }
    ],
    message: "hello world!"
  }
});
*/
//page.compshow = new Vue({});