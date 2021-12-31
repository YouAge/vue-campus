<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs" :key="item.id">
      <dt>{{item.key}}</dt>
      <dd>
        <template v-for="val in item.value" :key="val.value">
          <img :class="{selected:val.selected,disabled:val.disabled}"
               @click="changeSku(item,val)" v-if="val.picture" :src="val.picture" :title="val.value" >
          <span :class="{selected:val.selected,disabled:val.disabled}"
                @click="changeSku(item,val)" v-else>{{val.value}}</span>
        </template>
      </dd>
    </dl>
  </div>
</template>
<script>
import powerSet from '@/utils/power-set'
const spliter = '-'
// 获取有效的子集，
function getPathMap(skus){
  // 1. 得到所有的sku集合  props.goods.skus
  // 2. 从所有的sku中筛选出有效的sku
  // 3. 根据有效的sku使用power-set算法得到子集
  // 4. 根据子集往路径字典对象中存储 key-value
  const pathMap ={}
  skus.forEach(sku=>{
    //如果库存大于零，可使用
    if(sku.inventory>0){
      // 可选值的筛选，[['白色','32'],['红色']]
      const valueArr = sku.specs.map(val=>val.value)
      const valueArrPowerSet = powerSet(valueArr)
      valueArrPowerSet.forEach(arr=>{
       //根据arr得到字符串的key，约定key是：['白色','32'] ===> '白色-32'
          const key =arr.join(spliter)
          if(pathMap[key]){
            pathMap[key].push(sku.id)
          }else {
            pathMap[key] = [sku.id]
          }
      })

    }
  })
  return pathMap
}

//获取已选中的值数组
function getSelectedValues(specs){
  const arr =[]
  specs.forEach(item=>{
    // 选中的按钮对象
    const seletedVal = item.value.find(val => val.selected)
    arr.push(seletedVal ? seletedVal.value : undefined)
  })
  return arr
}

/// 更新按钮禁用状态
function updateDisabledStatus(specs, pathMap){
  // 约定每一个
  specs.forEach((item,i)=>{
    const selectedValues = getSelectedValues(specs)
    item.value.forEach(val=>{
      // 2. 判断当前是否选中，是选中不用判断
      if(val.selected) return
      // 3. 拿当前的值按照顺序套入选中的值数组
      selectedValues[i] = val.value
      // 4. 剔除undefined数据，按照分隔符拼接key
      const key = selectedValues.filter(value => value).join(spliter)
      // 5. 拿着key去路径字典中查找是否有数据，有可以点击，没有就禁用（true）
      val.disabled = !pathMap[key]
    })
  })

}

export default {
  name: 'GoodsSku',
  props: {
    goods: {
      type: Object,
      default: () => ({})
    },
    skuId: {
      type: String,
      default: ''
    }
  },
  setup (props, { emit }) {

   const pathMap = getPathMap(props.goods.skus)
    console.log('数据',pathMap,props.goods.skus)
    const changeSku = (item, val) => {
      if(val.disabled) return
       // 如果不是，
      if(val.selected){ // 选择，取消
        val.selected = false
      }else {
        // 选择
        item.value.forEach(valueItem=>{
          valueItem.selected = false
        })
        val.selected = true
      }
      // 判断组合的可选项， 按钮的禁用状态
      updateDisabledStatus(props.goods.specs,pathMap)

      // to
    const validSelectedValues = getSelectedValues(props.goods.specs).filter(v=>v)
      if(validSelectedValues.length === props.goods.specs.length){
        const skuIds = pathMap[validSelectedValues.join(spliter)]
        const sku = props.goods.skus.find(sku=>sku.id ===skuIds[0])
        console.log('得到：',skuIds,sku)
        emit('change',{sku,    // 属性名：属性值 属性名1：属性值1 ... 这样的字符串
          specsText: sku.specs.reduce((p, c) => `${p} ${c.key}：${c.value}`, '').trim()
        })
      }else {
        emit('change', null)
      }

    }
    return { changeSku }
  }
}
</script>
<style scoped lang="less">
.sku-state-mixin () {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  &.selected {
    border-color: #27BA9B;
  }
  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}
.goods-sku {
  padding-left: 10px;
  padding-top: 20px;
  dl {
    display: flex;
    padding-bottom: 10px;
    align-items: center;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      flex: 1;
      color: #666;
      line-height: 40px;
      > img {
        width: 50px;
        height: 50px;
        .sku-state-mixin ();
      }
      > span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
        .sku-state-mixin ();
      }
    }
  }
}
</style>
