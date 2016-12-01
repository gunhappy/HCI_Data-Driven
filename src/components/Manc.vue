<template>
  <div class="home">
    <div class="container">
      <h1>Manchester City Wining Match Appearance</h1>
      <div id="chart"></div>
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
