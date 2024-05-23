<script lang="ts">
  import { currentSession } from "$lib/stores";
</script>

<nav class="navbar is-full-width">
  <div class="container">
    <div class="navbar-brand">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <span class="brand-logo"> <img src="/rusticramblerslogo1.png" alt="Rustic Ramblers Image" style="width: 200px; height: 120px;" class="mr-9">
    </div>
    <div id="navbarMenu" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item has-text-primary-bold" href="/trails" style="font-size: 20px; font-weight: bold;"> Add Trail </a>
        <a class="navbar-item has-text-primary-bold" href="/report" style="font-size: 20px; font-weight: bold;"> Trek List </a>
        <a class="navbar-item has-text-primary-bold" href="/charts" style="font-size: 20px; font-weight: bold;"> Charts </a>
        <a class="navbar-item has-text-primary-bold" href="/maps" style="font-size: 20px; font-weight: bold;"> Maps </a>
        <a class="navbar-item has-text-primary-bold" href="/about" style="font-size: 20px; font-weight: bold;"> About </a>
        <a data-sveltekit-preload-data="tap" class="navbar-item has-text-danger-40" href="/logout"> Logout [{$currentSession?.name}]</a>
      </div>
      <div></div>
    </div>
  </div>
</nav>