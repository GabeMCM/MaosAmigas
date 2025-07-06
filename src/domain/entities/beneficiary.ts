// src/domain/entities/beneficiary.ts
// [import { User } from './user'] → Importa a entidade base User
import { User } from './user';
// [import { Id } from '../../shared/value-objects/id/id'] → Importa o VO Id
import { Id } from '../../shared/value-objects/id/id';
// [import { Name } from '../../shared/value-objects/name/name'] → Importa o VO Name
import { Name } from '../../shared/value-objects/name/name';
// [import { Email } from '../../shared/value-objects/email/email'] → Importa o VO Email
import { Email } from '../../shared/value-objects/email/email';
// [import { Password } from '../../shared/value-objects/password/password'] → Importa o VO Password
import { Password } from '../../shared/value-objects/password/password';
// [import { BirthDate } from '../../shared/value-objects/birth-date/birth-date'] → Importa o VO BirthDate
import { BirthDate } from '../../shared/value-objects/birth-date/birth-date';
// [import { Contact } from '../../shared/value-objects/contact/contact'] → Importa o VO Contact
import { Contact } from '../../shared/value-objects/contact/contact';

// [export class Beneficiary extends User] → Define a entidade Beneficiary, que herda de User
export class Beneficiary extends User {
  // [private _registrationDate: Date] → Declara a data de registro do beneficiário
  private _registrationDate: Date;
  // [private _notes?: string] → Declara notas opcionais sobre o beneficiário
  private _notes?: string;

  // [constructor( ... )] → Inicializa a entidade Beneficiary com os dados fornecidos
  constructor(
    id: Id,
    name: Name,
    email: Email,
    password: Password,
    registrationDate: Date,
    birthDate?: BirthDate,
    contact?: Contact,
    notes?: string
  ) {
    // [super(id, name, email, password, birthDate, contact)] → Chama o construtor da classe pai (User)
    super(id, name, email, password, birthDate, contact);
    // [this._registrationDate = registrationDate] → Atribui a data de registro
    this._registrationDate = registrationDate;
    // [this._notes = notes] → Atribui as notas
    this._notes = notes;
  }

  // [public get registrationDate(): Date] → Retorna a data de registro
  public get registrationDate(): Date {
    return this._registrationDate;
  }

  // [public set registrationDate(registrationDate: Date)] → Atualiza a data de registro
  public set registrationDate(registrationDate: Date) {
    this._registrationDate = registrationDate;
  }

  // [public get notes(): string | undefined] → Retorna as notas
  public get notes(): string | undefined {
    return this._notes;
  }

  // [public set notes(notes: string | undefined)] → Atualiza as notas
  public set notes(notes: string | undefined) {
    this._notes = notes;
  }
}