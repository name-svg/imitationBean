<template>
  <div class="navs">
    <a></a>
    <ul class="navlist">
      <li v-for="(items,index) in msg" :style="{color:color[index]}">{{items}}</li>
    </ul>
    <span @click="search"></span>
  </div>
</template>

<script>
  import '../assets/reset.css'
  import '../assets/index.css'
export default {
  data () {
    return {
      msg:['电影','图书','广播','小组'],
      color:['#2384e8','#9f7860','#e4a813','#2ab8cc']
    }
  },
  methods:{
      search(){
          this.$router.push('/search')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped lang="stylus">-->
  <!--.navlist-->
    <!--height:0.58rem;-->
<!--</style>-->
