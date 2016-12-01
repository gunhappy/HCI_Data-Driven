<template>
  <div class="home">
    <div class="container">
      <h1>Manchester United Wining Match Appearance</h1>
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
