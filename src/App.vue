<script setup>
import { ref } from 'vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import Notice from './components/Notice.vue'

const emit = ref()
const noticeMessage = noticeMessage => { emit.value = noticeMessage }
</script>

<template>
  <div>
    <Nav />
    <Notice :noticeMessage=emit />
    <router-view id="content" @noticeMessage=noticeMessage />
    <Footer />
  </div>
</template>

<style lang="scss">
* {
  color: $text;
  background-color: $bk;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  user-select: none;
  padding: 1rem;
  display: flex;
  justify-content: center;
  letter-spacing: .2px;
}
body {
  margin: 0;
  p {
    margin: 0;
  }
}
#content {
  min-height: calc(100vh);
  display: flex;
  flex-flow: column;
  align-items: center;
}
::-webkit-scrollbar {
  width: 0;
}
</style>
