
<template>
    <div id="general">
        <section id="contenido" class="center">
            <h2 class="subheader">Formulario</h2>

            <form action="#" class="mid-form" v-on:submit.prevent="mostrarUsuario()">
                <div class="form-group">
                    <label for="nombre">Nombre:</label>
                    <input type="text" name="nombre" id="nombre" v-model="user.name"/>
                    <p v-if="submitted && !$v.user.name.required">Este campo es requerido</p>
                    <p v-if="submitted && !$v.user.name.minLength">Este campo necesita mas caracteres</p>
                </div>

                <div class="form-group">
                    <label for="apellidos">Apellidos:</label>
                    <input type="text" name="apellidos" id="apellidos" v-model="user.lastname"/>
                    <p v-if="submitted && !$v.user.lastname.required">Este campo es requerido</p>
                    <p v-if="submitted && !$v.user.lastname.minLength">Este campo necesita mas caracteres</p>
                </div>

                <div class="form-group">
                        <label for="biografia">Boigrafia:</label>
                        <textarea name="bio" id="biografia" v-model="user.bio"></textarea>
                        <p v-if="submitted && !$v.user.bio.required">Este campo es requerido</p>
                        <p v-if="submitted && !$v.user.bio.minLength">Este campo necesita mas caracteres</p>
                </div>

                <div class="form-group radio-buttons">
                        <input type="radio" name="genero" value="hombre" v-model="user.gen" checked/>hombre
                        <input type="radio" name="genero" value="mujer" v-model="user.gen"/>mujer
                </div>

                <div class="clearfix"></div>

                <input type="submit" value="ENVIAR" class="btn btn-success">
            </form>

        </section>
        <SidebarComponent></SidebarComponent>
    </div>
</template>

<script>

// IMPORTACION DE COMPONENTES
import SliderComponent from './SliderComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

// IMPORTACION DEL VALIDADOR
import { required, minLength } from 'vuelidate/lib/validators';


export default {
    'name': 'FormularioComponent',
    'components': {
        SliderComponent,
        SidebarComponent
    },
    'methods':{
        mostrarUsuario(){
            this.submitted = true;

            console.log(this.user);
            
            this.$v.$touch();   // QUE SE HAN TOCADO LOS CAMPOS DEL FORMULARIO

            if(this.$v.$invalid){   // SI LA VALIDACION ES INVALIDA
                alert("VALIDACION INVALIDA");
            }else{
                alert("EXITO !!!");
            }

        }
    },

    'validations': {
        'user': {            
            'name': {
                required,
                minLength: minLength(2)
            },
            'lastname': {
                required,
                minLength: minLength(2)
            },
            'bio': {
                required,
                minLength: minLength(2)
            },
            'gen': {
                required
            }
        }
    },
    data(){
        return{
            submitted: false,
            user:{
                'name': '',
                'lastname': '',
                'bio': '',
                'gen': ''
            }
        }
    }
}
</script>

