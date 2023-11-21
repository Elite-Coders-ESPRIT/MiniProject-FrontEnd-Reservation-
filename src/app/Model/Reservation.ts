import { Chambre } from "./Chambre";
import { Etudiant } from "./Etudiant";

export class Reservation{
    idReservation:number;
    anneeUniversitaire:Date;
    estValide:boolean;
    chambre_reservations:Chambre[];
    etudiant_reservations:Etudiant[];
}