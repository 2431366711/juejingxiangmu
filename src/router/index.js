import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path:'/',
    redirect: '/home'
  },
    {
      path:'/home',
      component:()=>import("../pages/List/MainList.vue"),
      children:[
        {
          path:'/',
          redirect:'/home/recommendation'
        },
        {
          path:'share',
          component:()=>import("../pages/List/list/RecommendationCon.vue")
        },
        {
          path:'ask',
          component:()=>import("../pages/List/list/RecommendationCon.vue")
        },
        {
          path:'recommendation',
          component:()=>import("../pages/List/list/RecommendationCon.vue")
        }
      ]
    },
    {
      path:'/article/author/:author/id/:id',
      component:()=>import("../pages/Article/ArtcileMain.vue")
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
