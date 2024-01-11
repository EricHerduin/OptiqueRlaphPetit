import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";
import { Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { fadeAnimation } from "./animation";
import { CanonicalService } from "./services/canonical.service";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-root",

  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [fadeAnimation],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private canonicalService: CanonicalService,
    private dialog: MatDialog
  ) {}
  title = "HTAG Facility";

  footerUrl = "https://www.optique-ralphpetit.com";
  footerLink = "www.optique-ralphpetit.com";
  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    if (isPlatformBrowser(this.platformId)) {
      const navMain = document.getElementById("navbarCollapse");
      if (navMain) {
        navMain.onclick = function onClick() {
          if (navMain) {
            navMain.classList.remove("show");
          }
        };
      }
    }
  }
}
