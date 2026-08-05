<template>
  <main>
    <spinner v-if="isLoading" />
    <template v-else-if="product">
      <div v-if="product" class="banner" :class="pageName === 'coffee' ? 'coffepage-banner' : 'goodspage-banner'">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <nav-bar-component/>
            </div>
          </div>
          <block-title :title="product.name"/>
        </div>
      </div>
      
      <section class="shop" v-if="product">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 offset-1">
              <img class="shop__girl" 
                  :src="product.image" 
                  alt="coffee_item"
              >
            </div>
            <div class="col-lg-4">
              <div class="title">About it</div>
              <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
              <div class="shop__point">
                <span>Country:</span>
                {{product.country}}
              </div>
              <div class="shop__point">
                <span>Description:</span>
                {{product.description}}
              </div>
              <div class="shop__point">
                <span>Price: </span>
                <span class="shop__point-price">
                  {{ product.price}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
    
    <div v-else class="container mt-5 text-center">
      <h2>Товар не найден</h2>
      <router-link to="/" class="btn btn-outline-dark">На главную</router-link>
    </div>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue"
import BlockTitle from '@/components/BlockTitle.vue'
import Spinner from '@/components/LoadingSpinner.vue'
import { loadingMixin } from '../mixins/loading'

export default {
  components: {
    NavBarComponent,
    BlockTitle,
    Spinner,
  },
  mixins: [loadingMixin],
//   data() {
//     return {
//       product: null,
//     };
//   },
  mounted() {
    this.startLoading()
    const category = this.$route.name === 'coffee' ? 'coffee' : 'goods'
    fetch(`http://localhost:3000/${category}/${this.$route.params.id}`)
      .then(response => response.json())
      .then(data => {
        // this.product = data;
        this.$store.dispatch('setCurrentProduct', data)
      })
      .catch(err => console.error('Ошибка загрузки:', err))
      .finally(() => {
      this.endLoading();
    });
  },
  destroyed() {
    // this.product = null;
    this.$store.dispatch('setCurrentProduct', null)
  },
  computed: {
    pageName() {
      return this.$route.name
    },
    product(){
        return this.$store.getters.getCurrentProduct
    },
    // card() {
    //   const pageGetter = this.pageName === 'coffee' ? 'coffee/getCoffeeById' : 'goods/getGoodsById';
    //   return this.$store.getters[pageGetter](this.$route.params.id);
    // }
  }
}
</script>

<style scoped>
.shop__girl {
  max-width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  display: block;
}
</style>