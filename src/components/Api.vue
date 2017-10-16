<template>
  <div class="api">
  	<transition name="fade">
  		<div class="loader" v-if="loading">
  			<div>
  				<md-spinner :md-size="60" md-indeterminate></md-spinner>
  				<br>
  				Loading
  			</div>
  		</div>
  	</transition>
  	<md-button md-theme="green" v-on:click="get_new" class="md-raised md-primary">
  		<md-icon>add</md-icon><span>request more</span>
  	</md-button>
  	<p v-for="n in news" :key="n.id">
  		<span>id: {{n.id}}</span>
  		<br>
  		<span>by: {{n.by}}</span>
  		<br>
  		<span>title: {{n.title}}</span>
  		<br>
  		<span>Url: <a target="_blank" :href="n.url">{{n.url}}</a></span>
  		<br><br>
  	</p>
  </div>
</template>

<script>
export default {
	data() {
		return {
			news: [],
			loading: false,
			new_id: 8863
		}
	},
	methods: {
		get_new() {
			this.$http.get('https://hacker-news.firebaseio.com/v0/item/' +this.new_id+ '.json', {
				before(request) {
					this.loading = true;
				}
				}).then(response => {
					this.news.unshift(response.body); // add to the begining of array so we can keep the new one in first
					this.loading = false;
				}, response => {
					 alert('ajax error'+ response.status);
				}).then(response => {
					this.new_id += 1;
			});
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.fade-enter-active, .fade-leave-active {
	  	transition: opacity .3s
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0
	}
</style>
<style>
	.loader {
		background-color: rgba(0,0,0,0.8);
		font-weight: bold;
		position: fixed;
		display: table;
		z-index: 1;
		top: 0;
		left: 0;
		color: #ffffff;
		width: 100%;
		height: 100%;
	}
	.loader > div {
		display: table-cell;
		text-align: center;
		vertical-align: middle;
		margin: auto auto;
	}
</style>