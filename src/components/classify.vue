<template>
  <div class="classify">
    <div class="browse">
    <h6>分类浏览</h6>
      <ul>
        <li v-for="items in liArr"><span ref="o">{{items}}</span><b></b></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import '../assets/reset.css'
  import '../assets/index.css'
export default {
  data () {
    return {
        left:'0.22rem',
        liArr:[
            '经典','冷门佳片','豆瓣高分','动作','喜剧','爱情','悬疑','恐怖','科幻','治愈','文艺','成长',
             '动画','华语','欧美','韩国','日本'
        ]
    }
  },
  mounted(){
    this.$refs.o.map((val,index)=>{
        if(String(index/2).indexOf('.')>0){
            val.style.marginLeft=this.left;
        }
    })
  }
}
</script>
