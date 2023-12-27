import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  animations: [
    trigger("barsAnimation", [
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
      transition("bars <=> cross", animate("0.4s ease")),
    ]),
    trigger("menuAnimation", [
      state(
        "open",
        style({
          opacity: 1,
        })
      ),
      state(
        "close",
        style({
          opacity: 0,
        })
      ),
      transition("open <=> close", animate("1s ease")),
    ]),
  ],
})
export class MenuComponent {
  isMenuVisible: boolean = false;
  menuStateBars: string = "bars";
  menuStateValue: string = "☰";
  menuStateVisibility: string = "close";

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    this.menuStateBars = this.isMenuVisible ? "cross" : "bars";
    this.menuStateVisibility = this.isMenuVisible ? "open" : "close";
    this.menuStateValue = this.isMenuVisible ? "×" : "☰";
  }
  closeMenu() {
    this.isMenuVisible = false;
    this.menuStateBars = "bars";
    this.menuStateValue = "☰";
    this.menuStateVisibility = "close";
  }
}
