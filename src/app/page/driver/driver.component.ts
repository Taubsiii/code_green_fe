import { Component } from "@angular/core";
import * as Leaflet from "leaflet";

@Component({
  selector: "codegreen-map",
  templateUrl: "./driver.component.html",
  styleUrls: ["./driver.component.scss"],
})
export class DriverComponent {
  title = "code_green_fe";

  options: Leaflet.MapOptions = {
    layers: getLayers(),
    zoom: 12,
    center: new Leaflet.LatLng(43.530147, 16.488932),
  };
}

export const getLayers = (): Leaflet.Layer[] => {
  return [
    new Leaflet.TileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: "&copy; OpenStreetMap contributors",
      } as Leaflet.TileLayerOptions
    ),
  ] as Leaflet.Layer[];
};
