

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
    'name': 'CreateArticleComponent',

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

    'methods': {
        saveArticle(){
            
            this.$v.$touch();   // LOS CAMPOS SE HAN TOCADO

            if(this.$v.$invalid){   // SI ES INVALIDA LA VALIDACION
                this.submitted = true;
            }else{
                fetch(this.url +'save', {
                    'method': 'POST',
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
                        
                        console.log("RESPUESTA GENERAL DEL SERVIDOR -> ",data);

                        if(this.file != null){

                            let formData = new FormData();
                            formData.append('file0', this.file, this.file.name);

                            fetch(this.url + 'upload-image/' + data.resultado._id,{
                                'method': 'POST',
                                'body': formData
                            })
    
                            .then(response => {
                                return response.json();
                            })
    
                            .then(data => {
                                if(data.status == 'success'){
                                    SweetAlert('Guardado !!', 'El articulo se guardo ', 'success')
                                    //console.log("Se ha subido la imagen. Respuesta del servidor -> ",data.articuloActualizado);
                                    this.$router.push('/blog');
                                }else{
                                    // ALERTA DE ERROR
                                    SweetAlert('Error', 'El articulo no se guardo', 'error')
                                    console.log("HUBO ERROR EN EL SERVIDOR REVISE POR FAVOR !!!!", "error -> ", data.message);
                                }
                            })
    
                            
                        }else{
                            SweetAlert('Guardado !!', 'El articulo se guardo ', 'success')
                            this.$router.push('/blog');
                        }

                        //console.log("RESPUESTA DEL SERVIDOR: ", data);
                    }else{
                        SweetAlert('Error', 'Ocurrio algo en el servidor', 'error')
                        console.log("Ocurrio un error en el servidor");
                    }
                })

                .catch(error => {
                    console.log("Ocurrio un error en la respuesta: ", error);
                })

            }
            
        },

        fileChange(){
            this.file = this.$refs.file.files[0];

            console.log("CONTENIDO DEL FILE: ",this.file);
            /* console.log("FILE INPUT LITERAL: ", this.$refs.file);
            console.log("OBJETO FILELIST : ",this.$refs.file.files);
            console.log("OBJETO FILE: ", this.$refs.file.files[0]); */
        }
    },

    data(){
        return{
            article: new Article_model('','', null, ''),
            submitted: false,
            file: null,
            url: Global.url
        }
    }
}
</script>

