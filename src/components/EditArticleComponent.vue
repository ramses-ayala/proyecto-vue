
<template src="./CreateArticleComponent.html"> </template>

<script>

// IMPORTACION DE COMPONENTES
import SidebarComponent from './SidebarComponent.vue';

// IMPORTACION DE UTILIDADES
import Article_model from '../models/Article_model';
import Global from '../Global.js';
import { required } from 'vuelidate/lib/validators';
import SweetAlert from 'sweetalert';

export default {
    'name': 'EditArticleComponent',

     'components': {
        SidebarComponent
    },

    'validations': {
        'article':{
            'title':{
                required
            },
            'content': {
                required
            }
        }
    },

    mounted(){
        this.getDetailArticle(this.$route.params.id);
    },

    'methods':{
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

        saveArticle(){

             this.$v.$touch();   // LOS CAMPOS SE HAN TOCADO

            if(this.$v.$invalid){   // SI ES INVALIDA LA VALIDACION
                this.submitted = true;
            }else{

                fetch(this.url +'update/'+ this.$route.params.id,{
                    'method': 'PUT',
                    'body': JSON.stringify(this.article),
                    'headers': {
                        'Content-Type': 'application/json'
                    }
                })
    
                .then(response => {
                    return response.json();
                })

                .then(data => {
                    if(data.status == 'success'){
                        
                        if(this.file != null){

                            let formData = new FormData();
                            formData.append('file0', this.file, this.file.name);

                            fetch(this.url + 'upload-image/' + data.articleUpdated._id,{
                                'method': 'POST',
                                'body': formData
                            })
    
                            .then(response => {
                                return response.json();
                            })

                            .then(data => {
                                if(data.status == 'success'){
                                    SweetAlert('Actualizado !!', 'El articulo se ha actualizado ', 'success')
                                    //console.log("Se ha subido la imagen. Respuesta del servidor -> ",data.articuloActualizado);
                                    this.$router.push('/detail/'+data.articleUpdated._id);
                                }else{
                                    // ALERTA DE ERROR
                                    SweetAlert('Error', 'El articulo no se guardo', 'error')
                                    console.log("HUBO ERROR EN EL SERVIDOR REVISE POR FAVOR !!!!", "error -> ", data.message);
                                }
                            })
                        }else{
                            SweetAlert('Actualizado !!', 'El articulo se ha actualizado ', 'success')
                            this.$router.push('/detail/' + data.articleUpdated._id);      
                        }
                    }else{
                        SweetAlert('Error', 'Ocurrio algo en el servidor', 'error')
                        console.log("Ocurrio un error en el servidor");
                    }
                })

            } // ELSE
        } // LLAVE DEL METODO
    }, // METHODS

    data(){
        return{
            article: new Article_model('','',null,''),
            isEdit: true,
            submitted: false,
            url: Global.url
        }
    }
}
</script>
