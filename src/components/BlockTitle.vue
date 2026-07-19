<template>
    <h1 class="title-big">{{title}}</h1>
</template>

<script>
export default {
    name: "BlockTitle",
    props: {
        title: {
            type:String,
            require:true
        }
    }
}
</script>