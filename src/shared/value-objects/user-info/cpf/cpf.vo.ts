// src/core/value-objects/cpf.ts
import { cpf } from 'cpf-cnpj-validator';                          // [DEPURAÇÃO] Importa lib especializada em validação de CPF

export class Cpf {                                                  // [DEPURAÇÃO] Classe Cpf para encapsular e validar números de CPF
  private readonly _value: string;                                  // [DEPURAÇÃO] Armazena o CPF validado de forma imutável

  constructor(cpfValue: string) {                                   // [DEPURAÇÃO] Construtor que recebe string e valida como CPF
    this._value = this.check(cpfValue);                             // [DEPURAÇÃO] Chama validação durante construção
  }

  private check(cpfValue: string): string {                         // [DEPURAÇÃO] Método privado com regras de validação
    const cleanedValue = cpfValue.replace(/\D/g, '');               // [DEPURAÇÃO] Remove caracteres não numéricos

    if (cleanedValue.length !== 11) {                               // [DEPURAÇÃO] Verifica se tem 11 dígitos
      throw new Error('CPF must have 11 digits');                   // [DEPURAÇÃO] Lança erro para tamanho inválido
    }

    if (!cpf.isValid(cleanedValue)) {                              // [DEPURAÇÃO] Verifica se é um CPF válido
      throw new Error('Invalid CPF');                               // [DEPURAÇÃO] Lança erro para CPF inválido
    }

    return cleanedValue;                                            // [DEPURAÇÃO] Retorna CPF validado (apenas números)
  }

  public get value(): string {                                      // [DEPURAÇÃO] Getter para acessar o CPF validado
    return this._value;                                             // [DEPURAÇÃO] Retorna o valor armazenado
  }

  public get formatted(): string {                                  // [DEPURAÇÃO] Getter para CPF formatado
    return this._value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,      // [DEPURAÇÃO] Aplica máscara de formatação
      '$1.$2.$3-$4');
  }

  public equals(other: Cpf): boolean {                              // [DEPURAÇÃO] Compara igualdade com outro objeto Cpf
    return this._value === other.value;                             // [DEPURAÇÃO] Retorna true se CPFs forem iguais
  }

  public toString(): string {                                       // [DEPURAÇÃO] Converte o objeto para representação string
    return this._value;                                             // [DEPURAÇÃO] Retorna o CPF como string (sem formatação)
  }
}