<template>
  <div>
    <h3>Dot component</h3>
    <div id="graph"></div>
  </div>
</template>

<script>
import 'd3-graphviz'
import * as d3 from 'd3'
// https://github.com/sorieux/easyflowchart/blob/master/src/components/GraphvizViewer.vue

export default {
  mounted () {
    console.log(d3.select("#graph").graphviz().renderDot('digraph  {a -> b}'))
    d3.select("#graph").graphviz()
    .renderDot('digraph  {a -> b}')
  },
  data() {
    return {
      code: '',
      width: null,
      height: null,
    }
  }
}
// index.es6.js?5265:150 wasm streaming compile failed: TypeError: Failed to execute 'compile' on 'WebAssembly': Incorrect response MIME type. Expected 'application/wasm'.
</script>
