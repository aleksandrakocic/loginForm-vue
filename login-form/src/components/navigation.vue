<template>
   <div id='nav'>
     <ul>
       <li> <a href="">HOME</a></li>
       <li> <a href="">ABOUT</a></li>
       <li> <a href="">CONTACT</a> </li>
    </ul>
  </div>

</template>

<script>

export default {

  name: 'navigation'

}  
    
</script>

<style>

#nav ul {
  display: flex;
  justify-content: center;
  background: lightgray;
  color: black;
  padding: 0px 10px;
}


#nav ul li {
padding: 35px;
float: left;
list-style-type: none;
}
#nav ul li a {
  text-decoration: none;
}



</style>
