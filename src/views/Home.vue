<template>
  <div>
    <div class="item">
      <h2><span>&lt;</span>快捷鍵<span>&gt;</span><br>Alt + Shift + __</h2>
      <router-link to="/calender">Calender</router-link>
      <router-link to="/Todo">Todo</router-link>
      <router-link to="/pomodoro">Pomodoro</router-link>
      <router-link to="/collection">Website collection</router-link>
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
    span {
      margin: 0 1rem;
      color: yellowgreen;
    }
  }
  a {
    cursor: default;
    text-decoration: none;
    border-radius: 15px;
    text-align: start;
    &::first-letter {
      color: yellowgreen;
    }
    &:not(:last-child) {
      padding-bottom: 2rem;
    }
  }
}
</style>
