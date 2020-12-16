import Vue from 'vue'
import Router from 'vue-router'

import home from './../components/Home.vue'
import login from './../components/Login.vue'
import signup from './../components/Signup.vue'


Vue.use(Router)

var router = new Router({
    routes : [
        {path:"/", component : home, name: "Home"},
        {path:"/login", component : login, name: "Login"},
        {path : "/signup", component: signup, name: "Signup"}
    ]


});

export default router;