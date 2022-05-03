<script setup>
import { ref, defineProps, watch, computed } from 'vue'
const props = defineProps({ noticeMessage: String })
const noticeState = ref(false)
const noticeMessage = computed(() => props.noticeMessage || '')
const notice = ref()

watch(noticeMessage, (newMessage, oldMessage) => {
  if ((oldMessage === '') && newMessage !== '') {
    // initial
    notice.value = noticeMessage.value
    noticeState.value = true
  } else if (oldMessage !== '' && newMessage === '') {
    // end
    noticeState.value = false
    setTimeout(() => { notice.value = oldMessage }, 1000)
  } else {
    // process
    notice.value = noticeMessage.value
  }
})
</script>

<template>
<div class="notice" :class="{'active':noticeState}">
  {{ notice }}
</div>
</template>

<style lang="scss" scoped>
.notice {
  position: fixed;
  top: 1.5rem;
  left: 100%;
  background: rgba(yellowgreen, .75);
  width: fit-content;
  padding: 1rem;
  border-radius: 15px;
  transform: translateX(0);
  transition: transform .5s;
}
.active {
  transform: translateX(calc(-100% - 1rem));
  transition: transform .5s;
}
@media screen and (max-width: 576px) {
  .notice {
    top: -5rem;
    left: 50%;
    transform: translateX(-50%);
    background: yellowgreen;
  }
  .active {
    transform: translate(-50%, calc(6rem));
    transition: transform .5s;
  }
}
</style>
