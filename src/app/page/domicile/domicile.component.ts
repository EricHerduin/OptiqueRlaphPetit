import { Component, OnInit } from "@angular/core";

interface DomicileInfo {
  title: string;
  description: string;
  subtitle: string;
}
@Component({
  selector: "app-domicile",
  templateUrl: "./domicile.component.html",
  styleUrls: ["./domicile.component.scss"],
})
export class DomicileComponent implements OnInit {
  domicileInfo: DomicileInfo[] = [];

  constructor() {
    this.domicileInfo.push({
      title: "Votre opticien à domicile",
      description:
        "Découvrez notre service sur mesure ! Réservez un rendez-vous, notre opticien se déplace à votre convenance sur le lieu de votre choix.",
      subtitle: "Votre bien-être, notre mission !",
    }),
      this.domicileInfo.push({
        title: "Une approche personnalisée",
        description:
          "Des échanges approfondis, une évaluation précise de vos besoins, notre opticien est là pour vous conseiller au mieux.",
        subtitle: "Votre satisfaction, notre objectif !",
      }),
      this.domicileInfo.push({
        title: "Choix et expertise",
        description:
          "Explorez notre large sélection de montures, discutez des verres, et trouvez la paire parfaite en un seul essai !",
        subtitle: "Votre style, notre expertise !",
      }),
      this.domicileInfo.push({
        title: "Livraison et contrôle qualité",
        description:
          "Nous vous livrons vos lunettes chez vous, nous nous assurons de leur conformité et de votre entière satisfaction.",
        subtitle: "Votre confiance, notre priorité !",
      }),
      this.domicileInfo.push({
        title: "Un service Après-vente fiable",
        description:
          "En cas de besoin, nous restons à votre disposition pour ajustements et réparations.",
        subtitle: "Votre confort, notre engagement !",
      });
  }
  ngOnInit(): void {}
}
