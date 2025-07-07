// Representa o nome da cidade, com validações de tamanho e não vazio
export default class City {
  private readonly value: string;

  // [constructor] → inicializa e valida o nome da cidade
  constructor(value: string) {
    // [Valida se o nome não está vazio]
    if (!value || value.trim().length < 2) {
      throw new Error('City deve ter pelo menos 2 caracteres');
    }
    // [Valida se o nome não excede 50 caracteres]
    if (value.length > 50) {
      throw new Error('City deve ter no máximo 50 caracteres');
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