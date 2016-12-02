<template>
  <div class="home">
    <div class="container">
      <h1>Chelsea Rating</h1>
      <div id="rating-chart"></div>
      <div>
        Max = 7.88 Average = 7.12 Min = 6.28
      </div>
      <h1>Chelsea Player Wining Match Appearance</h1>
      <div id="chart"></div>
      <div>
        <span><strong>Top Eleven Most Wining Match Appearance : </strong>Eden Hazard, Diego Costa, Nemanja Matic, Cecar Azpilicueta, Victor Moses, Pedro, Gary Cahill, Thibaut Courtois, Oscar, David Luiz</span>
      </div>
      <div>
        <span><strong>Injuring Player : </strong>John Terry, Mikel John Obi</span>
      </div>
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
    var rchart = c3.generate({
      bindto: '#rating-chart',

      data: {
        x:'x',
        columns: [
          ['Chelsea',6.86,6.82,7.3,6.69,6.84,6.28,7.38,7.56,7.71,7.36,7.88,6.94,6.92],
          ['x',1,2,3,4,5,6,7,8,9,10,11,12,13]
        ]
      },
      axis: {
          x: {
              label: 'Match Number'
          },
          y: {
              label: 'Rating Number'
          }
      }
    });
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
      },
      axis: {
          x: {
              label: 'Football Player Name'
          },
          y: {
              label: 'Number Of Win Times'
          }
      }
    });
  }
}
</script>

<style scoped>
</style>
