<template>
  <div class="content" v-if="tab">
    <div v-html="tab.content"></div>

    <survey-button v-if="tab.displaySurveyButton" />
  </div>
</template>

<script>
import store from '../store'
import marked from 'marked'
import SurveyButton from '@/components/SurveyButton'

export default {
  name: 'content',

  props: {
    slug: String
  },

  components: {
    SurveyButton
  },

  data () {
    return {
      shared: store
    }
  },

  computed: {
    tab () {
      if (!this.shared.state.hasOwnProperty('entries')) return
      if (!this.shared.state.entries.hasOwnProperty('items')) return

      const tab = this.shared.state.entries.items.find((item) => {
        return item.fields.slug === this.slug
      })

      return {
        'content': marked(tab.fields.content, { sanitize: true }),
        'displaySurveyButton': tab.fields.displaySurveyButton
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
