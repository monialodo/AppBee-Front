import { Apiario } from './../model/apiario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiariosService {

  private readonly API = 'http://localhost:8083/apiario/listar';
  // private readonly API = 'assets/apiarios.json';


  constructor(private hhtpClient: HttpClient) { }

  list ()  {
    return this.hhtpClient.get<Apiario[]>(this.API).pipe(
      first(),
      tap(
        apiarios => console.log(apiarios)
      )
    );
}
}
