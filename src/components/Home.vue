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
  }
}
</script>

<style scoped>
</style>
