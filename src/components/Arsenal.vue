<template>
  <div class="home">
    <div class="container">
      <h1>Arsenal Wining Match Appearance</h1>
      <div id="chart"></div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'arsenal',
    data(){
      return{

      }
    },
    mounted: ()=>{
      var chart = c3.generate({
        bindto: '#chart',
        data: {
          type: "bar",
          columns: [
            ['Alexis Sánchez',8],
            ['Calum Chambers',1],
            ['Laurent Koscielny',8],
            ['Theo Walcott',7],
            ['Shkodran Mustafi',7],
            ['Mesut Özil',8],
            ['Nacho Monreal',7],
            ['Francis Coquelin',5],
            ['Héctor Bellerín',7],
            ['Santi Cazorla',6],
            ['Carl Jenkinson',0],
            ['Rob Holding',1],['Kieran Gibbs',4],
            ['Gabriel Paulista',1],
            ['Alex Oxlade Chamberlain',5],
            ['Granit Xhaka',6],
            ['Petr Cech',8],
            ['Alex Iwobi',6],
            ['Olivier Giroud',4],
            ['Mohamed Elneny',5],
            ['Mathieu Debuchy',1],
            ['Jack Wilshere',1],
            ['Aaron Ramsey',2],
            ['Lucas Pérez',2],
            ['Ainsley Maitland-Niles',1]
          ]
      }
    });
  }
}
</script>

<style scoped>
</style>
