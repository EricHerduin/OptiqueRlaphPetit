import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent {
  nom = new FormControl("", Validators.required);
  prenom = new FormControl("", Validators.required);
  email = new FormControl("", [Validators.required, Validators.email]);
  telephone = new FormControl("", [
    Validators.required,
    Validators.pattern(/^\d{10}$/),
  ]);
  motif = new FormControl("", Validators.required);
  message = new FormControl("");

  // Méthode pour gérer l'envoi du formulaire
  onSubmit() {
    if (
      this.nom.valid &&
      this.prenom.valid &&
      this.email.valid &&
      this.telephone.valid &&
      this.motif.valid
    ) {
      // Envoie le mail à l'adresse spécifiée
      const mailData = {
        nom: this.nom.value,
        prenom: this.prenom.value,
        email: this.email.value,
        telephone: this.telephone.value,
        motif: this.motif.value,
        message: this.message.value,
      };
      // Envoie le mail à l'adresse spécifiée
      console.log("Envoi du mail :", mailData);
      // Ici, tu peux ajouter la logique pour envoyer le mail à l'adresse "contact@htagfacility.fr"
    }
  }
}
