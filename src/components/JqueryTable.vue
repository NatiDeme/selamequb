<template>
  <div>
    <h2>Members</h2>
    <table class="table" id="datatable">
      <thead>
        <tr>
          <th class="px-6 py-2 text-base text-white">ID</th>
          <th class="px-6 py-2 text-base text-white">Name</th>
          <th class="px-6 py-2 text-base text-white">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";
import j from "jquery";
export default {
  name: "JqueryTable",
  mounted() {
    axios.get("/users").then((response) => {
      this.users = response.data.data;
      j("#datatable").DataTable({
        paging: true,
        ordering: true,
      });
    });
  },
  data() {
    return {
      users: [],
    };
  },
};
</script>
