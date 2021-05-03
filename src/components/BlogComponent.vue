


<template>
    <div id="general">

        <SliderComponent texto="Blog"></SliderComponent>

        <div class="center">
            <section id="contenido">
                <h2 class="subheader">Articulos</h2>

                <!--UTILIZAR ETIQUETA DEL COMPONENTE ArticlesComponent-->
                <ArticlesComponent :articles="articles"></ArticlesComponent>
                    
            </section>
            <SidebarComponent></SidebarComponent>
        </div>
    </div>
</template>

<script>

// IMPORTACION DE LA URL
import Global from '../Global.js';

import SliderComponent from './SliderComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

import ArticlesComponent from './ArticlesComponent.vue';

export default {
    'name': 'BlogComponent',
    'components': {
        SliderComponent,
        SidebarComponent,
        ArticlesComponent
    },

    mounted(){
        this.getArticles();
    },

    'methods': {
        getArticles(){
            fetch(this.url+'articles')
                .then(response => {
                    return response.json();
                })

                .then(data => {
                    if(data.status == 'success'){
                        this.articles = data.lista;
                        //console.log("ESTA ES LA LISTA DE ARTICULOS -> ",this.articles);
                        //console.log(data);
                    }
                })

        }
    },

    data(){
        return{
            url: Global.url,
            articles: []
        }
    }
}
</script>

