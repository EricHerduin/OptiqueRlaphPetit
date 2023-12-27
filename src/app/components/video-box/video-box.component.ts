import { Component, Input } from "@angular/core";

@Component({
  selector: "app-video-box",
  templateUrl: "./video-box.component.html",
  styleUrls: ["./video-box.component.scss"],
})
export class VideoBoxComponent {
  @Input() videoPath: string = "";
  @Input() type: string = "";
}
