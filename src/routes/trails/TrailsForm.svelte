<script lang="ts">
  import { enhance } from "$app/forms";
  import type { Trektype } from "$lib/types/placemark-types";
  import Coordinates from "$lib/ui/Coordinates.svelte";

  export let trektypeList: Trektype[] = [];

  let lat = 52.160858;
  let lng = -7.15242;
  let difficultyLevel = ["beginner", "intermediate", "expert"];
  let message = "Build the Journey";
</script>

<form method="POST" action="?/trails" use:enhance>
  <div class="field">
    <label class="label" for="poi">Enter Trail:</label>
    <input class="input" id="poi" name="poi" type="string" />
  </div>
  <div class="field">
    <div class="control">
      <label class="label" for="poi">Select Level of experience required:</label>
      {#each difficultyLevel as level}
        <input class="radio" type="radio" value={level} name="level" /> {level}
      {/each}
    </div>
  </div>
  <div class="field">
    <label class="label" for="poi">Select Trektype:</label>
    <div class="select">
      <select name="trektype">
        {#each trektypeList as trektype}
          <option value={trektype._id}>{trektype.title}</option>
        {/each}
      </select>
    </div>
  </div>
  <Coordinates bind:lat bind:lng />
  <div class="field">
    <div class="control">
      <button class="button is-success is-fullwidth">Please Add a Trail</button>
    </div>
  </div>
</form>
<div class="box mt-4">
  <div class="content has-text-centered">
    {message}
  </div>
</div>