<template>
  <div class="home">
    <div class="container">
      <h1>Barclay Premier League Point</h1>
      <div id="chart"></div>
      <div>
        From this chart, you will see that each of top 6 position always change until last week.
      </div>
      <div>
        Chelsea is 1st
      </div>
      <div>
        Liverpool is 2nd
      </div>
      <div>
        Followed by Manchester City, Arsenal, Tottenham Hotspur and Manchester United in order.
      </div>
      <h1>Available Player</h1>
      <div class="row">
        <div class="col-xs-4">
          <div id="ars-chart"></div>
        </div>
        <div class="col-xs-4">
          <div id="chel-chart"></div>
        </div>
        <div class="col-xs-4">
          <div id="liv-chart"></div>
        </div>
        <div class="col-xs-4">
          <div id="mc-chart"></div>
        </div>
        <div class="col-xs-4">
          <div id="mu-chart"></div>
        </div>
        <div class="col-xs-4">
          <div id="ts-chart"></div>
        </div>
      </div>
      <div>
        From this six donut charts, it show that Liverpool doesn't have good situation in their team 3 of their main player are injured. (Liverpool rating is increasing every week by this player)
      </div>
      <div>
        Arsenal and Spur are in bad time too.
      </div>
      <div>
        Raheem Sterling is injured, this might make the speed of Manchester City is slower a lot.
      </div>
      <h1>Rating Comparision</h1>
      <div id="rating-chart"></div>
      <div>
        You will see that the rating of each top 6 team is swinging a lot. But top 4 time always keep their standard as you can see from the average of each that none of it below 7 .
      </div>
      <div>
        However Manchester United did better in last match .
      </div>
      <div>
        But on the other hand Tottenham Hotspur have a bad situation the rating of them is going down... If Tottenham Hotspur can't improve their form, it might be a chance for Manchester United to climb to be top 5.
      </div>
      <h1>Rival Rating</h1>
      <div id="rival-chart"></div>
      <div>
        <strong>"West Ham vs Arsenal"</strong> : Arsenal have 2 of their main player is injured which is right back and midfielder, but it might not the hard problem for Arsenal because they have Xhaka and Mustafi who can replace Gonzala and Hector
        and West Ham rating is much different from Arsenal. This mean they are in bad time to face with Arsenal. This is chance of Arsenal to win.
      </div>
      <div>
        <strong>"Manchester City vs Chelsea"</strong> : It's bad time for Manchester City who lose Raheem Sterling this mean the speed of attack game of Manchester City is decrease a lot. The great wall of EPL, Chelsea might have a better chance to win because all of top eleven squad is fit and ready to face any rival. Chelsea will have better chance to grab the victory in this match.
      </div>
      <div>
        <strong>"Bournemouth vs Liverpool"</strong> : So sad for Liverpool who lost 3 of their main player for this game. The attacking game of Liverpool might be not good as it should be. If Bournemouth use defensive and counter attack game, Liverpool might be in the really bad situation. I'm Liverpool Fan and it is difficult to say that it's not a time for Liverpool to win.
      </div>
      <div>
        <strong>"Everton vs Manchester United"</strong> : Everton and Manchester United isn't much different. (Except the case of value of team) This match might be the match of fire or the most boring match. From the rating and fitness of player, it's difficult to predict who will win. So I decide to said that they will draw.
      </div>
      <div>
        <strong>"Tottenham Hotspur vs Swansea"</strong> : It's time for Tottenham Hotspur to prove that the top of table is place for them. There are two game that Tottenham Hotspur is not play in good form. Swansea is very different to Tottenham by the rating. This time Tottenham Hotspur might prove themself by grab the victory in their hand.
      </div>
      <h1>Prediction</h1>
      <h5>According my prediction : Chelsea,Arsenal,Liverpool,Manchester City, Tottenham Hotspur, and Manchester United</h5>
    </div>
  </div>
</template>

<script>

export default {
  name:'home',
  data(){
    return{

    }
  },
  mounted: ()=>{
    var arschart = c3.generate({
      bindto: '#ars-chart',
      data: {
        type:"donut",
        columns: [
          ['Avaiable',9],
          ['Injury',2],
        ]
      },
      donut: {
        title: "Arsenal"
      }
    });
    var chelchart = c3.generate({
      bindto: '#chel-chart',
      data: {
        type:"donut",
        columns: [
          ['Avaiable',11],
          ['Injury',0],
        ]
      },
      donut: {
        title: "Chelsea"
      }
    });
    var livchart = c3.generate({
      bindto: '#liv-chart',
      data: {
        type:"donut",
        columns: [
          ['Avaiable',8],
          ['Injury',3],
        ]
      },
      donut: {
        title: "Liverpool"
      }
    });
    var mcchart = c3.generate({
      bindto: '#mc-chart',
      data: {
        type:"donut",
        columns: [
          ['Avaiable',10],
          ['Injury',1],
        ]
      },
      donut: {
        title: "Manchester City"
      }
    });
    var muchart = c3.generate({
      bindto: '#mu-chart',
      data: {
        type:"donut",
        columns: [
          ['Avaiable',11],
          ['Injury',0],
        ]
      },
      donut: {
        title: "Manchester United"
      }
    });
    var tschart = c3.generate({
      bindto: '#ts-chart',
      data: {
        type:"donut",
        columns: [
          ['Avaiable',9],
          ['Injury',2],
        ]
      },
      donut: {
        title: "Tottenham Hotspur"
      }
    });
    var chart = c3.generate({
      bindto: '#chart',
      data: {
        x:'x',
        columns: [
          ['Arsenal',0,1,4,4,7,10,13,16,16,19,20,23,24,24,25,28,28],
          ['Chelsea',0,6,9,9,10,10,10,13,13,16,19,22,25,25,28,31,31],
          ['Liverpool',0,3,4,4,7,10,13,16,16,16,20,23,26,26,27,30,30],
          ['Manchester City',0,6,9,9,12,15,18,18,18,19,20,23,24,24,27,30,30],
          ['Manchester United',0,6,9,9,9,9,12,13,13,13,14,15,18,18,19,20,20],
          ['Tottenham Hotspur',0,4,5,5,8,11,14,17,17,18,19,20,21,21,24,24,24],
          ['x',1,2,3,4,5,6,7,8,9,10,11,12,13]
        ]
      },
      axis: {
          x: {
              label: 'Match Number'
          },
          y: {
              label: 'Cumulative Point'
          }
      }
    });
    var rating_chart = c3.generate({
      bindto: '#rating-chart',
      data: {
        x:'x',
        columns: [
          ['Arsenal',6.68,7.09,7.42,6.88,7.05,7.41,7.18,7.02,7.03,6.13,6.71,7.82,7.11],
          ['Chelsea',6.86,6.82,7.3,6.69,6.84,6.28,7.38,7.56,7.71,7.36,7.88,6.94,6.92],
          ['Liverpool',7.03,6.48,6.76,7.42,6.98,7.5,7.03,6.69,7.05,7.22,7.78,6.88,7.13],
          ['Manchester City',6.73,7.3,7.19,7.01,7.57,7.09,6.72,6.77,6.64,7.41,6.91,6.94,6.99],
          ['Manchester United',7.05,7.14,7.14,6.81,6.47,7.34,6.97,7.25,6.26,7.09,7.1,6.82,6.92],
          ['Tottenham',6.77,7.04,6.76,7.47,7.15,6.88,7.14,6.95,6.81,6.9,6.7,6.69,6.66],
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
    var rivalchart = c3.generate({
      bindto: '#rival-chart',
      data: {
        type:"bar",
        columns: [
          ['Home',6.7,7.02,6.8,6.9,6.91],
          ['Away',7.04,7.12,7.07,6.95,6.6]
        ]
      },
      axis: {
        x: {
          type: 'category',
          label: 'Rival Team Name',
          categories: ['West Ham vs Arsenal','Manchester City vs Chelsea','Bournemouth vs Liverpool','Everton vs Manchester United','Tottenham Hotspur vs Swansea']
        },
        y: {
            label: 'Rating Number'
        }
      }
    });
  }
}
</script>

<style scoped>
</style>
