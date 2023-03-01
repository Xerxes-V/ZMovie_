import Vue from 'vue'
import Router from 'vue-router'
import transfer from "../views/transfer"
import indexVue from "../views/Index"
import movies from "../views/MovieView"
import mainLand from "../views/IndexBody"
import login from "../views/Login"
import more from '../views/MovieDetail'
import communicate from '../views/Communication'
import type from '../views/Types'
import myself from "../views/MySelf"
import movie_comment from "../views/MovieComment"
import myComment from "../views/MyComment"
import movie_list from "../views/MovieList"
import me from '../views/Me'
import error from "../views/error"

import DrawerT from "../views/test/DrawerTest"
import HotPC from "../views/Index/HottestPC"
import imgT from "../views/test/ImgTest"
import scroll from "../views/test/ScrollTest"
import CT from "../views/test/CollectionTest"
import rt from '../views/test/randomTest'
import it from "../views/test/RealIndexTest"
import ht from "../views/test/HeaderTest"
import mt from "../views/test/MainBodyTest"
import cm from "../views/comment"

import admin from '../views/admin/index'
import user_msg from "../views/admin/UserMsg"
import movie_msg from "../views/admin/MovieMsg"
import movie_add from "../views/admin/AddMovie"
import movie_management from "../views/admin/MovieManagement"
import user_management from "../views/admin/UserManagement"
import comment_management from "../views/admin/CommentManagement"
import admin_management from "../views/admin/AdminManagement"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios)

Vue.use(Router)
Vue.use(ElementUI);

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/transfer',
      component: transfer
    },
    {
      path:'/index',
      component: indexVue,
      children:[
        {
          path:'/movieviews',
          name:'movieviews',
          component: movies
        },
        {
          path:'/main',
          component: mainLand
        },
        {
          path:'/subject/:id',
          name:'movieDetails',
          component:more,

        },
        {
          path: '/type',
          component: type
        },
        {
          path:'/newest',
          component:movie_list,
        }
      ]
    },
    {
      path:'/dt',
      component: cm
    },
    {
      path:'/hotpc',
      component: HotPC
    },
    {
      path:'/test/img',
      component: imgT
    } ,
    {
      path:'/test/scroll',
      component: scroll
    },
    {
      path:'/test/ct',
      component:CT
    },
    {
      path:'/test/index',
      component:it,
      children:[
        {
          path:'/test/ht',
          component:ht,
        }
      ]
    },
    {
      path:'/log',
      component:login
    },
    {
      path:'/commu',
      component:communicate
    },
    {
      path:'/detail',
      component:more,
    },
    {
      path:'/types',
      component:type,
    },
    {
      path:'/myself',
      component:myself,
      children :[
        {
          path:"/movieComment",
          component:movie_comment,
        },
        {
          path:'/myComment',
          component:myComment,
        },
        {
          path:'/myCollect',
          component:movie_list
        },
        {
          path:'/myHistory',
          component:movie_list
        },
        {
          path:'/me',
          component:me,
        }
      ],
    },

    {
      path:'/admin',
      component:admin,
      children:[
        {
          path:'/userMsg',
          component:user_msg,
        },
        {
          path:'/movieMsg',
          component:movie_msg,
        },
        {
          path:'/movieAdd',
          component:movie_add,
        },
        {
          path:'/movieManagement',
          component:movie_management,
        },
        {
          path:'/userManagement',
          component:user_management,
        },
        {
          path:'/commentManagement',
          component:comment_management,
        },
        {
          path:'/adminManagement',
          component:admin_management,
        }
      ]
    },
    {
      path:'*',
      component:error
    },
  ]
})
