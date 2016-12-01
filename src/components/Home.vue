<template>
  <div class="home">
    <div class="container">
      <h1>Manchester City Barclay Premier League Point</h1>
      <div id="chart"></div>
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
