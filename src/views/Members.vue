<template>
  <div class="members">
    <!-- <header><h1>Registered Members</h1></header> -->
    <div class="p-8 flex w-full rounded-md text-base">
      <div class="flex w-96 h-16 pl-3 items-center">
        <div class="w-full">
          <span class="text-sm">Search for a Member</span><br />
          <form action="" class="w-full">
            <div
              class="relative flex items-center text-gray-400 focus-within:text-gray-600 pt-2"
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
                class="w-full h-8 text-base pr-3 pl-10 border-none rounded-2xl text-black ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 font-semibold"
                autocomplete="off"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
      </div>

      <div class="w-80 h-24 ml-64 bg-blue-800 rounded-3xl opacity-90">
        <span class="text-base font-normal text-white pl-5 pt-3 opacity-70"
          >Actions</span
        >
        <div class="flex pt-5 pl-8">
          <div class="">
            <button
              type="button"
              class="py-2 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Add New Member
            </button>
          </div>
          <button
            type="button"
            class="py-2 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Print
          </button>
        </div>
      </div>
    </div>
    <!-- Table component starts here -->
    <div class="">
      <div class="p-8 border-b border-gray-200">
        <table class="" id="dataTable">
          <thead class="bg-blue-800 rounded-md">
            <tr>
              <th class="px-6 py-2 text-base text-white">Regcord No</th>
              <th class="px-6 py-2 text-base text-white">ID</th>
              <th class="px-6 py-2 text-base text-white">Name</th>
              <th class="px-6 py-2 text-base text-white">Membership Type</th>
              <th class="px-6 py-2 text-base text-white">Moblile Phone No</th>
              <th class="px-6 py-2 text-base text-white">Email</th>
              <th class="px-6 py-2 text-base text-white">Registarted Date</th>
              <th class="px-6 py-2 text-base text-white">Channel Source</th>
              <th class="px-6 py-2 text-base text-white">Edit</th>
              <th class="px-6 py-2 text-base text-white">Delete</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-300">
            <tr class="text-center whitespace-nowrap">
              <td class="px-6 py-4 text-sm text-gray-500">1</td>
              <td class="px-6 py-4">
                <div class="text-sm text-gray-900">Jon doe</div>
              </td>
              <td class="px-6 py-4">
                <div class="text-sm text-gray-500">jhondoe@example.com</div>
              </td>
              <td class="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
              <td class="px-6 py-4">
                <a href="#" class="inline-block text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </a>
              </td>
              <td class="px-6 py-4">
                <a href="#" class="inline-block text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </a>
              </td>
            </tr>
            <tr class="text-center whitespace-nowrap">
              <td class="px-6 py-4 text-sm text-gray-500">2</td>
              <td class="px-6 py-4">
                <div class="text-sm text-gray-900">Jon doe 2</div>
              </td>
              <td class="px-6 py-4">
                <div class="text-sm text-gray-500">jhondoe2@example.com</div>
              </td>
              <td class="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
              <td class="px-6 py-4">
                <a href="#" class="inline-block text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </a>
              </td>
              <td class="px-6 py-4">
                <a href="#" class="inline-block text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </a>
              </td>
            </tr>
            <tr class="text-center whitespace-nowrap">
              <td class="px-6 py-4 text-sm text-gray-500">3</td>
              <td class="px-6 py-4">
                <div class="text-sm text-gray-900">Jon doe 3</div>
              </td>
              <td class="px-6 py-4">
                <div class="text-sm text-gray-500">jhondoe3@example.com</div>
              </td>
              <td class="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
              <td class="px-6 py-4">
                <a href="#" class="inline-block text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </a>
              </td>
              <td class="px-6 py-4">
                <a href="#" class="inline-block text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
