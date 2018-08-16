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
      <template v-if="info.name">
        <dt class="f6 b mb1">Name</dt>
        <dd class="ml0 mb3">{{info.name}}</dd>
      </template>
      <template v-if="info.email">
        <dt class="f6 b mb1">Email</dt>
        <dd class="ml0 mb3">{{info.email}}</dd>
      </template>
      <template v-if="info.website">
        <dt class="f6 b mb1">Website</dt>
        <dd class="ml0 mb3"><a :href="info.website" target="_blank">{{info.website}}</a></dd>
      </template>
      <template v-if="info.location">
        <dt class="f6 b mb1">Location</dt>
        <dd class="ml0 mb3">{{info.location}}</dd>
      </template>
      <template v-if="info.bio">
        <dt class="f6 b mb1">Bio</dt>
        <dd class="ml0 mb3">{{info.bio}}</dd>
      </template>
      <template v-if="info.twitter">
        <dt class="f6 b mb1">Twitter</dt>
        <dd class="ml0 mb3"><a :href="info.twitter" target="_blank">{{info.twitter}}</a></dd>
      </template>
      <template v-if="info.github">
        <dt class="f6 b mb1">Github</dt>
        <dd class="ml0 mb3"><a :href="info.github" target="_blank">{{info.github}}</a></dd>
      </template>
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
