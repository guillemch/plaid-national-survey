<template>
  <div class="language-prompt">
    <transition name="fade">
      <div class="backdrop" v-if="shown"></div>
    </transition>
    <transition name="bounce">
      <div class="modal-holder" v-if="shown">
        <div class="modal">
          <div class="box">
            <div class="columns">
              <div class="option"  @click="setLanguage('cy')">
                <div class="logo">
                  <img src="../assets/logo-cy.png" alt="National Survey" />
                </div>
                <div class="text">
                  Dewiswch eich iaith
                </div>
                <div class="action">
                  <button class="button"><span>Cymraeg</span></button>
                </div>
              </div>
              <div class="option" @click="setLanguage('en')">
                <div class="logo">
                  <img src="../assets/logo-en.png" alt="National Survey" />
                </div>
                <div class="text">
                  Select your language
                </div>
                <div class="action">
                  <button class="button"><span>English</span></button>
                </div>
              </div>
            </div>
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
  padding: 0;
}

.columns {
  display: flex;
}

.option {
  padding: 4rem 2rem;
  width: 50%;
  text-align: center;
  border-right: 2px $light-gray solid;
  cursor: pointer;
  transition: .3s ease-in-out;

  &:last-child {
    border-right: 0;
  }

  &:hover {
    background: lighten($lightest-gray, 5%);

    .button {
      transform: translateY(-3px);
      box-shadow: 0 2px 15px -5px $shadow-color;

      span {
        background: none;
        color: #fff;
      }
    }
  }
}

.logo {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 60px;
  }
}

.text {
  margin: 3rem 0;
}

.button {
  font-size: 1.5rem;
}

@media screen and (max-width: 480px) {
  .modal-holder {
    top: 1rem;
  }

  .columns {
    flex-direction: column;
  }

  .option {
    width: 100%;
    border-bottom: 2px $light-gray solid;
    padding: 2rem;

    &:last-child {
      border-bottom: 0;
    }
  }

  .text {
    margin: 1rem 0 1.5rem 0;
  }
}
</style>
