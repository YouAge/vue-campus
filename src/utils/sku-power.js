/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */


// let skuArray =[]
let skuList =[]
// const skuSpec =  [ { name: '尺码', list: ['S', 'M', 'L', 'XL', 'XXL'] },
//           { name: '颜色', list: ['红色', '黄色', '蓝色', '粉色', '紫色'] },
//         { name: '图案', list: ['猫咪', '人物', '飞机', '闪电', '字母'] }]
// function skuPower(){
//   skuSpec.forEach(ele=>{
//     ele.list.length>0?skuArray.push(ele.list):''
//   })
//   getSkuDate([],0,skuArray)
//
// }


const sku = [
  [{key:'尺码',value:'S'},{key:'尺码',value:'M'}],
  // [{key:'颜色',value:'黄色'},{key:'颜色',value:'粉色'}],
  // [{key:'图案',value:'猫咪'},{key:'图案',value:'人物'},{key:'图案',value:'字母'}]
]

// function skuDate(skuArr=[],i,list){
//   for(let j in list){
//     if(i<list.length -1){
//       skuArr[i] = list[i][j]
//     }
//   }
//
// }


function getSkuDate(skuArr=[],i,list){

  for(let j =0;j<list[i].length;j++){
    if(i<list.length-1){
      skuArr[i] = list[i][j]
      getSkuDate(skuArr,i+1,list)
    }else {
      skuList.push([...skuArr,list[i][j]])
      // return [...skuArr,list[i][j]]
    }
  }
}
 getSkuDate([],0,sku)
console.log(skuList)
// skuPower()
// console.log(skuArray)
// console.log(skuList)
