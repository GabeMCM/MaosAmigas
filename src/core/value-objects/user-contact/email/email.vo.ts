// src/core/value-objects/email.ts
import validator from 'validator';                                   // [DEPURAÇÃO] Importa lib para validação de emails

export class Email {                                                 // [DEPURAÇÃO] Classe Email para encapsular e validar endereços eletrônicos
  private readonly _value: string;                                   // [DEPURAÇÃO] Armazena o email validado de forma imutável

  constructor(email: string) {                                       // [DEPURAÇÃO] Construtor que recebe string e valida como email
    this._value = this.check(email);                                 // [DEPURAÇÃO] Chama validação durante construção
  }

  private check(email: string): string {                             // [DEPURAÇÃO] Método privado com regras de validação
    const trimmedEmail = email.trim();
    if (!validator.isEmail(trimmedEmail)) {                                 // [DEPURAÇÃO] Verifica formato básico de email
      throw new Error('Invalid email format');                       // [DEPURAÇÃO] Lança erro para formato inválido
    }

    if (trimmedEmail !== trimmedEmail.toLowerCase()) {                             // [DEPURAÇÃO] Verifica se contém maiúsculas
      throw new Error('Email cannot contain uppercase letters');     // [DEPURAÇÃO] Lança erro para letras maiúsculas
    }

    return trimmedEmail;                                             // [DEPURAÇÃO] Retorna email validado sem espaços
  }

  public get value(): string {                                       // [DEPURAÇÃO] Getter para acessar o email validado
    return this._value;                                              // [DEPURAÇÃO] Retorna o valor armazenado
  }

  public equals(other: Email): boolean {                             // [DEPURAÇÃO] Compara igualdade com outro objeto Email
    return this._value === other.value;                              // [DEPURAÇÃO] Retorna true se emails forem iguais
  }

  public toString(): string {                                        // [DEPURAÇÃO] Converte o objeto para representação string
    return this._value;                                              // [DEPURAÇÃO] Retorna o email como string
  }
}