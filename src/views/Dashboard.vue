<template>
  <div>
    <header><h1>Dashboard</h1></header>
    <!-- Cards containing the major displayable numbers -->
    <div class="flex pl-20 pt-10 gap-x-14 gap-y-5 grid-cols-3">
      <div
        class="flex flex-col bg-yellow-400 w-96 h-60 rounded-md drop-shadow-lg p-8 shadow-xl"
      >
        <div class="flex flex-row h-56">
          <div class="flex flex-col">
            <span class="font-black text-5xl">178</span>
            <span class="pt-4 text-sm font-normal"
              >Total Registarted Memebers</span
            >
          </div>
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-28 w-28 ml-10 opacity-20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
              />
            </svg>
          </div>
        </div>
        <div class="text-base pt-10">
          <span class="font-bold text-lg">2138 </span>
          <span class="ml-1 font-normal">Members Remain</span>
        </div>
      </div>
      <!-- second card -->
      <div
        class="flex flex-col bg-yellow-400 w-96 h-60 rounded-md drop-shadow-lg p-8 shadow-xl"
      >
        <div class="flex flex-row h-56">
          <div class="flex flex-col">
            <span class="font-black text-5xl">178</span>
            <span class="pt-4 text-sm font-normal"
              >Total Rewarded <br />
              Memebers</span
            >
          </div>
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-28 w-28 ml-28 opacity-20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div class="text-base pt-10">
          <span class="font-bold text-lg">2138 </span>
          <span class="ml-1 font-normal">Members Unrewarded</span>
        </div>
      </div>
      <div
        class="flex flex-col bg-yellow-400 w-96 h-60 rounded-md drop-shadow-lg p-8 shadow-xl"
      >
        <div class="flex flex-row h-56">
          <div class="flex flex-col">
            <span class="font-black text-5xl">178</span>
            <span class="pt-4 text-sm font-normal"
              >Total Registarted Memebers</span
            >
          </div>
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-28 w-28 ml-10 opacity-20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
              />
            </svg>
          </div>
        </div>
        <div class="text-base pt-10">
          <span class="font-bold text-lg">2138 </span>
          <span class="ml-1 font-normal">Members Remain</span>
        </div>
      </div>
    </div>
    <!-- Normal small detail cards will be listed under the cards below -->
    <div class="pt-10 pl-20">
      <div
        class="flex flex-col text-base bg-blue-50 w-96 h-auto shadow-lg rounded-md"
      >
        <div>
          <ChartDoughnut />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ChartDoughnut from "../components/ChartDoughnut.vue";
</script>
