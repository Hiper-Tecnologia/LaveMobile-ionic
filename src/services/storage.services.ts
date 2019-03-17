import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../config/storage_keys.config";
import { LocalUser } from "../models/local_user";
import { Passador } from "../models/passador";

@Injectable()
export class StorageService {

    getLocalUser() : LocalUser {
        let usr = localStorage.getItem(STORAGE_KEYS.localUser);
        if (usr == null) {
            return null;
        }
        else {
            return JSON.parse(usr);
        }
    }   
    
    setLocalUser(obj : LocalUser) {

        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }
        else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }

    getPassador() : Passador {
        let str = localStorage.getItem(STORAGE_KEYS.cart);
        if (str != null) {
            return JSON.parse(str);
        }
        else {
            return null;
        }
    }

    setPassador(obj : Passador) {
        if (obj != null) {
            localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(obj));
        }
        else {
            localStorage.removeItem(STORAGE_KEYS.cart);
        }
    }

}