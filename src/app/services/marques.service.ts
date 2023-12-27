import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Data } from "../Interfaces/data.interface";
import { Marque } from "../Interfaces/marque.interface";

@Injectable({
  providedIn: "root",
})
export class MarqueService {
  private dataUrl = "assets/data/data.json";

  constructor(private http: HttpClient) {}

  getAllMarques(): Observable<any[]> {
    return this.http.get<Data>(this.dataUrl).pipe(map((data) => data.marques));
  }
  getMarqueData(nomMarque: string): Observable<Marque | undefined> {
    return this.http.get<Data>(this.dataUrl).pipe(
      map((data) => {
        const marqueTrouvee = data.marques.find(
          (marque) => marque.nom === nomMarque
        );
        return marqueTrouvee ? marqueTrouvee : undefined;
      })
    );
  }
}
