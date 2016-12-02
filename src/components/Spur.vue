<template>
  <div class="home">
    <div class="container">
      <h1>Tottenham Hotspur Rating</h1>
      <div id="rating-chart"></div>
      <div>
        Max = 7.47 Average = 6.91 Min = 6.66
      </div>
      <h1>Tottenham Hotspur Player Wining Match Appearance</h1>
      <div id="chart"></div>
      <div>
        <span><strong>Top Eleven Most Wining Match Appearance : </strong>Kyle Walker, Son Heung-Min, Jan Vertonghen, Victor Wanyama, Christian Eriksen, <span class="text-danger">Toby Alderweireld</span>, <span class="text-danger">Erik Lamela</span>, Dele Alli, Hugo Lloris, Eric Dier, Vincent Janssen</span>
      </div>
      <div>
        <span><strong>Injuring Player : </strong>Ben Davies, <span class="text-danger">Erik Lamela</span>, <span class="text-danger">Toby Alderweireld</span> </span>
      </div>
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
      var rchart = c3.generate({
        bindto: '#rating-chart',

        data: {
          columns: [
            ['Tottenham',6.77,7.04,6.76,7.47,7.15,6.88,7.14,6.95,6.81,6.9,6.7,6.69,6.66]
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
          type:"bar",
          columns: [
            ['Danny Rose',3],
            ['Mousa Dembélé',2],
            ['Kyle Walker',6],
            ['Son Heung-Min',5],
            ['Jan Vertonghen',6],
            ['Harry Kane',4],
            ['Victor Wanyama',6],
            ['Christian Eriksen',5],
            ['Ben Davies',3],
            ['Toby Alderweireld',5]
            ,['Erik Lamela',5]
            ,['Dele Alli',6],
            ['Michel Vorm',1],
            ['Hugo Lloris',5]
            ,['Eric Dier',5],
            ['Moussa Sissoko',4]
            ,['Harry Winks',2]
            ,['Vincent Janssen',6],
            ['Kevin Wimmer',0],
            ['Georges-Kévin Nkoudou',2],
            ['Kieran Trippier',1],
            ['Josh Onomah',1],
            ['Tom Carroll',1],
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
