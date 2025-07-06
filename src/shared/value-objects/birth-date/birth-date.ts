// src/core/value-objects/birth-date.ts
import { parse, format, isValid, isBefore, subYears } from 'date-fns'; // [DEPURAÇÃO] Importa funções de manipulação de datas

export class BirthDate {                                            // [DEPURAÇÃO] Classe BirthDate para encapsular e validar datas de nascimento
  private readonly _value: string;                                  // [DEPURAÇÃO] Armazena a data validada de forma imutável
  private readonly _date: Date;                                     // [DEPURAÇÃO] Armazena o objeto Date para cálculos

  constructor(dateString: string) {                                 // [DEPURAÇÃO] Construtor que recebe string no formato DD/MM/AAAA
    const { cleanedValue, date } = this.check(dateString);          // [DEPURAÇÃO] Realiza validação durante construção
    this._value = cleanedValue;                                     // [DEPURAÇÃO] Atribui valor validado
    this._date = date;                                              // [DEPURAÇÃO] Atribui objeto Date
  }

  private check(dateString: string): { cleanedValue: string; date: Date } { // [DEPURAÇÃO] Método privado de validação
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) {                // [DEPURAÇÃO] Verifica formato DD/MM/AAAA
      throw new Error('BirthDate must be in DD/MM/YYYY format');    // [DEPURAÇÃO] Lança erro para formato inválido
    }

    const [day, month, year] = dateString.split('/').map(Number);
    const parsedDate = new Date(year, month - 1, day);

    if (!isValid(parsedDate) || parsedDate.getDate() !== day || parsedDate.getMonth() !== month - 1 || parsedDate.getFullYear() !== year) {
      throw new Error('Invalid BirthDate');
    }

    const currentDate = new Date();                                 // [DEPURAÇÃO] Obtém data atual
    const minDate = subYears(currentDate, 120);                     // [DEPURAÇÃO] Data mínima (120 anos atrás)

    if (!isBefore(parsedDate, currentDate)) {                       // [DEPURAÇÃO] Verifica se data é anterior à atual
      throw new Error('BirthDate cannot be in the future');         // [DEPURAÇÃO] Lança erro para data futura
    }

    if (!isBefore(minDate, parsedDate)) {                           // [DEPURAÇÃO] Verifica se data não é muito antiga
      throw new Error('BirthDate is too far in the past');          // [DEPURAÇÃO] Lança erro para data muito antiga
    }

    if (parsedDate.getFullYear() === currentDate.getFullYear()) {   // [DEPURAÇÃO] Verifica se não é do ano vigente
      throw new Error('BirthDate cannot be from current year');     // [DEPURAÇÃO] Lança erro para ano atual
    }

    return {                                                        // [DEPURAÇÃO] Retorna valores validados
      cleanedValue: format(parsedDate, 'dd/MM/yyyy'),               // [DEPURAÇÃO] Formata data consistentemente
      date: parsedDate                                              // [DEPURAÇÃO] Objeto Date para cálculos
    };
  }

  public get value(): string {                                      // [DEPURAÇÃO] Getter para data formatada
    return this._value;                                             // [DEPURAÇÃO] Retorna no formato DD/MM/AAAA
  }

  public get age(): number {                                        // [DEPURAÇÃO] Calcula idade atual
    const today = new Date();                                       // [DEPURAÇÃO] Data atual para cálculo
    let age = today.getFullYear() - this._date.getFullYear();       // [DEPURAÇÃO] Diferença de anos
    const monthDiff = today.getMonth() - this._date.getMonth();     // [DEPURAÇÃO] Diferença de meses
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this._date.getDate())) {
      age--;                                                        // [DEPURAÇÃO] Ajusta idade se aniversário não ocorreu
    }
    
    return age;                                                     // [DEPURAÇÃO] Retorna idade calculada
  }

  public equals(other: BirthDate): boolean {                        // [DEPURAÇÃO] Compara igualdade
    return this._value === other.value;                             // [DEPURAÇÃO] Retorna true se valores forem iguais
  }

  public toString(): string {                                       // [DEPURAÇÃO] Converte para string
    return this._value;                                             // [DEPURAÇÃO] Retorna data formatada
  }
}