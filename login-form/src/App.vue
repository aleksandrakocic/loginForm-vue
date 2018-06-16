<template>
  <div id="app">
    <router-link to='/cards'>cards</router-link>
    <router-view></router-view>
    <forma/>
  </div>
</template>

<script>
import forma from './components/forma.vue'

export default {
  name: 'app',
  components: {
    'forma': forma
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
