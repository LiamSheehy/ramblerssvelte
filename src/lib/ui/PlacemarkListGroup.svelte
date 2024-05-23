<script lang="ts">
  import type { Placemark, Trektype } from "$lib/types/placemark-types";

  export let placemarks: Placemark[];

  let placemarksByTrektype: { [key: string]: Placemark[] } = {};
  placemarks.forEach((placemark) => {
    let trektypeTitle = typeof placemark.trektype !== "string" ? placemark.trektype.title : "Unknown";
    if (!placemarksByTrektype[trektypeTitle]) {
      placemarksByTrektype[trektypeTitle] = [];
    }
    placemarksByTrektype[trektypeTitle].push(placemark);
  });
</script>

{#each Object.keys(placemarksByTrektype) as trektypeTitle}
  <div class="box">
    <h2 class="title is-4">{trektypeTitle}</h2>
    <table class="table is-fullwidth is-striped is-hoverable">
      <thead>
        <tr>
          <th class="is-narrow">POI</th>
          <th class="is-narrow">Level</th>
          <th class="is-narrow">Added by</th>
        </tr>
      </thead>
      <tbody>
        {#each placemarksByTrektype[trektypeTitle] as placemark}
          <tr>
            <td>{placemark.poi}</td>
            <td>{placemark.level}</td>
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
  </div>
{/each}
