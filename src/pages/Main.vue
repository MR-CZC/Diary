<template>
    <div id="main">
      <Top/>
      <Handle/>
      <DiaryList/>
    </div>
</template>

<script>
    import Top from "../components/Top.vue";
    import Handle from "../components/Handle.vue"
    import DiaryList from "../components/DiaryList.vue";

    export default {
        name : "Main",
        components : {Top,Handle,DiaryList}
    }
</script>
