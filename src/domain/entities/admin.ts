// src/domain/entities/admin.ts
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

// [export class Admin extends User] → Define a entidade Admin, que herda de User
export class Admin extends User {
  // [private _accessLevel: number] → Declara o nível de acesso do administrador
  private _accessLevel: number;

  // [constructor( ... )] → Inicializa a entidade Admin com os dados fornecidos
  constructor(
    id: Id,
    name: Name,
    email: Email,
    password: Password,
    accessLevel: number,
    birthDate?: BirthDate,
    contact?: Contact
  ) {
    // [super(id, name, email, password, birthDate, contact)] → Chama o construtor da classe pai (User)
    super(id, name, email, password, birthDate, contact);
    // [this._accessLevel = accessLevel] → Atribui o nível de acesso
    this._accessLevel = accessLevel;
  }

  // [public get accessLevel(): number] → Retorna o nível de acesso
  public get accessLevel(): number {
    return this._accessLevel;
  }

  // [public set accessLevel(accessLevel: number)] → Atualiza o nível de acesso
  public set accessLevel(accessLevel: number) {
    this._accessLevel = accessLevel;
  }
}