<script lang="ts">
    import About from "$lib/ui/About.svelte";
    import Card from "$lib/ui/Card.svelte";
    import { subTitle } from "$lib/stores";

    subTitle.set("About the site");
  </script>
  
  <About />