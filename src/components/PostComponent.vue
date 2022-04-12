<template>
    <div class="container">
        <h1>Latest Post </h1>
        <hr>
        <p> 
    </div>
</template>

<script>
import PostService from '../PostService'

export default {
    data() {
        return {
            posts: [],
            error: '',
            text: '',
        }
    },
    async created(){
        try {
            this.posts = await PostService.getPosts()
        } catch(err){
            this.error = err.massage
        }
    }
}
</script>


