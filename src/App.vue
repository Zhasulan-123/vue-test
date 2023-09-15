<template>
  <div class="container-fluid">
     <NavBar />
     <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {NavBar},
}
</script>

<style lang="scss" scoped>
.container-fluid{
  padding-right: 0 !important;
  padding-left: 0 !important;
}
</style>