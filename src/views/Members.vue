<template>
  <div class="members">
    <header><h1>Registered Members</h1></header>
    <div class="p-10 flex w-full bg-gray-600 rounded-md">
      <div class="flex-none bg-red-800 w-96 h-36">
        <span class="text-base">Search for a Member</span><br />
        <form action="" class="">
          <div
            class="relative flex items-center text-gray-400 focus-within:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-3 h-6 w-6 pointer-events-none absolute"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              class="text-base pr-3 pl-10 border-none rounded-2xl text-black ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 font-semibold"
              autocomplete="off"
              placeholder="Search Member"
            />
          </div>
        </form>

        <BUTTon class="bg-blue-100 border-2 rounded-md">Search</BUTTon>
      </div>
      <div class="ml-14 justify-end bg-blue-900 h-35 flex-none w-auto">
        <BUTTon class="bg-blue-100 border-2 rounded-md">Add New Member</BUTTon>
        <BUTTon class="bg-blue-100 border-2 rounded-md"
          >View/Edit Profile</BUTTon
        >
        <BUTTon class="bg-blue-100 border-2 rounded-md">Print</BUTTon>
      </div>
    </div>
    <div class="p-10">
      <table class="shadow-lg bg-white">
        <tr>
          <th class="bg-blue-100 border text-left px-8 py-4">Company</th>
          <th class="bg-blue-100 border text-left px-8 py-4">Contact</th>
          <th class="bg-blue-100 border text-left px-8 py-4">Country</th>
        </tr>
        <tr>
          <td class="border px-8 py-4">Alfreds Futterkiste</td>
          <td class="border px-8 py-4">Dante Sparks</td>
          <td class="border px-8 py-4">Italy</td>
        </tr>
        <tr>
          <td class="border px-8 py-4">Centro comercial Moctezuma</td>
          <td class="border px-8 py-4">Neal Garrison</td>
          <td class="border px-8 py-4">Spain</td>
        </tr>
        <tr>
          <td class="border px-8 py-4">Ernst Handel</td>
          <td class="border px-8 py-4">Maggie O'Neill</td>
          <td class="border px-8 py-4">Austria</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>
