// src/shared/value-object/id.ts
import { v4 as uuidv4, validate as uuidValidate } from 'uuid';      // [DEPURAÇÃO] Importa funções da lib 'uuid' para gerar e validar identificadores únicos

/**
 * Representa um identificador único e imutável.
 * Usado como Value Object para encapsular o conceito de "ID".
 */
export class Id {                                                   // [DEPURAÇÃO] Classe ID para encapsular e gerenciar identificadores únicos
  private readonly _value: string;                                  // [DEPURAÇÃO] Armazena o valor interno do ID de forma imutável

  constructor(value?: string) {                                     // [DEPURAÇÃO] Construtor da classe Id, permite criar um ID a partir de um valor existente ou gerar um novo
    if (value && Id.isValid(value)) {                               // [DEPURAÇÃO] Se um valor for passado e for um UUID válido
      this._value = value;                                          // [DEPURAÇÃO] Define o ID com o valor fornecido
    } else {
      this._value = Id.generate();                                  // [DEPURAÇÃO] Caso contrário, gera um novo ID aleatório e único
    }
  }

  public static generate(): string {                                // [DEPURAÇÃO] Método estático para gerar um novo ID único
    return uuidv4();                                                // [DEPURAÇÃO] Retorna um UUID (versão 4) recém-gerado
  }

  public static isValid(value: string): boolean {                   // [DEPURAÇÃO] Método estático para verificar a validade de uma string como ID
    return uuidValidate(value);                                     // [DEPURAÇÃO] Utiliza a função 'uuidValidate' para checar o formato UUID
  }

  public get value(): string {                                      // [DEPURAÇÃO] Getter para acesmsar o valor encapsulado do ID
    return this._value;                                             // [DEPURAÇÃO] Retorna a string do valor do ID
  }
	
  public toString(): string {                                       // [DEPURAÇÃO] Converte o objeto Id para sua representação em string
    return this._value;                                             // [DEPURAÇÃO] Retorna o valor interno do ID como string
  }

  public equals(other: Id): boolean {                               // [DEPURAÇÃO] Compara se dois objetos Id são equivalentes
    return this._value === other.value;                             // [DEPURAÇÃO] Retorna true se os valores dos IDs forem iguais
  }
}