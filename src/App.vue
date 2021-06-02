<template>
  <v-app>
    <NavBar />
    <MessageItem />
    <router-view />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MessageItem from "./components/MessageItem.vue";
export default {
  name: "App",
  components: {
    NavBar,
    MessageItem,
  },

  data: () => ({
    //
  }),
};
</script>
