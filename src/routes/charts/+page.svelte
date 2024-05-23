<script lang="ts">
  // @ts-ignore
  import Chart from "svelte-frappe-charts";
  import Card from "$lib/ui/Card.svelte";
  import { subTitle } from "$lib/stores";
  export let data: any;

  subTitle.set("Placemarks Data");
</script>

<div class="columns">
  <div class="column">
    <Card title="Placemarks By Level">
      <Chart data={data.byLevel} type="bar" />
    </Card>
  </div>
  <div class="column">
    <Card title="Placemarks By Trektype">
      <Chart data={data.byTrektype} type="pie" />
    </Card>
  </div>
</div>