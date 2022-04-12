<template>
    <form @submit.prevent="handleSubmit">
        <h3>Sign Up</h3>
        <error v-if="error" :error="error" /> 
        <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="name" placeholder="Name"/>
        </div>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email"/>
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password"/>
        </div>


        <button class="btn btn-primary btn-block">Sign Up</button>
    </form>
</template>

<script>
    import axios from 'axios'
    import Error from './Error.vue'

    export default {
        name: 'RegisterForm',
        components: {
            Error
        },
        data(){
            return {
                name: '',
                email: '',
                password: '',
                error: ''
            }
        },
        methods: {
            
            async handleSubmit(){
                try {
                const response = await axios.post('register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                })
            console.log(response)
            this.$router.push('/login')
                } catch (e){
                    this.error = 'Error occurred!'
                }
            },
        }
    }

</script>
