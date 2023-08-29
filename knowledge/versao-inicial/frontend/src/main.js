import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORÁRIO - Usado para fazer requisições antes de fazer a autenticação
// require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikd1aWxoZXJtZSBHcmVnbyIsImVtYWlsIjoiZ3VpbGhlcm1lZ3JlZ28zNzZAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTY4MDgwOTE1MSwiZXhwIjoxNjgxMDY4MzUxfQ.6wNJDtNUYGB3MgQZqNmzWmmzENXTEUbM1uu7IIqQhQo'

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')