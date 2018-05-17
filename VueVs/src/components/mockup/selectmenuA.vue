<template>
  <div>
      <div class="input-field col s12">
    <select v-model="selectA" name="selectA" ref="child1" v-on:change="updateSelects">
      <option value="" disabled selected>Wähle aus</option>
      <option v-for="option in optionsA" v-bind:value="option.cmty_no">{{ option.cmty_description }}</option>
    </select>
    <label>Competition:</label>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      selectA: [],
      optionsA: []
    };
  },

  watch: {
    selectA: function() {
      console.log(this.selectA);
      var response = this.axios
        .get("http://localhost:3001/Content/data/call2.json")
        .then(response => (this.optionsB = response.data))
        .then(function() {
          var instances = M.FormSelect.init($("select"));
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  methods: {
    updateSelects: function() {
      console.log("updateSelects");
    },
    /*
    getnext: function() {
      console.log(this.selectA);
      console.log("click");

      var response = this.axios
        .get("http://localhost:3001/Content/data/call2.json")
        .then(response => (this.optionsA = response.data))
        .then(function() {
          var instances = M.FormSelect.init($("select"));
        })
        .catch(function(error) {
          console.log(error);
        });
    },
            */
    testm: function() {
      console.log("hh", this.selectA);
    }
  },

  created: function() {
    console.log("xx", this.selectA);
  },
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

<style>

</style>
