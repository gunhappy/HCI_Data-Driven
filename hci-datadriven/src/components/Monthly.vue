<template>
  <div class="monthly">
    <h1>{{msg}}</h1>
    <div id="chart"></div>
  </div>
</template>

<script>
export default {
  name:'monthly',
  data(){
    return{
      msg:"this is monthly page",
      chart:""
    }
  },
  mounted: function(){
    console.log("go");
    var chart = c3.generate({
        bindto: '#chart',
        data: {
          columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
          ]
        }
    })
  }
}
</script>

<style scoped>
</style>
