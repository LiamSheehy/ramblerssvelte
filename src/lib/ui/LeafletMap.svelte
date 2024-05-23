<script lang="ts">
  import "leaflet/dist/leaflet.css";
  import { onMount } from "svelte";
  import type { Control, Map as LeafletMap, LayerGroup } from "leaflet";
  import type { Trektype, Placemark } from "$lib/types/placemark-types";
  import { browser } from "$app/environment";

  export let id = "home-map-id";
  export let height = 80;
  export let location = { lat: 53.2734, lng: -7.7783203 };
  export let zoom = 8;
  export let minZoom = 7;
  export let activeLayer = "Terrain";
  export let trektypes: Trektype[] = [];
  export let placemarks: Placemark[] = [];

  let imap: LeafletMap;
  let control: Control.Layers;
  let overlays: Record<string, LayerGroup> = {};
  let baseLayers: any;

  onMount(async () => {
    if (browser) {
      const leaflet = await import("leaflet");
      baseLayers = {
        Terrain: leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 17,
          attribution: 'Map data: © OpenStreetMap contributors'
        })
      };
      let defaultLayer = baseLayers[activeLayer];
      imap = leaflet.map(id, {
        center: [location.lat, location.lng],
        zoom: zoom,
        minZoom: minZoom,
        layers: [defaultLayer]
      });
      control = leaflet.control.layers(baseLayers).addTo(imap);

      trektypes.forEach(trektype => {
        overlays[trektype._id] = leaflet.layerGroup().addTo(imap);
        control.addOverlay(overlays[trektype._id], trektype.title);
      });

      placemarks.forEach(placemark => {
        if (placemark.trektype && typeof placemark.trektype !== 'string') {
          const marker = leaflet.marker([placemark.lat, placemark.lng]);
          marker.bindPopup(`${placemark.trektype.title}: ${placemark.poi}`);
          overlays[placemark.trektype._id].addLayer(marker);
        }
      });
    }
  });

export function updateMarkers(selectedTrektypeId: string) {
  if (selectedTrektypeId === 'all') {
    Object.values(overlays).forEach(overlay => overlay.addTo(imap));
  } else {
    Object.keys(overlays).forEach(trektypeId => {
      const overlay = overlays[trektypeId];
      if (trektypeId === selectedTrektypeId) {
        overlay.addTo(imap);
      } else {
        overlay.remove();
      }
    });
  }
}

</script>

<div {id} class="box" style="height: {height}vh" />
