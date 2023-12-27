// breadcrumb.component.ts
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { BreadcrumbService } from "src/app/services/breadcrumb.service";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumb: string[] = [];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const segments = this.createSegments(this.activatedRoute.root);

        this.breadcrumbService.setBreadcrumb(segments);
      });
    // Écoute les changements dans le service de fil d'Ariane
    this.breadcrumbService.breadcrumb$.subscribe((breadcrumb) => {
      this.breadcrumb = breadcrumb;
    });
  }
  public getRouterLink(segment: string): any[] {
    const breadcrumbWithoutHome =
      this.breadcrumbService.getBreadcrumbWithoutHome();
    const index = breadcrumbWithoutHome.indexOf(segment);
    if (segment === "Accueil") {
      return ["/"];
    } else if (index === 0) {
      // Si c'est le premier élément, retourne seulement le segment
      return ["/", segment];
    } else if (index > 0) {
      console.log(this.breadcrumb.slice(0, index + 1));
      // Si l'élément est trouvé, retourne le chemin jusqu'à l'élément inclus
      return ["/", ...breadcrumbWithoutHome.slice(0, index + 1)];
    } else {
      // Si l'élément n'est pas trouvé, ajoute-le au fil d'Ariane existant
      return ["/", ...breadcrumbWithoutHome, segment];
    }
  }

  private createSegments(
    route: ActivatedRoute,
    segments: string[] = []
  ): string[] {
    const currentSegments = route.snapshot.url.map((segment) => segment.path);
    const newSegments = [...segments, ...currentSegments];

    if (route.firstChild) {
      return this.createSegments(route.firstChild, newSegments);
    }

    return newSegments;
  }
}
