<template>
  <router-link class="tool_group" to="/">
    <i class="fa-solid fa-fish"></i>
    <ul>
      <li>
        <router-link active-class="active-link" to="/date">
          <i class="fa-solid fa-calendar-days"></i>
        </router-link>
      </li>
      <li>
        <router-link active-class="active-link" to="/clock">
          <i class="fa-solid fa-stopwatch"></i>
        </router-link>
      </li>
      <li>
        <router-link active-class="active-link" to="/todo">
          <i class="fa-solid fa-calendar-days"></i>
        </router-link>
      </li>
      <li>
        <router-link active-class="active-link" to="/note">
          <i class="fa-solid fa-file-pen"></i>
        </router-link>
      </li>
      <li>
        <router-link active-class="active-link" to="/reference">
          <i class="fa-solid fa-link"></i>
        </router-link>
      </li>
    </ul>
  </router-link>
</template>

<style lang="scss" scoped>
.tool_group {
  cursor: default;
  font-size: 2rem;
  opacity: 1;
  i {
    margin-right: 3px;
    transform: rotate(0);
    transition: transform .5s;
  }
  &:hover > i {
    transform: rotate(-25deg);
  }

  ul {

    list-style-type: none;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid $text_1;
    font-size: 1.5rem;

    position: absolute;
    top: 20px;
    left: 50%;
    height: 43px;
    padding: 1rem .5rem .1rem .3rem;
    transform: translate(-50%, .8rem);

    li {
      width: 3rem;
      a {
        opacity: .5;
        padding: .5rem;
        margin: 0 5px;
        &:hover{
          opacity: 1;
        }
      }
      .active-link {
        opacity: 1;
      }
    }
    opacity: 0;
    visibility: hidden;
    transition: opacity .4s, visibility .4s;
  }
  &:hover ul{
    opacity: 1;
    visibility: visible;
    transition: opacity .4s, visibility .4s;
  }
}
</style>
