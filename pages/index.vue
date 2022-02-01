<template>
  <v-app>
    <v-app-bar color="grey-lighten-2" absolute></v-app-bar>
    <!-- <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list :items="items"></v-list>
    </v-navigation-drawer> -->
    <v-main>
      <v-card height="200px"></v-card>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      items: [
        {
          title: 'Foo',
          value: 'foo',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>