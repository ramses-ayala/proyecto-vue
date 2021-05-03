
<template>
     <div id="general">

        <SliderComponent :texto="'Busqueda de: ' + searchString " ></SliderComponent>

        <div class="center">
            <section id="contenido">
                <h2 class="subheader">Articulos encontrados</h2>
                <!--UTILIZAR ETIQUETA DEL COMPONENTE ArticlesComponent-->
                <ArticlesComponent :articles="articles" v-if="articles"></ArticlesComponent>

                <div v-else>
                    <h3>No hay articulos encontrados</h3>
                </div>
                    
            </section>
            <SidebarComponent></SidebarComponent>
        </div>
    </div>
</template>

<script>

// IMPORTACION DE COMPONENTES
import ArticlesComponent from './ArticlesComponent.vue';
import SidebarComponent from './SidebarComponent.vue';
import SliderComponent from './SliderComponent.vue';

// IMPORTACION DE UTILIDADES
import Global from '../Global.js';


export default {
    'name': 'SearchComponent',

    'components': {
        ArticlesComponent,
        SliderComponent,
        SidebarComponent
    },

    mounted(){
        this.searchString = this.$route.params.searchString;
        this.getArticleBySearch(this.searchString);
    },

    'methods': {
        getArticleBySearch(searchString){
            fetch(this.url + 'search/'+ searchString)
                .then(response => {
                    return response.json();
                })

                .then(data => {
                    if(data.status == 'success'){
                        this.articles = data.articles;
                    }
                })
        }
    },

    data(){
        return{
            url: Global.url,
            articles: null,
            searchString: null
        }
    }
}
</script>

