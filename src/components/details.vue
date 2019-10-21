<template>
  <div class="details">
    <navs></navs>
    <div class="box">
      <div class="boxLeft">
      <h5>{{all.title}}</h5>
      <span v-if="all.rating&&all.rating.average==0">暂无评分 {{all.wish_count}}人评价</span>
        <div class="hotp" v-if="all.rating&&all.rating.average !==0" style="height:0.2rem;width:100%;margin-bottom:0.1rem;">
          <span v-for="count in Math.floor(all.rating&&all.rating.average/2)"></span>
          <b v-if="String(all.rating&&all.rating.average/2).indexOf('.')>=0"></b>
          <a class="sp" v-if="5-Math.ceil(all.rating&&all.rating.average/2)>0" v-for="it in 5-Math.ceil(all.rating&&all.rating.average/2)"></a>
          <i>{{all.wish_count}}人评价</i>
        </div>
        <p>{{p}}</p>
        <a>用APP查看影人资料</a>
    </div>
      <div class="boxRight">
        <img :src="all.images&&all.images.small">
      </div>
    </div>
    <div class="Down">
      <span>想看</span>
      <span>看过</span>
    </div>
    <div class="brief">
      <h6>{{all.title}}的简介</h6>
      <p>
        {{all.summary}}
        <span>(展开)</span>
      </p>
      <a>查看更多相关分类</a>
      <ul>
        <li v-for="items in all.genres">{{items}}</li>
      </ul>
    </div>
    <div class="im">
      <h5>{{all.title}}的图片</h5>
      <ul>
        <li v-for="items2 in all.photos"><img :src="items2.image"></li>
      </ul>
    </div>
    <short :all="all"></short>
  </div>
</template>

<script>
  import short from './short.vue'
  import '../assets/reset.css'
  import '../assets/datalis.css'
  import navs from './navs.vue'
export default {
  data () {
    return {
        all:{},
        p:''
    }
  },
  mounted(){
      let a = this.$route.query.id;
    this.$http({url:'https://douban.uieee.com/v2/movie/subject/'+a}).then((res)=>{
        this.all=res.data;
      this.p += '  '+this.all.year+' '+'/';
      this.all.genres.map(val=>{
        this.p+='  '+val+' '+'/'
      });
      this.all.casts.map(val=>{
          this.p+='  '+val.name+' '+'/'
      });
       this.all.directors.map(val=>{
         this.p+='  '+val.name+' '+'/'
       });
        this.p+='  '+this.all.countries[0]+' '+'/'
    });
  },
  components:{
      short,
      navs
  }
}
</script>
