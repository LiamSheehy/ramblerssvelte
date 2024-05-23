<script lang="ts">
  import type { Placemark } from "$lib/types/placemark-types";

  export let placemarks: Placemark[];
</script>

<table class="table is-fullwidth">
  <thead>
    <th>Trektype</th>
    <th>POI</th>
    <th>Level</th>
    <th>Added by</th>
  </thead>
  <tbody>
    {#each placemarks as placemark}
      <tr>
        <td>
          {#if typeof placemark.trektype !== "string"}
            {placemark.trektype.title}
          {/if}
        </td>
        <td>
          {placemark.poi}
        </td>
        <td>
          {placemark.level}
        </td>
        <td>
          {#if typeof placemark.member !== "string"}
            {placemark.member.lastName}, {placemark.member.firstName}
          {:else}
            {placemark.member}
          {/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table> 
