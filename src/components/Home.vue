<template>
  <div class="home align-center">
    <h1>{{hello_message}}</h1>
    <p>This simple project was based on <a href="http://vuematerial.io" target="_blank">vue-material</a></p>
    <md-button target="_blank" href="https://github.com/Miguel-Frazao/vuejs-starter-example/tree/material" class="md-raised md-primary">Github</md-button>
    <br>
    <br>
    <code>git clone -b material https://github.com/Miguel-Frazao/vuejs-starter-example.git</code>
    <br>
    <br>
    <md-button download href="https://github.com/Miguel-Frazao/vuejs-starter-example/archive/material.zip" class="md-raised md-primary">Download</md-button>
    <br>
    <br>
    <code>
    cd path/to/this
    <br>
    npm install
    <br>
    npm run dev
    </code>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hello_message: 'Vue&Material demo'
    }
  }
}
</script>

<style scoped>

</style>
