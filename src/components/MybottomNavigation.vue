<template>
  <div>

    <v-bottom-navigation app background-color="primary" color="secondary" grow>
      <v-btn value="plantes">
        <span>Plantes</span>

        <v-icon>mdi-flower</v-icon>
      </v-btn>

      <v-btn value="localisation">
        <span>Localisation</span>

        <v-icon>mdi-crosshairs-gps</v-icon>
      </v-btn>

      <v-btn value="forum">
        <span>Forum</span>

        <v-icon>mdi-forum</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
