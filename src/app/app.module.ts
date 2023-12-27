import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule } from "@angular/forms";

import { HomepageComponent } from "./page/homepage/homepage.component";
import { ServiceComponent } from "./page/service/service.component";
import { VisualControlComponent } from "./page/visual-control/visual-control.component";
import { CollectionsComponent } from "./page/collections/collections.component";
import { NotFoundComponent } from "./page/not-found/not-found.component";
import { AboutComponent } from "./page/about/about.component";
import { ContactComponent } from "./page/contact/contact.component";
import { MailingComponent } from "./page/contact/mailing/mailing.component";
import { MappingComponent } from "./page/contact/mapping/mapping.component";
import { WebsiteComponent } from "./page/contact/website/website.component";

import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { MenuComponent } from "./components/menu/menu.component";
import { TitleContainerComponent } from "./components/title-container/title-container.component";
import { HomepageMainComponent } from "./components/homepage-main/homepage-main.component";
import { HomepageMain2Component } from "./components/homepage-main2/homepage-main2.component";
import { ScrollbuttonComponent } from "./components/scrollbutton/scrollbutton.component";
import { ImageBoxComponent } from "./components/image-box/image-box.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { CollectionComponent } from "./components/collection/collection.component";
import { BoutiqueComponent } from "./page/boutique/boutique.component";
import { MapLeafletComponent } from "./components/map-leaflet/map-leaflet.component";
import { VideoBoxComponent } from "./components/video-box/video-box.component";
import { IframeBoxComponent } from "./components/iframe-box/iframe-box.component";
import { EquipementsComponent } from "./page/equipements/equipements.component";
import { LentillesComponent } from "./page/equipements/equipement/lentilles.component";
import { CarousselComponent } from './components/caroussel/caroussel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,

    ServiceComponent,
    NotFoundComponent,
    AboutComponent,
    ContactComponent,
    MailingComponent,
    MappingComponent,
    WebsiteComponent,
    SidebarComponent,
    MenuComponent,
    TitleContainerComponent,
    HomepageMainComponent,
    HomepageMain2Component,
    ScrollbuttonComponent,
    VisualControlComponent,
    ImageBoxComponent,
    ContactFormComponent,
    BreadcrumbComponent,
    CollectionsComponent,
    CollectionComponent,
    BoutiqueComponent,
    MapLeafletComponent,
    VideoBoxComponent,
    IframeBoxComponent,
    EquipementsComponent,
    LentillesComponent,
    CarousselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
