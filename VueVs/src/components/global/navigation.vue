<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo"><img class="navlogo" src="/Content/images/vuelogo.png"></a>
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
        { title: "Home", link: "/Home", icon: "home" },
        { title: "Components", link: "/Home/Components", icon: "view_module" },
        { title: "Mockup", link: "/Home/Mockup", icon: "local_cafe" }
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



