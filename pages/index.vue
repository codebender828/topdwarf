<template>
  <section class="h-screen relative w-screen sm:overflow-y-scroll overflow-hidden sm:p-1 md:p-16">
    <div class="flex sm:flex-col lg:flex-row items-start justify-center">
      <div class="sm:h-auto sm:w-full lg:w-1/2 p-4 h-auto rounded-lg">
        <div class="box">
          <h1 class="title text-6xl shadow-xl font-mono">
            Happy Birthday, Aisha!
          </h1>
          <br>
          <h3 class="text-sm font-hairline">
            I thank God for the irreplaceable gift that you are to me, and to the world. Your days have been crowned with greatness. You are a true Queen and the most beloved of all.
          </h3>
          <h3 class="text-sm mt-2 font-hairline">
            Your days have been crowned with greatness. You are a true Queen and the most beloved of all.
          </h3>
          <h3 class="text-sm mt-2 font-hairline">
            I'm very blessed to have you, and I love you with all my heart.
          </h3>
          <br>
          <h2 class="text-xs">
            Love, Jonathan.
          </h2>
        </div>
        <span class="emoji">🤩</span>
      </div>
      <div class="sm:h-1/2 sm:w-full lg:w-1/2 h-full items-start justify-center flex-col">
        <image-slider class="max-h-full" />
      </div>
    </div>
    <div class="flex items-center justify-center text-white">
      <button :class="{ 'pause bg-black' : playing }" style="transition: all 0.2s ease-in" class="rounded-lg p-4 mr-5 bg-yellow text-black hover:bg-yellow-dark focus:outline-none hover:cursor-pointer" @click="playOrPauseAudio">
        🎧 {{ buttonText }}
      </button>
      Click to play your birthday song :D
    </div>
  </section>
</template>

<script>
import ImageSlider from '@/components/image-slider.vue'

export default {
  components: {
    ImageSlider
  },
  data() {
    return {
      audio: undefined,
      buttonText: 'Play',
      playing: false,
      src: '/aisha-birthday-song.mp3'
    }
  },
  mounted() {
    this.audio = new Audio()
    this.audio.preload = 'auto'
    this.audio.src = this.src
  },
  methods: {
    /**
     * @description Plays and Pauses media.
     */
    playOrPauseAudio() {
      if (!this.playing) {
        this.playing = true
        this.buttonText = 'Pause'
        this.audio
          .play()
          .catch((error) => {
            console.log('error caught', error)
          })
      } else {
        // Pauses Audio if audio is playing.
        this.playing = false
        this.buttonText = 'Play'
        this.audio.pause()
      }
    }
  }
}
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.box {
  -webkit-text-fill-color: transparent;
  background-image: -webkit-linear-gradient(107deg,#ff6600,#9b0063);
  -webkit-background-clip: text;
  color: gradient-color-at(#9b0063,#ff4c1d);
}

.emoji {
  top: 220px;
  left: 27%;
  transform: rotate(20deg) scale(2);
}

.pause {

  @apply bg-grey-darker;
  color: white;
}

</style>
