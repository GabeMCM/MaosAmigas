// Representa o número da casa/prédio, aceita valores alfanuméricos e não vazios
export default class HouseNumber {
  private readonly value: string;

  // [constructor] → inicializa e valida o número
  constructor(value: string) {
    // [Valida se o número não está vazio]
    if (!value || value.trim().length === 0) {
      throw new Error('HouseNumber não pode ser vazio');
    }
    // [Valida se o valor é alfanumérico]
    if (!/^[a-zA-Z0-9]+$/.test(value.trim())) {
      throw new Error('HouseNumber deve ser alfanumérico');
    }
    this.value = value.trim();
  }

  // [toString] → retorna o valor puro
  toString(): string {
    return this.value;
  }

  // [valueOf] → retorna o valor puro
  valueOf(): string {
    return this.value;
  }
}