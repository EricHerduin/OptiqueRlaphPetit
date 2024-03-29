import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./page/homepage/homepage.component";
import { CollectionsComponent } from "./page/collections/collections.component";
import { ServiceComponent } from "./page/service/service.component";
import { AboutComponent } from "./page/about/about.component";

import { ContactComponent } from "./page/contact/contact.component";
import { MailingComponent } from "./page/contact/mailing/mailing.component";
import { MappingComponent } from "./page/contact/mapping/mapping.component";
import { WebsiteComponent } from "./page/contact/website/website.component";
import { NotFoundComponent } from "./page/not-found/not-found.component";
import { VisualControlComponent } from "./page/visual-control/visual-control.component";
import { CollectionComponent } from "./components/collection/collection.component";
import { BoutiqueComponent } from "./page/boutique/boutique.component";
import { EquipementsComponent } from "./page/equipements/equipements.component";
import { LentillesComponent } from "./page/equipements/equipement/lentilles.component";
import { ScrollPositionRestorationGuard } from "./guards/scroll-position-restoration.guard";
import { DomicileComponent } from "./page/domicile/domicile.component";
export const routes: Routes = [
  { path: "Accueil", redirectTo: "", pathMatch: "full" },

  {
    path: "",
    component: HomepageComponent,
    canActivate: [ScrollPositionRestorationGuard],
    data: {
      loc: "/",
      lastmod: "2023-10-09",
      changefreq: "daily",
      priority: "1.0",
    },
  },
  {
    path: "a_propos",
    component: AboutComponent,
    canActivate: [ScrollPositionRestorationGuard],
    data: {
      loc: "/a_propos",
      lastmod: "2023-10-09",
      changefreq: "daily",
      priority: "1.0",
    },
  },
  {
    path: "controle_visuel",
    component: VisualControlComponent,
    canActivate: [ScrollPositionRestorationGuard],
    data: {
      loc: "/controle_visuel",
      lastmod: "2023-10-09",
      changefreq: "daily",
      priority: "1.0",
    },
  },
  {
    path: "equipements",

    component: EquipementsComponent,
    canActivate: [ScrollPositionRestorationGuard],
    data: {
      loc: "/equipements",
      lastmod: "2023-10-09",
      changefreq: "daily",
      priority: "1.0",
    },
    children: [
      {
        path: "nos_collections",
        component: CollectionsComponent,
        canActivate: [ScrollPositionRestorationGuard],
        data: {
          loc: "/nos_collections",
          lastmod: "2023-10-09",
          changefreq: "daily",
          priority: "1.0",
        },
        // children: [
        //   {
        //     path: ":nomMarque",
        //     component: CollectionComponent,
        //     data: {
        //       loc: "/nos_collections/:nomMarque",
        //       lastmod: "2023-10-09",
        //       changefreq: "daily",
        //       priority: "1.0",
        //     },
        //   },
        // ],
      },
      {
        path: "nos_lentilles",
        component: LentillesComponent,
        canActivate: [ScrollPositionRestorationGuard],
        data: {
          loc: "/nos_lentilles",
          lastmod: "2023-10-09",
          changefreq: "daily",
          priority: "1.0",
        },
      },
    ],
  },

  {
    path: "service",
    component: ServiceComponent,
    canActivate: [ScrollPositionRestorationGuard],
    data: {
      loc: "/service",
      lastmod: "2023-10-09",
      changefreq: "weekly",
      priority: "1.0",
    },
  },
  {
    path: "service/service-a-domicile",
    component: DomicileComponent,
    canActivate: [ScrollPositionRestorationGuard],
    data: {
      loc: "/service/service-a-domicile",
      lastmod: "2023-10-09",
      changefreq: "weekly",
      priority: "1.0",
    },
  },
  {
    path: "notre_boutique",
    component: BoutiqueComponent,
    canActivate: [ScrollPositionRestorationGuard],
    data: {
      loc: "/notre_boutique",
      lastmod: "2023-10-09",
      changefreq: "weekly",
      priority: "1.0",
    },
  },
  {
    path: "equipements/nos_collections/:nomMarque",
    component: CollectionComponent,
    canActivate: [ScrollPositionRestorationGuard],
    data: {
      loc: "/notre_boutique",
      lastmod: "2023-10-09",
      changefreq: "weekly",
      priority: "1.0",
    },
  },
  {
    path: "contact",
    component: ContactComponent,
    canActivate: [ScrollPositionRestorationGuard],
    data: {
      loc: "/contact",
      lastmod: "2023-10-09",
      changefreq: "daily",
      priority: "1.0",
    },
    children: [
      {
        path: "",
        component: MailingComponent,
        canActivate: [ScrollPositionRestorationGuard],
        data: {
          loc: "/contact/",
          lastmod: "2023-10-09",
          changefreq: "daily",
          priority: "1.0",
        },
      },
      {
        path: "mailing",
        component: MailingComponent,
        canActivate: [ScrollPositionRestorationGuard],
        data: {
          loc: "/contact/mailing",
          lastmod: "2023-10-09",
          changefreq: "daily",
          priority: "1.0",
        },
      },
      {
        path: "mapping",
        component: MappingComponent,
        canActivate: [ScrollPositionRestorationGuard],
        data: {
          loc: "/contact/mapping",
          lastmod: "2023-10-09",
          changefreq: "daily",
          priority: "1.0",
        },
      },
      {
        path: "website",
        component: WebsiteComponent,
        canActivate: [ScrollPositionRestorationGuard],
        data: {
          loc: "/contact/website",
          lastmod: "2023-10-09",
          changefreq: "daily",
          priority: "1.0",
        },
      },
    ],
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
