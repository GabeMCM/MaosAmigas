// tests/shared/value-objects/password/password.spec.ts
import { Password } from '../../../../src/shared/value-objects/password/password';

describe('Password Value Object', () => {
  test('Should accept valid password', () => {
    const password = new Password('Valid123');
    expect(password.value).toBe('Valid123');
  });

  test('Should reject password with less than 8 characters', () => {
    expect(() => new Password('Short1')).toThrow('Password must be at least 8 characters long');
  });

  test('Should reject password without lowercase letter', () => {
    expect(() => new Password('VALID123')).toThrow('Password must include at least one lowercase letter');
  });

  test('Should reject password without uppercase letter', () => {
    expect(() => new Password('valid123')).toThrow('Password must include at least one uppercase letter');
  });

  test('Should reject password without number', () => {
    expect(() => new Password('ValidPassword')).toThrow('Password must include at least one number');
  });

  test('Equals method should compare by value', () => {
    const passwordA = new Password('Valid123');
    const passwordB = new Password('Valid123');
    const passwordC = new Password('Different123');

    expect(passwordA.equals(passwordB)).toBe(true);
    expect(passwordA.equals(passwordC)).toBe(false);
  });
});
