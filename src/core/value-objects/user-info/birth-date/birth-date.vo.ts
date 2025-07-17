// src/core/value-objects/birth-date.ts
import { format, isValid, isBefore, subYears } from 'date-fns';

export class BirthDate {
  private readonly _value: string; // Data formatada (DD/MM/YYYY)
  private readonly _date: Date;    // Objeto Date interno

  constructor(dateString: string) {
    const { cleanedValue, date } = this.validate(dateString);
    this._value = cleanedValue;
    this._date = date;
  }

  private validate(dateString: string): { cleanedValue: string; date: Date } {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) {
      throw new Error('BirthDate must be in DD/MM/YYYY format');
    }

    const [day, month, year] = dateString.split('/').map(Number);
    const parsedDate = new Date(year, month - 1, day);

    if (
      !isValid(parsedDate) ||
      parsedDate.getDate() !== day ||
      parsedDate.getMonth() !== month - 1 ||
      parsedDate.getFullYear() !== year
    ) {
      throw new Error('Invalid BirthDate');
    }

    const now = new Date();
    const minDate = subYears(now, 120); // Limite: máximo 120 anos atrás

    if (!isBefore(parsedDate, now)) {
      throw new Error('BirthDate cannot be in the future');
    }

    if (!isBefore(minDate, parsedDate)) {
      throw new Error('BirthDate is too far in the past');
    }

    return {
      cleanedValue: format(parsedDate, 'dd/MM/yyyy'),
      date: parsedDate
    };
  }

  public get value(): string {
    return this._value;
  }

  public get date(): Date {
    return new Date(this._date); // Retorna uma cópia para evitar mutação externa
  }

  public get age(): number {
    const today = new Date();
    let age = today.getFullYear() - this._date.getFullYear();
    const monthDiff = today.getMonth() - this._date.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < this._date.getDate())
    ) {
      age--;
    }

    return age;
  }

  public equals(other: BirthDate): boolean {
    return this._value === other.value;
  }

  public toString(): string {
    return this._value;
  }

  public valueOf(): Date {
    // Permite usar o VO como um Date em operações (ex: calculateAge(birthDate))
    return this._date;
  }
}
