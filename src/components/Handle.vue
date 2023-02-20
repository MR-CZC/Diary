<template>
    <div id="handle">
        <div class="aside">
            <router-link :to="{name:'Add'}" class="add" active-class="active">添加日记</router-link>
            <router-link :to="{name:'Search'}" class="search" active-class="active">查询日记</router-link>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name : "Handle",
    }
</script>

<style scoped>
    #handle{
        width: 992px;
        margin: 20px auto 0;
        height: 300px;
        background-color: rgba(195, 183, 183 ,0.5);
        border-radius: 20px;
        display: flex;
        padding: 10px;
    }
    .aside{
        flex: 1;
        background-color: rgba(195, 183, 183 ,0.5);
        display: flex;
        border-radius: 20px;
        flex-direction: column;
        text-align: center;
        
    }    
    .main{
        flex:5;
        margin-left: 10px;
        height: 300px;
        background-color: rgba(195, 183, 183 ,0.5);
        border-radius: 20px;
    }
    .add{
        text-decoration: none;
        color: orange;
        border: 1px solid black;
        border-radius: 20px 20px 0 0;
        width: 100%;
        height: 50px;
        background-color: #fff;
        opacity: .5;
        line-height: 50px;
        font-weight: 700;
    }
    .search{
        text-decoration: none;
        color: skyblue;
        border: 1px solid black;
        border-top: 0 ;
        width: 100%;
        height: 50px;
        background-color: #fff;
        opacity: .5;
        line-height: 50px;
        font-weight: 700; 
    }
    .search{
        text-decoration: none;
    }
    .active{
        background-color: rgb(224, 244, 235);
    }
    @media screen and (max-width : 992px){
        #handle{
            height: 400px;
            width: 100%;
        }
        .main{
            height: 100%;
        }
    }
</style>