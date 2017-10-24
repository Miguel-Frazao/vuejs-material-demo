<template>
	<div class="products">
		<md-layout class="md-row">
			<div class="md-flex-50 md-hide-xsmall">
				
			</div>
			<md-input-container class="md-flex-50 md-flex-xsmall-100">
				<label for="sort_price">Sort by price</label>
				<md-select name="country" id="sort_price" v-on:change="sort_price" v-model="sort_dir">
					<md-option value="up">Upward</md-option>
					<md-option value="down">Downward</md-option>
				</md-select>
			</md-input-container>
		</md-layout>
		<md-layout md-gutter class="cards-container">
			<md-layout class="card-container md-flex-25 md-flex-small-50 md-flex-xsmall-100" v-for="prod in products" :key="prod.id">
				<md-whiteframe md-elevation="4">
					<md-card md-with-hover>
						<md-card-area>
							<router-link class="prod-anchor" :to="'/product/' +prod.id">
								<md-card-header>
									<div class="md-title">{{prod.name}}</div>
								</md-card-header>

								<md-card-media>
									<div class="card-image" :style="{backgroundImage: 'url(' +prod.picture+ ')'}"></div>
								</md-card-media>

								<md-card-content class="description">
									{{prod.description}}
								</md-card-content>
							</router-link>
						</md-card-area>
						<md-card-actions>
							<md-card-content class="prod-value">
					  			<p class="md-subheading">{{prod.value}} €</p>
					  		</md-card-content>
							<md-button v-if="prod_in_cart(prod)" class="md-raised md-accent" disabled>On Cart</md-button>
							<md-button v-else class="md-icon-button md-raised md-primary md-accent" v-on:click="add_to_cart(prod)">
								<md-icon>add_shopping_cart</md-icon>
							</md-button>
						</md-card-actions>
					</md-card>
				</md-whiteframe>
			</md-layout>
		</md-layout>
	</div>
</template>
<script>
export default {
	props: ['products_cart'],
	data() {
		return {
			sort_dir: '',
			products: [
				{
					id: 1,
					name: 'Eagle',
					value: 100,
					picture: 'https://images.pexels.com/photos/133356/pexels-photo-133356.jpeg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.',
				},
				{
					id: 2,
					name: 'Duck',
					value: 200,
					picture: 'https://images.pexels.com/photos/255416/pexels-photo-255416.jpeg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, ',
				},
				{
					id: 3,
					name: 'Parrot',
					value: 300,
					picture: 'https://image.freepik.com/free-photo/parrot-jpg_21160030.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, llo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi',
				},
				{
					id: 4,
					name: 'Seagull',
					value: 400,
					picture: 'https://i.pinimg.com/originals/e0/63/8c/e0638cc91d2e6302608cd5f899e83529.jpg',
					description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, ',
				},
			]
		}
	},
	methods: {
		prod_in_cart: function(prod) {
			return this.products_cart.products.findIndex((p, idx) => p.id == prod.id) !== -1;
		},
		add_to_cart: function(prod) {
			// NOTE: DO NOT this.products_cart.products.push(prod) ... THIS WILL GENERATE A CONFLIT BECAUSE products_cart AND products WILL SHARE THE SAME DEEP OBJECT (SAME MEMORY SPACE)
			this.products_cart.products.push({picture: prod.picture, id: prod.id, value: prod.value, qtd: 1, name: prod.name});
		},
		sort_price: function() {
			if(this.sort_dir == 'up') {
				this.products.sort(function(a, b) { return a.value - b.value});
			}
			else {
				this.products.sort(function(a, b) { return b.value - a.value});
			}
		}
	}
}
</script>

<style scoped>
.md-card-content.description {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
a.prod-anchor {
	color: #000000 !important;
}
a.prod-anchor:hover {
	text-decoration: none;
	color: #000000 !important;
}
</style>