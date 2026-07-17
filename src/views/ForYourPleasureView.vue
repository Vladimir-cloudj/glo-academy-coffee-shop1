<template>
    <main>
        <div class="banner goodspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <nav-bar-component/>
                    </div>
                </div>
                <h1 class="title-big">For your pleasure</h1>
            </div>
        </div>
        <section class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 offset-2">
                        <img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl">
                    </div>
                    <div class="col-lg-4">
                        <div class="title">About our beans</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="shop__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br><br>
                            Afraid at highly months do things on at. Situation recommend objection do intention<br>
                            so questions. <br>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br>
                            met spot shy want. Children me laughing we prospect answered followed. At it went<br>
                            is song that held help face.
                        </div>
                    </div>
                </div>
    
                <div class="line"></div>
    
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="shop__wrapper">
                            <product-card 
                                classItem = "shop__item"
                                :name="coffee[0].name"
                                :price="coffee[0].price"
                                :image="coffee[0].image"
                            />
                            <product-card
                                classItem = "shop__item" 
                                :name="coffee[1].name"
                                :price="coffee[1].price"
                                :image="coffee[1].image"
                            />
                            <product-card 
                                classItem = "shop__item"
                                :name="coffee[2].name"
                                :price="coffee[2].price"
                                :image="coffee[2].image"
                            />
                            <product-card 
                                classItem = "shop__item"
                                :name="coffee[3].name"
                                :price="coffee[3].price"
                                :image="coffee[3].image"
                            />
                            <product-card 
                                classItem = "shop__item"
                                :name="coffee[4].name"
                                :price="coffee[4].price"
                                :image="coffee[4].image"
                            />
                            <product-card 
                                classItem = "shop__item"
                                :name="coffee[5].name"
                                :price="coffee[5].price"
                                :image="coffee[5].image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue'
import ProductCard from '@/components/ProductCard.vue'


export default {
    components: {
        NavBarComponent,
        ProductCard,
    },
        data() {
        return {
            coffee: [
                {
                    id:"0",
                    name:'Solimo Coffee Beans 2kg',
                    image: 'coffee-3.jpg',
                    country: 'Brazil',
                    price : 10.73
                },
                {
                    id:"1",
                    name:'Presto Coffee Beans 1kg',
                    image: 'coffee-2.jpg',
                    country: "Brazil",
                    price : 15.99
                },
                {
                    id:"2",
                    name:'AROMISTICO Coffee 1kg',
                    image: 'coffee-3.jpg',
                    country: "Brazil",
                    price : 6.99
                },
                {
                    id:"3",
                    name:'Solimo Coffee Beans 2kg',
                    image: 'coffee-3.jpg',
                    country: "Brazil",
                    price : 10.73
                },
                {
                    id:"4",
                    name:'Solimo Coffee Beans 2kg',
                    image: 'coffee-3.jpg',
                    country: "Brazil",
                    price : 10.73
                },
                {
                    id:"5",
                    name:'Solimo Coffee Beans 2kg',
                    image: 'coffee-3.jpg',
                    country: "Brazil",
                    price : 10.73
                }
            ]
        }}
}
</script>