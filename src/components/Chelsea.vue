<template>
  <div class="home">
    <div class="container">
      <h1>Chelsea Wining Match Appearance</h1>
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
          type:'bar',
          order: 'asc',
          columns: [
            ['Eden Hazard',10],
            ['Diego Costa',10],
            ['Marcos Alonso',7],
            ['N\'Golo Kanté',10],
            ['Nemanja Matic',10],
            ['César Azpilicueta',10],
            ['Victor Moses',10],
            ['David Luiz',7],
            ['Willian',6],
            ['Pedro',10],
            ['Gary Cahill',10],
            ['Branislav Ivanovic',6],
            ['Thibaut Courtois',10],
            ['Oscar',7],
            ['John Terry',4],
            ['Cesc Fàbregas',1],
            ['Nathaniel Chalobah',4],
            ['Michy Batshuayi',6],
            ['Ola Aina',1],
            ['Ruben Loftus-Cheek',1],
          ]
      }
    });
  }
}
</script>

<style scoped>
</style>
