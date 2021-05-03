<template>
    <aside id="sidebar" >
        <div id="nav-blog" class="sidebar-item">
            <h3>Puedes hacer esto</h3>
            <router-link to="/create-article" class="btn btn-success">Crear Articulo</router-link>
        </div>
        
        <div id="search" class="sidebar-item">
            <h3>Buscador</h3>
            
            <form v-on:submit.prevent="searchArticle()">
                <label>Ingrese el nombre del artículo:</label>
                <input type="text" name="search" v-model="searchString"/>
                <input type="submit" class="btn" value="BUSCAR"/>
                <span v-if="submitted && !$v.searchString.required" id="message-required">El campo es requerido !!</span>
            </form>
        </div>
    </aside>
</template>

<script>

// IMPORTACION DE UTILIDADES
import { required } from 'vuelidate/lib/validators';

export default {
    'name': 'SidebarComponent',

    'methods': {
        searchArticle(){

            this.submitted = false;
            
            this.$v.$touch();

            if(this.$v.$invalid){
                this.submitted = true;
            }else{
                console.log(this.searchString);
                this.$router.push('/redirect/' + this.searchString);
            }

            //alert(this.searchString);
        }
    },

    'validations': {
        'searchString':{
            required
        }
    },

    data(){
        return{
            submitted: null,
            searchString: null
        }
    }
}
</script>




