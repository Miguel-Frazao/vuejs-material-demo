<template>
  <div class="product">
  	Route params: {{$route.params}}
  	<br>
  	Get prod: {{product}}
  </div>
</template>

<script>
export default {
	props: ['products_cart'],
	data() {
		return {
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
			],
		}
	},
	computed: {
		product: function() {
			return this.products.find((product) => product.id == this.$route.params.id);
		}
	},
	created: function() {
		if(typeof this.product == 'undefined') {
			this.$router.push({path: '/404'});
		}
	}
}
</script>


<style scoped>

</style>