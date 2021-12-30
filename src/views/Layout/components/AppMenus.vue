<template>
    <ul class="left-nav">
      <template  v-for="item in getters.headMenus" :key="item.id">
        <li class="nav-title" v-if="item.children && item.children.length>0"
            @mousemove="show(item)" @mouseleave="hide(item)"
        ><RouterLink :to="`/shop/category/${item.id}`">{{item.name}}</RouterLink>
          <div class="show-open" :class="{open:item.show}">
            <ul>
              <li v-for="sub in item.children" :key="sub.id" >
<!--                :to="`/shop/category/${item.id}?cateId=${sub.id}`"-->
                <RouterLink :to="{ name:'category',params:{id:item.id,cateId:sub.id}}">
                <img :src="item.picture" alt=""/>
                <p style="font-weight: normal;font-size: 14px;">{{sub.name}}</p></RouterLink>
              </li>
            </ul>
          </div>
        </li>
      </template>

    </ul>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, onMounted } from 'vue'

import {useStore} from 'vuex'
// const menus = [
//   {
//     id: 1,
//     title: '女装',
//     show: false,
//     children: [
//       { id: 1, title: '男装一' },
//       { id: 2, title: '男装二' },
//       { id: 3, title: '男装三' }
//     ]
//   },
//   {
//     id: 2,
//     title: '男装',
//     show: false,
//     children: [
//       { id: 1, title: '女装一' },
//       { id: 2, title: '女装二' },
//       { id: 3, title: '女装三' }
//     ]
//   },
//   {
//     id: 3,
//     title: '套装',
//     show: false,
//     children: [
//       { id: 1, title: '配件一' },
//       { id: 2, title: '配件二' },
//       { id: 3, title: '配件三' }
//     ]
//   },
//   {
//     id: 4,
//     title: '美妆',
//     show: false,
//     children: [
//       { id: 1, title: '新潮流一' },
//       { id: 2, title: '新潮流二' },
//       { id: 3, title: '新潮流三' }
//     ]
//   },
//   {
//     id: 4,
//     title: '女鞋',
//     show: false,
//     children: [
//       { id: 1, title: '新潮流一' },
//       { id: 2, title: '新潮流二' },
//       { id: 3, title: '新潮流三' }
//     ]
//   }
// ]
import {useRouter,useRoute} from 'vue-router'
export default defineComponent({
  name: 'AppMenus',
  setup () {
    const router = useRouter()
    const route = useRoute()
    const dateShop= reactive({
      openShow: false,
      // menus:[]
    })
    const {getters} = useStore()
    // onMounted(()=>{
    //   dateShop.menus = getters.headMenus
    // })
    function show (value) {
      const currCategory = getters.headMenus.find(item => item.id === value.id)
      currCategory.show = true
    }
    function hide (value) {
      const currCategory = getters.headMenus.find(item => item.id === value.id)
      currCategory.show = false
    }

    // function toPatSub(fid,cid){
    //   route.meta.cid = cid
    //   router.push({path:`/shop/category`})
    //   // console.log
    //   // router.push({name:'category',params:{id:fid,cateId:cid}})
    // }

    return {
      ...toRefs(dateShop),
      getters,
      activeKey: ref('1'),
      show,
      hide,
    }
  }
})
</script>

<style scoped lang="less">
.left-nav{
  display: flex;
  justify-content: center;
  align-content: center;
  //text-align: center;
  height: 40px;
  margin-left: 30px;
  >li{
    line-height: 40px;
    text-align: center;
    margin: 0 25px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    &:hover{
      color: #42b983;
      border-bottom: 2px solid #333333;
    }
  }
}

.show-open{
  &.open {
    height: 132px;
    opacity: 1;
  }
  width: 1240px;
  background-color: #fff;
  position: fixed;
  left: 50%;
  top: 72px;
  height: 0;
  transform: translateX(-50%);
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all .2s .1s;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
  li{
    width: 110px;
    text-align: center;
    img{
      width: 60px;
      height: 60px;
    }
    p{
      padding-top: 10px;
    }
    &:hover{
      p{
        color: #27BA9B;
      }
    }
  }
}}
</style>
