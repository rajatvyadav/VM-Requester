              <template>
                  <div class="col-12 grid-margin stretch-card">
                <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Bordered table</h4>
                    <p class="card-description"> Add class <code>.table-bordered</code>
                    </p>
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Username</th>
                          <th>serverName</th>
                          <th>privateIp</th>
                          <th>publicIp</th>
                          <th>currentStatus</th>
                        </tr>
                      </thead>
                      <tbody>
          <tr v-for="result in resultlist" :key="result.projectName">
                <!-- <td>
                    {{result.projectName}}
                    
                </td> -->
                <!-- <td>
                  <input type="text"> </input>
                </td> -->
                 <!-- <td>
                    {{result.currentStatus}}
                </td> -->
                <td><button @click="routeForm">Serve It.!!!</button></td>
            </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              </div>
              </template>


              <script>
    import axios from 'axios'
export default {
  data() {
    return {
      resultlist: [],
      show:[]
    };
  },
  methods: {
    getstats() {
      axios.get("api/o/staff/show/pendingrequest").then(response => {
        this.resultlist = response.data;
        // for (let i = 0; i <= this.resultlist.length; i++) {
        //   if (this.resultlist[i].currentStatus === "completed") {
        //     this.show[i] = this.resultlist[i]
        //   }
        // }
      });
    },
    routeForm(){
      this.$router.push("/serveform",)
    }  },
  mounted() {
    this.getstats();
  }
};
</script>
              