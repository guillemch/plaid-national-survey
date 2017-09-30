<template>
  <div class="content">
    <div v-html="content"></div>
  </div>
</template>

<script>
import store from '../store'
import marked from 'marked'

export default {
  name: 'content',

  props: {
    slug: String
  },

  data () {
    return {
      shared: store
    }
  },

  computed: {
    content () {
      if (!this.shared.state.hasOwnProperty('entries')) return
      if (!this.shared.state.entries.hasOwnProperty('items')) return

      const tab = this.shared.state.entries.items.find((item) => {
        return item.fields.slug === this.slug
      })

      return marked(tab.fields.content, { sanitize: true })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
