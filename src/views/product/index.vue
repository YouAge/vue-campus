<template>
  <div style="width: 100%">
    <div class="content-header">
      <!--  商品信息-->
      <div class="goods-info">
        <div class="media">
          <GoodsImage :images="goodsInfo.picture"/>
          <GoodsSales />
        </div>
        <div class="spec">
          <GoodsTitle :goods="goodsInfo" :price="newPrice" :old-price="newOldPrice"/>
          <!--    // 数据选择组件-->
          <GoodsSku :goods="goodsInfo" @change="changeSku" v-if="goodsInfo.skus"/>
          <!--    // 数量选择-->
          <HNumber label="数量" v-model="num" :max="inventory"/>
          <!--    // 加入购物车-->
          <Button type="primary" @click="insertCart" style="margin-top:20px;width: 180px" size="large">加入购物车</Button>
        </div>
      </div>
      <!--  //商品信息-->
      <div  class="goods-footer">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <GoodsTabs />
          <!-- 注意事项 -->
          <GoodsWarn />
        </div>
        <!-- 24热榜+周热销榜 -->
<!--        <div class="goods-aside">-->
<!--        </div>-->
      </div>
    </div>
  </div>



</template>

<script>

import GoodsItem from './components/goods-item.vue'
import GoodsImage from './components/GoodsImage.vue'
import GoodsSales from './components/GoodsSales.vue'
import GoodsTitle from './components/GoodsTitle.vue'
import GoodsSku from './components/GoodsSku.vue'
import HNumber from '@/components/HNumber.vue'
import { Button,message,Modal } from 'ant-design-vue'
import { ref, provide, nextTick,watch,onMounted } from 'vue'
import GoodsTabs from './components/GoodsTabs.vue'
import GoodsWarn from './components/GoodsWarn.vue'
import {useStore} from 'vuex'
import {useRoute,useRouter} from 'vue-router'
import { addCartPost, addGoodsBrowse, goodsDetailsGet } from '@/api/shop'
export default {
  name: 'index',
  components: { GoodsWarn, GoodsTabs, HNumber, GoodsSku, GoodsTitle, GoodsSales, GoodsImage, GoodsItem,Button },
  setup(){
    const store = useStore()
    const goodsInfo = useGoods()
    const route = useRoute()
    const router = useRouter()
    // 提供goods数据给后代组件使用
    const inventory = ref(99)
    const currSku = ref(null)
    const newPrice = ref(0)
    const newOldPrice = ref(0)
    // 选择的数量
    const num = ref(1)
    function changeSku(item){
      if(item){
        currSku.value = item
        inventory.value = item.sku.inventory
        newPrice.value = item.sku.price
        newOldPrice.value = item.sku.oldPrice
      }else {
        newPrice.value = 0
        newOldPrice.value = 0
      }
      console.log(newPrice.value)
    }
    // 加入购物车
    function insertCart(){
      // 验证身份是否登入，提示先去登入
      if(store.getters.loginStatus){
        if(currSku.value && currSku.value.sku.id){
          addCartPost({goodsId:goodsInfo.value.id,
            shopNumber:num.value,skuId:currSku.value.sku.id
          }).then(()=>{
            message.success('加入购物车成功')
          })
        }else {
          message.error('请选择完成规格')
        }
      }else {
        Modal.confirm({
          title: () => '提示',
          // icon: () => createVNode(ExclamationCircleOutlined),
          content: () => '您还为登入，请先登入后才再继续操作',
          onOk() {
            return new Promise((resolve, reject) => {
              message.success('即将为你跳转登入页面')
              setTimeout(()=>{
                resolve()
                router.push({path:'/login',query:{redirect:route.fullPath}})
              } ,800);
            }).catch(() => console.log('Oops errors!'));
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onCancel() {},
        });

      }
    }

    return {
      goodsInfo, changeSku,num,insertCart,inventory,newPrice,newOldPrice
    }
  }
}

const useGoods = ()=>{
  const goodsInfo =ref({picture:[]})
  const route = useRoute()
  provide('goods', goodsInfo)
  async function getGoodsDetailsHttp(){
    goodsDetailsGet(route.params.id).then(data=>{
      goodsInfo.value = data
      goodsInfo.value.userAddresses= []
      goodsInfo.value.commentCount = 90
      addGoodsBrowse({goodsId:goodsInfo.value.id})
      // nextTick(() => {
      //   goodsInfo.value = data
      //   goodsInfo.value.userAddresses= []
      //   goodsInfo.value.commentCount = 90
      // })
    })
  }
  onMounted(async ()=>{
    await getGoodsDetailsHttp()
  })

  // watch(()=>route.params.id,val=>{
  //   goodsDetailsGet(route.params.id).then(data=>{
  //     goodsInfo.value = data
  //     nextTick(() => {
  //       goodsInfo.value = data
  //       goodsInfo.value.userAddresses= []
  //       goodsInfo.value.commentCount = 90
  //     })
  //   })
  // },{immediate:true})
  return goodsInfo
}

</script>

<style scoped lang="less">
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}

.goods-footer {
  display: flex;
  margin-top: 20px;
  //border: 1px solid #8D8D8D;
  .goods-article {
    //width: 940px;
    //width: 70%;
    //margin-right: 20px;
    border: 1px solid #8D8D8D;
  }
  //.goods-aside {
  //  //width: 280px;
  //  //width: 29%;
  //  min-height: 1000px;
  //}
}


</style>
