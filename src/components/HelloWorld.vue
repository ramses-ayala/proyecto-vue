<!--ZONA HTML5-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <h2>{{ texto }}</h2>

  <div style="background-color: brown">
    <MiComponente></MiComponente>
  </div>

  </div>
</template>
<!--ZONA HTML5-->


<!--ZONA JAVASCRIPT-->

<script>

import MiComponente from './MiComponente.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data(){
    return{
      texto: "Hola desde un componente"
    }
  },

  components: {
    MiComponente
  }
}
</script>
<!--ZONA JAVASCRIPT-->


<!--ZONA CSS3-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
