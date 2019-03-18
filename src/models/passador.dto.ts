import { passadorItem } from "./passador-item";

export interface PassadorDTO {
    id? : string;
    itens?: passadorItem[];
    finalizacao?: Date;
    id_piloto_mestre?: string;
    finalizado?: string;
    operador?: string;
}