<template>
  <div id="app">
    <h1>
      {{ message }}
    </h1>
    <input type="text" v-model="message" />
    <button @click="send()">
      Add message
    </button>
    <ul>
      <li v-for="message in messages" :key="message">
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      number: 0,
      message: "",
      messages: [],
    };
  },
  sockets: {
    connect() {
      console.log("CONNECTED!")
    },
    disconnect() {
    },
    message(data) {
      console.log("hallo hallo")
      this.messages.push(data);
    },
  },
  methods: {
    send() {
      // console.log(this.message);
      this.$socket.emit("message", this.message);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
