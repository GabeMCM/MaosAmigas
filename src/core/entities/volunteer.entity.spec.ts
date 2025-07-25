// tests/domain/entities/volunteer.spec.ts
import { Volunteer } from './volunteer.entity';
import { Id } from '../../core/value-objects/id/id.vo';
import { Name } from '../../core/value-objects/user-info/name/name.vo';
import { Email } from '../../core/value-objects/user-contact/email/email.vo';
import { Password } from '../../core/value-objects/password/password.vo';

describe('Volunteer Entity', () => {
  it('should create a volunteer', () => {
    const id = new Id();
    const name = new Name('John Doe');
    const email = new Email('john.doe@example.com');
    const password = new Password('Password123');

    const volunteer = new Volunteer(id, name, email, password);

    expect(volunteer.id).toBe(id);
    expect(volunteer.name).toBe(name);
    expect(volunteer.email).toBe(email);
    expect(volunteer.password).toBe(password);
  });
});
