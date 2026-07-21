<template>
        <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <ul class="footer d-flex flex-wrap">
                        <!-- <li class=" footer__item">
                            <router-link :to="links[0].link">
                                <img 
                                :src="require(`@/assets/logo/${links[0].icon}`)" 
                                :alt="links[0].text"
                                />
                            </router-link>
                        </li> -->
                        <nav-link
                            classLink="footer__item"
                            :link="links.header.link"
                        >
                            <img 
                                :src="require(`@/assets/logo/${links.header.icon}`)" 
                                :alt="links.header.text"
                                />
                        </nav-link>

                        <nav-link
                            v-for="link in links.other"
                            :key="link.id"
                            classLink="footer__item"
                            :link="link.link" 
                            :text="link.text"
                        />
                        <!-- <nav-link
                            classLink="footer__item" 
                            :link="links[2].link" 
                            :text="links[2].text"
                        />
                        <nav-link
                            classLink="footer__item"
                            :link="links[3].link" 
                            :text="links[3].text"
                        /> -->
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
    name: 'FooterComponent',
    data() {
        return {
            links: {
                header: {
                    id: 0,
                    link:'/',
                    icon:'Logo_black.svg'
                },
                other: [
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
                ] 
            }
        }
    },
}
</script>
