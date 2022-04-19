<template>
  <div>
    <div class="item">
      <h2>快捷鍵<br> Alt + Shift + __</h2>
      <router-link to="/">功能表 M</router-link>
      <router-link to="/search">搜尋 S</router-link>
      <router-link to="/date">日曆 D</router-link>
      <router-link to="/clock">計時 C</router-link>
      <router-link to="/todo">番茄 T</router-link>
      <router-link to="/note">筆記 N</router-link>
      <router-link to="/reference">參考資料 R</router-link>
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
