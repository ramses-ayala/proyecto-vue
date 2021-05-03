


<template>
    <section id="contenido">
            <h2 class="subheader">Página 1 de pruebas</h2>
            <h3>{{parametro_url}}</h3>
            <button @click="cambiarNombre()">ACTUALIZAR NOMBRE</button>
            <br>
            <button @click="redirigirBlog()">Redirigir al blog</button>
            <h4>{{nombre}}</h4>
    </section>
</template>



<script>

export default {
    'name': 'Pagina',

    mounted(){
        this.parametro_url = this.$route.params.id;
        console.log("EL COMPONENTE SE HA MONTADO");
    },

    created(){
        console.log("EL COMPONENTE SE CREO");
    },

    updated(){
        console.log("EL COMPONENTE SE ACTUALIZO");
    },

    destroyed(){
        console.log("EL COMPONENTE SE ELIMINO");
    },

    data(){
        return{
            parametro_url: null,
            nombre: 'ESPERANDO ....'
        }

    },

    methods: {
        cambiarNombre(){
            this.nombre = "OTRO NOMBRE";
        },
        redirigirBlog(){
            this.$router.push('/blog');
        }
    }
}
</script>

