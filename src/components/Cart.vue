<template>
  <div class="cart">
  	<md-table-card class="md-hide-xsmall">
  		<md-card-header>
			<h1>Total price: {{products_cart.total}} €</h1>
		</md-card-header>
	  	<md-table class="responsive-table" v-on:sort="sort_col">
		  <md-table-header>
		    <md-table-row>
		      <md-table-head>Picture</md-table-head>
		      <md-table-head>Name</md-table-head>
		      <md-table-head md-sort-by="qtd">Qtd</md-table-head>
		      <md-table-head md-sort-by="total">Total (€)</md-table-head>
		      <md-table-head class="align-center">Actions</md-table-head>
		    </md-table-row>
		  </md-table-header>

		  <md-table-body>
		    <md-table-row v-for="(prod, index) in products_cart.products" :key="index">
		      <md-table-cell><img :src="prod.picture" class="table-image"></md-table-cell>
		      <md-table-cell>{{prod.name}}</md-table-cell>
		      <md-table-cell>{{prod.qtd}}</md-table-cell>
		      <md-table-cell>{{prod.total}}</md-table-cell>
		      <md-table-cell class="align-center">
		      	<md-button class="md-icon-button md-raised md-accent" v-on:click="change_qtd(prod, true)">
		      		<md-icon>add</md-icon>
		      		<md-tooltip md-direction="top">More product</md-tooltip>
		      	</md-button>
				<md-button class="md-icon-button md-raised" v-on:click="change_qtd(prod, false)">
					<md-icon>remove</md-icon>
					<md-tooltip md-direction="top">Less product</md-tooltip>
				</md-button>
				<router-link class="md-icon-button md-raised md-primary" tag="md-button" :to="'/product/' +prod.id">
					<md-icon>remove_red_eye</md-icon>
					<md-tooltip md-direction="top">Check product</md-tooltip>
				</router-link>
				<md-button class="md-icon-button md-raised md-warn" v-on:click="open_modal(prod)">
					<md-icon>delete</md-icon>
					<md-tooltip md-direction="top">Remove from cart</md-tooltip>
				</md-button>
			</md-table-cell>
		    </md-table-row>
		  </md-table-body>
		</md-table>
	</md-table-card>
	<div class="mob-display md-hide-small-and-up">
		<div class="cards-container">
			<div class="card-container" v-for="prod in products_cart.products" :key="prod.id">
				<md-whiteframe md-elevation="0">
					<md-card>
						<md-card-header>
						    <md-card-header-text>
						      <div class="md-title">{{prod.name}}</div>
						      <div class="md-subhead">Price: {{prod.value}} €</div>
						      <div class="md-subhead">Quantity: {{prod.qtd}}</div>
						    </md-card-header-text>

						    <md-menu md-size="4" md-direction="bottom left">
						      <md-button class="md-icon-button" md-menu-trigger>
						        <md-icon>more_vert</md-icon>
						      </md-button>

						      <md-menu-content>
						        <md-menu-item>
						          <span>Call</span>
						          <md-icon>phone</md-icon>
						        </md-menu-item>

						        <md-menu-item>
						          <span>Send a message</span>
						          <md-icon>message</md-icon>
						        </md-menu-item>
						      </md-menu-content>
						    </md-menu>
						</md-card-header>

						<md-card-media>
							<img :src="prod.picture" :alt="'product' +prod.name">
						</md-card-media>
						<md-card-actions>
						  	<md-card-content>
						  	<h3 class="md-subheading">Total: {{prod.total}} €</h3>
						  	</md-card-content>
							<md-button class="md-icon-button md-raised md-accent" v-on:click="change_qtd(prod, true)">
					      		<md-icon>add</md-icon>
					      		<md-tooltip md-direction="top">More product</md-tooltip>
					      	</md-button>
							<md-button class="md-icon-button md-raised" v-on:click="change_qtd(prod, false)">
								<md-icon>remove</md-icon>
								<md-tooltip md-direction="top">Less product</md-tooltip>
							</md-button>
							<router-link class="md-icon-button md-raised md-primary" tag="md-button" :to="'/product/' +prod.id">
								<md-icon>remove_red_eye</md-icon>
								<md-tooltip md-direction="top">Check product</md-tooltip>
							</router-link>
							<md-button class="md-icon-button md-raised md-warn" v-on:click="open_modal(prod)">
								<md-icon>delete</md-icon>
								<md-tooltip md-direction="top">Remove from cart</md-tooltip>
							</md-button>
						</md-card-actions>
					</md-card>
				</md-whiteframe>
			</div>
		</div>
	</div>
	<modal v-if="showModal" v-on:close="showModal = false">
		<h3 slot="header">Delete {{modal_item.name}} from cart?</h3>
		<div slot="footer">
			<md-button class="md-raised md-warn" v-on:click="remove_from_cart(modal_item)">
				Yes
			</md-button>
			<md-button class="md-raised" v-on:click="showModal = false">
				Cancel
			</md-button>
		</div>
	</modal>
  </div>
</template>
<script>
export default {
	props: ['products_cart'],
	data() {
		return {
			showModal: false
		}
	},
	methods: {
		remove_from_cart: function(product) {
			var prod_idx = this.products_cart.products.findIndex((prod, idx) => prod.id == product.id);
			this.products_cart.products.splice(prod_idx, 1);
			this.showModal = false;
		},
		change_qtd: function(prod, up) {
			if(up) {
				prod.qtd += 1;
			}
			else if(prod.qtd > 1) {
				prod.qtd -= 1;
			}
		},
		sort_col(sort) {
			if(sort.type == 'desc') {
				this.products_cart.products.sort(function(a, b) { return a[sort.name] - b[sort.name]});
			}
			else {
				this.products_cart.products.sort(function(a, b) { return b[sort.name] - a[sort.name]});
			}
		},
		open_modal: function(prod) {
			this.modal_item = prod;
			this.showModal = true;
		},
	},
}
</script>
<style scoped>
	.modal-header h3 {
		margin: 0;
	}
	.table-image {
		max-height: 100px;
	}
</style>