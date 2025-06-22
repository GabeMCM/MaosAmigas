//[class Cep] -> Define a classe Cep como um Value Object.
class Cep {
  //[private readonly value] -> Armazena o valor do CEP.
  private readonly value: string;

  //[constructor(value: string)] -> Construtor da classe Cep, recebe o valor e o valida.
  constructor(value: string) {
    //[this.validate(value)] -> Chama o método de validação do CEP.
    this.validate(value);
    //[this.value = this.format(value)] -> Atribui o valor formatado ao atributo.
    this.value = this.format(value);
  }

  //[private validate(cep: string)] -> Realiza as validações do CEP.
  private validate(cep: string): void {
    //[const cleanCep = cep.replace(/\D/g, '')] -> Remove caracteres não numéricos para validação.
    const cleanCep = cep.replace(/\D/g, '');

    //[if (cleanCep.length !== 8)] -> Verifica se o CEP tem exatamente 8 dígitos.
    if (cleanCep.length !== 8) {
      //[throw new Error('CEP deve ter exatamente 8 dígitos numéricos.')] -> Lança erro se o comprimento for inválido.
      throw new Error('CEP deve ter exatamente 8 dígitos numéricos.');
    }

    //[if (!/^\d{8}$/.test(cleanCep))] -> Verifica se o CEP contém apenas dígitos numéricos após a limpeza.
    if (!/^\d{8}$/.test(cleanCep)) {
      //[throw new Error('CEP pode conter hífen, mas deve ser numérico.')] -> Lança erro se contiver caracteres inválidos.
      throw new Error('CEP pode conter hífen, mas deve ser numérico.');
    }

    //[// Validação simplificada de faixa válida de CEP, para fins de exemplo] -> Comentário de depuração sobre a validação.
    //[// Em um cenário real, esta validação pode ser mais complexa, usando um banco de dados de CEPs, por exemplo.] -> Comentário de depuração sobre a complexidade da validação.
    //[if (parseInt(cleanCep.substring(0, 5)) < 10000 || parseInt(cleanCep.substring(0, 5)) > 99999)] -> Verifica se os primeiros 5 dígitos estão em uma faixa razoável.
    if (parseInt(cleanCep.substring(0, 5)) < 10000 || parseInt(cleanCep.substring(0, 5)) > 99999) {
      //[throw new Error('CEP fora de faixa válida.')] -> Lança erro se o CEP estiver fora de uma faixa válida.
      throw new Error('CEP fora de faixa válida.');
    }
  }

  //[private format(cep: string)] -> Formata o CEP para exibição.
  private format(cep: string): string {
    //[const cleanCep = cep.replace(/\D/g, '')] -> Remove caracteres não numéricos antes de formatar.
    const cleanCep = cep.replace(/\D/g, '');
    //[return cleanCep.replace(/(\d{5})(\d{3})/, '$1-$2')] -> Retorna o CEP formatado como 00000-000.
    return cleanCep.replace(/(\d{5})(\d{3})/, '$1-$2');
  }

  //[public getValue()] -> Retorna o valor formatado do CEP.
  public getValue(): string {
    //[return this.value] -> Retorna o valor do CEP.
    return this.value;
  }

  //[public equals(other: Cep)] -> Compara se dois objetos Cep são iguais.
  public equals(other: Cep): boolean {
    //[return other.getValue() === this.value] -> Compara o valor do outro CEP com o valor deste CEP.
    return other.getValue() === this.value;
  }
}
//[export { Cep }] -> Exporta a classe Cep.
export { Cep };
