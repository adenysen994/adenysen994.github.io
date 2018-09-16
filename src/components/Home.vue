<template>
    <v-container fluid class="back">
     <v-layout row justify-center mb-5>
       <v-flex xs12 sm6 offset-sm3></v-flex>
     </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .back {
    background-image: url("../Assets/marketplace.jpg");
    background-size: cover;
    width: 100%;
    height: 100%;
  }
</style>
