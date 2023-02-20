<template>
    <div class="big">
        <div class="diary">
            <div class="title">
                标题 : <span v-show="!isEdit">{{diary.title}}</span>
                <input type="text" class="ipt" v-show="isEdit" v-model="diary.title">
            </div>
            <div class="name">
                作者 : <span v-show="!isEdit">{{diary.name}}</span>
                <input type="text" class="ipt" v-show="isEdit" v-model="diary.name">
            </div>
            <div class="time">
                编辑时间 : <span>{{diary.time}}</span>
            </div>
            <div class="content">
                日记内容 : <div class="thing" v-show="!isEdit">{{diary.detail}}</div>
                <input type="text" class="ipt" v-show="isEdit" v-model="diary.detail">
            </div>
            <div class="footer">
                <div class="button">
                    <el-button round @click="back">返回</el-button>
                    <el-button type="primary" round @click="edit" v-show="!isEdit">修改</el-button>
                    <el-button type="success" round v-show="isEdit" @click="complete">完成</el-button>
                    <el-button type="danger" round @click="remove">删除</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { Message } from "element-ui";
    export default {
        name : "Detail",
        props : ['detail'],
        data (){
            return {
                isEdit : false,
                diary : this.detail,
            }
        },
        methods : {
            back(){
                this.$router.back()
            },
            edit(){
                this.isEdit = true;
            },
            complete(){
                let that = this;
                if(this.diary.name.trim().length && this.diary.title.trim().length && this.diary.detail.trim().length){
                    axios.post(
                        '/dairy/updateDairy',
                        {},
                        {
                            params : {
                                id : this.diary.id,
                                name : this.diary.name,
                                title : this.diary.title,
                                detail : this.diary.detail,
                            }
                        }
                    ).then(response => {
                        // console.log(response);
                        this.isEdit = false;
                    },reason => {
                        console.log(reason);
                    })
                }
                else {
                    alert("输入不能为空");
                }  
            },
            remove(){
                axios.delete(
                    '/dairy/deleteDairy',
                    {
                        params : {
                            id:this.detail.id
                        }
                    }
                ).then(resopnse=>{
                    // alert("删除成功");
                    Message({
                        message : "删除成功",
                        type : 'success'
                    })
                    this.back();
                },reason=>{
                    Message({
                        message : "删除失败",
                        type : 'warning'
                    })
                })
            }
        }
    }
</script>

<style scoped>
    .big{
        margin: 20px auto;
        width: 992px;
        /* height: 100px; */
        background-color: rgba(195, 183, 183 ,0.5);
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
    .title{
        font-size: 20px;
        color: orange;
        font-weight: 700;
        flex: 2;
        margin: 10px;
    }
    .name{
        font-size: 20px;
        color: skyblue;
        font-weight: 700;
        flex: 2;
        margin: 10px;
    }
    .time{
        font-size: 14px;
        color: gray;
        flex: 1;
        margin: 10px;
    }
    .content{
        flex: 4;
        margin: 10px;
        font-size: 18px;
        font-weight: 700;
    }
    .thing{
        font-weight: 400;
        font-size: 16px;
    }
    .footer {
        flex: 1;
        margin-top: 30px;
    }
    .footer .button{
        float: right;
    }
    .ipt{
        margin-top: -10px;
        outline: none;
    }
    @media screen and (max-width : 992px){
        .big{
            width: 100%;
            padding: 5px;
        }
    }
</style>