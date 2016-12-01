<template>
  <div class="home">
    <div class="container">
      <h1>Tottenham Hotspur Wining Match Appearance</h1>
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
      }
    });
  }
}
</script>

<style scoped>
</style>
