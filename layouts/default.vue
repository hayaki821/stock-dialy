<template>
  <v-app light>
    <v-app-bar fixed app color="grey">
      <NuxtLink :to="{ path: '/' }" class="title-link white--text">
        <v-toolbar-title v-text="title" />
      </NuxtLink>
      <CommonPageToolBar />
      <v-spacer />
      <v-btn icon class="white--text" @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="main">
      <v-container>
        <transition name="page">
          <nuxt />
        </transition>
      </v-container>
    </v-main>
    <sidebarRight :right-drawer.sync="rightDrawer" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',
  layout: 'default',
  data() {
    return {
      rightDrawer: false,
      title: 'trading',
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {},
  },
})
</script>

<style lang="scss" scoped>
a.title-link {
  text-decoration: none;
}
.main {
  background: #efefef;
}
</style>
