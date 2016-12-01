<template>
  <div class="home">
    <div class="container">
      <h1>Liverpool Wining Match Appearance</h1>
      <div id="chart"></div>
      <div>
        <span><strong>Top Eleven Most Wining Match Appearance : </strong><span class="text-danger">Philippe Coutinho</span>, <span class="text-danger">Roberto Firmino</span>, Sadio Mane, Jordan Henderson, James Milner, <span class="text-danger">Adam Lallana</span>, Emre Can, Nathaniel Clyne, Georginio Wijnaldum, Loris Karius</span>
      </div>
      <div>
        <span><strong>Injuring Player : </strong><span class="text-danger">Philippe Coutinho</span>, <span class="text-danger">Roberto Firmino</span>, Joel Matip, Adam Bogdan, <span class="text-danger">Adam Lallana</span>, Daniel Ings, Sheyi Ojo</span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'liv',
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
            ['Philippe Coutinho',9],
            ['Roberto Firmino',8],
            ['Sadio Mané',9],
            ['Jordan Henderson',9],
            ['James Milner',7],
            ['Adam Lallana',8],
            ['Dejan Lovren',6],
            ['Joel Matip',8],
            ['Emre Can',7],
            ['Nathaniel Clyne',9],
            ['Georginio Wijnaldum',9],
            ['Ragnar Klavan',3],
            ['Daniel Sturridge',5],
            ['Simon Mignolet',3],
            ['Loris Karius',6],
            ['Lucas Leiva',5],
            ['Alberto Moreno',3],
            ['Marko Grujic',1],
            ['Divock Origi',6],
            ['Kevin Stewart',3],
            ['Ovie Ejaria',1],
            ['Ben Woodburn',1]
          ]
      }
    });
  }
}
</script>

<style scoped>
</style>
