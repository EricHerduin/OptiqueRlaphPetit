import { Component, Input } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-iframe-box",
  templateUrl: "./iframe-box.component.html",
  styleUrls: ["./iframe-box.component.scss"],
})
export class IframeBoxComponent {
  @Input() framePath: string = "";
  @Input() frameTitle: string = "";
  @Input() widthFrame: string = "";
  @Input() heightFrame: string = "";
  safeFramePath!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeFramePath = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.framePath
    );
  }
}
