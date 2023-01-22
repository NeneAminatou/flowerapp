<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-app>
    <v-app-bar app color="secondary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>


      <v-spacer></v-spacer>

      <v-avatar>
        <img src="@/assets/logo.png" alt="logo">
      </v-avatar>

      <v-spacer> </v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
