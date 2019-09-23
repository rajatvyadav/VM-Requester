<template>
<div>
   <input type="text" v-model="serverName"> 
                  <input type="text" v-model="privateIp"> 
                  <input type="text" v-model="publicIp"> 
                  <input type="text" v-model="currentStatus">  
                  <button @click="SetStatusFlag"></button>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            serverName:"",
            privateIp:"",
            publicIp:"",
            currentStatus:""
        }
    },
methods:{
    SetStatusFlag(){
      axios.post('api/o/vmstaff/updateRequest',{
        serverName:this.serverName,
        privateIp:this.privateIp,
        publicIp:this.publicIp,
        currentStatus:this.currentStatus})
        // axios.post("api/o/vmstaff/updateRequest")
    }
}
}
</script>

