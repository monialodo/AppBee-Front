import { ApiariosService } from './../services/apiarios.service';
import { Component, OnInit } from '@angular/core';
import { Apiario } from '../model/apiario';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-apiarios',
  templateUrl: './apiarios.component.html',
  styleUrls: ['./apiarios.component.scss']
})
export class ApiarioComponent implements OnInit {

  apiarios$: Observable <Apiario[]>

  displayedColumns: string[] = [ 'Nome','Nome colmeia', 'Especie Colmeia', 'Florada Colmeia', 'Estado', 'Ações'];

  constructor(
    private apiariosService: ApiariosService,
    public dialog: MatDialog
    ) {

    this.apiarios$ = this.apiariosService.list()
    .pipe(
      catchError(err => {
        this.onError('Erro ao carregar apiarios');
        return of ([])
      })
    )
  }


  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }


  ngOnInit(): void {
  }
}

