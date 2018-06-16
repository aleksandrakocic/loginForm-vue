
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
<div id='wraper'>
    <p>{{info}}</p>
  <div id='nav'>
    <ul>
       <li> <a href=""></a> home </li>
       <li> <a href=""></a> about </li>
       <li> <a href=""></a> gallery</li>
       <li> <a href=""></a>contact </li>
    </ul>
  </div>

  <div id='cards'>

    <ul>
      <li></li>
      <li></li>
      <li></li>
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
        .get('/https://api.myjson.com/bins/17skk6')
        .then(response => (this.info =response.data))
  }
};




</script>