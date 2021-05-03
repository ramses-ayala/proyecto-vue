



<template>
    <main id="contenido-principal" class="center">

        <section id="contenido">
            <article class="article-item article-detail" v-if="article">
                <h2 class="subheader">Detalle del articulo</h2>
                
                <div class="image-wrap">
                    <div class="image-wrap">
                        <img :src="url+'get-image/'+article.image" 
                        :alt="article.title" 
                        v-if="article.image"/>

                        <img src="../assets/img/default.png" 
                        :alt="article.title" 
                        v-if="!article.image"/>
                    </div> 
                </div>
                
                <h3>{{article.title}}</h3>

                <div class="fecha">
                    <span class="date">{{article.date | moment("from","now")}}</span>
                </div>		
                
                <p>{{article.content}}</p>

                <router-link :to="'/edit/' + article._id" class="btn btn-warning" > Editar </router-link>
                <input type="button" class="btn btn-danger" value="Borrar" @click="deleteArticle()"/>

                <div class="clearfix"></div>
            </article>
            <!--<div class="clearfix"></div>-->
        </section><!--#contenido-->
        <br><br><br><br><br><br>
        
        <SidebarComponent></SidebarComponent>
            <!--AGREGAR LOS DEMAS ARTICULOS MEDIANTE JS-->
    </main>
</template>


<script>

// IMPORTACION DE COMPONENTES
import SidebarComponent from './SidebarComponent.vue';

// IMPORTACION DE UTILIDADES
import Global from '../Global.js';
import SweetAlert from 'sweetalert';


export default {
    'name': 'DetailArticleComponent',

    mounted(){
        this.getDetailArticle(this.$route.params.detailArticle);
    },

    'components': {
        SidebarComponent
    },


    'methods': {
        getDetailArticle(id){
            fetch(this.url+'article/'+id)
                .then(response => {
                    return response.json();
                })

                .then(data => {
                    if(data.status == "success"){
                        this.article = data.article;    
                        console.log(data);
                    }
                })
        },

        deleteArticle(){

            SweetAlert({
                title: "¿Estas seguro?",
                text: "¿Desea eliminar este articulo?",
                icon: "warning",
                buttons: true,
                dangerMode: true
            }).then((willDelete) => {
                if(willDelete){
                     fetch(this.url+'delete/'+this.$route.params.detailArticle,{
                        'method': 'DELETE'
                    })
                        .then(response => {
                            return response.json();
                        })

                        .then(data => {
                            if(data.status == 'deleted'){
                                SweetAlert('Bien !!!', 'Se elimino el articulo', 'success')
                                console.log("RESPUESTA DE LA ELIMINACION: ",data);
                                this.$router.push('/blog');
                            }else{
                                if(data.status == 'error en el servidor'){
                                    SweetAlert('Revisar!!!', 'Hay un error en el servidor', 'warning')
                                }else{
                                    SweetAlert('No existe!!!', 'El articulo no existe', 'warning')
                                }
                            }
                        })
                }else{
                    SweetAlert('Bien !!!', 'No se elimino el articulo', 'success')
                }
            })

           
        }
    },

    data(){
        return{
            url: Global.url,
            article: null
        }
    }
}
</script>

