<template>
  <div class="language-prompt">
    <transition name="fade">
      <div class="backdrop" v-if="shown"></div>
    </transition>
    <transition name="bounce">
      <div class="modal" v-if="shown">
          <div class="box">
            <div class="stripe"></div>

            <div class="main-logo">
              <img src="../assets/logo.png" alt="National Survey" />
            </div>

            <p>Select your language</p>

            <ul class="options">
              <li><button class="button" @click="setLanguage('cy')"><span>Cymraeg</span></button></li>
              <li><button class="button" @click="setLanguage('en')"><span>English</span></button></lI>
            </ul>
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'language-prompt',
  data () {
    return {
      shown: false
    }
  },

  mounted () {
    this.shown = true
  },

  methods: {
    setLanguage (lang) {
      this.shown = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../variables';

  .modal {
    position: fixed;
    z-index: 1000;
    width: 100%;
    left: 0;
    top: 6rem;
  }

  .backdrop {
    position: fixed;
    z-index: 1000;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.75);
  }

  .box {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }

  .main-logo {
    max-width: 300px;
  }

  .options {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 2rem 0 0;

    li {
      list-style: none;
      margin: 0 1rem;
    }

    button {
      font-size: 1.5rem;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.75s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: translateY(-300px);
    }
    50% {
      transform: translateY(50px);
    }
    100% {
      transform: translate(0);
    }
  }
</style>
