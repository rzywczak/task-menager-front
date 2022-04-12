<script>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
import axios from 'axios'

export default {

  name: 'App',
  components: {
    Nav,
  },
  async created(){
      const response = await axios.get('users/me')
      this.$store.dispatch('user', response.data)
      }
    }   


</script>

<template>
  <div id="app">
      <Nav />
        <div class='auth-wrapper'>
            <div class="auth-inner">
            <router-view />
            </div>
        </div>
  </div>
</template>

<style>
/* @import '@/assets/base.css'; */
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

* {
  box-sizing: border-box;
}

body {
  background: #86b5e0 !important;
  min-height: 100vb;
  display: flex;
  font-weight: 400;
  font-family: 'Fira Sans', sans-serif;

}
h1, h2, h3, h4, h5, h6, label, span {
  font-weight: 500;
  font-family: 'Fira Sans', sans-serif;
}
body, html, #app, #root, .auth-wrapper{
  width: 100%;
  height: 100%;
}
#app {
  text-align: center;
}
.navbar-light {
  background-color: #dde2e3;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2)
}
.auth-wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}
.auth-inner{
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transform: all .3s;
}
.custom-control-label{
  font-weight: 400;
}
.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #47b7c4;
  margin: 0;
}
.forgot-password a {
  color: #165ac0;
}

</style>
