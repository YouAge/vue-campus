<template>
<div class="cate-word-wrap">
  <div class="merge-mod-wrap">
    <div class="cate-item" v-for="item in menus" :key="item.id">
        <a href="/" target="" :style="{backgroundImage: 'url('+'https://s10.mogucdn.com/mlcdn/c45406/181031_20c98cekk381c5i3ladb506e8g290_172x172.png'+')'}">
<!--          <el-image src="	https://s10.mogucdn.com/mlcdn/c45406/181031_20c98cekk381c5i3ladb506e8g290_172x172.png"-->
<!--                    fit="cover"  style="width: 70%;height: 70%"/>-->
          <div class="cate-item-title">上衣</div>
        </a>
    </div>
  </div>
  <div class="merge-mod-wrap">
    <div class="cate-mode-title">
      <a href="/" target="">上衣上衣</a>
    </div>
  </div>
</div>
</template>

<script>
import {ref} from "vue";
export default {
  data(){
    return {
      menus:[
        {id:1,path:'',name:"上衣",img:''},
        {id:2,path:'',name:"上衣",img:''},
        {id:3,path:'',name:"上衣",img:''},
        {id:4,path:'',name:"上衣",img:''},
        {id:5,path:'',name:"上衣",img:''},
        {id:6,path:'',name:"上衣",img:''},
      ]
    }
  }
}
</script>

<style scoped lang="less">
.cate-word-wrap{
  .merge-mod-wrap{
      display: flex;
      flex-wrap: wrap;
    .cate-item{
      //margin-left: 10px;
      display: flex;
      a{
        display: block;
        width: 112px;
        height: 112px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: 50%;
        text-align: center;
      }
      .cate-item-title{
        font-size: 14px;
        color: #333;
        margin-top: 75px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .cate-mode-title{
      width: 112px;
      text-align: center;
      border-radius: 4px;
      a{

      }
    }
  }
}

</style>
