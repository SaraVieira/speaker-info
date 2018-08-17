<template>
<main class="flex">
  <div class="w-50 pa3 mr2 wow">
    <section class="mb4 relative" v-for="photo in info.photos" :key="photo">
      <img :src="photo" class="db"/>
      <label class="b mt2 db">{{photo}}</label>
    </section>
  </div>
   <div class="w-50 pa3 mr2 okay">
    <dl class="lh-title pa4 mt0">
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
<style scoped>
label {
    position: absolute;
    margin-top: -23px;
    left: 0;
    background: rgba(255,255, 255, 0.7);
    padding: 3px 10px;
    width: 100%;
}


@media only screen 
  and (min-width: 217px) 
  and (max-width: 491px){
    .pa3{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-left: -100px;
      
    }

    .okay{
      margin-left: -280px;
      margin-top: -30px;

    }

    .wow{
     margin-top: 550px;
     display: flex;
     margin-left: -50px;
    }

    .db{
      border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 250px;
    margin-left: 60px;
    }

    .f6{
      font-size: 18px;
      font-weight: bold;
    }

    label {
    position: relative;
    margin-top: -23px;
    left: 0;
    background: rgba(255,255, 255, 0.7);
    padding: 3px 10px;
    width: 100%;
}
  }
</style>
