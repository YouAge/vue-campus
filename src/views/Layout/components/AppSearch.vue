<template>
<ul class="right-nav">
  <li>
    <input-search
      v-model:value="keyword"
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    />
  </li>
  <li>
<!--    <template >-->
      <a-dropdown  class="f-dropdown" v-if="$store.getters.loginStatus">
          <UserOutlined :style="{fontSize: '20px'}"/>
        <template #overlay>
          <a-menu>
            <a-menu-item>
                <div>
                  我的账户
                </div>
            </a-menu-item>
            <a-menu-item>
              退出
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
<!--    </template>-->
<!--    <template v-else>-->
      <RouterLink class="curr" to="/login" v-else>
        <UserOutlined :style="{fontSize: '20px'}"/>
      </RouterLink>
<!--    </template>-->

  </li>
<!--  <li>-->
<!--    <RouterLink class="curr" to="/login">-->
<!--    <HeartOutlined :style="{fontSize: '20px'}"/>-->
<!--    </RouterLink>-->
<!--  </li>-->
  <li>
    <RouterLink class="curr" to="/cart">
      <i class="iconfont icon-cart"></i>
<!--      <em>{{1}}</em>-->
    </RouterLink>
  </li>
</ul>
</template>

<script>
import { ref } from 'vue'
import { InputSearch } from 'ant-design-vue'
import { HeartOutlined, UserOutlined } from '@ant-design/icons-vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'

export default {
  name: 'AppSearch',
  components: {
    InputSearch,
    HeartOutlined,
    UserOutlined
  },
  setup () {
    const keyword = ref('')
    const router = useRouter()
    const store = useStore()

    function onSearch () {
      if(keyword.value){
        router.push({path:'/shop/search',query:{keyword:keyword.value}})
      }
    }
    return {
      onSearch,
      keyword
    }
  }
}
</script>

<style scoped lang="less">
.right-nav{
  display: flex;
  align-content: center;
  //text-align: center;
  height: 40px;
  margin-left: 30px;
  >li{
    line-height: 40px;
    text-align: center;
    margin: 0 10px;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    &:hover{
      color: #42b983;
    }
  }
}

  .curr {
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: relative;
    display: block;
    .icon-cart {
      font-size: 20px;
    }
    em {
      font-style: normal;
      position: absolute;
      right: -4px;
      top: 4px;
      padding: 1px 6px;
      line-height: 1;
      background: #E26237;
      color: #fff;
      font-size: 12px;
      border-radius: 10px;
      font-family: Arial;
    }
  }

</style>
