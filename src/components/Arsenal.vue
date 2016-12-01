<template>
  <div class="home">
    <div class="container">
      <h1>Arsenal Barclay Premier League Point</h1>
      <div id="chart"></div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'arsenal',
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
          ]
      }
    });
  }
}
</script>

<style scoped>
</style>
