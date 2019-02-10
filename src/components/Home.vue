<template>
  <md-tabs>
    <md-tab md-label="Home" md-icon="home"></md-tab>
    <md-tab md-label="Pages" md-icon="pages"></md-tab>
    <md-tab md-label="Posts" md-icon="add_to_home_screen"></md-tab>
    <md-tab md-label="Favorites" md-icon="favorite"></md-tab>
  </md-tabs>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .md-tabs + .md-tabs {
    margin-top: 24px;
  }
</style>
