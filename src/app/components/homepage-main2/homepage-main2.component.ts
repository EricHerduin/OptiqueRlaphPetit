import { Component } from "@angular/core";

interface ImageInfo {
  src: string;
  title: string;
  description: string;
  pageLink: string;
}
@Component({
  selector: "app-homepage-main2",
  templateUrl: "./homepage-main2.component.html",
  styleUrls: ["./homepage-main2.component.scss"],
})
export class HomepageMain2Component {
  cardInfoServices: ImageInfo[] = [];

  constructor() {
    // Ajoute les informations des images à afficher
    this.cardInfoServices.push({
      src: "assets/images/IMG_2265.jpeg",
      title: "Nos Partenaires",
      pageLink: "/nos_partenaires",
      description: "Des verres fabriqués sur mesure pour une vision parfaite.",
    });
    this.cardInfoServices.push({
      src: "assets/images/stable-diffusion-xl3.jpeg",
      title: "Nos Collections",
      pageLink: "/nos_collections",
      description: "Le must du style pour sublimer votre regard.",
    });
    this.cardInfoServices.push({
      src: "assets/images/IMG_2275.jpeg",
      title: "Nos Services",
      pageLink: "/service",
      description: "Notre envie permanente, vous accompagner.",
    });
  }
}
