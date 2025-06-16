// src/core/value-objects/name.ts

export class Name {                                                         // [DEPURAÇÃO] Classe Name para encapsular e validar nomes conforme regras do domínio
  private readonly _value: string;                                          // [DEPURAÇÃO] Armazena o valor validado do nome de forma imutável

  constructor(name: string) {                                               // [DEPURAÇÃO] Construtor que recebe string e valida conforme regras
    this._value = this.check(name);                                         // [DEPURAÇÃO] Chama método de validação durante construção
  }

  private check(name: string): string {                                     // [DEPURAÇÃO] Método privado que implementa as regras de validação
    if (!name || name.trim().length === 0) {                                // [DEPURAÇÃO] Verifica se nome é vazio ou apenas espaços
      throw new Error('Name cannot be empty');                              // [DEPURAÇÃO] Lança erro específico para nome vazio
    }

    const invalidChars = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;       // [DEPURAÇÃO] Regex para detectar caracteres inválidos
    if (invalidChars.test(name)) {                                          // [DEPURAÇÃO] Testa se nome contém caracteres proibidos
      throw new Error('Name cannot contain special characters or numbers'); // [DEPURAÇÃO] Lança erro específico para caracteres inválidos
    }

    return name.trim();                                                     // [DEPURAÇÃO] Retorna nome validado com espaços removidos
  }

  public get value(): string {                                              // [DEPURAÇÃO] Getter para acessar o valor validado
    return this._value;                                                     // [DEPURAÇÃO] Retorna o nome armazenado
  }

  public equals(other: Name): boolean {                                     // [DEPURAÇÃO] Compara igualdade com outro objeto Name
    return this._value === other.value;                                     // [DEPURAÇÃO] Retorna true se valores forem iguais
  }

  public toString(): string {                                               // [DEPURAÇÃO] Converte o objeto para representação string
    return this._value;                                                     // [DEPURAÇÃO] Retorna o valor do nome como string
  }
}