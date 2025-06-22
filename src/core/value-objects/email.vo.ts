//[class Email] -> Define a classe Email como um Value Object para endereços de e-mail.
class Email {
  //[private readonly value] -> Armazena o valor do e-mail.
  private readonly value: string;

  //[constructor(value: string)] -> Construtor da classe Email, recebe o valor e o valida.
  constructor(value: string) {
    //[this.validate(value)] -> Chama o método de validação do e-mail.
    this.validate(value);
    //[this.value = value.toLowerCase()] -> Atribui o valor em minúsculas ao atributo.
    this.value = value.toLowerCase();
  }

  //[private validate(email: string)] -> Realiza as validações do e-mail.
  private validate(email: string): void {
    //[if (email.includes(' '))] -> Verifica se o e-mail contém espaços.
    if (email.includes(' ')) {
      //[throw new Error('Email não pode conter espaços.')] -> Lança erro se houver espaços.
      throw new Error('Email não pode conter espaços.');
    }

    //[const atSymbolCount = (email.match(/@/g) || []).length] -> Conta o número de símbolos '@'.
    const atSymbolCount = (email.match(/@/g) || []).length;
    //[if (atSymbolCount !== 1)] -> Verifica se há exatamente um símbolo '@'.
    if (atSymbolCount !== 1) {
      //[throw new Error('Email deve conter exatamente um símbolo @.')] -> Lança erro se o número de '@' for diferente de 1.
      throw new Error('Email deve conter exatamente um símbolo @.');
    }

    //[const parts = email.split('@')] -> Divide o e-mail em partes antes e depois do '@'.
    const parts = email.split('@');
    //[const domain = parts[1]] -> Obtém o domínio do e-mail.
    const domain = parts[1];

    //[if (!domain || domain.trim() === '')] -> Verifica se o domínio não está vazio.
    if (!domain || domain.trim() === '') {
      //[throw new Error('Email deve conter domínio válido após o @.')] -> Lança erro se o domínio for vazio.
      throw new Error('Email deve conter domínio válido após o @.');
    }

    //[if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email))] -> Valida o formato geral do e-mail.
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
      //[throw new Error('Email deve seguir o formato usuário@dominio.extensão.')] -> Lança erro se o formato for inválido.
      throw new Error('Email deve seguir o formato usuário@dominio.extensão.');
    }

    //[if (email !== email.toLowerCase())] -> Verifica se o e-mail está em minúsculas.
    if (email !== email.toLowerCase()) {
      //[throw new Error('Email deve estar em minúsculas.')] -> Lança erro se não estiver em minúsculas.
      throw new Error('Email deve estar em minúsculas.');
    }
  }

  //[public getValue()] -> Retorna o valor do e-mail.
  public getValue(): string {
    //[return this.value] -> Retorna o valor do e-mail.
    return this.value;
  }

  //[public equals(other: Email)] -> Compara se dois objetos Email são iguais.
  public equals(other: Email): boolean {
    //[return other.getValue() === this.value] -> Compara o valor do outro Email com o valor deste Email.
    return other.getValue() === this.value;
  }
}
//[export { Email }] -> Exporta a classe Email.
export { Email };
