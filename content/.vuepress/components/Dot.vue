<template>
  <div>
    <script src="https://unpkg.com/@hpcc-js/wasm/dist/index.min.js" type="javascript/worker" />
    <div class="graph" />

    <div class="controls">
      <label>drawn using {{selectedEngine}} Placement Algorithm</label>
      <select v-model="selectedEngine">
        <option v-for="item in renderingEngines" :key="item">{{ item }}</option>
      </select>
        <!-- <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect fill="lightgrey" stroke="#fff" stroke-width="4" x="25" y="25" width="50" height="50">
            <animateTransform
              attributeName="transform"
              dur="0.5s"
              from="0 50 50"
              to="180 50 50"
              type="rotate"
              id="strokeBox"
              attributeType="XML"
              begin="rectBox.end"
            />
          </rect>
          <rect x="27" y="27" fill="#fff" width="46" height="50">
            <animate
              attributeName="height"
              dur="2s"
              attributeType="XML"
              from="50"
              to="0"
              id="rectBox"
              fill="freeze"
              begin="0s;strokeBox.end"
            />
          </rect>
        </svg> -->
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
import "d3-graphviz";

export default {
  props: {
    code: {
      type: String,
      default: "digraph {a -> b}",
    },
  },
  data: () => ({
    graphviz: "",
    width: "100%",
    selectedEngine: "dot",
    time: 2000,
    renderingEngines: [
      "circo",
      "dot",
      "fdp",
      "neato",
      "osage",
      "patchwork",
      "twopi",
    ],
  }),
  mounted() {
    this.renderGraphviz();
  },
  methods: {
    renderGraphviz() {
      var t = d3.transition().duration(this.time).ease(d3.easeLinear);
      // .style("opacity", "100%");

      this.graphviz = d3
        .select(".graph")
        .graphviz()
        .transition(t)
        .engine(this.selectedEngine)
        .width(this.width)
        // .height(this.height)
        // .scale(1)
        .fit(true)
        .fade(true)
        // .attributer(function(d) {
        //   if (d.tag == "ellipse") {
        //       d3.select(this)
        //           .attr("fill", "yellow");
        //       d.attributes.fill = "red";
        //   }
        // })
        .dot(this.code)
        .render()
        .on("end", this.interactive);
    },
  },
  watch: {
    selectedEngine: function (val) {
      console.log("ENGINE " + val + "selected");
      this.renderGraphviz();
    },
  },
};
</script>

<style scoped>
.controls {
  position: relative;
  font-size: 0.85rem;
  font-style: italic;
  float: right;
  margin-top: 0.5em;
}

svg {
  width: 40px;
  /* height: 100px; */
  /* margin: 20px; */
  display: inline-block;
}

@keyframes example {
  0% {
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}

.bump {
  animation-name: example;
  animation-duration: 2s;
  animation-iteration-count: 2;
  animation-timing-function: ease;
}
</style>