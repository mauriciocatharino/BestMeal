export interface IPessoa {
  id?: number;
  tipo?: string;
  cpf?: string;
  cnpj?: string;
  primeiroNome?: string;
  nomeMeio?: string;
  sobreNome?: string;
  saudacao?: string;
  titulo?: string;
  cep?: string;
  tipoLogradouro?: string;
  nomeLogradouro?: string;
  complemento?: string;
}

export class Pessoa implements IPessoa {
  constructor(
    public id?: number,
    public tipo?: string,
    public cpf?: string,
    public cnpj?: string,
    public primeiroNome?: string,
    public nomeMeio?: string,
    public sobreNome?: string,
    public saudacao?: string,
    public titulo?: string,
    public cep?: string,
    public tipoLogradouro?: string,
    public nomeLogradouro?: string,
    public complemento?: string
  ) {}
}
