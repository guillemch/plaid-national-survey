<template>
  <div class="content" v-if="shared.state.entry.fields">
    <div v-html="shared.state.entry.fields.content"></div>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'content',

  props: {
    slug: String,
    locale: String
  },

  data () {
    return {
      shared: store
    }
  },

  watch: {
    slug: function (slug) {
      store.getTab(this.locale, slug)
    },

    locale: function (locale) {
      store.getTab(locale, this.slug)
    }
  },

  created () {
    store.getTab(this.locale, this.slug)
  }
}
</script>

<style lang="scss" scoped>

</style>
