<template>
  <div class="header-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-8">
          <router-link to="/" class="navbar-brand">
            <div class="d-flex align-items-center">
              <img src="assets/images/logo.png" alt class="logo valign-middle" />
              <!-- <h1>EASY</h1> -->
            </div>
          </router-link>
        </div>
        <div class="col-lg-6 col-12 order-sm-2 order-3 d-flex align-items-center">
          <b-navbar toggleable="lg" variant="bg-white">
            <b-navbar-toggle target="nav-collapse" />
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <!-- <b-nav-item to="/">Home</b-nav-item> -->
                <!-- <b-nav-item to="services">Services</b-nav-item> -->
                <!-- <b-nav-item to="projects">
                  Projects
                </b-nav-item>-->
                <!-- <b-nav-item to="sessions">Sessions</b-nav-item> -->
                <b-nav-item v-if="sessionStarted=='false'" @click="quitWindow(sessionStarted)">Quit</b-nav-item>
                <b-nav-item v-if="sessionStarted=='true'" @click="quitWindow(sessionStarted)">Close</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
        <div class="col-lg-2 col-4 order-sm-3 order-2 text-right d-flex align-items-center">
          <button class="logout" @click.prevent="logout">Logout</button>
          <img src="assets/images/user.png" alt class="user-pic" />

          <!-- <b-dropdown
            size="sm"
            variant="link"
            right
            toggle-class="text-decoration-none"
            no-caret
            class="box-profile"
          >
            <template slot="button-content">
          </template>-->
          <!-- <b-dropdown-item>My Profile</b-dropdown-item>
            <b-dropdown-item>Edit Profile</b-dropdown-item>
            <b-dropdown-item>Settings</b-dropdown-item>
          <b-dropdown-item>Logout</b-dropdown-item>-->
          <!-- </b-dropdown> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
// import axios from 'axios'
// import lodashOrderBy from 'lodash/orderBy'

export default {
  name: "Header1",
  data() {
    return {
      isActive: false,
      isOpen: false,
      isOpen2: false,
      sessionStarted: false
    };
  },
  methods: {
    quitWindow() {
      window.quit(this.sessionStarted);
    },
    togglesidebar() {
      var html = document.querySelector("html");
      var mainwrapper = document.querySelector(".main-wrapper");
      var sidebar = document.querySelector(".sidebar");
      // var mobilebtn = document.querySelector('#mobile_btn')

      mainwrapper.classList.toggle("slide-nav");
      sidebar.classList.toggle("opened");
      html.classList.toggle("menu-opened");
    },
    logout() {
      this.$store
        .dispatch("AUTH_LOGOUT")
        .then(res => {
          // Redirect to next page after suucessfull login
          Vue.toasted.success("Logout succesfully!", {
            theme: "bubble",
            duration: 6000
          });
          this.$router.push("/Login");
        })
        .catch(err => {
          this.$toasted.error(err, {
            duration: 4000
          });
          Vue.$log.error(err);
        });

      // let vm = this
      // window.MKCLAPI.logout()
      //   .then(() => {
      //     vm.$store.dispatch('clearStore')
      //     vm.$router.push('/')
      //   })
      //   .catch(e => {
      //     vm.$toasted.error(vm.$t('logOut.failToLogout'))
      //   })
    }
  },
  mounted() {
    // alert(sessionStorage.getItem("sessionStarted"))
    this.sessionStarted = sessionStorage.getItem("sessionStarted");
  }
};
</script>
<style>
.sidebar-inner .router-link-exact-active {
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
}

.sidebar-inner .router-link-exact-active:before {
  background: rgba(255, 255, 255, 0.5);
}

.sidebar-inner .navbar-nav > li > a.router-link-exact-active:before {
  opacity: 1;
}

.navbar-dark .navbar-toggler {
  margin-left: auto !important;
}

.navbar.navbar-light .navbar-nav .nav-link {
  padding: 8px 14px;
}

@media (max-width: 425px) {
  .header-top .text-right span {
    display: none;
  }
}

.user-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.navbar-brand h1 {
  margin-bottom: 0;
  font-size: 34px;
}

.box-profile.dropdown .dropdown-menu .dropdown-item {
  padding: 7px 18px;
  font-size: 14px;
  line-height: 20px;
}

.valign-middle {
  margin-top: 7px;
}
</style>
