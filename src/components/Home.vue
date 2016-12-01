<template>
  <div class="home">
    <div class="container">
      <h1>Manchester City Barclay Premier League Point</h1>
      <div id="chart"></div>
      <h1>Available Player</h1>
      <div class="row">
        <div class="col-xs-4">
          <div id="ars-chart"></div>
        </div>
        <div class="col-xs-4">
          <div id="chel-chart"></div>
        </div>
        <div class="col-xs-4">
          <div id="liv-chart"></div>
        </div>
        <div class="col-xs-4">
          <div id="mc-chart"></div>
        </div>
        <div class="col-xs-4">
          <div id="mu-chart"></div>
        </div>
        <div class="col-xs-4">
          <div id="ts-chart"></div>
        </div>
      </div>
      <h1>Rating Comparision</h1>
      <div id="rating-chart"></div>
    </div>
  </div>
</template>

<script>

export default {
  name:'home',
  data(){
    return{

    }
  },
  mounted: ()=>{
    var arschart = c3.generate({
      bindto: '#ars-chart',
      data: {
        type:"donut",
        columns: [
          ['Avaiable',9],
          ['Injury',2],
        ]
      },
      donut: {
        title: "Arsenal"
      }
    });
    var chelchart = c3.generate({
      bindto: '#chel-chart',
      data: {
        type:"donut",
        columns: [
          ['Avaiable',11],
          ['Injury',0],
        ]
      },
      donut: {
        title: "Chelsea"
      }
    });
    var livchart = c3.generate({
      bindto: '#liv-chart',
      data: {
        type:"donut",
        columns: [
          ['Avaiable',8],
          ['Injury',3],
        ]
      },
      donut: {
        title: "Liverpool"
      }
    });
    var mcchart = c3.generate({
      bindto: '#mc-chart',
      data: {
        type:"donut",
        columns: [
          ['Avaiable',10],
          ['Injury',1],
        ]
      },
      donut: {
        title: "Manchester City"
      }
    });
    var muchart = c3.generate({
      bindto: '#mu-chart',
      data: {
        type:"donut",
        columns: [
          ['Avaiable',11],
          ['Injury',0],
        ]
      },
      donut: {
        title: "Manchester United"
      }
    });
    var tschart = c3.generate({
      bindto: '#ts-chart',
      data: {
        type:"donut",
        columns: [
          ['Avaiable',9],
          ['Injury',2],
        ]
      },
      donut: {
        title: "Tottenham Hotspur"
      }
    });
    var chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['Arsenal',0,1,4,4,7,10,13,16,16,19,20,23,24,24,25,28,28],
          ['Chelsea',0,6,9,9,10,10,10,13,13,16,19,22,25,25,28,31,31],
          ['Liverpool',0,3,4,4,7,10,13,16,16,16,20,23,26,26,27,30,30],
          ['Manchester City',0,6,9,9,12,15,18,18,18,19,20,23,24,24,27,30,30],
          ['Manchester United',0,6,9,9,9,9,12,13,13,13,14,15,18,18,19,20,20],
          ['Tottenham Hotspur',0,4,5,5,8,11,14,17,17,18,19,20,21,21,24,24,24]
        ]
      }
    });
    var rating_chart = c3.generate({
      bindto: '#rating-chart',
      data: {
        columns: [
          ['Arsenal',6.68,7.09,7.42,6.88,7.05,7.41,7.18,7.02,7.03,6.13,6.71,7.82,7.11],
          ['Chelsea',6.86,6.82,7.3,6.69,6.84,6.28,7.38,7.56,7.71,7.36,7.88,6.94,6.92],
          ['Liverpool',7.03,6.48,6.76,7.42,6.98,7.5,7.03,6.69,7.05,7.22,7.78,6.88,7.13],
          ['Manchester City',6.73,7.3,7.19,7.01,7.57,7.09,6.72,6.77,6.64,7.41,6.91,6.94,6.99],
          ['Manchester United',7.05,7.14,7.14,6.81,6.47,7.34,6.97,7.25,6.26,7.09,7.1,6.82,6.92],
          ['Tottenham',6.77,7.04,6.76,7.47,7.15,6.88,7.14,6.95,6.81,6.9,6.7,6.69,6.66]
        ]
      }
    });
  }
}
</script>

<style scoped>
</style>
