export interface FuncionarioDTO {
    id: string;
    nome?: string;
    funcao?: string;
    data_admissao?: Date;
    data_demissao?: Date;
    ativo?: string;
    data_aniversario?: Date;
    telefone?: string;
    observacao?: string;
    operador_terminal?: string;
    gerente_etapa?: string;
    gerente_etapa2?: string;
    responsavel?: string;
    auxiliar?: string;
    func_senha?: string;
    fLogin?: string;
}