<template>
    <header>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
            <nav-link
                :link="links.header.link"
                class="header__item" 
            >
                <img 
                    :src="require(`@/assets/logo/${links.header.icon}`)" 
                    :alt="links.header.text">
            </nav-link>

            <nav-link
                v-for="link in links.other"
                :key="link.id"
                class="header__item" 
                :link="link.link" 
                :text="link.text"
            />
        </ul>
    </header>
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
            links: {
                header:
                    {
                        id: 0,
                        link:'/',
                        icon:'Logo.svg'
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

