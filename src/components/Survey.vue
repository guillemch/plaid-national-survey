<template>
  <div class="survey">
    <transition name="fade">
      <div class="backdrop" v-if="shown" @click="shown = false"></div>
    </transition>
    <transition name="bounce">
      <div class="modal-holder" v-if="shown" @click="shown = false">
        <div class="modal">
          <div class="box">
            <iframe class="survey-iframe" :src="'static/survey_' + language + '.html'" width="100%" height="500" frameborder="0" scrolling="no"></iframe>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'survey',

  props: {
    language: String
  },

  data () {
    return {
      shown: false
    }
  },

  mounted () {
    window.Bus.$on('displaySurvey', (display) => { this.shown = display })
  }
}
</script>

<style lang="scss" scoped>
.modal {
  max-width: 900px;
}

.box {
  padding: 0;
}

@media (min-height: 800px) {
  .survey-iframe {
    height: 650px;
  }
}

@media (min-height: 1100px) {
  .survey-iframe {
    height: 900px;
  }
}
</style>

<style lang="scss">
@media (max-height: 700px) {
  .modal-holder {
    top: 2rem;
  }
}

@media (max-height: 500px) {
  .survey-iframe {
    height: 400px;
  }
}

</style>
