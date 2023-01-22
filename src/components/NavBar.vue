<template>
  <div>
    <!-- <v-navigation-drawer app width="100%">
      <v-row class="fill-height" no-gutters>


      </v-row>
    </v-navigation-drawer> -->
    <v-navigation-drawer v-model="drawer"  absolute
      temporary mini-variant mini-variant-width="56">
      <v-list-item class="px-2">
        <v-list-item-avatar>
       <v-icon @click="drawer=!drawer">mdi-menu</v-icon>
        </v-list-item-avatar>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="secondary" dark>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>


      <v-spacer></v-spacer>

      <v-avatar>
        <img src="@/assets/logo.png" alt="logo">
      </v-avatar>

      <v-spacer> </v-spacer>
      <v-icon>mdi-bell</v-icon>
    </v-app-bar>
    <!---Navigation barre-->

  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer:false,
      items: [
        { title: 'Photos', icon: 'mdi-folder-multiple-image' },
        { title: 'About', icon: 'mdi-message-text' },
      ],
      links: ['Home', 'Contacts', 'Settings'],
      mini: true,
    }
  },

}
</script>

<style>

</style>
