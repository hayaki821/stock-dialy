<template>
  <div class="d-flex">
    <transition name="slide-transition">
      <div v-if="$route.path !== '/'" class="d-flex">
        <v-btn
          key="btn"
          small
          color="white"
          class="mx-10 primary--text"
          :to="{ path: '/' }"
        >
          <b>トップメニュー</b>
        </v-btn>
        <h2 key="title" class="font-weight-regular white--text">
          {{ title }}
        </h2>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import menus from '~/utils/top-menu'
export default Vue.extend({
  data() {
    return {
      title: '',
    }
  },
  watch: {
    $route: {
      handler(val) {
        this.title = ''
        Object.values(menus).some((e) => {
          return e.lists.some((list: any) => {
            return list.some((item: any) => {
              if (item.url === val.path) {
                this.title = item.label
                return true
              }
              return false
            })
          })
        })
      },
      immediate: true,
    },
  },
  mounted(): void {},
})
</script>

<style></style>
