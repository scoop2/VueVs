<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo"><img class="navlogo" src="Content/images/vuelogo.png"></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li v-for="item in items">
            <a :href="item.link"><i class="material-icons left">{{ item.icon }}</i>{{ item.title }}</a>            
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", link: "", icon: "home" },
        { title: "Components", link: "", icon: "view_module" }
      ]
    };
  }
};
</script>

<style>
.navlogo {
  padding: 10px 0 0 10px;
  height: auto;
  width: 50px;
}
</style>



