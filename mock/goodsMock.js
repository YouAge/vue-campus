/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

export const goodsMock ={}

const topCategory ={
  id:'1',
  title:'男装',
  children:[
    {id:1, title:'外套',picture:'https://yanxuan.nosdn.127.net/bf9f0a32c2b79c6d29de7d0843888b48.png?quality=95&imageView'},
    {id:2, title:'衬衫',picture:'https://yanxuan.nosdn.127.net/bf9f0a32c2b79c6d29de7d0843888b48.png?quality=95&imageView'},
    {id:3, title:'裤装',picture:'https://yanxuan.nosdn.127.net/bf9f0a32c2b79c6d29de7d0843888b48.png?quality=95&imageView'},
    {id:4, title:'运动衫',picture:'https://yanxuan.nosdn.127.net/bf9f0a32c2b79c6d29de7d0843888b48.png?quality=95&imageView'},
    {id:5, title:'群装',picture:'https://yanxuan.nosdn.127.net/bf9f0a32c2b79c6d29de7d0843888b48.png?quality=95&imageView'},
    {id:6, title:'内衣装',picture:'https://yanxuan.nosdn.127.net/bf9f0a32c2b79c6d29de7d0843888b48.png?quality=95&imageView'},
  ]
}
const subList =[
  {id:1,title:'外套',goods:[]},
  {id:2,title:'衬衫',goods:[]},
  {id:3,title:'裤装',goods:[]},
  {id:4,title:'运动衫',goods:[]},
  {id:5,title:'内衣装',goods:[]},
]
const sliders = [
  {imgUrl:require('@/assets/img/shop/category/01.jpg')},
  {imgUrl:require('@/assets/img/shop/category/02.jpg')}
]

export const goolist = [
  {
    "id": "1113021",
    "name": "网易味央黑猪肉银卡（双月赏味）",
    "desc": "安心好肉双月赏味",
    "price": "698.00",
    "picture": "https://yanxuan-item.nosdn.127.net/79b020815834c30d7aaf191e5e59ef24.jpg",
    "discount": null,
    "orderNum": null
  },
  {
    "id": "1127037",
    "name": "网易味央黑猪肉黑卡（全年至味）",
    "desc": "全年至味，品质追求",
    "price": "3968.00",
    "picture": "https://yanxuan-item.nosdn.127.net/139aafcf2a8a2486496f4e2a4a226ad4.jpg",
    "discount": null,
    "orderNum": null
  },
  {
    "id": "1435014",
    "name": "原汁原味根根酥脆泰国香脆椰子卷16g*12",
    "desc": "泰国新鲜椰汁制作，根根酥脆",
    "price": "29.00",
    "picture": "https://yanxuan-item.nosdn.127.net/90cd2aeb3208a28c51a76111cd40e2d3.png",
    "discount": null,
    "orderNum": null
  },
  {
    "id": "1635010",
    "name": "澳大利亚脱脂高钙奶粉30克*16条",
    "desc": "澳洲进口优质奶粉，营养加倍",
    "price": "109.00",
    "picture": "https://yanxuan-item.nosdn.127.net/d062f469d3285157b9052bfd37d9fd57.jpg",
    "discount": null,
    "orderNum": null
  },
  {
    "id": "1667022",
    "name": "料理界液体黄金西班牙特级初榨橄榄油750ml",
    "desc": "清凉透亮多功能，升级料理体验",
    "price": "69.00",
    "picture": "https://yanxuan-item.nosdn.127.net/f3498584f3182407eb9d762157bf36a8.png",
    "discount": null,
    "orderNum": null
  },
  {
    "id": "1675046",
    "name": "巧克力王国浓情比利时巧克力礼盒装205克",
    "desc": "一口丝滑，尽享巧克力王国的浓情风味",
    "price": "139.00",
    "picture": "https://yanxuan-item.nosdn.127.net/e529b6ab111ade9da9314867f98d360f.png",
    "discount": null,
    "orderNum": null
  },
  {
    "id": "3438005",
    "name": "全蟹熬制，拌面小能手，满满蟹粉200g*1罐",
    "desc": "活蟹鲜拆，主厨配方",
    "price": "125.00",
    "picture": "https://yanxuan-item.nosdn.127.net/e82a55331662629e5ed0b932a9d286be.jpg",
    "discount": null,
    "orderNum": null
  },
  {
    "id": "3534021",
    "name": "网易味央黑猪肉金猪卡（季度甄选）",
    "desc": "季度臻选尊享美味",
    "price": "1028.00",
    "picture": "https://yanxuan-item.nosdn.127.net/40fb4c40fc750025ea669a482e03ac29.jpg",
    "discount": null,
    "orderNum": null
  },
  {
    "id": "3537027",
    "name": "泰国原装进口多口味豆奶300毫升*6瓶",
    "desc": "滴滴香浓，清甜不腻人",
    "price": "28.90",
    "picture": "https://yanxuan-item.nosdn.127.net/6927091deefa56c5538563a2f482a85c.png",
    "discount": null,
    "orderNum": null
  }
]
const dataTable = [
  { key:'1',  name:"管理员",price:"500.00",discount:'0.5',counts:'2022',status:true },
  { key:'2',  name:"管理员",price:"456.12",discount:'0.8',counts:'2022',status:true }
]

/**
 *  "gitHooks": {
    "pre-commit": "lint-staged"
  },
 "lint-staged": {
    "*.{js,jsx,vue}": [
      "vue-cli-service lint",
      "git add"
    ]
  }
 * */
