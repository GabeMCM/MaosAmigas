//[class Complement] -> Define a classe Complement como um Value Object para complementos de endereço.
class Complement {
  //[private readonly value] -> Armazena o valor do complemento.
  private readonly value: string;

  //[constructor(value: string)] -> Construtor da classe Complement, recebe o valor e o valida.
  constructor(value: string) {
    //[this.validate(value)] -> Chama o método de validação do complemento.
    this.validate(value);
    //[this.value = value] -> Atribui o valor ao atributo.
    this.value = value;
  }

  //[private validate(complement: string)] -> Realiza as validações do complemento.
  private validate(complement: string): void {
    //[if (complement.length > 100)] -> Verifica o comprimento máximo do complemento.
    if (complement.length > 100) {
      //[throw new Error('Complemento deve ter no máximo 100 caracteres.')] -> Lança erro se o comprimento for inválido.
      throw new Error('Complemento deve ter no máximo 100 caracteres.');
    }
    //[// O complemento pode ser vazio, então não há validação para isso.] -> Comentário de depuração sobre a permissão de vazio.
  }

  //[public getValue()] -> Retorna o valor do complemento.
  public getValue(): string {
    //[return this.value] -> Retorna o valor do complemento.
    return this.value;
  }

  //[public equals(other: Complement)] -> Compara se dois objetos Complement são iguais.
  public equals(other: Complement): boolean {
    //[return other.getValue() === this.value] -> Compara o valor do outro Complement com o valor deste Complement.
    return other.getValue() === this.value;
  }
}
//[export { Complement }] -> Exporta a classe Complement.
export { Complement };
