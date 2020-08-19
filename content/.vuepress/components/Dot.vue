<template>
  <div>
    <script src="https://unpkg.com/@hpcc-js/wasm/dist/index.min.js" type="javascript/worker" />
    <div>
      <div id="graph" />
      <label>choose rendering algorithm</label>
      <select v-model="selectedEngine">
        <option v-for="item in renderingEngines" :key="item">{{ item }}</option>
      </select>
      <!-- <button @click="renderGraphviz" type="button">Redraw using {{ selectedEngine }} engine</button> -->
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
    width: "100%",
    selectedEngine: "dot",
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
      var t = d3.transition().duration(2000).ease(d3.easeLinear);
      d3.select("#graph")
        .graphviz()
        .transition(t)
        .engine(this.selectedEngine)
        .width(this.width)
        .fade(true)
        // .attributer(function(d) {
        //   if (d.tag == "ellipse") {
        //       d3.select(this)
        //           .attr("fill", "yellow");
        //       d.attributes.fill = "red";
        //   }
        // })
        .dot(this.code)
        .render();
    },
  },
  watch: {
    selectedEngine: function (val) {
      console.log("ENGINE " + val + 'selected');
      this.renderGraphviz();
    },
  },
};
</script>