<template>
  <div class="home-category" @mouseleave="categoryId=null">
    <ul class="menu">
      <li :class="{active:categoryId&&categoryId===item.id}" v-for="item in menuList" :key="item.id" @mouseenter="categoryId=item.id">
        <RouterLink :to="`/good-list/${item.id}`">{{ item.name }}</RouterLink>
        <template v-if="item.children">
          <RouterLink
            v-for="sub in item.children"
            :key="sub.id"
            :to="`/good-list/${item.id}`"
            >{{ sub.name }}</RouterLink
          >
        </template>
        <!-- 骨架 -->
        <template v-else>
          <HSkeleton height="18px" width="60px" bg="rgba(255,255,255,0.2)" style="margin-right:5px" />
          <HSkeleton height="18px" width="50px" bg="rgba(255,255,255,0.2)"/>
        </template>
      </li>
    </ul>
    <!-- 弹层 -->
    <div class="layer">
      <h4>{{currCategory&&currCategory.id==='brand'?'品牌':'分类'}}推荐 <small>根据您的购买或浏览记录推荐</small></h4>
      <!-- 商品 -->
      <ul v-if="currCategory && currCategory.goods">
        <li v-for="item in currCategory.goods" :key="item.id">
          <RouterLink :to="`/product/${item.id}`">
            <img :src="item.image" alt="">
            <div class="info">
              <p class="name ellipsis-2">{{item.name}}</p>
              <p class="desc ellipsis">{{item.desc}}</p>
              <p class="price"><i>¥</i>{{item.price}}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
      <!-- 品牌 -->
      <ul v-if="currCategory && currCategory.brands">
        <li class="brand" v-for="brand in currCategory.brands" :key="brand.id">
          <RouterLink to="/">
            <img :src="brand.picture" alt="">
            <div class="info">
              <p class="place"><i class="iconfont icon-dingwei"></i>{{brand.place}}</p>
              <p class="name ellipsis">{{brand.name}}</p>
              <p class="desc ellipsis-2">{{brand.desc}}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HSkeleton from '@/components/HSkeleton.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'HomeCategory',
  components: { HSkeleton },
  // setup () {
  //   // 最终使用的数据 = 9个分类() + 1个品牌
  //   const brand = reactive({
  //     id: 'brand',
  //     name: '品牌',
  //     children: [{ id: 'brand-children', name: '品牌推荐' }],
  //     // 品牌列表
  //     brands: []
  //   })
  //
  //   const menuList = computed(() => {
  //     // 得到9个分类切每个一级分类下的子分类只有两个
  //     const list = listModel.map((item) => {
  //       return {
  //         id: item.id,
  //         name: item.name,
  //         children: item.children && item.children.slice(0, 2),
  //         goods: item.goods
  //       }
  //     })
  //     list.push(brand)
  //     return list
  //   })
  //
  //   // 得到弹出层的推荐商品数据
  //   const categoryId = ref(null)
  //   const currCategory = computed(() => {
  //     return menuList.value.find(item => item.id === categoryId.value)
  //   })
  //
  //   // 获取品牌数据，尽量不用使用async再setup上
  //   // findBrand().then(data => {
  //   //   brand.brands = data.result
  //   // })
  //
  //   // brand.brands =[]
  //   return { menuList, categoryId, currCategory }
  // },
  data(){
    return {
      categoryId:''
    }
  },
  computed:{
    ...mapGetters([
      'loginStatus',
      'userInfo',
      'headMenus'
    ]),
    menuList:function () {

      const list = this.headMenus.map((item) => {
        // let goods = []
        // item.children.forEach(g=>{
        //   goods = [...goods,...g.goods]
        // })
        // console.log(goods)
        return {
          id: item.id,
          name: item.name,
          children: item.children && item.children.slice(0, 2),
          goods: item.goods
        }
      })
      // list.push(brand)
      return list
    },
    currCategory:function (){
      return this.menuList.find(item => item.id === this.categoryId)
    }
  }
}
</script>

<style scoped lang='less'>
.home-category {
  width: 255px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  text-align: left;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;
      &:hover,&.active {
        background: #27BA9B;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
  }
  // 弹出层样式
    .layer {
    width: 990px;
    height: 500px;
    background: rgba(255,255,255,0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;
    h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 80px;
      small {
        font-size: 16px;
        color: #666;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;
        &:nth-child(3n) {
          margin-right: 0;
        }
        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 10px;
          &:hover {
            background: #e3f9f4;
          }
          img {
              width: 95px;
              height: 95px;
          }
          .info {
            padding-left: 10px;
            line-height: 24px;
            width: 190px;
            .name {
              font-size: 16px;
              color: #666;
            }
            .desc {
              color: #999;
            }
            .price {
              font-size: 22px;
              color: #CF4444;
              i {
                font-size: 16px;
              }
            }
          }
        }
      }
      // 品牌的样式
      li.brand {
        height: 180px;
        a {
          align-items: flex-start;
          img {
            width: 120px;
            height: 160px;
          }
          .info {
            p {
              margin-top: 8px;
            }
            .place {
              color: #999;
            }
          }
        }
      }
    }
  }
  &:hover {
    .layer {
      display: block;
    }
  }
}
// 骨架动画
.xtx-skeleton {
  animation: fade 1s linear infinite alternate;
}
@keyframes fade {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}

.ellipsis-2,
.ellipsis{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}
</style>
