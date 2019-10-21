<template>
  <div class="search">
    <navs></navs>
    <mt-search v-model="value">
      <div class="ab">
        <div v-for=" items in arr">
          <h5>{{items.title}}</h5>
          <ul>
            <li class="special">{{items.more}}</li>
          </ul>
        </div>
      </div>
    </mt-search>
  </div>
</template>

<script>
  import '../assets/reset.css'
  import '../assets/search.css'
  import navs from'./navs.vue'
export default {
  data () {
    return {
        value:'',
        arr:[
          {
              title:'影视',
              more:'查看更多影视结果'
          },
          {
            title:'图书',
            more:'查看更多图书结果'
          },
          {
            title:'音乐',
            more:'查看更多音乐结果'
          },

        ]
    }
  },
  mounted(){
    let a = this.$route.query;
    this.value=a
  },
  methods:{
      start(){
        this.$http({
          url:'https://douban.uieee.com/v2/movie/search?q='+this.value+'&start=0&count=10'
        }).then((res)=>{
          console.log(res);
        })
      }
  },
  components:{
      navs
  },
  mounted(){
  }
}
</script>
