<template>
    <div>
        <div class="big">
            <Diary class="diary"  v-for="diary in diarys" :key="diary.id" :diary="diary"/>
            <div class="empty" v-show="diarys.length == 0">
                <span>查询结果为空</span>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import Diary from "./Diary.vue"
    export default {
        name : 'DiaryList',
        data (){
            return {
                items : [],
                diarys : [],
            }
        },
        components : {Diary},
        mounted(){
            axios.get(
                '/dairy/selectDairy'
            ).then(response=>{
                this.items = response.data.data.items;
                this.diarys = this.items.sort((a,b) => b.id - a.id);
            },error=>{
                console.log(error);
            }),
            this.$bus.$on("AddDiary",(data)=>{
                this.items = data;
                this.diarys = this.items.sort((a,b) => b.id - a.id);
            })
        },
        beforeDestroy() {
            this.$bus.$off("AddDiary")
        },
    }
</script>

<style scoped>
    .empty{
        width: 992px;
        height: 400px;
        background-color: rgba(195, 183, 183 ,0.5);
        background: url(../assets/bgi2.png)  center -15px no-repeat;
        border-radius: 20px;
        position: relative; 
    }
    .empty span {
        position: absolute;
        bottom : 20px;
        font-size: 14px;
        font-weight: 700;
        color: gray;
    }
    .big{
        margin: 20px auto;
        width: 992px;
        /* height: 100px; */
        background-color: rgba(195, 183, 183 ,0.5);
        text-align: center;
        border-radius: 20px;
        padding: 10px;
    }
    .diary{
        display: flex;
        background-color: #fff;
        margin: 20px;
        flex-direction: column;
        padding: 20px;
        border-radius: 20px;
    }
    
    @media screen and (max-width : 992px){
        .big{
            width: 100%;
            padding: 5px;
        }
        .empty{
            width: 100%;
        }
    }
</style>