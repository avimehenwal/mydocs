<template>

<!-- Uncaught (in promise) TypeError: google.visualization[type] is not a constructor
    at createChart (vue-google-charts.common.js?757f:1)
    at VueComponent.createChartObject (vue-google-charts.common.js?757f:1)
    at eval (vue-google-charts.common.js?757f:1) -->

  <GChart
    type="Timeline"
    :data="[
        [{ type: 'string', id: 'Events' }, { type: 'date', id: 'Start' }, { type: 'date', id: 'End' }],
        [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
        [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
      ]"
  />
</template>

<script>
export default {
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      }
    }
  }
}
</script>

<style>

</style>


