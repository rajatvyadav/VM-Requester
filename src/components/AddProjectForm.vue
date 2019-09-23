<template>
                  <div class="container-scroller">
                    <div class="container-fluid page-body-wrapper">
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
                <span class="menu-title" @click="Dashboard">Dashboard</span>
                <i class="mdi mdi-home menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <span class="menu-title"  @click="addUsers">Add User</span>
                <i class="mdi mdi-home menu-icon"></i>
                
              </a>
            </li>            
            <li class="nav-item">
              <a class="nav-link">
                <span class="menu-title" @click="addPrograms">Add Programs</span>
                <i class="mdi mdi-chart-bar menu-icon"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <span class="menu-title" @click="addProject">Add Projects</span>
                <i class="mdi mdi-chart-bar menu-icon"></i>
              </a>
            </li>
          </ul>
        </nav>

        <div class="main-panel">
          <div class="content-wrapper">
                  <div class="col-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Add Project Form</h4>

                    <form class="forms-sample">
                        <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Program Name</label>
                                <div class="col-sm-9">
                                  <select class="form-control" @change="onChange($event)">
                                      <option v-for="option in selected" :key="option.programName" v-modal="programName">{{option.programName}}</option>
                                  </select>
                                </div>
                              </div>
                      <div class="form-group">
                        <label for="exampleInputEmail3">Project Name</label>
                        <input type="text" v-model="Projectname" class="form-control">
                      </div>
                      <button type="submit" class="btn btn-gradient-primary mr-2" @click="addProject">Submit</button>
                      <button class="btn btn-light">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
             </div>
              </div>
               </div>
              </div>

              </template>


<script>
import axios from 'axios'
export default {
  name: "AddUserForm",
  data() {
    return {
      Projectname: '',
      ProjectManager: '',
      selected:[]
    };
  },
  methods: {
    addUsers(){
      this.$router.push("/userform")
    },
    Dashboard(){
      this.$router.push("/admindashboard")
    },
    getList(){
            axios.get("api/o/admin/showPrograms").then(response=>{
                this.selected=response.data
            })
    },
    addProject()
    {
      axios.post("api/o/admin/createProject",{
        
        pprojectName: this.Projectname,
        programName: this.ProjectManager
      }).then(response => { this.$router.push("/admindashboard")});
    },
    onChange (event) {
      this.ProjectManager = event.target.value
    },
  addPrograms(){
    this.$router.push("/programform")
  },
  addProject(){
    this.$router.push("/projectform")
  }
  },
  mounted(){
      this.getList()
  }
};
</script>
              