<template>
  <div class="loginForm">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-row v-row justify="center">
          <v-col cols="12">
            <v-text-field
              filled
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              filled
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              v-model="password"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              hint="At least 8 characters"
              label="password"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
          <v-btn
            :disabled="!valid"
            color="primary"
            class="mr-4"
            @click="validate"
          >
            Log In
          </v-btn>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "login-form",
  props: [],
  mounted() {},
  data() {
    return {
      show1: false,
      valid: true,
      password: "",
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
  computed: {},
};
</script>
