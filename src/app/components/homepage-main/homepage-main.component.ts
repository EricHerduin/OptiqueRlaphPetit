import { Component, OnInit } from "@angular/core";

interface ImageInfo {
  src: string;
  title: string;
  description: string;
  pageLink: string;
}

@Component({
  selector: "app-homepage-main",
  templateUrl: "./homepage-main.component.html",
  styleUrls: ["./homepage-main.component.scss"],
})
export class HomepageMainComponent implements OnInit {
  cardInfo: ImageInfo[] = [];

  constructor() {
    // Ajoute les informations des images à afficher
    this.cardInfo.push({
      src: "assets/images/01032023-995A2734-Modifier.jpg",
      title: "Qui sommes-nous",
      pageLink: "/a_propos",
      description:
        "Une équipe de professionnel qui vous guidera pour atteindre l’excellence visuelle, le confort absolu",
    });
    this.cardInfo.push({
      src: "assets/images/IMG_0076.jpeg",
      title: "Notre Boutique",
      pageLink: "/notre_boutique",
      description: "Une gamme de montures qui allie style et confort de vision",
    });
    this.cardInfo.push({
      src: "assets/images/IMG_2265.jpeg",
      title: "Contrôle Visuel",
      pageLink: "/controle_visuel",
      description:
        "Un service de contrôle visuel  le plus innovent et unique au monde",
    });
    this.cardInfo.push({
      src: "assets/images/IMG_2267.jpeg",
      title: "Actualité",
      pageLink: "/actualite",
      description:
        "Découvrez les dernières actualités et offres spéciales de notre magasin.",
    });
  }

  ngOnInit(): void {}
}
