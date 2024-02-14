import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ScrollPositionService {
  private scrollPositions: { [url: string]: [number, number] } = {};

  constructor() {}

  public saveScrollPosition(url: string, position: [number, number]): void {
    this.scrollPositions[url] = position;
  }

  public getScrollPosition(url: string): [number, number] {
    return this.scrollPositions[url] || [0, 0];
  }
}
