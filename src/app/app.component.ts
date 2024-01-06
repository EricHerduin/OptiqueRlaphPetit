import { Component, OnInit } from "@angular/core";
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
    private canonicalService: CanonicalService,
    private dialog: MatDialog
  ) {}
  title = "HTAG Facility";

  footerUrl = "https://www.optique-ralphpetit.com";
  footerLink = "www.optique-ralphpetit.com";
  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
  }
}
