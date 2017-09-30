<template>
  <div class="tabs">
      <ul>
        <li v-for="tab in shared.state.entries.items">
          <router-link :to="'/' + language + '/' + tab.fields.slug">{{ tab.fields.title }}</router-link>
        </li>
      </ul>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'tabs',

  props: {
    language: String
  },

  data () {
    return {
      shared: store
    }
  },

  watch: {
    language: function (language) {
      store.getTabs(this.language)
    }
  },

  created () {
    store.getTabs(this.language)
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/variables';

  .tabs {
    text-align: center;
    margin-bottom: 1.5rem;

    ul {
      padding: 0;
      margin: 0;
      border-bottom: 2px $light-gray solid;
    }

    li {
      display: inline-block;
      list-style: none;
      margin-bottom: -2px;
    }

    a {
      display: block;
      color: $dark-gray;
      text-decoration: none;
      font-size: 1.25rem;
      background: lighten($lightest-gray, 5%);
      border: 2px $light-gray solid;
      border-radius: 5px 5px 0 0;
      padding: .5rem 1rem;
      margin: 0 .25rem;
      transition: .1s ease-in-out;

      &:hover {
        background: $lightest-gray;
      }

      &:active {
        background: darken($lightest-gray, 5%);
      }

      &.router-link-exact-active {
        position: relative;
        background: #fff;
        border-bottom: 2px #fff solid;

        &:hover {
          background: #fff;
        }
      }
    }
  }
</style>
