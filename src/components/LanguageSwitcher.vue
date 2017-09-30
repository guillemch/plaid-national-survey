<template>
  <div class="languages">
    <ul>
      <li :class="{'active': language == 'cy'}"><a href="#" @click.prevent="setLanguage('cy')">Cymraeg</a></li>
      <li :class="{'active': language == 'en'}"><a href="#" @click.prevent="setLanguage('en')">English</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'language-switcher',

  props: {
    language: String
  },

  methods: {
    setLanguage (lang) {
      window.Bus.$emit('setLanguage', lang)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.languages {
  margin-left: auto;

  ul {
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    list-style: none;
    border-right: 1px $gray solid;

    a {
      display: block;
      color: $darkest-gray;
      text-decoration: none;
      padding: 1rem .75rem;
      font-weight: normal;

      &:hover {
        background: #fff;
      }
    }

    &.active a {
      font-weight: bold;
    }

    &:last-child {
      border-right: 0;
    }
  }
}
</style>
