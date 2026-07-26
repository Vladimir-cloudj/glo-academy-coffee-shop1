<template>
    <header>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
            <nav-link
                :link="links.header.link"
                classLink="header__item" 
            >
                <img 
                    :src="require(`@/assets/logo/${links.header.icon}`)" 
                    :alt="links.header.text">
            </nav-link>

            <nav-link
                v-for="link in links.other"
                :key="link.id"
                classLink="header__item" 
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
    computed: {
        links() {
            return this.$store.getters["getHeaderLinks"]
        }
    }
}
</script>

