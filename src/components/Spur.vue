<template>
  <div class="home">
    <div class="container">
      <h1>Tottenham Hotspur Barclay Premier League Point</h1>
      <div id="chart"></div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'spur',
    data(){
      return{

      }
    },
    mounted: ()=>{
      var chart = c3.generate({
        bindto: '#chart',
        data: {
          columns: [
          ['Tottenham Hotspur',0,4,5,5,8,11,14,17,17,18,19,20,21,21,24,24,24]
          ]
      }
    });
  }
}
</script>

<style scoped>
</style>
