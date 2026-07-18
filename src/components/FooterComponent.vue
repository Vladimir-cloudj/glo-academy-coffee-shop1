<template>
        <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <ul class="footer d-flex flex-wrap">
                        <li class=" footer__item">
                            <router-link :to="links[0].link">
                                <img 
                                :src="require(`@/assets/logo/${links[0].icon}`)" 
                                :alt="links[0].text"
                                />
                            </router-link>
                        </li>
                        <!-- <li class="footer__item">
                            <router-link :to="links[1].link">{{links[1].text}}</router-link>
                        </li>
                        <li class="footer__item">
                            <router-link :to="links[2].link">{{links[2].text}}</router-link>
                        </li> -->
                        <!-- <li class="footer__item">
                            <router-link :to="links[3].link">{{links[3].text}}</router-link>
                        </li> -->
                        <nav-link
                            classLink="footer__item"
                            :link="links[1].link" 
                            :text="links[1].text"
                        />
                        <nav-link
                            classLink="footer__item" 
                            :link="links[2].link" 
                            :text="links[2].text"
                        />
                        <nav-link
                            classLink="footer__item"
                            :link="links[3].link" 
                            :text="links[3].text"
                        />
                    </ul>
                </div>
            </div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
        </div>
    </footer>
</template>

<script>
import NavLink from '@/components/NavLink.vue'

export default {
    components:{
        NavLink,
    },
    name: 'NavBarComponent',
    data() {
        return {
            links: [
                {
                    id: 0,
                    link:'/',
                    icon:'Logo_black.svg'
                },
                {
                    id: 1,
                    text:'our-coffee',
                    link:'/our-coffee'
                },
                {
                    id: 2,
                    text:'for your pleasure',
                    link:'/for-your-pleasure',
                    icon:'',
                },
                {
                    id: 3,
                    text:'contacts us',
                    link:'/contacts-us',
                },
                //  {
                //     id: 4,
                //     text:'thanks',
                //     link:'/thanks',
                // }
            ]
        }
    },
}
</script>
