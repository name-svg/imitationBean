<template>
  <div class="science">
    <div class="stop">
      <div class="oneleft">
        <img src="../../static/images/d.png">
        <div>
          <h5>豆瓣App</h5>
          <p>记录你的书音影生活</p>
        </div>
      </div>
      <div class="tworight">
        <a></a><span>打开APP</span>
      </div>
    </div>
    <div class="title">
      <h5>{{one.title}}</h5>
      <b>{{one.name}}</b>
      <p v-show="!show"> {{one.referral&&one.referral[0]}}</p>
      <span v-show="!show">
        {{one.referral&&one.referral[1]}}
      </span><a @click="tack" v-show="!show">展开</a>
      <ul v-show="show">
        <li v-for="items in one.referral">{{items}}</li>
      </ul>
      <div class="abox">
        <span >{{one.like}}</span><span @click="com">&nbsp;...</span>
      </div>
      <div class="report" v-show="flg">举报</div>
    </div>
    <div class="film">
      <ul>
        <li v-for="(items,index) in toptwo" v-if="m<=0?index<25:index>m*25&&index<(m+1)*25">
          <div class="upf">
            <img :src="items.images.small" class="uimg">
            <div>
              <h6>{{items.title}}</h6>
              <p>
                <img v-for="(i,index) in 5"  :src="items.rating.average/2-index>1?src[2]:items.rating.average/2-index>0&&items.rating.average/2-index<1?src[1]:src[0]"
                >
                <i>{{items.rating.average}}</i>
              </p>
              <p>
                <span v-for="items3 in items.casts">{{items3.name}}/</span><span v-for="items2 in items.genres">{{items2}}/</span><span>{{items.pubdates[0]}}/</span>
              </p>
            </div>
          </div>
          <div class="dof">
            <p>
              评语：豆瓣电影250No.100
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="look">
      <h5>查看更多豆列</h5>
      <ul>
        <li  v-for="items in one.more">{{items}}</li>
      </ul>
    </div>
    <div class="page">
      <span>·&nbsp;{{m+1}}&nbsp;·</span>
      <ul>
        <li @click="page" :class="m<=0?'grey':''">上页</li>
        <li @click="nex" :class="s">下页</li>
      </ul>
    </div>
    <foot></foot>
  </div>
</template>

<script>
  import foot from './foot.vue'
  import '../assets/reset.css'
  import '../assets/science.css'
export default {
  data () {
    return {
         src:['../../static/images/e_10.jpg','../../static/images/c_05.jpg','../../static/images/b_03.jpg'],
         show:false,
         flg:false,
         top:[],
         toptwo:[],
         one:{},
         n:10,
         m:0,
         s:'',
         smalltitle:'',
         length:0
    }
  },
  mounted(){
    let a = this.$route.query;
    this.one ={...a};
    this.$http({
        url:'https://douban.uieee.com/v2/movie/top250?start='+this.m*25+'&count='+25
      }).then((res)=>{
      this.length=res.data.total
      this.toptwo.push(...res.data.subjects)
    });
  },
  components:{
      foot
  },
  methods:{
      tack(){
          this.show=true;
      },
      com(){
        this.flg = !this.flg
      },
    nex(){
          this.m++;
      this.$http({
        url:'https://douban.uieee.com/v2/movie/top250?start='+this.m*25+'&count='+25
      }).then((res)=>{
        this.toptwo.push(...res.data.subjects);
        this.top = res.data.subjects;
        if(this.toptwo.length===this.length){
          this.m=this.toptwo.length/25-1;
          this.s='grey'
        }
      });
    },
    page(){
        this.m--;
      if(this.m<=0){
            this.m=0
      }
    }
  },
}
</script>
