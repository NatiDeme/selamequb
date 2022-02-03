<template>
  <div>
    <div class="w-full h-14 pt-4">
      <div class="flex">
        <a href="" class="px-2" @click.prevent="logout">Log Out</a>
        <div class="px-2">
          <span>{{ username }} Natty</span>
        </div>
        <div>
          <div class="border-black w-8 h-8 rounded-2xl bg-black"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ username: "user" }),
  },
  data() {
    return {
      username: "",
    };
  },
  methods: {
    ...mapActions({
      logoutAction: "logout",
    }),
    logout() {
      this.logoutAction().then(() => {
        this.$router.replace({
          name: "Login",
        });
      });
    },
  },
};
</script>
