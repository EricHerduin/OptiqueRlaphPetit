// breadcrumb.service.ts
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BreadcrumbService {
  private breadcrumbSubject = new BehaviorSubject<string[]>([]);
  breadcrumb$ = this.breadcrumbSubject.asObservable();

  setBreadcrumb(segments: string[]) {
    this.breadcrumbSubject.next(["Accueil", ...segments]);
  }

  getBreadcrumbWithoutHome(): string[] {
    const breadcrumb = this.breadcrumbSubject.getValue();
    return breadcrumb.slice(1); // Retourne la liste sans le premier élément (Accueil)
  }
}
