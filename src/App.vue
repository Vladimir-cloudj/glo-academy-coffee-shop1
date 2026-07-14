<template>
  <div class="wrapper">
    <!-- <nav-bar-component/> -->
    <router-view/>
    <footer-component/>
  </div>
</template>

<script>

// import HeroView from '@/views/HeroView.vue'
// import NavBarComponent from "@/components/NavBarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue"

export default {
  components:{
    // NavBarComponent,
    // HeroView,
    FooterComponent,
  }
}
</script>

<style lang="scss" scoped>

</style>
