<template>
    <div class="big">
       <div class="main">
            <div class="top">
                <h1>Diary Post</h1>
            </div>
            <div class="content">
                <div class="name">
                    作者名称：<el-input v-model="info.name" placeholder="请输入作者名称" class="diaryauthor"></el-input>
                </div>
                <div class="title">
                    日记标题：<el-input v-model="info.title" placeholder="请输入日记标题" class="diarytitle"></el-input>
                </div>
            </div>
            <div class="footer">
                <div class="detail">
                    <span>日记内容：</span><el-input type="textarea" :rows="6" resize="none" placeholder="请输入日记内容" v-model="info.detail"></el-input>
                </div>
                <el-button type="primary" round class="submit" @click="submit">发布</el-button>
            </div>
       </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name : 'Add',
        data(){
            return {
                info : {
                    name : "",
                    title : "",
                    detail : "",
                }
            }
        },
        methods : {
            submit(){
                if(this.info.name.trim().length && this.info.title.trim().length && this.info.detail.trim().length){
                    axios.post(
                        'http://pve.lycoris.site:9780/dairy/addDairy',
                        {},
                        {
                            params : {
                                name : this.info.name,
                                title : this.info.title,
                                detail : this.info.detail,
                            }
                        }
                    ).then(response=>{
                        // alert("发布成功");
                        this.info.name = "";
                        this.info.title = "";
                        this.info.detail = "";
                        // console.log(response);
                        axios.get(
                            'http://pve.lycoris.site:9780/dairy/selectDairy'
                        ).then(response=>{
                            this.$bus.$emit("AddDiary",response.data.data.items);
                        },reason=>{})
                    },reason=>{
                        alert("发布失败");
                    })
                }else{
                    alert("输入不能为空")
                }
            }
        }
    }
</script>

<style scoped>
    .big{
        height: 300px;
        background-color: rgba(195, 183, 183 ,0.5);
        border-radius: 20px;
    }
    .big .main{
        display: flex;
        flex-direction: column;
    }
    .big .main .top{
        flex: 1;
        text-align: center;
    }
    .big .main .top h1{
        margin: 0;
    }
    .big .main .content{
        flex: 2;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 13px;
    }
    .main .content .name,.main .content .title {
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 20px;
    }
    .main .content .name{
        flex : 3;
        justify-content: center;
    }
    .main .content .title{
        flex : 4;
    }
    .diaryauthor{
        width: 150px;
        height: 20px;
        margin-top: -15px;
    }
    .diarytitle{
        width: 250px;
        height: 20px;
        margin-top: -15px;
    }
    .big .main .footer {
        position: relative;
        flex : 4;
        margin-top: 20px;
        font-weight: 700;
        font-size: 20px;
        padding-left: 50px;
    }
    
    .footer .detail{
        width: 600px;
    }
    .footer .submit{
        position: absolute;
        right : 50px;
        bottom: 0px;
        font-weight: 700;
    }

    @media screen and (max-width : 992px){
        .big{
            width: 100%;
            height: 400px;
        }
        .big .top{
            width: 100%;
            text-align: center;
        }
        .big .main .content{
            flex-direction: column;
            align-items:flex-start;
            padding-left: 20px;
            margin-top: 0;
        }
        .diaryauthor,.diarytitle{
            width: 200px;
        }
        .main .content .name,.main .content .title{
            margin-top: 30px;
        }
        .big .main .footer{
            margin-top: 35px;
            padding-left: 20px;
        }
        .footer .detail{
            width: 80%;
        }
        .footer .submit{
            bottom: -30px;
            right: 3%;
        }
    }
</style>