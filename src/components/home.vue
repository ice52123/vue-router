<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <router-view></router-view>
    </div>
</template>

<script>
    import vHead from './header.vue'
    import vSidebar from './sidebar.vue'
    export default {
      components: {
        vHead, vSidebar
      }
    }
</script>
<style>
    html,body,.wrapper{
      height: 100%;
    }
</style>