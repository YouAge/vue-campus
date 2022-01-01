import { Modal } from "ant-design-vue";
import { createVNode } from "vue";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";



/**
 * @description 消息弹框提示， 时间内自动消失
 * */
export const Mart = ({title='提示',content='',timer=3,interval=true})=>{
  const modal = Modal.success({
    title,
    content,
  });
  let  intervalT
  if(interval){
     intervalT = setInterval(() => {
      timer -= 1;
      modal.update({
        content: content +'              ' + timer ,
      });
    }, 1000);
  }


  setTimeout(()=>{
    if(interval){
      clearInterval(intervalT);
    }
    modal.destroy()
  },timer*1000)

}
