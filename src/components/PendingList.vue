              <template>
                  <div class="col-12 grid-margin stretch-card">
                <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Request List</h4>
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Request Id</th>
                          <th>Server Name</th>
                          <th>Private IP</th>
                          <th>Public IP</th>
                          <th>Serve It</th>
                        </tr>
                      </thead>
                      <tbody>
                       
          
                  <tr  v-for="result in resultlist" :key="result">

          
              <td>{{result.projectName}}</td>
              <td>{{result.serverName}}</td>
              <td>{{result.privateIp}}</td>
              <td>{{result.publicIp}}</td>
              <td><button type="button" class="btn btn-inverse-primary btn-fw" @click="routeForm">Serve It</button>
              </td>
               
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
   data(){
    return{
      resultlist:[],
      
      }
    },
   methods:{
      getstats(){
        axios
        .get("api/o/program_manager/show_requestvm")
        .then(response => {
          this.resultlist=response.data
        // for (let i = 0; i <= this.resultlist.length; i++) {
        //   if (this.resultlist[i].currentStatus === "completed") {
        //     this.show[i] = this.resultlist[i]
        //   }
        // }
      });
    },
    routeForm(){
      this.$router.push("/serveform")
    }  },
  mounted() {
    this.getstats();
  }
};
</script>
              