<template>
  <div id="footer">
    <footer class="footer" >
      <div class="container">
        <a href="https://icons8.com">Icon pack by Icons8</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name : 'Footer',
  data(){
    return{

    }
  }
}
</script>

<style scoped>

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 10px;
  line-height: 10px; /* Vertically center the text there */
  background-color: #f5f5f5;
}
.container {
  width: auto;
  max-width: 680px;
  padding: 0 15px;
}

</style>
