<template>
  <div id="app">
    <nav-bar v-bind:products_cart="products_cart" v-bind:len_users="users.length" ref="navBar"></nav-bar>
    <div class="main-container">
      <router-view :key="$route.path" v-bind:users="users" v-bind:products_cart="products_cart"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app', 
  data() {
    return {
      users: JSON.parse(localStorage.getItem("users")) || [],
      products_cart: {total: 0, products: []},
    }
  },
  watch: {
    total_cart: function(new_val, old_val) {
      this.products_cart.total = new_val;
    }
  },
  computed: {
    total_cart: function() {
      return this.products_cart.products.reduce(function(sum, p) { 
        p.total = p.qtd * p.value;
        return sum + p.total;
      }, 0);
    }
  }
}
</script>

<style>
@import url(../node_modules/vue-material/dist/vue-material.css);
@import url(https://fonts.googleapis.com/icon?family=Material+Icons);
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);

[v-cloak] { display:none }

.align-right {
  text-align: right !important;
}
.align-left {
  text-align: right !important;
}
.align-center {
  text-align: center !important;
}
.diplay-inline-block {
  display: inline-block;
}

.main-container {
  width: 100%;
  max-width: 1230px;
  padding: 80px 15px 15px 15px;
  margin: 0 auto;
}
#app .md-title {
  padding: 0;
}
.md-whiteframe {
  width: 100%;
  z-index: 0;
}
.cards-container {
  margin: 0 -15px;
}
.card-container {
  padding: 15px;
}
.card-image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 180px;
}
.md-select .md-select-value {
  z-index: 0;
}
</style>
