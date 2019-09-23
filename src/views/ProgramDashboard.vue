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
                  <span class="font-weight-bold mb-2">Program Manager</span>
                  <span class="text-secondary text-small">Project Manager</span>
                </div>
                <!-- <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i> -->
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <span class="menu-title" @click="routeDashboard">Dashboard</span>
                <i class="mdi mdi-chart-bar menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <span class="menu-title" @click="requestvm">Request VM</span>
                <i class="mdi mdi-contacts menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <span class="menu-title">View VM</span>
                <i class="mdi mdi-format-list-bulleted menu-icon"></i>
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
                    <!-- <img src="../assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" /> -->
                    <!-- Card`1` -->
                    <h3>No. Of Requests Pending(s)</h3>
                    <h3>{{countpend}}</h3>
                  </div>
                </div>
              </div>
              <div class="col-md-4 stretch-card grid-margin">
                <div class="card bg-gradient-info card-img-holder text-white">
                  <div class="card-body">
                    <!-- <img src="../assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" /> -->
                    <!-- CArd2 -->
                    <h4 class="font-weight-normal mb-3">No. of Approved Request<i class="mdi mdi-chart-line mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">{{}}</h2>
                  </div>
                </div>
              </div>
              <div class="col-md-4 stretch-card grid-margin">
                <div class="card bg-gradient-success card-img-holder text-white">
                  <div class="card-body">
                    <!-- Card3 -->
                    <h4 class="font-weight-normal mb-3">No. of Rejected Request<i class="mdi mdi-chart-line mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">1</h2>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          <!-- partial -->
        </div>
        <!-- main-panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
   </div>
</template>


<script>
export default {
   data(){
    return{
      count:0,
      countpend:0
      }
    },
  methods:{
     routeDashboard(){
          this.$router.push("/programdashboard")
      },
    requestvm(){
      this.$router.push("/requestVM")
    },
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
   } ,
    mounted(){
      this.getdashboardstats()
    }
}
</script>

<style scoped>

</style>