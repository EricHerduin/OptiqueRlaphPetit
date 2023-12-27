import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-scrollbutton",
  templateUrl: "./scrollbutton.component.html",
  styleUrls: ["./scrollbutton.component.scss"],
})
export class ScrollbuttonComponent {
  showScrollButton: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    // Affiche le bouton quand l'utilisateur fait défiler vers le bas de la page
    this.showScrollButton = window.scrollY > 200;
  }

  scrollToTop() {
    // Fait défiler la page vers le haut lorsque le bouton est cliqué
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
