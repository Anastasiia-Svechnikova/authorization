import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {
  AssessmentsList,
  IGraphApiResponse,
  IGraphData,
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
  public getGraph(id: number): Observable<IGraphData> {
    return this.http
      .get<IGraphApiResponse>(`${this.API_URL}/userassessments/graph/?id=${id}`)
      .pipe(map(({ data }) => data));
  }
  public getUsers(): Observable<UsersList> {
    return this.http.get<UsersList>(`${this.API_URL}/users`);
  }
}
