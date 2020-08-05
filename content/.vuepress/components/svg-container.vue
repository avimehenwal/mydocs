<template>
  <SvgPanZoom
    style="width: 500px; height: 500px; border:1px solid black;"
    :zoomEnabled="true"
    :controlIconsEnabled="true"
    :fit="false"
    :center="true"
  >
  <!-- slot template -->
    <svg>
      <circle x="10" y="10" r="5" />
    </svg>
  </SvgPanZoom>
</template>

<script>
import SvgPanZoom from "vue-svg-pan-zoom";

export default {
  components: { SvgPanZoom }
};
</script>
