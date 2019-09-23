<template>
   <div>
      <div class="container-scroller">
      <div class="container-fluid page-body-wrapper">
        <!-- <button  @click="logout">rfe</button> -->
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
                  <span class="font-weight-bold mb-2">ADMIN</span>
                  <span class="text-secondary text-small">Project Manager</span>
                </div>
                <!-- <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i> -->
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" >
                <span class="menu-title"  @click="Dashboard">Dashboard</span>
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
                    <h4 class="font-weight-normal mb-3">No. of Programs<i class="mdi mdi-chart-line mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">{{programData.length}}</h2>
                  </div>
                </div>
              </div>
              <div class="col-md-4 stretch-card grid-margin">
                <div class="card bg-gradient-success card-img-holder text-white">
                  <div class="card-body">
                    <!-- Card3 -->
                    <h4 class="font-weight-normal mb-3">No. of Projects<i class="mdi mdi-chart-line mdi-24px float-right"></i>
                    </h4>
                    <h2 class="mb-5">{{projectData.length}}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
            <div class="col-lg-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">User List</h4>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th> #Sr No </th>
                            <th> UserName </th>
                            <th> User-Role </th>
                            <th> Email </th>
                            
                          </tr>
                        </thead>
                        <tbody>
                       
          
                  <tr  v-for="(user,index) in userData" :key="user">
                    <td>{{index = index + 1}}</td>
          
              <td>{{user.username}}</td>
              <td>{{user.userrole}}</td>
              <td>{{user.emailid}}</td>
              
               
            </tr>
                      </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <!--  show programs-->
              <div class="col-lg-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Programs List</h4>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th> #Sr No </th>
                            <th> Program Name </th>
                            <th> Program Manager </th>
                          
                            
                          </tr>
                        </thead>
                        <tbody>
                       
          
                  <tr  v-for="(program,index) in programData" :key="program">
                    <td>{{index = index + 1}}</td>
          
              <td>{{program.programName}}</td>
              <td>{{program.programManager}}</td>
              
               
            </tr>
                      </tbody>
                      </table>
                    </div>
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
      programData:[],
      projectData:[]
      // UserFormData:{}
    }
  },
  beforeCreate: function () {
    // if (!this.$session.exists()) {
    //   alert()
    //   this.$router.push('/')
    // }
  },
  methods:{
   
    addUsers(){
      this.$router.push("/userform")
    },
    Dashboard(){
      this.$router.push("/admindashboard")
    },
    UserData(){
      axios
        .get("api/o/admin/getuser")
        .then(response => {
          this.userData=response.data
    })
  },  
  ProgramData(){
      axios
        .get("api/o/admin/showPrograms")
        .then(response => {
          this.programData=response.data
    })
  },
  ProjectData(){
      axios
        .get("api/o/admin/showProject")
        .then(response => {
          this.projectData=response.data
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
this.ProgramData()
this.ProjectData()
}
}
</script>

<style scoped>

</style>