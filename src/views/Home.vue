<template>
    <div v-if="user" >
    <h1>{{user.name}} Todo list </h1>
   <Tasks />
    </div>
    <div v-if="!user">
    <h1> You are on the main page of Todo app please login!</h1>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Tasks from './Tasks.vue'

    export default {
        name: 'Home',
        computed: {
            ...mapGetters(['user']),
        },
        components: {
            Tasks
        },
        methods: {
            reload(){
                location.reload()
            }
        }
    }
</script>

<style>

h1 {
    text-align: center;
    padding: 0 0 15px 0;
}

</style>