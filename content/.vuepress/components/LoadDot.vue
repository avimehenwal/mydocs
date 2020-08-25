<template>
  <figure>
    {{ relativeFilePath }} <br>
    {{ code }}
  </figure>
</template>

<script>
/** NOTE load dot from a file
 *
 * Using fs is not safe at client
 * https://stackoverflow.com/questions/52420663/unable-to-require-fs-with-vue-cli-3/53502487
 * https://stackoverflow.com/questions/60729743/fs-is-not-defined-how-can-i-use-fs-within-a-vuejs-file
 * https://forum.vuejs.org/t/can-i-use-node-js-file-system-module-fs-with-vue-cli-3/44027
 *
 * Workarounds - ask webpack to load a file as string
 * https://webpack.js.org/loaders/raw-loader/
 * https://stackoverflow.com/a/54703169/1915935
 *
 * FIXME
 * Reason: Error: Cannot find module 'raw-loader!@/content/dot/mockObject.dot
 * import code from 'raw-loader!@/content/dot/mockObject.dot';
 *
 * TODO cannot use import in methods
 * SyntaxError: 'import' and 'export' may only appear at the top level (43:6)\
 *
 */

// import file from "raw-loader!../../dot/mockObject.dot";
// console.log(file);


export default {
  props: {
    name: {
      type: String,
      default: "mockObject.dot",
    },
  },
  data: () => ({
    code: null,
    basePath: "../../dot/",
  }),
  mounted() {
    this.readFile()
    // console.log({ code })
  },
  methods: {
    readFile () {
      /**
       * FIXME
       * Error in mounted hook: "Error: Cannot find module 'raw-loader!../../dot/mockObject.dot'"
       * SyntaxError: 'import' and 'export' may only appear at the top level
       */
      // this.code = JSON.stringify(require(this.relativeFilePath))
      // this.code = require(this.relativeFilePath)
      // import file from "raw-loader!../../dot/mockObject.dot";
      console.log(file);
    }
  },
  computed: {
    relativeFilePath() {
      return "raw-loader!" + this.basePath + this.name;
    },
  },
};
</script>

<style>
</style>

