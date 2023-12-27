import { Component, Input } from "@angular/core";

@Component({
  selector: "app-image-box",
  templateUrl: "./image-box.component.html",
  styleUrls: ["./image-box.component.scss"],
})
export class ImageBoxComponent {
  @Input() backgroundColor: string = "#FFFFFF"; // Couleur de fond par défaut est le blanc
  @Input() imagePath: string = "";
}
