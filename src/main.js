import Vue from 'vue'
import App from './App.vue'


// IMPORTAR EL MODULO DEL ROUTER
import VueRouter from 'vue-router';

import LastArticlesComponent from './components/LastArticlesComponent.vue';
import MiComponente from './components/MiComponente.vue';
import BlogComponent from './components/BlogComponent.vue';
import CreateArticleComponent from './components/CreateArticleComponent.vue';
import FormularioComponent from './components/FormularioComponent.vue';
import Pagina from './components/Pagina_uno.vue';
import ErrorComponent from './components/ErrorComponent.vue';
import Peliculas from './components/Peliculas.vue';
import SearchComponent from './components/SearchComponent';
import DetailArticleComponent from './components/DetailArticleComponent';
import EditArticleComponent from './components/EditArticleComponent';
import RedirectComponent from './components/RedirectComponent';


import VueMoment from 'vue-moment';
import moment from 'moment';  
import 'moment/locale/es';
import Vuelidate from 'vuelidate';


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueMoment,{
  moment
})


const routes = [
  {path: '/home', component: LastArticlesComponent},
  {path: '/blog', component: BlogComponent},
  {path: '/create-article', component: CreateArticleComponent},
  {path: '/formulario', component: FormularioComponent},
  {path: '/search/:searchString', component: SearchComponent},
  {path: '/detail/:detailArticle', component: DetailArticleComponent},
  {path: '/edit/:id', component: EditArticleComponent},
  {path: '/mi-componente', component: MiComponente},
  {path: '/redirect/:articleSearch', component: RedirectComponent},
  {path: '/pagina_uno/:id?', component: Pagina},
  {path: '/peliculas', name: 'peliculas', component: Peliculas},
  {path: '/', component: LastArticlesComponent},
  {path: '*', component: ErrorComponent}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
