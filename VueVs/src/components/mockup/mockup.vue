<template>
<div class="form-wrapper">

<div class="input-field col s12" v-on:click="getData">
    <select v-model="selectA" v-on:change="getnext" id="sA" name="gattung">
      <option value="" disabled selected>Wähle aus</option>
      <option v-for="option in optionsA" v-bind:value="option.cmty_no">{{ option.cmty_description }}</option>
    </select>
    <label>Competition:</label>
  </div>
<div>{{ selectA }}</div>
</div>
</template>


<script>
export default {
  data() {
    return {
      message: "",
      optionsA: [],
      selectA: []
    };
  },

  methods: {
    getData: function() {
      this.axios
        .get("http://localhost:3001/Content/data/call1.json")
        .then(response => (this.sepp = response.data))
        .then(function() {
          var instances = M.FormSelect.init(elems);
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    getnext: function() {},
    getDataX: function(url) {
      $.getJSON({
        type: "GET",
        headers: {
          "Access-Control-Allow-Origin": true
        },
        jsonp: "mycallback",
        url: "http://localhost:3001/Content/data/call1.json",
        crossDomain: true,
        dataType: "json",
        timeout: 10000,
        cache: true,
        async: true,
        success: function(data) {
          this.optionsA = data;
          console.log(this.optionsA);
          return;
        },
        error: function(parsedjson, textStatus, errorThrown) {
          console.warn(errorThrown);
        },
        complete: function() {}
      });
    }
  },
  watch: {
    optionsA: function(val) {}
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


