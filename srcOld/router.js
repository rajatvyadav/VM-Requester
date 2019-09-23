import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '@/components/appLayout'
import AddUserForm from '@/components/AddUserForm.vue'
import AddProgramForm from '@/components/AddProgramForm.vue'
import AddProjectForm from '@/components/AddProjectForm.vue'


Vue.use(Router)
function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}
export default new Router({
routes: [

  {
    path: '/login',
    name: 'login',
    component: loadView('LoginUser')
  
  },
    {
      path: '/',
      name: 'layout',
      component: AppLayout,
      children: [
        {
          path: '/vmdashboard',
          name: 'dashboard',
          component: loadView('VMDashboard')
        
        },
        {
          path: '/admindashboard',
          name: 'admindashboard',
          component: loadView('AdminDashboard')
        
        },
         {
          path: '/programdashboard',
          name: 'userdashboard',
          component: loadView('ProgramDashboard')
        },
        {
          path: '/requestVM',
          name: 'requestvm',
          component: loadView('RequestVM')
        },
        {
          path: '/pendingrequestlist',
          name: 'pendingrequestlist',
          component: loadView('PendingRequestList')
        },
        {
          path: '/userform',
          name: 'AddUserForm',
          component: AddUserForm
        },
        {
          path: '/programform',
          name: 'AddProgramForm',
          component: AddProgramForm
        },
        {
          path: '/projectform',
          name: 'AddProjectForm',
          component: AddProjectForm
        },
        {
          path: '/serveform',
          name: 'ServeRequest',
          component: loadView('ServeRequest')
        }
      ] 
    }
  ]
})
