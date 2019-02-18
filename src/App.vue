<template>
  <div id="app">
    <md-tabs>
      <md-tab ref="home" md-label="Home" md-icon="home" href="#/home"></md-tab>
      <md-tab id="pages" md-label="Pages" md-icon="pages" href="#/pages"></md-tab>
      <md-tab id="posts" md-label="Posts" md-icon="favorite" href="#/posts"></md-tab>
      <md-tab id="contact" md-label="Contact Us" md-icon="phone" href="#/contact"></md-tab>
    </md-tabs>
    <div class="route-margin">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function () {
    this.$router.push('home')
  }
}
</script>

<style scoped>
  .md-tabs + .md-tabs {
    margin-top: 24px;
  }
  .route-margin {
    padding: 0 10px 0 10px;
  }
</style>
