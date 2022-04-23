<template>
  <div>
    <div class="item">
      <h2>快捷鍵<br> Alt + Shift + __</h2>
      <router-link to="/">功能表 M</router-link>
      <router-link to="/search">搜尋 S</router-link>
      <router-link to="/calender">日曆 C</router-link>
      <router-link to="/pomodoro">番茄 P</router-link>
      <router-link to="/Todo">待辦事項 T</router-link>
      <router-link to="/collection">網站收錄 W</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-flow: column;
  border: 4px solid $text;
  border-radius: 15px;
  margin: 4rem 0;
  padding: 2.5rem;
  width: 300px;
  font-size: 2rem;
  height: fit-content;
  h2 {
    margin-top: -.5rem;
    font-size: 2.5rem;
    border-bottom: 2px solid $text;
    padding-bottom: 1.5rem;
  }
  a {
    cursor: default;
    text-decoration: none;
    border-radius: 15px;
  }
}
</style>
