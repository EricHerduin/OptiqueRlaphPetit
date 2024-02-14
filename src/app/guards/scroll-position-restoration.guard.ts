import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { ScrollPositionService } from "../services/scroll-position.service";

@Injectable({
  providedIn: "root",
})
export class ScrollPositionRestorationGuard implements CanActivate {
  constructor(
    private router: Router,
    private scrollPositionService: ScrollPositionService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Enregistrez la position de défilement actuelle avant de naviguer vers une nouvelle route
    const scrollPosition: [number, number] = [window.scrollX, window.scrollY];
    this.scrollPositionService.saveScrollPosition(state.url, scrollPosition);
    return true;
  }
}
