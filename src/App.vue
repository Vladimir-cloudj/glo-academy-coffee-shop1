<template>
  <div class="wrapper">
    <hero-view/>
    <!-- <first-component/> -->
    <footer-component/>
  </div>
</template>

<script>
// import FirstComponent  from './components/FirstComponent.vue'
import HeroView from '@/views/HeroView.vue'
import FooterComponent from "@/components/FooterComponent.vue"
// import FirstComponent from '@/components/FirstComponent.vue'

export default {
  components:{
    // FirstComponent,
    HeroView,
    FooterComponent,
  }
}
</script>

<style lang="scss" scoped>
  div {
    span {
      color:green;
    }
  }
</style>
