<script setup>
import router from '@/router'
import Nav from './components/Nav.vue'
// import Search from './components/Search.vue'
import Footer from './components/Footer.vue'

const hotkey = e => {
  // 改成 Ctrl + Q 跳出功能表，方向鍵選擇
  if (e.altKey && e.shiftKey) {
    // can't use A, I
    switch (e.key) {
      case 'M':
      case 'm':
        console.log(e.key, 'Menu')
        router.push('/')
        break
      case 'S':
      case 's':
        console.log(e.key, 'search')
        // router.push('/')
        break
      case 'D':
      case 'd':
        console.log(e.key, 'date')
        router.push('/date')
        break
      case 'C':
      case 'c':
        console.log(e.key, 'clock')
        router.push('/clock')
        break
      case 'T':
      case 't':
        console.log(e.key, 'todo')
        router.push('/todo')
        break
      case 'N':
      case 'n':
        console.log(e.key, 'note')
        router.push('/note')
        break
      case 'R':
      case 'r':
        console.log(e.key, 'reference')
        router.push('/reference')
        break
      default:
        console.log('Alt + Shift + M -> Menu')
    }
  }
}
document.addEventListener('keydown', hotkey)
</script>

<template>
  <div>
    <Nav />
    <!-- <Search /> -->
    <router-view id="content"/>
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
  min-height: calc(100vh - 50px);
  display: flex;
  flex-flow: column;
  align-items: center;
}
::-webkit-scrollbar {
  width: 0;
}
</style>
