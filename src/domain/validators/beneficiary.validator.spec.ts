// tests/domain/validators/beneficiary.validator.spec.ts
import { validateBeneficiary } from '../../../src/domain/validators/beneficiary.validator';
import { Beneficiary } from '../../../src/domain/entities/beneficiary';
import { Id } from '../../../src/shared/value-objects/id/id';
import { Name } from '../../../src/shared/value-objects/name/name';
import { Email } from '../../../src/shared/value-objects/email/email';
import { Password } from '../../../src/shared/value-objects/password/password';

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
