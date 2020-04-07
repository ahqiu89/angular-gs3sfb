import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class WorkflowService {
  constructor(private http: HttpClient) {}

  //private _url: string = "assets/workflow.json";
  private _url: string = "assets/employee.json";

  getWorkflows(): Observable<any> {
    return this.http.get<any[]>(this._url);
  }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
}

export interface IEmployee {
  id: number;
  name: string;
}
