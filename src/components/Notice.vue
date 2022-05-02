<script setup>
import { defineProps } from 'vue'
const props = defineProps({ noticeMessage: String })
</script>

<template>
  <div class="notice active" v-if="props.noticeMessage">
    {{ props.noticeMessage }}
  </div>
</template>

<style lang="scss" scoped>
.notice {
  position: absolute;
  top: 1.5rem;
  left: 100%;
  background: rgba(yellowgreen, .75);
  width: fit-content;
  padding: 1rem;
  border-radius: 15px;
}
.active {
  transform: translateX(-115%);
  transition: transform .5s;
}
@media screen and (max-width: 576px) {
  .notice {
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
