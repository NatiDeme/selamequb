<template>
  <div
    class="flex justify-center items-center place-content-center w-full h-screen"
  >
    <div
      class="rounded-md bg-gray-300 h-96 w-96 flex items-center place-content-center"
    >
      <form @submit.prevent="submit" class="grid gap-4 grid-cols-1">
        <input
          type="text"
          placeholder="Email"
          class="w-80 h-14 pl-3 rounded-md"
          id="email"
          v-model="form.email"
        />

        <input
          type="password"
          placeholder="Password"
          class="w-80 h-14 pl-3 rounded-md"
          id="password"
          v-model="form.password"
        />

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions({
      login: "login",
    }),
    submit() {
      this.login(this.form).then(() => {
        this.$router.replace({
          name: "Dashboard",
        });
      });
    },
  },
};
</script>
