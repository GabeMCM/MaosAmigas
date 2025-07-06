// tests/domain/entities/beneficiary.spec.ts
import { Beneficiary } from './beneficiary';
import { Id } from '../../shared/value-objects/id/id';
import { Name } from '../../shared/value-objects/name/name';
import { Email } from '../../shared/value-objects/email/email';
import { Password } from '../../shared/value-objects/password/password';

describe('Beneficiary Entity', () => {
  it('should create a beneficiary', () => {
    const id = new Id();
    const name = new Name('John Doe');
    const email = new Email('john.doe@example.com');
    const password = new Password('Password123');
    const registrationDate = new Date();

    const beneficiary = new Beneficiary(id, name, email, password, registrationDate);

    expect(beneficiary.id).toBe(id);
    expect(beneficiary.name).toBe(name);
    expect(beneficiary.email).toBe(email);
    expect(beneficiary.password).toBe(password);
    expect(beneficiary.registrationDate).toBe(registrationDate);
  });
});
