<template>
  <div class="main">

    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title description-text">Facebook messager Api</div>
        </md-card-header-text>

        <md-card-media>
          <img src="../assets/fb.png" alt="People">
        </md-card-media>
      </md-card-header>
      <md-card-actions>
        <md-button href="#/pages/face-api">
          launch <md-icon>launch</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>

    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title description-text">Akilesh Portfolio</div>
        </md-card-header-text>

        <md-card-media>
          <!-- <img src="../assets/fb.png" alt="People"> -->
        </md-card-media>
      </md-card-header>
      <md-card-actions>
        <md-button href="#/pages/akilesh-portfolio">
          launch<md-icon>launch</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>

  </div>
</template>

<script>

export default {
  name: 'pages'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    display: flex;
    justify-content: space-evenly;
    margin: 20px 0 20px 0;
  }
  .flex-center {
    display: flex;
    justify-content: center;
  }
  .description-text {
    text-align: center;
    width: 210px;
  }
</style>
