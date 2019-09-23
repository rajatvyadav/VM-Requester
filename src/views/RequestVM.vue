<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper">
      <nav class="sidebar sidebar-offcanvas"
id="sidebar">
        <ul class="nav">
          <li class="nav-item nav-profile">
            <a href="#"
class="nav-link">
              <div class="nav-profile-image">
                <!-- <img src="../assets/images/faces/face1.jpg" alt="profile"> -->
                <span class="login-status online" />
                <!--change to offline or busy as needed-->
              </div>
              <div class="nav-profile-text d-flex flex-column">
                <span class="font-weight-bold mb-2">{{ ProgramManager }}</span>
                <span class="text-secondary text-small">Program Manager</span>
              </div>
              <!-- <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i> -->
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <span class="menu-title"
@click="routeDashboard">Dashboard</span>
              <i class="mdi mdi-home menu-icon" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <span class="menu-title"
@click="routerequestVM">Request VM</span>
              <i class="mdi mdi-contacts menu-icon" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <!-- <span class="menu-title" @click="viewvm">View VM</span> -->
              <i class="mdi mdi-format-list-bulleted menu-icon" />
            </a>
          </li>
        </ul>
      </nav>
 <div class="main-panel">
          <div class="content-wrapper">
      <div class="col-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">
Request VM
</h4>
            <form class="forms-sample">
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Program Name</label>
                <div class="col-sm-9">
                  <select class="form-control"
@change="onChange($event)" v-model="key">
                    <option
                      v-for="option in selected"
                      :key="option.programName"
                    >
{{ option.programName }}
</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Project Name</label>
                <input type="text"
v-model="Projectname" class="form-control" placeholder="Name" >
              </div>

              <div class="form-group row">
                <label class="col-sm-3 col-form-label">VM Type</label>
                <div class="col-sm-9">
                  <select class="form-control"
v-model="selected">
                    <option>Database</option>
                    <option>Application</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">
                  <b>VM Resources</b>
                </label>
                <!-- <input type="text" class="form-control" placeholder="Name" > -->
              </div>

              <div class="form-group">
                <label for="exampleInputUsername1">Ram Size</label>
                <input
                  v-model="Ram"
                  type="number"
                  class="form-control"
                  id="exampleInputUsername1"
                  placeholder="Enter Ram Size"
                >
              </div>
              <div class="form-group">
                <label for="exampleInputUsername1">CPU Core</label>
                <input
                  v-model="CPU"
                  type="number"
                  class="form-control"
                  id="exampleInputUsername1"
                  placeholder="Enter CPU Core"
                >
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Operating System</label>
                <div class="col-sm-9">
                  <select class="form-control"
v-model="OS">
                    <option>Windows OS</option>
                    <option>Linux OS</option>
                  </select>
                </div>
              </div>

              <label class="col-sm-3 col-form-label">Data Size Required</label>
              <div class="form-group">
                <label for="exampleInputUsername1">/root</label>
                <input
                  v-model="Root"
                  type="number"
                  class="form-control"
                  id="exampleInputUsername1"
                  placeholder="Enter root size"
                >
              </div>
              <div class="form-group">
                <label for="exampleInputUsername1">/app</label>
                <input
                  v-model="App"
                  type="number"
                  class="form-control"
                  id="exampleInputUsername1"
                  placeholder="Enter App size"
                >
              </div>
              <div class="form-group">
                <label for="exampleInputUsername1">/data</label>
                <input
                  v-model="Data"
                  type="number"
                  class="form-control"
                  id="exampleInputUsername1"
                  placeholder="Enter data size"
                >
              </div>
              <div class="form-group">
                <label for="exampleInputUsername1">/logs</label>
                <input
                  v-model="Log"
                  type="number"
                  class="form-control"
                  id="exampleInputUsername1"
                  placeholder="Enter log size"
                >
              </div>
              <div class="form-group">
                <label for="exampleInputUsername1">/backups</label>
                <input
                  v-model="Backups"
                  type="number"
                  class="form-control"
                  id="exampleInputUsername1"
                  placeholder="Enter Backups size"
                >
              </div>

              <label class="col-sm-3 col-form-label">Firewall Setup</label>
              <div class="form-group">
                <label for="exampleInputUsername1">PIP</label>
                <select class="form-control"
v-model="PIP">
                  <option>Required</option>
                  <option>Not Requiured</option>
                </select>
              </div>
              <!-- <h5>Ports</h5><br> -->
              <div class="form-group">
                <label for="exampleInputUsername1">Ports</label>
                <input
                  v-model="Portnumber"
                  type="number"
                  class="form-control"
                  id="exampleInputUsername1"
                  placeholder="Enter Port Number"
                >
              </div>

              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Direction</label>
                <div class="col-sm-9">
                  <select class="form-control"
v-model="Direction">
                    <option>Incoming</option>
                    <option>Outgoing</option>
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Internet Required</label>
                <div class="col-sm-9">
                  <select class="form-control"
v-model="Internetrequire">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>

              <button type="submit"
class="btn btn-gradient-primary mr-2" @click="requestVM">
Submit
</button>
              <button class="btn btn-light">
Cancel
</button>
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
import axios from 'axios';
export default {
  data () {
    return {
      ProgramManager: '',
      ProgramName: '',
      Projectname: '',
      selected: [],
      Ram: '',
      CPU: '',
      OS: '',
      Root: '',
      App: '',
      Data: '',
      Log: '',
      Backups: '',
      key: '',
      PIP: '',
      Portnumber: '',
      Direction: '',
      Internetrequire: ''
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    routeDashboard () {
      this.$router.push('/programdashboard')
    },
    routerequestVM () {
      this.$router.push('/vmrequest')
    },
    onChange (event) {
      this.ProgramName = event.target.value
    },
    getList () {
      axios.get('api/o/admin/showPrograms').then(response => {
        this.ProgramManager = sessionStorage.getItem('user')
        this.selected = response.data
        // for (let i = 0; i < response.data.length; i++) {
        //   let j = 0
        //   console.log(response.data[i].programmanager)
        //   if (response.data[i].programmanager === this.ProgramManager) {
        //     this.selected[j] = response.data[i]
        //     j++
        //   }
        // }
      })
    },
    requestVM () {
      // alert()
      axios
        .post('api/o/program_manager/request_vm', {
          programManager: sessionStorage.getItem('user'),
          programName: this.ProgramName,
          projectname: this.Projectname,
          vmtype: this.selected,
          vmresources: {
            ramsize: this.Ram,
            cpucores: this.CPU,
            operatingsystem: this.OS,
            disk: {
              root: this.Root,
              app: this.App,
              data: this.Data,
              logs: this.Log,
              backups: this.Backups
            }
          },
          firewallsetup: {
            pip: this.PIP,
            ports: {
              portnumber: this.Portnumber,
              direction: this.Direction
            }
          },
          internetrequired: this.Internetrequire
        })
        .then(response => {this.$router.push('/programdashboard')})
    }
  }
}
</script>
