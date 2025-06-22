//[import { validate as uuidValidate } from 'uuid'] -> Importa a função de validação de UUID.
import { validate as uuidValidate } from 'uuid';

//[class Id] -> Define a classe Id como um Value Object para identificadores UUIDv4.
class Id {
  //[private readonly value] -> Armazena o valor do UUID.
  private readonly value: string;

  //[constructor(value: string)] -> Construtor da classe Id, recebe o valor e o valida.
  constructor(value: string) {
    //[this.validate(value)] -> Chama o método de validação do UUID.
    this.validate(value);
    //[this.value = value] -> Atribui o valor ao atributo.
    this.value = value;
  }

  //[private validate(id: string)] -> Realiza as validações do UUID.
  private validate(id: string): void {
    //[if (id.length !== 36)] -> Verifica se o UUID tem exatamente 36 caracteres.
    if (id.length !== 36) {
      //[throw new Error('ID deve conter exatamente 36 caracteres com hífens.')] -> Lança erro se o comprimento for inválido.
      throw new Error('ID deve conter exatamente 36 caracteres com hífens.');
    }

    //[if (!uuidValidate(id))] -> Valida se é um UUIDv4 válido usando a biblioteca 'uuid'.
    if (!uuidValidate(id)) {
      //[throw new Error('ID deve ser um UUIDv4 válido.')] -> Lança erro se não for um UUIDv4 válido.
      throw new Error('ID deve ser um UUIDv4 válido.');
    }
    //[// O UUIDv4 é intrinsecamente não sequencial, a validação de "não sequencial" é garantida pela natureza do UUIDv4.] -> Comentário de depuração sobre a não sequencialidade.
  }

  //[public getValue()] -> Retorna o valor do UUID.
  public getValue(): string {
    //[return this.value] -> Retorna o valor do ID.
    return this.value;
  }

  //[public equals(other: Id)] -> Compara se dois objetos Id são iguais.
  public equals(other: Id): boolean {
    //[return other.getValue() === this.value] -> Compara o valor do outro Id com o valor deste Id.
    return other.getValue() === this.value;
  }
}
//[export { Id }] -> Exporta a classe Id.
export { Id };
