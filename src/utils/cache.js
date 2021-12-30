
import Cookie from 'js-cookie'



export function setAccessToken(key,token){
  Cookie.set(key,token)
}

export function getAccessToken(name){
  return Cookie.get(name)
}

/** 删除token */
export function delAccessToken (name) {
  return Cookies.remove(name)
}




export function setSession (name,item) {
  sessionStorage.setItem(name, JSON.stringify(item))
}
export function getSession (key) {
  return JSON.parse(sessionStorage.getItem(key) || '[]')
}

export function setLocal (key,value) {
  localStorage.setItem(key,JSON.stringify(value))
}
export function getLocal (key) {
  return JSON.parse(localStorage.getItem(key) || '')
}
