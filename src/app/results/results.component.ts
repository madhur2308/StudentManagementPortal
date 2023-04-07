import { Component } from '@angular/core';
import {ResultService} from "../http-services/ResultService";
import {Result} from "./result.model";
import {SnackBarService} from "../util/SnackBarService";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  results: Result[] = []
  constructor(private _resultService: ResultService,
              private _snackBarService: SnackBarService) {}

  ngOnInit() {
    this.getAllResults();
  }
  onRefresh() {
    this.getAllResults();
  }

  getAllResults() {
    this._resultService.getAllResults()
      .subscribe(
        response => {
          console.log(response);
          this.results = response
          this._snackBarService.openSnackBar('Loaded All Results', 'success')
        },
        err => this._snackBarService.openSnackBar('Failed to load results', 'failed')
      );
  }

}
