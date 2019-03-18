import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { PassadorDTO } from "../../models/passador.dto";


@Injectable()
export class PedidoService {

    constructor(
        public http: HttpClient
        ) {
    }

    insert(obj: PassadorDTO){
        console.log(obj);
        return this.http.post(
            `${API_CONFIG.baseUrl}/passador`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}
 