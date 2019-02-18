<template>
  <div class="main">
    <div class="playfair"><h1>We love tackling fun & challenging design projects</h1></div>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    display: flex;
    justify-content: center;
  }
  .playfair {
    color: rgba(255,255,255,0.7);
    font-size: 30px;
    font-family: "Playfair Display SC", serif;
    border-bottom: 1px solid #424242;
  }
</style>
