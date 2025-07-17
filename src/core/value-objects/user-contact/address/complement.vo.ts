// Representa o complemento do endereço, campo opcional e limitado a 50 caracteres
export default class Complement {
  private readonly value?: string;

  // [constructor] → inicializa e valida o complemento
  constructor(value?: string) {
    // [Valida se o complemento não excede 50 caracteres]
    if (value && value.length > 50) {
      throw new Error('Complement deve ter no máximo 50 caracteres');
    }
    this.value = value?.trim();
  }

  // [toString] → retorna o valor puro ou vazio
  toString(): string {
    return this.value ?? '';
  }

  // [valueOf] → retorna o valor puro ou undefined
  valueOf(): string | undefined {
    return this.value;
  }
}