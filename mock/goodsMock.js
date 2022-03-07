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


export const listModel = [
  {
    "id": "1005000",
    "name": "居家",
    "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/201516e3-25d0-48f5-bcee-7f0cafb14176.png",
    "children": [
      {
        "id": "1005999003",
        "name": "居家生活用品",
        "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-22/7f6a7b20-7902-4b43-b9c5-f33151ef1334.jpg?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "1008017",
        "name": "收纳",
        "picture": "https://yanxuan.nosdn.127.net/366989e4d730594e86fcd60b5ab19acc.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "1017000",
        "name": "宠物食品",
        "picture": "https://yanxuan.nosdn.127.net/b42a85ef15f856081ea9f49e5f6893e2.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109243003",
        "name": "艺术藏品",
        "picture": "https://yanxuan.nosdn.127.net/9544b81aaa14c26a8038c2365ff3c2bc.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109248004",
        "name": "宠物用品",
        "picture": "https://yanxuan.nosdn.127.net/e766b09029ca00680d1e651b5cdc42bd.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109293000",
        "name": "家庭医疗",
        "picture": "https://yanxuan.nosdn.127.net/3f34039fa8c26e18e2f4fc96ed8cb6de.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109308000",
        "name": "中医保健",
        "picture": "https://yanxuan.nosdn.127.net/2bfba997fd031317caecc4f0bad17569.png?quality=95&imageView",
        "children": null,
        "goods": null
      }
    ],
    "goods": [
      {
        "id": "1028003",
        "name": "全能收纳王，棉麻涤·收纳盒",
        "desc": "结实棉麻，大容量收纳",
        "price": "29.90",
        "picture": "https://yanxuan-item.nosdn.127.net/8efa36e2d40cf007f9b0982a952dd8f1.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1028004",
        "name": "衣柜省空间神器，棉麻涤·收纳挂袋",
        "desc": "实用棉麻，悬挂牢固",
        "price": "55.00",
        "picture": "https://yanxuan-item.nosdn.127.net/49e21db0fe13c0ff1789a79a8ba48468.jpg",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1075011",
        "name": "拉开抽屉不凌乱，磨砂抽屉整理盒套装",
        "desc": "灵活组合，多场景适用",
        "price": "49.00",
        "picture": "https://yanxuan-item.nosdn.127.net/9382826c5a4bf31d7d1c827fec50e05b.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1108008",
        "name": "爆款明星好物，抽屉式透明储物柜",
        "desc": "抽屉随意拉，东西随意拿，7款尺寸，随意叠加搭配",
        "price": "129.00",
        "picture": "https://yanxuan-item.nosdn.127.net/76a5304c9d7378a83e63554f3077d98b.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1131025",
        "name": "开发员自留款，带滚轮双层脏衣篓",
        "desc": "滚轮设计，双层收纳",
        "price": "125.00",
        "picture": "https://yanxuan-item.nosdn.127.net/8147e4685e5a0e47c1624772ee868fcc.jpg",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1183010",
        "name": "给衣柜减减肥，真空防潮压缩袋",
        "desc": "手动压缩，节省空间",
        "price": "79.00",
        "picture": "https://yanxuan-item.nosdn.127.net/06461cea9e56b56dd4276e1cb81dd884.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1225018",
        "name": "可水洗的布艺收纳盒",
        "desc": "三种规格，收纳杂物",
        "price": "29.90",
        "picture": "https://yanxuan-item.nosdn.127.net/5a608974e36c829898df20fd0ebf184a.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1252031",
        "name": "换季好帮手，大容量防尘衣物收纳袋",
        "desc": "棉被收纳，干净防尘",
        "price": "69.00",
        "picture": "https://yanxuan-item.nosdn.127.net/75f6cc2c037c09e957cbcc336cf4a652.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1318002",
        "name": "每一口都有七种肉，全价猫粮",
        "desc": "多肉零谷物，升级低便臭配方",
        "price": "9.90",
        "picture": "https://yanxuan-item.nosdn.127.net/ec16c3f1df988da3429f7d639eea8a84.jpg",
        "discount": null,
        "orderNum": null
      }
    ]
  },
  {
    "id": "1005002",
    "name": "美食",
    "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/cf82e5b4-bf1b-4c68-aa86-96f66e8e5282.png",
    "children": [
      {
        "id": "1005012",
        "name": "南北干货",
        "picture": "https://yanxuan.nosdn.127.net/9af51a1090fd32f668b14451f06d6e72.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "1036003",
        "name": "调味酱菜",
        "picture": "https://yanxuan.nosdn.127.net/5fae33a840870b487cc903535383bf97.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109201001",
        "name": "方便食品",
        "picture": "https://yanxuan.nosdn.127.net/f9872b4aad6c0a943d45629ac96ee8d3.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109206007",
        "name": "米面粮油",
        "picture": "https://yanxuan.nosdn.127.net/8578759aed2268f7aa8641273cac7cb3.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109264007",
        "name": "名酒馆",
        "picture": "https://yanxuan.nosdn.127.net/91413b1476a0697bb0592609a42d4498.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109285003",
        "name": "进口酒",
        "picture": "https://yanxuan.nosdn.127.net/bf705060f01b60fe9c11c345931b1891.png?quality=95&imageView",
        "children": null,
        "goods": null
      }
    ],
    "goods": [
      {
        "id": "1082001",
        "name": "香菇肉燥酱375克（75克*5袋）",
        "desc": "台湾风味廿年秘制配方",
        "price": "27.00",
        "picture": "https://yanxuan-item.nosdn.127.net/9184d83ef1f6641b7b7c56c6e9836285.jpg",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1135059",
        "name": "手工八年老陈醋500毫升",
        "desc": "地道醇香，醋酸浓郁",
        "price": "30.00",
        "picture": "https://yanxuan-item.nosdn.127.net/77da20e77b02830a26f931901ac1a9e0.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1135075",
        "name": "来自东北的“黑珍珠”，黑米470克*3袋",
        "desc": "米汁香稠，Q弹醇香",
        "price": "19.00",
        "picture": "https://yanxuan-item.nosdn.127.net/1452cfeb14b5d252fb1ba97b278e9cc3.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1135076",
        "name": "红小豆450克*3袋",
        "desc": "皮薄易煮，粒粒香甜",
        "price": "19.00",
        "picture": "https://yanxuan-item.nosdn.127.net/eaec90be370a438e565e10189b7a390a.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1135077",
        "name": "加量45%不加价，内蒙古赤峰黄小米700克",
        "desc": "赤峰好谷，米香浓郁",
        "price": "19.00",
        "picture": "https://yanxuan-item.nosdn.127.net/564eb51c22d898179b468f5dec52d502.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1135079",
        "name": "免浸泡，12种谷物一次同享，五谷米400克",
        "desc": "无需浸泡，同煮同熟",
        "price": "9.90",
        "picture": "https://yanxuan-item.nosdn.127.net/bfe70bd66efe94f2f18061c707d2a097.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1135080",
        "name": "加量50%不加价，贵州兴仁薏仁米600克",
        "desc": "粒粒饱满，颗颗香糯",
        "price": "19.00",
        "picture": "https://yanxuan-item.nosdn.127.net/3e93790bba8db8aab54ee5ba72799567.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1135081",
        "name": "紫米410克",
        "desc": "一年一熟的御田胭脂米",
        "price": "19.00",
        "picture": "https://yanxuan-item.nosdn.127.net/a3c0bb3be38ccf510ecaedb81f5bcd9f.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1188005",
        "name": "莆田桂圆肉368克",
        "desc": "香甜滑软，弹嫩甘糯",
        "price": "52.00",
        "picture": "https://yanxuan-item.nosdn.127.net/92b975037935a47835737e6bb2611a39.jpg",
        "discount": null,
        "orderNum": null
      }
    ]
  },
  {
    "id": "1010000",
    "name": "服饰",
    "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/33e1f5de-0fdb-4cfa-9ba9-781233024b53.png",
    "children": [
      {
        "id": "109303000",
        "name": "钱包/胸包",
        "picture": "https://yanxuan.nosdn.127.net/237613bc9c22eb422dade63e3ed7c61a.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109311005",
        "name": "女式靴子",
        "picture": "https://yanxuan.nosdn.127.net/62c5dacf3e0cbe8e4188ccd263358d1a.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109311006",
        "name": "女式休闲鞋",
        "picture": "https://yanxuan.nosdn.127.net/8cd3a76ffffb14e9fe92ad2369117af0.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109311007",
        "name": "女式运动鞋",
        "picture": "https://yanxuan.nosdn.127.net/7be561f2ddc2179a7e116c413636eba9.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109315000",
        "name": "11.11购物狂欢",
        "picture": "https://yanxuan.nosdn.127.net/b29297263032957553d7153b309db74b.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109318003",
        "name": "【年末狂欢季】",
        "picture": "https://yanxuan.nosdn.127.net/8f8092d5bf6a133a8cb59ab7b9f790e9.png?quality=95&imageView",
        "children": null,
        "goods": null
      }
    ],
    "goods": [
      {
        "id": "1109030",
        "name": "女式英伦牛皮防水耐磨工装靴",
        "desc": "多重防水工艺，舒适干爽出行",
        "price": "259.00",
        "picture": "https://yanxuan-item.nosdn.127.net/94f629768177ac53b362bbd312f438db.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1281002",
        "name": "轻灵碳素耐用型羽毛球拍单双拍",
        "desc": "超轻球拍，运动随心",
        "price": "119.00",
        "picture": "https://yanxuan-item.nosdn.127.net/89cc3ab3e332bb1df5dc20241b5ca4bb.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1436033",
        "name": "柔软透气，女式精梳棉内裤6条装",
        "desc": "爱慕供应商柔软透气",
        "price": "125.00",
        "picture": "https://yanxuan-item.nosdn.127.net/dc30e9603306e59d959e7fac6968244e.jpg",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1555000",
        "name": "舒眠真丝眼罩",
        "desc": "顺滑真丝，感受舒适睡眠",
        "price": "79.00",
        "picture": "https://yanxuan-item.nosdn.127.net/85432452d5f40c4798c08f1f0beb4a43.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1593000",
        "name": "软糯似baby肌肤，男式高领纯小山羊绒衫",
        "desc": "绒毛取自未满1岁的山羊羊羔",
        "price": "559.00",
        "picture": "https://yanxuan-item.nosdn.127.net/06156761337ba0fd1f8f51470f698b5f.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1621018",
        "name": "懒人瘦出好身材，多功能甩脂塑形机",
        "desc": "懒人福音居家轻松塑身",
        "price": "589.00",
        "picture": "https://yanxuan-item.nosdn.127.net/540f84174dbf9b98d4072abbd886819e.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1651001",
        "name": "女式圆头搭带牛皮踝靴",
        "desc": "进口牛皮，舒适透气",
        "price": "309.00",
        "picture": "https://yanxuan-item.nosdn.127.net/b7e41588d04c97bb3788e0fa2d402240.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1652031",
        "name": "女式头层牛皮经典切尔西靴",
        "desc": "经典挚爱，百搭的不老款",
        "price": "275.00",
        "picture": "https://yanxuan-item.nosdn.127.net/a339fda444ac036855b75dcc4e66e37a.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1666023",
        "name": "女式高弹金丝针织面金属跟短靴",
        "desc": "金丝闪耀，如踏万千星辉",
        "price": "259.00",
        "picture": "https://yanxuan-item.nosdn.127.net/b516518c0f7f1b608a04a8b8cbc9ef9d.png",
        "discount": null,
        "orderNum": null
      }
    ]
  },
  {
    "id": "1011000",
    "name": "母婴",
    "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/b514a526-4010-4ce8-8cb9-757ed382f84a.png",
    "children": [
      {
        "id": "1020003",
        "name": "T恤/polo/衬衫",
        "picture": "https://yanxuan.nosdn.127.net/1f0089afcec911db7202fbcdae57d5f8.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "1037006",
        "name": "儿童鞋",
        "picture": "https://yanxuan.nosdn.127.net/7fd14a409302391da16970981cacd336.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109243018",
        "name": "外套/套装",
        "picture": "https://yanxuan.nosdn.127.net/773a8777f66c286f97af6d74a27d7fe1.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109243019",
        "name": "裤子/裙装",
        "picture": "https://yanxuan.nosdn.127.net/a8c52cea5f953019484a74883ad8f14b.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109243021",
        "name": "连体衣/礼盒",
        "picture": "https://yanxuan.nosdn.127.net/773677cc0922628152a9b3cbd862426f.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109243022",
        "name": "学步鞋",
        "picture": "https://yanxuan.nosdn.127.net/9a50280bb69e1c12f557f601cce1c480.png?quality=95&imageView",
        "children": null,
        "goods": null
      }
    ],
    "goods": [
      {
        "id": "1135047",
        "name": "百万级爆款，毛毛虫儿童运动鞋23-35码",
        "desc": "Q萌毛毛虫造型，个性时尚",
        "price": "93.50",
        "picture": "https://yanxuan-item.nosdn.127.net/b8f5434ff9a14bbf304d18527f8b2e07.jpg",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1519011",
        "name": "儿童网眼运动凉鞋（宽松版）25-32码",
        "desc": "加大空间鞋头，码数无需拍大一码",
        "price": "127.00",
        "picture": "https://yanxuan-item.nosdn.127.net/66072109da4f1e6ec56ea5eacaf3471c.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "3505001",
        "name": "新生儿双层纱连体衣0-3岁",
        "desc": "轻柔双层纱，前开襟连体哈衣",
        "price": "69.00",
        "picture": "https://yanxuan-item.nosdn.127.net/c898b10329bbffaa29ee448fcd3d8b29.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "3828090",
        "name": "保暖轻盈，儿童羽绒马甲送收纳袋110-160cm",
        "desc": "90%白鸭绒，110-160cm",
        "price": "199.00",
        "picture": "https://yanxuan-item.nosdn.127.net/2d1bd31bb617cdebad0ec600a23286d2.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "3871007",
        "name": "雪地无忧，毛毛虫儿童加绒运动靴26-35码",
        "desc": "加厚加绒内里，保暖舒适",
        "price": "199.00",
        "picture": "https://yanxuan-item.nosdn.127.net/f7be3d710f88ba9c0e344f89fa67fedb.jpg",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "3884023",
        "name": "治愈寒冬，儿童羊皮毛一体雪地靴26-35码",
        "desc": "羊皮毛一体，保暖舒适",
        "price": "149.00",
        "picture": "https://yanxuan-item.nosdn.127.net/146f9a4a2ee4116a477771f51b311335.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "3988335",
        "name": "有效阻隔＞95%紫外线，儿童防晒衣4-15岁",
        "desc": "防晒UPF40+，清爽穿着无惧骄阳",
        "price": "86.43",
        "picture": "https://yanxuan-item.nosdn.127.net/6b5b323ae4365b42f82da67c5c011ca7.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "3989234",
        "name": "恣意一夏，防碰撞鞋头网眼凉鞋22-26码",
        "desc": "轻量随心动，不到1只鸡蛋重量",
        "price": "139.00",
        "picture": "https://yanxuan-item.nosdn.127.net/b88092c77844dd8b6e2da001b4295d85.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "3989454",
        "name": "舒适透气，毛毛虫儿童网眼运动鞋26-35码",
        "desc": "透气网眼，陪你度过这个夏天",
        "price": "129.00",
        "picture": "https://yanxuan-item.nosdn.127.net/0542fae3d3587dbf07e040306073aa83.jpg",
        "discount": null,
        "orderNum": null
      }
    ]
  },
  {
    "id": "1013001",
    "name": "个护",
    "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/d38a73b8-cd03-48aa-a60b-e7c4e16667ed.png",
    "children": [
      {
        "id": "1009000",
        "name": "家庭清洁",
        "picture": "https://yanxuan.nosdn.127.net/718318c0d3b55d011fcb7c7c843902ce.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "1020002",
        "name": "浴室用品",
        "picture": "https://yanxuan.nosdn.127.net/dfb6142de1bd2f59b251eb8f7c7ea2fb.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109243016",
        "name": "餐厨清洁",
        "picture": "https://yanxuan.nosdn.127.net/55d927e337c1f6d394359e99ef72a621.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109256012",
        "name": "纸品",
        "picture": "https://yanxuan.nosdn.127.net/07fef43b0d14882d6662233ab30dc588.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109256013",
        "name": "干湿巾",
        "picture": "https://yanxuan.nosdn.127.net/985897ea31fdfc159e12696f4dbb4c13.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109261055",
        "name": "毛巾浴巾",
        "picture": "https://yanxuan.nosdn.127.net/949c5f8b077cf386ff9f1f18bec3408b.png?quality=95&imageView",
        "children": null,
        "goods": null
      }
    ],
    "goods": [
      {
        "id": "1006029",
        "name": "【新疆棉】宝宝也能用，全棉华夫格毛巾",
        "desc": "空气华夫格，自然新疆棉",
        "price": "15.90",
        "picture": "https://yanxuan-item.nosdn.127.net/3480e3fa68b810f23afb43f6bf2fe45b.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1006051",
        "name": "【新疆棉】云珍·轻软旅行长绒棉毛巾",
        "desc": "轻软亲肤，热销50万条",
        "price": "31.90",
        "picture": "https://yanxuan-item.nosdn.127.net/2a16452169f9d2e8841ddef76fdd684a.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1006056",
        "name": "纯棉亲肤吸水加倍干湿两用棉柔巾100/60抽",
        "desc": "优选100%棉，干湿两用",
        "price": "6.50",
        "picture": "https://yanxuan-item.nosdn.127.net/f5b092cef28371ec6626e033fb27a7bc.jpg",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1006058",
        "name": "**推荐木浆懒人抹布加厚干湿两用",
        "desc": "木浆吸水吸油，热销200万卷",
        "price": "12.90",
        "picture": "https://yanxuan-item.nosdn.127.net/61e06eabc41b187990e16242b595e5e0.jpg",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1009026",
        "name": "【新疆棉】云珍·轻软长绒棉浴巾",
        "desc": "云朵般轻软，至柔至软",
        "price": "129.00",
        "picture": "https://yanxuan-item.nosdn.127.net/957d7a338fc0de044965cc279fce68b2.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1021000",
        "name": "厚厚一按就干爽，埃及进口长绒棉毛巾",
        "desc": "厚实大毛圈，干爽瞬吸",
        "price": "16.90",
        "picture": "https://yanxuan-item.nosdn.127.net/a5c5398a7c033edb8a052fe1fddf8a81.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1031002",
        "name": "一面百洁布一面多孔海绵，三层复合洗碗刷",
        "desc": "起泡快，两面刷",
        "price": "6.90",
        "picture": "https://yanxuan-item.nosdn.127.net/6341041a76886655228ea3afeee5553d.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1068005",
        "name": "沥水清洁不费劲，双层壁挂肥皂架",
        "desc": "带抽屉的多功能皂盒，双层壁挂不易滴漏！",
        "price": "15.90",
        "picture": "https://yanxuan-item.nosdn.127.net/10fa1c61a1bfd0b7e629a037fbc58649.jpg",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1076003",
        "name": "可替换头，蜂窝海绵洗杯刷",
        "desc": "好洗快干，刷头可更换",
        "price": "6.90",
        "picture": "https://yanxuan-item.nosdn.127.net/b2a1f9e90f7e7a63227dc22ce52ea579.png",
        "discount": null,
        "orderNum": null
      }
    ]
  },
  {
    "id": "1019000",
    "name": "严选",
    "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/4b02f01f-a365-4b6c-9f7a-8b0f591dda02.png",
    "children": [
      {
        "id": "1065004",
        "name": "滋补保健",
        "picture": "https://yanxuan.nosdn.127.net/1e619a2b22f40bf83070e6f8f6e0c8ff.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109256014",
        "name": "床品家纺",
        "picture": "https://yanxuan.nosdn.127.net/e6580910c1f98ed61bda867aeaf07929.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109256015",
        "name": "锅具配件",
        "picture": "https://yanxuan.nosdn.127.net/50ccbf04857e86cccf44d25da0577deb.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109275000",
        "name": "清洁用品",
        "picture": "https://yanxuan.nosdn.127.net/926d919bc3e95f5c93dc5dc973faa378.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109309012",
        "name": "个护电器",
        "picture": "https://yanxuan.nosdn.127.net/7a0eea3c515ad247c092749bcdd29855.png?quality=95&imageView",
        "children": null,
        "goods": null
      }
    ],
    "goods": [
      {
        "id": "1091003",
        "name": "优良密闭性日本创意多功能储米桶6kg容量",
        "desc": "6kg超大容量，新旧米分离储存",
        "price": "99.00",
        "picture": "https://yanxuan-item.nosdn.127.net/cec39a9588e8a2adc88447080b4462d2.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1486015",
        "name": "灶台干净整洁日本锅盖砧板收纳架",
        "desc": "轻松沥水，告别锅盖打滑",
        "price": "9.90",
        "picture": "https://yanxuan-item.nosdn.127.net/80dece40014b4f2a13c10d84d9d39dd3.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1601000",
        "name": "睡着按摩颈椎泰国93%含量天然乳胶枕",
        "desc": "颗粒乳胶按摩释放颈部压力",
        "price": "149.00",
        "picture": "https://yanxuan-item.nosdn.127.net/033a2dcc0dba084de5cd0729a88d0082.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1633018",
        "name": "源自澳洲进口羊毛，儿童奢暖羊毛被升级款",
        "desc": "甄选进口丝光羊毛，奢侈睡眠享受",
        "price": "289.00",
        "picture": "https://yanxuan-item.nosdn.127.net/31a81e6c7e4c173d1cf19d5abeb97550.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1666010",
        "name": "坚果保持干脆秘诀日本厨房密封收纳盒",
        "desc": "进口优质树脂，安全无毒耐用",
        "price": "9.90",
        "picture": "https://yanxuan-item.nosdn.127.net/957a264ab4351aefe188991194b84234.jpg",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1667000",
        "name": "调料收纳好帮手日本抽屉式厨房调味罐",
        "desc": "可叠加设计，增加厨房储物空间",
        "price": "39.00",
        "picture": "https://yanxuan-item.nosdn.127.net/74690da82db80d061ccfa2422a96c448.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1672002",
        "name": "睡着放松肩颈泰国93%天然乳胶枕蝶形护肩",
        "desc": "强化肩颈支撑防螨抗菌新升级",
        "price": "179.00",
        "picture": "https://yanxuan-item.nosdn.127.net/9790fcd540d6731ff7febd15ee60a7c5.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1683030",
        "name": "泰国进口乳胶，儿童抗菌防螨护颈乳胶枕",
        "desc": "4-12岁专利草珊瑚枕套，抑菌防螨净享睡眠",
        "price": "149.00",
        "picture": "https://yanxuan-item.nosdn.127.net/76f9d1e6667dfbb08ab04f1ab8e1db5a.jpg",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "3828110",
        "name": "泰国玻尿酸天然乳胶枕礼盒",
        "desc": "泰国93%含量天然乳胶枕，玻尿酸天丝枕套",
        "price": "205.00",
        "picture": "https://yanxuan-item.nosdn.127.net/a6890568768b97cae8e79b3d4391aab6.png",
        "discount": null,
        "orderNum": null
      }
    ]
  },
  {
    "id": "1043000",
    "name": "数码",
    "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/9660870d-6a59-4624-8064-b3a8cbf50d5c.png",
    "children": [
      {
        "id": "1008006",
        "name": "影音娱乐",
        "picture": "https://yanxuan.nosdn.127.net/f5797ca77cfe413e7753ec69f9bd4bb1.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "1022000",
        "name": "3C数码",
        "picture": "https://yanxuan.nosdn.127.net/99b8f97b2e5449606fd558574aa15982.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "1028001",
        "name": "乐器",
        "picture": "https://yanxuan.nosdn.127.net/da0ac345e98c04594b697b56ebc373a5.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109243035",
        "name": "手机配件",
        "picture": "https://yanxuan.nosdn.127.net/0276d68f4b7a03bbd16675ada6e707ff.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109243036",
        "name": "车载用品",
        "picture": "https://yanxuan.nosdn.127.net/3f45fbcdac7e8532b6a1570e6d7fe171.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109243046",
        "name": "办公文具",
        "picture": "https://yanxuan.nosdn.127.net/801583d2f58274b13dc6a03daed1c3c9.png?quality=95&imageView",
        "children": null,
        "goods": null
      }
    ],
    "goods": [
      {
        "id": "1111002",
        "name": "剪出精致感，金致圆柄复古剪刀",
        "desc": "轻薄设计，简约大方",
        "price": "9.90",
        "picture": "https://yanxuan-item.nosdn.127.net/4c6a9c8a579b00e5e9c7b002d15a33a2.jpg",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1115024",
        "name": "MFi认证苹果快充数据线（1.2米/2米）",
        "desc": "MFi苹果官方认证极速充电",
        "price": "49.90",
        "picture": "https://yanxuan-item.nosdn.127.net/bc7298eb106089530bb6fbcdff81b15e.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1143021",
        "name": "新增iPhone13型号，超薄空气感手机壳",
        "desc": "0.4mm纸一样薄磨砂手感",
        "price": "11.90",
        "picture": "https://yanxuan-item.nosdn.127.net/e9dc6573da47d33e0e06596f06aaaf68.jpg",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1193027",
        "name": "MFI认证苹果快充数据线",
        "desc": "网易智造苹果快充数据线（1米升级加固版）",
        "price": "49.00",
        "picture": "https://yanxuan-item.nosdn.127.net/06d3a89ce18f0ae6360b9cd288084045.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1223002",
        "name": "MFi认证苹果快充编织数据线（1.2米）",
        "desc": "MFi认证原装芯片强韧编织",
        "price": "49.90",
        "picture": "https://yanxuan-item.nosdn.127.net/c86961c7e22acb1b62c5493ccf6a4b03.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1369012",
        "name": "拼单神器，平台智造双子超性能电池",
        "desc": "时尚双子，全新A5电池技术，超长持久耐用",
        "price": "7.90",
        "picture": "https://yanxuan-item.nosdn.127.net/9bd2fdddadc38d3b654b9e4bb8c8df25.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1406008",
        "name": "平台智造小方盒智能插线板-Pro版",
        "desc": "内外兼修的充电利器，以一抵五，差旅标配",
        "price": "79.00",
        "picture": "https://yanxuan-item.nosdn.127.net/a0d701292c4ca153e1800be83c4a7178.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1434006",
        "name": "平台智造零感蓝牙耳机",
        "desc": "超轻超小无感佩戴",
        "price": "59.00",
        "picture": "https://yanxuan-item.nosdn.127.net/c327b313314b9362ce9f49b253b0b61c.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1458011",
        "name": "谱写爱的篇章，莫扎特钢笔墨水礼盒",
        "desc": "谱写爱的乐章",
        "price": "88.00",
        "picture": "https://yanxuan-item.nosdn.127.net/b20165617d2f901e9ad926f39b737e87.png",
        "discount": null,
        "orderNum": null
      }
    ]
  },
  {
    "id": "109243029",
    "name": "运动",
    "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/7d19752c-baff-49b6-bd02-5ece1d729214.png",
    "children": [
      {
        "id": "109312000",
        "name": "健身大器械",
        "picture": "https://yanxuan.nosdn.127.net/6a1d37ffb2e28622a71e3c4415eaee35.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109312001",
        "name": "健身小器械",
        "picture": "https://yanxuan.nosdn.127.net/8c9f060e6fddb2b75af851a9a2c60087.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109312002",
        "name": "城市出行",
        "picture": "https://yanxuan.nosdn.127.net/b41b50710c3823f44a9f5b549a67ca81.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109312003",
        "name": "运动护具",
        "picture": "https://yanxuan.nosdn.127.net/ef9bcb99d88b3a1cfd9d2e120c158c21.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109313000",
        "name": "垂钓",
        "picture": "https://yanxuan.nosdn.127.net/c4eeeae307d0562cf3e95303146282b2.png?quality=95&imageView",
        "children": null,
        "goods": null
      },
      {
        "id": "109313003",
        "name": "户外装备",
        "picture": "https://yanxuan.nosdn.127.net/6bbd92c68741c857d842f0afd1c7bdd5.png?quality=95&imageView",
        "children": null,
        "goods": null
      }
    ],
    "goods": [
      {
        "id": "1476005",
        "name": "【新年送礼】腰部保暖石墨烯热敷护腰带",
        "desc": "支撑发热，舒适放松",
        "price": "125.00",
        "picture": "https://yanxuan-item.nosdn.127.net/348ba1aada561a3be41183d81b19bd85.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1687060",
        "name": "关节膝盖酸痛石墨烯热敷护膝",
        "desc": "高科技恒温发热，舒缓疼痛",
        "price": "145.00",
        "picture": "https://yanxuan-item.nosdn.127.net/e7a371380531c5e35c739e48d686fb73.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1687061",
        "name": "【新年送礼】暖冬护颈必备，石墨烯护颈",
        "desc": "高科技恒温发热，舒缓疼痛",
        "price": "119.00",
        "picture": "https://yanxuan-item.nosdn.127.net/0e5e5980fe7389e1ce88c71d6e4b9f02.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "3520212",
        "name": "运动无缝针织高弹护肘",
        "desc": "分散压力，保护肘关节",
        "price": "33.00",
        "picture": "https://yanxuan-item.nosdn.127.net/80a7ef01d83729e91a353211674ff20b.jpg",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "3521201",
        "name": "弹力支撑型护腰带",
        "desc": "弹力支撑，专业护腰",
        "price": "80.00",
        "picture": "https://yanxuan-item.nosdn.127.net/e27676054de26f67acdff8a5efefbd25.jpg",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "3521212",
        "name": "无缝针织高弹护膝",
        "desc": "为膝而生，支撑减压",
        "price": "42.00",
        "picture": "https://yanxuan-item.nosdn.127.net/0864180b30b089da32e8d930071134fa.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "3550194",
        "name": "防晒快干长檐棒球帽",
        "desc": "遮阳防晒,保暖新潮",
        "price": "69.00",
        "picture": "https://yanxuan-item.nosdn.127.net/7d0b373a6a63882783202c836bae264d.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "3987039",
        "name": "核心训练小器械组合",
        "desc": "强化核心训练",
        "price": "42.00",
        "picture": "https://yanxuan-item.nosdn.127.net/6f34cfcfd3005c04e49ac59e84b13e63.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "3987045",
        "name": "塑型弹力训练组合",
        "desc": "弹力圈+弹力绳+弹力带，帮助你练出蜜桃臀",
        "price": "42.00",
        "picture": "https://yanxuan-item.nosdn.127.net/5f2cbd1273e063d5321543d26e91fc26.png",
        "discount": null,
        "orderNum": null
      }
    ]
  },
  {
    "id": "19999999",
    "name": "杂项",
    "picture": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-06/4ff20b9e-8150-4bd3-87a3-0cd6766938dd.png",
    "children": [
      {
        "id": "19999999001",
        "name": "家庭清洁杂项",
        "picture": "https://yanxuan.nosdn.127.net/718318c0d3b55d011fcb7c7c843902ce.png?quality=95&imageView",
        "children": null,
        "goods": null
      }
    ],
    "goods": [
      {
        "id": "1076004",
        "name": "软糯治愈系擦手，雪尼尔擦手球",
        "desc": "吸水快干，不易掉屑",
        "price": "9.50",
        "picture": "https://yanxuan-item.nosdn.127.net/43d99e9b97cc55033b0f59b95a91ae49.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1085007",
        "name": "一抽即提，免脏手，加厚抽绳垃圾袋3卷60只",
        "desc": "18μm及10μm两种厚度，袋身不怕漏，3秒抽绳不脏手",
        "price": "9.50",
        "picture": "https://yanxuan-item.nosdn.127.net/72af0b7c1d7b0b9710de621788326d2b.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1306017",
        "name": "大容量干湿分类，脚踏缓降静音垃圾桶",
        "desc": "一踩开合，解放双手",
        "price": "89.00",
        "picture": "https://yanxuan-item.nosdn.127.net/1b322ed8c25f94f1fbf39ddb5fedeb47.jpg",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1306019",
        "name": "日式和风简约无盖垃圾桶11L",
        "desc": "敞口设计易洗易干触手可得的洁净与精致",
        "price": "9.90",
        "picture": "https://yanxuan-item.nosdn.127.net/ca7144b1f5fda5528dd8e4c40abc3bcc.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1525018",
        "name": "灰尘毛发静电吸附地板除尘干巾40片/包",
        "desc": "干湿两用，静电除尘",
        "price": "7.90",
        "picture": "https://yanxuan-item.nosdn.127.net/cf7584e037706a8df54fecfc6dfdd2af.jpg",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1540017",
        "name": "随用随丢，懒人真爱地板清洁/除菌湿巾",
        "desc": "材质加厚，耐磨珍珠纹",
        "price": "8.90",
        "picture": "https://yanxuan-item.nosdn.127.net/4c8a1cf2b8e40c250870491307dde11f.jpg",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1548001",
        "name": "添加茂金属更强韧，金属色垃圾袋",
        "desc": "3卷90只，茂金属添加，柔韧加倍",
        "price": "8.90",
        "picture": "https://yanxuan-item.nosdn.127.net/251393c0d8db7b0b594ccf86f1e796d0.png",
        "discount": null,
        "orderNum": null
      },
      {
        "id": "1589017",
        "name": "分场景使用不污染，超细纤维抹布分类5件套",
        "desc": "精细分工，洁净家居",
        "price": "14.90",
        "picture": "https://yanxuan-item.nosdn.127.net/c520bba8209bae877158e8810d889aca.png",
        "discount": null,
        "orderNum": null
      }
    ]
  }
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

export const orderList = {
  "counts": 1678,
  "pageSize": 5,
  "pages": 336,
  "page": 1,
  "items": [
    {
      "id": "1497199341474279425",
      "createTime": "2022-02-25 21:18:34",
      "payType": 1,
      "orderState": 1,
      "payLatestTime": "2022-02-25 21:48:34",
      "postFee": 8,
      "payMoney": 344,
      "totalMoney": 336,
      "totalNum": 3,
      "skus": [
        {
          "id": "1497199341495250946",
          "spuId": "1369155859933827074",
          "name": "钻石陶瓷涂层多用锅18cm 小奶锅",
          "quantity": 1,
          "image": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-05/6fdcac19-dd44-442c-9212-f7ec3cf3ed18.jpg",
          "realPay": 148,
          "curPrice": 148,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "颜色",
              "propertyValueName": "黑色"
            },
            {
              "propertyMainName": "产地",
              "propertyValueName": "日本"
            },
            {
              "propertyMainName": "尺寸",
              "propertyValueName": "30cm"
            }
          ],
          "attrsText": "颜色:黑色 产地:日本 尺寸:30cm "
        },
        {
          "id": "1497199341499445251",
          "spuId": "3999184",
          "name": "【包邮】冰与火的碰撞威士忌杯2支装水杯",
          "quantity": 1,
          "image": "https://yanxuan-item.nosdn.127.net/dcd0937695ffd65053adfac36b79517e.jpg",
          "realPay": 89,
          "curPrice": 89,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "规格",
              "propertyValueName": "品质款现代条纹2只（进口）"
            }
          ],
          "attrsText": "规格:品质款现代条纹2只（进口） "
        },
        {
          "id": "1497199341503639555",
          "spuId": "4000837",
          "name": "Kenroll女士防滑夏季人字沙滩拖鞋",
          "quantity": 1,
          "image": "https://yanxuan-item.nosdn.127.net/79f289a4e975fd030d5c37b98b9282c5.jpg",
          "realPay": 99,
          "curPrice": 99,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "颜色",
              "propertyValueName": "浅粉色"
            },
            {
              "propertyMainName": "尺码",
              "propertyValueName": "女S（35-36）"
            }
          ],
          "attrsText": "颜色:浅粉色 尺码:女S（35-36） "
        }
      ],
      "payChannel": 1,
      "countdown": -1
    },
    {
      "id": "1497148953689714689",
      "createTime": "2022-02-25 17:58:21",
      "payType": 1,
      "orderState": 1,
      "payLatestTime": "2022-02-25 18:28:21",
      "postFee": 3,
      "payMoney": 609,
      "totalMoney": 606,
      "totalNum": 6,
      "skus": [
        {
          "id": "1497148953706491906",
          "spuId": "3995206",
          "name": "90%白鸭绒，儿童轻羽绒马甲73-130cm",
          "quantity": 4,
          "image": "https://yanxuan-item.nosdn.127.net/f73b2672f87b2e336d206c56d4ea7d0f.png",
          "realPay": 109,
          "curPrice": 109,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "颜色",
              "propertyValueName": "棒球领-知更鸟"
            },
            {
              "propertyMainName": "尺码",
              "propertyValueName": "120cm"
            }
          ],
          "attrsText": "颜色:棒球领-知更鸟 尺码:120cm "
        },
        {
          "id": "1497148953714880513",
          "spuId": "3995206",
          "name": "90%白鸭绒，儿童轻羽绒马甲73-130cm",
          "quantity": 2,
          "image": "https://yanxuan-item.nosdn.127.net/f73b2672f87b2e336d206c56d4ea7d0f.png",
          "realPay": 85,
          "curPrice": 85,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "颜色",
              "propertyValueName": "圆领-小飞机"
            },
            {
              "propertyMainName": "尺码",
              "propertyValueName": "120cm"
            }
          ],
          "attrsText": "颜色:圆领-小飞机 尺码:120cm "
        }
      ],
      "payChannel": 1,
      "countdown": -1
    },
    {
      "id": "1497147402065670146",
      "createTime": "2022-02-25 17:52:11",
      "payType": 1,
      "orderState": 1,
      "payLatestTime": "2022-02-25 18:22:11",
      "postFee": 0,
      "payMoney": 537,
      "totalMoney": 537,
      "totalNum": 2,
      "skus": [
        {
          "id": "1497147402074058754",
          "spuId": "3999553",
          "name": "四季木叶盏年度臻选套装",
          "quantity": 1,
          "image": "https://yanxuan-item.nosdn.127.net/f81d1c188f7cad8f9f21780ddcf86ace.jpg",
          "realPay": 349,
          "curPrice": 349,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "规格",
              "propertyValueName": "杨树叶圆融杯"
            }
          ],
          "attrsText": "规格:杨树叶圆融杯 "
        },
        {
          "id": "1497147402078253057",
          "spuId": "4000029",
          "name": "五谷丰登好兆头白酒杯壶套装一壶五杯+骰子",
          "quantity": 1,
          "image": "https://yanxuan-item.nosdn.127.net/a68a4385df27f8664b318364f4cdae08.jpg",
          "realPay": 188,
          "curPrice": 188,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "规格",
              "propertyValueName": "五谷丰登白酒杯一套（5杯1壶1骰子）"
            }
          ],
          "attrsText": "规格:五谷丰登白酒杯一套（5杯1壶1骰子） "
        }
      ],
      "payChannel": 1,
      "countdown": -1
    },
    {
      "id": "1497134424733904897",
      "createTime": "2022-02-25 17:00:37",
      "payType": 1,
      "orderState": 1,
      "payLatestTime": "2022-02-25 17:30:38",
      "postFee": 9,
      "payMoney": 5518.7,
      "totalMoney": 5509.7,
      "totalNum": 20,
      "skus": [
        {
          "id": "1497134424801013762",
          "spuId": "1451027",
          "name": "净水花洒好搭档韩国花洒替换滤芯2只装",
          "quantity": 2,
          "image": "https://yanxuan-item.nosdn.127.net/eba436352816180993555d11fff87087.png",
          "realPay": 85,
          "curPrice": 85,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "规格",
              "propertyValueName": "螺旋纹滤芯*两盒（4个）"
            }
          ],
          "attrsText": "规格:螺旋纹滤芯*两盒（4个） "
        },
        {
          "id": "1497134424805208066",
          "spuId": "4004357",
          "name": "网易味央黑猪五花肉330g*1袋",
          "quantity": 1,
          "image": "https://yanxuan-item.nosdn.127.net/6c1be2bfc8afb3a6fffbc94edf0629bd.jpg",
          "realPay": 50,
          "curPrice": 50,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "规格",
              "propertyValueName": "五花肉330g*1袋"
            }
          ],
          "attrsText": "规格:五花肉330g*1袋 "
        },
        {
          "id": "1497134424813596673",
          "spuId": "1540017",
          "name": "随用随丢，懒人真爱地板清洁/除菌湿巾",
          "quantity": 1,
          "image": "https://yanxuan-item.nosdn.127.net/94798c928dccfea20d5672f4cfb35285.png",
          "realPay": 10.9,
          "curPrice": 10.9,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "规格",
              "propertyValueName": "除菌湿巾1包装"
            }
          ],
          "attrsText": "规格:除菌湿巾1包装 "
        },
        {
          "id": "1497134424817790977",
          "spuId": "1540017",
          "name": "随用随丢，懒人真爱地板清洁/除菌湿巾",
          "quantity": 1,
          "image": "https://yanxuan-item.nosdn.127.net/94798c928dccfea20d5672f4cfb35285.png",
          "realPay": 10.9,
          "curPrice": 10.9,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "规格",
              "propertyValueName": "加厚加湿升级版20片*1包"
            }
          ],
          "attrsText": "规格:加厚加湿升级版20片*1包 "
        },
        {
          "id": "1497134424821985283",
          "spuId": "4005091",
          "name": "儿童字母纯棉POLO衫73-130cm",
          "quantity": 1,
          "image": "https://yanxuan-item.nosdn.127.net/605d71caa460e3c05cb2fd1b2885b9b4.jpg",
          "realPay": 99,
          "curPrice": 99,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "颜色",
              "propertyValueName": "绿白条"
            },
            {
              "propertyMainName": "尺码",
              "propertyValueName": "73cm"
            }
          ],
          "attrsText": "颜色:绿白条 尺码:73cm "
        },
        {
          "id": "1497134424826179586",
          "spuId": "3804045",
          "name": "男式经典切尔西商务正装鞋",
          "quantity": 1,
          "image": "https://yanxuan-item.nosdn.127.net/94f800da40ffaf2633e1338a2cfbf54e.png",
          "realPay": 444,
          "curPrice": 444,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "颜色",
              "propertyValueName": "棕色布洛克"
            },
            {
              "propertyMainName": "尺码",
              "propertyValueName": "44"
            }
          ],
          "attrsText": "颜色:棕色布洛克 尺码:44 "
        },
        {
          "id": "1497134424830373890",
          "spuId": "4004345",
          "name": "网易味央黑猪去骨蹄膀500g*1袋",
          "quantity": 1,
          "image": "https://yanxuan-item.nosdn.127.net/45a40a1db47c126a421953b45fa25674.jpg",
          "realPay": 65,
          "curPrice": 65,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "规格",
              "propertyValueName": "去骨蹄膀500g*1袋"
            }
          ],
          "attrsText": "规格:去骨蹄膀500g*1袋 "
        },
        {
          "id": "1497134424838762497",
          "spuId": "4001874",
          "name": "古法温酒汝瓷酒具套装白酒杯莲花温酒器",
          "quantity": 1,
          "image": "https://yanxuan-item.nosdn.127.net/44e51622800e4fceb6bee8e616da85fd.png",
          "realPay": 1488,
          "curPrice": 1488,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "规格",
              "propertyValueName": "莲花温碗（温酒器）"
            }
          ],
          "attrsText": "规格:莲花温碗（温酒器） "
        },
        {
          "id": "1497134424842956801",
          "spuId": "3504000",
          "name": "儿童防污/防蚊T恤110cm",
          "quantity": 1,
          "image": "https://yanxuan-item.nosdn.127.net/f899c55f36cb74232abb349234d9e676.png",
          "realPay": 79,
          "curPrice": 79,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "颜色",
              "propertyValueName": "蓝色（防蚊）"
            },
            {
              "propertyMainName": "尺码",
              "propertyValueName": "150cm"
            }
          ],
          "attrsText": "颜色:蓝色（防蚊） 尺码:150cm "
        },
        {
          "id": "1497134424847151106",
          "spuId": "3446012",
          "name": "一锅包揽煎烤蒸煮日本爱丽思多功能料理锅",
          "quantity": 1,
          "image": "https://yanxuan-item.nosdn.127.net/667dbc276e46e31b5a00869b9b1b8ef3.png",
          "realPay": 499,
          "curPrice": 499,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "颜色",
              "propertyValueName": "芭比粉（3个功能盘）"
            }
          ],
          "attrsText": "颜色:芭比粉（3个功能盘） "
        },
        {
          "id": "1497134424851345410",
          "spuId": "1652038",
          "name": "共享品茶乐趣公道杯闻香杯手工吹制",
          "quantity": 1,
          "image": "https://yanxuan-item.nosdn.127.net/6aaff130c1d97c60f9931e00734bbad6.png",
          "realPay": 89,
          "curPrice": 89,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "规格",
              "propertyValueName": "公道杯230ml/手工吹制"
            }
          ],
          "attrsText": "规格:公道杯230ml/手工吹制 "
        },
        {
          "id": "1497134424855539714",
          "spuId": "1147023",
          "name": "两带式软木拖鞋",
          "quantity": 1,
          "image": "https://yanxuan-item.nosdn.127.net/ded4b153a0878527dcee27981c389929.png",
          "realPay": 55.9,
          "curPrice": 55.9,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "颜色",
              "propertyValueName": "黑色"
            },
            {
              "propertyMainName": "尺码",
              "propertyValueName": "42"
            }
          ],
          "attrsText": "颜色:黑色 尺码:42 "
        },
        {
          "id": "1497134424863928322",
          "spuId": "3441064",
          "name": "女式舒软牛皮乐福鞋",
          "quantity": 1,
          "image": "https://yanxuan-item.nosdn.127.net/e99d5bb3a5bfe6a596b123e908b8b7ac.png",
          "realPay": 215,
          "curPrice": 215,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "颜色",
              "propertyValueName": "米白色"
            },
            {
              "propertyMainName": "尺码",
              "propertyValueName": "39"
            }
          ],
          "attrsText": "颜色:米白色 尺码:39 "
        },
        {
          "id": "1497134424868122627",
          "spuId": "1687057",
          "name": "晶莹璀璨捷克冰川系列水晶烈酒具",
          "quantity": 1,
          "image": "https://yanxuan-item.nosdn.127.net/d88d0b7ce142971af9e391722f0e8a52.png",
          "realPay": 399,
          "curPrice": 399,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "规格",
              "propertyValueName": "酒樽"
            }
          ],
          "attrsText": "规格:酒樽 "
        },
        {
          "id": "1497134424876511233",
          "spuId": "1686012",
          "name": "2021升级轻便款，会提醒喝水的随行水杯",
          "quantity": 2,
          "image": "https://yanxuan-item.nosdn.127.net/6fe0d8a5cfdb1e98eb990feafdc1c01c.png",
          "realPay": 159,
          "curPrice": 159,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "颜色",
              "propertyValueName": "经典款樱花粉"
            }
          ],
          "attrsText": "颜色:经典款樱花粉 "
        },
        {
          "id": "1497134424880705538",
          "spuId": "3441208",
          "name": "24寸全铝镁合金拉杆箱",
          "quantity": 2,
          "image": "https://yanxuan-item.nosdn.127.net/816acb46e52e098acbee81b37fcd9944.png",
          "realPay": 719,
          "curPrice": 719,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "颜色",
              "propertyValueName": "太空银"
            }
          ],
          "attrsText": "颜色:太空银 "
        },
        {
          "id": "1497134424884899841",
          "spuId": "3995139",
          "name": "青春系列茶水分离杯带锁仓保温杯",
          "quantity": 1,
          "image": "https://yanxuan-item.nosdn.127.net/690e5cb552428321311e6ee03a4b12ed.png",
          "realPay": 79,
          "curPrice": 79,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "规格",
              "propertyValueName": "冰川蓝400ml"
            }
          ],
          "attrsText": "规格:冰川蓝400ml "
        }
      ],
      "payChannel": 1,
      "countdown": -1
    },
    {
      "id": "1497127987211268097",
      "createTime": "2022-02-25 16:35:02",
      "payType": 1,
      "orderState": 1,
      "payLatestTime": "2022-02-25 17:05:02",
      "postFee": 8,
      "payMoney": 47.9,
      "totalMoney": 39.9,
      "totalNum": 1,
      "skus": [
        {
          "id": "1497127987236433922",
          "spuId": "3997966",
          "name": "个大体肥，冷冻对虾400g",
          "quantity": 1,
          "image": "https://yanxuan-item.nosdn.127.net/01dd5a65d131453074631d82d8f80d91.jpg",
          "realPay": 39.9,
          "curPrice": 39.9,
          "totalMoney": null,
          "properties": [
            {
              "propertyMainName": "规格",
              "propertyValueName": "400g（50-60只/kg）"
            }
          ],
          "attrsText": "规格:400g（50-60只/kg） "
        }
      ],
      "payChannel": 1,
      "countdown": -1
    }
  ]
}
