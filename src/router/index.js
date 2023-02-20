import VueRouter from "vue-router"
import DiaryDetail from "../pages/DiaryDetail"
import Main from "../pages/Main"
import Home from "../pages/Home"
import Add from "../pages/Add"
import Search from "../pages/Search"

export default new VueRouter({
    routes : [
        {
            name : "Home",
            path : "/home",
            component : Home,
            children : [
                {
                    name : "Main",
                    path : "main",
                    component : Main,
                    children : [
                        {
                            name : "Add",
                            path : "add",
                            component : Add,
                        },
                        {
                            name : "Search",
                            path : "search",
                            component : Search,
                        }
                    ]
                },
                {
                    name : 'DiaryDetail',
                    path : 'diarydetail',
                    component : DiaryDetail,
                },
            ]
        },
        {
            path : '/',
            redirect: '/home/main/add',
        }
    ]
})