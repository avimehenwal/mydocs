<template>
  <div class="triangle-container">
    <svg height="500" width="500">
      <polygon class="triangle" style="fill:blue" points="250,60 100,400 400,400">
        <animate
          attributeType="CSS"
          attributeName="opacity"
          from="1"
          to="0"
          dur="5s"
          repeatCount="indefinite"
        />
      </polygon>
      Sorry, your browser does not support inline SVG.
	  </svg>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/*
.triangle-container {
  width: 100px;
  margin: auto;
  text-align: center;
  border: 1px solid red;
} */

/* .triangle-container:hover .triangle, .triangle-container:active .triangle {
  transform: rotate(-180deg);
}

.triangle-container .triangle {
  fill: transparent;
  stroke: red;
  stroke-width: 8;
  transition: all 1s ease-in-out;
  transform-origin: 250px 250px;
}

@keyframes mymove {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
} */
</style>