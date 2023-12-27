import { Component, HostListener } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  animations: [
    trigger("menuAnimation", [
      state(
        "bars",
        style({
          opacity: 1,
        })
      ),
      state(
        "cross",
        style({
          opacity: 0.5,
        })
      ),
      transition("bars <=> cross", animate("0.8s ease")),
    ]),
  ],
})
export class HeaderComponent {
  title = "HTAG Facility";
  isMenuVisible: boolean = false;
  menuStateBars: string = "bars";
  menuStateValue: string = "☰";
  logoScale: number = 1;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    this.menuStateBars = this.isMenuVisible ? "cross" : "bars";
    this.menuStateValue = this.isMenuVisible ? "×" : "☰";
  }
  isTransparent = false;

  @HostListener("window:scroll", [])
  onScroll() {
    // Utilise window.scrollY au lieu de pageYOffset
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isTransparent = scrollPosition >= 230;
    this.logoScale = this.isTransparent ? 0.3 : 1;
  }
}
