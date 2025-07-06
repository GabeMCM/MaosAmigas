// tests/domain/entities/admin.spec.ts
import { Admin } from './admin';
import { Id } from '../../shared/value-objects/id/id';
import { Name } from '../../shared/value-objects/name/name';
import { Email } from '../../shared/value-objects/email/email';
import { Password } from '../../shared/value-objects/password/password';

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
