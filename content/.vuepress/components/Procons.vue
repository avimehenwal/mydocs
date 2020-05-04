<template>
  <div class="w3-cell-row">

    <!-- A <slot> outlet without name implicitly has the name “default”. -->

    <div class="w3-container w3-blue w3-cell">
      <span>
        <i class="fa fa-thumbs-up w3-xxlarge w3-text-amber w3-right"></i>
        <h6>Pros</h6>
      </span>
      <slot name="pro"></slot>
    </div>

    <div class="w3-container w3-pink w3-cell">
      <span>
        <i class="fa fa-thumbs-down w3-xxlarge w3-text-amber w3-right" ></i>
        <h6>Cons</h6>
      </span>
      <slot name="con"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {

    }
  }
}
</script>
