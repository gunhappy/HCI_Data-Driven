<template>
  <div class="home">
    <div class="container">
      <h1>Manchester City Rating</h1>
      <div id="rating-chart"></div>
      <div>
        Max = 7.57 Average = 7.02 Min = 6.64
      </div>
      <h1>Manchester City Player Wining Match Appearance</h1>
      <div id="chart"></div>
      <div>
        <span><strong>Top Eleven Most Wining Match Appearance : </strong>Nicolas Otamendi, Sergio Aguero, Kevin De Bruyne, <span class="text-danger">Raheem Sterling</span>, Fernandinho, David Silva, Aleksandar Kolarov, John Stones, Nolito, Bacary Sagna, Claudio Bravo</span>
      </div>
      <div>
        <span><strong>Injuring Player : </strong><span class="text-danger">Raheem Sterling</span>, Vincent Kompany, Fabian Delph</span>
      </div>
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
      var rchart = c3.generate({
        bindto: '#rating-chart',

        data: {
          columns: [
            ['Manchester City',6.73,7.3,7.19,7.01,7.57,7.09,6.72,6.77,6.64,7.41,6.91,6.94,6.99]
          ]
        }
      });
      var chart = c3.generate({
        bindto: '#chart',
        data: {
          type:"bar",
          columns: [
            ['Yaya Touré',2],
            ['Nicolás Otamendi',8],
            ['Sergio Agüero',7],
            ['Kevin De Bruyne',9],
            ['Ilkay Gündogan',3],
            ['Raheem Sterling',9],
            ['Fernandinho',9]
            ,['David Silva',7],
            ['Aleksandar Kolarov',9],
            ['John Stones',7],
            ['Gaël Clichy',4],
            ['Kelechi Iheanacho',4],
            ['Nolito',8],
            ['Bacary Sagna',6],
            ['Pablo Zabaleta',5],
            ['Claudio Bravo',6],
            ['Fernando',6],
            ['Willy Caballero',3]
            ,['Leroy Sané',3],
            ['Jesús Navas',5],
            ['Samir Nasri',1]
            ,['Vincent Kompany',1],
            ['Aleix García',2],
            ['Fabian Delph',2],
          ]
      }
    });
  }
}
</script>

<style scoped>
</style>
