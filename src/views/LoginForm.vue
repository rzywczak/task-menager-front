<template>
    <form @submit.prevent="handleSubmit">
        <h3>Login</h3>
        <error v-if="error" :error="error"  />
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email"/>
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password"/>
        </div>

        <button class="btn btn-primary btn-blok">Login</button>

    </form>
</template>

<script>
 import axios from 'axios'
 import Error from './Error.vue'
 import Tasks from './Tasks.vue'

 export default {
     name: 'Login',
     components: {
         Error,
         Tasks
     },
     data(){
         return {
             email: '',
             password: '',
             error: ''
         }
     },
     methods: {
         async handleSubmit(){
             try {
            const response = await axios.post('login', {
                email: this.email,
                password: this.password
            })
            localStorage.setItem('token', response.data.token)
            this.$store.dispatch('user', response.data.user)
            await this.$router.push('/').then(() => {
              location.reload()
            }).catch((err) => {
                console.log(err)
            });
             } catch (e){
                this.error = 'Invalid username/password'
             }
         }
     }
 }

</script>
