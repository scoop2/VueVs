<template>
  <div class="form-wrapper">

    <div class="select-wrapper">
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
          <label>Jahr:</label>
        </div>
      </div>

      <div>
        <div class="input-field col s12">
          <select v-model="selectC" name="selectC" v-on:change="renderResult">
            <option value="" disabled selected>Wähle aus</option>
            <option v-for="option in optionsC" v-bind:value="option.va_runde">{{ option.spieltag }}</option>
          </select>
          <label>Runde:</label>
        </div>
      </div>
    </div>

    <div v-model="result" class="result-wrapper center-align">
      <h1>{{ title }}</h1>
      <h3>{{ teams }}</h3>
    </div>

  </div>
</template>


<script>
  export default {
    data() {
      return {
        optionsA: [],
        optionsB: [],
        optionsC: [],
        selectA: [],
        selectB: [],
        selectC: [],
        result: {},
        title: "",
        teams: ""
      };
    },
    methods: {
      updateSelectB: function () {
        var request = "http://trk-win-ism-1.impire.de:84/d3/getYears/" + this.selectA;
        console.log(request);
        var response = this.axios
          .get(request, axioscfg)
          .then(response => (this.optionsB = response.data))
          .then(function () {
            var instances = M.FormSelect.init($("select"));
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      updateSelectC: function () {
        var request = "http://trk-win-ism-1.impire.de:84/d3/getRounds/" + this.selectA + "/" + this.selectB;
        console.log(request);
        var response = this.axios
          .get(request)
          .then(response => (this.optionsC = response.data))
          .then(function () {
            var instances = M.FormSelect.init($("select"));
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      renderResult: function () {
        var request = "http://trk-win-ism-1.impire.de:84/d3/getMatches/" + this.selectA + "/" + this.selectB + "/0/" + this.selectC;
        console.log(request);
        var response = this.axios
          .get(request)
          .then(response => {
            this.title = response.data[0].st_name;
            this.teams = response.data[0].orga_name_team1 + " : " + response.data[0].orga_name_team2;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    mounted: function () {
      var response = this.axios
        .get("http://trk-win-ism-1.impire.de:84/d3/getCompetitions")
        .then(response => (this.optionsA = response.data))
        .then(function () {
          var instances = M.FormSelect.init($("select"));
        })
        .catch(function (error) {
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
    width: 100%;
  }

  .select-wrapper {
    display: flex;
    width: 100%;
    padding: 30px;
    flex-direction: row;
    justify-content: center;
  }

  .result-wrapper {
    width: 100%;
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