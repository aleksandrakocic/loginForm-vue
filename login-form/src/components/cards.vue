
<template>

<!-- When the user logs in, the form should dissapear 
// and the user should be redirected to a different route.

UI with 3 cards and a navigation menu will pop up.

show three cards with some data about cars (because it rhymes, kind of). 
Pull them from a custom API you created. 
Of course, cards have to be components, right! 
I would expect each card to have a title, description, image and some other details.
 In addition, create a "Lights On/Off" button which enables or disables dark mode on the application. 
Of course, the button label should change appropriately.
 -->
<div id='wrap'>

   <div id='nav'>
     <ul>
       <li> <a href=""></a> HOME </li>
       <li> <a href=""></a> ABOUT </li>
       <li> <a href=""></a> CONTACT </li>
    </ul>
  </div>


  <div id='cards'
      v-bind:key="one.name" 
      v-for="one in info">
      <ul>
        <li><h1>{{one.name}} </h1></li>
        <li><img v-bind:src="one.img" alt=""></li>
        <li>price:  {{one.price}} $</li>
        <li><p id='desc'>{{one.description}}</p></li>
      </ul>
  </div>
</div>




</template>




<script>


//https://api.myjson.com/bins/17skk6

export default {

  name: 'cards',

  data() {

    return{
      info:[]

    }
  },

    mounted () {
      this.axios
        .get('https://api.myjson.com/bins/17skk6')
        .then(response => (this.info =response.data))
  }
};


</script>


<style>

#wrap{
  background: black;
  color: white;
}

#nav ul {
  display: flex;
  justify-content: center;
  background: lightgray;
  color: black;
  /* padding-top: 10px;
  padding-bottom: 10px; */
  padding: 0px 10px;
}


#nav ul li {
/* margin-left: 5%; */
padding: 35px;
float: left;
list-style-type: none;
}
#nav ul li a {
  text-decoration: none;
}



#cards{
  clear: both;
  display: flex;
  justify-content: center;
}

 #cards ul {
  list-style: none;
}
 #cards ul li {
  width: 600px;
  text-align:center;
  margin-top: 40px;
}

 #desc{
  background: gray;
  color: black;
  padding: 15px;;
}

#cards ul li h1{
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
}

#cards ul li img {
  height: 300px;
  width: 300px;
}


</style>



