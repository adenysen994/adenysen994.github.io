<template>
  <v-app>
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"

    >
      <v-list>
        <v-list-tile
          v-for="link of links"
          :key="link.title"
          :to="link.url">

          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile
          v-if="isUserLoggedIn"
          @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="'Вихід'"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app dark color="primary'">
      <v-toolbar-side-icon
        @click="drawer = !drawer"
      class="hidden-md-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">ONLINE-FOOD.COM</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          lat>
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
        <v-btn
          v-if="isUserLoggedIn"
          @click="onLogout"
          flat>
          <v-icon left>exit_to_app</v-icon>
          Вихід
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
            {title: 'Товари', icon: 'shopping_cart', url: '/goods', id: '3', method: this.buttonThree}
        ]
      }
      return [
          {title: 'Вхід', icon: 'lock', url: '/login', id: '1', method: 'buttonOne'},
          {title: 'Реєстрація', icon: 'important_devices', url: '/registration', id: '2', method: this.buttonTwo}
      ]
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
}
</script>
  // this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push('/registration'))
<style>
  .pointer {
    cursor: pointer;
  }
</style>
