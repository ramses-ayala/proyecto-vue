


<template>
    <div id="articles">
        
        <div v-if="articles && articles.length >=1">
            <article class="article-item" v-for="article in articles" :key="article._id">
                
                <div class="image-wrap">
                    <img :src="url+'get-image/'+article.image" 
                    :alt="article.title" 
                    v-if="article.image"/>

                    <img src="../assets/img/default.png" 
                    :alt="article.title" 
                    v-if="!article.image"/>
                </div>
                
                <h2>{{article.title}}</h2>
                <div class="fecha">
                    <span class="date">{{article.date | moment("from", "now")}}</span>
                    <router-link :to="'/detail/' + article._id">Leer Más</router-link>
                </div>		

                <div class="clearfix"></div>
            </article>
            <!--<div class="clearfix"></div>-->
        </div>

        <div v-else-if="articles && articles.length < 0">
            No hay articulos por mostrar
        </div>

        <div v-else>
            Cargando...
        </div>

        
    </div>	<!--#articles-->
</template>


<script>

// IMPORTACION DE LA URL DESDE EL ARCHIVO GLOBAL
import Global from '../Global.js';

export default {
  
  name: "ArticlesComponent",

    'props': ['articles'],

    data(){
        return{
            url: Global.url
        }
    }


};
</script>

