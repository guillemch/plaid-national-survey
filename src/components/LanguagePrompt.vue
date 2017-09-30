<template>
  <div class="language-prompt">
    <transition name="fade">
      <div class="backdrop" v-if="shown"></div>
    </transition>
    <transition name="bounce">
      <div class="modal-holder" v-if="shown">
        <div class="modal">
          <div class="box">
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

  props: {
    prompt: Boolean
  },

  mounted () {
    if (this.prompt) this.shown = true
  },

  watch: {
    prompt: function (prompt) {
      this.shown = prompt
    }
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

.box {
  text-align: center;
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
</style>
