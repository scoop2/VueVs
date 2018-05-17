<template>
  <div>
      <div class="input-field col s12">
    <select v-model="selectC" v-on:change="getnext" name="gattung">
      <option value="" disabled selected>Wähle aus</option>
      <option v-for="option in optionsC" v-bind:value="option.cmty_no">{{ option.cmty_description }}</option>
    </select>
    <label>Competition:</label>
  </div>

  </div>
</template>

<script>
export default {
  props: ["message"],
  data() {
    return {
      selectC: [],
      optionsC: []
    };
  },

  methods: { getnext: function() {} },

  created: function() {},
  mounted: function() {
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
};
</script>


<style>

</style>
