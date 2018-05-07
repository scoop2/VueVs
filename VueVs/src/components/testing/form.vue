<template>

<div class="form-wrapper">

<div class="input-field col s12">
    <select v-model="gattung_" v-on:change="getnext($el)" id="sA" name="gattung">
      <option value="" disabled selected>Wähle aus</option>
      <option v-for="option in gattung" v-bind:value="option.value">{{ option.text }}</option>
    </select>
    <label>Die Gattung: {{ message }}</label>
  </div>

<div class="input-field col s12">
    <select v-model="mensch_" v-on:change="getnext($el)" id="sB" name="mensch">
      <option value="" disabled selected>Wähle aus</option>
      <option v-for="options in mensch" v-bind:value="options.value">{{ options.text }}</option>
    </select>
    <label>Die Spezies: {{ message }}</label>
  </div>



</div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    getnext(event) {
      console.log("....");
      this.message = $(event)
        .find("select")
        .find("option:selected")
        .html();
      /*
      axios
        .get("http://localhost:3000/src/data/data01.json")
        .then(response => (this.jsondata = response.data));

      axios.get("http://localhost:3000/src/data/data01.json").then(res => {
        this.jsondata = res;
      });
*/
      this.jsondata = this.fetchData();

      console.log(this.jsondata);

      /*
  try {
       const response = await axios.get("http://localhost:3000/src/data/data01.json")
       this.jsondata = response.data
     } catch (e) {
       this.errors.push(e)
     }

      console.log(this.jsondata);
    }
    */
    },

    async fetchData() {
      const response = await axios.get(
        "http://localhost:3000/src/data/data01.json"
      );
      console.log(this.jsondata);
      this.jsondata = response.data;
    }
  },

  data() {
    return {
      query: "",
      jsondata: "",
      gattung_: "",
      mensch_: "",
      gattung: [
        { text: "Mensch", value: "1" },
        { text: "Tier", value: "2" },
        { text: "Pflanze", value: "3" }
      ],
      mensch: [
        { text: "Lulatsch", value: "1" },
        { text: "Windhemd", value: "1" },
        { text: "Fettwanz", value: "1" },
        { text: "Adonis", value: "1" }
      ],
      message: ""
    };
  },
  mounted: function() {
    var elem = document.querySelector("#sA");
    var instance = M.FormSelect.init(elem);
    var elem = document.querySelector("#sB");
    var instance = M.FormSelect.init(elem);
    var elem = document.querySelector("#sC");
    var instance = M.FormSelect.init(elem);
  }
};
</script>

<style scoped>
.form-wrapper {
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  flex-direction: row;
  justify-content: center;
}

.input-field {
  padding: 0 25px 0 25px;
}
</style>
