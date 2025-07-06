// tests/domain/validators/volunteer.validator.spec.ts
import { validateVolunteer } from '../../../src/domain/validators/volunteer.validator';
import { Volunteer } from '../../../src/domain/entities/volunteer';
import { Id } from '../../../src/shared/value-objects/id/id';
import { Name } from '../../../src/shared/value-objects/name/name';
import { Email } from '../../../src/shared/value-objects/email/email';
import { Password } from '../../../src/shared/value-objects/password/password';

describe('VolunteerValidator', () => {
  it('should return no errors for a valid volunteer', () => {
    const volunteer = new Volunteer(
      new Id(),
      new Name('Valid Name'),
      new Email('valid@email.com'),
      new Password('ValidPass123'),
      undefined,
      undefined,
      ['skill1', 'skill2'],
      'weekends'
    );
    const errors = validateVolunteer(volunteer);
    expect(errors).toEqual([]);
  });

  it('should return an error for invalid skills', () => {
    const volunteer = new Volunteer(
      new Id(),
      new Name('Valid Name'),
      new Email('valid@email.com'),
      new Password('ValidPass123'),
      undefined,
      undefined,
      ['skill1', 123] as any,
      'weekends'
    );
    const errors = validateVolunteer(volunteer);
    expect(errors).toContain('If provided, skills must be an array of strings.');
  });

  it('should return an error for invalid availability', () => {
    const volunteer = new Volunteer(
      new Id(),
      new Name('Valid Name'),
      new Email('valid@email.com'),
      new Password('ValidPass123'),
      undefined,
      undefined,
      ['skill1', 'skill2'],
      123 as any
    );
    const errors = validateVolunteer(volunteer);
    expect(errors).toContain('If provided, availability must be a string.');
  });

  it('should inherit errors from UserValidator', () => {
    const volunteer = new Volunteer(
      new Id(),
      null as any,
      new Email('valid@email.com'),
      new Password('ValidPass123')
    );
    const errors = validateVolunteer(volunteer);
    expect(errors).toContain('Name is required and must be a valid Name object.');
  });
});
