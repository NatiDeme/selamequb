<template> 
    <SideNav></SideNav>
    
  <!-- content -->
  <div class="flex-1 p-10 text-2xl items-center font-bold">
    <router-view></router-view>
  </div>
  
</template>

<script>
// @ is an alias to /src

import SideNav from '../components/SideNav.vue'

export default {
  name: 'Home',
  components: {
    SideNav
}
}
</script>

<style>

</style>