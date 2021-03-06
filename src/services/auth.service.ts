import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.services";
import { JwtHelper } from 'angular2-jwt';
import { PassadorService } from "./domain/passador.service";

@Injectable()
export class AuthService {

    jwtHelper: JwtHelper = new JwtHelper();

    constructor(public http: HttpClient, 
                public storage: StorageService,
                public passadorService: PassadorService
                ) {

    }

    authenticate(creds : CredenciaisDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`,
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    refreshToken() {
        return this.http.post(
            `${API_CONFIG.baseUrl}/auth/refresh_token`,
            {},
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    sucessfulLogin(authorizationValue : string) {
        let tok = authorizationValue.substring(7);
        let user: LocalUser = {
           token: tok,
           login: this.jwtHelper.decodeToken(tok).sub
        }
        this.storage.setLocalUser(user);
        this.passadorService.createOrClearPassador();
    }

    logout() {
        this.storage.setLocalUser(null);
    }
}