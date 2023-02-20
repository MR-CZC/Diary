<template>
    <div class="big">
        <h1>
            <span>Diary Share</span> 
        </h1>
    </div>
</template>

<script>
    export default {
        name : 'Top',
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    h1{
        margin: 0 auto;
        width: 992px;
        height: 125px;
        background-color: rgba(195, 183, 183 ,0.5);
        text-align: center;
        border-radius: 20px;
    }
    h1 span{
        height: 100%;
        line-height: 125px;
        margin: 0 auto;
        font-size: 60px;
        color: #fff;
    }
    @media screen and (max-width : 992px){
        h1{
            width: 100%;
            height: 100px;
        }
        h1 span{
            line-height: 100px;
        }
    }
</style>