// tests/domain/validators/donor.validator.spec.ts
import { validateDonor } from '../../../src/domain/validators/donor.validator';
import { Donor } from '../../../src/domain/entities/donor';
import { Id } from '../../../src/shared/value-objects/id/id';
import { Name } from '../../../src/shared/value-objects/name/name';
import { Email } from '../../../src/shared/value-objects/email/email';
import { Password } from '../../../src/shared/value-objects/password/password';

describe('DonorValidator', () => {
  it('should return no errors for a valid donor', () => {
    const donor = new Donor(
      new Id(),
      new Name('Valid Name'),
      new Email('valid@email.com'),
      new Password('ValidPass123'),
      undefined,
      undefined,
      'Money'
    );
    const errors = validateDonor(donor);
    expect(errors).toEqual([]);
  });

  it('should return no errors for a donor with no preferred donation type', () => {
    const donor = new Donor(
      new Id(),
      new Name('Valid Name'),
      new Email('valid@email.com'),
      new Password('ValidPass123')
    );
    const errors = validateDonor(donor);
    expect(errors).toEqual([]);
  });

  it('should inherit errors from UserValidator', () => {
    const donor = new Donor(
      new Id(),
      null as any,
      new Email('valid@email.com'),
      new Password('ValidPass123')
    );
    const errors = validateDonor(donor);
    expect(errors).toContain('Name is required and must be a valid Name object.');
  });

  it('should return an error for an invalid preferredDonationType', () => {
    const donor = new Donor(
      new Id(),
      new Name('Valid Name'),
      new Email('valid@email.com'),
      new Password('ValidPass123'),
      undefined,
      undefined,
      123 as any
    );
    const errors = validateDonor(donor);
    expect(errors).toContain('If provided, preferredDonationType must be a string.');
  });
});
