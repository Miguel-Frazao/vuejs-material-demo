<!--  DOCS : https://bootstrap-vue.js.org/docs/components/navbar -->

<template>
	<div class="navbar">
		<md-whiteframe md-elevation="4" class="main-toolbar">
			<md-toolbar class="top-nav-container">
				<div class="md-toolbar-container top-nav">
					<md-button class="md-icon-button md-hide-medium-and-up mob-menu-btn" v-on:click="$refs.sidebar.toggle()">
						<md-icon>menu</md-icon>
					</md-button>

					<h2 class="md-title" style="flex: 1">Vuejs&Material</h2>

					<h4 class="md-hide-medium-and-up">Cart ({{len_prods_cart}}): {{products_cart.total}} €</h4>

					<div class="desk-nav md-hide-small">
						<router-link tag="md-button" class="top-nav-btn" to="/" exact><md-icon>home</md-icon> <span>Home</span></router-link>

						<router-link tag="md-button" class="top-nav-btn" to="/users" exact><md-icon>group</md-icon> <span>Users</span><span class="badge badge-users">{{len_users}}</span></router-link>

						<router-link tag="md-button" class="top-nav-btn" to="/products" exact><md-icon>layers</md-icon>  <span>Products</span></router-link>

						<router-link tag="md-button" class="top-nav-btn" to="/cart" exact><md-icon>shopping_cart</md-icon> <span>Cart</span><span class="badge badge-cart">{{len_prods_cart}}</span></router-link>

						<md-menu md-align-trigger md-size="4">
							<md-button md-menu-trigger class="top-nav-btn"><md-icon>keyboard_arrow_down</md-icon> <span>Dropdown</span></md-button>
							<md-menu-content>
								<router-link to="#" tag="md-menu-item">Dropdown 1</router-link>
								<router-link to="#" tag="md-menu-item">Dropdown 2</router-link>
								<router-link to="#" tag="md-menu-item">Just another dropdown</router-link>
							</md-menu-content>
						</md-menu>

						<router-link tag="md-button" class="top-nav-btn" to="/api" exact><md-icon>code</md-icon> <span>Api Req</span></router-link>
					</div>
				</div>
			</md-toolbar>
		</md-whiteframe>

		<md-sidenav class="md-dense md-left md-fixed mob-nav md-hide-medium-and-up" ref="sidebar">
			<md-toolbar class="md-large">
				<div class="md-toolbar-container">
				<h3 class="md-title">Sidenav content</h3>
				</div>
			</md-toolbar>
			<md-list class="md-accent">

				<md-list-item v-on:click.native="$refs.sidebar.toggle()">
					<router-link to="/" exact>
						<span>Home</span>
						<md-icon>home</md-icon>
					</router-link>
				</md-list-item>

				<md-list-item v-on:click.native="$refs.sidebar.toggle()">
					<router-link to="/users" exact>
						<span>Users<span class="badge badge-users mob-badge">{{len_users}}</span></span>
						<md-icon>group</md-icon>
					</router-link>
				</md-list-item>

				<md-list-item v-on:click.native="$refs.sidebar.toggle()">
					<router-link to="/products" exact>
						<span>Products</span>
						<md-icon>layers</md-icon>
					</router-link>
				</md-list-item>

				<md-list-item v-on:click.native="$refs.sidebar.toggle()">
					<router-link to="/cart" exact>
						<span>Cart<span class="badge badge-cart mob-badge">{{len_prods_cart}}</span></span>
						<md-icon>shopping_cart</md-icon>
					</router-link>
				</md-list-item>

				<md-list-item>
					<span>Dropdown</span>
					<md-list-expand>
						<md-list>
							<md-list-item>
								<router-link exact to="/">Dropdown 1</router-link>
							</md-list-item>

							<md-list-item>
								<router-link exact to="/">Dropdown 2</router-link>
							</md-list-item>

							<md-list-item>
								<router-link exact to="/">Just another dropdown</router-link>
							</md-list-item>
						</md-list>
					</md-list-expand>
				</md-list-item>

				<md-list-item v-on:click.native="$refs.sidebar.toggle()">
					<router-link to="/api" exact>
						<span>Api Req</span>
						<md-icon>code</md-icon>
					</router-link>
				</md-list-item>
			</md-list>
		</md-sidenav>
	</div>
</template>
<script>
export default {
	props: ['products_cart', 'len_users'],
	computed: {
		len_prods_cart: function() {
			return this.products_cart.products.length;
		},
	}
}
</script>

<style scoped>
.md-list-item .md-list-item-container {
	min-height: 40px;
}
.md-list-item-expand .md-list-expand .md-list a {
	padding-left: 36px;
}
.router-link-active.router-link-exact-active {
	color: #222222 !important;
}
.mob-nav .router-link-active.router-link-exact-active {
	background-color: rgba(0,0,0,.1);
}
.md-list-item .router-link-active.router-link-exact-active * {
	color: #222222 !important;
	font-weight: bold;
}
.top-nav .router-link-active.router-link-exact-active {
	background-color: rgba(255,255,255,.1);
}
.main-toolbar {
	position: fixed;
	z-index: 1;
	width: 100%;
}
.top-nav-container {
	padding: 0;
}
.top-nav {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 15px;
}
.badge {
	position: absolute;
	bottom: 2px;
	right: 2px;
	display: inline-block;
	color: #ffffff;
	padding: 6px;
	font-size: 10px;
	line-height: 5px;
	border-radius: 50%;
	font-weight: bold;
}
.badge.badge-cart {
	background-color: #43a047;
}
.badge.badge-users {
	background-color: #C2185B;
}
.mob-badge {
	bottom: 5px;
	right: 10px;
}
.top-nav-btn {
	margin: 0;
}
</style>
