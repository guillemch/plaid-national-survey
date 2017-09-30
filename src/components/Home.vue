<template>
  <div class="home">
    <div class="cta">
      <button class="button" @click="displaySurvey(true)"><span>Launch survey</span></button>
    </div>

    <survey />
  </div>
</template>

<script>
import Survey from './Survey'

export default {
  name: 'home',

  components: {
    Survey
  },

  methods: {
    displaySurvey (display) {
      window.Bus.$emit('displaySurvey', display)
    }
  }
}
</script>

<style lang="scss" scoped>
  .cta {
    text-align: center;

    .button {
      font-size: 1.5rem;
    }
  }
</style>
