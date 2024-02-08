import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MarqueService } from "src/app/services/marques.service";
import { Marque } from "src/app/Interfaces/marque.interface";

@Component({
  selector: "app-collection",
  templateUrl: "./collection.component.html",
  styleUrls: ["./collection.component.scss"],
})
export class CollectionComponent implements OnInit {
  marqueData: any;
  imageList: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private marqueService: MarqueService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const nomMarque = params.get("nomMarque");
      if (nomMarque) {
        this.marqueService.getMarqueData(nomMarque).subscribe((data) => {
          this.marqueData = data;
          this.imageList = this.marqueData.adressesURL;
        });
      }
    });
  }
}
