// src/domain/entities/user.ts
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

// [export class User] → Define a entidade base de usuário
export class User {
  // [private readonly _id: Id] → Declara o identificador único e imutável do usuário
  private readonly _id: Id;
  // [private _name: Name] → Declara o nome do usuário
  private _name: Name;
  // [private _email: Email] → Declara o email do usuário
  private _email: Email;
  // [private _password: Password] → Declara a senha do usuário
  private _password: Password;
  // [private _birthDate?: BirthDate] → Declara a data de nascimento opcional do usuário
  private _birthDate?: BirthDate;
  // [private _contact?: Contact] → Declara o contato opcional do usuário
  private _contact?: Contact;

  // [constructor( ... )] → Inicializa a entidade User com os dados fornecidos
  constructor(
    id: Id,
    name: Name,
    email: Email,
    password: Password,
    birthDate?: BirthDate,
    contact?: Contact
  ) {
    // [this._id = id] → Atribui o Id
    this._id = id;
    // [this._name = name] → Atribui o nome
    this._name = name;
    // [this._email = email] → Atribui o email
    this._email = email;
    // [this._password = password] → Atribui a senha
    this._password = password;
    // [this._birthDate = birthDate] → Atribui a data de nascimento
    this._birthDate = birthDate;
    // [this._contact = contact] → Atribui o contato
    this._contact = contact;
  }

  // [public get id(): Id] → Retorna o Id do usuário
  public get id(): Id {
    return this._id;
  }

  // [public get name(): Name] → Retorna o nome do usuário
  public get name(): Name {
    return this._name;
  }

  // [public set name(name: Name)] → Atualiza o nome do usuário
  public set name(name: Name) {
    this._name = name;
  }

  // [public get email(): Email] → Retorna o email do usuário
  public get email(): Email {
    return this._email;
  }

  // [public set email(email: Email)] → Atualiza o email do usuário
  public set email(email: Email) {
    this._email = email;
  }

  // [public get password(): Password] → Retorna a senha do usuário
  public get password(): Password {
    return this._password;
  }

  // [public set password(password: Password)] → Atualiza a senha do usuário
  public set password(password: Password) {
    this._password = password;
  }

  // [public get birthDate(): BirthDate | undefined] → Retorna a data de nascimento do usuário
  public get birthDate(): BirthDate | undefined {
    return this._birthDate;
  }

  // [public set birthDate(birthDate: BirthDate | undefined)] → Atualiza a data de nascimento do usuário
  public set birthDate(birthDate: BirthDate | undefined) {
    this._birthDate = birthDate;
  }

  // [public get contact(): Contact | undefined] → Retorna o contato do usuário
  public get contact(): Contact | undefined {
    return this._contact;
  }

  // [public set contact(contact: Contact | undefined)] → Atualiza o contato do usuário
  public set contact(contact: Contact | undefined) {
    this._contact = contact;
  }

  // [public equals(other: User): boolean] → Compara se dois usuários são iguais pelo Id
  public equals(other: User): boolean {
    return this.id.equals(other.id);
  }
}