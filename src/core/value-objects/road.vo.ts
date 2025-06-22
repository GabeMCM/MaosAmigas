//[class Road] -> Define a classe Road como um Value Object para nomes de ruas.
class Road {
  //[private readonly value] -> Armazena o valor do nome da rua.
  private readonly value: string;

  //[constructor(value: string)] -> Construtor da classe Road, recebe o valor e o valida.
  constructor(value: string) {
    //[this.validate(value)] -> Chama o método de validação do nome da rua.
    this.validate(value);
    //[this.value = value] -> Atribui o valor ao atributo.
    this.value = value;
  }

  //[private validate(road: string)] -> Realiza as validações do nome da rua.
  private validate(road: string): void {
    //[if (!road || road.trim() === '')] -> Verifica se o nome da rua não é vazio.
    if (!road || road.trim() === '') {
      //[throw new Error('Nome da rua não pode ser vazio.')] -> Lança erro se o nome for vazio.
      throw new Error('Nome da rua não pode ser vazio.');
    }

    //[if (!/^[a-zA-Z0-9\s.,-]*$/.test(road))] -> Verifica se contém apenas caracteres alfanuméricos, espaços e símbolos permitidos.
    if (!/^[a-zA-Z0-9\s.,-]*$/.test(road)) {
      //[throw new Error('Nome da rua deve conter apenas caracteres alfanuméricos, espaços e símbolos permitidos (.,-).')] -> Lança erro se contiver caracteres inválidos.
      throw new Error('Nome da rua deve conter apenas caracteres alfanuméricos, espaços e símbolos permitidos (.,-).');
    }

    //[if (road.length < 3 || road.length > 100)] -> Verifica o comprimento mínimo e máximo do nome da rua.
    if (road.length < 3 || road.length > 100) {
      //[throw new Error('Nome da rua deve ter entre 3 e 100 caracteres.')] -> Lança erro se o comprimento for inválido.
      throw new Error('Nome da rua deve ter entre 3 e 100 caracteres.');
    }
  }

  //[public getValue()] -> Retorna o valor do nome da rua.
  public getValue(): string {
    //[return this.value] -> Retorna o valor da rua.
    return this.value;
  }

  //[public equals(other: Road)] -> Compara se dois objetos Road são iguais.
  public equals(other: Road): boolean {
    //[return other.getValue() === this.value] -> Compara o valor do outro Road com o valor deste Road.
    return other.getValue() === this.value;
  }
}
//[export { Road }] -> Exporta a classe Road.
export { Road };
