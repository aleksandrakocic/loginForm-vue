<template>

    <div id="app" v-bind:class="{mode: mode}">
    <button id='change' @click="changeM">change mode</button>

    <router-view></router-view>

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
  },

  data() {

    return{
      mode: false
    }
  },

  methods:{

    changeM(){
    if(this.mode == false){
      return this.mode = true
    }else{
      return this.mode = false
    }
 }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
}

#change {
  height: 50px;
  width:  150px;
  font-size: 15px;
  font-weight: 800;
  background: transparent;

}

.mode #change {
  color: gray;
}

.mode{
  background: black;
  color: red;
}

.mode .text{
  background: black;
  color: white;
}

.mode .text h1 {
  color: gray;
}

.mode .form form label{
  color: black;
}

.mode .form form #submit {
  background: black;
  color: white;
}

.mode #nav ul {
  background: black;
}

.mode #wrap {
  color: gray;
}



</style>
