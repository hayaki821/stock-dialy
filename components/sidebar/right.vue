<template>
  <v-navigation-drawer :value="rightDrawer" right temporary fixed>
    <v-list>
      <v-list-item :to="{ path: '/' }">
        <v-list-item-title>トップへ</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SidebarRight",
  props: {
    rightDrawer: { default: false, type: Boolean },
  },
  computed: {},
  methods: {},
});
</script>
