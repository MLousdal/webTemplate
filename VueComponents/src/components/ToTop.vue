<template>
  <button
    v-if="isVisible"
    id="toTopBtn"
    aria-label="Back to top"
    @click="goToTop(duration)"
  >
    <img src="./assets/icons/arrow-up-solid.svg" class="filter-font-color-inverse" alt="" />
  </button>
</template>

<script>
// Code inspired by https://github.com/asdf1899/vue-simple-scroll-up

export default {
  name: 'ToTop',
  props: {
    visibleY: {
      type: Number,
      default: 100,
    },
    duration: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      isVisible: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollEvent)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollEvent)
  },
  methods: {
    scrollEvent() {
      this.isVisible = this.visibleY < window.scrollY
    },
    goToTop(duration) {
      if (document.scrollingElement.scrollTop === 0) return
      const totalScrollDistance = document.scrollingElement.scrollTop
      let scrollY = totalScrollDistance
      let oldTimestamp = null

      function step(newTimestamp) {
        if (oldTimestamp !== null) {
          scrollY -=
            (totalScrollDistance * (newTimestamp - oldTimestamp)) / duration
          if (scrollY <= 0) return (document.scrollingElement.scrollTop = 0)
          document.scrollingElement.scrollTop = scrollY
        }
        oldTimestamp = newTimestamp
        window.requestAnimationFrame(step)
      }
      window.requestAnimationFrame(step)
    },
  },
}
</script>

<style></style>
