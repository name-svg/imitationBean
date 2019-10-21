<template>
  <div class="short">
    <div class="small">
      <h5>{{all.title}}的短评</h5>
      <ul>
        <li v-for="it in all.popular_comments">
          <div><img src="../../static/images/d.png"></div>
          <div>
            <h6>豆瓣</h6>
            <span>{{it.created_at}}</span>
            <p>
              {{it.content}}
            </p>
            <span class="praise"><b></b>4</span>
            <span class="dot"><a></a></span>
          </div>
        </li>
        <li class="more">显示更多评论</li>
      </ul>
    </div>
    <div class="ad"><img src="http://img.hb.aicdn.com/c1dd2a72fa6412bd455868be68ca402cf9f94b84e688-WMTPtp_fw658"></div>
    <div class="questions">
      <h5>关于{{all.title}}的问答</h5>
      <ul>
        <li>
          <p>大家为什么对国产片这么苛刻？</p>
          <span>35回答</span>
        </li>
        <li>
          <p>大家为什么对国产片这么苛刻？</p>
          <span>35回答</span>
        </li>
        <li>
          <p>大家为什么对国产片这么苛刻？</p>
          <span>35回答</span>
        </li>
        <li class="qu">显示更多答案</li>
      </ul>
    </div>
    <h5 class="onl">推荐的豆列</h5>
    <discover></discover>
    <foot></foot>
  </div>
</template>

<script>
  import discover from './discover.vue'
  import '../assets/reset.css'
  import '../assets/datalis.css'
  import foot from './foot.vue'
export default {
  data () {
    return {
    }
  },
  props:['all'],
  components:{
      discover,
       foot
  }
}
</script>
<style scoped>
  .onl{
    padding-left:0.19rem;
    line-height:0.56rem;
    height:0.56rem;
    font-size:0.16rem;
  }
</style>
