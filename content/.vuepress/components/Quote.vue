<template>
  <div class="w3-panel w3-leftbar w3-light-grey">
    <p class=" w3-large">
      <i class="fa fa-quote-right w3-xxlarge w3-text-red"></i>
      <br>
      <p class="w3-center w3-xlarge" style="font-style: italic;">
        {{ text }}
      </p>
    </p>
    <p class="w3-right">
      {{ by }} <i class="fa fa-user w3-large w3-text-red"></i>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Quote',
  props: {
    text: {
      default: 'First Solve the problem, then write the code'
    },
    by: {
      default: 'Anonymous'
    }
  }

}
</script>

<style>

</style>
