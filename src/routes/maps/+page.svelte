<script lang="ts">
  import { subTitle } from "$lib/stores";
  import type { Placemark, Trektype } from "$lib/types/placemark-types";
  import Card from "$lib/ui/Card.svelte";
  import LeafletMap from "$lib/ui/LeafletMap.svelte";
  import { onMount } from "svelte";

  export let data: { placemarks: Placemark[], trektypes: Trektype[] };
  let map: LeafletMap;

  subTitle.set("Placemarks Locations");

  onMount(() => {
    map.$set({
      placemarks: data.placemarks,
      trektypes: data.trektypes
    });
  });

  // Function to handle change of trektype
  function handleTrektypeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    map.updateMarkers(selectElement.value);
  }
</script>

<Card title="Placemarks Locations">
  <select on:change={handleTrektypeChange}>
    <option value="all">All Trektypes</option>
    {#each data.trektypes as trektype}
      <option value={trektype._id}>{trektype.title}</option>
    {/each}
  </select>
  <LeafletMap height={60} bind:this={map} />
</Card>

