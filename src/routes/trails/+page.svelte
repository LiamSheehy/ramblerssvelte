<script lang="ts">
  import { subTitle } from "$lib/stores";
  import Card from "$lib/ui/Card.svelte";
  import PlacemarkListFull from "$lib/ui/PlacemarkList.svelte";
  import TrailsForm from "./TrailsForm.svelte";

  export let data: any;

  subTitle.set("Placemarks to Date");
</script>

<div class="columns">
  <div class="column">
    <Card title="Placemarks">
      <PlacemarkListFull placemarks={data.placemarks} />
    </Card>
  </div>
  <div class="column">
    <Card title="Placemarks">
      <TrailsForm trektypeList={data.trektypes} />
    </Card>
  </div>
</div>