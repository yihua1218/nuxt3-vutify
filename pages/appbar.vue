<template>
  <v-app>
    <v-navigation-drawer>
      <!-- -->
    </v-navigation-drawer>

    <!-- <v-app-bar> -->
      <!-- -->
    <!-- </v-app-bar> -->

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
        <v-btn>This is a button</v-btn>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>