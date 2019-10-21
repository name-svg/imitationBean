<template>
  <div class="search">
    <div class="head">
      <span @click="$router.go(-1)">关闭</span>
      <input type="search" @focus="add" :class="cl" @blur="sub" @keydown.enter="com" v-model="msg">
    </div>
    <div class="much">
      <ul>
        <li v-for="items in arr"><h5 :style="{color:items.color}">{{items.name}}</h5><span>{{items.title}}</span></li>
      </ul>
    </div>
    <div class="lo">
        <div class="lol"><a>注册账号</a><a>登录豆瓣</a></div>
        <div class="lolx"><a>使用桌面板</a><a>使用豆瓣APP</a></div>
    </div>
  </div>
</template>

<script>
  import '../assets/reset.css'
  import '../assets/search.css'
export default {
  data () {
    return {
        msg:'',
           cl:'',
           arr:[
             {
                 name:'电影',
                 title:'影院热映',
                 color:'rgb(35, 132, 232)',
             },
             {
               name:'电视',
               title:'正在热播',
               color:'rgb(122, 106, 219)',
             },
             {
               name:'图书',
               title:'畅销排行',
               color:'rgb(159, 120, 96)',
             },
             {
               name:'同城',
               title:'周末活动',
               color:'rgb(230, 70, 126)',
             },
             {
               name:'小组',
               title:'志趣相投',
               color:'rgb(42, 184, 204)',
             },
             {
               name:'音乐',
               title:'新碟榜',
               color:'rgb(244, 143, 46)',
             },
             {
               name:'阅读',
               title:'电子书',
               color:'rgb(159, 120, 96)',
             },
             {
               name:'游戏',
               title:'虚拟世界',
               color:'rgb(87, 116, 197)',
             },
             {
               name:'应用',
               title:'玩手机',
               color:'rgb(89, 108, 221)',
             },
             {
               name:'东西',
               title:'心爱之物',
               color:'rgb(225, 100, 77)',
             },
             {
               name:'FM',
               title:'红心歌单',
               color:'rgb(64, 207, 169)',
             },
             {
               name:'市集',
               title:'购买原创',
               color:'rgb(66, 189, 86)',
             },
           ]
    }
  },
  methods:{
      add(){
         this.cl='fo'
      },
    sub(){
          this.cl=''
    },
    com(){
        let a = this.msg;
        this.$router.push({
          path:'/searchtwo',
          query:{cont:a}
        })
    }
  }
}
</script>
<style>
</style>
