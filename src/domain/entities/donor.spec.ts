// tests/domain/entities/donor.spec.ts
import { Donor } from './donor';
import { Id } from '../../shared/value-objects/id/id';
import { Name } from '../../shared/value-objects/user-info/name/name.vo';
import { Email } from '../../shared/value-objects/user-contact/email/email.vo';
import { Password } from '../../shared/value-objects/password/password';

describe('Donor Entity', () => {
  it('should create a donor', () => {
    const id = new Id();
    const name = new Name('John Doe');
    const email = new Email('john.doe@example.com');
    const password = new Password('Password123');

    const donor = new Donor(id, name, email, password);

    expect(donor.id).toBe(id);
    expect(donor.name).toBe(name);
    expect(donor.email).toBe(email);
    expect(donor.password).toBe(password);
  });
});
