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
                  <!-- <img src="../assets/images/faces/face1.jpg" alt="profile"> -->
                  <span class="login-status online"></span>
                  <!--change to offline or busy as needed-->
                </div>
                <div class="nav-profile-text d-flex flex-column">
                  <span class="font-weight-bold mb-2">ADMIN</span>
                  <span class="text-secondary text-small">Project Manager</span>
                </div>
                <!-- <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i> -->
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.html">
                <span class="menu-title">Dashboard</span>
                <i class="mdi mdi-home menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <span class="menu-title" @click="addUsers">Add Users</span>
                <i class="mdi mdi-home menu-icon"></i>
                
              </a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link">
                <span class="menu-title"  @click="addPrograms" >Add Programs</span>
                <i class="mdi mdi-chart-bar menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <span class="menu-title"  @click="addProject" >Add Projects</span>
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
                    <!-- <img src="../assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" /> -->
                    <!-- Card`1` -->
                    <h4 class="font-weight-normal mb-3">No. of Users<i class="mdi mdi-chart-line mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">{{userData.length}}</h2>
                  </div>
                </div>
              </div>
              <div class="col-md-4 stretch-card grid-margin">
                <div class="card bg-gradient-info card-img-holder text-white">
                  <div class="card-body">
                    <!-- <img src="../assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" /> -->
                    <!-- CArd2 -->
                  </div>
                </div>
              </div>
              <div class="col-md-4 stretch-card grid-margin">
                <div class="card bg-gradient-success card-img-holder text-white">
                  <div class="card-body">
                    <!-- Card3 -->
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
import axios from "axios"
import AddUserFrom from "@/components/AddUserForm.vue"
export default {
  components:{
    AddUserFrom
  },
  data(){
    return{
      userData:[],
      // UserFormData:{}
    }
  },
  methods:{
    addUsers(){
      this.$router.push("/userform")
    },
    UserData(){
      axios
        .get("api/o/admin/showusers")
        .then(response => {
          this.userData=response.data
    })
  },
  addPrograms(){
    this.$router.push("/programform")
  },
  addProject(){
    this.$router.push("/projectform")
  }
},
mounted(){
this.UserData()
}
}
</script>

<style scoped>

</style>