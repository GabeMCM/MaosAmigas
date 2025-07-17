// Representa o bairro/distrito, com validações de tamanho e não vazio
export default class District {
  private readonly value: string;

  // [constructor] → inicializa e valida o distrito
  constructor(value: string) {
    // [Valida se o distrito não está vazio]
    if (!value || value.trim().length < 2) {
      throw new Error('District deve ter pelo menos 2 caracteres');
    }
    // [Valida se o distrito não excede 50 caracteres]
    if (value.length > 50) {
      throw new Error('District deve ter no máximo 50 caracteres');
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