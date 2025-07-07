// src/domain/validators/user.validator.ts
// [import { User } from '../entities/user'] → Importa a entidade User para validação
import { User } from '../entities/user';
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

// [type ValidationRule = (user: User) => string | null] → Define um tipo para regras de validação
type ValidationRule = (user: User) => string | null;

// [const isNameValid: ValidationRule = (user) =>] → Valida se o nome do usuário é uma instância válida de Name
const isNameValid: ValidationRule = (user) =>
  !user.name || !(user.name instanceof Name) ? 'Name is required and must be a valid Name object.' : null;

// [const isEmailValid: ValidationRule = (user) =>] → Valida se o email do usuário é uma instância válida de Email
const isEmailValid: ValidationRule = (user) =>
  !user.email || !(user.email instanceof Email) ? 'Email is required and must be a valid Email object.' : null;

// [const isPasswordValid: ValidationRule = (user) =>] → Valida se a senha do usuário é uma instância válida de Password
const isPasswordValid: ValidationRule = (user) =>
  !user.password || !(user.password instanceof Password)
    ? 'Password is required and must be a valid Password object.'
    : null;

// [const isBirthDateValid: ValidationRule = (user) =>] → Valida se a data de nascimento do usuário é uma instância válida de BirthDate
const isBirthDateValid: ValidationRule = (user) =>
  user.birthDate && !(user.birthDate instanceof BirthDate)
    ? 'If provided, birthDate must be a valid BirthDate object.'
    : null;

// [const isContactValid: ValidationRule = (user) =>] → Valida se o contato do usuário é uma instância válida de Contact
const isContactValid: ValidationRule = (user) =>
  user.contact && !(user.contact instanceof Contact)
    ? 'If provided, contact must be a valid Contact object.'
    : null;

// [const rules: ValidationRule[] = [ ... ]] → Agrupa todas as regras de validação
const rules: ValidationRule[] = [
  isNameValid,
  isEmailValid,
  isPasswordValid,
  isBirthDateValid,
  isContactValid,
];

// [export const validateUser = (user: User): string[] =>] → Executa todas as regras e retorna os erros
export const validateUser = (user: User): string[] =>
  rules.map((rule) => rule(user)).filter((error) => error !== null) as string[];
