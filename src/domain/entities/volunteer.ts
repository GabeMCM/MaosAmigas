// src/domain/entities/volunteer.ts
// [import { User } from './user'] → Importa a entidade base User
import { User } from './user';
// [import { Id } from '../../shared/value-objects/id/id'] → Importa o VO Id
import { Id } from '../../shared/value-objects/id/id';
// [import { Name } from '../../shared/value-objects/name/name'] → Importa o VO Name
import { Name } from '../../shared/value-objects/user-info/name/name.vo';
// [import { Email } from '../../shared/value-objects/email/email'] → Importa o VO Email
import { Email } from '../../shared/value-objects/user-contact/email/email.vo';
// [import { Password } from '../../shared/value-objects/password/password'] → Importa o VO Password
import { Password } from '../../shared/value-objects/password/password';
// [import { BirthDate } from '../../shared/value-objects/birth-date/birth-date'] → Importa o VO BirthDate
import { BirthDate } from '../../shared/value-objects/user-info/birth-date/birth-date.vo';
// [import { Contact } from '../../shared/value-objects/contact/contact'] → Importa o VO Contact
import { Contact } from '../../shared/value-objects/user-contact/user-contact.vo';

// [export class Volunteer extends User] → Define a entidade Volunteer, que herda de User
export class Volunteer extends User {
  // [private _skills?: string[]] → Declara as habilidades do voluntário
  private _skills?: string[];
  // [private _availability?: string] → Declara a disponibilidade do voluntário
  private _availability?: string;

  // [constructor( ... )] → Inicializa a entidade Volunteer com os dados fornecidos
  constructor(
    id: Id,
    name: Name,
    email: Email,
    password: Password,
    birthDate?: BirthDate,
    contact?: Contact,
    skills?: string[],
    availability?: string
  ) {
    // [super(id, name, email, password, birthDate, contact)] → Chama o construtor da classe pai (User)
    super(id, name, email, password, birthDate, contact);
    // [this._skills = skills] → Atribui as habilidades
    this._skills = skills;
    // [this._availability = availability] → Atribui a disponibilidade
    this._availability = availability;
  }

  // [public get skills(): string[] | undefined] → Retorna as habilidades
  public get skills(): string[] | undefined {
    return this._skills;
  }

  // [public set skills(skills: string[] | undefined)] → Atualiza as habilidades
  public set skills(skills: string[] | undefined) {
    this._skills = skills;
  }

  // [public get availability(): string | undefined] → Retorna a disponibilidade
  public get availability(): string | undefined {
    return this._availability;
  }

  // [public set availability(availability: string | undefined)] → Atualiza a disponibilidade
  public set availability(availability: string | undefined) {
    this._availability = availability;
  }
}