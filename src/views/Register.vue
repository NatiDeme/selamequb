<template>
  <div class="bg-white rounded-md shadow-lg">
    <form action="">
      <!-- <header><h1>Register New Member</h1></header> -->

      <div class="p-10 flex">
        <div class="">
          <span class="font-bold">Registration</span>
        </div>
        <div class="flex flex-row pl-80">
          <!-- Member uploading image is written here -->
          <div>
            <span class="text-md font-normal"
              >{{ form.fname }}{{ form.lname }}</span
            >
            <p class="text-md font-normal">{{ fname }}</p>
            <div
              class="imagePreviewWrapper h-48 w-40 cursor-pointer shadow-lg border-4 rounded-md bg-gray-100"
              :style="{ 'background-image': `url(${previewImage})` }"
              @click="selectImage"
            >
              <!-- <span class="text-base font-normal">Upload Image</span> -->
            </div>

            <input
              ref="fileInput"
              type="file"
              @input="pickFile"
              class="hidden"
            />
          </div>
          <!-- the other fields that are needed to be filled are listed here -->
          <div class="flex flex-row text-base w-40 font-normal pl-11 pt-5">
            <div class="flex flex-col gap-3 font-bold">
              <span class="text-xs">Registration Date:</span>
              <input
                type="date"
                class="h-8 w-48 border-2 pl-2 rounded-sm"
                placeholder=""
              />
              <span class="text-xs">Member ID Code:</span>
              <input
                type="text"
                class="h-8 w-48 bg-gray-50 pl-2 border-2 rounded-sm"
                placeholder=""
              />
            </div>
            <div class="pl-16 flex flex-col gap-3 font-bold">
              <span class="text-xs">POS Source:</span>
              <select
                v-model="selected"
                class="h-8 w-48 border-2 pl-2 rounded-sm"
              >
                <option>Online</option>
                <option>Offline</option>
                <option>C</option>
              </select>
              <span class="text-xs">Membership Type:</span>
              <select
                v-model="selected"
                class="h-8 w-48 border-2 pl-2 rounded-sm"
              >
                <option>Car</option>
                <option>House</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <hr class="ml-20 mr-20" />
      <div class="p-10 flex flex-row">
        <div class="font-bold">
          <span>Basic Information</span>
        </div>
        <div class="pl-72">
          <div class="flex flex-row gap-3">
            <div class="flex flex-col gap-3">
              <span class="text-xs">First Name:</span>
              <input
                type="text"
                id="fname"
                v-model="form.fname"
                class="text-base h-8 pl-2 border-2 rounded-sm w-56"
                placeholder="Abebe"
              />
            </div>
            <div class="flex flex-col gap-3">
              <span class="text-xs">Middle Name:</span>
              <input
                type="text"
                class="h-8 pl-2 border-2 rounded-sm w-56"
                placeholder="Balcha"
                id="lname"
                v-model="form.lname"
              />
            </div>
            <div class="flex flex-col gap-3">
              <span class="text-xs">Last Name:</span>
              <input
                type="text"
                class="border-b h-8 pl-2 border-2 rounded-sm w-56"
                placeholder=""
              />
            </div>
          </div>
          <div class="flex flex-row gap-3 pt-4">
            <div class="flex flex-col gap-3">
              <span class="text-xs">Date of Birth:</span>
              <input
                type="date"
                class="border-b h-8 pl-2 border-2 rounded-sm w-56"
                placeholder=""
              />
            </div>
            <div class="flex flex-col gap-3">
              <span class="text-xs">Gender:</span>
              <select
                v-model="selected"
                class="pl-2 border-2 rounded-sm w-56 h-8"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <div class="flex flex-row pt-4 gap-3">
            <div class="flex flex-col gap-3">
              <span class="text-xs pt-2">Email:</span>
              <input
                type="text"
                class="h-8 pl-2 border-2 rounded-sm w-96"
                placeholder=""
              />
            </div>
            <div class="flex flex-col gap-3">
              <span class="text-xs pt-2">Phone Number:</span>
              <input
                type="text"
                class="h-8 pl-2 border-2 rounded-sm w-56"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
      <hr class="ml-20 mr-20" />
      <div class="p-10 flex flex-row">
        <div class="font-bold">
          <span>Detailed Information</span>
        </div>
        <div class="pl-64">
          <div class="flex flex-row gap-3">
            <div class="flex flex-col gap-3">
              <span class="text-xs">Adress:</span>
              <input
                type="text"
                id="fname"
                v-model="form.fname"
                class="text-base h-8 pl-2 border-2 rounded-sm w-56"
                placeholder="Mekanisa"
              />
            </div>
            <div class="flex flex-col gap-3">
              <span class="text-xs">Subcity:</span>
              <input
                type="text"
                class="h-8 pl-2 border-2 rounded-sm w-56"
                placeholder="Laphto"
                id="lname"
                v-model="form.lname"
              />
            </div>
            <div class="flex flex-col gap-3">
              <span class="text-xs">Woreda:</span>
              <input
                type="text"
                class="border-b h-8 pl-2 border-2 rounded-sm w-56"
                placeholder=""
              />
            </div>
          </div>
          <div class="flex flex-row gap-3 pt-4">
            <div class="flex flex-col gap-3">
              <span class="text-xs">House Number:</span>
              <input
                type="text"
                class="border-b h-8 pl-2 border-2 rounded-sm w-56"
                placeholder=""
              />
            </div>
            <div class="flex flex-col gap-3">
              <span class="text-xs">Kebele:</span>
              <input
                type="text"
                class="border-b h-8 pl-2 border-2 rounded-sm w-56"
                placeholder=""
              />
            </div>
          </div>
          <div class="flex flex-row pt-4 gap-3">
            <div class="flex flex-col gap-3">
              <span class="text-xs pt-2">Home Phone Number:</span>
              <input
                type="text"
                class="h-8 pl-2 border-2 rounded-sm w-56"
                placeholder=""
              />
            </div>
            <div class="flex flex-col gap-3">
              <span class="text-xs pt-2">Work Phone Number:</span>
              <input
                type="text"
                class="h-8 pl-2 border-2 rounded-sm w-56"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr class="ml-20 mr-20" />
        <div class="p-10 flex flex-row">
          <div class="font-bold">
            <span>Occupation</span>
          </div>
          <div class="pl-80">
            <div class="flex flex-row gap-3">
              <div class="flex flex-col gap-3">
                <span class="text-xs">Business/Organization:</span>
                <input
                  type="text"
                  id="fname"
                  v-model="form.fname"
                  class="text-base h-8 pl-2 border-2 rounded-sm w-56"
                  placeholder="Mekanisa"
                />
              </div>
              <div class="flex flex-col gap-3">
                <span class="text-xs">Occupation/Position:</span>
                <input
                  type="text"
                  class="h-8 pl-2 border-2 rounded-sm w-56"
                  placeholder="Laphto"
                  id="lname"
                  v-model="form.lname"
                />
              </div>
            </div>
            <div class="flex flex-row gap-3 pt-4">
              <div class="flex flex-col gap-3">
                <span class="text-xs">Reference Name:</span>
                <input
                  type="text"
                  class="border-b h-8 pl-2 border-2 rounded-sm w-56"
                  placeholder=""
                />
              </div>
              <div class="flex flex-col gap-3">
                <span class="text-xs">Reference Contact Number:</span>
                <input
                  type="text"
                  class="border-b h-8 pl-2 border-2 rounded-sm w-56"
                  placeholder=""
                />
              </div>
            </div>
            <div class="flex flex-row pt-4 gap-3">
              <div class="flex flex-col gap-3">
                <span class="text-xs pt-2">Supportive Document:</span>
                <input
                  type="text"
                  class="h-20 w-96 pl-2 border-2 rounded-sm w-56"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
        <div></div>

        <!-- submit button starts here -->
        <div class="flex justify-end mr-48">
          <button
            type="button"
            class="py-2 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      previewImage: null,
      form: {
        fname: "",
        lname: "",
      },
    };
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
  },
};
</script>
<style scoped>
.imagePreviewWrapper {
  background-size: cover;
}
</style>
