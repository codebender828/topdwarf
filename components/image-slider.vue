<template>
  <transition-group name="fade" tag="div" class="max-h-full">
    <div
      v-for="number in [currentNumber]"
      :key="number"
      class="max-h-full"
      style="max-height: 100%;"
    >
      <img
        style="max-width: 400px; max-height: 500px;"
        :src="currentImage"
        @mouseover="stopRotation"
        @mouseout="startRotation"
      >
    </div>
  </transition-group>
</template>

<script>
export default {
  name: 'ImageSlider',
  data() {
    return {
      images: [
        '/images/aisha-1.JPG',
        '/images/aishamive2.gif',
        '/images/aisha-pic-2.JPG',
        '/images/aishamovi.gif'
      ],
      currentNumber: 0,
      timer: null
    }
  },
  computed: {
    currentImage() {
      return this.images[Math.abs(this.currentNumber) % this.images.length]
    }
  },
  methods: {
    startRotation() {
      this.timer = setInterval(this.next, 3000)
    },

    stopRotation() {
      clearTimeout(this.timer)
      this.timer = null
    },

    next() {
      this.currentNumber += 1
    },
    prev() {
      this.currentNumber -= 1
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  visibility: hidden;
}
</style>
