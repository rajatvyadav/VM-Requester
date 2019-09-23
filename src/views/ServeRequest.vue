<template>
<div>

        <div class="col-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Serve Request Forms</h4>
                    <form class="form-inline">
                      <label class="sr-only" for="inlineFormInputName2">Request Id</label>
                      <input type="text" v-model="RequestID" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Request Id">
                       <label class="sr-only" for="inlineFormInputName2">Server Name</label>
                      <input type="text" v-model="serverName" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Server Name">
                       <label class="sr-only" for="inlineFormInputName2">Private IP</label>
                      <input type="text" v-model="privateIp" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Private IP">
                       <label class="sr-only" for="inlineFormInputName2">Public IP</label>
                      <input type="text" v-model="publicIp" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Public IP">
                       <label class="sr-only" for="inlineFormInputName2">Current IP</label>
                      <input type="text" v-model="currentStatus" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Current Status">
                      <button type="submit" class="btn btn-gradient-primary mb-2" @click="SetStatusFlag">Submit</button>
                    </form>
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
            RequestID:"",
            serverName:"",
            privateIp:"",
            publicIp:"",
            currentStatus:""
        }
    },
methods:{
    SetStatusFlag(){
      axios.post('api/o/vmstaff/updateRequest',{
        requestId:this.RequestID,
        serverName:this.serverName,
        privateIp:this.privateIp,
        publicIp:this.publicIp,
        currentStatus:this.currentStatus}).then(response => {
            this.$router.push("/vmdashboard")
        })
        // axios.post("api/o/vmstaff/updateRequest")
    }
}
}
</script>

