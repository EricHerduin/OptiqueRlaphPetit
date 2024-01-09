import { Component, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-visual-control",
  templateUrl: "./visual-control.component.html",
  styleUrls: ["./visual-control.component.scss"],
})
export class VisualControlComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Attend que la page soit entièrement chargée
    window.addEventListener("load", () => {
      // Appelle une fonction ou effectue des actions une fois que la page est prête
      this.pageLoaded();
    });
  }

  pageLoaded() {
    // Ton code pour afficher la page une fois qu'elle est prête
    // Par exemple, tu peux ajouter une classe CSS pour afficher le contenu
    document.body.classList.add("page-loaded");
  }
}
