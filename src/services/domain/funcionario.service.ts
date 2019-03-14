import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { FuncionarioDTO } from "../../models/funcionario.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class FuncionarioService {

    constructor(public http: HttpClient) {

    }

    findAll() : Observable<FuncionarioDTO[]> {
        return this.http.get<FuncionarioDTO[]>(`${API_CONFIG.baseUrl}/funcionarios`);
        //return this.http.get<FuncionarioDTO[]>("http://localhost:8080/funcionarios");
    }
}