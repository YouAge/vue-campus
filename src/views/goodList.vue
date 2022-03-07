<template>
<div class="content-header">

<!--  //导航栏-->
  <div class="sub-list">
    <router-link :to="`/good-list/${item.id}`" v-for="item in headMenus" :key="item.id" :class="{'f-hover':hoveId==item.id} ">
      <span>{{item.name}}</span></router-link>
  </div>
  <div class="select-sub">
    <div>
      <span>综合</span>
      <span>销量</span>
      <span>新品</span>
    </div>
  </div>

<!--  <div class="good-shops">-->

<!--  </div>-->
  <template v-if="goodsList.length>0">
    <el-row :gutter="5">
      <el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" v-for="goods in goodsList" :key="goods.id">
        <GoodsItem :goods="goods" />
      </el-col>
    </el-row>

    <h-pagination v-if="total>0" :current-page="page.page"
                  :page-size="page.pageSize"
                  :total="total"
                  @current-change="page.page=$event" />
  </template>
  <div v-else style='min-height: 300px'>
    <el-empty description="暂无商品数据，等待新待商品上架"></el-empty>
  </div>

</div>

</template>

<script>
import GoodsItem from '@/components/GoodsItem.vue'
import { mapGetters } from 'vuex'
import { cateShopGet } from '@/api/shop'
import HPagination from '@/components/order/HPagination.vue'

export default {
  components:{
    HPagination,
    GoodsItem},
  data(){
    return {
      menuList:[],
      hoveId:null,
      tagId:null,
      goodsList:[],
      page:{
        page:1,
        pageSize:30,
      },
      total:0
    }
  },
  computed:{
    ...mapGetters([
      'headMenus'
    ])
  },
  watch:{
    $route:{
      handler(to){
        console.log(to)
        this.hoveId = to.params.id
        this.tagId = this.$route.query.tag
        this.getCrateHttp()
      },
      deep:true
    },
    'page': {
      handler (newName, oldName) {
        this.getCrateHttp()
      },
      deep: true
    }
  },
  methods:{
    //获取标签列表数据
   async getCrateHttp(){
     let item = {cateId:this.hoveId,pageSize:this.page.pageSize,pageIndex:this.page.page}
     if(this.tagId){
       item.tagId = this.tagId
     }
     if(this.keyword ){
       item.keyword = this.keyword
     }
     const data = await cateShopGet(item)
     console.log(data)
     this.goodsList = data.rows
     this.total = data.count
    }

  },
  created () {
   this.hoveId = this.$route.params.id
    this.tagId = this.$route.query.tag
    this.keyword = this.$route.query.keyword
    console.log(this.$route)
    this.getCrateHttp()
  }
}
</script>

<style scoped lang="less">
.sub-list{
  display: flex;
  background-color: #F9F9F9;
  border-top: 1px solid #E1E1E1;
  border-bottom: 2px solid #E1E1E1;
  .f-hover{
    background-color: #FFFFFF;
    border-top: 2px solid saddlebrown;
    border-right: 1px solid #F9F9F9;
    border-left: 1px solid #F9F9F9;
  }
  a{
    display: inline-block;
    padding: 5px 15px;
    //margin-right: 10px;
    span{
      line-height: 30px;
    }
  }

}
.select-sub{
  border: 1px solid #e5e5e5;
  height: 40px;
  padding: 7px 0;
  line-height: 24px;
  overflow: hidden;
  >div>span{
    padding: 0 20px;
    //text-align: center;
    border-right: 1px solid #e5e5e5;
    font-size: 12px;
    //span{
    //  line-height: 30px;
    //}
  }
}

.good-shops{
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  >a{
    margin: 20px 25px 0 0;
  }
}
</style>
