<template>
  <div class="home">
    <div class="container">
      <h1>Chelsea Barclay Premier League Point</h1>
      <div id="chart"></div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'chel',
    data(){
      return{

      }
    },
    mounted: ()=>{
      var chart = c3.generate({
        bindto: '#chart',
        data: {
          columns: [
          ['Chelsea',0,6,9,9,10,10,10,13,13,16,19,22,25,25,28,31,31],
          ]
      }
    });
  }
}
</script>

<style scoped>
</style>
