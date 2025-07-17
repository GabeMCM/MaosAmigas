// tests/domain/entities/admin.spec.ts
import { Admin } from './admin.entity';
import { Id } from '../../core/value-objects/id/id.vo';
import { Name } from '../../core/value-objects/user-info/name/name.vo';
import { Email } from '../../core/value-objects/user-contact/email/email.vo';
import { Password } from '../../core/value-objects/password/password.vo';

describe('Admin Entity', () => {
  it('should create an admin', () => {
    const id = new Id();
    const name = new Name('John Doe');
    const email = new Email('john.doe@example.com');
    const password = new Password('Password123');
    const accessLevel = 1;

    const admin = new Admin(id, name, email, password, accessLevel);

    expect(admin.id).toBe(id);
    expect(admin.name).toBe(name);
    expect(admin.email).toBe(email);
    expect(admin.password).toBe(password);
    expect(admin.accessLevel).toBe(accessLevel);
  });
});
