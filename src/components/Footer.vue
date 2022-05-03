<template>
  <div>
    <p>© 2022 <a href="https://github.com/dobi8422/work-tool" target="_blank">Dosss</a>.</p>
    <p>All Rights Reserved.</p>
    <p><a href="https://dobi8422.github.io/dosss/" target="_blank">Dosss' Blog</a></p>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: space-around;
  p {
    color: rgb(109, 109, 109);
    a {
      text-decoration: none;
      color: rgb(109, 109, 109);
      &:hover {
        color: yellowgreen;
      }
    }
  }
}
@media screen and (max-width: 576px) {
  div {
    flex-flow: column;
  }
}
</style>
