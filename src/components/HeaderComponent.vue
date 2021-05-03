<template>
    <header id="site-header">
		
			<div class="center">
				<div id="contenedor-logo-menu">
					<div id="logo">
							<img src="../assets/img/logo.png" alt="Logo"/>
							<span id="brand">
								<strong>VueJS</strong> 
							</span>
					</div>

					<div class="clearfix"></div>

					<nav id="menu">
						<ul>
							<li><router-link to="/home" active-class="activated">Inicio</router-link></li>
							<li><router-link to="/blog" active-class="activated">Blog</router-link></li>
							<li><router-link to="/formulario" active-class="activated">Formulario</router-link></li>
							<li><router-link to="/pagina_uno" active-class="activated">Pagina 1</router-link></li>
							<li><router-link to="/peliculas" active-class="activated">Peliculas</router-link></li>
						</ul>
					</nav>
				</div>
				
				<!-- <div class="clearfix"></div> -->
			</div>
		
		</header>
</template>

<script>
export default {
    'name': 'HeaderComponent'
}
</script>

