<template>
<div>
<div class="form-wrapper">

<div class="input-field col s12">
    <select v-model="gattung" v-on:change="getnext" id="sA" name="gattung">
      <option value="" disabled selected>Wähle aus</option>
      <option v-for="option in optionsData.gattung" v-bind:value="option.value">{{ option.text }}</option>
    </select>
    <label>Die Gattung: {{ message }}</label>
  </div>

<div class="input-field col s12">
    <select v-model="art" id="sB" name="art">
      <option value="" disabled selected>Wähle aus</option>
      <option v-for="option in optionsData.arten" v-bind:value="option.value">{{ option.text }}</option>
    </select>
    <label>Die Spezies: {{ message }}</label>
  </div>




<hr>
</div>
<div class="wrap">
<h5>My question: {{existentialQuestion}}</h5>
<input v-model="existentialQuestion"/>
<hr>
<p>You have decided this statement isyy {{statementIsTrue}}</p>
<label>
  <input type="checkbox" v-model="statementIsTrue"/>
  <span>Is this statement true?</span>
</label>

<hr>
<p>A list of names that rhyme: {{namesThatRhyme.join(', ')}}</p>
<label>
  <input type="checkbox" value="Daniel" v-model="namesThatRhyme"/>
  <span>Otto</span>
</label>
<label>
  <input type="checkbox" value="Nathaniel" v-model="namesThatRhyme"/>
  <span>Sepp</span>
</label>
<label>
  <input type="checkbox" value="Hubert" v-model="namesThatRhyme"/>
  <span>Hubert</span>
</label>
</div>
</div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    getnext: function(e) {
      console.log(e.target.value);
      //    this.art = this.optionsData.mensch;
      this.optionsData.arten = this.optionsData.mensch;
      // console.log(this.art, this.art[0].text);
    }
  },

  data() {
    return {
      gattung: "mensch",
      art: "",
      option: "",
      optionsData: {
        gattung: [
          { text: "Mensch", value: "1" },
          { text: "Tier", value: "2" },
          { text: "Pflanze", value: "3" }
        ],
        mensch: [
          { text: "Fettwanz", value: "1" },
          { text: "Wutbürger", value: "2" },
          { text: "Trachtenvereinmitglied", value: "3" }
        ],
        tier: [
          { text: "Breitmaulfrosch", value: "1" },
          { text: "Kohlmeise", value: "2" },
          { text: "Fuchs", value: "3" }
        ],
        pflanze: [
          { text: "Rose", value: "1" },
          { text: "Marihuhana", value: "2" },
          { text: "Phalaenopsis Grandiflora", value: "3" }
        ],
        default: [{ text: "", value: "" }]
      },
      message: "Treffe deine Wahl!",
      existentialQuestion: "Am I truly an alligator?",
      statementIsTrue: true,
      namesThatRhyme: []
    };
  },
  computed: {
    liste: function() {
      console.log("computed :", this.gattung);

      switch (this.gattung) {
        case "1":
          //this.optionsData.gattung = this.optionsData.mensch;
          this.art = this.optionsData.mensch;
          break;

        case "2":
          this.art = this.optionsData.tier;
          this.optionsData.arten = this.optionsData.tier;

          console.log(
            "in 2 :",
            this.art,
            this.optionsData.arten,
            this.optionsData.arten[0].text
          );
          break;

        case "3":
          this.optionsData.gattung = this.optionsData.mensch;
          this.optionsData.arten = this.optionsData.pflanze;
          break;

        default:
          //  this.optionsData.gattung = this.optionsData.mensch;
          this.art = "";
      }

      /*
      switch (this.gattung) {
        case "Mensch":
          options = this.optionsData.mensch;
          break;

        case "Tier":
          options = this.optionsData.tier;
          break;

        default:
          options = "";
      }
      return options;
        */
    }
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
