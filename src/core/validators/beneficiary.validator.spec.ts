// tests/domain/validators/beneficiary.validator.spec.ts
import { validateBeneficiary } from './beneficiary.validator';
import { Beneficiary } from '../entities/beneficiary.entity';
import { Id } from '../../core/value-objects/id/id.vo';
import { Name } from '../../core/value-objects/user-info/name/name.vo';
import { Email } from '../../core/value-objects/user-contact/email/email.vo';
import { Password } from '../../core/value-objects/password/password.vo';

describe('BeneficiaryValidator', () => {
  it('should return no errors for a valid beneficiary', () => {
    const beneficiary = new Beneficiary(
      new Id(),
      new Name('Valid Name'),
      new Email('valid@email.com'),
      new Password('ValidPass123'),
      new Date()
    );
    const errors = validateBeneficiary(beneficiary);
    expect(errors).toEqual([]);
  });

  it('should return an error for a future registration date', () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);
    const beneficiary = new Beneficiary(
      new Id(),
      new Name('Valid Name'),
      new Email('valid@email.com'),
      new Password('ValidPass123'),
      futureDate
    );
    const errors = validateBeneficiary(beneficiary);
    expect(errors).toContain('Registration date cannot be in the future.');
  });

  it('should inherit errors from UserValidator', () => {
    const beneficiary = new Beneficiary(
      new Id(),
      null as any,
      new Email('valid@email.com'),
      new Password('ValidPass123'),
      new Date()
    );
    const errors = validateBeneficiary(beneficiary);
    expect(errors).toContain('Name is required and must be a valid Name object.');
  });
});
