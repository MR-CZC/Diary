<template>
    <div id="detail">
        <Banner />
        <Detail :detail="$route.params"/>
    </div>
</template>

<script>
    import Banner from "../components/Banner.vue";
    import Detail from "../components/Detail.vue";
    export default {
        name : 'DiaryDetail',
        components : {Banner,Detail},
    }
</script>

<style scoped>
    
</style>