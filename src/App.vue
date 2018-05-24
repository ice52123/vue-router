<template>
  <div id="app" style="height: 100%;">
    <router-view/>
  </div>
</template>

<script>
	export default {
	  name: 'App',
	}
</script>

<style>
	body{
		margin: 0 !important;
		padding: 0 !important;
	}
	.sidebar li{
		margin: 0 auto;
		text-align: center;
		padding: 0  !important;
	}
	.el-menu-item{
		height: 82.8px;
		line-height: 30px;
	}
	.el-menu-item [class^=el-icon-]{
		display: block;
		margin: 0 auto;
		margin-right: auto;
		width: auto;
		font-size: 40px;
		padding-top: 5px;
	}
</style>
