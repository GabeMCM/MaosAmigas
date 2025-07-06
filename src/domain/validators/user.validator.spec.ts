// tests/domain/validators/user.validator.spec.ts
import { validateUser } from '../../../src/domain/validators/user.validator';
import { User } from '../../../src/domain/entities/user';
import { Id } from '../../../src/shared/value-objects/id/id';
import { Name } from '../../../src/shared/value-objects/name/name';
import { Email } from '../../../src/shared/value-objects/email/email';
import { Password } from '../../../src/shared/value-objects/password/password';
import { BirthDate } from '../../../src/shared/value-objects/birth-date/birth-date';
import { Contact } from '../../../src/shared/value-objects/contact/contact';

describe('UserValidator', () => {
  it('should return no errors for a valid user', () => {
    const user = new User(
      new Id(),
      new Name('Valid Name'),
      new Email('valid@email.com'),
      new Password('ValidPass123'),
      new BirthDate('01/01/2000'),
      new Contact(new Email('contact@email.com'))
    );
    const errors = validateUser(user);
    expect(errors).toEqual([]);
  });

  it('should return an error if name is missing', () => {
    const user = new User(
      new Id(),
      null as any,
      new Email('valid@email.com'),
      new Password('ValidPass123')
    );
    const errors = validateUser(user);
    expect(errors).toContain('Name is required and must be a valid Name object.');
  });

  it('should return an error if email is missing', () => {
    const user = new User(
      new Id(),
      new Name('Valid Name'),
      null as any,
      new Password('ValidPass123')
    );
    const errors = validateUser(user);
    expect(errors).toContain('Email is required and must be a valid Email object.');
  });

  it('should return an error if password is missing', () => {
    const user = new User(
      new Id(),
      new Name('Valid Name'),
      new Email('valid@email.com'),
      null as any
    );
    const errors = validateUser(user);
    expect(errors).toContain('Password is required and must be a valid Password object.');
  });

  it('should return no errors if optional fields are missing', () => {
    const user = new User(
      new Id(),
      new Name('Valid Name'),
      new Email('valid@email.com'),
      new Password('ValidPass123')
    );
    const errors = validateUser(user);
    expect(errors).toEqual([]);
  });

  it('should return an error for invalid birthDate', () => {
    const user = new User(
      new Id(),
      new Name('Valid Name'),
      new Email('valid@email.com'),
      new Password('ValidPass123'),
      'invalid-date' as any
    );
    const errors = validateUser(user);
    expect(errors).toContain('If provided, birthDate must be a valid BirthDate object.');
  });

  it('should return an error for invalid contact', () => {
    const user = new User(
      new Id(),
      new Name('Valid Name'),
      new Email('valid@email.com'),
      new Password('ValidPass123'),
      undefined,
      'invalid-contact' as any
    );
    const errors = validateUser(user);
    expect(errors).toContain('If provided, contact must be a valid Contact object.');
  });
});