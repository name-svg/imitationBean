<template>
  <div class="move" >
    <div class="hot" v-for="(items,index) in allArr">
      <h5>{{title[index]}}<span>更多</span></h5>
      <dl>
        <dd v-for="items1 in items" @click="into(items1.id)">
          <img :src="items1.images.small">
          <h6>{{items1.title}}</h6>
          <p v-if="items1.rating.average==0">暂无评分</p>

          <p class="hotp" v-if="items1.rating.average !==0">
            <span v-for="(count,index) in Math.floor(items1.rating.average/2)"></span>
            <b v-if="String(items1.rating.average/2).indexOf('.')>=0"></b>
            <a class="sp" v-if="5-Math.ceil(items1.rating.average/2)>0" v-for=" items in 5-Math.ceil(items1.rating.average/2)"></a>
            <i>{{items1.rating.average}}</i>
          </p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
  import '../assets/reset.css'
  import '../assets/index.css'
//  import hotJson from '../assets/hot.json'
  export default {
  data () {
    return {
        title:['影院热映','免费在线观影','新片速递'],
        allArr:[],
    }
  },
  mounted(){
      let _this=this;
      function getA(){
      return _this.$http.get('https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10')
      }
      function getB(){
          return _this.$http.get('https://douban.uieee.com/v2/movie/top250?start=0&count=10')
      }
    function getC(){
      return _this.$http({url:'https://douban.uieee.com/v2/movie/new_movies'})
    }
    this.$http.all([getA(),getB(),getC()]).then(this.$http.spread((a,b,c)=>{
      this.allArr.push(a.data.subjects);
      this.allArr.push(b.data.subjects);
      this.allArr.push(c.data.subjects);
    }));
  },
  methods:{
      into(x){
         this.$router.push('/details?id='+x)
      }
  }
}
</script>
