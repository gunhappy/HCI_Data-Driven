<template>
  <div class="home">
    <div class="container">
      <h1>Manchester United Barclay Premier League Point</h1>
      <div id="chart"></div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'manc',
    data(){
      return{

      }
    },
    mounted: ()=>{
      var chart = c3.generate({
        bindto: '#chart',
        data: {
          columns: [
          ['Manchester City',0,6,9,9,12,15,18,18,18,19,20,23,24,24,27,30,30],
          ]
      }
    });
  }
}
</script>

<style scoped>
</style>
