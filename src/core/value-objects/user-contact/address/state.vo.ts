// Representa a sigla do estado brasileiro, valida se é uma das 27 oficiais
const VALID_STATES = [
  'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'
];

export default class State {
  private readonly value: string;

  // [constructor] → inicializa e valida a sigla do estado
  constructor(value: string) {
    // [Valida se a sigla tem exatamente 2 letras maiúsculas]
    if (!/^[A-Z]{2}$/.test(value)) {
      throw new Error('State deve ter exatamente 2 letras maiúsculas');
    }
    // [Valida se a sigla está entre as 27 oficiais]
    if (!VALID_STATES.includes(value)) {
      throw new Error('State deve ser uma sigla oficial de estado brasileiro');
    }
    this.value = value;
  }

  // [toString] → retorna a sigla
  toString(): string {
    return this.value;
  }

  // [valueOf] → retorna a sigla
  valueOf(): string {
    return this.value;
  }
}