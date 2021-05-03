<template>
    <h1>Redirigiendo.......!!!</h1>
</template>

<script>
export default {
    'name': 'RedirectComponent',

    mounted(){
        this.$router.push('/search/'+this.$route.params.articleSearch);
    }

}
</script>

