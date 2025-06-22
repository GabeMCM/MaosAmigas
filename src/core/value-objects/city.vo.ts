//[class City] -> Define a classe City como um Value Object para nomes de cidades.
class City {
  //[private readonly value] -> Armazena o valor do nome da cidade.
  private readonly value: string;

  //[constructor(value: string)] -> Construtor da classe City, recebe o valor e o valida.
  constructor(value: string) {
    //[this.validate(value)] -> Chama o método de validação do nome da cidade.
    this.validate(value);
    //[this.value = value] -> Atribui o valor ao atributo.
    this.value = value;
  }

  //[private validate(city: string)] -> Realiza as validações do nome da cidade.
  private validate(city: string): void {
    //[if (!city || city.trim() === '')] -> Verifica se o nome da cidade não é vazio.
    if (!city || city.trim() === '') {
      //[throw new Error('Nome da cidade não pode ser vazio.')] -> Lança erro se o nome for vazio.
      throw new Error('Nome da cidade não pode ser vazio.');
    }

    //[if (!/^[a-zA-Z\s]*$/.test(city))] -> Verifica se contém apenas letras e espaços.
    if (!/^[a-zA-Z\s]*$/.test(city)) {
      //[throw new Error('Nome da cidade deve conter apenas letras e espaços.')] -> Lança erro se contiver caracteres inválidos.
      throw new Error('Nome da cidade deve conter apenas letras e espaços.');
    }

    //[if (city.length < 2 || city.length > 50)] -> Verifica o comprimento mínimo e máximo do nome da cidade.
    if (city.length < 2 || city.length > 50) {
      //[throw new Error('Nome da cidade deve ter entre 2 e 50 caracteres.')] -> Lança erro se o comprimento for inválido.
      throw new Error('Nome da cidade deve ter entre 2 e 50 caracteres.');
    }
  }

  //[public getValue()] -> Retorna o valor do nome da cidade.
  public getValue(): string {
    //[return this.value] -> Retorna o valor da cidade.
    return this.value;
  }

  //[public equals(other: City)] -> Compara se dois objetos City são iguais.
  public equals(other: City): boolean {
    //[return other.getValue() === this.value] -> Compara o valor da outra City com o valor desta City.
    return other.getValue() === this.value;
  }
}
//[export { City }] -> Exporta a classe City.
export { City };
