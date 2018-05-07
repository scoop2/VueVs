<template>
<div>
{{ description }}
  
  


<script>
  import Selector from './components/selector.vue';
  import Choicebox from './components/choicebox.vue';

export default {
  name: "headline",
  props: ["headline"],
  mounted: function() {
    //var elem = document.querySelector(".modal");
    //var instance = M.Modal.init(elem);
    //var elem = document.querySelector("select");
    //var instance = M.FormSelect.init(elem);
  },
};
</script>

