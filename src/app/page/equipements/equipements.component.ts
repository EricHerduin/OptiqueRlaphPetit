import { Component } from "@angular/core";
import { fadeAnimation } from "src/app/animation";

@Component({
  selector: "app-equipements",
  templateUrl: "./equipements.component.html",
  styleUrls: ["./equipements.component.scss"],
  animations: [fadeAnimation],
})
export class EquipementsComponent {}
