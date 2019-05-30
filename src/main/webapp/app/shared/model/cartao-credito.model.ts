export const enum Bandeira {
  MASTER = 'MASTER',
  VISA = 'VISA',
  ELO = 'ELO',
  DINNERS = 'DINNERS'
}

export interface ICartaoCredito {
  id?: number;
  nomeCartao?: string;
  bandeira?: Bandeira;
  numero?: string;
  cvv?: string;
  validade?: string;
}

export class CartaoCredito implements ICartaoCredito {
  constructor(
    public id?: number,
    public nomeCartao?: string,
    public bandeira?: Bandeira,
    public numero?: string,
    public cvv?: string,
    public validade?: string
  ) {}
}
