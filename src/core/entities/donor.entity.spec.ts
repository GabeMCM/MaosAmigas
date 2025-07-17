// tests/domain/entities/donor.spec.ts
import { Donor } from './donor.entity';
import { Id } from '../../core/value-objects/id/id.vo';
import { Name } from '../../core/value-objects/user-info/name/name.vo';
import { Email } from '../../core/value-objects/user-contact/email/email.vo';
import { Password } from '../../core/value-objects/password/password.vo';

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
