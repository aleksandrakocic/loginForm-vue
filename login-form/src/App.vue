<template>
  <div id="app">

    <!-- <router-link to='/cards'>cards</router-link>
    
    <router-link to='/form'></router-link> -->
    <button @click='changeTheme'>chenge theme</button>
    
    <router-view></router-view>

    <forma/>
  </div>
  
</template>

<script>
import forma from './components/forma.vue'
import home from './components/home.vue'
export default {
  name: 'app',
  components: {
     forma,
     home
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
