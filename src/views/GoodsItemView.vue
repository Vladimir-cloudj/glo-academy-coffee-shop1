<template>
    <main>
        <div v-if="card" class="banner" :class="pageName === 'goods' ? 'coffepage-banner' : 'goodspage-banner'">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <nav-bar-component/>
                    </div>
                </div>
                <block-title :title="card.name"/>
            </div>
        </div>

        <section v-if="card" class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 offset-1">
                        <img class="shop__girl" :src="require(`@/assets/img/${card.image}`)" alt="coffee_item">
                    </div>
                    <div class="col-lg-4">
                        <div class="title">About it</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="shop__point">
                            <span>Country:</span>
                            Brazil
                        </div>
                        <div class="shop__point">
                            <span>Description:</span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                        </div>
                        <div class="shop__point">
                            <span>Price: </span>
                            <span class="shop__point-price">{{ card.price | addCurrency }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div v-else class="container mt-5 text-center">
            <h2>Товар не найден</h2>
            <router-link to="/" class="btn btn-outline-dark">На главную</router-link>
        </div>
   </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue"
import BlockTitle from '@/components/BlockTitle.vue'

export default {
    components: {
        NavBarComponent,
        BlockTitle,
    },
    computed: {
        pageName() {
            return this.$route.name
        },
        arrayName() {
            return this.$route.name;
        },
        card() {
            const pageGetter = this.pageName === 'coffee' ? 'getCoffeeById' : 'getGoodsById';
            return this.$store.getters[pageGetter](this.$route.params.id);
            // return this.$store.getters.getProductById(this.$route.params.id, this.arrayName)
        }
    }
}
</script>