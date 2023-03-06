import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {
  AssessmentsList,
  IGraph,
  UsersList,
} from '../models/assessments.model';

@Injectable({
  providedIn: 'root',
})
export class AssessmentService {
  private API_URL = environment.apiUrl;
  constructor(private http: HttpClient) {}
  public getAssessments(): Observable<AssessmentsList> {
    return this.http.get<AssessmentsList>(`${this.API_URL}/userassessments`);
  }
  public getGraph(id: number): Observable<IGraph> {
    return this.http.get<IGraph>(
      `${this.API_URL}/userassessments/graph/?id=${id}`,
    );
  }
  public getUsers(): Observable<UsersList> {
    return this.http.get<UsersList>(`${this.API_URL}/users`);
  }
}
