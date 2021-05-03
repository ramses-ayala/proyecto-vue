

<template>
    <div id="general">
        <main id="contenido-principal" class="center">
        
            <section id="contenido">
                <div id="articles" >	
                    
                    <div id="mis-datos" v-if="mostrarDatos">
                        <p v-html="mostrarDatos"></p>
                    </div>
                    Profesion con mayusculas con filtro: {{profesion | mayusculas | muestraanio(': AÑO ACTUAL')}}

                    <h2 class="subheader">Peliculas</h2>

                    <p v-if="peliculaFavorita">pelicula favorita: {{peliculaFavorita.title}}</p>

                    <div v-for="(pelicula,i) in titulosPeliculasMayusculas " :key="i">
                        <Pelicula :pelicula="pelicula" v-on:favorita="llegoFavorita"></Pelicula>
                    </div>

                    <!--<div class="clearfix"></div>-->
                </div>	<!--#articles-->
        
            </section><!--#contenido-->
            
        </main>
    </div>
</template>

<script>

import Pelicula from './Pelicula.vue';

export default {
  name: "Peliculas",

  components: {
      Pelicula
  },

  'methods': {
      llegoFavorita(pelicula){
          console.log("SE EJECUTO EL METODO EN EL PADRE");
          this.peliculaFavorita = pelicula;
          console.log(pelicula);
      }
  },

  'computed': {

      titulosPeliculasMayusculas(){
          for(let i=0;i<this.peliculas.length;i++){
              this.peliculas[i].title = this.peliculas[i].title.toUpperCase();
          }

          return this.peliculas;
      },
    
        mostrarDatos(){
            return '<strong> Mi nombre: </strong> ' + this.nombre + '<br/> <strong>profesion: </strong> ' + this.profesion;
        }

  },

  'filters':{
      mayusculas(value){
          return value.toUpperCase();
      },

      muestraanio(value, message){
          return value + ' ' + new Date().getFullYear() + ' ' + message;
      }
  },

  data(){
      return{
          peliculas: [
              {'title': 'Rapido y furioso 3', 'year': '2006', 'image': 'https://i.pinimg.com/736x/59/31/e6/5931e6dc943faba5c1c275aeba8f3f98.jpg'},
              {'title': 'Rapido y furioso 4', 'year': '2010', 'image': 'https://http2.mlstatic.com/rapidos-y-furiosos-4-fast-furious-4-dvd-nuevo-original-D_NQ_NP_625327-MLM26457139282_112017-F.jpg'},
              {'title': 'Rapido y furioso 5', 'year': '2013', 'image': ''}
             
          ],
          peliculaFavorita: null,
          'nombre': 'Ramses Ayala',
          'profesion': 'Ing. Sistemas'
      }
  }
};
</script>

