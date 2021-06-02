<template>
  <div class="home">
    <p>Share A Random Thought With Us ..</p>
    <!-- <v-spacer></v-spacer> -->
    <div>
      <button class="login" @click="login">Log In</button>
      <button class="register" @click="register">Register</button>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    login() {
      this.$router.push({
        name: "login",
      });
    },
    register() {
      this.$router.push({
        name: "register",
      });
    },
  },
};
</script>
