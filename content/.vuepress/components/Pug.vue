<template lang="pug">
  div
    h2 from pug
    p {{ msg }}
    ul
      li(v-for="name in names") {{name}}
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello, Pug',
        names: [
          'a',
          'b',
          'c'
        ]
      }
    }
  }
</script>

<style scoped>
</style>