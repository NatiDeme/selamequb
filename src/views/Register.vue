<template>
  <div class="">
    <header><h1>Register New Member</h1></header>

    <div class="p-10 flex">
      <!-- Member uploading image is written here -->
      <div>
        <span class="text-md font-normal">{{ fname }}</span>
        <p class="text-md font-normal">{{ fname }}</p>
        <div
          class="imagePreviewWrapper h-48 w-40 cursor-pointer shadow-lg border-4 rounded-md bg-gray-100"
          :style="{ 'background-image': `url(${previewImage})` }"
          @click="selectImage"
        >
          <!-- <span class="text-base font-normal">Upload Image</span> -->
        </div>

        <form action="">
          <input ref="fileInput" type="file" @input="pickFile" class="hidden" />
        </form>
      </div>
      <!-- the other fields that are needed to be filled are listed here -->
      <div class="flex flex-col ml-40 text-base w-40 font-normal">
        <span class="text-xs">Registration Date:</span>
        <input type="date" class="h-8 w-48 bg-gray-50" placeholder="" />
        <span class="text-xs">Member ID Code:</span>
        <input type="text" class="h-8 w-48 bg-gray-50" placeholder="" />
        <span class="text-xs">POS Source:</span>
        <select v-model="selected" class="h-8 w-48 bg-gray-50">
          <option disabled value="">Please select one</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <span class="text-xs">Membership Type:</span>
        <select v-model="selected" class="h-8 w-48 bg-gray-50">
          <option disabled value="">Please select one</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
    </div>
    <div class="">
      <div class="flex justify-between">
        <span>Applicant Details</span>
        <span class="mr-64">Supportive document</span>
      </div>
      <!-- The forms are listed below -->
      <div class="flex flex-row space-x-60 pl-20 pt-10">
        <div class="font-normal text-base flex flex-col">
          <span class="text-xs">First Name:</span>
          <input
            type="text"
            v-model="fname"
            class="text-base border-b h-8 border-black w-56"
            placeholder="Abebe"
          />
          <span class="text-xs pt-2">Middle Name:</span>
          <input
            type="text"
            class="border-b h-8 border-black w-56"
            placeholder="Balcha"
            v-model="lname"
          />
          <span class="text-xs pt-2">Last Name:</span>
          <input
            type="text"
            class="border-b h-8 border-black w-56"
            placeholder=""
          />
          <span class="text-xs pt-2">Date of Birth:</span>
          <input
            type="date"
            class="border-b h-8 border-black w-56"
            placeholder=""
          />
          <span class="text-xs pt-2">Gender:</span>
          <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <span class="text-xs pt-2">Home phone:</span>
          <input
            type="text"
            class="border-b h-8 border-black w-56"
            placeholder=""
          />
          <span class="text-xs pt-2">Work phone:</span>
          <input
            type="text"
            class="border-b h-8 border-black w-56"
            placeholder=""
          />
          <span class="text-xs pt-2">Mobile phone:</span>
          <input
            type="text"
            class="border-b h-8 border-black w-56"
            placeholder=""
          />
          <span class="text-xs pt-2">Email:</span>
          <input
            type="text"
            class="border-b h-8 border-black w-56"
            placeholder=""
          />
        </div>
        <div class="w-40 font-normal text-base">
          <span class="text-xs">Address City:</span>
          <input
            type="text"
            class="border-b h-8 border-black w-56"
            placeholder=""
          />
          <span class="text-xs pt-2">Sub City:</span>
          <input
            type="text"
            class="border-b h-8 border-black w-56"
            placeholder=""
          />
          <span class="text-xs pt-2">Woreda:</span>
          <input
            type="text"
            class="border-b h-8 border-black w-56"
            placeholder=""
          />
          <span class="text-xs pt-2">House Number:</span>
          <input
            type="text"
            class="border-b h-8 border-black w-56"
            placeholder=""
          />
          <span class="text-xs pt-2">Kebele:</span>
          <input
            type="text"
            class="border-b h-8 border-black w-56"
            placeholder=""
          />
          <span class="text-xs pt-2">Business/Organization:</span>
          <input
            type="text"
            class="border-b h-8 border-black w-56"
            placeholder=""
          />
          <span class="text-xs pt-2">Occupation/Position:</span>
          <input
            type="text"
            class="border-b h-8 border-black w-56"
            placeholder=""
          />
          <span class="text-xs pt-2">Reference Names:</span>
          <input
            type="text"
            class="border-b h-8 border-black w-56"
            placeholder=""
          />
          <span class="text-xs pt-2">Reference Contact Phone:</span>
          <input
            type="text"
            class="border-b h-8 border-black w-56"
            placeholder=""
          />
        </div>

        <!-- document uploading frames are lister here -->
        <div class="flex flex-row space-x-7">
          <div class="">
            <div
              class="imagePreviewWrapper h-52 w-36 cursor-pointer shadow-md border-2 rounded-md bg-gray-100"
            ></div>

            <form action="">
              <input
                ref="fileInput"
                type="file"
                @input="pickFile"
                class="hidden"
              />
            </form>
          </div>
          <div class="">
            <div
              class="imagePreviewWrapper h-52 w-36 cursor-pointer shadow-md border-2 rounded-md bg-gray-100"
            >
              <!-- <span class="text-base font-normal">Upload Image</span> -->
            </div>

            <form action="">
              <input
                ref="fileInput"
                type="file"
                @input="pickFile"
                class="hidden"
              />
            </form>
          </div>
          <div class="">
            <div
              class="imagePreviewWrapper h-52 w-36 cursor-pointer shadow-md border-2 rounded-md bg-gray-100"
            >
              <!-- <span class="text-base font-normal">Upload Image</span> -->
            </div>

            <form action="">
              <input
                ref="fileInput"
                type="file"
                @input="pickFile"
                class="hidden"
              />
            </form>
          </div>
        </div>
      </div>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      previewImage: null,
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
