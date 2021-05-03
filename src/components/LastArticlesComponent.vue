

<template>
    <div id="general">
        <SliderComponent texto="Home" showButton="true" home="true"></SliderComponent>
        <main id="contenido-principal" class="center">
        
            <section id="contenido">
                <div id="articles">	

                    <h2 class="subheader">Ultimos articulos</h2>
                    
                    <!--COMPONENTE DE ArticlesComponent-->
                    <ArticlesComponent :articles="articles" ></ArticlesComponent>
                    <!--<div class="clearfix"></div>-->
                </div>	<!--#articles-->

            </section><!--#contenido-->
            
            <!--AGREGAR LOS DEMAS ARTICULOS MEDIANTE JS-->
        </main>
        <SidebarComponent></SidebarComponent>

    </div>
</template>

<script>

// IMPORTAR LA URL
import Global from '../Global.js';

//IMPORTAR COMPONENTES
import ArticlesComponent from './ArticlesComponent.vue';
import SliderComponent from './SliderComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

export default {
  name: "LastArticlesComponent",
  'components': {
    SliderComponent,
    SidebarComponent,
    ArticlesComponent
  },

    mounted(){
        this.getArticles(true);
    },

    'methods': {
        getArticles(flag){
            fetch(this.url+'articles/'+flag)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    if(data.status == 'success'){
                        this.articles = data.lista
                    }else{
                        console.log("Hubo un error");
                    }
                });
        }
    },

    data(){
        return{
            url: Global.url,
            articles: []
        }
    }

};
</script>

