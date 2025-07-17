// tests/domain/entities/beneficiary.spec.ts
import { Beneficiary } from './beneficiary.entity';
import { Id } from '../../core/value-objects/id/id.vo';
import { Name } from '../../core/value-objects/user-info/name/name.vo';
import { Email } from '../../core/value-objects/user-contact/email/email.vo';
import { Password } from '../../core/value-objects/password/password.vo';

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
