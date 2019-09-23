<template>
                  <div class="container-scroller">
                    <div class="container-fluid page-body-wrapper">
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
                <span class="menu-title">Add User</span>
                <i class="mdi mdi-home menu-icon"></i>
                
              </a>
            </li>            
            <li class="nav-item">
              <a class="nav-link" >
                <span class="menu-title">Add Programs</span>
                <i class="mdi mdi-chart-bar menu-icon"></i>
              </a>
            </li>
          </ul>
        </nav>


                  <div class="col-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Add Program Form</h4>

                    <form class="forms-sample">
                      <div class="form-group">
                        <label for="exampleInputName1">Program Name</label>
                        <input type="text" v-model="Programname" class="form-control" id="exampleInputName1" placeholder="Name" >
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail3">Program Manager</label>
                        <input type="email" v-model="ProgramManager" class="form-control" id="exampleInputEmail3"  placeholder="Email">
                      </div>
                      <button type="submit" class="btn btn-gradient-primary mr-2" @click="addProgramData">Submit</button>
                      <button class="btn btn-light">Cancel</button>
                    </form>
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
      Programname:"",
      ProgramManager:""
    };
  },
  methods: {
    addProgramData() {
      alert("Demo");
      axios
        .post("api/o/admin/createProgram", {
           programname:this.Programname,
           programmanager:this.ProgramManager
        })
        .then(response => {});
    }
  }
};
</script>
              