<template>
  <div class="app">
    <header class="brand">
      <div class="plaid">
        <a href="http://plaidifanc.org" target="_blank">
          <img src="./assets/logo-plaid-ifanc.png" alt="Plaid Ifanc" />
        </a>
      </div>

      <language-switcher />
    </header>
    <section class="wrapper">
      <div class="box">
        <div class="stripe"></div>

        <div class="main-logo">
          <img src="./assets/logo.png" alt="National Survey" />
        </div>

        <tabs />

        <router-view></router-view>
      </div>
    </section>

    <language-prompt />
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
  }
}
</script>

<style lang="scss">
@import 'variables';

* {
  box-sizing: border-box;
}

body {
  background: $lightest-gray;
  font-family: $default-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $darkest-gray;
  font-size: 16px;
  margin: 0;
}

a {
  color: $primary-color;
}

.brand {
  max-width: $wrapper-width;
  margin: 0 auto;
  display: flex;
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
}

.stripe {
  background: $primary-color;
  background: linear-gradient(to right, $primary-color 0%, $secondary-color 100%);
  height: 10px;
  margin: -$wrapper-padding;
  margin-bottom: $wrapper-padding;
}

.main-logo {
  max-width: 400px;
  margin: 0 auto;

  img {
    width: 100%;
  }
}

.button {
  background: linear-gradient(to right, $primary-color 0%, $secondary-color 100%);
  border: 0;
  font-size: 1rem;
  font-family: $default-font;
  padding: 0;
  border-radius: 2rem;
  font-weight: bold;
  color: $dark-gray;
  cursor: pointer;
  transition: .1s ease-in-out;

  span {
    display: block;
    margin: 3px;
    padding: .5rem 2rem;
    background: #fff;
    border-radius: 2.2rem;
    transition: .1s ease-in-out;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 2px 15px -5px $shadow-color;

    span {
      background: transparent;
      color: #fff;
    }
  }

  &:active {
    transform: translateY(2px);
  }

  &:focus, &:active {
    outline: 0;
  }
}
</style>
