import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as L from "leaflet";

@Component({
  selector: "app-map-leaflet",
  templateUrl: "./map-leaflet.component.html",
  styleUrls: ["./map-leaflet.component.scss"],
})
export class MapLeafletComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    var map = L.map("map").setView([49.508497, 4.366258], 15);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([49.507473, 4.364429])
      .addTo(map)
      .bindPopup("Optique Ralph Petit<br>1 rue Colbert<br>08300 RETHEL")
      .openPopup();
  }
}
