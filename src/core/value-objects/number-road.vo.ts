//[class NumberRoad] -> Define a classe NumberRoad como um Value Object para o número do endereço.
class NumberRoad {
  //[private readonly value] -> Armazena o valor do número do endereço.
  private readonly value: string;

  //[constructor(value: string)] -> Construtor da classe NumberRoad, recebe o valor e o valida.
  constructor(value: string) {
    //[this.validate(value)] -> Chama o método de validação do número do endereço.
    this.validate(value);
    //[this.value = value] -> Atribui o valor ao atributo.
    this.value = value;
  }

  //[private validate(numberRoad: string)] -> Realiza as validações do número do endereço.
  private validate(numberRoad: string): void {
    //[if (!numberRoad || numberRoad.trim() === '')] -> Verifica se o número do endereço não é vazio.
    if (!numberRoad || numberRoad.trim() === '') {
      //[throw new Error('Número do endereço não pode ser vazio.')] -> Lança erro se o número for vazio.
      throw new Error('Número do endereço não pode ser vazio.');
    }

    //[if (!/^[a-zA-Z0-9]*$/.test(numberRoad))] -> Verifica se contém apenas letras e números.
    if (!/^[a-zA-Z0-9]*$/.test(numberRoad)) {
      //[throw new Error('Número do endereço deve conter apenas letras e números (ex: 123A).')] -> Lança erro se contiver caracteres inválidos.
      throw new Error('Número do endereço deve conter apenas letras e números (ex: 123A).');
    }

    //[if (numberRoad.length > 10)] -> Verifica o comprimento máximo do número do endereço.
    if (numberRoad.length > 10) {
      //[throw new Error('Número do endereço deve ter no máximo 10 caracteres.')] -> Lança erro se o comprimento for inválido.
      throw new Error('Número do endereço deve ter no máximo 10 caracteres.');
    }
  }

  //[public getValue()] -> Retorna o valor do número do endereço.
  public getValue(): string {
    //[return this.value] -> Retorna o valor do número da rua.
    return this.value;
  }

  //[public equals(other: NumberRoad)] -> Compara se dois objetos NumberRoad são iguais.
  public equals(other: NumberRoad): boolean {
    //[return other.getValue() === this.value] -> Compara o valor do outro NumberRoad com o valor deste NumberRoad.
    return other.getValue() === this.value;
  }
}
//[export { NumberRoad }] -> Exporta a classe NumberRoad.
export { NumberRoad };
