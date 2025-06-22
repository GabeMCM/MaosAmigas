//[class Cpf] -> Define a classe Cpf como um Value Object para o Cadastro de Pessoa Física.
class Cpf {
  //[private readonly value] -> Armazena o valor do CPF formatado.
  private readonly value: string;

  //[constructor(value: string)] -> Construtor da classe Cpf, recebe o valor e o valida.
  constructor(value: string) {
    //[this.validate(value)] -> Chama o método de validação do CPF.
    this.validate(value);
    //[this.value = this.format(value)] -> Atribui o valor formatado ao atributo.
    this.value = this.format(value);
  }

  //[private cleanCpf(cpf: string)] -> Remove caracteres não numéricos do CPF.
  private cleanCpf(cpf: string): string {
    //[return cpf.replace(/[^\d]+/g, '')] -> Retorna o CPF apenas com dígitos numéricos.
    return cpf.replace(/[^\d]+/g, '');
  }

  //[private validate(cpf: string)] -> Realiza as validações do CPF.
  private validate(cpf: string): void {
    //[const cleanCpf = this.cleanCpf(cpf)] -> Limpa o CPF para validação.
    const cleanCpf = this.cleanCpf(cpf);

    //[if (cleanCpf.length !== 11)] -> Verifica se o CPF tem exatamente 11 dígitos.
    if (cleanCpf.length !== 11) {
      //[throw new Error('CPF deve conter 11 dígitos numéricos.')] -> Lança erro se o comprimento for inválido.
      throw new Error('CPF deve conter 11 dígitos numéricos.');
    }

    //[if (/^(\d)\1{10}$/.test(cleanCpf))] -> Verifica CPFs com todos os dígitos iguais (inválidos).
    if (/^(\d)\1{10}$/.test(cleanCpf)) {
      //[throw new Error('CPF inválido: todos os dígitos são iguais.')] -> Lança erro para CPFs com dígitos repetidos.
      throw new Error('CPF inválido: todos os dígitos são iguais.');
    }

    //[let sum = 0] -> Inicializa a soma para cálculo do primeiro dígito verificador.
    let sum = 0;
    //[let remainder] -> Declara variável para o resto da divisão.

    //[for (let i = 1; i <= 9; i++)] -> Itera para calcular o primeiro dígito verificador.
    for (let i = 1; i <= 9; i++) {
      //[sum = sum + parseInt(cleanCpf.substring(i - 1, i)) * (11 - i)] -> Soma os produtos dos dígitos.
      sum = sum + parseInt(cleanCpf.substring(i - 1, i)) * (11 - i);
    }
    //[remainder = (sum * 10) % 11] -> Calcula o resto para o primeiro dígito.

    remainder = (sum * 10) % 11;
    //[if ((remainder === 10) || (remainder === 11))] -> Ajusta o resto para 0 se for 10 ou 11.
    if ((remainder === 10) || (remainder === 11)) {
      //[remainder = 0] -> Define o resto como 0.
      remainder = 0;
    }
    //[if (remainder !== parseInt(cleanCpf.substring(9, 10)))] -> Verifica o primeiro dígito verificador.
    if (remainder !== parseInt(cleanCpf.substring(9, 10))) {
      //[throw new Error('CPF inválido: dígito verificador 1 incorreto.')] -> Lança erro se o primeiro dígito for inválido.
      throw new Error('CPF inválido: dígito verificador 1 incorreto.');
    }

    //[sum = 0] -> Reinicializa a soma para o segundo dígito verificador.
    sum = 0;
    //[for (let i = 1; i <= 10; i++)] -> Itera para calcular o segundo dígito verificador.
    for (let i = 1; i <= 10; i++) {
      //[sum = sum + parseInt(cleanCpf.substring(i - 1, i)) * (12 - i)] -> Soma os produtos dos dígitos.
      sum = sum + parseInt(cleanCpf.substring(i - 1, i)) * (12 - i);
    }
    //[remainder = (sum * 10) % 11] -> Calcula o resto para o segundo dígito.
    remainder = (sum * 10) % 11;

    //[if ((remainder === 10) || (remainder === 11))] -> Ajusta o resto para 0 se for 10 ou 11.
    if ((remainder === 10) || (remainder === 11)) {
      //[remainder = 0] -> Define o resto como 0.
      remainder = 0;
    }
    //[if (remainder !== parseInt(cleanCpf.substring(10, 11)))] -> Verifica o segundo dígito verificador.
    if (remainder !== parseInt(cleanCpf.substring(10, 11))) {
      //[throw new Error('CPF inválido: dígito verificador 2 incorreto.')] -> Lança erro se o segundo dígito for inválido.
      throw new Error('CPF inválido: dígito verificador 2 incorreto.');
    }
  }

  //[private format(cpf: string)] -> Formata o CPF para exibição.
  private format(cpf: string): string {
    //[const cleanCpf = this.cleanCpf(cpf)] -> Limpa o CPF antes de formatar.
    const cleanCpf = this.cleanCpf(cpf);
    //[return cleanCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')] -> Retorna o CPF formatado como 000.000.000-00.
    return cleanCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  //[public getValue()] -> Retorna o valor formatado do CPF.
  public getValue(): string {
    //[return this.value] -> Retorna o valor do CPF.
    return this.value;
  }

  //[public equals(other: Cpf)] -> Compara se dois objetos Cpf são iguais.
  public equals(other: Cpf): boolean {
    //[return this.cleanCpf(other.getValue()) === this.cleanCpf(this.value)] -> Compara os valores limpos dos CPFs.
    return this.cleanCpf(other.getValue()) === this.cleanCpf(this.value);
  }
}
//[export { Cpf }] -> Exporta a classe Cpf.
export { Cpf };
