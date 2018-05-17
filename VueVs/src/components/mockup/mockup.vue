<template>
<div class="form-wrapper">

<div>
  <div class="input-field col s12">
    <select v-model="selectA" name="selectA" v-on:change="updateSelectB">
      <option value="" disabled selected>Wähle aus</option>
      <option v-for="option in optionsA" v-bind:value="option.cmty_no">{{ option.cmty_description }}</option>
    </select>
    <label>Competition:</label>
  </div>
</div>

  <div>
    <div class="input-field col s12">
    <select v-model="selectB" name="selectB" v-on:change="updateSelectC">
      <option value="" disabled selected>Wähle aus</option>
      <option v-for="option in optionsB" v-bind:value="option.jahr">{{ option.jahr }}</option>
    </select>
    <label>Competition:</label>
  </div>
</div>

  <div>
    <div class="input-field col s12">
    <select v-model="selectC" name="selectC">
      <option value="" disabled selected>Wähle aus</option>
      <option v-for="option in optionsC" v-bind:value="option.cmty_no">{{ option.cmty_description }}</option>
    </select>
    <label>Competition:</label>
  </div>
</div>

</div>
</template>


<script>
//import select from "./components/mockup/select.vue";
//import selectmenuA from "../../components/mockup/selectmenuA.vue";
//import selectmenuB from "../../components/mockup/selectmenuB.vue";
//import selectmenuC from "../../components/mockup/selectmenuC.vue";

export default {
  data() {
    return {
      optionsA: [],
      optionsB: [],
      optionsC: [],
      selectA: [],
      selectB: [],
      selectC: []
    };
  },
  components: {
    //selectmenuA,
    //selectmenuB,
    //selectmenuC
  },

  methods: {
    updateSelectB: function() {
      var response = this.axios
        .get("http://localhost:3001/Content/data/call2.json")
        .then(response => (this.optionsB = response.data))
        .then(function() {
          var instances = M.FormSelect.init($("select"));
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    updateSelectC: function() {
      var response = this.axios
        .get("http://localhost:3001/Content/data/call1.json")
        .then(response => (this.optionsC = response.data))
        .then(function() {
          var instances = M.FormSelect.init($("select"));
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created: function() {},
  mounted: function() {
    var response = this.axios
      .get("http://localhost:3001/Content/data/call1.json")
      .then(response => (this.optionsA = response.data))
      .then(function() {
        var instances = M.FormSelect.init($("select"));
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.wrap {
  padding: 30px;
}
.form-wrapper {
  display: flex;
  width: 100%;
  padding: 30px;
  flex-direction: row;
  justify-content: center;
}

.input-field {
  padding: 0 25px 0 25px;
}

input {
  width: 20%;
}
hr {
  margin: 6px;
  border-bottom: 6px dashed #27493c;
  border-top: 1px solid #27493c;
}
</style>


