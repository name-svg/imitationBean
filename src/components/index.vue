<template>
  <div class="index">
    <navs></navs>
    <move></move>
    <h5>发现好电影</h5>
    <discover></discover>
    <classify></classify>
    <foot></foot>
  </div>
</template>

<script>
//  import navs from './navs.vue'
  import move from './move.vue'
  import discover from './discover.vue'
  import classify from './classify.vue'
import navs from './navs.vue'
import foot from './foot.vue'
export default {
  data () {
    return {
      msg: ''
    }
  },
  components:{
      navs,
      move,
    discover,
    classify,
    foot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h5{
    padding-left:0.19rem;
    line-height:0.56rem;
    height:0.56rem;
    font-size:0.16rem;
  }
</style>
