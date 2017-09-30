<template>
  <div class="app">
    <header class="brand" v-if="!promptForLanguage">
      <div class="plaid">
        <a href="http://plaidifanc.org" target="_blank">
          <img src="./assets/logo-plaid-ifanc.png" alt="Plaid Ifanc" />
        </a>
      </div>

      <language-switcher :language="language" />
    </header>

    <section class="wrapper" v-if="!promptForLanguage">
      <div class="box">
        <div class="stripe"></div>

        <div class="main-logo">
          <img src="./assets/logo.png" alt="National Survey" />
        </div>

        <tabs :language="language" />

        <router-view></router-view>
      </div>
    </section>

    <language-prompt :prompt="promptForLanguage" />
  </div>
</template>

<script>
import LanguagePrompt from '@/components/LanguagePrompt'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import Tabs from '@/components/Tabs'

export default {
  name: 'app',

  components: {
    LanguagePrompt,
    LanguageSwitcher,
    Tabs
  },

  data () {
    return {
      language: null,
      promptForLanguage: true
    }
  },

  watch: {
    language: function (language) {
      const slug = (this.$route.params.slug) ? this.$route.params.slug : 'home'
      this.$router.push('/' + language + '/' + slug)
    }
  },

  created () {
    this.setInitialLanguage()
    window.Bus.$on('setLanguage', (lang) => { this.setLanguage(lang) })
  },

  methods: {
    setLanguage (lang) {
      this.language = lang
      this.promptForLanguage = false
      this.$cookie.set('language', lang, '1Y')
    },

    setInitialLanguage () {
      const routeLocale = this.$route.params.locale

      if (routeLocale) {
        this.language = routeLocale
        this.promptForLanguage = false
      } else {
        this.setCookieLanguage()
      }
    },

    setCookieLanguage () {
      const language = this.$cookie.get('language')

      if (language) {
        this.language = language
        this.promptForLanguage = false
      }
    }
  }
}
</script>

<style lang="scss">
@import 'scss/variables';
@import 'scss/global';
@import 'scss/modals';
@import 'scss/buttons';
@import 'scss/animations';

.wrapper {
  max-width: $wrapper-width;
  margin: $wrapper-padding * 2 auto;
}

.box {
  background: #fff;
  padding: $wrapper-padding;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 5px 60px -20px $shadow-color;
  margin: 1rem;
  animation: bounce-up .75s;
}

.stripe {
  background: $primary-color;
  background: linear-gradient(to right, $primary-color 0%, $secondary-color 100%);
  height: 10px;
  margin: -$wrapper-padding;
  margin-bottom: $wrapper-padding;
}

.brand {
  max-width: $wrapper-width;
  margin: 0 auto;
  display: flex;
  animation: slide-down 1.75s;
}

.plaid {
  background: #fff;
  padding: .5rem 1.75rem .25rem 0;
  margin-left: 1rem;
  border-radius: 0 0 5px 5px;
  width: 100px;

  img {
    width: 100%;
  }
}

.main-logo {
  max-width: 400px;
  margin: 0 auto;

  img {
    width: 100%;
  }
}
</style>
