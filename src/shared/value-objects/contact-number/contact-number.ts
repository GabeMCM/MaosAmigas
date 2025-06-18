// src/core/value-objects/number-of-contact.ts
export class ContactNumber {                                      // [DEPURAÇÃO] Classe para números de telefone brasileiros
  private readonly _formattedValue: string;                        // [DEPURAÇÃO] Armazena número formatado (00) 0000-0000
  private readonly _simpleValue: string;                           // [DEPURAÇÃO] Armazena apenas dígitos (00000000000)
  private readonly _floatValue: string;                             // [DEPURAÇÃO] Armazena formato float (000.000.0000)

  constructor(phoneNumber: string) {                                // [DEPURAÇÃO] Construtor com validação integrada
    const { formatted, simple, float } = this.validate(phoneNumber); // [DEPURAÇÃO] Valida e formata
    this._formattedValue = formatted;                               // [DEPURAÇÃO] Atribui valor formatado
    this._simpleValue = simple;                                     // [DEPURAÇÃO] Atribui versão simplificada
    this._floatValue = float;                                       // [DEPURAÇÃO] Atribui versão float
  }

  private validate(input: string): {                                // [DEPURAÇÃO] Método privado de validação
    formatted: string;                                              // [DEPURAÇÃO] Tipo do retorno formatado
    simple: string;                                                 // [DEPURAÇÃO] Tipo do retorno simplificado
    float: string;                                                  // [DEPURAÇÃO] Tipo do retorno float
  } {
    const cleaned = input.replace(/\D/g, '');                       // [DEPURAÇÃO] Remove não-dígitos

    // Validação do DDD (11-99)
    const ddd = parseInt(cleaned.substring(0, 2));                  // [DEPURAÇÃO] Extrai DDD
    if (ddd < 11 || ddd > 99) {                                     // [DEPURAÇÃO] Verifica faixa válida
      throw new Error('Invalid DDD');                               // [DEPURAÇÃO] Lança erro para DDD inválido
    }

    // Validação do tamanho (10=8+2 ou 11=9+2 dígitos)
    if (![10, 11].includes(cleaned.length)) {                       // [DEPURAÇÃO] Verifica comprimento
      throw new Error('Phone number must have 10 or 11 digits');    // [DEPURAÇÃO] Lança erro para tamanho inválido
    }

    // Validação de dígitos repetidos (ex: 1111111111)
    if (/^(\d)\1+$/.test(cleaned)) {                                // [DEPURAÇÃO] Verifica dígitos iguais
      throw new Error('Invalid phone number sequence');             // [DEPURAÇÃO] Lança erro para sequência inválida
    }

    // Formatação
    const numPart = cleaned.substring(2);                           // [DEPURAÇÃO] Parte após DDD
    let formatted: string;
    
    if (numPart.length === 8) {                                    // [DEPURAÇÃO] Formato fixo (8 dígitos)
      formatted = `(${ddd}) ${numPart.substring(0, 4)}-${numPart.substring(4)}`;
    } else {                                                       // [DEPURAÇÃO] Formato móvel (9 dígitos)
      formatted = `(${ddd}) ${numPart.substring(0, 5)}-${numPart.substring(5)}`;
    }

    const float = `${ddd}${numPart.substring(0, 3)}.${numPart.substring(3, 6)}.${numPart.substring(6)}`;

    return {                                                        // [DEPURAÇÃO] Retorno da validação
      formatted,                                                    // [DEPURAÇÃO] Número formatado
      simple: cleaned,                                              // [DEPURAÇÃO] Apenas dígitos
      float                                                         // [DEPURAÇÃO] Formato float
    };
  }

  public get value(): string {                                      // [DEPURAÇÃO] Getter para número formatado
    return this._formattedValue;                                    // [DEPURAÇÃO] Retorna (00) 0000-0000
  }

  public get simpleValue(): string {                                // [DEPURAÇÃO] Getter para dígitos puros
    return this._simpleValue;                                       // [DEPURAÇÃO] Retorna 00000000000
  }

  public get floatValue(): string {                                 // [DEPURAÇÃO] Getter para formato float
    return this._floatValue;                                        // [DEPURAÇÃO] Retorna 000.000.0000
  }

  public equals(other: NumberOfContact): boolean {                  // [DEPURAÇÃO] Compara igualdade
    return this._simpleValue === other.simpleValue;                 // [DEPURAÇÃO] Compara por dígitos
  }

  public toString(): string {                                       // [DEPURAÇÃO] Converte para string
    return this._formattedValue;                                    // [DEPURAÇÃO] Retorna valor formatado
  }
}
