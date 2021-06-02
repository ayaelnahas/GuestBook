<template>
  <div class="home">
    <p>Share A Random Thought With Us ..</p>
    <!-- <v-spacer></v-spacer> -->
    <div>
      <LoginForm />
      <v-spacer></v-spacer>
      <v-divider ></v-divider>
      <button class="register" @click="register">Create Account Now!</button>
    </div>
    <div></div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
export default {
  name: "Home",
  components: {
    LoginForm,
  },
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
