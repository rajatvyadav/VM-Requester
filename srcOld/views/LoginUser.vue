<template>
  <div>
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row flex-grow">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="brand-logo">
                 <!-- <img src="../assets/mkcl-logo.png" alt="mkcl logo" class="mb-4" width="100px"/> -->
                </div>
                <form class="pt-3"  @submit.prevent>
                  <div class="form-group">
                    <input v-model="username"  required type="text" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username">
                  </div>
                  <div class="form-group">
                    <input v-model="password"  required type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password">
                  </div>
                   <div>
                      <b-form-select v-model="role" :options="roles" required></b-form-select>
                   </div>

                  <div class="mt-3">
                    <a class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" @click="authenticate()">SIGN IN</a>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";

export default {
  name:"HelloWorld",
  data() {
    return {
      username: "",
      password: "",
      // centerCode: "",
      token: "",
      status: "",
      role: "",
      roles:[
        { value: "admin", text: 'Admin' },
        { value: "program_manager", text: 'Program Manager' },
        { value: "vmsupport", text: 'VM Support Staff' },
      ]
    };
  },

  
  methods: {
    authenticate() {
      if(this.role=="admin"){
        this.status = "loading";
      sessionStorage.setItem("user-token", "token");
      axios
        .post("api/o/login/loginuser", {
          username: this.username,
          password: this.password,
          // centerCode: this.centerCode
        })
        .then(response => {
          if (response) {
            let token = response.headers.authorization;
            console.log(response);
            console.log(token);
            sessionStorage.setItem("user-token","Bearer "+token);
            // console.log('getitem: '+sessionStorage.getItem("user-token"));
            // sessionStorage.setItem("centerCode", response.data);
            // console.log("sessionStorage : " + sessionStorage);
            this.status = "success";
            // this.$router.push("/dashboard")
            this.$router.push("/admindashboard")
            //TODO: Send Centecode from response to Dashboard
          } else {
            this.status = "error";
            sessionStorage.removeItem("user-token")
            // sessionStorage.removeItem("centerCode")
            console.log("sessionStorage : " + sessionStorage);

            //TODO: Send Centecode from response to Dashboard
          }
        })
        .catch(err => {
          alert(err);
          Vue.$log.error(err);
        });

        
        }
      else if(this.role == "program_manager"){
        this.$router.push("/programdashboard")
      // this.status = "loading";
      // sessionStorage.setItem("user-token", "token");
      // axios
      //   .post("/o/adminLogin", {
      //     username: this.username,
      //     password: this.password,
      //     centerCode: this.centerCode
      //   })
      //   .then(response => {
      //     if (response) {
      //       let token = response.headers.authorization;
      //       console.log(response);
      //       console.log(token);
      //       sessionStorage.setItem("user-token","Bearer "+token);
      //       console.log('getitem: '+sessionStorage.getItem("user-token"));
      //       sessionStorage.setItem("centerCode", response.data);
      //       console.log("sessionStorage : " + sessionStorage);
      //       this.status = "success";
      //       this.$router.push("/dashboard")
      //       //TODO: Send Centecode from response to Dashboard
      //     } else {
      //       this.status = "error";
      //       sessionStorage.removeItem("user-token")
      //       sessionStorage.removeItem("centerCode")
      //       console.log("sessionStorage : " + sessionStorage);

      //       //TODO: Send Centecode from response to Dashboard
      //     }
      //   })
      //   .catch(err => {
      //     alert(err);
      //     Vue.$log.error(err);
      //   });
      }else{
        this.$router.push("/vmdashboard")
      }
    }
  }
};
</script>

