<template>
  <nav class="navbar bg-dark">
    <div class="container">
        <router-link class="navbar-brand" to="/">
          <img :src="logo" />
        </router-link>
        <ul class="nav justify-content-end">
          <li class="nav-item" v-if="$route.path !== '/'">
            <router-link class="nav-link" to="/"><Search class="mob_size" /><span>Поиск</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/favorites"><Heart class="mob_size" /><span>Избранное</span></router-link>
          </li>
        </ul>
    </div>
  </nav>
</template>

<script>
import Logo from "@/assets/logo.png";
import Heart from "@/icons/Heart.vue";
import Search from "@/icons/Search.vue";

export default {
  name: "NavBar",
  components: {Heart, Search},
  data() {
    return {
       logo: Logo
    }
  },
}
</script>

<style lang="scss" scoped>
.bg-dark{
  background: #000;
}
.navbar {
  height: 148px !important;
}
.nav-link span{
   color: #fff;
   margin-left: 10px;
}

@media only screen and (max-width: 768px) {
  .nav-link span{
    display: none;
  }
}
</style>