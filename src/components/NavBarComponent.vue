<template>
    <header>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
            <li class="header__item">
                <router-link :to="links[0].link"><img :src="require(`@/assets/logo/${links[0].icon}`)" :alt="links[0].text"></router-link>
            </li>
            <li class="header__item">
                <router-link :to="links[1].link">{{links[1].text}}</router-link>
            </li>
            <li class="header__item">
                <router-link :to="links[2].link">{{links[2].text}}</router-link>
            </li>
            <li class="header__item">
                <router-link :to="links[3].link">{{links[3].text}}</router-link>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'NavBarComponent',
    data() {
        return {
            links: [
                {
                    id: 0,
                    link:'/',
                    icon:'Logo.svg'
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

