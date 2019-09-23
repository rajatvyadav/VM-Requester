

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
                <span class="menu-title" @click="addUsers">Add User</span>
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
                <span class="menu-title" @click="addProject" >Add Projects</span>
                <i class="mdi mdi-chart-bar menu-icon"></i>
              </a>
            </li>
            
          </ul>
        </nav>

 <div class="main-panel">
          <div class="content-wrapper">
<div class="row">


<!-- datda -->
                  <div class="col-7 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Add User Form</h4>

                    <form class="forms-sample">
                      <div class="form-group">
                        <label for="exampleInputName1">UserName</label>
                        <input type="text" class="form-control" id="exampleInputName1" placeholder="Name" v-model="Username">
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail3">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail3" v-model="Email" placeholder="Email">
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword4">Password</label>
                        <input type="password" class="form-control" v-model="Password" id="exampleInputPassword4" placeholder="Password">
                      </div>
                      
                      
                      <div class="form-group row">
                                <label class="col-sm-3 col-form-label">User Role</label>
                                <div class="col-sm-9">
                                  <select class="form-control" v-model="Selected">
                                    <option>Admin</option>
                                    <option>Program Manager</option>
                                    <option>Support</option>
                                  </select>
                                </div>
                              </div>
                      <button type="submit" class="btn btn-gradient-primary mr-2" @click="addUserData">Submit</button>
                      <button class="btn btn-light">Cancel</button>
                    </form>
                  </div>
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
      Selected: "",
      Username: "",
      Email: "",
      Password: ""
    };
  },
  methods: {
    addUsers(){
      this.$router.push("/userform")
    },
    Dashboard(){
      this.$router.push("/admindashboard")
    },
    addUserData() {
      alert("Demo");
      axios
        .post("api/o/admin/adduser", {
          username: this.Username,
          password: this.Password,
          userrole: this.Selected,
          emailid: this.Email
        })
        .then(response => { this.$router.push("/admindashboard")});
    },
  addPrograms(){
    this.$router.push("/programform")
  },
  addProject(){
    this.$router.push("/projectform")
  }
  }
};
</script>
              