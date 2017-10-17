<template>
  <div class="survey-button">
    <div class="cta">
      <button class="button" @click="displaySurvey(true)"><span>{{ label }}</span></button>
    </div>

    <survey :language="$route.params.locale" />
  </div>
</template>

<script>
import Survey from '@/components/Survey'

export default {
  name: 'survey-button',

  components: {
    Survey
  },

  computed: {
    label () {
      const labels = {
        'cy': 'Cymerwch yr arolwg',
        'en': 'Take the survey'
      }

      return labels[this.$route.params.locale]
    }
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
  margin-top: 2rem;
  text-align: center;

  .button {
    font-size: 1.5rem;
  }
}
</style>
