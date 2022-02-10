<template>
  <div class="container">
    <!-- <JqueryTable /> -->
    <!-- <div class="justify-center">
      <table class="" id="dataTable">
        <thead class="bg-blue-800 rounded-md">
          <tr>
            <th class="px-6 py-2 text-base text-white">ID</th>
            <th class="px-6 py-2 text-base text-white">Name</th>
            <th class="px-6 py-2 text-base text-white">Email</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-300">
          <tr v-for="users in users.data" :key="users.id">
            <td>
              {{ users.id }}
            </td>
            <td>{{ users.name }}</td>
            <td>{{ users.email }}</td>
          </tr>
        </tbody>
      </table>
    </div> -->
    <JlDatatable
      :url="datatable.url"
      :columns="datatable.columns"
      :pageLength="datatable.pageLength"
      :lengthMenu="datatable.lengthMenu"
    />

    <!-- <jl-datatable 
    :url='http://127.0.0.1:8000/api/users'
    :columns="datatable.columns" /> -->

    <!-- <form class="ui form">
      <div class="fields">
        <div class="">
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            @change="handleChange"
            :value="form.first_name"
          />
        </div>

        <div class="">
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            @change="handleChange"
            :value="form.last_name"
          />
        </div>

        <div class="">
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="joe@gmail.com"
            @change="handleChange"
            :value="form.email"
          />
        </div>

        <div class="">
          <button :class="btnClass" @click="onFormSubmit">
            {{ btnName }}
          </button>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="onFormSubmit"
          >
            Save
          </button>
        </div>
      </div>
    </form> -->
  </div>
</template>

<script>
// import JqueryTable from "../components/JqueryTable.vue";
// import axios from "axios";
// //import Navbar from "../components/navbar.vue";
// export default {
//   components: {
//     //Navbar,
//     JqueryTable,
//   },
//   data() {
//     return {
//       url: "http://127.0.0.1:8000/api/users",
//       users: {},
//     };
//   },
//   methods: {
//     getusers() {
//       axios.get(this.url).then((data) => {
//         this.users = data.data;
//       });
//     },
//   },
//   created() {
//     this.getusers();
//   },
// };
//import axios from "axios";
import Buttons from "../components/Buttons.vue";
import JlDatatable from "jl-datatable";
export default {
  components: {
    JlDatatable,
  },
  data() {
    return {
      datatable: {
        url: "http://127.0.0.1:8000/api/users",
        lengthMenu: [15, 20, 50, 120],
        pageLength: 15,
        columns: [
          {
            title: "ID",
            key: "id",
          },
          {
            title: "Name",
            key: "name",
          },
          {
            title: "Email",
            key: "email",
          },
          {
            title: "Actions",
            key: "id",
            isAction: true,
            component: Buttons,
          },
        ],
      },
    };
  },
  // methods: {
  //   getusers() {
  //     axios.get(this.url).then((data) => {
  //       this.users = data.data;
  //     });
  //   },
  // },
  // created() {
  //   this.getusers();
  // },
};
// export default {
//   name: "MyForm",
//   data() {
//     return {
//       btnName: "Save",
//     };
//   },
//   props: {
//     form: {
//       type: Object,
//     },
//   },
//   methods: {
//     handleChange(event) {
//       const { name, value } = event.target;
//       let form = this.form;
//       form[name] = value;
//       //this.form = form;
//     },
//     onFormSubmit(event) {
//       // prevent form submit
//       event.preventDefault();
//       // form validation
//       if (this.formValidation()) {
//         // window.console.log("ready to submit");
//         this.$emit("onFormSubmit", this.form);
//         // change the button to save
//         this.btnName = "Save";
//         this.btnClass = "ui primary button submit-button";
//         // clear form fields
//         this.clearFormFields();
//       }
//     },
//     formValidation() {
//       // first name
//       if (document.getElementsByName("first_name")[0].value === "") {
//         alert("Enter first name");
//         return false;
//       }
//       // last name
//       if (document.getElementsByName("last_name")[0].value === "") {
//         alert("Enter last name");
//         return false;
//       }
//       // email
//       if (document.getElementsByName("email")[0].value === "") {
//         alert("Enter email");
//         return false;
//       }
//       return true;
//     },
//     // clearFormFields() {
//     //   // clear form data
//     //   this.form.first_name = "";
//     //   this.form.last_name = "";
//     //   this.form.email = "";
//     //   this.form.isEdit = false;
//     //   // clear form fields
//     //   document.querySelector(".form").reset();
//     // }
//   },
//   updated() {
//     if (this.form.isEdit) {
//       this.btnName = "Update";
//       this.btnClass = "ui orange button submit-button";
//     }
//   },
// };
</script>
