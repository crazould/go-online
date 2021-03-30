import Vue from 'vue'
import App from './App.vue'
// import socketio from 'socket.io';
import VueSocketIO from 'vue-socket.io';
// export const SocketInstance = socketio('http://localhost:5000');

const SocketIO = require("socket.io-client");

Vue.config.productionTip = false

// Vue.use(VueSocketIO, SocketInstance)
const options = {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
};

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://localhost:5000', options), //options object is Optional
})
);

new Vue({
  render: h => h(App)
}).$mount('#app')


