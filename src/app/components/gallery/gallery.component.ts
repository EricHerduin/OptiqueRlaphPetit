import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MarqueService } from "src/app/services/marques.service";

@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [],
  templateUrl: "./gallery.component.html",
  styleUrl: "./gallery.component.scss",
})
export class GalleryComponent implements OnInit {
  images: string[] = [];
  nomMarque: string = "";
  constructor(
    private getMarqueService: MarqueService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.nomMarque = params["nomMarque"];

      const marqueData = this.getMarqueService
        .getMarqueData(this.nomMarque)
        .subscribe((data) => {});
    });
  }
}
