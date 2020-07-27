<template>
  <div id="app" class="card">
    <div class="card-header">
      <ul class="nav nav-pills card-header-pills float-xs-left">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Add' }" class="nav-link">Tambah</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'List' }" class="nav-link">Tampil</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Api' }" class="nav-link">Api</router-link>
        </li>
      </ul>
    </div>
    <div class="gap">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="css">
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>

<style>
  .gap {
    margin-top: 50px;
    margin-bottom: 50px;
  }
</style>

<script>

export default {
  name: 'App'
}
</script>