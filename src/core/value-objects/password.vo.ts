//[class Password] -> Define a classe Password como um Value Object para senhas.
class Password {
  //[private readonly value] -> Armazena o valor da senha.
  private readonly value: string;

  //[constructor(value: string)] -> Construtor da classe Password, recebe o valor e o valida.
  constructor(value: string) {
    //[this.validate(value)] -> Chama o método de validação da senha.
    this.validate(value);
    //[this.value = value] -> Atribui o valor ao atributo.
    this.value = value;
  }

  //[private validate(password: string)] -> Realiza as validações da senha.
  private validate(password: string): void {
    //[if (password.length < 6)] -> Verifica se a senha tem pelo menos 6 dígitos.
    if (password.length < 6) {
      //[throw new Error('A senha deve ter pelo menos 6 dígitos.')] -> Lança erro se o comprimento for menor que 6.
      throw new Error('A senha deve ter pelo menos 6 dígitos.');
    }

    //[if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))] -> Verifica se a senha contém pelo menos um caractere especial.
    if (!/[!@#$%^&*(),.?:{}|<>]/.test(password)) {
      //[throw new Error('A senha deve conter pelo menos um caractere especial.')] -> Lança erro se não houver caractere especial.
      throw new Error('A senha deve conter pelo menos um caractere especial.');
    }

    //[if (!/[0-9]/.test(password))] -> Verifica se a senha contém pelo menos um número.
    if (!/[0-9]/.test(password)) {
      //[throw new Error('A senha deve conter pelo menos um número.')] -> Lança erro se não houver número.
      throw new Error('A senha deve conter pelo menos um número.');
    }

    //[if (!/[A-Z]/.test(password))] -> Verifica se a senha contém pelo menos uma letra maiúscula.
    if (!/[A-Z]/.test(password)) {
      //[throw new Error('A senha deve conter pelo menos uma letra maiúscula.')] -> Lança erro se não houver letra maiúscula.
      throw new Error('A senha deve conter pelo menos uma letra maiúscula.');
    }

    //[if (!/[a-z]/.test(password))] -> Verifica se a senha contém pelo menos uma letra minúscula.
    if (!/[a-z]/.test(password)) {
      //[throw new Error('A senha deve conter pelo menos uma letra minúscula.')] -> Lança erro se não houver letra minúscula.
      throw new Error('A senha deve conter pelo menos uma letra minúscula.');
    }
  }

  //[public getValue()] -> Retorna o valor da senha.
  public getValue(): string {
    //[return this.value] -> Retorna o valor da senha.
    return this.value;
  }

  //[public equals(other: Password)] -> Compara se dois objetos Password são iguais.
  public equals(other: Password): boolean {
    //[return other.getValue() === this.value] -> Compara o valor do outro Password com o valor deste Password.
    return other.getValue() === this.value;
  }
}
//[export { Password }] -> Exporta a classe Password.
export { Password };
