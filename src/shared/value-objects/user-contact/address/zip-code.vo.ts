// Representa o CEP brasileiro, validando e sanitizando o valor informado
export default class ZipCode {
  private readonly value: string;

  // [constructor] → inicializa e valida o CEP
  constructor(value: string) {
    // [Sanitiza o valor removendo caracteres não numéricos]
    const sanitized = ZipCode.sanitize(value);
    // [Valida se o CEP possui exatamente 8 dígitos]
    if (!/^\d{8}$/.test(sanitized)) {
      throw new Error('ZipCode deve conter exatamente 8 dígitos numéricos');
    }
    this.value = sanitized;
  }

  // [sanitize] → remove caracteres não numéricos do CEP
  static sanitize(value: string): string {
    return value.replace(/\D/g, '');
  }

  // [fetchAddressData] → busca dados de endereço na API ViaCEP
  async fetchAddressData(): Promise<any> {
    const response = await fetch(`https://viacep.com.br/ws/${this.value}/json/`);
    if (!response.ok) throw new Error('Erro ao buscar dados no ViaCEP');
    return await response.json();
  }

  // [toString] → retorna o valor formatado (ex: 12345-678)
  toString(): string {
    return this.value.replace(/^(\d{5})(\d{3})$/, '$1-$2');
  }

  // [valueOf] → retorna o valor puro
  valueOf(): string {
    return this.value;
  }
}