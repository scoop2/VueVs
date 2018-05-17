<template>
  <div>
      <div class="input-field col s12">
    <select v-model="selectB" v-on:change="getnext" name="selectB" ref="child2">
      <option value="" disabled selected>Wähle aus</option>
      <option v-for="option in optionsB" v-bind:value="option.va_runde">{{ option.spieltag }}</option>
    </select>
    <label>Competition:</label>
  </div>

  </div>
</template>

<script>
export default {
  props: ["message", "selectA"],
  data() {
    return {
      selectB: [],
      optionsB: []
    };
  },
  watch: {
    selectA: function() {
      console.log("CCCC");
    }
  },
  methods: { getnext: function() {} },

  created: function() {},
  mounted: function() {
    console.log("xx", this.selectA);

    /*
    var response = this.axios
      .get("http://localhost:3001/Content/data/call2.json")
      .then(response => (this.optionsB = response.data))
      .then(function() {
        var instances = M.FormSelect.init($("select"));
      })
      .catch(function(error) {
        console.log(error);
      });
      */
  }
};
</script>


<style>

</style>
