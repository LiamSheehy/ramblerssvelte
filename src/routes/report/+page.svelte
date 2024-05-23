<script lang="ts">
  import { subTitle } from "$lib/stores";
  import Card from "$lib/ui/Card.svelte";
  import PlacemarkList from "$lib/ui/PlacemarkListGroup.svelte";

  export let data: any;

  subTitle.set("List of current treks");
</script>

<Card title="Placemarks">
  <PlacemarkList placemarks={data.placemarks} />
</Card>