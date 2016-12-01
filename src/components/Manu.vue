<template>
  <div class="home">
    <div class="container">
      <h1>Barclay Premier League Point</h1>
      <div id="chart"></div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'manu',
    data(){
      return{

      }
    },
    mounted: ()=>{
      var chart = c3.generate({
        bindto: '#chart',
        data: {
          columns: [
          ['Manchester United',0,6,9,9,9,9,12,13,13,13,14,15,18,18,19,20,20]
          ]
      }
    });
  }
}
</script>

<style scoped>
</style>
