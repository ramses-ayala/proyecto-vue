<template>
    <div id="slider" :class="{
        'slider-small': !home,
        'slider-big': home
    }">
        <h1>{{texto}}</h1>
        <router-link to="/blog" v-if="showButton" class="btn btn-success">Ir al blog</router-link>
    </div>
</template>

<script>
export default {
  name: "SliderComponent",
  'props': ['texto', 'showButton', 'home']
};
</script>

