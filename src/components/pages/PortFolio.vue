<template>
  <div>
    <img class="bg" src="../../assets/akil.jpg">
  </div>

</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

export default {
  name: 'PortFolio',
  data () {
    return {
      msg: 'WELCOME TO MY PORTFOLIO!!!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  position: relative;
  left: 900px;
  width: 500px;
}
</style>
