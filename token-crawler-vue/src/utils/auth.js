import store from '@/store'

export function getToken() {
  // let token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
  let token = store.state.token
  return token
}

export function setToken(token) {
  // localStorage.setItem('token',token)
  store.commit("setState", ["token", token])
}

export function removeToken() {
  // localStorage.removeItem('token')
  store.commit("setState", ["token", ""])
}
