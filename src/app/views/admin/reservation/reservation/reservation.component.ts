import { Component } from '@angular/core';
import { Reservation } from '../../../../Model/Reservation';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  reservations: Reservation[] = [];
  constructor( private serviceReservation:ReservationService) { }

  
  ngOnInit(): void {
    console.log("Get List of Reservation ");    
    this.getAllReservations();
  }

  getAllReservations(){
      this.serviceReservation.getAllReservations().subscribe((data : Reservation[])=>{          
      this.reservations = data;
      console.log("Object reservation ",this.reservations);
    })
  }

  nonValide(id){
  if (confirm("Voulez vous vraiment non valider  ce reservation ?")) {
    this.serviceReservation.nonValide(id).subscribe(() => {
      alert('Modifier effectuée avec succés');
      window.location.reload();
      });
  }}
  ouiValide(id){
    if (confirm("Voulez vous vraiment  valider  ce reservation ?")) {
      this.serviceReservation.ouiValide(id).subscribe(() => {
        alert('Modifier effectuée avec succés');
        window.location.reload();
        });
  }}
}
