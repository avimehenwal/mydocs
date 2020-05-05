<template>
  <!-- <div>
    <script src="https://d3js.org/d3.v5.js"></script>
    <script src="https://unpkg.com/viz.js@1.8.2/viz.js" type="javascript/worker"></script>
    <script src="https://unpkg.com/d3-graphviz@2.4.2/build/d3-graphviz.js"></script>
    <div id="graph" style="text-align: center;"></div>
  </div> -->

  <div id="arc" />

</template>

<script>
import * as d3 from "d3"

// var dotSrc = `
// digraph example {
//     subgraph AA {
//         root -> {a b c}
//         a -> {a1 a2 a3}
//         b -> {b1 b2 b3}
//         c -> {c1 c2 c3}
//     }
//     subgraph XX {
//         _root -> _a -> { _a1 _a2 _a3 }
//         _root -> _b -> { _b1 _b2 _b3 }
//         _root -> _c -> { _c1 _c2 _c3 }
//     }
// }
// `;

export default {
  // mounted () {
  //   this.addExternalScript("https://d3js.org/d3.v5.js")
  //   this.addExternalScript("https://unpkg.com/viz.js@1.8.2/viz.js") // type="javascript/worker"
  //   this.addExternalScript("https://unpkg.com/d3-graphviz@2.4.2/build/d3-graphviz.js")
  // },
  // methods: {
  //   addExternalScript (url) {
  //     let externalScript = document.createElement('script')
  //     externalScript.setAttribute('src', url)
  //     document.head.appendChild(externalScript)
  //   }
  // },
  // created () {
  //   d3.select("#graph").graphviz()
  //     .engine("twopi")
  //     .renderDot(dotSrc);
  // },
  data() {
    return {
      gdp: [
        {country: "USA", value: 20.5 },
        {country: "China", value: 13.4 },
        {country: "Germany", value: 4.0 },
        {country: "Japan", value: 4.9 },
        {country: "France", value: 2.8 }
      ]
    }
  },
  mounted() {
    this.generateArc();
  },
  methods: {
    generateArc() {
      const w = 500;
      const h = 500;

      const svg = d3
        .select("#arc")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

      const sortedGDP = this.gdp.sort((a, b) => (a.value > b.value ? 1 : -1));
      const color = d3.scaleOrdinal(d3.schemeDark2);

      const max_gdp = d3.max(sortedGDP, o => o.value);

      const angleScale = d3
        .scaleLinear()
        .domain([0, max_gdp])
        .range([0, 1.5 * Math.PI]);

      const arc = d3
        .arc()
        .innerRadius((d, i) => (i + 1) * 25)
        .outerRadius((d, i) => (i + 2) * 25)
        .startAngle(angleScale(0))
        .endAngle(d => angleScale(d.value));

      const g = svg.append("g");

      g.selectAll("path")
        .data(sortedGDP)
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", (d, i) => color(i))
        .attr("stroke", "#FFF")
        .attr("stroke-width", "1px")
        .on("mouseenter", function() {
          d3.select(this)
            .transition()
            .duration(200)
            .attr("opacity", 0.5);
        })
        .on("mouseout", function() {
          d3.select(this)
            .transition()
            .duration(200)
            .attr("opacity", 1);
        });

      g.selectAll("text")
        .data(this.gdp)
        .enter()
        .append("text")
        .text(d => `${d.country} -  ${d.value} Trillion`)
        .attr("x", -150)
        .attr("dy", -8)
        .attr("y", (d, i) => -(i + 1) * 25);

      g.attr("transform", "translate(200,300)");
    }
  }
}
</script>