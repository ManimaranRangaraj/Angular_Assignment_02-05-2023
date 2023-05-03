import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicestudentService {

  private url: string = 'assets/student.json';
  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<any>{
    return this.httpClient.get(this.url);
  }
}
