<template>
  <div class="w3-row w3-padding-small">
    <div class="w3-quarter">
      {{ text }}
    </div>

    <div class="w3-threequarter">
      <div :class="getColor" :style="getWidth">
        {{ len }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bar',
  props: {
    text: {
      default: 'Rivalry in dark'
    },
    len: {
      // type: Number,
      default: 50
    },
    color: {
      default: 'blue'
    }
  },
  computed: {
    getWidth () {
      return 'height:24px;width: ' + this.len + '%'
    },
    getColor () {
      return 'w3-container w3-' + this.color
    }
  }
}
</script>
