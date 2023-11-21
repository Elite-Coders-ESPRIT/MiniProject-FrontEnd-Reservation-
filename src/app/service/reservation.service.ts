import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../Model/Reservation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiServer:String='http://localhost:8080/TpEtudeDeCas/reservation/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private _http:HttpClient) { }
  
  getAllReservations():Observable<Reservation[]>{    
    return this._http.get<Reservation[]>(this.apiServer +'getAllReservations', this.httpOptions);
  }
  delete(id:number){
    return this._http.delete<Reservation[]>(this.apiServer +'deleteReservation/'+id, this.httpOptions);
  }
  nonValide(id:number){
      return this._http.put<Reservation[]>(this.apiServer +'nonValide/'+id, this.httpOptions);
  }
  ouiValide(id:number){
      return this._http.put<Reservation[]>(this.apiServer +'ouiValide/'+id, this.httpOptions);
  }
}
