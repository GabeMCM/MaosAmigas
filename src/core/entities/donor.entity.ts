// src/domain/entities/donor.ts
// [import { User } from './user'] → Importa a entidade base User
import { User } from './user.entity';
// [import { Id } from '../../shared/value-objects/id/id'] → Importa o VO Id
import { Id } from '../../core/value-objects/id/id.vo';
// [import { Name } from '../../shared/value-objects/name/name'] → Importa o VO Name
import { Name } from '../../core/value-objects/user-info/name/name.vo';
// [import { Email } from '../../shared/value-objects/email/email'] → Importa o VO Email
import { Email } from '../../core/value-objects/user-contact/email/email.vo';
// [import { Password } from '../../shared/value-objects/password/password'] → Importa o VO Password
import { Password } from '../../core/value-objects/password/password.vo';
// [import { BirthDate } from '../../shared/value-objects/birth-date/birth-date'] → Importa o VO BirthDate
import { BirthDate } from '../../core/value-objects/user-info/birth-date/birth-date.vo';
// [import { Contact } from '../../shared/value-objects/contact/contact'] → Importa o VO Contact
import { Contact } from '../../core/value-objects/user-contact/user-contact.vo';

// [export class Donor extends User] → Define a entidade Donor, que herda de User
export class Donor extends User {
  // [private _preferredDonationType?: string] → Declara o tipo de doação preferencial do doador
  private _preferredDonationType?: string;

  // [constructor( ... )] → Inicializa a entidade Donor com os dados fornecidos
  constructor(
    id: Id,
    name: Name,
    email: Email,
    password: Password,
    birthDate?: BirthDate,
    contact?: Contact,
    preferredDonationType?: string
  ) {
    // [super(id, name, email, password, birthDate, contact)] → Chama o construtor da classe pai (User)
    super(id, name, email, password, birthDate, contact);
    // [this._preferredDonationType = preferredDonationType] → Atribui o tipo de doação preferencial
    this._preferredDonationType = preferredDonationType;
  }

  // [public get preferredDonationType(): string | undefined] → Retorna o tipo de doação preferencial
  public get preferredDonationType(): string | undefined {
    return this._preferredDonationType;
  }

  // [public set preferredDonationType(preferredDonationType: string | undefined)] → Atualiza o tipo de doação preferencial
  public set preferredDonationType(preferredDonationType: string | undefined) {
    this._preferredDonationType = preferredDonationType;
  }
}