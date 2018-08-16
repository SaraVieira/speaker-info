<template>
  <div id="app">
    <h1>Previous Talks</h1>
    <main class="flex flex-wrap">
      <div v-for="video in videos" :key="video.id" class="w-50 mb4 pr3">
        <youtube width="100%" :video-id="video.id"></youtube>
        <h3 class="mb1 mt1">{{video.name}}</h3>
        <h4 class="mb1 mt1">{{video.conference}}</h4>
        <small class="b">{{video.year}}</small>
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
