// Representa o nome da rua, com validações de tamanho e não vazio
export default class StreetName {
  private readonly value: string;

  // [constructor] → inicializa e valida o nome da rua
  constructor(value: string) {
    // [Valida se o nome não está vazio]
    if (!value || value.trim().length < 3) {
      throw new Error('StreetName deve ter pelo menos 3 caracteres');
    }
    // [Valida se o nome não excede 100 caracteres]
    if (value.length > 100) {
      throw new Error('StreetName deve ter no máximo 100 caracteres');
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