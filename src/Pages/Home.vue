<template>
<main class="flex">
  <div class="w-50 pa3 mr2">
    <h2> Photos </h2>
    <section class="mb4 relative" v-for="photo in info.photos" :key="photo">
      <img :src="photo" class="db"/>
    </section>
  </div>
   <div class="w-50 pa3 mr2">
    <h2 class="pl4"> Info </h2>
    <dl class="lh-title pa4 pt0 mt0">
      <dt class="f6 b mb1" v-if="info.name">Name</dt>
      <dd class="ml0 mb3" v-if="info.name">{{info.name}}</dd>
      <dt class="f6 b mb1" v-if="info.email">Email</dt>
      <dd class="ml0 mb3" v-if="info.email">{{info.email}}</dd>
      <dt class="f6 b mb1" v-if="info.website">Website</dt>
      <dd class="ml0 mb3" v-if="info.website"><a :href="info.website" target="_blank">{{info.website}}</a></dd>
      <dt class="f6 b mb1" v-if="info.location">Location</dt>
      <dd class="ml0 mb3" v-if="info.location">{{info.location}}</dd>
      <dt class="f6 b mb1" v-if="info.bio">Bio</dt>
      <dd class="ml0 mb3" v-if="info.bio">{{info.bio}}</dd>
      <dt class="f6 b mb1" v-if="info.twitter">Twitter</dt>
      <dd class="ml0 mb3" v-if="info.twitter"><a :href="info.twitter" target="_blank">{{info.twitter}}</a></dd>
      <dt class="f6 b mb1" v-if="info.github">Github</dt>
      <dd class="ml0 mb3" v-if="info.github"><a :href="info.github" target="_blank">{{info.github}}</a></dd>
    </dl>
    </div>
    </main>
</template>

<script>
import data from '../info'

export default {
  name: 'app',
  data () {
    return {
      info: data.info
    }
  }
}
</script>
