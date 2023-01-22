<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-app>
    <!-- Entete de l'application -->
    <v-app-bar app color="secondary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>


      <v-spacer></v-spacer>

      <v-avatar>
        <img src="@/assets/logo.png" alt="logo">
      </v-avatar>

      <v-spacer> </v-spacer>
      <v-icon>mdi-bell</v-icon>
    </v-app-bar>
    <!-- Fin de l'entete de l'application-->

    <!-- corps de la pagede l'application-->
    <v-main>
      <router-view />
    </v-main>
    <!-- fin du contenu du corps -->


    <!-- debut pied de page -->
    <mybottom-navigation></mybottom-navigation>
  </v-app>

</template>

<script>
import MybottomNavigation from './components/MybottomNavigation.vue';
export default {
  components: { MybottomNavigation },


  data: () => ({
    //
  }),
};
</script>
