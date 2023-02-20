<template>
    <div class="diary">
        <div class="top"><span>标题 : {{diary.title}}/</span> 作者 : {{diary.name}}</div>
        <div class="banner">编辑于{{diary.time}}</div>
        <div class="main">{{diary.detail}}</div>
        <div class="footer">
            <el-button type="primary" plain @click="check">查看日记详情</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Diary",
        props:['diary'],
        methods : {
            check(){
                this.$router.push({
                    name : "DiaryDetail",
                    params : this.diary
                },()=>{})
            }
        },
    }
</script>

<style scoped>
    .diary{
        display: flex;
        background-color: rgba(159, 152, 152,.3);
        margin: 20px;
        flex-direction: column;
        padding: 10px;
        border-radius: 20px;
    }
    .diary .top{
        flex: 1;
        color: rgb(73, 156, 189);
        font-weight: 700;
        font-size: 20px;
    }
    .diary .top span{
        font-weight: 700;
        color: orange;
    }
    .diary .banner {
        flex:1;
        color: gray;
        font-size: 14px;
    }
    .diary .main{
        flex: 3;
        margin-top: 10px;
    }
    .diary .footer{
        flex: 1;
        margin-top: 10px;
    }
</style>