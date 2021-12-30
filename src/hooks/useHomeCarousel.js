/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */
import { ref, computed, unref, readonly } from 'vue'

export const useHomeCarousel = () => {
  const carouser = ref(true)
  const light = computed(() => unref(carouser))
  function setStatus (item) {
    carouser.value = item
    console.log(carouser.value)
  }

  return {
    carouser: readonly(carouser),
    light,
    setStatus
  }
}
