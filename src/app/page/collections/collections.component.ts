import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MarqueService } from "src/app/services/marques.service";
import { Marque } from "src/app/Interfaces/marque.interface";

@Component({
  selector: "app-collections",
  templateUrl: "./collections.component.html",
  styleUrls: ["./collections.component.scss"],
})
export class CollectionsComponent implements OnInit {
  marques: Marque[] = [];
  isMarquesVisible: boolean = true;
  marqueSelected: string = "";

  constructor(
    private marqueService: MarqueService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const paramsMarque = params.get("nomMarque");
      if (paramsMarque) {
        this.isMarquesVisible = false;
      }
    });

    this.marqueService.getAllMarques().subscribe((marques) => {
      this.marques = marques;
    });
  }
}
