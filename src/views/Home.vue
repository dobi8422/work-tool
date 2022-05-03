<template>
  <div>
    <div class="item">
      <h2>快捷鍵<br>Shift + 0~9, &lt;, &gt;</h2>
      <router-link to="/calender">Calender</router-link>
      <router-link to="/todo-list">Todo</router-link>
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
    text-align: start;
    &:not(:last-child) {
      padding-bottom: 2rem;
    }
  }
}
@media screen and (max-width: 576px) {
  .item {
    margin-top: 1rem;
  }
}
</style>
