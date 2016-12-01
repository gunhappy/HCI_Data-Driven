<template>
  <div class="home">
    <div class="container">
      <h1>Liverpool Barclay Premier League Point</h1>
      <div id="chart"></div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'liv',
    data(){
      return{

      }
    },
    mounted: ()=>{
      var chart = c3.generate({
        bindto: '#chart',
        data: {
          columns: [
          ['Liverpool',0,3,4,4,7,10,13,16,16,16,20,23,26,26,27,30,30]
          ]
      }
    });
  }
}
</script>

<style scoped>
</style>
