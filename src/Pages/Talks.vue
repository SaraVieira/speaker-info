<template>
  <div id="app">
    <h1>Talks to give</h1>
    <vue-markdown v-if="file">{{file.content}}</vue-markdown>
  </div>
</template>

<script>
import info from '../info'
import VueMarkdown from 'vue-markdown/src/VueMarkdown.js'

export default {
  name: 'Talks',
  components: {
    VueMarkdown
  },
  data () {
    return {
      file: null
    }
  },
  async mounted () {
    const data = await fetch(`https://api.github.com/gists/${info.talksPrepared}`)
    const { files } = await data.json()
    this.file = files[Object.keys(files)[0]]
  }
}
</script>
