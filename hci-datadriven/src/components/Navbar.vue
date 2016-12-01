<template>
  <nav class="navbar navbar-full navbar-light bg-faded  navbar-fixed-top">
    <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
    <div class="collapse navbar-toggleable-md" id="navbarResponsive">
      <router-link to="/"><a href="#" class="navbar-brand"><img src="https://maxcdn.icons8.com/Color/PNG/24/Logos/the_premier_league-24.png" title="The Premier League" width="24"> {{title}}</a></router-link>
      <ul class="nav navbar-nav">
        <li class="nav-item" >
          <router-link to="/mancity"><a class="nav-link" href="#"><img src="https://maxcdn.icons8.com/Color/PNG/24/Logos/manchester_city_fc-24.png" title="Manchester City FC" width="24"> Manchester City</a></router-link>
        </li>
        <li class="nav-item" >
          <router-link to="/manu"><a class="nav-link" href="#"><img src="https://maxcdn.icons8.com/Color/PNG/24/Logos/manchester_united_fc-24.png" title="Manchester United FC" width="24"> Manchester United</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/chelsea"><a class="nav-link" href="#"><img src="https://maxcdn.icons8.com/Color/PNG/24/Logos/chelsea_fc-24.png" title="Chelsea FC" width="24"> Chelsea</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/spur"><a class="nav-link" href="#"><img src="https://maxcdn.icons8.com/iOS7/PNG/25/Animals/chicken-25.png" title="Chicken" width="25"> Tottenham Hotspur</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/arsenal"><a class="nav-link" href="#"><img src="https://maxcdn.icons8.com/Color/PNG/24/Logos/arsenal_fc-24.png" title="Arsenal FC" width="24"> Arsenal</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/liv"><a class="nav-link" href="#"><img src="https://maxcdn.icons8.com/Color/PNG/24/Logos/liverpool_fc-24.png" title="Liverpool FC" width="24"> Liverpool</a></router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      title:'English Premier League'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
