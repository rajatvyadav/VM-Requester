<template>
<div>
<h4 class="card-title">Registration form</h4>
                            <form class="forms-sample"  @submit="addUserData" >
                              <div class="form-group">
                                <label for="exampleInputUsername1">Username</label>
                                <input v-model="Username" type="text" class="form-control" id="exampleInputUsername1" placeholder="Username">
                              </div>
                              <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input v-model="Email" type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                              </div>
                              <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input v-model="Password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
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
                              <button type="button" class="btn btn-primary">OK</button>  
                                <!-- <button @click="addUserData">SUBMIT</button> -->
                                <div><p>{{Selected}}</p></div>
                              </div>
                            </form>
</div>
</template>
