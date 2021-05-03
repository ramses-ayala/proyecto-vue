<template>
     
    <article class="article-item" id="article-template" >
        
        <div class="image-wrap">
            <img :src="pelicula.image" alt="paisaje"/>
        </div>
        
        <h2>{{pelicula.title}}</h2>
        <div class="fecha">
            <span class="date" :class="{
                'yeargreen': pelicula.year >= 2010,
                'yearpurple': pelicula.year < 2010
            }">{{pelicula.year}}</span>
            <a href="#">Leer Más</a>
        </div>		

        <input type="button" @click="ponerFavoritaAlPadre(pelicula)" value="PONER FAVORITA" />

        <div class="clearfix"></div>
    </article>
</template>

<script>
export default {
    'name': 'Pelicula',
    'props': ['pelicula'],

    'methods': {
        ponerFavoritaAlPadre(pelicula){
            //console.log(pelicula);
            this.$emit('favorita', pelicula);   // TAMBIEN SE LE PUEDE PASAR UN OBJETO CON DATOS
        }
    }
}
</script>

