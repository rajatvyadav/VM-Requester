<template>
   <div>
      <div class="container-scroller">
      <div class="container-fluid page-body-wrapper">
        <!-- partial:partials/_sidebar.html -->
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
          <ul class="nav">
            <li class="nav-item nav-profile">
              <a href="#" class="nav-link">
                <div class="nav-profile-image">
                  <img src="../assets/images/av.png" alt="profile">
                  <span class="login-status online"></span>
                  <!--change to offline or busy as needed-->
                </div>
                <div class="nav-profile-text d-flex flex-column">
                  <span class="font-weight-bold mb-2">VM Support Staff</span>
                  <span class="text-secondary text-small">Project Manager</span>
                </div>
                <!-- <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i> -->
              </a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link">
                <span class="menu-title">View Request</span>
                
                <i class="mdi mdi-contacts menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" >
                <span class="menu-title">View Assets</span>
                <i class="mdi mdi-format-list-bulleted menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" >
                <span class="menu-title">View Check</span>
                <i class="mdi mdi-chart-bar menu-icon"></i>
              </a>
            </li>
            
          </ul>
        </nav>
        <!-- partial -->
        <div class="main-panel">
          <div class="content-wrapper">
            
            <div class="page-header">
              <h3 class="page-title">
                <span class="page-title-icon bg-gradient-primary text-white mr-2">
                  <i class="mdi mdi-home"></i>
                </span> Dashboard </h3>
             
            </div>
            <div class="row">
              <div class="col-md-4 stretch-card grid-margin">
                <div class="card bg-gradient-danger card-img-holder text-white">
                  <div class="card-body">
                    <h3>No. Of Requests Pending(s)</h3>
                    <h3>{{countpend}}</h3>
                    <!-- <img src="../assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" /> -->
                    <!-- Card`1` -->
                  </div>
                </div>
              </div>
              <div class="col-md-4 stretch-card grid-margin">
                <div class="card bg-gradient-info card-img-holder text-white">
                  <div class="card-body">
                   <h3> No. Of Requests Completed</h3>
                                       <h3>{{count}}</h3>
                    <!-- <img src="../assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" /> -->
                    <!-- CArd2 -->
                  </div>
                </div>
              </div>
              
                </div>
                <PendingList></PendingList>
              </div>
            </div>
            
    
          </div>

          <!-- partial -->
        </div>
        <!-- main-panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    
</template>
<script>
import PendingList from "@/components/PendingList.vue"
import axios from 'axios'
export default {
  components:{
    PendingList
  },
  data(){
    return{
      dashboardstats:[],
      count:0,
      countpend:0
      }
    },
    methods:{
      getdashboardstats(){
        axios
        .get("api/o/program_manager/show_requestvm")
        .then(response => {
          this.dashboardstats=response.data
          for(let i=0;i<=this.dashboardstats.length;i++){
            // console.log(response.data[i].currentstatus)
            console.log(this.dashboardstats)
            if(this.dashboardstats[i].currentStatus==="completed")
            {
                   this.count+=1
            }
            else{
              this.countpend+=1
            }
          }
      })
    }
    },
    mounted(){
      this.getdashboardstats()
    }
}
</script>




<style scoped>

</style>