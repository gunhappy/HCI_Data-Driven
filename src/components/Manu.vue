<template>
  <div class="home">
    <div class="container">
      <h1>Manchester United Rating</h1>
      <div id="rating-chart"></div>
      <h1>Manchester United Player Wining Match Appearance</h1>
      <div id="chart"></div>
      <div>
        <span><strong>Top Eleven Most Wining Match Appearance : </strong>Paul Pogba, Daley Blind, Zlatan Ibrahimovic, Antonio Martial, Juan Mata, Ander Herrera, Eric Bailly, Marouane Fellaini, Wayne Rooney, Anthony Martial, David de Gea</span>
      </div>
      <div>
        <span><strong>Injuring Player : </strong>Eric Bailly, Chris Smalling, James Wilson</span>
      </div>
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
      var rchart = c3.generate({
        bindto: '#rating-chart',

        data: {
          columns: [
            ['Manchester United',7.05,7.14,7.14,6.81,6.47,7.34,6.97,7.25,6.26,7.09,7.1,6.82,6.92]
          ]
        }
      });
      var chart = c3.generate({
        bindto: '#chart',
        data: {
          type:"bar",
          columns: [
            ['Paul Pogba',4],
            ['Daley Blind',4],
            ['Zlatan Ibrahimovic',5],
            ['Antonio Valencia',4],
            ['Juan Mata',5],
            ['Ander Herrera',3],
            ['Eric Bailly',4],
            ['Marcos Rojo',1],
            ['Phil Jones',1],
            ['Marouane Fellaini',4],
            ['Matteo Darmian',1],
            ['Luke Shaw',3],
            ['Jesse Lingard',2],
            ['Wayne Rooney',5],
            ['Ashley Young',2],
            ['Michael Carrick',2],
            ['Chris Smalling',3],
            ['Anthony Martial',3],
            ['Marcus Rashford',2],
            ['Henrikh Mkhitaryan',3],
            ['David de Gea',5],
            ['Morgan Schneiderlin',2],
            ['Timothy Fosu-Mensah',1],
            ['Memphis Depay',1]
          ]
      }
    });
  }
}
</script>

<style scoped>
</style>
