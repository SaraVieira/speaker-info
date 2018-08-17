<template>
  <div id="app">
    <h1>Previous Talks</h1>
    <main class="flex flex-wrap">
      <div v-for="video in videos" :key="video.id" class="w-50 mb4 pr3 videos">
        <youtube width="100%" :video-id="video.id"></youtube>
        <h3 class="mb1 mt1 vname">{{video.name}}</h3>
        <h4 class="mb1 mt1 vconf">{{video.conference}}</h4>
        <small class="b vyear">{{video.year}}</small>
      </div>
    </main>
  </div>
</template>

<script>
import info from '../info'

export default {
  name: 'Videos',
  data () {
    return {
      videos: info.videos
    }
  }
}
</script>

<style scoped>
@media only screen
  and (min-width: 320px)
  and (max-width: 700px){
    .videos {
      width: 100%;
      font-size: 20px;
      margin-left: 8px;
    }

    .vname {
      font-size: 14px;
      font-weight: bold;
      font-style: italic;
    }

    .vconf {
      font-size: 13px;
    }

    .vyear{
      font-size: 13px;
      margin-top:-30%;
    }

    h1{
      text-align: center;
    }
  }
</style>
