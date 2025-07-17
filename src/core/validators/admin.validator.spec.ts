// tests/domain/validators/admin.validator.spec.ts
import { validateAdmin } from './admin.validator';
import { Admin } from '../entities/admin.entity';
import { Id } from '../../core/value-objects/id/id.vo';
import { Name } from '../../core/value-objects/user-info/name/name.vo';
import { Email } from '../../core/value-objects/user-contact/email/email.vo';
import { Password } from '../../core/value-objects/password/password.vo';

describe('AdminValidator', () => {
  it('should return no errors for a valid admin', () => {
    const admin = new Admin(
      new Id(),
      new Name('Valid Name'),
      new Email('valid@email.com'),
      new Password('ValidPass123'),
      5
    );
    const errors = validateAdmin(admin);
    expect(errors).toEqual([]);
  });

  it('should return an error for an access level less than 1', () => {
    const admin = new Admin(
      new Id(),
      new Name('Valid Name'),
      new Email('valid@email.com'),
      new Password('ValidPass123'),
      0
    );
    const errors = validateAdmin(admin);
    expect(errors).toContain('Access level must be an integer between 1 and 10.');
  });

  it('should return an error for an access level greater than 10', () => {
    const admin = new Admin(
      new Id(),
      new Name('Valid Name'),
      new Email('valid@email.com'),
      new Password('ValidPass123'),
      11
    );
    const errors = validateAdmin(admin);
    expect(errors).toContain('Access level must be an integer between 1 and 10.');
  });

  it('should return an error for a non-integer access level', () => {
    const admin = new Admin(
      new Id(),
      new Name('Valid Name'),
      new Email('valid@email.com'),
      new Password('ValidPass123'),
      5.5
    );
    const errors = validateAdmin(admin);
    expect(errors).toContain('Access level must be an integer between 1 and 10.');
  });

  it('should inherit errors from UserValidator', () => {
    const admin = new Admin(
      new Id(),
      null as any,
      new Email('valid@email.com'),
      new Password('ValidPass123'),
      5
    );
    const errors = validateAdmin(admin);
    expect(errors).toContain('Name is required and must be a valid Name object.');
  });
});
