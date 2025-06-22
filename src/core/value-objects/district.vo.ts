//[class District] -> Define a classe District como um Value Object para nomes de bairros.
class District {
  //[private readonly value] -> Armazena o valor do nome do bairro.
  private readonly value: string;

  //[constructor(value: string)] -> Construtor da classe District, recebe o valor e o valida.
  constructor(value: string) {
    //[this.validate(value)] -> Chama o método de validação do nome do bairro.
    this.validate(value);
    //[this.value = value] -> Atribui o valor ao atributo.
    this.value = value;
  }

  //[private validate(district: string)] -> Realiza as validações do nome do bairro.
  private validate(district: string): void {
    //[if (!district || district.trim() === '')] -> Verifica se o nome do bairro não é vazio.
    if (!district || district.trim() === '') {
      //[throw new Error('Nome do bairro não pode ser vazio.')] -> Lança erro se o nome for vazio.
      throw new Error('Nome do bairro não pode ser vazio.');
    }

    //[if (!/^[a-zA-Z0-9\s.,-]*$/.test(district))] -> Verifica se contém apenas letras, números, espaços e alguns símbolos.
    if (!/^[a-zA-Z0-9\s.,-]*$/.test(district)) {
      //[throw new Error('Nome do bairro deve conter apenas letras, números, espaços e símbolos permitidos (.,-).')] -> Lança erro se contiver caracteres inválidos.
      throw new Error('Nome do bairro deve conter apenas letras, números, espaços e símbolos permitidos (.,-).');
    }

    //[if (district.length > 50)] -> Verifica o comprimento máximo do nome do bairro.
    if (district.length > 50) {
      //[throw new Error('Nome do bairro deve ter no máximo 50 caracteres.')] -> Lança erro se o comprimento for inválido.
      throw new Error('Nome do bairro deve ter no máximo 50 caracteres.');
    }
  }

  //[public getValue()] -> Retorna o valor do nome do bairro.
  public getValue(): string {
    //[return this.value] -> Retorna o valor do bairro.
    return this.value;
  }

  //[public equals(other: District)] -> Compara se dois objetos District são iguais.
  public equals(other: District): boolean {
    //[return other.getValue() === this.value] -> Compara o valor do outro District com o valor deste District.
    return other.getValue() === this.value;
  }
}
//[export { District }] -> Exporta a classe District.
export { District };
