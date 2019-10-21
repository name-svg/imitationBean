<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import navs from './components/navs.vue'
  import foot from './components/foot.vue'
export default {
  name: 'App',
  components:{
      navs,
    foot,
  }
}
</script>

<style>
</style>
