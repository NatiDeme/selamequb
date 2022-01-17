<template>
  <DoughnutChart :chart-data="data" :options="options" class="" />
</template>

<script setup>
import { ref, computed } from "vue";
import { DoughnutChart } from "vue-chart-3";
import { Chart, DoughnutController, ArcElement } from "chart.js";
Chart.register(DoughnutController, ArcElement);
const dataValues = ref([150, 20]);
const data = computed(() => ({
  labels: ["House Members", "Vehicle Members"],
  datasets: [
    {
      data: dataValues.value,
      backgroundColor: ["#1E40AF", "#FBBF24"],
    },
  ],
}));
const options = ref({
  plugins: {
    title: {
      text: "Members",
    },
  },
});
</script>
