
<template>
    <div id="contenido">
        <h1>Mi componente</h1>
        <h2>{{subtitulo}}</h2>

        <input type="text" v-model="nombre" />
        {{nombre}}
        
        <pre>
            {{$data}}
        </pre>

        <h3>Directivas condicionales</h3>

        <input type="number" name="" id="" v-model="edad"/>
        
        <p>mi edad es: {{edad}}</p>

        <p v-if="edad && edad >= 18 && edad < 65">Eres mayor de edad !! :)</p>

        <p v-else-if="edad && edad>=65">Eres de la tercera edad</p>

        <p v-else>Eres un niño</p>

        <h4>Directiva iterativa</h4>

        <ol>
            <li v-for="(pelicula,i) in peliculas" :key="i">{{pelicula}}</li>
        </ol>


    </div>
</template>

<script>
export default {
    name: 'MiComponente',
    data(){
        return{
            subtitulo: "Este es un subtitulo",
            nombre: '',
            edad: 18,
            peliculas: ['Rapido y furioso', 'duro de matar', 'mr robot', 'encontrando la felicidad', 
            'Pelicula']
        }
    }
}
</script>

