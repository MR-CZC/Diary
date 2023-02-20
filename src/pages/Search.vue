<template>
    <div class="big">
        <div class="main">
            <div class="top">
                <h1>Diary Search</h1>
            </div>
            <div class="content">
                <div class="type">
                    请选择要查询的类型
                    <el-select v-model="info.value" placeholder="请选择">
                    <el-option
                        v-for="item in info.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                    </el-select>
                </div>
                <div class="search">
                    请输入查询条件
                    <el-input type="textarea" :rows="5" resize="none" placeholder="请输入查询条件" v-model="info.condition" class="condition"></el-input>
                </div>
            </div>
            <div class="footer">
                <el-button type="primary" round class="search" @click="search">查询</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name : "Search",
        data (){
            return {
                info : {
                    condition : "",
                    options : [
                        {
                            value : "1",
                            label : "1、作者"
                        },
                        {
                            value : "2",
                            label : "2、标题"
                        },
                        {
                            value : "3",
                            label : "3、内容"
                        }
                    ],
                    value : "",
                }
            }
        },
        methods : {
            search(){
                if(this.info.condition.trim().length && this.info.value.trim().length){
                    axios.post(
                        'http://pve.lycoris.site:9780/dairy/selectDairyByCondition',
                        {},
                        {
                            params : {
                                condition : this.info.condition,
                                type : this.info.value,
                            }
                        }
                    ).then(response=>{
                        this.$bus.$emit("AddDiary",response.data.data.items);
                    },reason=>{
                        console.log(reason);
                    })
                }
                else{
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
        display: flex;
        flex-direction: column;
        align-items:flex-start;
        padding-left: 20px;
        margin-top: 10px;
    }
    .big .main .content .search {
        width: 600px;
    }
    .big .main .footer{
        position: relative;
    }
    .footer .search{
        position: absolute;
        right : 50px;
        bottom: -60px;
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
            align-items:flex-start;
            padding-left: 20px;
            margin-top: 0;
        }
        .main .content .type,.main .content .search{
            margin-top: 30px;
        }
        .big .main .content .search{
            width: 80%;
        }
        .big .main .footer{
            margin-top: 35px;
            padding-left: 20px;
        }
        .main .content .search{
            width: 80%;
        }
    }
</style>