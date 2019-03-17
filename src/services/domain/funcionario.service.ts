import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { FuncionarioDTO } from "../../models/funcionario.dto";
import { Observable } from "rxjs/Rx";
import { StorageService } from "../storage.services";

@Injectable()
export class FuncionarioService {

    constructor(
        public http: HttpClient,
        public storage: StorageService) {
    }

    findAll() : Observable<FuncionarioDTO[]> {
        return this.http.get<FuncionarioDTO[]>(`${API_CONFIG.baseUrl}/funcionarios`);
        //return this.http.get<FuncionarioDTO[]>("http://localhost:8080/funcionarios");
    }

    findByLogin(login: string) : Observable<FuncionarioDTO> {

        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization': 'Bearer '+ token});

        return this.http.get<FuncionarioDTO>(
            `${API_CONFIG.baseUrl}/funcionarios/login?value=${login}`,
            {'headers': authHeader});
    }
}