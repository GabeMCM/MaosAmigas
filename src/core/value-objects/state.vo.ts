//[class State] -> Define a classe State como um Value Object para a sigla da unidade federativa.
class State {
  //[private readonly value] -> Armazena o valor da sigla do estado.
  private readonly value: string;
  //[private static readonly VALID_STATES] -> Array estático contendo as siglas válidas dos estados brasileiros.
  private static readonly VALID_STATES: string[] = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR',
    'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  //[constructor(value: string)] -> Construtor da classe State, recebe o valor e o valida.
  constructor(value: string) {
    //[this.validate(value)] -> Chama o método de validação da sigla do estado.
    this.validate(value);
    //[this.value = value] -> Atribui o valor ao atributo.
    this.value = value;
  }

  //[private validate(state: string)] -> Realiza as validações da sigla do estado.
  private validate(state: string): void {
    //[if (state.length !== 2)] -> Verifica se a sigla tem exatamente 2 caracteres.
    if (state.length !== 2) {
      //[throw new Error('Sigla do estado deve ter exatamente 2 caracteres.')] -> Lança erro se o comprimento for inválido.
      throw new Error('Sigla do estado deve ter exatamente 2 caracteres.');
    }

    //[if (state !== state.toUpperCase())] -> Verifica se a sigla está em caixa alta.
    if (state !== state.toUpperCase()) {
      //[throw new Error('Sigla do estado deve estar em caixa alta.')] -> Lança erro se não estiver em caixa alta.
      throw new Error('Sigla do estado deve estar em caixa alta.');
    }

    //[if (!State.VALID_STATES.includes(state))] -> Verifica se a sigla está entre as siglas válidas.
    if (!State.VALID_STATES.includes(state)) {
      //[throw new Error(`Sigla de estado inválida: ${state}.`)] -> Lança erro se a sigla não for válida.
      throw new Error(`Sigla de estado inválida: ${state}.`);
    }
  }

  //[public getValue()] -> Retorna o valor da sigla do estado.
  public getValue(): string {
    //[return this.value] -> Retorna o valor do estado.
    return this.value;
  }

  //[public equals(other: State)] -> Compara se dois objetos State são iguais.
  public equals(other: State): boolean {
    //[return other.getValue() === this.value] -> Compara o valor do outro State com o valor deste State.
    return other.getValue() === this.value;
  }
}
//[export { State }] -> Exporta a classe State.
export { State };
