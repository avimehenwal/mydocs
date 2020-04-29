<template>
  <div>
    <div></div>
  </div>
</template>

<script>
import Viz from "viz.js";
import { Module, render } from "viz.js/full.render.js";

export default {
  data() {
    return {
      viz: new Viz({ Module, render })
    };
  },
  mounted() {
    // initial render (if data not undefined)
    if (this.dotData) {
      this.render(this.dotData);
    }
  },
  method: {
    async render(data) {
      try {
        const viz = new Viz({ Module, render });
        this.$el.innerHTML = await viz.renderString(data); // , this.config)
        this.$emit("error", "");
        this.$store.commit("createPanZoom");
        if (document.querySelector("svg")) {
          this.$store.commit(
            "updateSVGSize",
            document.querySelector("svg").getBBox()
          );
        }
      } catch (err) {
        // render error to label later
        console.log("error", err.message);
        this.$emit("error", err.message);
      }
    }
  }

}
</script>