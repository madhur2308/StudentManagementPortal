import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Result, ResultPostRequest} from "../results/result.model";

@Injectable({providedIn: "root"})
export class ResultService {

  constructor(private _http: HttpClient) {
  }

  public addNewResult(newResult: ResultPostRequest) {
    return this._http
      .post<{ success: boolean, data: string }>(
        'http://localhost:1234/scores',
        newResult
      ).pipe(map(response => {
        return response.data;
      }));
  }

  public getAllResults() {
    return this._http
      .get<{ success: boolean, data: Result[] }>(
        'http://localhost:1234/scores',
      )
      .pipe(map(responseData => {
        return responseData.data;
      }));
  }
}
